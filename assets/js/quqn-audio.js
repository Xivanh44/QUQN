(() => {
  "use strict";

  const AUDIO_SRC = "assets/audio/QUQN_bling_crypto_loop.mp3";
  const ANIM_SRC = "assets/media/QUQN_miner_sync.webp";
  const POSTER_SRC = "assets/media/QUQN_miner_poster.webp";
  const TRANSPARENT_PIXEL =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

  // Preload so audio and animation can start together after a visitor click.
  const animPreload = new Image();
  animPreload.src = ANIM_SRC;
  const posterPreload = new Image();
  posterPreload.src = POSTER_SRC;

  const style = document.createElement("style");
  style.textContent = `
    #quqn-miner-widget {
      position: fixed;
      top: 74px;
      right: 14px;
      z-index: 60;
      width: clamp(118px, 12vw, 178px);
      display: grid;
      justify-items: center;
      gap: 5px;
      filter: drop-shadow(0 8px 16px rgba(0,0,0,.32));
      user-select: none;
    }
    #quqn-miner-widget img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
      pointer-events: none;
    }
    #quqn-sound-toggle {
      border: 1px solid rgba(214,176,79,.62);
      background: rgba(8,7,5,.88);
      color: #f2d786;
      border-radius: 999px;
      padding: 6px 10px;
      min-height: 30px;
      font: 700 10px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      letter-spacing: .08em;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(0,0,0,.25);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
    #quqn-sound-toggle:hover { transform: translateY(-1px); }
    #quqn-sound-toggle:focus-visible {
      outline: 2px solid #f2d786;
      outline-offset: 2px;
    }
    @media (max-width: 720px) {
      #quqn-miner-widget {
        top: 66px;
        right: 7px;
        width: 108px;
      }
      #quqn-sound-toggle {
        padding: 5px 8px;
        min-height: 27px;
        font-size: 9px;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      #quqn-miner-widget img { content: url("${POSTER_SRC}"); }
    }
  `;
  document.head.appendChild(style);

  const widget = document.createElement("div");
  widget.id = "quqn-miner-widget";
  widget.setAttribute("aria-label", "QUQN miner");

  const img = document.createElement("img");
  img.src = POSTER_SRC;
  img.alt = "QUQN mining a token";

  const button = document.createElement("button");
  button.id = "quqn-sound-toggle";
  button.type = "button";
  button.setAttribute("aria-pressed", "false");
  button.textContent = "♪ PLAY SOUND";

  widget.append(img, button);
  document.body.appendChild(widget);

  const audio = new Audio(AUDIO_SRC);
  audio.preload = "auto";
  audio.volume = 0.36;
  audio.loop = false;

  let playing = false;
  let restarting = false;

  function restartWebP() {
    // Force the animated WebP back to frame 1 while keeping it browser-cached.
    img.src = TRANSPARENT_PIXEL;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        img.src = ANIM_SRC;
      });
    });
  }

  function showPoster() {
    img.src = POSTER_SRC;
  }

  async function startSynced() {
    if (restarting) return;
    restarting = true;

    try {
      audio.pause();
      audio.currentTime = 0;
      restartWebP();

      // Start sound one render frame after the WebP reset.
      // The token burst is timed at 3.40 s and again at ~11.16 s.
      await new Promise(resolve => requestAnimationFrame(resolve));
      await audio.play();

      playing = true;
      button.textContent = "♫ SOUND ON";
      button.setAttribute("aria-pressed", "true");
    } catch (err) {
      playing = false;
      showPoster();
      button.textContent = "♪ PLAY SOUND";
      button.setAttribute("aria-pressed", "false");
      console.warn("QUQN audio could not start:", err);
    } finally {
      restarting = false;
    }
  }

  function stopSynced() {
    audio.pause();
    audio.currentTime = 0;
    playing = false;
    showPoster();
    button.textContent = "♪ PLAY SOUND";
    button.setAttribute("aria-pressed", "false");
  }

  button.addEventListener("click", () => {
    if (playing) stopSynced();
    else startSynced();
  });

  // Music = ~15.516 s; WebP = ~7.76 s. Two WebP loops per music loop.
  // Restart both at the audio boundary to prevent cumulative drift.
  audio.addEventListener("ended", () => {
    if (playing) startSynced();
  });

  // Tabs can be throttled in the background; cleanly re-sync on return.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && playing) {
      audio.pause();
    } else if (!document.hidden && playing) {
      startSynced();
    }
  });
})();
