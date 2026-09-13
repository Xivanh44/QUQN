(() => {
  "use strict";

  const TICKER = "QUQN";
  const DIRECT_URL = `https://open-api.unisat.io/v1/indexer/brc20/${encodeURIComponent(TICKER)}/info`;
  const REFRESH_MS = 60000;
  const $ = (s) => document.querySelector(s);

  let refreshTimer = null;
  let lastGood = null;

  const fmt = (n) => {
    const lang = document.documentElement.lang === "fr" ? "fr-FR" : "en-US";
    return Number(n || 0).toLocaleString(lang);
  };

  function state(text, kind, title="") {
    const el = $("#syncState");
    if (!el) return;
    el.textContent = text;
    el.dataset.state = kind || "";
    el.title = title || text;
  }

  function normalize(payload) {
    const d = payload?.data && payload?.code === 0 ? payload.data : payload;
    if (!d || typeof d !== "object") throw new Error("No UniSat data");

    const minted = Number(d.confirmedMinted ?? d.totalMinted ?? d.minted);
    const holders = Number(d.holdersCount);
    const maxSupply = Number(d.max ?? 21000000);
    const mintLimit = Number(d.limit ?? 1000);
    const mintTimes = Number(d.mintTimes ?? 0);

    if (!Number.isFinite(minted) || minted < 0) throw new Error("Invalid minted value");
    if (!Number.isFinite(holders) || holders < 0) throw new Error("Invalid holders value");
    if (!Number.isFinite(maxSupply) || maxSupply <= 0) throw new Error("Invalid max supply");

    return { minted, holders, maxSupply, mintLimit, mintTimes };
  }

  function animateValue(el, to, {duration=700, decimals=0, suffix=""}={}) {
    if (!el) return;
    const from = Number(el.dataset.numericValue ?? String(el.textContent).replace(/[^\d.]/g,"")) || 0;
    const start = performance.now();
    const locale = document.documentElement.lang === "fr" ? "fr-FR" : "en-US";

    el.dataset.numericValue = String(to);
    el.classList.add("live-flash");
    setTimeout(() => el.classList.remove("live-flash"), 800);

    const step = now => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = from + (to - from) * eased;
      el.textContent = decimals
        ? value.toLocaleString(locale,{minimumFractionDigits:decimals,maximumFractionDigits:decimals}) + suffix
        : Math.round(value).toLocaleString(locale) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function apply(raw, source="UNISAT") {
    const d = normalize(raw);
    const pct = Math.min(100, Math.max(0, d.minted / d.maxSupply * 100));

    animateValue($("#minted"), d.minted);
    animateValue($("#holders"), d.holders);
    animateValue($("#progressPct"), pct, {decimals:2, suffix:"%"});

    const meter = $("#meterFill");
    if (meter) meter.style.width = `${Math.max(.35, pct)}%`;

    const strip = document.querySelector(".live-strip");
    if (strip) {
      strip.dataset.maxSupply = String(d.maxSupply);
      strip.dataset.mintLimit = String(d.mintLimit);
      strip.dataset.mintTimes = String(d.mintTimes);
      strip.title = `UniSat live data · ${fmt(d.mintTimes)} mint operations`;
    }

    lastGood = {...d, pct, at:Date.now()};
    try { localStorage.setItem("quqn-unisat-cache-v2", JSON.stringify(lastGood)); } catch(_) {}

    state(`LIVE · ${source}`, "live", `Updated ${new Date().toLocaleTimeString()}`);
    document.dispatchEvent(new CustomEvent("quqn:unisat-live", { detail:lastGood }));
  }

  async function fetchJSON(url, options={}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);
    try {
      const r = await fetch(url, {...options, cache:"no-store", signal:controller.signal});
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } finally {
      clearTimeout(timeout);
    }
  }

  async function getConfig() {
    try {
      return await fetchJSON("assets/config.json");
    } catch(_) {
      return {};
    }
  }

  async function refresh() {
    if (document.hidden) return;
    state("SYNC…", "syncing", "Checking UniSat");

    const cfg = await getConfig();
    const base = String(cfg?.apiBase || "").replace(/\/$/,"");

    // 1) Preferred production path: QUQN Cloudflare Worker.
    if (base) {
      try {
        const workerData = await fetchJSON(`${base}/api/token`);
        apply(workerData, "UNISAT");
        return;
      } catch(err) {
        console.warn("QUQN Worker sync failed; trying direct UniSat fallback.", err);
      }
    }

    // 2) Keyless direct fallback. UniSat allows keyless access but can throttle it.
    try {
      const direct = await fetchJSON(DIRECT_URL, {headers:{Accept:"application/json"}});
      apply(direct, "UNISAT");
      return;
    } catch(err) {
      console.warn("Direct UniSat sync failed.", err);
    }

    // 3) Honest cache fallback: never fabricate a new live figure.
    try {
      const cached = JSON.parse(localStorage.getItem("quqn-unisat-cache-v2") || "null");
      if (cached && Number.isFinite(Number(cached.minted))) {
        apply(cached, "CACHE");
        state("CACHED · UNISAT", "cached", "Last successful UniSat value stored on this device");
        return;
      }
    } catch(_) {}

    state("STATIC · CONNECT UNISAT", "offline",
      "Live sync unavailable. Configure the QUQN Worker + UniSat API token for reliable live data.");
  }

  function boot() {
    // app.js first writes its fallback values; run after it so live values win.
    setTimeout(refresh, 1200);
    refreshTimer = setInterval(refresh, REFRESH_MS);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) refresh();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, {once:true});
  } else {
    boot();
  }

  window.QUQNLive = { refresh };
})();