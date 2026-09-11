const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const translations = {
  en: {
    navStory:'Story', navSeason:'This season', navGame:'Billionaire game', navRanks:'The Coop', navGuide:'How it works',
    howBtn:'HOW QUQN WORKS', viewBtn:'VIEW QUQN ON UNISCAN ↗', heroRisk:'Experimental meme token. No promise of profit, value or liquidity.',
    progress:'Mint progress', minted:'Minted', holders:'Holders', max:'Max supply', perMint:'Per mint',
    storyKicker:'MEET QUQN', storyTitle:'He started small.<br>His ego did not.', voiceNote:'— QUQN, in aggressively French English.', netWorth:'Current net worth: <strong>emotionally billionaire.</strong>',
    seasonKicker:'QUQN THIS SEASON',
    gameKicker:'THE COMPLETELY SCIENTIFIC QUQN TEST', gameTitle:'What kind of billionaire will you be?', gameIntro:'One click. Zero science. QUQN decides your imaginary billionaire future.', gameButton:'SPIN MY FUTURE', gameDisclaimer:'Just a random meme game. Not a prediction, promise or financial advice. Obviously.', yourFuture:'YOUR QUQN FUTURE', spinAgain:'Try another destiny ↻',
    coopKicker:'THE COOP', coopTitle:'How unreasonable are your dreams?', coopIntro:'Community ranks are for fun. They currently create no financial rights or rewards.',
    personaKicker:'CHARACTER FILE', personaTitle:'Cute. French. Financially overconfident.', voice:'Voice', voiceV:'High-pitched chicken voice + very strong French accent. Suddenly deep when excited.', skill:'Special skill', skillV:'Jumping into things before understanding them.', enemy:'Natural enemies', enemyV:'Doubt, patience and realistic expectations.', mission:'Mission', missionV:'Leave the farm. Become absurdly rich. Work out the details later.',
    communityTitle:'A meme needs people, not promises.', communityBody:'X is for memes and QUQN’s terrible financial confidence. Telegram is for the Coop. Social links appear here once the official accounts are created.',
    faqTitle:'Before the coq gets carried away.', q1:'Is QUQN sold by this website or the project?', a1:'No. The website does not sell QUQN, connect to wallets, custody funds or receive payments for the token.', q2:'Where are the technical details?', faqGuide:'Open the complete fair-mint & beginner guide →', q3:'Can QUQN go to zero?', a3:'Yes. QUQN is experimental and highly speculative. It can have no market or value.',
    guideKicker:'HOW QUQN WORKS', guideTitle:'From zero to your first QUQN.', fairLabel:'FAIR MINT FACTS', fairTitle:'No sale by the project. No fundraising.', fairNote:'QUQN does not sell tokens or receive fees, commissions, money, personal data or other benefits from prospective holders in exchange for QUQN. Bitcoin network and third-party service fees, if any, are paid outside this website and are not received by QUQN.', fairLegal:'Read the legal & MiCA note →',
    b1Label:'GET A WALLET', b1Title:'Install an official compatible Bitcoin wallet', b1Body:'UniSat Wallet is one option. Download it only from the official UniSat website.', walletDownload:'Official UniSat Wallet download ↗',
    b2Label:'PROTECT THE KEYS', b2Title:'Create the wallet and secure the recovery phrase', b2Body:'Your recovery phrase controls the wallet. Write it down offline. Never send it to anyone.', seedWarning:'⚠ Never screenshot, photograph, email or cloud-save your recovery phrase.',
    b3Label:'ADD BTC FOR FEES', b3Title:'Put a small amount of BTC in your wallet', b3Body:'Minting uses the Bitcoin network and a third-party inscription service, so fees apply. These fees do not go to QUQN.',
    b4Label:'VERIFY BEFORE YOU CLICK', b4Title:'Open the exact QUQN page on UniScan', openExact:'Open exact QUQN page ↗',
    b5Label:'HATCH QUQN', b5Title:'Choose how many mints you want', b5Body:'Verify “4-byte”, ticker QUQN and 1,000 QUQN per mint. Review the receiving address and all fees before submitting.', calcLabel:'Number of mints', calcGets:'That corresponds to', officialGuide:'Read UniSat’s official mint guide ↗',
    b6Label:'WAIT & CHECK', b6Title:'Wait for Bitcoin confirmation, then check your wallet', b6Body:'Bitcoin transactions are not instant. Never pay somebody in a private message to “unlock” or “release” your QUQN.',
    safetyKicker:'THE ONE RULE TO REMEMBER', safetyTitle:'Your recovery phrase is never needed to mint QUQN.', safetyBody:'If anyone asks for it, stop.'
  },
  fr: {
    navStory:'Histoire', navSeason:'Cette saison', navGame:'Jeu du milliardaire', navRanks:'The Coop', navGuide:'Comment ça marche',
    howBtn:'COMMENT ÇA MARCHE', viewBtn:'VOIR QUQN SUR UNISCAN ↗', heroRisk:'Memecoin expérimental. Aucune promesse de profit, de valeur ou de liquidité.',
    progress:'Progression du mint', minted:'Minté', holders:'Détenteurs', max:'Offre max', perMint:'Par mint',
    storyKicker:'DÉCOUVRIR QUQN', storyTitle:'Il est né petit.<br>Pas son ego.', voiceNote:'— QUQN, dans son anglais au très fort accent français.', netWorth:'Patrimoine actuel : <strong>milliardaire émotionnel.</strong>',
    seasonKicker:'QUQN CETTE SAISON',
    gameKicker:'LE TEST QUQN TOTALEMENT SCIENTIFIQUE', gameTitle:'Quel genre de milliardaire seras-tu ?', gameIntro:'Un clic. Zéro science. QUQN décide de ton futur de milliardaire imaginaire.', gameButton:'LANCE MON FUTUR', gameDisclaimer:'Un jeu aléatoire pour rire. Ce n’est ni une prédiction, ni une promesse, ni un conseil financier. Évidemment.', yourFuture:'TON FUTUR VERSION QUQN', spinAgain:'Essayer un autre destin ↻',
    coopKicker:'THE COOP', coopTitle:'À quel point tes rêves sont-ils déraisonnables ?', coopIntro:'Les rangs communautaires sont là pour s’amuser. Ils ne donnent aujourd’hui aucun droit financier ni récompense.',
    personaKicker:'FICHE DU PERSONNAGE', personaTitle:'Mignon. Français. Financièrement trop confiant.', voice:'Voix', voiceV:'Voix aiguë de poulet + très fort accent français. Elle devient soudain grave quand il s’emballe.', skill:'Talent spécial', skillV:'Foncer dans les choses avant de les comprendre.', enemy:'Ennemis naturels', enemyV:'Le doute, la patience et les attentes réalistes.', mission:'Mission', missionV:'Quitter la ferme. Devenir absurdement riche. Régler les détails plus tard.',
    communityTitle:'Un meme a besoin de gens, pas de promesses.', communityBody:'X servira aux memes et à la confiance financière catastrophique de QUQN. Telegram sera The Coop. Les liens apparaîtront ici dès que les comptes officiels seront créés.',
    faqTitle:'Avant que le coq ne s’emballe.', q1:'QUQN est-il vendu par ce site ou le projet ?', a1:'Non. Le site ne vend pas QUQN, ne connecte pas de wallet, ne conserve aucun fonds et ne reçoit aucun paiement pour le token.', q2:'Où sont les détails techniques ?', faqGuide:'Ouvrir le guide complet fair mint & débutant →', q3:'QUQN peut-il valoir zéro ?', a3:'Oui. QUQN est expérimental et très spéculatif. Il peut n’avoir aucun marché ni aucune valeur.',
    guideKicker:'COMMENT QUQN FONCTIONNE', guideTitle:'De zéro à tes premiers QUQN.', fairLabel:'FAITS DU FAIR MINT', fairTitle:'Aucune vente par le projet. Aucune levée de fonds.', fairNote:'QUQN ne vend pas de tokens et ne reçoit des détenteurs potentiels ni frais, ni commission, ni argent, ni données personnelles, ni autre avantage en échange de QUQN. Les éventuels frais du réseau Bitcoin et de services tiers sont payés en dehors de ce site et ne sont pas reçus par QUQN.', fairLegal:'Lire la note juridique & MiCA →',
    b1Label:'OBTENIR UN WALLET', b1Title:'Installer un wallet Bitcoin compatible officiel', b1Body:'UniSat Wallet est une option. Télécharge-le uniquement depuis le site officiel UniSat.', walletDownload:'Télécharger UniSat Wallet ↗',
    b2Label:'PROTÉGER LES CLÉS', b2Title:'Créer le wallet et sécuriser la phrase de récupération', b2Body:'Ta phrase de récupération contrôle le wallet. Note-la hors ligne. Ne l’envoie jamais à personne.', seedWarning:'⚠ Ne fais jamais de capture, photo, e-mail ou sauvegarde cloud de ta phrase de récupération.',
    b3Label:'AJOUTER DU BTC POUR LES FRAIS', b3Title:'Mettre une petite quantité de BTC dans le wallet', b3Body:'Le mint utilise le réseau Bitcoin et un service tiers d’inscription : des frais s’appliquent. Ces frais ne vont pas à QUQN.',
    b4Label:'VÉRIFIER AVANT DE CLIQUER', b4Title:'Ouvrir la page QUQN exacte sur UniScan', openExact:'Ouvrir la page QUQN exacte ↗',
    b5Label:'HATCH QUQN', b5Title:'Choisir combien de mints tu veux', b5Body:'Vérifie “4-byte”, le ticker QUQN et 1 000 QUQN par mint. Vérifie l’adresse de réception et tous les frais avant de confirmer.', calcLabel:'Nombre de mints', calcGets:'Cela correspond à', officialGuide:'Lire le guide officiel UniSat ↗',
    b6Label:'ATTENDRE & VÉRIFIER', b6Title:'Attendre la confirmation Bitcoin puis vérifier le wallet', b6Body:'Les transactions Bitcoin ne sont pas instantanées. Ne paie jamais quelqu’un en message privé pour “débloquer” tes QUQN.',
    safetyKicker:'LA RÈGLE À RETENIR', safetyTitle:'Ta phrase de récupération n’est jamais nécessaire pour minter QUQN.', safetyBody:'Si quelqu’un te la demande, arrête-toi.'
  }
};

const seasons = {
  spring:{img:'assets/gallery/le-coq-quqn-au-jardin-dore.webp',themeColor:'#1b2013'},
  summer:{img:'assets/gallery/vacances-tropicales-dorees-de-quqn.webp',themeColor:'#092127'},
  autumn:{img:'assets/gallery/coq-quqn-dans-un-automne-dore.webp',themeColor:'#211008'},
  winter:{img:'assets/gallery/coq-royal-glissant-sur-la-glace-de-noel.webp',themeColor:'#0b1720'}
};

let cfg, lang=localStorage.getItem('quqnLang')||'en', currentFutureIndex=-1;
const fmt=n=>Number(n).toLocaleString(lang==='fr'?'fr-FR':'en-US');
const safe=(sel,fn)=>{const el=$(sel); if(el)fn(el); return el};

function currentSeason(){const m=new Date().getMonth()+1; if(m>=3&&m<=5)return 'spring'; if(m>=6&&m<=8)return 'summer'; if(m>=9&&m<=11)return 'autumn'; return 'winter'}
function renderSeason(){
  const key=currentSeason(), s=seasons[key];
  document.body.dataset.season=key;
  safe('#seasonHeroImage',e=>e.style.backgroundImage=`url('${s.img}')`);
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content',s.themeColor);
}
function renderRanks(){if(!cfg)return;safe('#rankGrid',e=>e.innerHTML=cfg.ranks.map(r=>`<article class="rank"><img src="${r.image}" alt="${r.name}" loading="lazy"><div><small>${fmt(r.threshold)}+ QUQN</small><h3>${r.name}</h3><p>${r.tag}</p></div></article>`).join(''))}
function openLightbox(src,title){safe('#lightboxImg',e=>e.src=src);safe('#lightboxTitle',e=>e.textContent=title);safe('#lightbox',e=>{e.classList.add('open');e.setAttribute('aria-hidden','false')})}
function setStats(minted,holders){if(!cfg)return;minted=Number(minted)||cfg.fallbackMinted;holders=Number(holders)||cfg.fallbackHolders;const pct=Math.min(100,(minted/cfg.maxSupply)*100);safe('#minted',e=>e.textContent=fmt(minted));safe('#holders',e=>e.textContent=fmt(holders));safe('#progressPct',e=>e.textContent=pct.toFixed(2)+'%');safe('#meterFill',e=>e.style.width=Math.max(.35,pct)+'%')}
async function liveStats(){setStats(cfg.fallbackMinted,cfg.fallbackHolders);if(!cfg.autoSync||!cfg.apiBase){safe('#syncState',e=>e.textContent='STATIC');return}try{const r=await fetch(cfg.apiBase.replace(/\/$/,'')+'/api/token',{cache:'no-store'});if(!r.ok)throw Error();const d=await r.json();setStats(d.totalMinted||d.minted,d.holdersCount);safe('#syncState',e=>e.textContent='LIVE')}catch{safe('#syncState',e=>e.textContent='STATIC')}}
function setupSocial(){if(!cfg)return;const s=cfg.social||{};safe('#socialButtons',e=>e.innerHTML=(s.x?`<a class="btn dark" href="${s.x}" target="_blank" rel="noopener">𝕏 Follow QUQN</a>`:`<span class="btn dark disabled">𝕏 X — coming soon</span>`)+(s.telegram?`<a class="btn dark" href="${s.telegram}" target="_blank" rel="noopener">✈ Join Telegram</a>`:`<span class="btn dark disabled">✈ Telegram — coming soon</span>`))}
function updateMintCalc(){const input=$('#mintCount');if(!input||!cfg)return;let n=Math.max(1,Math.min(21000,Number(input.value)||1));safe('#mintCalcResult',e=>e.textContent=`${fmt(n*cfg.mintLimit)} QUQN`)}

function applyLang(){document.documentElement.lang=lang;safe('#lang',e=>e.textContent=lang==='en'?'FR':'EN');$$('[data-t]').forEach(el=>{const v=translations[lang][el.dataset.t];if(v!==undefined)el.innerHTML=v});if(cfg){const c=(cfg.homeCopy&&(cfg.homeCopy[lang]||cfg.homeCopy.en))||{};safe('#heroTitle',e=>e.innerHTML=lang==='en'?'SMALL COQ.<br><em>BIG DREAMS.</em>':'PETIT COQ.<br><em>GRANDS RÊVES.</em>');safe('#heroSubtitle',e=>e.textContent=c.heroSubtitle||'');safe('#storyLead',e=>e.textContent=c.storyLead||'');safe('#storyBody',e=>e.textContent=c.storyBody||'');safe('#voiceQuote',e=>e.textContent=c.voiceQuote||'');safe('#beginnerLead',e=>e.textContent=c.beginnerLead||'');safe('#beginnerQuote',e=>e.textContent=c.beginnerQuote||'');safe('#announcement',e=>e.textContent=(cfg.announcement&&(cfg.announcement[lang]||cfg.announcement.en))||'')}renderSeason();renderRanks();updateMintCalc()}

function futurePool(){
  const rankImages=new Set((cfg?.ranks||[]).map(r=>r.image));
  return (cfg?.gallery||[]).filter(x=>
    x.visible &&
    x.category!=='seasons' &&
    x.category!=='brand' &&
    !rankImages.has(x.src)
  );
}
function showFuture(item){
  if(!item)return;
  safe('#futureImage',e=>{e.src=item.src;e.alt=item.title});
  safe('#futureTitle',e=>e.textContent=item.title);
  safe('.future-stage',e=>e.style.setProperty('--future-bg',`url("${item.src}")`));
}
function spinFuture(){const pool=futurePool();if(!pool.length)return;const card=$('#futureCard');card?.classList.add('spinning');let ticks=0;const maxTicks=18;const timer=setInterval(()=>{let i=Math.floor(Math.random()*pool.length);showFuture(pool[i]);ticks++;if(ticks>=maxTicks){clearInterval(timer);let i;do{i=Math.floor(Math.random()*pool.length)}while(pool.length>1&&i===currentFutureIndex);currentFutureIndex=i;showFuture(pool[i]);setTimeout(()=>card?.classList.remove('spinning'),180)}},70)}
function setupGuide(){const modal=$('#guideModal');$$('[data-open-guide]').forEach(b=>b.addEventListener('click',()=>{if(modal?.showModal)modal.showModal();else modal?.setAttribute('open','')}));safe('#guideClose',e=>e.addEventListener('click',()=>modal?.close()));modal?.addEventListener('click',ev=>{if(ev.target===modal)modal.close()})}

async function init(){
  cfg=await fetch('assets/config.json',{cache:'no-store'}).then(r=>r.json());
  ['topUniscan','heroUniscan','beginnerUniscan','guideUniscan'].forEach(id=>safe('#'+id,e=>e.href=cfg.uniscanUrl));
  safe('#unisatCta',e=>e.href=cfg.unisatMintUrl);safe('#walletDownload',e=>e.href=cfg.unisatWalletUrl||'https://unisat.io/download');safe('#officialMintGuide',e=>e.href=cfg.unisatGuideUrl||'https://docs.unisat.io/products/unisat-inscribe/how-to-inscribe-on-unisat');
  safe('#mintCount',e=>e.addEventListener('input',updateMintCalc));safe('#lang',e=>e.addEventListener('click',()=>{lang=lang==='en'?'fr':'en';localStorage.setItem('quqnLang',lang);applyLang()}));
  safe('#spinFuture',e=>e.addEventListener('click',spinFuture));safe('#spinAgain',e=>e.addEventListener('click',spinFuture));safe('#futureImage',e=>e.addEventListener('click',()=>openLightbox(e.src,$('#futureTitle')?.textContent||'QUQN')));
  safe('#lightboxClose',e=>e.addEventListener('click',()=>$('#lightbox')?.classList.remove('open')));safe('#lightbox',e=>e.addEventListener('click',ev=>{if(ev.target===e)e.classList.remove('open')}));
  setupGuide(); applyLang(); setupSocial(); liveStats();
}
init().catch(console.error);
