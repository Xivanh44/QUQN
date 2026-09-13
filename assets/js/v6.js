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
  function updateRoad(){
    const mintedEl=q("#minted"), fill=q("#roadFill"), coq=q("#roadCoq"), status=q("#roadStatus");
    if(!mintedEl || !fill || !coq) return;
    const minted=parseNumber(mintedEl.textContent);
    const pct=Math.max(0,Math.min(100,(minted/MAX)*100));
    fill.style.width=pct+"%";
    coq.style.left=pct+"%";
    if(status){
      const locale=document.documentElement.lang==="fr"?"fr-FR":"en-US";
      status.textContent=`${Math.round(minted).toLocaleString(locale)} / ${MAX.toLocaleString(locale)} QUQN minted · ${pct.toFixed(2)}%`;
    }
    qa(".road-milestone").forEach(el=>{
      const amount=Number(el.dataset.amount)||0;
      el.classList.toggle("reached",minted>=amount);
    });
  }

  function buildRoadMilestones(){
    const wrap=q("#roadMilestones");
    if(!wrap) return;
    wrap.innerHTML=milestones.map(m=>`
      <span class="road-milestone" data-amount="${m.amount}" style="--at:${m.at}%">
        <i></i><b>${m.label}</b><small>${m.amount?m.amount.toLocaleString("en-US"):"START"}</small>
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

      /* --- HERO: 3-part QUQN dashboard --- */
      .v4-hero{min-height:820px}
      .v4-hero .attraction-layout{
        width:min(1380px,calc(100% - 28px));
        grid-template-columns:minmax(235px,.78fr) minmax(460px,1.55fr) minmax(300px,.92fr);
        gap:18px;align-items:stretch;min-height:800px;padding:88px 0 42px
      }
      .v4-hero .attraction-intro{
        align-self:center;padding:22px 4px 22px 0;min-width:0
      }
      .v4-hero .attraction-intro h1{
        font-size:clamp(48px,4.7vw,72px);line-height:.86;margin:14px 0 20px
      }
      .v4-hero .attraction-intro .hero-subtitle{font-size:15px;line-height:1.45}
      .v4-hero .hero-game{
        align-self:center;min-width:0;max-height:680px;overflow:auto
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
      .hero-top10{display:grid;gap:4px}
      .hero-holder-row{
        display:grid;grid-template-columns:34px 28px minmax(0,1fr) auto;align-items:center;gap:7px;
        min-height:42px;padding:4px 6px;border-radius:10px;border:1px solid rgba(255,255,255,.045);
        background:rgba(255,255,255,.022);transition:.2s ease
      }
      .hero-holder-row:hover{background:rgba(244,198,96,.06);border-color:rgba(244,198,96,.18);transform:translateX(-2px)}
      .hero-holder-row[data-place="1"]{background:linear-gradient(90deg,rgba(244,198,96,.14),rgba(244,198,96,.03));border-color:rgba(244,198,96,.32)}
      .hero-holder-row img{width:34px;height:34px;object-fit:cover;border-radius:8px;border:1px solid rgba(244,198,96,.2)}
      .hero-place{font-size:12px;font-weight:1000;color:#d9c286}
      .hero-holder-main{min-width:0}
      .hero-holder-rank{display:block;color:#e8d49c;font-size:8px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .hero-holder-address{display:block;color:#71695f;font:650 7px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
      .hero-holder-balance{text-align:right;color:#fff0bf;font-size:10px;font-weight:950;white-space:nowrap}
      .hero-holder-balance small{display:block;color:#7e7568;font-size:6px;letter-spacing:.08em}
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

      @media(max-width:1120px){
        .v4-hero .attraction-layout{
          grid-template-columns:minmax(220px,.75fr) minmax(430px,1.5fr) minmax(270px,.9fr);
          width:min(100% - 18px,1180px);gap:12px
        }
        .hero-holder-row{grid-template-columns:30px 24px minmax(0,1fr) auto;gap:5px}
        .hero-holder-row img{width:30px;height:30px}
        .hero-holder-address{display:none}
      }
      @media(max-width:980px){
        .v4-hero{min-height:auto}
        .v4-hero .attraction-layout{
          display:flex;flex-direction:column;width:min(100% - 28px,760px);
          min-height:0;padding:92px 0 44px;gap:18px
        }
        .v4-hero .hero-game{order:1;max-height:none;width:100%}
        .hero-coop-preview{order:2;width:100%}
        .v4-hero .attraction-intro{order:3;width:100%;padding:24px 0 0}
        .v4-hero .attraction-intro h1{font-size:clamp(54px,10vw,82px)}
        .hero-top10{grid-template-columns:1fr 1fr}
        .holder-grid{grid-template-columns:1fr 1fr}
        .holder-card,.holder-card:nth-child(1),.holder-card:nth-child(2),.holder-card:nth-child(3){grid-column:auto;order:initial;transform:none}
        .holder-card:nth-child(1):hover{transform:translateY(-3px)}
      }

      @media(max-width:760px){
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
      show10:"VOIR LE TOP 10",
      hide10:"RÉDUIRE"
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
      show10:"SHOW TOP 10",
      hide10:"SHOW LESS"
    };
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
      q("#heroCoopMore").textContent=preview.classList.contains("show-top10")?t.hide10:t.show10;
    });
    return preview;
  }

  function renderHeroCoop(data){
    const preview=ensureHeroCoopPreview();
    if(!preview) return;
    const t=coopText();
    const locale=document.documentElement.lang==="fr"?"fr-FR":"en-US";
    const holders=[...(data.holders||[])]
      .sort((a,b)=>Number(b.overallBalance||0)-Number(a.overallBalance||0))
      .slice(0,10);

    q("#heroCoopTitle").textContent=t.heroTitle;
    q("#heroCoopCount").textContent=`${Number(data.total || data.holders?.length || 0)} ${t.heroHolders}`;
    q("#heroCoopEnter").textContent=t.enter;
    q("#heroCoopMore").textContent=preview.classList.contains("show-top10")?t.hide10:t.show10;

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
      <div id="holderGrid" class="holder-grid">
        <div class="holder-loading">Loading QUQN holders…</div>
      </div>`;
    rankGrid.insertAdjacentElement("afterend",wrap);

    q("#coopRefresh")?.addEventListener("click",()=>loadLiveCoop(true));
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

    try{
      const config=await fetch("assets/config.json",{cache:"no-store"}).then(r=>{
        if(!r.ok) throw new Error("config");
        return r.json();
      });
      const apiBase=String(config.apiBase||"").replace(/\/$/,"");
      if(!apiBase) throw new Error("No apiBase");

      const response=await fetch(`${apiBase}/api/holders`,{cache:"no-store"});
      if(!response.ok) throw new Error(`holders ${response.status}`);
      const data=await response.json();
      if(!Array.isArray(data.holders)) throw new Error("Invalid holders payload");
      liveCoopData=data;
      renderLiveCoop(data);
    }catch(err){
      console.warn("QUQN live Coop:",err);
      if(grid) grid.innerHTML=`<div class="holder-error">${t.error}</div>`;
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
    setupHeroMotion();
    setupSeasonAtmosphere();
    setupMascot();
    setupVisitGreeting();
    setupClingFX();
    setupLiveCoop();
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
