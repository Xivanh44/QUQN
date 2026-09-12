(() => {
  "use strict";

  const q = (s, root=document) => root.querySelector(s);
  const qa = (s, root=document) => [...root.querySelectorAll(s)];

  // 5 personal Easter eggs + broadly understandable billionaire fantasies.
  // Seasons, rank images and "Original Dreamer" are intentionally excluded.
  const destinies = [
    {title:"Supercar Collector", src:"assets/gallery/le-roi-coq-et-la-supercar-doree.webp", rarity:"common", w:11, punch:"The garage has become a liquidity problem."},
    {title:"Wall Street Coq", src:"assets/gallery/le-roi-dore-de-wall-street.webp", rarity:"common", w:10, punch:"Still does not understand half the charts. Owns the building anyway."},
    {title:"Dubai Gold King", src:"assets/gallery/coq-royal-quqn-a-dubai.webp", rarity:"common", w:9, punch:"Subtlety was never part of the roadmap."},
    {title:"Private Jet Coq", src:"assets/gallery/coq-royal-en-jet-prive.webp", rarity:"common", w:9, punch:"Economy class? QUQN has never heard of this protocol."},
    {title:"Gold Rush", src:"assets/gallery/le-coq-quqn-dans-la-ruee-doree.webp", rarity:"common", w:9, punch:"One pickaxe. Zero patience. Maximum confidence."},
    {title:"Sun Valley Millionaire", src:"assets/gallery/coq-royal-dore-devale-les-pistes.webp", rarity:"common", w:8, punch:"Fresh powder. Fresh delusions of grandeur."},
    {title:"Crypto Whale", src:"assets/gallery/coq-royal-dans-un-royaume-de-tresors-crypto.webp", rarity:"rare", w:5, punch:"Technically still a coq. Emotionally a whale."},
    {title:"Space Yacht Captain", src:"assets/gallery/poulet-royal-dans-un-yacht-spatial-dore.webp", rarity:"rare", w:4, punch:"Earth became too reasonably priced."},
    {title:"Moon Base Billionaire", src:"assets/gallery/le-debarquement-lunaire-dore-de-quqn.webp", rarity:"rare", w:4, punch:"Roosters cannot fly. The budget says otherwise."},

    {title:"Nantes Coq", src:"assets/gallery/coq-royal-sur-les-quais-de-nantes.webp", rarity:"easter egg", w:3, punch:"Machines de l'Île, Loire, a little Breton energy — and absolutely no modesty."},
    {title:"Guernsey Coq", src:"assets/gallery/coq-royal-a-castle-cornet.webp", rarity:"easter egg", w:3, punch:"Offshore? He thought they meant a yacht."},
    {title:"Himeji Shogun", src:"assets/gallery/coq-quqn-shogun-a-himeji.webp", rarity:"easter egg", w:3, punch:"A castle this elegant deserves an unnecessarily golden coq."},
    {title:"Frankfurt Euro Coq", src:"assets/gallery/le-roi-coq-du-crypto-empire-europeen.webp", rarity:"easter egg", w:3, punch:"The ECB called. QUQN misunderstood the assignment."},
    {title:"Swiss Banker Coq", src:"assets/gallery/coq-quqn-roi-de-geneve-riches.webp", rarity:"easter egg", w:3, punch:"Discretion, precision, and one extremely loud French chicken."},

    {title:"3 A.M. Trader", src:"assets/gallery/le-roi-dore-de-wall-street.webp", rarity:"rare", w:2, punch:"Twelve screens. Four coffees. One terrible decision away from greatness."},
    {title:"Still Broke", src:"assets/mascot.webp", rarity:"legendary", w:1, punch:"Plot twist: the card declined. Small coq. Same dreams.", special:"broke"}
  ];

  const weightedPick = () => {
    const total = destinies.reduce((a,x)=>a+x.w,0);
    let r = Math.random()*total;
    for (const x of destinies){ r -= x.w; if(r <= 0) return x; }
    return destinies[0];
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
      "Euh… zis plan is completely scientific.",
      "Small coq. BIG confidence.",
      "Zey said diversify. I bought sunglasses.",
      "Patience? Non. We have dreams.",
      "I am not overconfident. I am French.",
      "Today ze farm. Tomorrow… penthouse.",
      "Risk management? Euh… next question.",
      "Please admire ze financial plumage."
    ];
    const fr=[
      "Euh… ce plan est totalement scientifique.",
      "Petit coq. ÉNORME confiance.",
      "On m'a dit de diversifier. J'ai acheté des lunettes.",
      "La patience ? Non. On a des rêves.",
      "Je ne suis pas trop confiant. Je suis français.",
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

      // Optional character voice: a French TTS voice reading English produces
      // the strong French flavour when the browser/OS provides one.
      try{
        if("speechSynthesis" in window){
          speechSynthesis.cancel();
          const u=new SpeechSynthesisUtterance(line);
          const voices=speechSynthesis.getVoices();
          u.voice=voices.find(v=>/^fr[-_]/i.test(v.lang))||null;
          u.lang=isFr?"fr-FR":"fr-FR";
          u.rate=1.07;u.pitch=1.28;u.volume=.72;
          speechSynthesis.speak(u);
        }
      }catch(_){}
    });
  }


  function setupVisitGreeting(){
    const fig=q("#storyMascot"), bubble=q("#quqnTalk");
    if(!fig || !bubble) return;
    const en=[
      "Bonjour. I have made several excellent imaginary investments.",
      "Euh… welcome. Please ignore ze risk management department.",
      "Small coq. Big dreams. Very small attention span.",
      "Today we build ze empire. Tomorrow we understand what we built.",
      "Welcome back. Ze confidence remains irrationally strong.",
      "I checked ze charts. Zey looked expensive.",
      "Please enter. Ze penthouse is currently conceptual.",
      "Bonjour investor. Emotionally, we are already billionaires.",
      "I have a strategy. Unfortunately it is mostly optimism.",
      "Zis website is powered by Bitcoin and unreasonable confidence."
    ];
    const fr=[
      "Bonjour. J'ai encore fait d'excellents investissements imaginaires.",
      "Bienvenue. Merci d'ignorer le service gestion des risques.",
      "Petit coq. Grands rêves. Très petite capacité d'attention.",
      "Aujourd'hui l'empire. Demain on comprendra comment il fonctionne.",
      "Re-bonjour. La confiance reste parfaitement déraisonnable.",
      "J'ai regardé les graphiques. Ils avaient l'air chers.",
      "Entrez. Le penthouse est encore au stade conceptuel.",
      "Bonjour investisseur. Émotionnellement, nous sommes déjà milliardaires.",
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

  function setupWinkReaction(){
    const fig=q("#storyMascot");
    if(!fig) return;
    let wink=fig.querySelector(".quqn-wink");
    if(!wink){
      wink=document.createElement("span");
      wink.className="quqn-wink";
      wink.textContent="😉";
      wink.setAttribute("aria-hidden","true");
      fig.appendChild(wink);
    }
    fig.addEventListener("click",()=>{
      wink.classList.remove("show");
      void wink.offsetWidth;
      wink.classList.add("show");
      setTimeout(()=>wink.classList.remove("show"),700);
    });
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

  function initV6(){
    hijackRoulette();
    buildRoadMilestones();
    setupHeroMotion();
    setupSeasonAtmosphere();
    setupMascot();
    setupVisitGreeting();
    setupWinkReaction();
    setupClingFX();
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
