const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const translations = {
  en: {
    navStory:'Story', navFair:'Fair Mint', navStart:'Start Here', navMint:'Quick Mint', navRanks:'The Coop', navGallery:'Gallery',
    newHere:'👋 I’m new — guide me', knowCrypto:'I know crypto — open QUQN ↗', meet:'Meet QUQN ↓',
    heroRisk:'Experimental meme token. No promise of profit, value or liquidity.', progress:'Mint progress', minted:'Minted', holders:'Holders', max:'Max supply', perMint:'Per mint', verify:'Verify the token on-chain ↗',
    fairLabel:'FAIR MINT FACTS', fairTitle:'No sale by the project. No fundraising.', fairNote:'QUQN does not sell tokens or receive fees, commissions, money, personal data or other benefits from prospective holders in exchange for QUQN. Bitcoin network and third-party service fees, if any, are paid outside this website and are not received by QUQN.', fairLegal:'Read the legal & MiCA note →',
    startKicker:'NEW TO CRYPTO?', startTitle:'Start here. Six small steps.',
    pathNewTitle:'I have never done this before', pathNewBody:'Perfect. Stay on this page and follow the guide from top to bottom.', pathNewBtn:'Show me how ↓',
    pathProTitle:'I already use Bitcoin / BRC-20', pathProBody:'Skip the tutorial and verify the exact QUQN ticker before minting.', pathProBtn:'Open QUQN on UniScan ↗',
    b1Label:'GET A WALLET', b1Title:'Install an official compatible Bitcoin wallet', b1Body:'UniSat Wallet is one option. Download it only from the official UniSat website. You can also use another wallet supported by the minting service.', walletDownload:'Official UniSat Wallet download ↗',
    b2Label:'PROTECT THE KEYS', b2Title:'Create the wallet and secure the recovery phrase', b2Body:'Your recovery phrase controls the wallet. Write it down offline. Never send it to QUQN, UniSat support, a friend, a website or anyone in a private message.', seedWarning:'⚠ Never screenshot, photograph, email or cloud-save your recovery phrase.',
    b3Label:'ADD BTC FOR FEES', b3Title:'Put a small amount of BTC in your wallet', b3Body:'Minting uses the Bitcoin network and a third-party inscription service, so fees apply. These fees do not go to QUQN. Check the total shown before confirming anything.',
    b4Label:'VERIFY BEFORE YOU CLICK', b4Title:'Open the exact QUQN page on UniScan', b4Body:'Do not trust a ticker sent in a random DM. Use the official link from this site and check the public token facts below.', openExact:'Open exact QUQN page ↗',
    b5Label:'HATCH QUQN', b5Title:'Choose how many mints you want', b5Body:'On the mint screen, verify “4-byte”, ticker QUQN and 1,000 QUQN per mint. UniSat can batch several mints. Review the receiving address and all fees before submitting.', calcLabel:'Number of mints', calcGets:'That corresponds to', officialGuide:'Read UniSat’s official mint guide ↗',
    b6Label:'WAIT & CHECK', b6Title:'Wait for Bitcoin confirmation, then check your wallet', b6Body:'Bitcoin transactions are not instant. Once the inscription is confirmed, check your wallet or a public explorer. Never pay somebody in a private message to “unlock” or “release” your QUQN.',
    safetyKicker:'THE ONE RULE TO REMEMBER', safetyTitle:'Your recovery phrase is never needed to mint QUQN.', safetyBody:'If anyone asks for it, stop. This website never connects a wallet and has no support agent who needs your seed phrase.', walletGuide:'Official wallet safety guide ↗',
    glossKicker:'MINI GLOSSARY', glossTitle:'The words QUQN pretends to understand.',
    gWallet:'Wallet', gWalletBody:'An app or extension that lets you control a Bitcoin address and sign transactions.',
    gSeed:'Recovery phrase', gSeedBody:'The secret words that can restore and control your wallet. Whoever has them can take the assets.',
    gMint:'Mint', gMintBody:'For QUQN, creating your allocation according to the public BRC-20 mint rules. One QUQN mint creates 1,000 QUQN.',
    gBrc:'BRC-20', gBrcBody:'A token standard built using inscriptions and indexing on Bitcoin. QUQN is a 4-character BRC-20 ticker.',
    gBatch:'Batch mint', gBatchBody:'Several mint inscriptions submitted in one order. Example: 10 mints correspond to 10,000 QUQN.',
    gFee:'Network / service fees', gFeeBody:'Costs paid to use Bitcoin and/or the independent inscription service. They vary and are not received by QUQN.',
    storyKicker:'MEET QUQN', storyTitle:'He started small.<br>His ego did not.', voiceNote:'— QUQN, in aggressively French English, seconds before doing something he barely understands.',
    mintKicker:'QUICK RECAP', mintTitle:'Already set up? Three checks before minting.', mintIntro:'For experienced users: verify your wallet, verify the exact QUQN ticker, then review the inscription amount and fees before you submit.', step1:'Use a compatible Bitcoin wallet', step1b:'Choose a wallet that supports Ordinals/BRC-20 and keep enough BTC for network and third-party fees.', step2:'Verify QUQN', step2b:'Open the exact QUQN ticker on UniScan. Check max supply, mint limit, progress and inscription details.', step3:'Mint only if you choose', step3b:'The deployed limit is 1,000 QUQN per mint. Fees vary with Bitcoin conditions and the service you use.',
    coopKicker:'THE COOP', coopTitle:'How unreasonable are your dreams?', coopIntro:'Community ranks are for fun. They currently create no financial rights or rewards. Wallet-verified collectible versions may be explored later, without promise.',
    galleryKicker:'QUQN AROUND THE WORLD', galleryTitle:'He has already spent the money he does not have.', showMore:'Show more dreams',
    personaKicker:'CHARACTER FILE', personaTitle:'Cute. French. Financially overconfident.', voice:'Voice', voiceV:'High-pitched chicken voice + very strong French accent. Suddenly deep when excited.', skill:'Special skill', skillV:'Jumping into things before understanding them.', enemy:'Natural enemies', enemyV:'Doubt, patience and realistic expectations.', mission:'Mission', missionV:'Leave the farm. Become absurdly rich. Work out the details later.',
    communityTitle:'A meme needs people, not promises.', communityBody:'X is for memes and QUQN’s terrible financial confidence. Telegram is for the Coop. Social links appear here once the official accounts are created.',
    faqTitle:'Before the coq gets carried away.', q1:'Is QUQN sold by this website or the project?', a1:'No. The website does not sell QUQN, connect to wallets, custody funds or receive payments for the token. Minting happens through independent third-party Bitcoin infrastructure.', q2:'Is QUQN free?', a2:'QUQN is intended as a fair mint with no consideration paid to the project in exchange for the token. A user may still pay Bitcoin network fees and third-party service fees to independent providers.', q3:'Does QUQN promise a listing or a market?', a3:'No. QUQN does not promise that any platform will admit the token to trading, that a secondary market will exist, or that there will be buyers or liquidity.', q4:'Can QUQN go to zero?', a4:'Yes. QUQN is experimental and highly speculative. It can have no market or value and any BTC spent on network or service fees can be lost economically.', q5:'Are the ranks NFTs?', a5:'Not today. They are community badge concepts only. A future collectible or Ordinal version may be explored, but it is not promised.', q6:'Is QUQN affiliated with Bitcoin, UniSat or UniScan?', a6:'No. QUQN is independent. Third-party names and trademarks belong to their respective owners.'
  },
  fr: {
    navStory:'Histoire', navFair:'Fair Mint', navStart:'Débuter', navMint:'Mint rapide', navRanks:'The Coop', navGallery:'Galerie',
    newHere:'👋 Je débute — guide-moi', knowCrypto:'Je connais la crypto — ouvrir QUQN ↗', meet:'Découvrir QUQN ↓',
    heroRisk:'Memecoin expérimental. Aucune promesse de profit, de valeur ou de liquidité.', progress:'Progression du mint', minted:'Minté', holders:'Détenteurs', max:'Offre max', perMint:'Par mint', verify:'Vérifier le token on-chain ↗',
    fairLabel:'FAITS DU FAIR MINT', fairTitle:'Aucune vente par le projet. Aucune levée de fonds.', fairNote:'QUQN ne vend pas de tokens et ne reçoit des détenteurs potentiels ni frais, ni commission, ni argent, ni données personnelles, ni autre avantage en échange de QUQN. Les éventuels frais du réseau Bitcoin et de services tiers sont payés en dehors de ce site et ne sont pas reçus par QUQN.', fairLegal:'Lire la note juridique & MiCA →',
    startKicker:'NOUVEAU EN CRYPTO ?', startTitle:'Commencez ici. Six petites étapes.',
    pathNewTitle:'Je n’ai jamais fait ça', pathNewBody:'Parfait. Restez sur cette page et suivez le guide tranquillement, de haut en bas.', pathNewBtn:'Montrez-moi ↓',
    pathProTitle:'J’utilise déjà Bitcoin / BRC-20', pathProBody:'Passez le tutoriel et vérifiez le ticker QUQN exact avant de minter.', pathProBtn:'Ouvrir QUQN sur UniScan ↗',
    b1Label:'OBTENIR UN WALLET', b1Title:'Installer un wallet Bitcoin compatible officiel', b1Body:'UniSat Wallet est une option. Téléchargez-le uniquement depuis le site officiel UniSat. Vous pouvez aussi utiliser un autre wallet pris en charge par le service de mint.', walletDownload:'Télécharger UniSat Wallet sur le site officiel ↗',
    b2Label:'PROTÉGER LES CLÉS', b2Title:'Créer le wallet et sécuriser la phrase de récupération', b2Body:'La phrase de récupération donne le contrôle du wallet. Notez-la hors ligne. Ne l’envoyez jamais à QUQN, au support UniSat, à un ami, à un site ou à quelqu’un en message privé.', seedWarning:'⚠ Ne faites jamais de capture, photo, e-mail ou sauvegarde cloud de votre phrase de récupération.',
    b3Label:'AJOUTER DU BTC POUR LES FRAIS', b3Title:'Mettre une petite quantité de BTC dans le wallet', b3Body:'Le mint utilise le réseau Bitcoin et un service tiers d’inscription : il y a donc des frais. Ces frais ne vont pas à QUQN. Vérifiez toujours le total affiché avant de confirmer.',
    b4Label:'VÉRIFIER AVANT DE CLIQUER', b4Title:'Ouvrir la page QUQN exacte sur UniScan', b4Body:'Ne faites pas confiance à un ticker reçu dans un DM. Utilisez le lien officiel de ce site et vérifiez les caractéristiques publiques ci-dessous.', openExact:'Ouvrir la page QUQN exacte ↗',
    b5Label:'HATCH QUQN', b5Title:'Choisir le nombre de mints', b5Body:'Sur l’écran de mint, vérifiez « 4-byte », le ticker QUQN et 1 000 QUQN par mint. UniSat permet de regrouper plusieurs mints. Vérifiez l’adresse de réception et tous les frais avant de valider.', calcLabel:'Nombre de mints', calcGets:'Cela correspond à', officialGuide:'Lire le guide officiel UniSat ↗',
    b6Label:'ATTENDRE & VÉRIFIER', b6Title:'Attendre la confirmation Bitcoin puis vérifier le wallet', b6Body:'Les transactions Bitcoin ne sont pas instantanées. Une fois l’inscription confirmée, vérifiez votre wallet ou un explorateur public. Ne payez jamais quelqu’un en message privé pour « débloquer » ou « libérer » vos QUQN.',
    safetyKicker:'LA RÈGLE À RETENIR', safetyTitle:'Votre phrase de récupération n’est jamais nécessaire pour minter QUQN.', safetyBody:'Si quelqu’un la demande, arrêtez-vous. Ce site ne connecte aucun wallet et aucun prétendu support QUQN n’a besoin de votre seed phrase.', walletGuide:'Guide officiel de sécurité du wallet ↗',
    glossKicker:'MINI GLOSSAIRE', glossTitle:'Les mots que QUQN fait semblant de comprendre.',
    gWallet:'Wallet', gWalletBody:'Une application ou extension qui permet de contrôler une adresse Bitcoin et de signer des transactions.',
    gSeed:'Phrase de récupération', gSeedBody:'Les mots secrets permettant de restaurer et contrôler votre wallet. La personne qui les possède peut prendre les actifs.',
    gMint:'Mint', gMintBody:'Pour QUQN, créer son allocation selon les règles publiques BRC-20. Un mint QUQN crée 1 000 QUQN.',
    gBrc:'BRC-20', gBrcBody:'Un standard de token construit à partir d’inscriptions et d’indexation sur Bitcoin. QUQN est un ticker BRC-20 de 4 caractères.',
    gBatch:'Batch mint', gBatchBody:'Plusieurs inscriptions de mint regroupées dans une même commande. Exemple : 10 mints correspondent à 10 000 QUQN.',
    gFee:'Frais réseau / service', gFeeBody:'Coûts liés à l’utilisation de Bitcoin et/ou du service indépendant d’inscription. Ils varient et ne sont pas reçus par QUQN.',
    storyKicker:'VOICI QUQN', storyTitle:'Il est parti de petit.<br>Pas son ego.', voiceNote:'— QUQN, dans un anglais très français, quelques secondes avant de faire un truc qu’il comprend à peine.',
    mintKicker:'RÉCAP RAPIDE', mintTitle:'Déjà équipé ? Trois vérifications avant de minter.', mintIntro:'Pour les utilisateurs habitués : vérifiez le wallet, le ticker QUQN exact, puis le montant de l’inscription et les frais avant de valider.', step1:'Utiliser un wallet Bitcoin compatible', step1b:'Choisissez un wallet compatible Ordinals/BRC-20 et gardez assez de BTC pour les frais réseau et tiers.', step2:'Vérifier QUQN', step2b:'Ouvrez le ticker QUQN exact sur UniScan. Vérifiez la supply, la limite, la progression et les détails de l’inscription.', step3:'Minter seulement si vous le décidez', step3b:'La limite déployée est de 1 000 QUQN par mint. Les frais varient selon Bitcoin et le service utilisé.',
    coopKicker:'THE COOP', coopTitle:'À quel point tes rêves sont-ils déraisonnables ?', coopIntro:'Les rangs communautaires sont là pour s’amuser. Ils ne donnent aujourd’hui aucun droit financier ni récompense. Des collectibles vérifiés par wallet pourront être explorés plus tard, sans promesse.',
    galleryKicker:'QUQN AUTOUR DU MONDE', galleryTitle:'Il a déjà dépensé l’argent qu’il n’a pas.', showMore:'Voir plus de rêves',
    personaKicker:'FICHE DU PERSONNAGE', personaTitle:'Mignon. Français. Financièrement trop confiant.', voice:'Voix', voiceV:'Voix aiguë de poulet + très fort accent français. Elle devient soudain grave quand il s’emballe.', skill:'Talent spécial', skillV:'Foncer dans les trucs avant de les comprendre.', enemy:'Ennemis naturels', enemyV:'Le doute, la patience et les attentes réalistes.', mission:'Mission', missionV:'Quitter la ferme. Devenir absurdement riche. Régler les détails plus tard.',
    communityTitle:'Un meme a besoin de gens, pas de promesses.', communityBody:'X servira aux memes et à la confiance financière catastrophique de QUQN. Telegram sera The Coop. Les liens apparaîtront ici dès que les comptes officiels seront créés.',
    faqTitle:'Avant que le coq ne s’emballe.', q1:'QUQN est-il vendu par ce site ou par le projet ?', a1:'Non. Le site ne vend pas QUQN, ne connecte pas les wallets, ne conserve aucun fonds et ne reçoit aucun paiement pour le token. Le mint passe par une infrastructure Bitcoin tierce indépendante.', q2:'QUQN est-il gratuit ?', a2:'QUQN est conçu comme un fair mint sans contrepartie versée au projet en échange du token. L’utilisateur peut néanmoins payer des frais réseau Bitcoin et des frais de service à des prestataires tiers indépendants.', q3:'QUQN promet-il un listing ou un marché ?', a3:'Non. QUQN ne promet pas qu’une plateforme admettra le token à la négociation, qu’un marché secondaire existera ou qu’il y aura des acheteurs ou de la liquidité.', q4:'QUQN peut-il valoir zéro ?', a4:'Oui. QUQN est expérimental et très spéculatif. Il peut n’avoir aucun marché ni aucune valeur, et les BTC dépensés en frais réseau ou services peuvent être économiquement perdus.', q5:'Les rangs sont-ils des NFT ?', a5:'Pas aujourd’hui. Ce sont uniquement des concepts de badges communautaires. Une version collectible ou Ordinal pourra être explorée plus tard, sans promesse.', q6:'QUQN est-il affilié à Bitcoin, UniSat ou UniScan ?', a6:'Non. QUQN est indépendant. Les noms et marques tiers appartiennent à leurs propriétaires respectifs.'
  }
};

let cfg, lang = localStorage.getItem('quqnLang') || 'en', visibleCount = 12, currentFilter = 'all';
const fmt = n => Number(n).toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US');

function applyLang(){
  document.documentElement.lang=lang;
  $('#lang').textContent=lang==='en'?'FR':'EN';
  $$('[data-t]').forEach(el=>{const v=translations[lang][el.dataset.t]; if(v!==undefined) el.innerHTML=v;});
  if(cfg){
    const c=(cfg.homeCopy && (cfg.homeCopy[lang] || cfg.homeCopy.en)) || {};
    const fallback=lang==='fr' ? {
      heroSubtitle:'Voici QUQN — le petit coq français qui représente tous les rêveurs crypto au petit portefeuille et aux ambitions totalement déraisonnables.',
      storyLead:'QUQN est né petit. Pas ses rêves.',
      storyBody:'Il regarde les baleines, les tokens de célébrités et les memecoins devenus légendaires depuis le bord de la ferme et se pose une seule question : « Pourquoi pas moi ? » QUQN est trop sûr de lui, impulsif, maladroit mais attachant, et persuadé qu’un jour le petit investisseur aura son tour. Il parle anglais avec un très fort accent français, fonce parfois avant d’avoir compris, et prend soudain une voix grave dès qu’il s’imagine milliardaire.',
      voiceQuote:'Zey say ze coq cannot fly? Pfff. Today, maybe. Tomorrow... BILLIONAIRE. Euh... probably.',
      beginnerLead:'Vous n’avez jamais utilisé de wallet Bitcoin ? Pas de problème. Suivez tranquillement les étapes ci-dessous. Vous n’envoyez jamais d’argent à QUQN et QUQN ne vous demandera jamais votre phrase de récupération.',
      beginnerQuote:'Première fois ? Euh… parfait. On va doucement. Même ze coq a réussi.'
    } : {
      heroSubtitle:'Meet QUQN — the tiny French coq who represents every crypto dreamer with a small wallet and completely unreasonable ambition.',
      storyLead:'QUQN was born small. His dreams were not.',
      storyBody:'He watches whales, celebrity coins and legendary memes from the edge of the farm and asks the only question that matters: ‘Why not me?’ QUQN is overconfident, impulsive, charmingly clumsy and absolutely convinced that one day the little guy gets his turn. He speaks English with a very strong French accent, often jumps into things before understanding them, and gets a suspiciously deep voice whenever he starts imagining himself as a billionaire.',
      voiceQuote:'Zey say ze coq cannot fly? Pfff. Today, maybe. Tomorrow... BILLIONAIRE. Euh... probably.',
      beginnerLead:'Never used a Bitcoin wallet? No problem. Follow the steps below slowly. You do not send money to QUQN, and QUQN will never ask for your recovery phrase.',
      beginnerQuote:'First time? Euh… perfect. We go slowly. Even ze coq managed it.'
    };
    $('#heroTitle').innerHTML=lang==='en'?'SMALL COQ.<br><em>BIG DREAMS.</em>':'PETIT COQ.<br><em>GRANDS RÊVES.</em>';
    $('#heroSubtitle').textContent=c.heroSubtitle || fallback.heroSubtitle;
    $('#storyLead').textContent=c.storyLead || fallback.storyLead;
    $('#storyBody').textContent=c.storyBody || fallback.storyBody;
    $('#voiceQuote').textContent=c.voiceQuote || fallback.voiceQuote;
    $('#beginnerLead').textContent=c.beginnerLead || fallback.beginnerLead;
    $('#beginnerQuote').textContent=c.beginnerQuote || fallback.beginnerQuote;
    $('#announcement').textContent=(cfg.announcement && (cfg.announcement[lang]||cfg.announcement.en)) || '';
  }
  updateMintCalc(); renderRanks(); renderGallery();
}

function renderRanks(){if(!cfg)return;$('#rankGrid').innerHTML=cfg.ranks.map(r=>`<article class="rank"><img src="${r.image}" alt="${r.name}" loading="lazy"><div><small>${fmt(r.threshold)}+ QUQN</small><h3>${r.name}</h3><p>${r.tag}</p></div></article>`).join('')}
function renderGallery(){if(!cfg)return;const cats=['all',...new Set(cfg.gallery.filter(x=>x.visible).map(x=>x.category))];$('#filters').innerHTML=cats.map(c=>`<button class="${c===currentFilter?'active':''}" data-filter="${c}">${c==='all'?(lang==='fr'?'Tout':'All'):c[0].toUpperCase()+c.slice(1)}</button>`).join('');$$('#filters button').forEach(b=>b.onclick=()=>{currentFilter=b.dataset.filter;visibleCount=12;renderGallery()});const items=cfg.gallery.filter(x=>x.visible&&(currentFilter==='all'||x.category===currentFilter));$('#galleryGrid').innerHTML=items.slice(0,visibleCount).map(x=>`<article class="gallery-item" data-src="${x.src}" data-title="${x.title}"><img src="${x.src}" alt="${x.title}" loading="lazy"><span>${x.title}</span></article>`).join('');$$('.gallery-item').forEach(el=>el.onclick=()=>openLightbox(el.dataset.src,el.dataset.title));$('#showMore').style.display=items.length>visibleCount?'inline-flex':'none'}
function openLightbox(src,title){$('#lightboxImg').src=src;$('#lightboxTitle').textContent=title;$('#lightbox').classList.add('open');$('#lightbox').setAttribute('aria-hidden','false')}
function setStats(minted,holders){minted=Number(minted)||cfg.fallbackMinted;holders=Number(holders)||cfg.fallbackHolders;const pct=Math.min(100,(minted/cfg.maxSupply)*100);$('#minted').textContent=fmt(minted);$('#holders').textContent=fmt(holders);$('#progressPct').textContent=pct.toFixed(2)+'%';$('#meterFill').style.width=Math.max(.35,pct)+'%'}
async function liveStats(){setStats(cfg.fallbackMinted,cfg.fallbackHolders);if(!cfg.autoSync||!cfg.apiBase){$('#syncState').textContent='FALLBACK';return}try{const r=await fetch(cfg.apiBase.replace(/\/$/,'')+'/api/token',{cache:'no-store'});if(!r.ok)throw Error();const d=await r.json();setStats(d.totalMinted||d.minted,d.holdersCount);$('#syncState').textContent='LIVE'}catch{$('#syncState').textContent='FALLBACK'}}
function setupSocial(){const s=cfg.social||{};let html='';html+=s.x?`<a class="btn dark" href="${s.x}" target="_blank" rel="noopener">𝕏 Follow QUQN</a>`:`<span class="btn dark disabled">𝕏 X — coming soon</span>`;html+=s.telegram?`<a class="btn dark" href="${s.telegram}" target="_blank" rel="noopener">✈ Join Telegram</a>`:`<span class="btn dark disabled">✈ Telegram — coming soon</span>`;$('#socialButtons').innerHTML=html}
function updateMintCalc(){const input=$('#mintCount'); if(!input||!cfg)return;let n=Math.max(1,Math.min(21000,Number(input.value)||1));$('#mintCalcResult').textContent=`${fmt(n*cfg.mintLimit)} QUQN`}

async function init(){
  cfg=await fetch('assets/config.json',{cache:'no-store'}).then(r=>r.json());
  $('#heroImage').style.backgroundImage=`url('${cfg.heroImage}')`;
  ['topUniscan','verifyLink','uniscanCta','proUniscan','beginnerUniscan'].forEach(id=>{const el=$('#'+id); if(el)el.href=cfg.uniscanUrl});
  $('#heroMint').href=cfg.uniscanUrl;
  $('#unisatCta').href=cfg.unisatMintUrl;
  $('#walletDownload').href=cfg.unisatWalletUrl||'https://unisat.io/download';
  $('#officialMintGuide').href=cfg.unisatGuideUrl||'https://docs.unisat.io/products/unisat-inscribe/how-to-inscribe-on-unisat';
  $('#walletGuide').href=cfg.unisatWalletGuideUrl||'https://docs.unisat.io/products/unisat-wallet/how-to-create-unisat-wallet';
  $('#mintCount').addEventListener('input',updateMintCalc);
  $('#showMore').onclick=()=>{visibleCount+=12;renderGallery()};
  $('#lang').onclick=()=>{lang=lang==='en'?'fr':'en';localStorage.setItem('quqnLang',lang);applyLang()};
  $('#lightboxClose').onclick=()=>$('#lightbox').classList.remove('open');
  $('#lightbox').onclick=e=>{if(e.target===$('#lightbox'))$('#lightbox').classList.remove('open')};
  applyLang(); setupSocial(); liveStats();
}
init().catch(console.error);
