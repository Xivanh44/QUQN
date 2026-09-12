(() => {
  "use strict";

  const AUDIO_SRC = "assets/audio/QUQN_bling_crypto_loop.mp3";
  const ANIM_SRC = "assets/media/QUQN_miner_sync.webp";
  const POSTER_SRC = "assets/media/QUQN_miner_poster.webp";
  const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  const CLINGS = [3.40, 7.26, 11.16, 15.01];

  const preloadAnim = new Image(); preloadAnim.src = ANIM_SRC;
  const preloadPoster = new Image(); preloadPoster.src = POSTER_SRC;

  const style = document.createElement("style");
  style.textContent = `
    #quqn-miner-widget{
      position:fixed;top:74px;right:14px;z-index:65;
      width:clamp(118px,12vw,178px);display:grid;justify-items:center;gap:4px;
      filter:drop-shadow(0 8px 16px rgba(0,0,0,.32));user-select:none;
      transition:transform .25s ease,opacity .25s ease
    }
    #quqn-miner-widget:hover{transform:translateY(-3px)}
    #quqn-miner-widget img{display:block;width:100%;height:auto;object-fit:contain}
    #quqn-sound-toggle{
      border:1px solid rgba(214,176,79,.62);background:rgba(8,7,5,.88);color:#f2d786;
      border-radius:999px;padding:6px 10px;min-height:30px;min-width:70px;
      font:800 9px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      letter-spacing:.08em;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.25);
      backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)
    }
    #quqn-sound-toggle[data-state="on"]{background:rgba(58,43,8,.92);border-color:#e7bd57}
    #quqn-sound-toggle[data-state="blocked"]{animation:quqnSoundPulse 1.8s ease-in-out infinite}
    @keyframes quqnSoundPulse{50%{box-shadow:0 0 0 5px rgba(244,198,96,.10),0 4px 14px rgba(0,0,0,.25)}}
    @media(max-width:720px){
      #quqn-miner-widget{top:65px;right:6px;width:106px}
      #quqn-sound-toggle{padding:5px 8px;min-height:27px;font-size:8px}
    }
  `;
  document.head.appendChild(style);

  const widget = document.createElement("div");
  widget.id = "quqn-miner-widget";
  widget.setAttribute("aria-label","QUQN miner and music");

  const img = document.createElement("img");
  img.src = ANIM_SRC;
  img.alt = "QUQN mining a token";

  const button = document.createElement("button");
  button.id = "quqn-sound-toggle";
  button.type = "button";

  widget.append(img,button);
  document.body.appendChild(widget);

  const audio = new Audio(AUDIO_SRC);
  audio.preload = "auto";
  audio.volume = .36;
  audio.loop = false;

  let active = true;
  let soundPlaying = false;
  let restarting = false;
  let raf = 0;
  let fired = new Set();

  function restartWebP(){
    img.src = BLANK;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{img.src = ANIM_SRC}));
  }
  function poster(){ img.src = POSTER_SRC; }

  function ui(state){
    button.dataset.state = state;
    if(state==="on"){
      button.textContent="♫ ON";
      button.setAttribute("aria-pressed","true");
      button.setAttribute("aria-label","Stop QUQN music and miner animation");
    } else if(state==="blocked"){
      button.textContent="▶ SOUND";
      button.setAttribute("aria-pressed","false");
      button.setAttribute("aria-label","Start synchronized QUQN music and miner animation");
    } else {
      button.textContent="○ OFF";
      button.setAttribute("aria-pressed","false");
      button.setAttribute("aria-label","Start QUQN music and miner animation");
    }
  }

  function monitor(){
    cancelAnimationFrame(raf);
    const loop = () => {
      if(soundPlaying && !audio.paused){
        const t = audio.currentTime;
        CLINGS.forEach((c,i)=>{
          if(t >= c && t < c + .16 && !fired.has(i)){
            fired.add(i);
            document.dispatchEvent(new CustomEvent("quqn:cling",{detail:{time:c,index:i}}));
          }
        });
      }
      raf=requestAnimationFrame(loop);
    };
    raf=requestAnimationFrame(loop);
  }

  async function startSynced({autoplayAttempt=false}={}){
    if(restarting) return;
    restarting=true;
    active=true;
    fired.clear();

    try{
      audio.pause();
      audio.currentTime=0;
      restartWebP();
      await new Promise(resolve=>requestAnimationFrame(resolve));
      await audio.play();
      soundPlaying=true;
      ui("on");
      monitor();
      document.dispatchEvent(new Event("quqn:motion-on"));
    }catch(err){
      soundPlaying=false;
      if(autoplayAttempt){
        // Browsers commonly block audible autoplay. Animation still begins immediately.
        img.src=ANIM_SRC;
        ui("blocked");
        document.dispatchEvent(new Event("quqn:motion-on"));
      }else{
        active=false;
        poster();
        ui("off");
        document.dispatchEvent(new Event("quqn:motion-off"));
      }
    }finally{
      restarting=false;
    }
  }

  function stopBoth(){
    audio.pause();
    audio.currentTime=0;
    soundPlaying=false;
    active=false;
    fired.clear();
    cancelAnimationFrame(raf);
    poster();
    ui("off");
    document.dispatchEvent(new Event("quqn:motion-off"));
  }

  button.addEventListener("click",()=>{
    if(active && soundPlaying) stopBoth();
    else startSynced();
  });

  audio.addEventListener("ended",()=>{ if(active) startSynced(); });

  document.addEventListener("visibilitychange",()=>{
    if(document.hidden){
      if(soundPlaying) audio.pause();
    }else if(active){
      startSynced();
    }
  });

  ui("on");
  requestAnimationFrame(()=>startSynced({autoplayAttempt:true}));

  window.QUQNAudio = {
    start:()=>startSynced(),
    stop:stopBoth,
    get active(){return active},
    get audioPlaying(){return soundPlaying},
    get currentTime(){return audio.currentTime}
  };
})();