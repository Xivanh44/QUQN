(() => {
  "use strict";

  const q = (s, root=document) => root.querySelector(s);
  const qa = (s, root=document) => [...root.querySelectorAll(s)];

  // QUQN V6.3 — 36 approved Billionaire Game destinies.
  // Actual result probabilities are tier-based: 75% common / 20% rare / 5% legendary.
  // Easter eggs live in the common probability tier but keep their own reveal label.
  const destinies = [
    {title:"The Monaco Billionaire",src:"assets/gallery/destiny-01-the-monaco-billionaire.webp",tier:"common",rarity:"common",punch:"The yacht has a smaller yacht. Naturally."},
    {title:"Wall Street Coq",src:"assets/gallery/destiny-02-wall-street-coq.webp",tier:"common",rarity:"common",punch:"Still does not understand half the charts. Owns the building anyway."},
    {title:"Dubai Gold King",src:"assets/gallery/destiny-03-dubai-gold-king.webp",tier:"common",rarity:"common",punch:"Subtlety was never part of the roadmap."},
    {title:"Private Jet Coq",src:"assets/gallery/destiny-04-private-jet-coq.webp",tier:"common",rarity:"common",punch:"Economy class? QUQN has never heard of this protocol."},
    {title:"Moon Base Billionaire",src:"assets/gallery/destiny-05-moon-base-billionaire.webp",tier:"rare",rarity:"rare",punch:"Roosters cannot fly. The budget says otherwise."},
    {title:"Mars Landlord",src:"assets/gallery/destiny-06-mars-landlord.webp",tier:"common",rarity:"common",punch:"The neighbors are 54 million kilometers away. Perfect."},
    {title:"Space Yacht Captain",src:"assets/gallery/destiny-07-space-yacht-captain.webp",tier:"rare",rarity:"rare",punch:"Earth became too reasonably priced."},
    {title:"Casino Boss",src:"assets/gallery/destiny-08-casino-boss.webp",tier:"common",rarity:"common",punch:"Statistically questionable. Visually magnificent."},
    {title:"Secret Island Owner",src:"assets/gallery/destiny-09-secret-island-owner.webp",tier:"common",rarity:"common",punch:"Private beach. Publicly unreasonable confidence."},
    {title:"Supercar Collector",src:"assets/gallery/destiny-10-supercar-collector.webp",tier:"common",rarity:"common",punch:"The garage has become a liquidity problem."},
    {title:"The Crypto Whale",src:"assets/gallery/destiny-11-the-crypto-whale.webp",tier:"rare",rarity:"rare",punch:"Technically still a coq. Emotionally a whale."},
    {title:"Diamond Hands",src:"assets/gallery/destiny-12-diamond-hands.webp",tier:"rare",rarity:"rare",punch:"Paper hands were never invited."},
    {title:"The HODL Monk",src:"assets/gallery/destiny-13-the-hodl-monk.webp",tier:"common",rarity:"common",punch:"Inner peace. Outer volatility."},
    {title:"The Bull Market King",src:"assets/gallery/destiny-14-the-bull-market-king.webp",tier:"rare",rarity:"rare",punch:"He asked for a green candle. He got a stampede."},
    {title:"The Bear Market Survivor",src:"assets/gallery/destiny-15-the-bear-market-survivor.webp",tier:"rare",rarity:"rare",punch:"Markets crash. Champagne stays cold."},
    {title:"The Accidental Billionaire",src:"assets/gallery/destiny-16-the-accidental-billionaire.webp",tier:"common",rarity:"common",punch:"He clicked once. Nobody understands what happened next."},
    {title:"The Lazy Billionaire",src:"assets/gallery/destiny-17-the-lazy-billionaire.webp",tier:"common",rarity:"common",punch:"Why mine when the robots can have the character development?"},
    {title:"The Evil Genius",src:"assets/gallery/destiny-18-the-evil-genius.webp",tier:"common",rarity:"common",punch:"The machine is either genius or a very expensive toaster."},
    {title:"The Philanthropist Coq",src:"assets/gallery/destiny-19-the-philanthropist-coq.webp",tier:"common",rarity:"common",punch:"Making it rain, but with suspiciously chicken-shaped coins."},
    {title:"The Royal Coq",src:"assets/gallery/destiny-20-the-royal-coq.webp",tier:"common",rarity:"common",punch:"A throne this large was absolutely necessary."},
    {title:"The Influencer Billionaire",src:"assets/gallery/destiny-21-the-influencer-billionaire.webp",tier:"common",rarity:"common",punch:"One selfie away from financial wisdom."},
    {title:"The Football Club Owner",src:"assets/gallery/destiny-22-the-football-club-owner.webp",tier:"common",rarity:"common",punch:"He bought the club because season tickets were complicated."},
    {title:"The Art Collector",src:"assets/gallery/destiny-23-the-art-collector.webp",tier:"common",rarity:"common",punch:"Every masterpiece looks strangely familiar."},
    {title:"The Doomsday Billionaire",src:"assets/gallery/destiny-24-the-doomsday-billionaire.webp",tier:"common",rarity:"common",punch:"If the world ends, at least the minibar is stocked."},
    {title:"The Time Traveller",src:"assets/gallery/destiny-25-the-time-traveller.webp",tier:"rare",rarity:"rare",punch:"He came from 2126 to say: still no one knows."},
    {title:"The Medieval Tycoon",src:"assets/gallery/destiny-26-the-medieval-tycoon.webp",tier:"common",rarity:"common",punch:"Diversified across castles, gold and questionable feudal assets."},
    {title:"The Pirate Billionaire",src:"assets/gallery/destiny-27-the-pirate-billionaire.webp",tier:"common",rarity:"common",punch:"Not your keys, not your treasure chest."},
    {title:"The Emperor of Nothing",src:"assets/gallery/destiny-28-the-emperor-of-nothing.webp",tier:"legendary",rarity:"legendary",punch:"Unlimited authority. Zero subjects.",special:"nothing"},
    {title:"The 3 A.M. Trader",src:"assets/gallery/destiny-29-the-3-a-m-trader.webp",tier:"common",rarity:"common",punch:"Twelve screens. Four coffees. One terrible decision away from greatness."},
    {title:"Still Broke",src:"assets/gallery/destiny-30-still-broke.webp",tier:"legendary",rarity:"legendary",punch:"Plot twist: the card declined. Small coq. Same dreams.",special:"broke"},
    {title:"Nantes Coq",src:"assets/gallery/destiny-31-nantes-coq.webp",tier:"common",rarity:"easter egg",punch:"Machines de l'Île, Loire, a little Breton energy — and absolutely no modesty."},
    {title:"Guernsey Coq",src:"assets/gallery/destiny-32-guernsey-coq.webp",tier:"common",rarity:"easter egg",punch:"Offshore? He thought they meant a yacht."},
    {title:"Himeji Shogun",src:"assets/gallery/destiny-33-himeji-shogun.webp",tier:"common",rarity:"easter egg",punch:"A castle this elegant deserves an unnecessarily golden coq."},
    {title:"Frankfurt Euro Coq",src:"assets/gallery/destiny-34-frankfurt-euro-coq.webp",tier:"common",rarity:"easter egg",punch:"The ECB called. QUQN misunderstood the assignment."},
    {title:"Swiss Banker Coq",src:"assets/gallery/destiny-35-swiss-banker-coq.webp",tier:"common",rarity:"easter egg",punch:"Discretion, precision… and absolutely no intention of explaining the account."},
    {title:"Lambo Coq",src:"assets/gallery/destiny-36-lambo-coq.webp",tier:"common",rarity:"common",punch:"He skipped the roadmap and went straight to the showroom."}
  ];

  const weightedPick = () => {
    const roll = Math.random() * 100;
    const tier = roll < 75 ? "common" : (roll < 95 ? "rare" : "legendary");
    const pool = destinies.filter(x => x.tier === tier);
    return pool[Math.floor(Math.random() * pool.length)] || destinies[0];
  };

  function showDestiny(item, final=false){
    const img=q("#futureImage"), title=q("#futureTitle"), rarity=q("#futureRarity"),
          punch=q("#futurePunchline"), card=q("#futureCard");
    if(!img || !title || !card) return;
    img.src=item.src; img.alt=item.title; title.textContent=item.title;
    card.dataset.special=item.special||"";
    if(rarity){
      rarity.textContent=(item.rarity||"common").toUpperCase();
      rarity.dataset.rarity=item.rarity==="easter egg" ? "rare" : item.rarity;
    }
    if(punch) punch.textContent=item.punch||"";
    const stage=q(".future-stage");
    if(stage) stage.style.setProperty("--future-bg",`url("${item.src}")`);
    if(final){
      card.classList.remove("v6-reveal-win");
      requestAnimationFrame(()=>card.classList.add("v6-reveal-win"));
      setTimeout(()=>card.classList.remove("v6-reveal-win"),700);
      card.dataset.currentTitle=item.title;
      card.dataset.currentPunch=item.punch||"";
      scheduleHeroSideSync(60);
    }
  }

  let spinBusy=false;
  function spinV6(ev){
    if(ev){ ev.preventDefault(); ev.stopImmediatePropagation(); }
    if(spinBusy) return;
    spinBusy=true;
    const card=q("#futureCard"), button=q("#spinFuture");
    card?.classList.add("spinning");
    if(button) button.disabled=true;
    const rarity=q("#futureRarity"), punch=q("#futurePunchline");
    if(rarity) rarity.textContent="CALCULATING DESTINY…";
    if(punch) punch.textContent="QUQN is consulting absolutely no scientific data.";

    let tick=0;
    const ticks=22;
    const cycle=()=>{
      const temp=destinies[Math.floor(Math.random()*destinies.length)];
      showDestiny(temp,false);
      tick++;
      if(tick<ticks){
        const p=tick/ticks;
        const delay=42 + Math.pow(p,2.5)*155;
        setTimeout(cycle,delay);
      }else{
        const winner=weightedPick();
        showDestiny(winner,true);
        card?.classList.remove("spinning");
        if(button) button.disabled=false;
        spinBusy=false;
      }
    };
    cycle();
  }

  function hijackRoulette(){
    ["#spinFuture","#spinAgain"].forEach(sel=>{
      const el=q(sel);
      if(el) el.addEventListener("click",spinV6,{capture:true});
    });
    const share=q("#shareFuture");
    if(share) share.addEventListener("click", async ()=>{
      const card=q("#futureCard");
      const title=card?.dataset.currentTitle || q("#futureTitle")?.textContent || "QUQN billionaire destiny";
      const punch=card?.dataset.currentPunch || q("#futurePunchline")?.textContent || "";
      const text=`My QUQN billionaire destiny: ${title}. ${punch} 🐓🪙 Small Coq. Big Dreams.`;
      try{
        if(navigator.share) await navigator.share({title:"My QUQN destiny",text,url:location.href});
        else{
          await navigator.clipboard.writeText(`${text} ${location.href}`);
          share.textContent="COPIED ✓";
          setTimeout(()=>share.textContent="SHARE DESTINY ↗",1500);
        }
      }catch(_){}
    });
    // Start with a broad, universal result.
    showDestiny(destinies[0],true);
  }

  // Count up visible figures. No fake live mints: this only animates the figures already on the page.
  function parseNumber(text){ return Number(String(text).replace(/[^\d.]/g,"")) || 0; }
  function animateNumber(el, target, decimals=0, suffix="", duration=1000){
    if(!el) return;
    const start=performance.now();
    const locale=document.documentElement.lang==="fr" ? "fr-FR":"en-US";
    const frame=now=>{
      const p=Math.min(1,(now-start)/duration);
      const e=1-Math.pow(1-p,3);
      const value=target*e;
      el.textContent=decimals
        ? value.toLocaleString(locale,{minimumFractionDigits:decimals,maximumFractionDigits:decimals})+suffix
        : Math.round(value).toLocaleString(locale)+suffix;
      if(p<1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
  function animateStats(){
    const minted=q("#minted"), holders=q("#holders"), pct=q("#progressPct");
    const mintedTarget=parseNumber(minted?.textContent);
    const holdersTarget=parseNumber(holders?.textContent);
    const pctTarget=parseNumber(pct?.textContent);
    if(minted){animateNumber(minted,mintedTarget,0,"",1050); minted.closest(".live-stat")?.classList.add("v6-pop")}
    if(holders){animateNumber(holders,holdersTarget,0,"",850); holders.closest(".live-stat")?.classList.add("v6-pop")}
    if(pct) animateNumber(pct,pctTarget,2,"%",1100);
  }

  // Road to 21M: supply progress only; no price/value implication.
  const MAX=21000000;
  const milestones=[
    {at:0,label:"THE FARM",amount:0},
    {at:(100000/MAX)*100,label:"100K",amount:100000},
    {at:(1000000/MAX)*100,label:"1M",amount:1000000},
    {at:(5000000/MAX)*100,label:"5M",amount:5000000},
    {at:(10000000/MAX)*100,label:"10M",amount:10000000},
    {at:100,label:"21M",amount:MAX}
  ];
  const roadLocales={en:"en-US",fr:"fr-FR",ko:"ko-KR",pt:"pt-BR",es:"es-ES",ja:"ja-JP",ar:"ar-SA",zh:"zh-CN"};
  function roadLocale(){return roadLocales[document.documentElement.lang.split("-")[0]]||"en-US"}
  function roadText(key){return window.quqnRoadText?.(key)||({roadMilestoneFarm:"THE FARM",roadMilestoneStart:"START",roadMinted:"minted"}[key])}
  function updateRoad(){
    const mintedEl=q("#minted"), fill=q("#roadFill"), coq=q("#roadCoq"), status=q("#roadStatus");
    if(!mintedEl || !fill || !coq) return;
    const minted=parseNumber(mintedEl.textContent);
    const pct=Math.max(0,Math.min(100,(minted/MAX)*100));
    fill.style.width=pct+"%";
    coq.style.left=pct+"%";
    if(status){
      const locale=roadLocale();
      const progress=pct.toLocaleString(locale,{minimumFractionDigits:2,maximumFractionDigits:2});
      status.textContent=`${Math.round(minted).toLocaleString(locale)} / ${MAX.toLocaleString(locale)} QUQN ${roadText("roadMinted")} · ${progress}%`;
    }
    qa(".road-milestone").forEach(el=>{
      const amount=Number(el.dataset.amount)||0;
      el.classList.toggle("reached",minted>=amount);
    });
  }

  function buildRoadMilestones(){
    const wrap=q("#roadMilestones");
    if(!wrap) return;
    const locale=roadLocale();
    const compact=new Intl.NumberFormat(locale,{notation:"compact",maximumFractionDigits:0});
    wrap.innerHTML=milestones.map(m=>`
      <span class="road-milestone" data-amount="${m.amount}" style="--at:${m.at}%">
        <i></i><b>${m.amount?compact.format(m.amount):roadText("roadMilestoneFarm")}</b><small>${m.amount?m.amount.toLocaleString(locale):roadText("roadMilestoneStart")}</small>
      </span>`).join("");
  }

  function setupReveal(){
    const els=qa("main > section, .rank, .persona-grid, .community-box");
    els.forEach(el=>el.classList.add("v6-reveal"));
    if(!("IntersectionObserver" in window)){els.forEach(x=>x.classList.add("is-visible"));return}
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}})
    },{threshold:.09,rootMargin:"0px 0px -35px 0px"});
    els.forEach(el=>io.observe(el));
  }

  function setupHeroMotion(){
    const hero=q(".hero"), image=q(".hero-image");
    if(!hero || !image || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for(let i=0;i<6;i++){
      const g=document.createElement("i");
      g.className="hero-glint";
      g.style.left=(58+Math.random()*36)+"%";
      g.style.top=(15+Math.random()*65)+"%";
      g.style.animationDelay=(Math.random()*3.5)+"s";
      g.style.animationDuration=(3.2+Math.random()*3)+"s";
      hero.appendChild(g);
    }
    hero.addEventListener("pointermove",e=>{
      const r=hero.getBoundingClientRect();
      const x=((e.clientX-r.left)/r.width-.5)*-7;
      const y=((e.clientY-r.top)/r.height-.5)*-5;
      image.style.setProperty("--hero-x",x+"px");
      image.style.setProperty("--hero-y",y+"px");
    });
    hero.addEventListener("pointerleave",()=>{
      image.style.setProperty("--hero-x","0px");image.style.setProperty("--hero-y","0px");
    });
  }

  function setupSeasonAtmosphere(){
    if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layer=document.createElement("div");
    layer.id="season-atmosphere"; layer.setAttribute("aria-hidden","true");
    const symbols=["✦","◆","·","✧"];
    for(let i=0;i<15;i++){
      const s=document.createElement("span");
      s.className="season-particle";
      s.textContent=symbols[i%symbols.length];
      s.style.setProperty("--fall-left",(Math.random()*100)+"%");
      s.style.setProperty("--fall-time",(9+Math.random()*11)+"s");
      s.style.setProperty("--fall-delay",(-Math.random()*15)+"s");
      s.style.setProperty("--fall-drift",(-45+Math.random()*90)+"px");
      s.style.setProperty("--fall-opacity",(.16+Math.random()*.32));
      s.style.fontSize=(7+Math.random()*9)+"px";
      layer.appendChild(s);
    }
    document.body.appendChild(layer);
  }

  function setupMascot(){
    const fig=q("#storyMascot"), bubble=q("#quqnTalk");
    if(!fig || !bubble) return;
    const en=[
      "Euh… this plan is completely scientific.",
      "Small coq. BIG confidence.",
      "They said diversify. I bought sunglasses.",
      "Patience? We have dreams.",
      "Confidence is also an asset class.",
      "Today the farm. Tomorrow… penthouse.",
      "Risk management? Euh… next question.",
      "Please admire the financial plumage."
    ];
    const fr=[
      "Euh… ce plan est totalement scientifique.",
      "Petit coq. ÉNORME confiance.",
      "On m'a dit de diversifier. J'ai acheté des lunettes.",
      "La patience ? On a des rêves.",
      "La confiance est aussi une classe d'actifs.",
      "Aujourd'hui la ferme. Demain… le penthouse.",
      "Gestion du risque ? Euh… question suivante.",
      "Merci d'admirer le plumage financier."
    ];
    let hideTimer;
    fig.addEventListener("click",()=>{
      const isFr=document.documentElement.lang==="fr";
      const pool=isFr?fr:en;
      const line=pool[Math.floor(Math.random()*pool.length)];
      bubble.textContent=line; bubble.classList.add("show");
      fig.classList.remove("v6-wiggle"); void fig.offsetWidth; fig.classList.add("v6-wiggle");
      clearTimeout(hideTimer); hideTimer=setTimeout(()=>bubble.classList.remove("show"),3600);

      // Short character sound instead of browser text-to-speech.
      // A tiny playback-rate variation keeps repeated clicks from feeling mechanical.
      try{
        const chirp=new Audio("assets/audio/quqn-coq-chirp.mp3");
        chirp.volume=.52;
        chirp.playbackRate=.96 + Math.random()*.10;
        chirp.play().catch(()=>{});
      }catch(_){}
    });
  }


  function setupVisitGreeting(){
    const fig=q("#storyMascot"), bubble=q("#quqnTalk");
    if(!fig || !bubble) return;
    const en=[
      "I have made several excellent imaginary investments.",
      "Euh… welcome. Please ignore the risk management department.",
      "Small coq. Big dreams. Very small attention span.",
      "Today we build the empire. Tomorrow we understand what we built.",
      "Welcome back. The confidence remains irrationally strong.",
      "I checked the charts. They looked expensive.",
      "Please enter. The penthouse is currently conceptual.",
      "Emotionally, we are already billionaires.",
      "I have a strategy. Unfortunately it is mostly optimism.",
      "This website is powered by Bitcoin and unreasonable confidence."
    ];
    const fr=[
      "J'ai encore fait d'excellents investissements imaginaires.",
      "Bienvenue. Merci d'ignorer le service gestion des risques.",
      "Petit coq. Grands rêves. Très petite capacité d'attention.",
      "Aujourd'hui l'empire. Demain on comprendra comment il fonctionne.",
      "La confiance reste parfaitement déraisonnable.",
      "J'ai regardé les graphiques. Ils avaient l'air chers.",
      "Entrez. Le penthouse est encore au stade conceptuel.",
      "Émotionnellement, nous sommes déjà milliardaires.",
      "J'ai une stratégie. Malheureusement, c'est surtout de l'optimisme.",
      "Ce site fonctionne au Bitcoin et à la confiance déraisonnable."
    ];
    const pool=document.documentElement.lang==="fr"?fr:en;
    const line=pool[Math.floor(Math.random()*pool.length)];
    setTimeout(()=>{
      bubble.textContent=line;
      bubble.classList.add("show","visit-greeting");
      setTimeout(()=>bubble.classList.remove("show","visit-greeting"),4200);
    },1250);
  }


  function spawnClingCoin(){
    if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const coin=document.createElement("div");
    coin.className="cling-coin";
    coin.innerHTML='<img src="assets/logo.webp" alt="">';
    document.body.appendChild(coin);
    requestAnimationFrame(()=>coin.classList.add("fly"));
    setTimeout(()=>coin.remove(),1200);
  }

  function setupClingFX(){
    document.addEventListener("quqn:cling",spawnClingCoin);
  }


  /* ==========================================================
     LIVE COOP — UniSat holders + automatic QUQN rank cards
     ========================================================== */
  let liveCoopData = null;

  function injectCoopStyles(){
    if(q("#quqn-live-coop-style")) return;
    const style=document.createElement("style");
    style.id="quqn-live-coop-style";
    style.textContent=`
      .live-coop{margin-top:42px;padding-top:34px;border-top:1px solid rgba(244,198,96,.16)}
      .live-coop-head{display:flex;align-items:end;justify-content:space-between;gap:22px;margin-bottom:20px}
      .live-coop-head h3{margin:5px 0 4px;font-size:clamp(25px,3.4vw,40px);letter-spacing:-.035em}
      .live-coop-head p{margin:0;color:#978d7d;font-size:11px;max-width:560px}
      .live-coop-status{display:flex;align-items:center;gap:8px;white-space:nowrap;font-size:9px;font-weight:900;letter-spacing:.1em;color:#bba66d}
      .live-coop-dot{width:7px;height:7px;border-radius:50%;background:#c5a557;box-shadow:0 0 10px rgba(232,196,91,.45)}
      .live-coop-status[data-state="live"] .live-coop-dot{background:#7bd596;box-shadow:0 0 12px rgba(123,213,150,.5)}
      .live-coop-status[data-state="error"] .live-coop-dot{background:#d47b6c;box-shadow:none}
      .holder-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
      .holder-card{
        position:relative;display:grid;grid-template-columns:112px minmax(0,1fr);gap:16px;
        min-height:112px;padding:12px;border:1px solid rgba(244,198,96,.17);border-radius:18px;
        background:linear-gradient(135deg,rgba(255,255,255,.035),rgba(244,198,96,.025));
        overflow:hidden;transition:transform .28s var(--v6-ease),border-color .28s ease,box-shadow .28s ease
      }
      .holder-card:hover{transform:translateY(-3px);border-color:rgba(244,198,96,.42);box-shadow:0 18px 38px rgba(0,0,0,.23)}
      .holder-rank-no{
        position:absolute;right:11px;top:9px;color:rgba(255,224,145,.18);
        font-size:28px;font-weight:1000;letter-spacing:-.06em
      }
      .holder-card img{
        width:112px;height:112px;object-fit:cover;border-radius:13px;
        border:1px solid rgba(244,198,96,.2);background:#12100d
      }
      .holder-info{display:flex;flex-direction:column;justify-content:center;min-width:0;padding-right:25px}
      .holder-rank{display:inline-flex;align-items:center;align-self:flex-start;padding:4px 8px;border-radius:999px;
        background:rgba(244,198,96,.12);border:1px solid rgba(244,198,96,.24);
        color:#f3cf78;font-size:8px;font-weight:950;letter-spacing:.1em;text-transform:uppercase;margin-bottom:7px}
      .holder-balance{font-size:clamp(19px,2.4vw,28px);font-weight:950;color:#f3e5bd;line-height:1.05}
      .holder-balance small{font-size:9px;color:#958a78;letter-spacing:.08em}
      .holder-address{
        margin-top:7px;color:#847b70;font:700 10px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;
        overflow:hidden;text-overflow:ellipsis;white-space:nowrap
      }
      .holder-loading,.holder-error{
        grid-column:1/-1;padding:24px;border:1px dashed rgba(244,198,96,.18);border-radius:16px;
        color:#9c9180;text-align:center;font-size:11px
      }
      .coop-refresh{
        appearance:none;border:1px solid rgba(244,198,96,.24);background:rgba(255,255,255,.025);
        color:#cdb77f;border-radius:999px;padding:7px 10px;font-size:8px;font-weight:900;
        letter-spacing:.08em;cursor:pointer;margin-left:8px
      }
      .coop-refresh:hover{border-color:rgba(244,198,96,.55);color:#fff0bf}

      /* --- Viral loop: find your public Coop rank and share it on X --- */
      .coop-rank-finder{
        margin:18px 0 20px;padding:18px;border:1px solid rgba(244,198,96,.22);border-radius:18px;
        background:linear-gradient(135deg,rgba(244,198,96,.075),rgba(255,255,255,.02));
        box-shadow:0 18px 42px rgba(0,0,0,.16)
      }
      .coop-rank-finder-top{display:flex;align-items:end;justify-content:space-between;gap:18px;margin-bottom:12px}
      .coop-rank-finder h4{margin:4px 0 4px;font-size:20px;letter-spacing:-.025em;color:#f2ddb0}
      .coop-rank-finder p{margin:0;color:#8f8576;font-size:10px;line-height:1.45}
      .coop-rank-form{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px}
      .coop-rank-form input{
        min-width:0;width:100%;box-sizing:border-box;padding:12px 13px;border-radius:12px;
        border:1px solid rgba(244,198,96,.22);background:rgba(7,6,5,.72);color:#f5e7c3;
        font:700 10px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;outline:none
      }
      .coop-rank-form input:focus{border-color:rgba(244,198,96,.62);box-shadow:0 0 0 3px rgba(244,198,96,.07)}
      .coop-rank-find-btn,.coop-rank-share-btn{
        appearance:none;border:0;border-radius:12px;padding:11px 14px;cursor:pointer;
        background:linear-gradient(135deg,#fff0b6,#e6aa37 58%,#ffdc7a);color:#171006;
        font-size:9px;font-weight:1000;letter-spacing:.08em;white-space:nowrap
      }
      .coop-rank-result{display:none;grid-template-columns:74px minmax(0,1fr) auto;align-items:center;gap:14px;margin-top:13px;padding:12px;border-radius:14px;border:1px solid rgba(244,198,96,.2);background:rgba(0,0,0,.2)}
      .coop-rank-result.show{display:grid}
      .coop-rank-result img{width:74px;height:74px;object-fit:cover;border-radius:13px;border:1px solid rgba(244,198,96,.26)}
      .coop-rank-result-main{min-width:0}
      .coop-rank-result-main small{display:block;color:#9a8e7a;font-size:8px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
      .coop-rank-result-main strong{display:block;margin:3px 0 5px;color:#ffe29a;font-size:23px;line-height:1}
      .coop-rank-result-main span{display:block;color:#cdbf9f;font-size:10px}
      .coop-rank-note{margin-top:9px!important;font-size:8px!important;color:#766e64!important}
      .coop-rank-error{margin-top:10px;color:#d7a59d;font-size:10px;font-weight:750}
      .coop-rank-card-wrap{display:none;margin-top:14px;padding:12px;border-radius:16px;border:1px solid rgba(244,198,96,.18);background:rgba(0,0,0,.22)}
      .coop-rank-card-wrap.show{display:block}
      .coop-rank-canvas{display:block;width:100%;height:auto;aspect-ratio:16/9;border-radius:13px;border:1px solid rgba(244,198,96,.18);background:#100d08}
      .coop-rank-card-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
      .coop-rank-card-btn{appearance:none;border-radius:11px;padding:10px 13px;cursor:pointer;font-size:8px;font-weight:1000;letter-spacing:.08em}
      .coop-rank-card-btn.primary{border:0;background:linear-gradient(135deg,#fff0b6,#e6aa37 58%,#ffdc7a);color:#171006}
      .coop-rank-card-btn.secondary{border:1px solid rgba(244,198,96,.28);background:rgba(255,255,255,.025);color:#e6cf92}
      .coop-rank-card-help{margin-top:8px!important;color:#746c61!important;font-size:8px!important}


      /* --- HERO: 3-part QUQN dashboard --- */
      .v4-hero{min-height:780px}
      .v4-hero .attraction-layout{
        width:min(1400px,calc(100% - 36px));
        grid-template-columns:390px minmax(500px,1fr) 340px;
        grid-template-areas:"game intro coop";
        gap:18px;align-items:stretch;min-height:760px;padding:88px 0 42px
      }
      .v4-hero .attraction-intro{
        grid-area:intro;align-self:stretch;min-width:0;
        display:flex;flex-direction:column;justify-content:center;
        padding:34px 38px;
        border-radius:22px;
        border:1px solid rgba(244,198,96,.20);
        background:linear-gradient(160deg,rgba(8,7,5,.34),rgba(8,7,5,.64));
        box-shadow:0 26px 70px rgba(0,0,0,.22);
        backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)
      }
      .v4-hero .attraction-intro h1{
        font-size:clamp(58px,5.4vw,86px);line-height:.84;margin:14px 0 22px
      }
      .v4-hero .attraction-intro .hero-subtitle{font-size:16px;line-height:1.5;max-width:460px}
      .v4-hero .hero-game{
        grid-area:game;align-self:stretch;min-width:0;max-height:none;overflow:visible;
        height:100%
      }
      .v4-hero .hero-game .future-card{height:100%}
      .hero-coop-preview{grid-area:coop;height:100%}
      .v4-hero .hero-game,.v4-hero .future-card,.v4-hero .hero-future-stage{
        scrollbar-width:none
      }
      .v4-hero .hero-game::-webkit-scrollbar,.v4-hero .future-card::-webkit-scrollbar,.v4-hero .hero-future-stage::-webkit-scrollbar{
        display:none;width:0;height:0
      }

      .hero-coop-preview{
        align-self:center;min-width:0;border:1px solid rgba(244,198,96,.28);
        background:linear-gradient(155deg,rgba(13,11,8,.91),rgba(20,15,8,.78));
        border-radius:20px;padding:15px 13px 13px;box-shadow:0 26px 65px rgba(0,0,0,.32);
        backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)
      }
      .hero-coop-preview-head{display:flex;justify-content:space-between;align-items:start;gap:10px;margin-bottom:10px}
      .hero-coop-preview .kicker{font-size:8px;letter-spacing:.16em}
      .hero-coop-preview h3{font-size:23px;line-height:1;margin:4px 0 3px;letter-spacing:-.035em}
      .hero-coop-preview-count{font-size:9px;color:#9f927c;font-weight:800}
      .hero-live-pill{
        display:inline-flex;align-items:center;gap:5px;white-space:nowrap;padding:5px 7px;
        border:1px solid rgba(123,213,150,.25);border-radius:999px;color:#9ee5b2;
        font-size:7px;font-weight:950;letter-spacing:.08em;background:rgba(33,76,44,.12)
      }
      .hero-live-pill i{width:5px;height:5px;border-radius:50%;background:#7bd596;box-shadow:0 0 8px rgba(123,213,150,.75)}
      .hero-top10{display:grid;gap:5px;align-content:start}
      .hero-holder-row{
        display:grid;grid-template-columns:34px 30px minmax(0,1fr) auto;align-items:center;gap:7px;
        min-height:34px;padding:4px 7px;border-radius:11px;border:1px solid rgba(255,255,255,.045);
        background:rgba(255,255,255,.022);transition:.2s ease
      }
      .hero-holder-row:hover{background:rgba(244,198,96,.06);border-color:rgba(244,198,96,.18);transform:translateX(-2px)}
      .hero-holder-row img{width:34px;height:34px;object-fit:cover;border-radius:8px;border:1px solid rgba(244,198,96,.2)}
      .hero-place{font-size:12px;font-weight:1000;color:#d9c286}
      .hero-holder-main{min-width:0}
      .hero-holder-rank{display:block;color:#e8d49c;font-size:8px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .hero-holder-address{display:block;color:#71695f;font:650 7px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
      .hero-holder-balance{text-align:right;color:#fff0bf;font-size:10px;font-weight:950;white-space:nowrap}
      .hero-holder-balance small{display:block;color:#7e7568;font-size:6px;letter-spacing:.08em}
      .hero-holder-row[data-place="1"]{
        grid-template-columns:54px 40px minmax(0,1fr) auto;
        min-height:58px;padding:8px 10px;border-radius:14px;
        background:linear-gradient(90deg,rgba(244,198,96,.16),rgba(244,198,96,.04));
        border-color:rgba(244,198,96,.34)
      }
      .hero-holder-row[data-place="1"] img{width:54px;height:54px;border-radius:11px;box-shadow:0 0 18px rgba(244,198,96,.16)}
      .hero-holder-row[data-place="1"] .hero-place{font-size:18px}
      .hero-holder-row[data-place="1"] .hero-holder-rank{font-size:11px}
      .hero-holder-row[data-place="1"] .hero-holder-address{font-size:8px}
      .hero-holder-row[data-place="1"] .hero-holder-balance{font-size:15px}
      .hero-holder-row[data-place="1"] .hero-holder-balance small{font-size:7px}
      .hero-holder-row[data-place="2"],
      .hero-holder-row[data-place="3"]{
        grid-template-columns:42px 34px minmax(0,1fr) auto;
        min-height:46px;padding:6px 9px;border-radius:12px
      }
      .hero-holder-row[data-place="2"] img,
      .hero-holder-row[data-place="3"] img{width:42px;height:42px;border-radius:10px}
      .hero-holder-row[data-place="2"] .hero-place,
      .hero-holder-row[data-place="3"] .hero-place{font-size:15px}
      .hero-holder-row[data-place="2"] .hero-holder-rank,
      .hero-holder-row[data-place="3"] .hero-holder-rank{font-size:9px}
      .hero-holder-row[data-place="2"] .hero-holder-address,
      .hero-holder-row[data-place="3"] .hero-holder-address{font-size:7px}
      .hero-holder-row[data-place="2"] .hero-holder-balance,
      .hero-holder-row[data-place="3"] .hero-holder-balance{font-size:12px}
      .hero-coop-enter{
        display:flex;justify-content:center;align-items:center;margin-top:9px;padding:9px 10px;
        border-radius:10px;text-decoration:none;color:#171006;background:linear-gradient(135deg,#fff0b6,#e6aa37 58%,#ffdc7a);
        font-size:9px;font-weight:950;letter-spacing:.08em
      }
      .hero-coop-loading{padding:24px 8px;text-align:center;color:#8f8473;font-size:10px}

      /* --- Full Coop: premium podium on top, compact leaderboard below --- */
      .holder-grid{grid-template-columns:repeat(6,minmax(0,1fr));align-items:stretch;padding-top:12px}
      .holder-card{grid-column:span 3}
      .holder-card:nth-child(1),.holder-card:nth-child(2),.holder-card:nth-child(3){grid-column:span 2}
      .holder-card:nth-child(1){order:2;transform:translateY(-10px);border-color:rgba(255,215,105,.55);background:linear-gradient(145deg,rgba(255,213,91,.14),rgba(255,255,255,.025));box-shadow:0 22px 55px rgba(197,139,28,.12)}
      .holder-card:nth-child(2){order:1;border-color:rgba(210,220,230,.25);background:linear-gradient(145deg,rgba(205,218,230,.065),rgba(255,255,255,.02))}
      .holder-card:nth-child(3){order:3;border-color:rgba(196,130,72,.28);background:linear-gradient(145deg,rgba(190,116,54,.07),rgba(255,255,255,.02))}
      .holder-card:nth-child(n+4){order:4}
      .holder-card:nth-child(1) .holder-rank-no{color:rgba(255,225,135,.5);font-size:35px}
      .holder-card:nth-child(2) .holder-rank-no,.holder-card:nth-child(3) .holder-rank-no{color:rgba(230,220,195,.3)}
      .holder-card:nth-child(1) img{box-shadow:0 0 26px rgba(244,198,96,.17)}
      .holder-card:nth-child(1):hover{transform:translateY(-14px)}


      /* --- V3 cleanup: open center image + compact side panels --- */
      .v4-hero .attraction-intro{
        position:relative;
        justify-content:flex-end;
        padding:32px 34px 46px;
        border:0;
        border-radius:0;
        background:transparent;
        box-shadow:none;
        backdrop-filter:none;
        -webkit-backdrop-filter:none;
        overflow:visible
      }
      .v4-hero .attraction-intro:before{
        content:"";
        position:absolute;
        z-index:-1;
        left:-10%;
        right:-10%;
        bottom:0;
        height:48%;
        background:linear-gradient(0deg,rgba(5,4,3,.72),rgba(5,4,3,.34) 48%,transparent);
        pointer-events:none
      }
      .v4-hero .attraction-intro h1{
        font-size:clamp(50px,4.4vw,70px);
        line-height:.88;
        max-width:520px;
        margin:10px 0 15px;
        text-shadow:0 5px 22px rgba(0,0,0,.72)
      }
      .v4-hero .attraction-intro .hero-subtitle{
        font-size:14px;
        line-height:1.42;
        max-width:430px;
        text-shadow:0 3px 14px rgba(0,0,0,.8)
      }
      .v4-hero .attraction-intro .hero-actions{gap:9px}
      .v4-hero .attraction-intro .btn{padding:11px 14px;font-size:10px}
      .v4-hero .attraction-intro .micro-facts{margin-top:12px}

      /* Keep the Billionaire Game fully inside its column. */
      .v4-hero .hero-game{
        box-sizing:border-box;
        min-width:0;
        width:100%;
        height:auto;
        align-self:center;
        overflow:hidden
      }
      .v4-hero .hero-game-head{
        padding:16px 16px 12px
      }
      .v4-hero .hero-game-head h2{
        font-size:clamp(29px,2.6vw,42px);
        line-height:.95;
        letter-spacing:-.045em;
        margin:7px 0 9px;
        text-wrap:balance;
        overflow-wrap:normal
      }
      .v4-hero .hero-game-head p{
        font-size:11px;
        line-height:1.4;
        margin:0 0 10px
      }
      .v4-hero .hero-game .game-button{
        width:100%;
        min-width:0;
        margin-top:5px;
        padding:11px 12px;
        font-size:10px
      }
      .v4-hero .hero-future-card{
        width:calc(100% - 20px);
        margin:0 10px 10px;
        padding:9px;
        border-radius:18px;
        max-width:none;
        height:auto!important
      }
      .v4-hero .hero-future-stage{
        height:315px!important;
        min-height:0;
        border-radius:13px
      }
      .v4-hero .future-result{
        padding:11px 8px 8px
      }
      .v4-hero .future-result h3{
        font-size:22px;
        line-height:1.03;
        margin:4px 0 4px
      }
      .v4-hero #futurePunchline{
        font-size:9px;
        line-height:1.3;
        min-height:0;
        margin:4px 0 7px
      }
      .v4-hero .future-actions{gap:8px}
      .v4-hero .future-actions button{font-size:8px}
      .v4-hero .game-disclaimer{
        margin:6px 14px 12px;
        font-size:8px!important;
        line-height:1.3
      }

      /* Coop and Game remain equal side extensions. */
      .hero-coop-preview{
        align-self:center;
        height:auto;
        max-height:650px;
        overflow:hidden
      }

      /* --- V7: equal side heights WITHOUT clipping --- */
      /* JavaScript measures both panels at their natural height and matches them to the taller one. */
      .v4-hero .hero-game,
      .hero-coop-preview{
        align-self:start;
        height:auto!important;
        max-height:none!important;
        min-height:0!important;
        overflow:visible;
      }
      .v4-hero .hero-game .future-card{
        height:auto;
        min-height:0;
      }
      .hero-coop-preview{
        display:flex;
        flex-direction:column;
      }
      .hero-top10{
        flex:0 0 auto;
        align-content:start;
      }
      .hero-coop-more{margin-top:10px}
      .hero-coop-enter{margin-top:auto}

      @media(max-width:1180px){
        .v4-hero .attraction-layout{
          grid-template-columns:340px minmax(420px,1fr) 300px;
          width:min(100% - 20px,1160px);gap:12px
        }
        .v4-hero .attraction-intro{padding:28px 28px}
        .v4-hero .attraction-intro h1{font-size:clamp(52px,5vw,74px)}
        .hero-holder-row{grid-template-columns:28px 24px minmax(0,1fr) auto;gap:5px;min-height:32px;padding:4px 6px}
        .hero-holder-row img{width:28px;height:28px}
        .hero-holder-address{display:none}
        .hero-holder-row[data-place="1"]{grid-template-columns:46px 34px minmax(0,1fr) auto;min-height:52px;padding:7px 8px}
        .hero-holder-row[data-place="1"] img{width:46px;height:46px}
        .hero-holder-row[data-place="1"] .hero-place{font-size:16px}
        .hero-holder-row[data-place="1"] .hero-holder-balance{font-size:13px}
        .hero-holder-row[data-place="2"],.hero-holder-row[data-place="3"]{grid-template-columns:38px 30px minmax(0,1fr) auto;min-height:42px;padding:5px 8px}
        .hero-holder-row[data-place="2"] img,.hero-holder-row[data-place="3"] img{width:38px;height:38px}
        .hero-holder-row[data-place="2"] .hero-place,.hero-holder-row[data-place="3"] .hero-place{font-size:14px}
        .hero-holder-row[data-place="2"] .hero-holder-balance,.hero-holder-row[data-place="3"] .hero-holder-balance{font-size:11px}
      }

      @media(max-width:1180px){
        .v4-hero .hero-game-head h2{font-size:clamp(27px,2.45vw,36px)}
        .v4-hero .hero-future-stage{height:auto!important;min-height:225px}
        .v4-hero .attraction-intro h1{font-size:clamp(46px,4.6vw,64px)}
      }

      @media(max-width:980px){
        .v4-hero{min-height:auto}
        .v4-hero .attraction-layout{
          display:flex;flex-direction:column;width:min(100% - 28px,760px);
          min-height:0;padding:92px 0 44px;gap:18px
        }
        .v4-hero .attraction-intro{
          order:1;width:100%;padding:30px 24px 34px;min-height:500px;
          justify-content:flex-end
        }
        .v4-hero .attraction-intro h1{font-size:clamp(54px,10vw,82px)}
        .v4-hero .hero-game{order:2;width:100%;height:auto;min-height:0;max-height:none!important}
        .v4-hero .hero-game-head h2{font-size:clamp(34px,8vw,52px)}
        .v4-hero .hero-future-stage{height:min(72vw,460px)!important}
        .hero-coop-preview{order:3;width:100%;height:auto;min-height:0;max-height:none!important}
        .hero-top10{grid-template-columns:1fr 1fr}
        .holder-grid{grid-template-columns:1fr 1fr}
        .holder-card,.holder-card:nth-child(1),.holder-card:nth-child(2),.holder-card:nth-child(3){grid-column:auto;order:initial;transform:none}
        .holder-card:nth-child(1):hover{transform:translateY(-3px)}
      }

      @media(max-width:760px){
        .coop-rank-finder{padding:14px;margin:16px 0 18px}
        .coop-rank-finder-top{display:block}
        .coop-rank-form{grid-template-columns:1fr}
        .coop-rank-find-btn{width:100%}
        .coop-rank-result{grid-template-columns:58px minmax(0,1fr);gap:10px}
        .coop-rank-result img{width:58px;height:58px}
        .coop-rank-result .coop-rank-share-btn{grid-column:1/-1;width:100%}
        .coop-rank-card-actions{display:grid;grid-template-columns:1fr}
        .coop-rank-card-btn{width:100%}
        .live-coop-head{display:block}
        .live-coop-status{margin-top:12px}
        .holder-grid{grid-template-columns:1fr}
        .holder-card{grid-template-columns:92px minmax(0,1fr)}
        .holder-card img{width:92px;height:92px}
        .hero-top10{grid-template-columns:1fr}
        .hero-holder-row:nth-child(n+6){display:none}
        .hero-coop-preview.show-top10 .hero-holder-row:nth-child(n+6){display:grid}
        .hero-coop-more{display:block!important}
        .holder-grid{grid-template-columns:1fr}
      }
    `;
    document.head.appendChild(style);
  }

  function shortAddress(address){
    const a=String(address||"");
    return a.length>18 ? `${a.slice(0,9)}…${a.slice(-7)}` : a;
  }

  function coopText(){
    const fr=document.documentElement.lang==="fr";
    return fr ? {
      kicker:"MEMBRES EN DIRECT",
      title:"Qui est dans la Coop ?",
      intro:"Les soldes publics BRC-20 viennent de UniSat. Le rang et la carte évoluent automatiquement avec le nombre de QUQN détenus.",
      loading:"Chargement des détenteurs QUQN…",
      error:"Impossible de charger la Coop pour le moment.",
      live:"LIVE · UNISAT",
      refresh:"ACTUALISER",
      heroTitle:"THE COOP · LIVE",
      heroHolders:"détenteurs",
      enter:"ENTRER DANS LA COOP ↓",
      showMore:"VOIR PLUS",
      hideMore:"RÉDUIRE",
      findKicker:"TON RANG DANS THE COOP",
      findTitle:"Trouve ton rang et partage-le",
      findIntro:"Colle ton adresse Bitcoin publique. Aucun wallet à connecter.",
      findPlaceholder:"bc1p…",
      findButton:"TROUVER MON RANG",
      findShare:"PARTAGER MON RANG SUR X ↗",
      cardShareMobile:"PARTAGER LA CARTE",
      cardShareDesktop:"OUVRIR X AVEC LE TEXTE ↗",
      cardSave:"ENREGISTRER MA CARTE ↓",
      cardHelpMobile:"Sur mobile, partage directement la carte avec l’image.",
      cardHelpDesktop:"Sur ordinateur : enregistre la carte, ouvre X avec le texte prérempli, puis ajoute l’image téléchargée.",
      findNotFound:"Cette adresse n’apparaît pas parmi les détenteurs QUQN actuels.",
      findEmpty:"Colle d’abord ton adresse Bitcoin.",
      findNote:"La vérification se fait dans ton navigateur avec les données publiques UniSat. Cette fonction n’envoie pas l’adresse saisie."
    } : {
      kicker:"LIVE MEMBERS",
      title:"Who is in the Coop?",
      intro:"Public BRC-20 balances come from UniSat. Each holder's rank and card update automatically with the QUQN balance.",
      loading:"Loading QUQN holders…",
      error:"The Coop cannot be loaded right now.",
      live:"LIVE · UNISAT",
      refresh:"REFRESH",
      heroTitle:"THE COOP · LIVE",
      heroHolders:"holders",
      enter:"ENTER THE COOP ↓",
      showMore:"SHOW MORE",
      hideMore:"SHOW LESS",
      findKicker:"YOUR COOP RANK",
      findTitle:"Find your rank and share it",
      findIntro:"Paste your public Bitcoin address. No wallet connection needed.",
      findPlaceholder:"bc1p…",
      findButton:"FIND MY RANK",
      findShare:"SHARE MY RANK ON X ↗",
      cardShareMobile:"SHARE THE CARD",
      cardShareDesktop:"OPEN X WITH TEXT ↗",
      cardSave:"SAVE MY CARD ↓",
      cardHelpMobile:"On mobile, share the card directly with the image.",
      cardHelpDesktop:"On desktop: save the card, open X with the prefilled text, then attach the downloaded image.",
      findNotFound:"This address is not among the current QUQN holders.",
      findEmpty:"Paste your Bitcoin address first.",
      findNote:"The check runs in your browser against public UniSat data. This feature does not send the address you type."
    };
  }


  let sideHeightTimer=0;

  function clearHeroSideHeights(){
    const game=q("#billionaire"), coop=q("#heroCoopPreview");
    [game,coop].forEach(el=>{
      if(!el) return;
      el.style.removeProperty("height");
      el.style.removeProperty("min-height");
      el.style.removeProperty("max-height");
    });
  }

  function syncHeroSideHeights(){
    const game=q("#billionaire"), coop=q("#heroCoopPreview");
    if(!game || !coop) return;

    if(window.innerWidth<=980){
      clearHeroSideHeights();
      return;
    }

    [game,coop].forEach(el=>{
      el.style.setProperty("height","auto","important");
      el.style.setProperty("min-height","0","important");
      el.style.setProperty("max-height","none","important");
    });

    requestAnimationFrame(()=>{
      const gameHeight=Math.ceil(game.scrollHeight);
      const coopHeight=Math.ceil(coop.scrollHeight);
      const target=Math.max(gameHeight,coopHeight);
      if(!target) return;
      [game,coop].forEach(el=>{
        el.style.setProperty("height",`${target}px`,"important");
        el.style.setProperty("min-height",`${target}px`,"important");
        el.style.setProperty("max-height",`${target}px`,"important");
      });
    });
  }

  function scheduleHeroSideSync(delay=40){
    clearTimeout(sideHeightTimer);
    sideHeightTimer=setTimeout(syncHeroSideHeights,delay);
  }

  function setupHeroSideSync(){
    const img=q("#futureImage");
    img?.addEventListener("load",()=>scheduleHeroSideSync(20));
    window.addEventListener("resize",()=>{
      scheduleHeroSideSync(120);
      updateRankCardShareUI();
    },{passive:true});
    scheduleHeroSideSync(600);
  }

  function ensureHeroCoopPreview(){
    const layout=q(".v4-hero .attraction-layout");
    const game=q("#billionaire");
    if(!layout || !game) return null;
    let preview=q("#heroCoopPreview");
    if(preview) return preview;

    preview=document.createElement("aside");
    preview.id="heroCoopPreview";
    preview.className="hero-coop-preview";
    preview.setAttribute("aria-label","The Coop live preview");
    preview.innerHTML=`
      <div class="hero-coop-preview-head">
        <div>
          <span class="kicker">ON-CHAIN</span>
          <h3 id="heroCoopTitle">THE COOP · LIVE</h3>
          <div id="heroCoopCount" class="hero-coop-preview-count">—</div>
        </div>
        <span class="hero-live-pill"><i></i>UNISAT</span>
      </div>
      <div id="heroTop10" class="hero-top10">
        <div class="hero-coop-loading">Connecting to the Coop…</div>
      </div>
      <button id="heroCoopMore" class="coop-refresh hero-coop-more" type="button" style="display:none;margin:9px auto 0">SHOW TOP 10</button>
      <a id="heroCoopEnter" class="hero-coop-enter" href="#liveCoop">ENTER THE COOP ↓</a>`;

    game.insertAdjacentElement("afterend",preview);

    q("#heroCoopMore")?.addEventListener("click",()=>{
      preview.classList.toggle("show-top10");
      const t=coopText();
      q("#heroCoopMore").textContent=preview.classList.contains("show-top10")?t.hideMore:t.showMore;
      scheduleHeroSideSync(30);
    });
    return preview;
  }

  function renderHeroCoop(data){
    const preview=ensureHeroCoopPreview();
    if(!preview) return;
    const pill=preview.querySelector(".hero-live-pill");if(pill) pill.innerHTML="<i></i>UNISAT";
    const t=coopText();
    const locale=document.documentElement.lang==="fr"?"fr-FR":"en-US";
    const holders=[...(data.holders||[])]
      .sort((a,b)=>Number(b.overallBalance||0)-Number(a.overallBalance||0))
      .slice(0,12);

    q("#heroCoopTitle").textContent=t.heroTitle;
    q("#heroCoopCount").textContent=`${Number(data.total || data.holders?.length || 0)} ${t.heroHolders}`;
    q("#heroCoopEnter").textContent=t.enter;
    q("#heroCoopMore").textContent=preview.classList.contains("show-top10")?t.hideMore:t.showMore;

    const list=q("#heroTop10");
    if(!list) return;
    list.innerHTML=holders.map((h,index)=>{
      const rank=h.rank||"QUQN Holder";
      const image=h.rankImage||"assets/logo.webp";
      const balance=Number(h.overallBalance||0);
      const addr=String(h.address||"");
      return `<div class="hero-holder-row" data-place="${index+1}">
        <img src="${image}" alt="" loading="lazy" onerror="this.src='assets/logo.webp'">
        <span class="hero-place">#${index+1}</span>
        <span class="hero-holder-main">
          <b class="hero-holder-rank">${rank}</b>
          <small class="hero-holder-address">${shortAddress(addr)}</small>
        </span>
        <span class="hero-holder-balance">${balance.toLocaleString(locale)}<small>QUQN</small></span>
      </div>`;
    }).join("");
    const more=q("#heroCoopMore");
    if(more) more.hidden=holders.length<=5;
    scheduleHeroSideSync(30);
  }

  let currentMyRank = null;

  function rankShareText(match){
    const balance=Number(match.holder.overallBalance||0).toLocaleString("en-US");
    const rank=match.holder.rank||"QUQN Holder";
    return `🐓 I’m #${match.place} in The Coop.\n👑 ${rank} · ${balance} $QUQN\n\nSmall Coq. Big Dreams.\nBRC-20 on Bitcoin.\n\nFind your rank ↓\n@QUQNbtc`;
  }

  function rankShareUrl(){
    return `${location.origin}${location.pathname}#ranks`;
  }

  function loadCanvasImage(src){
    return new Promise(resolve=>{
      const img=new Image();
      img.onload=()=>resolve(img);
      img.onerror=()=>resolve(null);
      img.src=src;
    });
  }

  function roundedRectPath(ctx,x,y,w,h,r){
    const rr=Math.min(r,w/2,h/2);
    ctx.beginPath();
    ctx.moveTo(x+rr,y);
    ctx.arcTo(x+w,y,x+w,y+h,rr);
    ctx.arcTo(x+w,y+h,x,y+h,rr);
    ctx.arcTo(x,y+h,x,y,rr);
    ctx.arcTo(x,y,x+w,y,rr);
    ctx.closePath();
  }

  function fitText(ctx,text,maxWidth,startSize,minSize=24){
    let size=startSize;
    while(size>minSize){
      ctx.font=`900 ${size}px system-ui,-apple-system,Segoe UI,sans-serif`;
      if(ctx.measureText(text).width<=maxWidth) return size;
      size-=2;
    }
    return minSize;
  }

  async function drawRankShareCard(match){
    const canvas=q("#coopRankCanvas"), wrap=q("#coopRankCardWrap");
    if(!canvas || !wrap || !match) return;
    const ctx=canvas.getContext("2d");
    if(!ctx) return;
    canvas.width=1200; canvas.height=675;

    const holder=match.holder||{};
    const rank=holder.rank||"QUQN Holder";
    const balance=Number(holder.overallBalance||0).toLocaleString("en-US");
    const rankImg=await loadCanvasImage(holder.rankImage||"assets/logo.webp");
    const logo=await loadCanvasImage("assets/logo.webp");

    // Background.
    const bg=ctx.createLinearGradient(0,0,1200,675);
    bg.addColorStop(0,"#090806");
    bg.addColorStop(.58,"#171006");
    bg.addColorStop(1,"#070706");
    ctx.fillStyle=bg; ctx.fillRect(0,0,1200,675);

    // Warm glows.
    const glow1=ctx.createRadialGradient(960,110,20,960,110,420);
    glow1.addColorStop(0,"rgba(244,190,66,.28)");
    glow1.addColorStop(1,"rgba(244,190,66,0)");
    ctx.fillStyle=glow1; ctx.fillRect(520,0,680,600);
    const glow2=ctx.createRadialGradient(210,560,20,210,560,360);
    glow2.addColorStop(0,"rgba(217,154,37,.16)");
    glow2.addColorStop(1,"rgba(217,154,37,0)");
    ctx.fillStyle=glow2; ctx.fillRect(0,240,620,435);

    // Border.
    roundedRectPath(ctx,18,18,1164,639,34);
    ctx.strokeStyle="rgba(244,198,96,.55)"; ctx.lineWidth=3; ctx.stroke();

    // Branding.
    if(logo){
      ctx.save();
      ctx.beginPath(); ctx.arc(88,87,42,0,Math.PI*2); ctx.clip();
      ctx.drawImage(logo,46,45,84,84); ctx.restore();
    }
    ctx.fillStyle="#f5e6bd"; ctx.font="950 38px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.fillText("QUQN",148,99);
    ctx.fillStyle="#cfa744"; ctx.font="800 18px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.letterSpacing="3px";
    ctx.fillText("THE COOP · LIVE",826,80);

    // Rank art panel.
    roundedRectPath(ctx,58,172,410,410,30);
    ctx.fillStyle="rgba(255,255,255,.025)"; ctx.fill();
    ctx.strokeStyle="rgba(244,198,96,.32)"; ctx.lineWidth=2; ctx.stroke();
    if(rankImg){
      ctx.save(); roundedRectPath(ctx,76,190,374,374,24); ctx.clip();
      const sw=rankImg.naturalWidth||rankImg.width, sh=rankImg.naturalHeight||rankImg.height;
      const scale=Math.max(374/sw,374/sh);
      const dw=sw*scale, dh=sh*scale;
      ctx.drawImage(rankImg,76+(374-dw)/2,190+(374-dh)/2,dw,dh);
      ctx.restore();
    }

    // Text content.
    ctx.fillStyle="#c89d3d"; ctx.font="900 30px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.fillText("YOUR ON-CHAIN RANK",535,190);
    ctx.fillStyle="#fff4d5"; ctx.font="1000 108px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.fillText(`#${match.place}`,526,318);
    const rankSize=fitText(ctx,rank,590,62,34);
    ctx.fillStyle="#f5c95b"; ctx.font=`950 ${rankSize}px system-ui,-apple-system,Segoe UI,sans-serif`;
    ctx.fillText(rank,535,392);
    ctx.fillStyle="#fff1c5"; ctx.font="950 54px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.fillText(balance,535,475);
    const balWidth=ctx.measureText(balance).width;
    ctx.fillStyle="#9e8f70"; ctx.font="900 20px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.fillText("QUQN",555+balWidth,473);

    // Footer statement.
    ctx.fillStyle="#f1e2bd"; ctx.font="850 26px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.fillText("Small Coq. Big Dreams.",535,548);
    ctx.fillStyle="#9a8c70"; ctx.font="750 18px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.fillText("BRC-20 on Bitcoin · @QUQNbtc",535,585);
    ctx.fillStyle="#6f6556"; ctx.font="700 15px system-ui,-apple-system,Segoe UI,sans-serif";
    ctx.fillText("xivanh44.github.io/QUQN/",535,615);

    wrap.classList.add("show");
  }

  function canvasToBlob(canvas){
    return new Promise(resolve=>canvas?.toBlob(resolve,"image/png",.95));
  }

  async function downloadRankCard(){
    if(!currentMyRank) return;
    const canvas=q("#coopRankCanvas");
    const blob=await canvasToBlob(canvas);
    if(!blob) return;
    const rank=(currentMyRank.holder.rank||"QUQN-Holder").replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"");
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url; a.download=`QUQN-Coop-${currentMyRank.place}-${rank}.png`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1500);
  }

  function isMobileShareEnvironment(){
    return window.innerWidth<=1100 && (navigator.maxTouchPoints||0)>0;
  }

  function updateRankCardShareUI(){
    const t=coopText();
    const mobile=isMobileShareEnvironment();
    const shareBtn=q("#coopRankCardShare");
    const help=q("#coopRankCardHelp");
    if(shareBtn) shareBtn.textContent=mobile?t.cardShareMobile:t.cardShareDesktop;
    if(help) help.textContent=mobile?t.cardHelpMobile:t.cardHelpDesktop;
  }

  async function shareRankCard(){
    if(!currentMyRank) return;

    if(!isMobileShareEnvironment()){
      shareMyRankOnX();
      return;
    }

    const canvas=q("#coopRankCanvas");
    const blob=await canvasToBlob(canvas);
    if(!blob) return;
    const file=new File([blob],"QUQN-Coop-rank.png",{type:"image/png"});
    const payload={
      title:"My QUQN rank",
      text:rankShareText(currentMyRank),
      url:rankShareUrl(),
      files:[file]
    };

    try{
      if(navigator.share && (!navigator.canShare || navigator.canShare({files:[file]}))){
        await navigator.share(payload);
        return;
      }
    }catch(err){
      if(err?.name==="AbortError") return;
    }

    await downloadRankCard();
  }

  function shareMyRankOnX(){
    if(!currentMyRank) return;
    const text=rankShareText(currentMyRank);
    const intent=`https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(rankShareUrl())}`;
    window.open(intent,"_blank","noopener,noreferrer");
  }

  function findMyCoopRank(){
    const input=q("#coopRankAddress"), result=q("#coopRankResult"), error=q("#coopRankError");
    if(!input || !result || !error) return;
    const t=coopText();
    const value=String(input.value||"").trim().toLowerCase();
    result.classList.remove("show");
    q("#coopRankCardWrap")?.classList.remove("show");
    currentMyRank=null;
    if(!value){ error.textContent=t.findEmpty; return; }
    const holders=[...(liveCoopData?.holders||[])].sort((a,b)=>Number(b.overallBalance||0)-Number(a.overallBalance||0));
    const index=holders.findIndex(h=>String(h.address||"").trim().toLowerCase()===value);
    if(index<0){ error.textContent=t.findNotFound; return; }
    const holder=holders[index];
    currentMyRank={holder,place:index+1};
    error.textContent="";
    const locale=document.documentElement.lang==="fr"?"fr-FR":"en-US";
    const image=holder.rankImage||"assets/logo.webp";
    const rank=holder.rank||"QUQN Holder";
    q("#coopRankImage").src=image;
    q("#coopRankPlace").textContent=`#${index+1} · ${rank}`;
    q("#coopRankBalance").textContent=`${Number(holder.overallBalance||0).toLocaleString(locale)} QUQN`;
    q("#coopRankAddressShort").textContent=shortAddress(holder.address||"");
    q("#coopRankShare").textContent=t.findShare;
    q("#coopRankCardSave").textContent=t.cardSave;
    updateRankCardShareUI();
    result.classList.add("show");
    drawRankShareCard(currentMyRank);
  }

  function ensureLiveCoop(){
    const ranks=q("#ranks .shell");
    const rankGrid=q("#rankGrid");
    if(!ranks || !rankGrid) return null;
    let wrap=q("#liveCoop");
    if(wrap) return wrap;

    wrap=document.createElement("div");
    wrap.id="liveCoop";
    wrap.className="live-coop";
    wrap.innerHTML=`
      <div class="live-coop-head">
        <div>
          <span id="liveCoopKicker" class="kicker">LIVE MEMBERS</span>
          <h3 id="liveCoopTitle">Who is in the Coop?</h3>
          <p id="liveCoopIntro"></p>
        </div>
        <div id="liveCoopStatus" class="live-coop-status">
          <i class="live-coop-dot"></i><span>CONNECTING…</span>
          <button id="coopRefresh" class="coop-refresh" type="button">REFRESH</button>
        </div>
      </div>
      <div id="coopRankFinder" class="coop-rank-finder">
        <div class="coop-rank-finder-top">
          <div>
            <span id="coopRankKicker" class="kicker">YOUR COOP RANK</span>
            <h4 id="coopRankTitle">Find your rank and share it</h4>
            <p id="coopRankIntro">Paste your public Bitcoin address. No wallet connection needed.</p>
          </div>
        </div>
        <div class="coop-rank-form">
          <input id="coopRankAddress" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="bc1p…" aria-label="Bitcoin address">
          <button id="coopRankFind" class="coop-rank-find-btn" type="button">FIND MY RANK</button>
        </div>
        <div id="coopRankError" class="coop-rank-error" aria-live="polite"></div>
        <div id="coopRankResult" class="coop-rank-result" aria-live="polite">
          <img id="coopRankImage" src="assets/logo.webp" alt="QUQN rank">
          <div class="coop-rank-result-main">
            <small>THE COOP · LIVE</small>
            <strong id="coopRankPlace">—</strong>
            <span id="coopRankBalance">—</span>
            <span id="coopRankAddressShort">—</span>
          </div>
          <button id="coopRankShare" class="coop-rank-share-btn" type="button">SHARE MY RANK ON X ↗</button>
        </div>
        <div id="coopRankCardWrap" class="coop-rank-card-wrap">
          <canvas id="coopRankCanvas" class="coop-rank-canvas" width="1200" height="675" aria-label="QUQN Coop rank share card"></canvas>
          <div class="coop-rank-card-actions">
            <button id="coopRankCardShare" class="coop-rank-card-btn primary" type="button">OPEN X WITH TEXT ↗</button>
            <button id="coopRankCardSave" class="coop-rank-card-btn secondary" type="button">SAVE MY CARD ↓</button>
          </div>
          <p id="coopRankCardHelp" class="coop-rank-card-help">On desktop: save the card, open X with the prefilled text, then attach the downloaded image.</p>
        </div>
        <p id="coopRankNote" class="coop-rank-note">The check runs in your browser against public UniSat data. This feature does not send the address you type.</p>
      </div>
      <div id="holderGrid" class="holder-grid">
        <div class="holder-loading">Loading QUQN holders…</div>
      </div>`;
    rankGrid.insertAdjacentElement("afterend",wrap);

    q("#coopRefresh")?.addEventListener("click",()=>loadLiveCoop(true));
    q("#coopRankFind")?.addEventListener("click",findMyCoopRank);
    q("#coopRankAddress")?.addEventListener("keydown",ev=>{ if(ev.key==="Enter") findMyCoopRank(); });
    q("#coopRankShare")?.addEventListener("click",shareMyRankOnX);
    q("#coopRankCardShare")?.addEventListener("click",shareRankCard);
    q("#coopRankCardSave")?.addEventListener("click",downloadRankCard);
    return wrap;
  }

  function renderLiveCoop(data){
    const wrap=ensureLiveCoop();
    if(!wrap) return;
    const t=coopText();
    q("#liveCoopKicker").textContent=t.kicker;
    q("#liveCoopTitle").textContent=t.title;
    q("#liveCoopIntro").textContent=t.intro;
    const refresh=q("#coopRefresh"); if(refresh) refresh.textContent=t.refresh;
    q("#coopRankKicker").textContent=t.findKicker;
    q("#coopRankTitle").textContent=t.findTitle;
    q("#coopRankIntro").textContent=t.findIntro;
    q("#coopRankAddress").placeholder=t.findPlaceholder;
    q("#coopRankFind").textContent=t.findButton;
    q("#coopRankNote").textContent=t.findNote;
    if(q("#coopRankCardSave")) q("#coopRankCardSave").textContent=t.cardSave;
    updateRankCardShareUI();
    if(currentMyRank) q("#coopRankShare").textContent=t.findShare;

    const status=q("#liveCoopStatus");
    if(status){
      status.dataset.state="live";
      const span=status.querySelector("span");
      if(span) span.textContent=`${t.live} · ${Number(data.total || data.holders?.length || 0)}`;
    }

    renderHeroCoop(data);

    const holders=[...(data.holders||[])].sort((a,b)=>Number(b.overallBalance||0)-Number(a.overallBalance||0));
    const grid=q("#holderGrid");
    if(!grid) return;
    const locale=document.documentElement.lang==="fr"?"fr-FR":"en-US";

    grid.innerHTML=holders.map((h,index)=>{
      const balance=Number(h.overallBalance||0);
      const image=h.rankImage || "assets/logo.webp";
      const rank=h.rank || "QUQN Holder";
      const addr=String(h.address||"");
      return `<article class="holder-card">
        <span class="holder-rank-no">#${index+1}</span>
        <img src="${image}" alt="${rank}" loading="lazy" onerror="this.src='assets/logo.webp'">
        <div class="holder-info">
          <span class="holder-rank">${rank}</span>
          <div class="holder-balance">${balance.toLocaleString(locale)} <small>QUQN</small></div>
          <div class="holder-address" title="${addr}">${shortAddress(addr)}</div>
        </div>
      </article>`;
    }).join("") || `<div class="holder-loading">${t.loading}</div>`;
  }

  async function loadLiveCoop(force=false){
    const wrap=ensureLiveCoop();
    if(!wrap) return;
    const t=coopText();
    const grid=q("#holderGrid");
    const status=q("#liveCoopStatus");

    if(liveCoopData && !force){
      renderLiveCoop(liveCoopData);
      return;
    }
    if(grid && !liveCoopData) grid.innerHTML=`<div class="holder-loading">${t.loading}</div>`;
    if(status){
      status.dataset.state="";
      const span=status.querySelector("span"); if(span) span.textContent="CONNECTING…";
    }

    let config=null;
    try{
      config=await fetch("assets/config.json",{cache:"no-store"}).then(r=>{
        if(!r.ok) throw new Error("config");
        return r.json();
      });
      const apiBase=String(config.apiBase||"").replace(/\/$/,"");
      if(!apiBase) throw new Error("No apiBase");

      const response=await fetch(`${apiBase}/api/holders`,{cache:"no-store"});
      if(!response.ok) throw new Error(`holders ${response.status}`);
      const data=await response.json();
      if(!Array.isArray(data.holders)) throw new Error("Invalid holders payload");
      // Use the site's current artwork even when the holder API has older rank images.
      const rankImages=new Map((config.ranks||[]).map(rank=>[
        String(rank.name||"").trim().toLowerCase(),rank.image
      ]));
      for(const holder of data.holders){
        const image=rankImages.get(String(holder.rank||"").trim().toLowerCase());
        if(image) holder.rankImage=image;
      }
      liveCoopData=data;
      renderLiveCoop(data);
    }catch(err){
      console.warn("QUQN live Coop:",err);
      if(grid) grid.innerHTML=`<div class="holder-error">${t.error}</div>`;
      const preview=q("#heroCoopPreview"), teaser=q("#heroTop10");
      if(preview && teaser){
        const fr=document.documentElement.lang==="fr";
        q("#heroCoopTitle").textContent="THE COOP";
        q("#heroCoopCount").textContent=fr?"Aperçu des rangs · données live indisponibles":"Rank preview · live data unavailable";
        const ranks=Array.isArray(config?.ranks)?config.ranks.slice(0,3):[];
        teaser.innerHTML=ranks.map(rank=>`<div class="hero-holder-row coop-rank-teaser">
          <img src="${rank.image}" alt="" loading="lazy">
          <span class="hero-holder-main"><b class="hero-holder-rank">${rank.name}</b></span>
          <span class="hero-holder-balance">${Number(rank.threshold).toLocaleString(fr?"fr-FR":"en-US")}+<small>QUQN</small></span>
        </div>`).join("");
        const pill=preview.querySelector(".hero-live-pill");if(pill) pill.textContent=fr?"HORS LIGNE":"OFFLINE";
      }
      if(status){
        status.dataset.state="error";
        const span=status.querySelector("span"); if(span) span.textContent="UNISAT OFFLINE";
      }
    }
  }

  function setupLiveCoop(){
    injectCoopStyles();
    ensureHeroCoopPreview();
    ensureLiveCoop();
    loadLiveCoop();

    // Language switch changes <html lang>; redraw labels without another API request.
    new MutationObserver(()=>{ if(liveCoopData) renderLiveCoop(liveCoopData); })
      .observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});

    // Gentle refresh only while the page is open. Manual refresh is also available.
    setInterval(()=>{ if(!document.hidden) loadLiveCoop(true); },300000);
  }


  function initV6(){
    hijackRoulette();
    buildRoadMilestones();
    document.addEventListener("quqn:languagechange",()=>{buildRoadMilestones();updateRoad()});
    setupHeroMotion();
    setupSeasonAtmosphere();
    setupMascot();
    setupVisitGreeting();
    setupClingFX();
    setupLiveCoop();
    setupHeroSideSync();
    setupReveal();

    // Give app.js time to put current config values into the strip.
    setTimeout(()=>{animateStats();updateRoad()},700);
    const minted=q("#minted");
    if(minted){
      new MutationObserver(()=>updateRoad()).observe(minted,{childList:true,subtree:true,characterData:true});
    }
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",initV6,{once:true});
  else initV6();
})();
