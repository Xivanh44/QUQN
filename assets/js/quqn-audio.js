(() => {
  "use strict";

  const AUDIO_SRC = "assets/audio/QUQN_bling_crypto_loop.mp3";
  const ANIM_SRC = "assets/media/QUQN_miner_sync.webp";
  const POSTER_SRC = "assets/media/QUQN_miner_poster.webp";
  const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

  const preAnim = new Image(); preAnim.src = ANIM_SRC;
  const prePoster = new Image(); prePoster.src = POSTER_SRC;

  const style=document.createElement("style");
  style.textContent=`
    #quqn-miner-widget{
      position:fixed;top:74px;right:14px;z-index:65;
      width:clamp(118px,12vw,178px);display:grid;justify-items:center;gap:4px;
      filter:drop-shadow(0 8px 16px rgba(0,0,0,.32));user-select:none
    }
    #quqn-miner-widget img{display:block;width:100%;height:auto;object-fit:contain}
    #quqn-sound-toggle{
      border:1px solid rgba(214,176,79,.62);background:rgba(8,7,5,.88);color:#f2d786;
      border-radius:999px;padding:6px 10px;min-height:30px;
      font:800 9px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      letter-spacing:.08em;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.25);
      backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)
    }
    @media(max-width:720px){
      #quqn-miner-widget{top:65px;right:6px;width:106px}
      #quqn-sound-toggle{padding:5px 8px;min-height:27px;font-size:8px}
    }
  `;
  document.head.appendChild(style);

  const widget=document.createElement("div");
  widget.id="quqn-miner-widget";
  widget.setAttribute("aria-label","QUQN miner and music");

  const img=document.createElement("img");
  img.src=ANIM_SRC;
  img.alt="QUQN mining a token";

  const button=document.createElement("button");
  button.id="quqn-sound-toggle";
  button.type="button";
  button.textContent="♫ ON";
  button.dataset.state="on";
  button.setAttribute("aria-label","Stop QUQN music and animation");
  button.setAttribute("aria-pressed","true");

  widget.append(img,button);
  document.body.appendChild(widget);

  const audio=new Audio(AUDIO_SRC);
  audio.preload="auto";
  audio.volume=.36;
  audio.loop=false;

  let active=true;
  let audioPlaying=false;
  let restarting=false;

  function restartWebP(){
    img.src=BLANK;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{img.src=ANIM_SRC}));
  }
  function poster(){img.src=POSTER_SRC}

  function setOnUI(){
    button.textContent="♫ ON";
    button.dataset.state="on";
    button.setAttribute("aria-pressed","true");
    button.setAttribute("aria-label","Stop QUQN music and animation");
  }
  function setOffUI(){
    button.textContent="○ OFF";
    button.dataset.state="off";
    button.setAttribute("aria-pressed","false");
    button.setAttribute("aria-label","Start QUQN music and animation");
  }
  function setBlockedUI(){
    button.textContent="▶ SOUND";
    button.dataset.state="blocked";
    button.setAttribute("aria-pressed","false");
    button.setAttribute("aria-label","Start synchronized QUQN music and animation");
  }

  async function startSynced({autoplayAttempt=false}={}){
    if(restarting) return;
    restarting=true; active=true;
    try{
      audio.pause(); audio.currentTime=0;
      restartWebP();
      await new Promise(resolve=>requestAnimationFrame(resolve));
      await audio.play();
      audioPlaying=true;
      setOnUI();
    }catch(err){
      audioPlaying=false;
      // Browser autoplay rules often reject audible autoplay.
      // Keep the animation alive; the first user click restarts BOTH from zero.
      if(autoplayAttempt){
        img.src=ANIM_SRC;
        setBlockedUI();
      }else{
        poster(); active=false; setOffUI();
      }
    }finally{
      restarting=false;
    }
  }

  function stopBoth(){
    audio.pause();audio.currentTime=0;
    audioPlaying=false;active=false;
    poster();setOffUI();
  }

  button.addEventListener("click",()=>{
    if(active && audioPlaying) stopBoth();
    else if(active && !audioPlaying) startSynced(); // autoplay was blocked: re-sync on click
    else startSynced();
  });

  // Audio ~15.516 s; animation ~7.758 s => exactly two animation loops.
  audio.addEventListener("ended",()=>{ if(active) startSynced(); });

  document.addEventListener("visibilitychange",()=>{
    if(document.hidden){
      if(audioPlaying) audio.pause();
    }else if(active){
      startSynced();
    }
  });

  // Start immediately. Modern browsers may block only the AUDIO until the first
  // interaction; the animation itself still starts immediately.
  requestAnimationFrame(()=>startSynced({autoplayAttempt:true}));

  window.QUQNAudio={
    start:()=>startSynced(),
    stop:stopBoth,
    get active(){return active},
    get audioPlaying(){return audioPlaying}
  };
})();
