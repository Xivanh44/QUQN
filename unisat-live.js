(() => {
  "use strict";

  const TICKER = "QUQN";
  const UNISAT_URL = `https://open-api.unisat.io/v1/indexer/brc20/${encodeURIComponent(TICKER)}/info`;

  // Low-frequency refresh: immediately, then every 2 minutes while the tab is visible.
  // UniSat may rate-limit anonymous/keyless requests under load.
  const REFRESH_MS = 120000;

  const $ = (s) => document.querySelector(s);

  const fmt = (n) => {
    const lang = document.documentElement.lang === "fr" ? "fr-FR" : "en-US";
    return Number(n || 0).toLocaleString(lang);
  };

  function setState(text, kind) {
    const el = $("#syncState");
    if (!el) return;
    el.textContent = text;
    el.dataset.state = kind || "";
    el.title = kind === "live"
      ? "Live BRC-20 data from UniSat"
      : "Using the last values available on the page";
  }

  function applyData(data) {
    if (!data) throw new Error("No UniSat data");

    // Prefer confirmed data so the homepage does not count pending/unconfirmed mint activity.
    const minted = Number(
      data.confirmedMinted ??
      data.totalMinted ??
      data.minted ??
      0
    );

    const holders = Number(data.holdersCount ?? 0);
    const maxSupply = Number(data.max ?? 21000000);
    const mintLimit = Number(data.limit ?? 1000);
    const mintTimes = Number(data.mintTimes ?? 0);

    if (!(minted >= 0) || !(maxSupply > 0)) throw new Error("Invalid UniSat values");

    const pct = Math.min(100, Math.max(0, (minted / maxSupply) * 100));

    const mintedEl = $("#minted");
    const holdersEl = $("#holders");
    const pctEl = $("#progressPct");
    const meter = $("#meterFill");

    if (mintedEl) {
      mintedEl.textContent = fmt(minted);
      mintedEl.dataset.liveValue = String(minted);
    }
    if (holdersEl) {
      holdersEl.textContent = fmt(holders);
      holdersEl.dataset.liveValue = String(holders);
    }
    if (pctEl) pctEl.textContent = `${pct.toFixed(2)}%`;
    if (meter) meter.style.width = `${pct}%`;

    // Keep useful extra UniSat figures available without making the homepage heavier.
    const strip = document.querySelector(".live-strip");
    if (strip) {
      strip.dataset.maxSupply = String(maxSupply);
      strip.dataset.mintLimit = String(mintLimit);
      strip.dataset.mintTimes = String(mintTimes);
      strip.title = `UniSat live data · ${fmt(mintTimes)} mint operations`;
    }

    setState("LIVE · UNISAT", "live");

    // v6.js listens to changes in #minted, so Road to 21M updates automatically.
    document.dispatchEvent(new CustomEvent("quqn:unisat-live", {
      detail: { minted, holders, maxSupply, mintLimit, mintTimes, pct }
    }));
  }

  async function refreshUniSat() {
    if (document.hidden) return;

    setState("SYNC…", "syncing");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    try {
      const res = await fetch(UNISAT_URL, {
        method: "GET",
        headers: { "Accept": "application/json" },
        cache: "no-store",
        signal: controller.signal
      });

      if (!res.ok) throw new Error(`UniSat HTTP ${res.status}`);

      const payload = await res.json();
      if (payload?.code !== 0 || !payload?.data) {
        throw new Error(payload?.msg || "UniSat API error");
      }

      applyData(payload.data);
      localStorage.setItem("quqn-unisat-cache", JSON.stringify({
        at: Date.now(),
        data: payload.data
      }));
    } catch (err) {
      // If UniSat temporarily refuses an anonymous call, keep the site usable.
      // A cached previous live result is preferable to silently inventing a value.
      try {
        const cached = JSON.parse(localStorage.getItem("quqn-unisat-cache") || "null");
        if (cached?.data) {
          applyData(cached.data);
          setState("CACHED · UNISAT", "cached");
          return;
        }
      } catch (_) {}

      console.warn("QUQN UniSat live sync:", err);
      setState("UNISAT OFFLINE", "offline");
    } finally {
      clearTimeout(timeout);
    }
  }

  function init() {
    refreshUniSat();
    setInterval(refreshUniSat, REFRESH_MS);

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) refreshUniSat();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
