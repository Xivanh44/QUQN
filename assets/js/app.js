const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const translations = {
  en: {
    navStory:'Story', navSeason:'This season', navMint:'Mint', navGame:'Billionaire game', navRanks:'The Coop', navGuide:'How it works',
    howBtn:'HOW QUQN WORKS', viewBtn:'VIEW QUQN ON UNISCAN ↗', quickMintKicker:'READY TO MINT?', quickMintTitle:'Choose your route', quickUnisat:'Recommended · BRC-20 mint', quickOkx:'Alternative · Official mint guide', quickOpen:'OPEN ↗', quickMintNote:'Third-party services. Always verify ticker QUQN and Bitcoin before confirming.', heroRisk:'Experimental meme token. No promise of profit, value or liquidity.',
    progress:'Mint progress', minted:'Minted', holders:'Holders', max:'Max supply', perMint:'Per mint',
    storyKicker:'MEET QUQN', storyTitle:'He started small.<br>His ego did not.', voiceNote:'— QUQN', netWorth:'Current net worth: <strong>emotionally billionaire.</strong>',
    seasonKicker:'QUQN THIS SEASON',
    gameKicker:'THE COMPLETELY SCIENTIFIC QUQN TEST', gameTitle:'What kind of billionaire will you be?', gameIntro:'One click. Zero science. QUQN decides your imaginary billionaire future.', gameButton:'SPIN MY FUTURE', gameDisclaimer:'Just a random meme game. Not a prediction, promise or financial advice. Obviously.', yourFuture:'YOUR QUQN FUTURE', spinAgain:'Try another destiny ↻',
    coopKicker:'THE COOP', coopTitle:'How unreasonable are your dreams?', coopIntro:'Community ranks are for fun. They currently create no financial rights or rewards.',
    personaKicker:'CHARACTER FILE', personaTitle:'Cute. Cocky. Financially overconfident.', voice:'Voice', voiceV:'High-pitched cartoon coq chirp. Gets extra dramatic when excited.', skill:'Special skill', skillV:'Jumping into things before understanding them.', enemy:'Natural enemies', enemyV:'Doubt, patience and realistic expectations.', mission:'Mission', missionV:'Leave the farm. Become absurdly rich. Work out the details later.',
    communityTitle:'A meme needs people, not promises.', communityBody:'Follow QUQN on X for memes, Coop updates and on-chain milestones. Join the QUQN community on Telegram.',
    faqTitle:'Before the coq gets carried away.', q1:'Is QUQN sold by this website or the project?', a1:'No. The website does not sell QUQN, connect to wallets, custody funds or receive payments for the token.', q2:'Where are the technical details?', faqGuide:'Open the complete fair-mint & beginner guide →', q3:'Can QUQN go to zero?', a3:'Yes. QUQN is experimental and highly speculative. It can have no market or value.', q4:'What is a BRC-20 fair mint?', a4:'A BRC-20 fair mint lets participants mint tokens under the same public rules until the maximum supply is reached. For QUQN, there was no presale or ICO and the project does not receive a creator mint fee.', q5:'How do I mint QUQN?', a5:'Use the QUQN beginner guide to verify Bitcoin, ticker QUQN, the 21,000,000 maximum supply and the 1,000 QUQN mint limit, then choose a compatible third-party service such as UniSat or OKX Wallet.',
    guideKicker:'HOW QUQN WORKS', guideTitle:'From zero to your first QUQN.', fairLabel:'FAIR MINT FACTS', fairTitle:'No sale by the project. No fundraising.', fairNote:'QUQN does not sell tokens or receive fees, commissions, money, personal data or other benefits from prospective holders in exchange for QUQN. Bitcoin network and third-party service fees, if any, are paid outside this website and are not received by QUQN.', fairLegal:'Read the legal & MiCA note →',
    b1Label:'GET A WALLET', b1Title:'Choose a compatible Bitcoin wallet', b1Body:'You can use UniSat Wallet or OKX Wallet. Download wallets only from their official websites and never share your recovery phrase.', walletDownload:'Official UniSat Wallet ↗', okxWalletDownload:'Official OKX Wallet ↗',
    b2Label:'PROTECT THE KEYS', b2Title:'Create the wallet and secure the recovery phrase', b2Body:'Your recovery phrase controls the wallet. Write it down offline. Never send it to anyone.', seedWarning:'⚠ Never screenshot, photograph, email or cloud-save your recovery phrase.',
    b3Label:'ADD BTC FOR FEES', b3Title:'Put a small amount of BTC in your wallet', b3Body:'Minting uses the Bitcoin network and a third-party inscription service, so fees apply. These fees do not go to QUQN.',
    b4Label:'VERIFY BEFORE YOU CLICK', b4Title:'Open the exact QUQN page on UniScan', openExact:'Open exact QUQN page ↗',
    b5Label:'HATCH QUQN', b5Title:'Choose your mint route', b5Body:'QUQN is a standard 4-byte BRC-20 on Bitcoin. You can mint it through a compatible third-party BRC-20 inscription service. UniSat is the recommended route, and OKX Wallet is an alternative.', calcLabel:'Number of full mints', calcGets:'At 1,000 QUQN per full mint, that corresponds to', officialGuide:'UniSat guide ↗',
    unisatOptionTitle:'Option 1 — UniSat', recommended:'RECOMMENDED', unisatStep1:'Open the UniSat BRC-20 inscription page.', unisatStep2:'Search for ticker <code>QUQN</code> and open it.', unisatStep3:'Select <strong>Mint</strong> and confirm it is the <strong>4-byte (classic)</strong> BRC-20.', unisatStep4:'Verify <strong>1,000 QUQN</strong> for a full mint and choose the number of mints.', unisatStep5:'Check the receiving Bitcoin address and all network/service fees.', unisatStep6:'Confirm the order and wait for Bitcoin confirmation.', openUnisatMint:'Open UniSat BRC-20 mint ↗',
    okxOptionTitle:'Option 2 — OKX Wallet', okxStep1:'Open OKX Wallet and go to <strong>More → NFT → Inscriptions → Inscription Center</strong>.', okxStep2:'Select the Bitcoin/BRC-20 inscription route, then <strong>Mint</strong>.', okxStep3:'Enter ticker <code>QUQN</code>.', okxStep4:'Enter <strong>1,000 QUQN</strong> for a full mint and choose the number of mints.', okxStep5:'Enter or verify the recipient Bitcoin address.', okxStep6:'Review the mint summary and fees, then confirm.', okxGuide:'Official OKX BRC-20 guide ↗', mintImportant:'<strong>Important:</strong> always verify <strong>Bitcoin</strong>, ticker <strong>QUQN</strong>, maximum supply <strong>21,000,000</strong> and the official UniScan page before minting. Third-party interfaces and fees can change.',
    verifyUniscan:'Verify QUQN on UniScan ↗', mintUnisat:'Mint with UniSat ↗', mintOkx:'Mint with OKX Wallet ↗',
    b6Label:'WAIT & CHECK', b6Title:'Wait for Bitcoin confirmation, then check your wallet', b6Body:'Bitcoin transactions are not instant. Never pay somebody in a private message to “unlock” or “release” your QUQN.',
    safetyKicker:'THE ONE RULE TO REMEMBER', safetyTitle:'Your recovery phrase is never needed to mint QUQN.', safetyBody:'If anyone asks for it, stop.'
  },
  fr: {
    navStory:'Histoire', navSeason:'Cette saison', navMint:'Minter', navGame:'Jeu du milliardaire', navRanks:'The Coop', navGuide:'Comment ça marche',
    howBtn:'COMMENT ÇA MARCHE', viewBtn:'VOIR QUQN SUR UNISCAN ↗', quickMintKicker:'PRÊT À MINTER ?', quickMintTitle:'Choisis ton option', quickUnisat:'Recommandé · Mint BRC-20', quickOkx:'Alternative · Guide officiel de mint', quickOpen:'OUVRIR ↗', quickMintNote:'Services tiers. Vérifie toujours le ticker QUQN et le réseau Bitcoin avant de confirmer.', heroRisk:'Memecoin expérimental. Aucune promesse de profit, de valeur ou de liquidité.',
    progress:'Progression du mint', minted:'Minté', holders:'Détenteurs', max:'Offre max', perMint:'Par mint',
    storyKicker:'DÉCOUVRIR QUQN', storyTitle:'Il est né petit.<br>Pas son ego.', voiceNote:'— QUQN', netWorth:'Patrimoine actuel : <strong>milliardaire émotionnel.</strong>',
    seasonKicker:'QUQN CETTE SAISON',
    gameKicker:'LE TEST QUQN TOTALEMENT SCIENTIFIQUE', gameTitle:'Quel genre de milliardaire seras-tu ?', gameIntro:'Un clic. Zéro science. QUQN décide de ton futur de milliardaire imaginaire.', gameButton:'LANCE MON FUTUR', gameDisclaimer:'Un jeu aléatoire pour rire. Ce n’est ni une prédiction, ni une promesse, ni un conseil financier. Évidemment.', yourFuture:'TON FUTUR VERSION QUQN', spinAgain:'Essayer un autre destin ↻',
    coopKicker:'THE COOP', coopTitle:'À quel point tes rêves sont-ils déraisonnables ?', coopIntro:'Les rangs communautaires sont là pour s’amuser. Ils ne donnent aujourd’hui aucun droit financier ni récompense.',
    personaKicker:'FICHE DU PERSONNAGE', personaTitle:'Mignon. Culotté. Financièrement trop confiant.', voice:'Voix', voiceV:'Petit cri de coq cartoon, aigu et expressif. Encore plus dramatique quand il s’emballe.', skill:'Talent spécial', skillV:'Foncer dans les choses avant de les comprendre.', enemy:'Ennemis naturels', enemyV:'Le doute, la patience et les attentes réalistes.', mission:'Mission', missionV:'Quitter la ferme. Devenir absurdement riche. Régler les détails plus tard.',
    communityTitle:'Un meme a besoin de gens, pas de promesses.', communityBody:'Retrouve QUQN sur X pour les memes, les mises à jour de The Coop et les étapes on-chain. Rejoins aussi la communauté QUQN sur Telegram.',
    faqTitle:'Avant que le coq ne s’emballe.', q1:'QUQN est-il vendu par ce site ou le projet ?', a1:'Non. Le site ne vend pas QUQN, ne connecte pas de wallet, ne conserve aucun fonds et ne reçoit aucun paiement pour le token.', q2:'Où sont les détails techniques ?', faqGuide:'Ouvrir le guide complet fair mint & débutant →', q3:'QUQN peut-il valoir zéro ?', a3:'Oui. QUQN est expérimental et très spéculatif. Il peut n’avoir aucun marché ni aucune valeur.', q4:'Qu’est-ce qu’un fair mint BRC-20 ?', a4:'Un fair mint BRC-20 permet aux participants de minter selon les mêmes règles publiques jusqu’à ce que l’offre maximale soit atteinte. Pour QUQN, il n’y a eu ni prévente ni ICO et le projet ne reçoit pas de frais de mint créateur.', q5:'Comment minter QUQN ?', a5:'Utilise le guide débutant QUQN pour vérifier Bitcoin, le ticker QUQN, l’offre maximale de 21 000 000 et la limite de 1 000 QUQN par mint, puis choisis un service tiers compatible comme UniSat ou OKX Wallet.',
    guideKicker:'COMMENT QUQN FONCTIONNE', guideTitle:'De zéro à tes premiers QUQN.', fairLabel:'FAITS DU FAIR MINT', fairTitle:'Aucune vente par le projet. Aucune levée de fonds.', fairNote:'QUQN ne vend pas de tokens et ne reçoit des détenteurs potentiels ni frais, ni commission, ni argent, ni données personnelles, ni autre avantage en échange de QUQN. Les éventuels frais du réseau Bitcoin et de services tiers sont payés en dehors de ce site et ne sont pas reçus par QUQN.', fairLegal:'Lire la note juridique & MiCA →',
    b1Label:'OBTENIR UN WALLET', b1Title:'Choisir un wallet Bitcoin compatible', b1Body:'Tu peux utiliser UniSat Wallet ou OKX Wallet. Télécharge-les uniquement depuis leurs sites officiels et ne partage jamais ta phrase de récupération.', walletDownload:'Wallet UniSat officiel ↗', okxWalletDownload:'Wallet OKX officiel ↗',
    b2Label:'PROTÉGER LES CLÉS', b2Title:'Créer le wallet et sécuriser la phrase de récupération', b2Body:'Ta phrase de récupération contrôle le wallet. Note-la hors ligne. Ne l’envoie jamais à personne.', seedWarning:'⚠ Ne fais jamais de capture, photo, e-mail ou sauvegarde cloud de ta phrase de récupération.',
    b3Label:'AJOUTER DU BTC POUR LES FRAIS', b3Title:'Mettre une petite quantité de BTC dans le wallet', b3Body:'Le mint utilise le réseau Bitcoin et un service tiers d’inscription : des frais s’appliquent. Ces frais ne vont pas à QUQN.',
    b4Label:'VÉRIFIER AVANT DE CLIQUER', b4Title:'Ouvrir la page QUQN exacte sur UniScan', openExact:'Ouvrir la page QUQN exacte ↗',
    b5Label:'HATCH QUQN', b5Title:'Choisir comment minter QUQN', b5Body:'QUQN est un BRC-20 classique 4-byte sur Bitcoin. Tu peux le minter avec un service tiers compatible BRC-20. UniSat est l’option recommandée et OKX Wallet est une alternative.', calcLabel:'Nombre de mints complets', calcGets:'À 1 000 QUQN par mint complet, cela correspond à', officialGuide:'Guide UniSat ↗',
    unisatOptionTitle:'Option 1 — UniSat', recommended:'RECOMMANDÉ', unisatStep1:'Ouvre la page d’inscription BRC-20 de UniSat.', unisatStep2:'Recherche le ticker <code>QUQN</code> et ouvre-le.', unisatStep3:'Choisis <strong>Mint</strong> et vérifie qu’il s’agit bien du BRC-20 <strong>4-byte (classic)</strong>.', unisatStep4:'Vérifie <strong>1 000 QUQN</strong> pour un mint complet et choisis le nombre de mints.', unisatStep5:'Vérifie l’adresse Bitcoin de réception ainsi que tous les frais réseau et service.', unisatStep6:'Confirme l’ordre puis attends la confirmation Bitcoin.', openUnisatMint:'Ouvrir le mint BRC-20 UniSat ↗',
    okxOptionTitle:'Option 2 — OKX Wallet', okxStep1:'Ouvre OKX Wallet puis va dans <strong>Plus → NFT → Inscriptions → Centre d’inscription</strong>.', okxStep2:'Choisis le parcours Bitcoin/BRC-20 puis <strong>Mint</strong>.', okxStep3:'Entre le ticker <code>QUQN</code>.', okxStep4:'Entre <strong>1 000 QUQN</strong> pour un mint complet et choisis le nombre de mints.', okxStep5:'Entre ou vérifie l’adresse Bitcoin du destinataire.', okxStep6:'Vérifie le récapitulatif et les frais, puis confirme.', okxGuide:'Guide BRC-20 officiel OKX ↗', mintImportant:'<strong>Important :</strong> vérifie toujours le réseau <strong>Bitcoin</strong>, le ticker <strong>QUQN</strong>, l’offre maximale de <strong>21 000 000</strong> et la page UniScan officielle avant de minter. Les interfaces et frais des services tiers peuvent évoluer.',
    verifyUniscan:'Vérifier QUQN sur UniScan ↗', mintUnisat:'Minter avec UniSat ↗', mintOkx:'Minter avec OKX Wallet ↗',
    b6Label:'ATTENDRE & VÉRIFIER', b6Title:'Attendre la confirmation Bitcoin puis vérifier le wallet', b6Body:'Les transactions Bitcoin ne sont pas instantanées. Ne paie jamais quelqu’un en message privé pour “débloquer” tes QUQN.',
    safetyKicker:'LA RÈGLE À RETENIR', safetyTitle:'Ta phrase de récupération n’est jamais nécessaire pour minter QUQN.', safetyBody:'Si quelqu’un te la demande, arrête-toi.'
  },


  ko: {
    navStory:'스토리', navSeason:'이번 시즌', navMint:'민트', navGame:'억만장자 게임', navRanks:'The Coop', navGuide:'이용 방법',
    topUniscan:'UniScan에서 보기 ↗',
    howBtn:'QUQN 작동 방식', viewBtn:'UNISCAN에서 QUQN 보기 ↗',
    quickMintKicker:'민트할 준비됐나요?', quickMintTitle:'방법을 선택하세요', quickUnisat:'추천 · BRC-20 민트', quickOkx:'대안 · 공식 민트 가이드', quickOpen:'열기 ↗',
    quickMintNote:'아래 서비스는 제3자 서비스입니다. 확인 전에 항상 ticker가 QUQN인지, 네트워크가 Bitcoin인지 확인하세요.',
    heroRisk:'실험적인 밈 토큰입니다. 수익, 가치 또는 유동성을 보장하지 않습니다.',
    heroEyebrow:'🐓 BRC-20 · BITCOIN MAINNET · FAIR MINT',
    noPresale:'프리세일 없음', noIco:'ICO 없음', noFundraising:'모금 없음', noCreatorFee:'크리에이터 민트 수수료 없음', fairMint:'FAIR MINT',
    progress:'민트 진행률', minted:'민트됨', holders:'보유자', max:'최대 공급량', perMint:'민트당',
    storyKicker:'QUQN 소개', storyTitle:'작은 수탉.<br>큰 꿈.', voiceNote:'— QUQN', netWorth:'현재 순자산: <strong>마음만은 이미 억만장자.</strong>',
    seasonKicker:'QUQN 이번 시즌',
    gameKicker:'완전히 “과학적인” QUQN 테스트', gameTitle:'당신은 어떤 억만장자가 될까요?', gameIntro:'한 번 눌러보세요. 과학적 근거는 0%. QUQN이 당신의 상상 속 억만장자 라이프를 정합니다.', gameButton:'내 미래 뽑기', gameDisclaimer:'무작위 밈 게임입니다. 예측, 약속 또는 투자 조언이 아닙니다. 당연하죠.', yourFuture:'당신의 QUQN 미래', spinAgain:'다시 뽑기 ↻',
    coopKicker:'THE COOP · 커뮤니티', coopTitle:'당신의 꿈은 얼마나 터무니없나요?', coopIntro:'커뮤니티 랭크는 재미를 위한 것입니다. 현재 어떠한 금융적 권리나 보상을 제공하지 않습니다.',
    personaKicker:'캐릭터 파일', personaTitle:'귀엽고. 자신감 넘치고. 부에 대해 지나치게 낙관적.', voice:'목소리', voiceV:'높고 만화 같은 수탉 목소리. 흥분하면 갑자기 더 드라마틱해집니다.', skill:'특기', skillV:'완전히 이해하기도 전에 일단 뛰어들기.', enemy:'천적', enemyV:'의심, 인내심, 그리고 현실적인 기대.', mission:'미션', missionV:'농장을 떠나 말도 안 되게 부자가 되기. 세부사항은 나중에.',
    communityTitle:'밈에는 사람이 필요합니다. 약속이 아니라.', communityBody:'X에서 QUQN을 팔로우하고 밈, Coop 업데이트, 온체인 이정표를 확인하세요. Telegram 커뮤니티에도 참여할 수 있습니다.',
    roadKicker:'2,100만 QUQN을 향한 길', roadTitle:'농장에서 출발해,<br>말도 안 되게 큰 꿈으로.', roadBody:'이것은 공급량 민트 진행률이지 가격 목표가 아닙니다. 실제 QUQN 민트 하나하나가 이 작은 수탉을 길 위에서 조금씩 앞으로 보냅니다.', roadLoading:'현재 민트 진행률 불러오는 중…',
    aboutKicker:'BITCOIN · BRC-20 · FAIR MINT', aboutTitle:'QUQN이란?',
    aboutLead:'QUQN은 Bitcoin 메인넷의 커뮤니티 중심 BRC-20 밈 코인으로, 터무니없이 큰 암호화폐 꿈을 꾸는 작은 수탉을 중심으로 합니다.',
    aboutBody:'QUQN은 프리세일, ICO, 크리에이터 민트 수수료 없이 fair mint로 시작했습니다. 최대 공급량은 21,000,000 QUQN이며, 1회 전체 민트는 1,000 QUQN입니다. Bitcoin과 BRC-20 문화, 밈, 가벼운 커뮤니티 분위기, 그리고 <strong>Small Coq. Big Dreams.</strong>라는 슬로건을 결합합니다.',
    aboutGuide:'Bitcoin 인스크립션이나 BRC-20이 처음이라면 초보자 가이드를 통해 ticker 확인, 수수료 이해, UniSat 또는 OKX Wallet 같은 호환 가능한 제3자 서비스를 이용한 QUQN 민트 방법을 확인할 수 있습니다.',
    aboutMintBtn:'QUQN 민트 방법',
    faqTitle:'이 작은 수탉이 너무 들뜨기 전에.', q1:'QUQN은 이 사이트나 프로젝트가 판매하나요?', a1:'아니요. 이 사이트는 QUQN을 판매하지 않고, 지갑을 연결하지 않으며, 자금을 보관하거나 토큰 구매 대금을 받지 않습니다.', q2:'기술 정보는 어디에 있나요?', faqGuide:'전체 fair mint 및 초보자 가이드 열기 →', q3:'QUQN이 0이 될 수 있나요?', a3:'네. QUQN은 실험적이고 매우 투기적인 자산입니다. 시장이나 가치가 전혀 없을 수도 있습니다.', q4:'BRC-20 fair mint란?', a4:'모든 참여자가 동일한 공개 규칙에 따라 최대 공급량이 채워질 때까지 민트하는 방식입니다. QUQN은 프리세일이나 ICO가 없었고, 프로젝트는 크리에이터 민트 수수료를 받지 않습니다.', q5:'QUQN은 어떻게 민트하나요?', a5:'QUQN 초보자 가이드에서 Bitcoin 네트워크, ticker QUQN, 최대 공급량 21,000,000, 1회 민트 한도 1,000 QUQN을 확인한 후 UniSat 또는 OKX Wallet 같은 호환 서비스를 선택하세요.',
    guideKicker:'QUQN 작동 방식', guideTitle:'0에서 첫 QUQN까지.', fairLabel:'FAIR MINT 사실', fairTitle:'프로젝트는 토큰을 판매하지도, 모금을 하지도 않습니다.', fairNote:'QUQN은 토큰을 판매하지 않으며, 잠재 보유자가 QUQN을 얻는 대가로 수수료, 커미션, 자금, 개인정보 또는 기타 이익을 받지 않습니다. Bitcoin 네트워크 수수료 및 제3자 서비스 수수료가 있다면 모두 이 웹사이트 밖에서 지불되며 QUQN 프로젝트는 이를 받지 않습니다.', fairLegal:'법률 및 MiCA 안내 보기 →',
    b1Label:'지갑 준비', b1Title:'호환 Bitcoin 지갑 선택', b1Body:'UniSat Wallet 또는 OKX Wallet을 사용할 수 있습니다. 반드시 공식 웹사이트에서만 다운로드하고, 복구 구문은 절대 공유하지 마세요.', walletDownload:'공식 UniSat Wallet ↗', okxWalletDownload:'공식 OKX Wallet ↗',
    b2Label:'키 보호', b2Title:'지갑을 만들고 복구 구문을 안전하게 보관', b2Body:'복구 구문은 지갑을 통제합니다. 오프라인에 적어 보관하고 절대 누구에게도 보내지 마세요.', seedWarning:'⚠ 스크린샷, 사진 촬영, 이메일 전송, 클라우드 저장을 하지 마세요.',
    b3Label:'수수료용 BTC 준비', b3Title:'지갑에 소량의 BTC 준비', b3Body:'민트에는 Bitcoin 네트워크와 제3자 인스크립션 서비스가 사용되므로 수수료가 발생합니다. 이 수수료는 QUQN에 지급되지 않습니다.',
    b4Label:'클릭 전 확인', b4Title:'UniScan에서 정확한 QUQN 페이지 열기', openExact:'공식 QUQN UniScan 페이지 열기 ↗',
    fpTicker:'TICKER', fpNetwork:'네트워크', fpMax:'최대 공급량', fpPerMint:'민트당', fpInscription:'INSCRIPTION #',
    b5Label:'QUQN 부화시키기', b5Title:'민트 경로 선택', b5Body:'QUQN은 Bitcoin의 표준 4-byte BRC-20입니다. 호환되는 제3자 BRC-20 인스크립션 서비스를 통해 민트할 수 있습니다. UniSat을 추천하며 OKX Wallet도 대안입니다.', calcLabel:'전체 민트 횟수', calcGets:'전체 민트 1회당 1,000 QUQN, 총', officialGuide:'UniSat 가이드 ↗',
    unisatOptionTitle:'옵션 1 — UniSat', recommended:'추천', unisatStep1:'UniSat BRC-20 인스크립션 페이지를 엽니다.', unisatStep2:'ticker <code>QUQN</code>을 검색해 엽니다.', unisatStep3:'<strong>Mint</strong>를 선택하고 <strong>4-byte (classic)</strong> BRC-20인지 확인합니다.', unisatStep4:'전체 민트 1회가 <strong>1,000 QUQN</strong>인지 확인하고 민트 횟수를 선택합니다.', unisatStep5:'수신 Bitcoin 주소와 모든 네트워크/서비스 수수료를 확인합니다.', unisatStep6:'주문을 확인하고 Bitcoin 확인을 기다립니다.', openUnisatMint:'UniSat BRC-20 민트 열기 ↗',
    okxOptionTitle:'옵션 2 — OKX Wallet', okxStep1:'OKX Wallet을 열고 <strong>더보기 → NFT → Inscriptions → Inscription Center</strong>로 이동합니다.', okxStep2:'Bitcoin/BRC-20 인스크립션 경로를 선택한 뒤 <strong>Mint</strong>를 선택합니다.', okxStep3:'ticker <code>QUQN</code>을 입력합니다.', okxStep4:'전체 민트에는 <strong>1,000 QUQN</strong>을 입력하고 민트 횟수를 선택합니다.', okxStep5:'수신 Bitcoin 주소를 입력하거나 확인합니다.', okxStep6:'민트 요약과 수수료를 확인한 뒤 승인합니다.', okxGuide:'공식 OKX BRC-20 가이드 ↗',
    mintImportant:'<strong>중요:</strong> 민트 전에 항상 <strong>Bitcoin</strong> 네트워크, ticker <strong>QUQN</strong>, 최대 공급량 <strong>21,000,000</strong>, 공식 UniScan 페이지를 확인하세요. 제3자 인터페이스와 수수료는 변경될 수 있습니다.',
    verifyUniscan:'UniScan에서 QUQN 확인 ↗', mintUnisat:'UniSat으로 민트 ↗', mintOkx:'OKX Wallet으로 민트 ↗',
    b6Label:'기다리고 확인', b6Title:'Bitcoin 확인을 기다린 뒤 지갑 확인', b6Body:'Bitcoin 거래는 즉시 완료되지 않습니다. QUQN을 “해제”하거나 “풀어준다”며 DM으로 돈을 요구하는 사람에게 절대 지불하지 마세요.',
    safetyKicker:'한 가지만 기억하세요', safetyTitle:'QUQN 민트에는 복구 구문이 절대 필요하지 않습니다.', safetyBody:'누군가 복구 구문을 요구하면 즉시 중단하세요.',
    riskLegal:'위험 및 법률', privacy:'개인정보 보호', footerNote:'Bitcoin 문화 위에 만들어졌습니다. 투자 조언이 아니며, 어떠한 가치도 보장하지 않습니다.'
  },

  pt: {
    navStory:'História', navSeason:'Nesta temporada', navMint:'Mint', navGame:'Jogo do bilionário', navRanks:'The Coop', navGuide:'Como funciona',
    topUniscan:'Ver no UniScan ↗',
    howBtn:'COMO O QUQN FUNCIONA', viewBtn:'VER QUQN NO UNISCAN ↗',
    quickMintKicker:'PRONTO PARA MINTAR?', quickMintTitle:'Escolha sua rota', quickUnisat:'Recomendado · Mint BRC-20', quickOkx:'Alternativa · Guia oficial', quickOpen:'ABRIR ↗',
    quickMintNote:'Serviços de terceiros. Sempre confira o ticker QUQN e a rede Bitcoin antes de confirmar.',
    heroRisk:'Memecoin experimental. Sem promessa de lucro, valor ou liquidez.',
    heroEyebrow:'🐓 BRC-20 · BITCOIN MAINNET · FAIR MINT',
    noPresale:'SEM PRÉ-VENDA', noIco:'SEM ICO', noFundraising:'SEM CAPTAÇÃO', noCreatorFee:'SEM TAXA DE MINT DO CRIADOR', fairMint:'FAIR MINT',
    progress:'Progresso do mint', minted:'Mintado', holders:'Holders', max:'Oferta máxima', perMint:'Por mint',
    storyKicker:'CONHEÇA QUQN', storyTitle:'Coq pequeno.<br>Sonhos grandes.', voiceNote:'— QUQN', netWorth:'Patrimônio atual: <strong>bilionário na cabeça.</strong>',
    seasonKicker:'QUQN NESTA TEMPORADA',
    gameKicker:'O TESTE QUQN TOTALMENTE “CIENTÍFICO”', gameTitle:'Que tipo de bilionário você seria?', gameIntro:'Toque uma vez. Zero ciência. QUQN decide sua vida imaginária de bilionário.', gameButton:'SORTear MEU FUTURO', gameDisclaimer:'Jogo meme totalmente aleatório. Não é previsão, promessa nem conselho de investimento. Obviamente.', yourFuture:'Seu futuro QUQN', spinAgain:'Tentar outro destino ↻',
    coopKicker:'THE COOP · COMUNIDADE', coopTitle:'Quão absurdos são seus sonhos?', coopIntro:'Os ranks da comunidade são só por diversão. No momento não dão direitos financeiros nem recompensas.',
    personaKicker:'FICHA DO PERSONAGEM', personaTitle:'Fofo. Confiante. Otimista demais com dinheiro.', voice:'Voz', voiceV:'Uma voz aguda de galinho de desenho animado. Quando se empolga, fica dramaticamente mais séria.', skill:'Habilidade especial', skillV:'Entrar antes de entender completamente.', enemy:'Inimigo natural', enemyV:'Dúvida, paciência e expectativas realistas.', mission:'Missão', missionV:'Sair da fazenda. Ficar absurdamente rico. Detalhes depois.',
    communityTitle:'Um meme precisa de pessoas, não de promessas.', communityBody:'Siga QUQN no X para memes, atualizações da Coop e marcos on-chain. Entre também na comunidade do Telegram.',
    roadKicker:'A ESTRADA ATÉ 21 MILHÕES', roadTitle:'Da fazenda<br>para sonhos completamente absurdos.', roadBody:'Isto mostra o progresso da oferta mintada, não uma meta de preço. Cada QUQN realmente mintado só faz o pequeno coq avançar um pouco mais.', roadLoading:'Carregando o progresso atual do mint…',
    aboutKicker:'BITCOIN · BRC-20 · FAIR MINT', aboutTitle:'O que é QUQN?',
    aboutLead:'QUQN é uma memecoin BRC-20 comunitária na mainnet do Bitcoin, construída em torno de um pequeno coq com ambições cripto completamente absurdas.',
    aboutBody:'QUQN foi lançado como fair mint, sem pré-venda, sem ICO e sem taxa de mint para o criador. A oferta máxima é de 21.000.000 QUQN e cada mint completo cria 1.000 QUQN. O projeto mistura cultura Bitcoin e BRC-20, memes, uma comunidade leve e o lema <strong>Small Coq. Big Dreams.</strong>',
    aboutGuide:'Se você é novo em inscriptions do Bitcoin ou tokens BRC-20, o guia para iniciantes explica como verificar o ticker, entender as taxas e mintar QUQN usando serviços compatíveis de terceiros como UniSat ou OKX Wallet.',
    aboutMintBtn:'COMO MINTAR QUQN',
    faqTitle:'Antes que o pequeno coq fique confiante demais.', q1:'QUQN é vendido por este site ou pelo projeto?', a1:'Não. Este site não vende QUQN, não conecta sua carteira, não guarda fundos e não recebe pagamentos pela compra de tokens.', q2:'Onde estão os detalhes técnicos?', faqGuide:'Abrir o guia completo de fair mint e iniciantes →', q3:'QUQN pode ir a zero?', a3:'Sim. QUQN é experimental e altamente especulativo. Pode não ter mercado nem valor.', q4:'O que é um fair mint BRC-20?', a4:'Um fair mint BRC-20 permite que participantes mintem sob as mesmas regras públicas até a oferta máxima ser alcançada. QUQN não teve pré-venda nem ICO e o projeto não recebe taxa de mint do criador.', q5:'Como mintar QUQN?', a5:'Use o guia para iniciantes QUQN para verificar Bitcoin, ticker QUQN, oferta máxima de 21.000.000 e limite de 1.000 QUQN por mint, depois escolha um serviço compatível como UniSat ou OKX Wallet.',
    guideKicker:'COMO O QUQN FUNCIONA', guideTitle:'Do zero ao seu primeiro QUQN.', fairLabel:'FATOS DO FAIR MINT', fairTitle:'O projeto não vende tokens nem capta recursos.', fairNote:'QUQN não vende tokens nem recebe taxas, comissões, fundos, dados pessoais ou outros benefícios quando um possível holder obtém QUQN. Taxas da rede Bitcoin e taxas de terceiros, se houver, são pagas fora deste site e não são recebidas pelo projeto QUQN.', fairLegal:'Ler a nota legal e MiCA →',
    b1Label:'TENHA UMA CARTEIRA', b1Title:'Escolha uma carteira Bitcoin compatível', b1Body:'Você pode usar UniSat Wallet ou OKX Wallet. Baixe apenas dos sites oficiais e nunca compartilhe sua seed phrase.', walletDownload:'UniSat Wallet oficial ↗', okxWalletDownload:'OKX Wallet oficial ↗',
    b2Label:'PROTEJA SUAS CHAVES', b2Title:'Crie sua carteira e guarde a seed phrase com segurança', b2Body:'Sua seed phrase controla a carteira. Anote offline e nunca envie para ninguém.', seedWarning:'⚠ Não tire print, não fotografe, não envie por e-mail e não salve na nuvem.',
    b3Label:'TENHA BTC PARA TAXAS', b3Title:'Mantenha uma pequena quantia de BTC na carteira', b3Body:'O mint usa a rede Bitcoin e um serviço de inscription de terceiros, então há taxas. Essas taxas não vão para o QUQN.',
    b4Label:'CONFIRA ANTES DE CLICAR', b4Title:'Abra a página correta do QUQN no UniScan', openExact:'Abrir página oficial do QUQN no UniScan ↗',
    fpTicker:'TICKER', fpNetwork:'REDE', fpMax:'MÁXIMO', fpPerMint:'POR MINT', fpInscription:'INSCRIPTION #',
    b5Label:'CHOCAR QUQN', b5Title:'Escolha sua rota de mint', b5Body:'QUQN é um BRC-20 padrão de 4 bytes no Bitcoin. Você pode mintá-lo por um serviço compatível de inscription BRC-20 de terceiros. UniSat é a opção recomendada e OKX Wallet é uma alternativa.', calcLabel:'Número de mints completos', calcGets:'Com 1.000 QUQN por mint completo, isso corresponde a', officialGuide:'Guia UniSat ↗',
    unisatOptionTitle:'Opção 1 — UniSat', recommended:'RECOMENDADO', unisatStep1:'Abra a página de inscription BRC-20 da UniSat.', unisatStep2:'Pesquise o ticker <code>QUQN</code> e abra-o.', unisatStep3:'Selecione <strong>Mint</strong> e confirme que é o BRC-20 <strong>4-byte (classic)</strong>.', unisatStep4:'Confirme <strong>1.000 QUQN</strong> por mint completo e escolha o número de mints.', unisatStep5:'Confira o endereço Bitcoin de recebimento e todas as taxas de rede/serviço.', unisatStep6:'Confirme o pedido e aguarde a confirmação do Bitcoin.', openUnisatMint:'Abrir mint BRC-20 na UniSat ↗',
    okxOptionTitle:'Opção 2 — OKX Wallet', okxStep1:'Abra a OKX Wallet e vá para <strong>Mais → NFT → Inscriptions → Inscription Center</strong>.', okxStep2:'Selecione a rota Bitcoin/BRC-20 e depois <strong>Mint</strong>.', okxStep3:'Digite o ticker <code>QUQN</code>.', okxStep4:'Digite <strong>1.000 QUQN</strong> para um mint completo e escolha o número de mints.', okxStep5:'Digite ou confirme o endereço Bitcoin do destinatário.', okxStep6:'Revise o resumo e as taxas e então confirme.', okxGuide:'Guia BRC-20 oficial da OKX ↗',
    mintImportant:'<strong>Importante:</strong> sempre confira a rede <strong>Bitcoin</strong>, o ticker <strong>QUQN</strong>, a oferta máxima de <strong>21.000.000</strong> e a página oficial no UniScan antes de mintar. Interfaces e taxas de terceiros podem mudar.',
    verifyUniscan:'Verificar QUQN no UniScan ↗', mintUnisat:'Mintar com UniSat ↗', mintOkx:'Mintar com OKX Wallet ↗',
    b6Label:'AGUARDE E CONFIRA', b6Title:'Espere a confirmação do Bitcoin e depois confira sua carteira', b6Body:'Transações Bitcoin não são instantâneas. Nunca pague alguém por DM que diga que pode “desbloquear” ou “liberar” seus QUQN.',
    safetyKicker:'LEMBRE APENAS DISSO', safetyTitle:'Mintar QUQN nunca exige sua seed phrase.', safetyBody:'Se alguém pedir sua seed phrase, pare imediatamente.',
    riskLegal:'Risco e Legal', privacy:'Privacidade', footerNote:'Construído na cultura Bitcoin. Não é conselho financeiro. Nenhum valor é prometido.'
  },

  es: {
    navStory:'Historia', navSeason:'Esta temporada', navMint:'Mintear', navGame:'Juego del multimillonario', navRanks:'The Coop', navGuide:'Cómo funciona',
    topUniscan:'Ver en UniScan ↗',
    howBtn:'CÓMO FUNCIONA QUQN', viewBtn:'VER QUQN EN UNISCAN ↗',
    quickMintKicker:'¿LISTO PARA MINTEAR?', quickMintTitle:'Elige tu ruta', quickUnisat:'Recomendado · Mint BRC-20', quickOkx:'Alternativa · Guía oficial', quickOpen:'ABRIR ↗',
    quickMintNote:'Servicios de terceros. Verifica siempre el ticker QUQN y la red Bitcoin antes de confirmar.',
    heroRisk:'Memecoin experimental. Sin promesas de beneficio, valor ni liquidez.',
    heroEyebrow:'🐓 BRC-20 · BITCOIN MAINNET · FAIR MINT',
    noPresale:'SIN PREVENTA', noIco:'SIN ICO', noFundraising:'SIN RECAUDACIÓN', noCreatorFee:'SIN COMISIÓN DE MINT DEL CREADOR', fairMint:'FAIR MINT',
    progress:'Progreso del mint', minted:'Minteado', holders:'Holders', max:'Suministro máximo', perMint:'Por mint',
    storyKicker:'CONOCE A QUQN', storyTitle:'Coq pequeño.<br>Sueños grandes.', voiceNote:'— QUQN', netWorth:'Patrimonio actual: <strong>multimillonario mentalmente.</strong>',
    seasonKicker:'QUQN ESTA TEMPORADA',
    gameKicker:'EL TEST QUQN TOTALMENTE “CIENTÍFICO”', gameTitle:'¿Qué tipo de multimillonario serías?', gameIntro:'Toca una vez. Cero ciencia. QUQN decide tu vida imaginaria de multimillonario.', gameButton:'SORTEAR MI FUTURO', gameDisclaimer:'Juego meme totalmente aleatorio. No es una predicción, promesa ni consejo de inversión. Obviamente.', yourFuture:'Tu futuro QUQN', spinAgain:'Probar otro destino ↻',
    coopKicker:'THE COOP · COMUNIDAD', coopTitle:'¿Qué tan absurdos son tus sueños?', coopIntro:'Los rangos de la comunidad son solo por diversión. Actualmente no otorgan derechos financieros ni recompensas.',
    personaKicker:'FICHA DEL PERSONAJE', personaTitle:'Tierno. Seguro de sí mismo. Demasiado optimista con el dinero.', voice:'Voz', voiceV:'Voz aguda de gallito de dibujos animados. Cuando se emociona, se vuelve dramáticamente más seria.', skill:'Habilidad especial', skillV:'Entrar antes de entenderlo del todo.', enemy:'Enemigo natural', enemyV:'La duda, la paciencia y las expectativas realistas.', mission:'Misión', missionV:'Salir de la granja. Hacerse absurdamente rico. Los detalles después.',
    communityTitle:'Un meme necesita personas, no promesas.', communityBody:'Sigue a QUQN en X para memes, novedades de la Coop y hitos on-chain. También puedes unirte a la comunidad de Telegram.',
    roadKicker:'EL CAMINO A 21 MILLONES', roadTitle:'De la granja<br>a sueños completamente absurdos.', roadBody:'Esto muestra el progreso del suministro minteado, no un objetivo de precio. Cada QUQN minteado de verdad simplemente hace que el pequeño coq avance un poco más.', roadLoading:'Cargando el progreso actual del mint…',
    aboutKicker:'BITCOIN · BRC-20 · FAIR MINT', aboutTitle:'¿Qué es QUQN?',
    aboutLead:'QUQN es una memecoin BRC-20 impulsada por la comunidad en la mainnet de Bitcoin, construida alrededor de un pequeño coq con ambiciones cripto completamente absurdas.',
    aboutBody:'QUQN se lanzó como fair mint, sin preventa, sin ICO y sin comisión de mint para el creador. El suministro máximo es de 21.000.000 QUQN y cada mint completo crea 1.000 QUQN. El proyecto mezcla la cultura Bitcoin y BRC-20 con memes, una comunidad desenfadada y el lema <strong>Small Coq. Big Dreams.</strong>',
    aboutGuide:'Si eres nuevo en las inscriptions de Bitcoin o en los tokens BRC-20, la guía para principiantes explica cómo verificar el ticker, entender las comisiones y mintear QUQN mediante servicios compatibles de terceros como UniSat u OKX Wallet.',
    aboutMintBtn:'CÓMO MINTEAR QUQN',
    faqTitle:'Antes de que el pequeño coq se venga demasiado arriba.', q1:'¿QUQN lo vende este sitio o el proyecto?', a1:'No. Este sitio no vende QUQN, no conecta tu wallet, no custodia fondos y no recibe pagos por comprar tokens.', q2:'¿Dónde están los detalles técnicos?', faqGuide:'Abrir la guía completa de fair mint y principiantes →', q3:'¿QUQN puede valer cero?', a3:'Sí. QUQN es experimental y altamente especulativo. Puede no tener mercado ni valor.', q4:'¿Qué es un fair mint BRC-20?', a4:'Un fair mint BRC-20 permite que los participantes minteen bajo las mismas reglas públicas hasta alcanzar el suministro máximo. QUQN no tuvo preventa ni ICO y el proyecto no recibe una comisión de mint del creador.', q5:'¿Cómo minteo QUQN?', a5:'Usa la guía para principiantes de QUQN para verificar Bitcoin, el ticker QUQN, el suministro máximo de 21.000.000 y el límite de 1.000 QUQN por mint; luego elige un servicio compatible como UniSat u OKX Wallet.',
    guideKicker:'CÓMO FUNCIONA QUQN', guideTitle:'De cero a tus primeros QUQN.', fairLabel:'DATOS DEL FAIR MINT', fairTitle:'El proyecto no vende tokens ni recauda fondos.', fairNote:'QUQN no vende tokens ni recibe comisiones, fondos, datos personales u otros beneficios cuando un posible holder obtiene QUQN. Las comisiones de la red Bitcoin y de terceros, si existen, se pagan fuera de este sitio y no las recibe el proyecto QUQN.', fairLegal:'Leer la nota legal y MiCA →',
    b1Label:'CONSIGUE UNA WALLET', b1Title:'Elige una wallet Bitcoin compatible', b1Body:'Puedes usar UniSat Wallet u OKX Wallet. Descárgalas solo desde sus sitios oficiales y nunca compartas tu frase de recuperación.', walletDownload:'UniSat Wallet oficial ↗', okxWalletDownload:'OKX Wallet oficial ↗',
    b2Label:'PROTEGE TUS CLAVES', b2Title:'Crea tu wallet y guarda bien tu frase de recuperación', b2Body:'Tu frase de recuperación controla tu wallet. Escríbela y guárdala offline. Nunca se la envíes a nadie.', seedWarning:'⚠ No hagas capturas, no la fotografíes, no la envíes por email ni la guardes en la nube.',
    b3Label:'TEN BTC PARA COMISIONES', b3Title:'Mantén una pequeña cantidad de BTC en la wallet', b3Body:'El mint usa la red Bitcoin y un servicio de inscription de terceros, por lo que hay comisiones. Esas comisiones no van a QUQN.',
    b4Label:'VERIFICA ANTES DE HACER CLIC', b4Title:'Abre la página exacta de QUQN en UniScan', openExact:'Abrir página oficial de QUQN en UniScan ↗',
    fpTicker:'TICKER', fpNetwork:'RED', fpMax:'MÁXIMO', fpPerMint:'POR MINT', fpInscription:'INSCRIPTION #',
    b5Label:'INCUBA QUQN', b5Title:'Elige tu ruta de mint', b5Body:'QUQN es un BRC-20 estándar de 4 bytes en Bitcoin. Puedes mintearlo mediante un servicio compatible de inscription BRC-20 de terceros. UniSat es la opción recomendada y OKX Wallet es una alternativa.', calcLabel:'Número de mints completos', calcGets:'A 1.000 QUQN por mint completo, eso corresponde a', officialGuide:'Guía de UniSat ↗',
    unisatOptionTitle:'Opción 1 — UniSat', recommended:'RECOMENDADO', unisatStep1:'Abre la página de inscription BRC-20 de UniSat.', unisatStep2:'Busca el ticker <code>QUQN</code> y ábrelo.', unisatStep3:'Selecciona <strong>Mint</strong> y confirma que sea el BRC-20 <strong>4-byte (classic)</strong>.', unisatStep4:'Confirma <strong>1.000 QUQN</strong> por mint completo y elige el número de mints.', unisatStep5:'Verifica la dirección Bitcoin receptora y todas las comisiones de red/servicio.', unisatStep6:'Confirma la orden y espera la confirmación de Bitcoin.', openUnisatMint:'Abrir mint BRC-20 en UniSat ↗',
    okxOptionTitle:'Opción 2 — OKX Wallet', okxStep1:'Abre OKX Wallet y ve a <strong>Más → NFT → Inscriptions → Inscription Center</strong>.', okxStep2:'Selecciona la ruta Bitcoin/BRC-20 y después <strong>Mint</strong>.', okxStep3:'Introduce el ticker <code>QUQN</code>.', okxStep4:'Introduce <strong>1.000 QUQN</strong> para un mint completo y elige el número de mints.', okxStep5:'Introduce o verifica la dirección Bitcoin del destinatario.', okxStep6:'Revisa el resumen y las comisiones, y confirma.', okxGuide:'Guía BRC-20 oficial de OKX ↗',
    mintImportant:'<strong>Importante:</strong> verifica siempre la red <strong>Bitcoin</strong>, el ticker <strong>QUQN</strong>, el suministro máximo de <strong>21.000.000</strong> y la página oficial de UniScan antes de mintear. Las interfaces y comisiones de terceros pueden cambiar.',
    verifyUniscan:'Verificar QUQN en UniScan ↗', mintUnisat:'Mintear con UniSat ↗', mintOkx:'Mintear con OKX Wallet ↗',
    b6Label:'ESPERA Y VERIFICA', b6Title:'Espera la confirmación de Bitcoin y revisa tu wallet', b6Body:'Las transacciones de Bitcoin no son instantáneas. Nunca pagues por DM a alguien que diga poder “desbloquear” o “liberar” tus QUQN.',
    safetyKicker:'RECUERDA SOLO ESTO', safetyTitle:'Mintear QUQN nunca requiere tu frase de recuperación.', safetyBody:'Si alguien te pide tu frase de recuperación, detente inmediatamente.',
    riskLegal:'Riesgo y Legal', privacy:'Privacidad', footerNote:'Construido sobre la cultura Bitcoin. No es asesoramiento financiero. No se promete ningún valor.'
  },


  ja: {
    navStory:'ストーリー', navSeason:'今シーズン', navMint:'ミント', navGame:'億万長者ゲーム', navRanks:'The Coop', navGuide:'仕組み',
    topUniscan:'UniScanで見る ↗',
    howBtn:'QUQNの仕組み', viewBtn:'UNISCANでQUQNを見る ↗',
    quickMintKicker:'ミントする？', quickMintTitle:'方法を選ぶ', quickUnisat:'おすすめ · BRC-20ミント', quickOkx:'別の方法 · 公式ガイド', quickOpen:'開く ↗',
    quickMintNote:'以下は第三者サービスです。確定前に ticker が QUQN、ネットワークが Bitcoin であることを必ず確認してください。',
    heroRisk:'実験的なミームトークンです。利益、価値、流動性を保証しません。',
    heroEyebrow:'🐓 BRC-20 · BITCOIN MAINNET · FAIR MINT',
    noPresale:'プレセールなし', noIco:'ICOなし', noFundraising:'資金調達なし', noCreatorFee:'クリエイターのミント手数料なし', fairMint:'FAIR MINT',
    progress:'ミント進捗', minted:'ミント済み', holders:'ホルダー', max:'最大供給量', perMint:'1ミント',
    storyKicker:'QUQNに会おう', storyTitle:'小さなコック。<br>夢はでかい。', voiceNote:'— QUQN', netWorth:'現在の資産：<strong>気持ちだけは億万長者。</strong>',
    seasonKicker:'今シーズンのQUQN',
    gameKicker:'完全に「科学的」なQUQNテスト', gameTitle:'あなたはどんな億万長者？', gameIntro:'1クリック。科学的根拠ゼロ。QUQNがあなたの妄想億万長者ライフを決めます。', gameButton:'未来を引く', gameDisclaimer:'完全ランダムなミームゲーム。予測でも約束でも投資助言でもありません。もちろん。', yourFuture:'あなたのQUQN未来', spinAgain:'別の運命を試す ↻',
    coopKicker:'THE COOP · コミュニティ', coopTitle:'あなたの夢はどれくらい無茶？', coopIntro:'コミュニティランクは遊びのためのものです。現時点で金融上の権利や報酬はありません。',
    personaKicker:'キャラクターファイル', personaTitle:'かわいい。自信満々。お金には楽観的すぎる。', voice:'声', voiceV:'高めのカートゥーン風コックの声。興奮すると急にドラマチックになります。', skill:'特技', skillV:'理解する前に飛び込むこと。', enemy:'天敵', enemyV:'疑い、忍耐、そして現実的な期待。', mission:'ミッション', missionV:'農場を出る。とんでもなく金持ちになる。細かいことは後で考える。',
    communityTitle:'ミームに必要なのは人。約束じゃない。', communityBody:'XでQUQNをフォローして、ミーム、Coopの更新、オンチェーンの節目をチェック。Telegramコミュニティにも参加できます。',
    roadKicker:'2100万QUQNへの道', roadTitle:'農場から、<br>とんでもなく大きな夢へ。', roadBody:'これは供給量のミント進捗であり、価格目標ではありません。実際にQUQNがミントされるたび、小さなコックが少し先へ進みます。', roadLoading:'現在のミント進捗を読み込み中…',
    aboutKicker:'BITCOIN · BRC-20 · FAIR MINT', aboutTitle:'QUQNとは？',
    aboutLead:'QUQNはBitcoinメインネット上のコミュニティ主導BRC-20ミームコイン。主役は、とんでもなく大きな暗号資産の夢を持つ小さなコックです。',
    aboutBody:'QUQNはプレセール、ICO、クリエイターのミント手数料なしのfair mintとして始まりました。最大供給量は21,000,000 QUQN、1回のフルミントは1,000 QUQNです。BitcoinとBRC-20文化、ミーム、遊び心あるコミュニティ、そして <strong>Small Coq. Big Dreams.</strong> を組み合わせています。',
    aboutGuide:'Bitcoin inscriptionsやBRC-20が初めてなら、初心者ガイドでtickerの確認、手数料の理解、UniSatやOKX Walletなど互換性のある第三者サービスを使ったQUQNのミント方法を確認できます。',
    aboutMintBtn:'QUQNのミント方法',
    faqTitle:'この小さなコックが調子に乗る前に。', q1:'QUQNはこのサイトやプロジェクトが販売していますか？', a1:'いいえ。このサイトはQUQNを販売せず、ウォレット接続や資金保管、トークン購入代金の受領も行いません。', q2:'技術情報はどこ？', faqGuide:'fair mintと初心者向け完全ガイドを開く →', q3:'QUQNがゼロになる可能性は？', a3:'あります。QUQNは実験的で非常に投機的です。市場も価値もなくなる可能性があります。', q4:'BRC-20 fair mintとは？', a4:'全参加者が同じ公開ルールで最大供給量に達するまでミントできる仕組みです。QUQNにはプレセールやICOがなく、プロジェクトはクリエイターのミント手数料を受け取りません。', q5:'QUQNはどうミントする？', a5:'初心者ガイドでBitcoinネットワーク、ticker QUQN、最大供給量21,000,000、1ミント1,000 QUQNを確認し、UniSatやOKX Walletなど互換サービスを選んでください。',
    guideKicker:'QUQNの仕組み', guideTitle:'ゼロから最初のQUQNまで。', fairLabel:'FAIR MINTの事実', fairTitle:'プロジェクトによる販売なし。資金調達なし。', fairNote:'QUQNはトークンを販売せず、QUQN取得の対価として手数料、コミッション、資金、個人データその他の利益を受け取りません。Bitcoinネットワーク手数料や第三者サービス手数料がある場合、それらはこのサイト外で支払われ、QUQNプロジェクトには入りません。', fairLegal:'法務・MiCA情報を見る →',
    b1Label:'ウォレットを用意', b1Title:'互換性のあるBitcoinウォレットを選ぶ', b1Body:'UniSat WalletまたはOKX Walletが使えます。必ず公式サイトからダウンロードし、リカバリーフレーズは絶対に共有しないでください。', walletDownload:'公式UniSat Wallet ↗', okxWalletDownload:'公式OKX Wallet ↗',
    b2Label:'鍵を守る', b2Title:'ウォレットを作り、リカバリーフレーズを安全に保管', b2Body:'リカバリーフレーズはウォレットを支配します。オフラインで書き留め、誰にも送らないでください。', seedWarning:'⚠ スクリーンショット、写真、メール、クラウド保存はしないでください。',
    b3Label:'手数料用BTC', b3Title:'ウォレットに少額のBTCを入れる', b3Body:'ミントではBitcoinネットワークと第三者のinscriptionサービスを使うため手数料がかかります。これらの手数料はQUQNには入りません。',
    b4Label:'クリック前に確認', b4Title:'UniScanで正しいQUQNページを開く', openExact:'公式QUQN UniScanページを開く ↗',
    fpTicker:'TICKER', fpNetwork:'ネットワーク', fpMax:'最大供給量', fpPerMint:'1ミント', fpInscription:'INSCRIPTION #',
    b5Label:'QUQNを孵化', b5Title:'ミント方法を選ぶ', b5Body:'QUQNはBitcoin上の標準4-byte BRC-20です。互換性のある第三者BRC-20 inscriptionサービスでミントできます。UniSatを推奨し、OKX Walletも選択肢です。', calcLabel:'フルミント回数', calcGets:'1フルミント = 1,000 QUQN。合計', officialGuide:'UniSatガイド ↗',
    unisatOptionTitle:'方法1 — UniSat', recommended:'おすすめ', unisatStep1:'UniSatのBRC-20 inscriptionページを開きます。', unisatStep2:'ticker <code>QUQN</code> を検索して開きます。', unisatStep3:'<strong>Mint</strong> を選び、<strong>4-byte (classic)</strong> BRC-20であることを確認します。', unisatStep4:'1フルミントが <strong>1,000 QUQN</strong> であることを確認し、回数を選びます。', unisatStep5:'受取Bitcoinアドレスとネットワーク/サービス手数料を確認します。', unisatStep6:'注文を確定し、Bitcoinの承認を待ちます。', openUnisatMint:'UniSat BRC-20ミントを開く ↗',
    okxOptionTitle:'方法2 — OKX Wallet', okxStep1:'OKX Walletを開き、<strong>More → NFT → Inscriptions → Inscription Center</strong>へ進みます。', okxStep2:'Bitcoin/BRC-20 inscriptionを選び、<strong>Mint</strong>を選択します。', okxStep3:'ticker <code>QUQN</code> を入力します。', okxStep4:'フルミントなら <strong>1,000 QUQN</strong> を入力し、回数を選びます。', okxStep5:'受取Bitcoinアドレスを入力または確認します。', okxStep6:'ミント概要と手数料を確認して確定します。', okxGuide:'OKX公式BRC-20ガイド ↗',
    mintImportant:'<strong>重要：</strong>ミント前に必ずネットワークが <strong>Bitcoin</strong>、tickerが <strong>QUQN</strong>、最大供給量が <strong>21,000,000</strong> であること、そして公式UniScanページを確認してください。第三者サービスの画面や手数料は変更される場合があります。',
    verifyUniscan:'UniScanでQUQNを確認 ↗', mintUnisat:'UniSatでミント ↗', mintOkx:'OKX Walletでミント ↗',
    b6Label:'待って確認', b6Title:'Bitcoinの承認を待ち、ウォレットを確認', b6Body:'Bitcoinトランザクションは即時ではありません。DMでQUQNを「解除」「解放」すると言って支払いを求める相手には絶対に送金しないでください。',
    safetyKicker:'これだけは覚えて', safetyTitle:'QUQNのミントにリカバリーフレーズは絶対に不要です。', safetyBody:'誰かに求められたら、その時点で止めてください。',
    riskLegal:'リスク・法務', privacy:'プライバシー', footerNote:'Bitcoin文化の上に構築。投資助言ではなく、価値を保証しません。'
  },

  ar: {
    navStory:'القصة', navSeason:'هذا الموسم', navMint:'السك', navGame:'لعبة الملياردير', navRanks:'The Coop', navGuide:'كيف يعمل',
    topUniscan:'عرض على UniScan ↗',
    howBtn:'كيف يعمل QUQN', viewBtn:'عرض QUQN على UNISCAN ↗',
    quickMintKicker:'جاهز للسك؟', quickMintTitle:'اختر طريقتك', quickUnisat:'موصى به · سك BRC-20', quickOkx:'بديل · دليل رسمي', quickOpen:'فتح ↗',
    quickMintNote:'هذه خدمات تابعة لجهات خارجية. تحقق دائمًا من أن الرمز QUQN وأن الشبكة Bitcoin قبل التأكيد.',
    heroRisk:'ميم كوين تجريبية. لا يوجد وعد بالربح أو القيمة أو السيولة.',
    heroEyebrow:'🐓 BRC-20 · شبكة BITCOIN الرئيسية · FAIR MINT',
    noPresale:'لا بيع مسبق', noIco:'لا ICO', noFundraising:'لا جمع أموال', noCreatorFee:'لا رسوم سك للمُنشئ', fairMint:'FAIR MINT',
    progress:'تقدم السك', minted:'تم سكه', holders:'الحاملون', max:'الحد الأقصى للعرض', perMint:'لكل سك',
    storyKicker:'تعرف على QUQN', storyTitle:'ديك صغير.<br>أحلام كبيرة.', voiceNote:'— QUQN', netWorth:'الثروة الحالية: <strong>ملياردير عاطفيًا.</strong>',
    seasonKicker:'QUQN هذا الموسم',
    gameKicker:'اختبار QUQN “العلمي جدًا”', gameTitle:'أي نوع من المليارديرات ستكون؟', gameIntro:'ضغطة واحدة. صفر علم. QUQN يقرر مستقبلك الخيالي كملياردير.', gameButton:'اسحب مستقبلي', gameDisclaimer:'لعبة ميم عشوائية فقط. ليست توقعًا أو وعدًا أو نصيحة استثمارية. طبعًا.', yourFuture:'مستقبلك مع QUQN', spinAgain:'جرب مصيرًا آخر ↻',
    coopKicker:'THE COOP · المجتمع', coopTitle:'إلى أي حد أحلامك غير منطقية؟', coopIntro:'رتب المجتمع للمتعة فقط. لا تمنح حاليًا أي حقوق مالية أو مكافآت.',
    personaKicker:'ملف الشخصية', personaTitle:'لطيف. واثق. متفائل ماليًا أكثر من اللازم.', voice:'الصوت', voiceV:'صوت ديك كرتوني حاد. يصبح أكثر درامية عندما يتحمس.', skill:'المهارة الخاصة', skillV:'القفز إلى الأشياء قبل فهمها بالكامل.', enemy:'الأعداء الطبيعيون', enemyV:'الشك، الصبر، والتوقعات الواقعية.', mission:'المهمة', missionV:'مغادرة المزرعة. أن يصبح ثريًا بشكل مبالغ فيه. التفاصيل لاحقًا.',
    communityTitle:'الميم يحتاج إلى ناس، لا وعود.', communityBody:'تابع QUQN على X للميمز وتحديثات The Coop والمحطات على السلسلة. ويمكنك أيضًا الانضمام إلى مجتمع Telegram.',
    roadKicker:'الطريق إلى 21 مليون', roadTitle:'من المزرعة<br>إلى أحلام غير منطقية تمامًا.', roadBody:'هذا يعرض تقدم عرض التوكنات التي تم سكها، وليس هدفًا سعريًا. كل سك حقيقي لـ QUQN يدفع الديك الصغير خطوة إضافية على الطريق.', roadLoading:'جارٍ تحميل تقدم السك الحالي…',
    aboutKicker:'BITCOIN · BRC-20 · FAIR MINT', aboutTitle:'ما هو QUQN؟',
    aboutLead:'QUQN هو ميم كوين BRC-20 مدفوع بالمجتمع على شبكة Bitcoin الرئيسية، ويتمحور حول ديك صغير لديه طموحات كريبتو ضخمة بشكل غير منطقي.',
    aboutBody:'تم إطلاق QUQN كـ fair mint بدون بيع مسبق، وبدون ICO، وبدون رسوم سك للمُنشئ. الحد الأقصى للعرض هو 21,000,000 QUQN وكل سك كامل ينشئ 1,000 QUQN. المشروع يمزج ثقافة Bitcoin وBRC-20 مع الميمز ومجتمع مرح وشعار <strong>Small Coq. Big Dreams.</strong>',
    aboutGuide:'إذا كنت جديدًا على Bitcoin inscriptions أو BRC-20، يشرح دليل المبتدئين كيفية التحقق من ticker وفهم الرسوم وسك QUQN عبر خدمات متوافقة من جهات خارجية مثل UniSat أو OKX Wallet.',
    aboutMintBtn:'كيف تسك QUQN',
    faqTitle:'قبل أن يتحمس الديك الصغير أكثر من اللازم.', q1:'هل يبيع هذا الموقع أو المشروع QUQN؟', a1:'لا. الموقع لا يبيع QUQN، ولا يربط المحافظ، ولا يحتفظ بالأموال، ولا يستلم مدفوعات مقابل التوكن.', q2:'أين التفاصيل التقنية؟', faqGuide:'فتح دليل fair mint والمبتدئين الكامل →', q3:'هل يمكن أن تصبح قيمة QUQN صفرًا؟', a3:'نعم. QUQN تجريبي وعالي المضاربة. قد لا يكون له سوق أو قيمة.', q4:'ما هو BRC-20 fair mint؟', a4:'يسمح fair mint للمشاركين بالسك وفق نفس القواعد العامة حتى الوصول للعرض الأقصى. لم يكن لـ QUQN بيع مسبق أو ICO ولا يتلقى المشروع رسوم سك للمُنشئ.', q5:'كيف أسك QUQN؟', a5:'استخدم دليل المبتدئين للتحقق من شبكة Bitcoin وticker QUQN والحد الأقصى 21,000,000 وحد 1,000 QUQN لكل سك، ثم اختر خدمة متوافقة مثل UniSat أو OKX Wallet.',
    guideKicker:'كيف يعمل QUQN', guideTitle:'من الصفر إلى أول QUQN لك.', fairLabel:'حقائق FAIR MINT', fairTitle:'لا بيع من المشروع. لا جمع أموال.', fairNote:'QUQN لا يبيع التوكنات ولا يتلقى رسومًا أو عمولات أو أموالًا أو بيانات شخصية أو أي منفعة أخرى مقابل حصول المستخدمين على QUQN. رسوم شبكة Bitcoin وخدمات الجهات الخارجية، إن وجدت، تُدفع خارج هذا الموقع ولا يستلمها مشروع QUQN.', fairLegal:'قراءة الملاحظة القانونية وMiCA →',
    b1Label:'احصل على محفظة', b1Title:'اختر محفظة Bitcoin متوافقة', b1Body:'يمكنك استخدام UniSat Wallet أو OKX Wallet. حمّلها فقط من المواقع الرسمية ولا تشارك عبارة الاسترداد أبدًا.', walletDownload:'UniSat Wallet الرسمي ↗', okxWalletDownload:'OKX Wallet الرسمي ↗',
    b2Label:'احمِ المفاتيح', b2Title:'أنشئ المحفظة واحفظ عبارة الاسترداد بأمان', b2Body:'عبارة الاسترداد تتحكم بمحفظتك. اكتبها واحفظها دون اتصال ولا ترسلها لأي شخص.', seedWarning:'⚠ لا تلتقط لها صورة أو لقطة شاشة ولا ترسلها بالبريد ولا تحفظها على السحابة.',
    b3Label:'أضف BTC للرسوم', b3Title:'احتفظ بكمية صغيرة من BTC في محفظتك', b3Body:'السك يستخدم شبكة Bitcoin وخدمة inscription من طرف ثالث، لذلك توجد رسوم. هذه الرسوم لا تذهب إلى QUQN.',
    b4Label:'تحقق قبل النقر', b4Title:'افتح صفحة QUQN الصحيحة على UniScan', openExact:'فتح صفحة QUQN الرسمية على UniScan ↗',
    fpTicker:'TICKER', fpNetwork:'الشبكة', fpMax:'الحد الأقصى', fpPerMint:'لكل سك', fpInscription:'INSCRIPTION #',
    b5Label:'فقّس QUQN', b5Title:'اختر طريقة السك', b5Body:'QUQN هو BRC-20 قياسي 4-byte على Bitcoin. يمكنك سكه عبر خدمة BRC-20 inscription متوافقة من جهة خارجية. UniSat هو الخيار الموصى به وOKX Wallet بديل.', calcLabel:'عدد عمليات السك الكاملة', calcGets:'كل سك كامل = 1,000 QUQN، أي ما مجموعه', officialGuide:'دليل UniSat ↗',
    unisatOptionTitle:'الخيار 1 — UniSat', recommended:'موصى به', unisatStep1:'افتح صفحة BRC-20 inscription في UniSat.', unisatStep2:'ابحث عن ticker <code>QUQN</code> وافتحه.', unisatStep3:'اختر <strong>Mint</strong> وتأكد أنه BRC-20 من نوع <strong>4-byte (classic)</strong>.', unisatStep4:'تأكد أن السك الكامل يساوي <strong>1,000 QUQN</strong> واختر عدد مرات السك.', unisatStep5:'تحقق من عنوان Bitcoin المستلم وكل رسوم الشبكة والخدمة.', unisatStep6:'أكد الطلب وانتظر تأكيد Bitcoin.', openUnisatMint:'فتح سك BRC-20 على UniSat ↗',
    okxOptionTitle:'الخيار 2 — OKX Wallet', okxStep1:'افتح OKX Wallet ثم انتقل إلى <strong>More → NFT → Inscriptions → Inscription Center</strong>.', okxStep2:'اختر Bitcoin/BRC-20 inscription ثم <strong>Mint</strong>.', okxStep3:'أدخل ticker <code>QUQN</code>.', okxStep4:'أدخل <strong>1,000 QUQN</strong> للسك الكامل واختر عدد مرات السك.', okxStep5:'أدخل أو تحقق من عنوان Bitcoin المستلم.', okxStep6:'راجع الملخص والرسوم ثم أكد.', okxGuide:'دليل OKX الرسمي لـ BRC-20 ↗',
    mintImportant:'<strong>مهم:</strong> قبل السك تحقق دائمًا من أن الشبكة <strong>Bitcoin</strong>، والرمز <strong>QUQN</strong>، والحد الأقصى للعرض <strong>21,000,000</strong>، ومن صفحة UniScan الرسمية. قد تتغير واجهات ورسوم الجهات الخارجية.',
    verifyUniscan:'التحقق من QUQN على UniScan ↗', mintUnisat:'السك عبر UniSat ↗', mintOkx:'السك عبر OKX Wallet ↗',
    b6Label:'انتظر وتحقق', b6Title:'انتظر تأكيد Bitcoin ثم تحقق من محفظتك', b6Body:'معاملات Bitcoin ليست فورية. لا تدفع أبدًا لشخص يراسلك خاصًا ويدعي أنه يستطيع “فتح” أو “تحرير” QUQN الخاص بك.',
    safetyKicker:'قاعدة واحدة فقط', safetyTitle:'سك QUQN لا يحتاج أبدًا إلى عبارة الاسترداد.', safetyBody:'إذا طلبها منك أي شخص، توقف فورًا.',
    riskLegal:'المخاطر والقانون', privacy:'الخصوصية', footerNote:'مبني على ثقافة Bitcoin. ليس نصيحة مالية ولا توجد قيمة مضمونة.'
  },

  zh: {
    navStory:'故事', navSeason:'本季', navMint:'铸造', navGame:'亿万富翁小游戏', navRanks:'鸡舍社区', navGuide:'如何参与',
    topUniscan:'在 UniScan 查看 ↗',
    howBtn:'QUQN 如何运作', viewBtn:'在 UNISCAN 查看 QUQN ↗',
    quickMintKicker:'准备铸造？', quickMintTitle:'选择你的方式', quickUnisat:'推荐 · BRC-20 铸造', quickOkx:'备选 · 官方铸造指南', quickOpen:'打开 ↗',
    quickMintNote:'以下为第三方服务。确认前请始终核对 ticker：QUQN，并确认网络为 Bitcoin。',
    heroRisk:'实验性 meme 代币。不承诺利润、价值或流动性。',
    heroEyebrow:'🐓 BRC-20 · 比特币主网 · 公平铸造',
    noPresale:'无预售', noIco:'无 ICO', noFundraising:'无募资', noCreatorFee:'无创作者铸造费', fairMint:'公平铸造',
    progress:'铸造进度', minted:'已铸造', holders:'持有者', max:'最大供应量', perMint:'每次铸造',
    storyKicker:'认识 QUQN', storyTitle:'个头很小。<br>野心可不小。', voiceNote:'— QUQN', netWorth:'当前身家：<strong>精神上已经是亿万富翁。</strong>',
    seasonKicker:'QUQN 本季',
    gameKicker:'完全“科学”的 QUQN 测试', gameTitle:'你会是哪一种亿万富翁？', gameIntro:'点一下。零科学依据。QUQN 来决定你想象中的亿万富翁人生。', gameButton:'抽取我的未来', gameDisclaimer:'纯随机 meme 小游戏。不是预测、承诺或投资建议。显然。', yourFuture:'你的 QUQN 未来', spinAgain:'换一个命运 ↻',
    coopKicker:'THE COOP · 鸡舍社区', coopTitle:'你的梦想到底有多不讲道理？', coopIntro:'社区等级只是为了好玩。目前不产生任何金融权利或奖励。',
    personaKicker:'角色档案', personaTitle:'可爱。自信。对财富过分乐观。', voice:'声音', voiceV:'高音调的卡通小公鸡声。一激动就格外戏剧化。', skill:'特殊技能', skillV:'还没完全搞懂，就先冲进去。', enemy:'天敌', enemyV:'怀疑、耐心，以及现实的预期。', mission:'任务', missionV:'离开农场。变得离谱地有钱。细节以后再说。',
    communityTitle:'一个 meme 需要的是人，不是承诺。', communityBody:'在 X 关注 QUQN，获取 meme、鸡舍社区动态和链上里程碑。也欢迎加入 QUQN Telegram 社区。',
    roadKicker:'通往 2100 万 QUQN 的路', roadTitle:'从农场出发，<br>奔向不讲道理的大梦想。', roadBody:'这里展示的是供应量铸造进度，不是价格目标。每一笔真实的 QUQN 铸造，只是让这只小公鸡在路上再前进一步。', roadLoading:'正在加载当前铸造进度…',
    aboutKicker:'BITCOIN · BRC-20 · 公平铸造', aboutTitle:'QUQN 是什么？',
    aboutLead:'QUQN 是一个运行在比特币主网上、由社区驱动的 BRC-20 meme coin。主角是一只个头很小、但加密梦想完全不小的公鸡。',
    aboutBody:'QUQN 以公平铸造方式启动：无预售、无 ICO、无创作者铸造费。最大供应量为 21,000,000 QUQN，每次完整铸造为 1,000 QUQN。项目把 Bitcoin 与 BRC-20 文化、meme、轻松的社区氛围，以及口号 <strong>Small Coq. Big Dreams.</strong> 结合在一起。',
    aboutGuide:'如果你刚接触比特币铭文或 BRC-20，入门指南会带你核对 ticker、了解费用，并通过 UniSat 或 OKX Wallet 等兼容的第三方服务铸造 QUQN。',
    aboutMintBtn:'如何铸造 QUQN',
    faqTitle:'在这只小公鸡开始飘之前。', q1:'QUQN 是由本网站或项目方出售的吗？', a1:'不是。本网站不出售 QUQN、不连接钱包、不托管资金，也不接收购买代币的付款。', q2:'技术细节在哪里？', faqGuide:'打开完整的公平铸造与新手指南 →', q3:'QUQN 会归零吗？', a3:'会。QUQN 是实验性且高度投机的资产，可能没有市场，也可能没有任何价值。', q4:'什么是 BRC-20 公平铸造？', a4:'BRC-20 公平铸造意味着所有参与者按照相同的公开规则进行铸造，直到达到最大供应量。QUQN 没有预售或 ICO，项目方也不收取创作者铸造费。', q5:'如何铸造 QUQN？', a5:'请使用 QUQN 新手指南，先核对 Bitcoin 网络、ticker QUQN、21,000,000 最大供应量和每次 1,000 QUQN 的铸造上限，再选择 UniSat 或 OKX Wallet 等兼容的第三方服务。',
    guideKicker:'QUQN 如何运作', guideTitle:'从零开始，到你的第一批 QUQN。', fairLabel:'公平铸造事实', fairTitle:'项目方不卖币，也不募资。', fairNote:'QUQN 不出售代币，也不会因潜在持有者获得 QUQN 而收取费用、佣金、资金、个人数据或其他利益。比特币网络费及第三方服务费（如有）均在本网站之外支付，QUQN 项目方不会收到这些费用。', fairLegal:'阅读法律与 MiCA 说明 →',
    b1Label:'准备钱包', b1Title:'选择兼容的 Bitcoin 钱包', b1Body:'你可以使用 UniSat Wallet 或 OKX Wallet。只从各自官方网站下载钱包，并且绝不要分享你的助记词。', walletDownload:'UniSat Wallet 官方下载 ↗', okxWalletDownload:'OKX Wallet 官方下载 ↗',
    b2Label:'保护私钥', b2Title:'创建钱包并妥善保管助记词', b2Body:'助记词可以控制你的钱包。请离线抄写保存，绝不要发送给任何人。', seedWarning:'⚠ 不要截图、拍照、通过邮件发送或把助记词保存在云端。',
    b3Label:'准备 BTC 支付费用', b3Title:'在钱包中准备少量 BTC', b3Body:'铸造会使用 Bitcoin 网络以及第三方铭文服务，因此会产生费用。这些费用不会支付给 QUQN。',
    b4Label:'点击前先核对', b4Title:'在 UniScan 打开准确的 QUQN 页面', openExact:'打开 QUQN 官方 UniScan 页面 ↗',
    fpTicker:'TICKER', fpNetwork:'网络', fpMax:'最大供应量', fpPerMint:'每次铸造', fpInscription:'铭文编号',
    b5Label:'孵化 QUQN', b5Title:'选择你的铸造方式', b5Body:'QUQN 是 Bitcoin 上标准的 4-byte BRC-20。你可以通过兼容的第三方 BRC-20 铭文服务进行铸造。推荐使用 UniSat，OKX Wallet 也可以作为备选。', calcLabel:'完整铸造次数', calcGets:'每次完整铸造为 1,000 QUQN，对应总量为', officialGuide:'UniSat 官方指南 ↗',
    unisatOptionTitle:'方式 1 — UniSat', recommended:'推荐', unisatStep1:'打开 UniSat 的 BRC-20 铭文页面。', unisatStep2:'搜索 ticker <code>QUQN</code> 并打开。', unisatStep3:'选择 <strong>Mint</strong>，并确认它是 <strong>4-byte (classic)</strong> BRC-20。', unisatStep4:'确认每次完整铸造为 <strong>1,000 QUQN</strong>，然后选择铸造次数。', unisatStep5:'核对接收地址，并检查全部 Bitcoin 网络费和服务费。', unisatStep6:'确认订单，然后等待 Bitcoin 网络确认。', openUnisatMint:'打开 UniSat BRC-20 铸造页面 ↗',
    okxOptionTitle:'方式 2 — OKX Wallet', okxStep1:'打开 OKX Wallet，进入 <strong>更多 → NFT → 铭文 → 铭文中心</strong>。', okxStep2:'选择 Bitcoin/BRC-20 铭文，然后选择 <strong>Mint</strong>。', okxStep3:'输入 ticker <code>QUQN</code>。', okxStep4:'完整铸造请输入 <strong>1,000 QUQN</strong>，并选择铸造次数。', okxStep5:'输入或核对接收方 Bitcoin 地址。', okxStep6:'检查铸造摘要和费用，然后确认。', okxGuide:'OKX 官方 BRC-20 指南 ↗',
    mintImportant:'<strong>重要：</strong>铸造前请始终核对网络为 <strong>Bitcoin</strong>、ticker 为 <strong>QUQN</strong>、最大供应量为 <strong>21,000,000</strong>，并核对官方 UniScan 页面。第三方界面和费用可能随时变化。',
    verifyUniscan:'在 UniScan 核对 QUQN ↗', mintUnisat:'使用 UniSat 铸造 ↗', mintOkx:'使用 OKX Wallet 铸造 ↗',
    b6Label:'等待并核对', b6Title:'等待 Bitcoin 确认，然后检查钱包', b6Body:'Bitcoin 交易不是即时完成的。绝不要在私信中付款给声称可以“解锁”或“释放”你 QUQN 的人。',
    safetyKicker:'只要记住这一条', safetyTitle:'铸造 QUQN 永远不需要你的助记词。', safetyBody:'任何人向你索要助记词，立刻停止。',
    riskLegal:'风险与法律', privacy:'隐私', footerNote:'植根于 Bitcoin 文化。不是投资建议，也不承诺任何价值。'
  }
};

const seasons = {
  spring:{img:'assets/gallery/le-coq-quqn-au-jardin-dore.webp', en:{pill:'SPRING QUQN',title:'Spring Coq.',text:'Flowers are blooming. QUQN assumes this is bullish.',dates:'MARCH · APRIL · MAY',caption:'SPRING EDITION'}, fr:{pill:'QUQN PRINTEMPS',title:'Coq de printemps.',text:'Les fleurs poussent. QUQN en conclut évidemment que c’est bullish.',dates:'MARS · AVRIL · MAI',caption:'ÉDITION PRINTEMPS'}, zh:{pill:'QUQN · 春季',title:'春日小公鸡。',text:'花开了。QUQN 理所当然地认为这是 bullish。',dates:'三月 · 四月 · 五月',caption:'春季版'}},
  summer:{img:'assets/gallery/vacances-tropicales-dorees-de-quqn.webp', en:{pill:'SUMMER QUQN',title:'Summer Coq.',text:'Sun, yachts and imaginary profits. QUQN has already booked the villa.',dates:'JUNE · JULY · AUGUST',caption:'SUMMER EDITION'}, fr:{pill:'QUQN ÉTÉ',title:'Coq d’été.',text:'Soleil, yachts et profits imaginaires. QUQN a déjà réservé la villa.',dates:'JUIN · JUILLET · AOÛT',caption:'ÉDITION ÉTÉ'}, zh:{pill:'QUQN · 夏季',title:'夏日小公鸡。',text:'阳光、游艇和想象中的利润。QUQN 已经把别墅订好了。',dates:'六月 · 七月 · 八月',caption:'夏季版'}},
  autumn:{img:'assets/gallery/coq-quqn-dans-un-automne-dore.webp', en:{pill:'AUTUMN QUQN',title:'Autumn Coq.',text:'The leaves are falling. QUQN is calling them unrealised profits.',dates:'SEPTEMBER · OCTOBER · NOVEMBER',caption:'AUTUMN EDITION'}, fr:{pill:'QUQN AUTOMNE',title:'Coq d’automne.',text:'Les feuilles tombent. QUQN appelle ça des profits non réalisés.',dates:'SEPTEMBRE · OCTOBRE · NOVEMBRE',caption:'ÉDITION AUTOMNE'}, zh:{pill:'QUQN · 秋季',title:'秋日小公鸡。',text:'叶子在掉。QUQN 把它们叫做“未实现利润”。',dates:'九月 · 十月 · 十一月',caption:'秋季版'}},
  winter:{img:'assets/gallery/coq-royal-glissant-sur-la-glace-de-noel.webp', en:{pill:'WINTER QUQN',title:'Winter Coq.',text:'Cold outside. Confidence still irresponsibly hot.',dates:'DECEMBER · JANUARY · FEBRUARY',caption:'WINTER EDITION'}, fr:{pill:'QUQN HIVER',title:'Coq d’hiver.',text:'Il fait froid dehors. Sa confiance reste irresponsablement brûlante.',dates:'DÉCEMBRE · JANVIER · FÉVRIER',caption:'ÉDITION HIVER'}, zh:{pill:'QUQN · 冬季',title:'冬日小公鸡。',text:'外面很冷，但它的自信依然热得不负责任。',dates:'十二月 · 一月 · 二月',caption:'冬季版'}}
};

let cfg, lang=localStorage.getItem('quqnLang')||'en', currentFutureIndex=-1;
const fmt=n=>Number(n).toLocaleString(lang==='fr'?'fr-FR':lang==='zh'?'zh-CN':lang==='ko'?'ko-KR':lang==='pt'?'pt-BR':lang==='es'?'es-ES':lang==='ja'?'ja-JP':lang==='ar'?'ar-SA':'en-US');
const safe=(sel,fn)=>{const el=$(sel); if(el)fn(el); return el};

function currentSeason(){const m=new Date().getMonth()+1; if(m>=3&&m<=5)return 'spring'; if(m>=6&&m<=8)return 'summer'; if(m>=9&&m<=11)return 'autumn'; return 'winter'}
function renderSeason(){const s=seasons[currentSeason()], t=s[lang]||s.en; safe('#seasonHeroImage',e=>e.style.backgroundImage=`url('${s.img}')`); safe('#seasonImage',e=>{e.src=s.img;e.alt=t.title}); safe('#seasonPill',e=>e.textContent=t.pill); safe('#seasonTitle',e=>e.textContent=t.title); safe('#seasonText',e=>e.textContent=t.text); safe('#seasonDates',e=>e.textContent=t.dates); safe('#seasonCaption',e=>e.textContent=t.caption)}
function renderRanks(){if(!cfg)return;safe('#rankGrid',e=>e.innerHTML=cfg.ranks.map(r=>`<article class="rank"><img src="${r.image}" alt="${r.name}" loading="lazy"><div><small>${fmt(r.threshold)}+ QUQN</small><h3>${r.name}</h3><p>${r.tag}</p></div></article>`).join(''))}
function openLightbox(src,title){safe('#lightboxImg',e=>e.src=src);safe('#lightboxTitle',e=>e.textContent=title);safe('#lightbox',e=>{e.classList.add('open');e.setAttribute('aria-hidden','false')})}
function setStats(minted,holders){if(!cfg)return;minted=Number(minted)||cfg.fallbackMinted;holders=Number(holders)||cfg.fallbackHolders;const pct=Math.min(100,(minted/cfg.maxSupply)*100);safe('#minted',e=>e.textContent=fmt(minted));safe('#holders',e=>e.textContent=fmt(holders));safe('#progressPct',e=>e.textContent=pct.toFixed(2)+'%');safe('#meterFill',e=>e.style.width=Math.max(.35,pct)+'%')}
async function liveStats(){setStats(cfg.fallbackMinted,cfg.fallbackHolders);if(!cfg.autoSync||!cfg.apiBase){safe('#syncState',e=>e.textContent='STATIC');return}try{const r=await fetch(cfg.apiBase.replace(/\/$/,'')+'/api/token',{cache:'no-store'});if(!r.ok)throw Error();const d=await r.json();setStats(d.totalMinted||d.minted,d.holdersCount);safe('#syncState',e=>e.textContent='LIVE')}catch{safe('#syncState',e=>e.textContent='STATIC')}}
function setupSocial(){if(!cfg)return;const s=cfg.social||{},xUrl=s.x||'https://x.com/QUQNbtc';const labels=lang==='zh'?{x:'𝕏 关注 @QUQNbtc',tg:'✈ 加入 Telegram',soon:'✈ Telegram — 即将开放'}:lang==='ko'?{x:'𝕏 @QUQNbtc 팔로우',tg:'✈ Telegram 참여',soon:'✈ Telegram — 곧 공개'}:lang==='pt'?{x:'𝕏 Seguir @QUQNbtc',tg:'✈ Entrar no Telegram',soon:'✈ Telegram — em breve'}:lang==='es'?{x:'𝕏 Seguir @QUQNbtc',tg:'✈ Unirse a Telegram',soon:'✈ Telegram — próximamente'}:lang==='ja'?{x:'𝕏 @QUQNbtcをフォロー',tg:'✈ Telegramに参加',soon:'✈ Telegram — 近日公開'}:lang==='ar'?{x:'𝕏 متابعة @QUQNbtc',tg:'✈ الانضمام إلى Telegram',soon:'✈ Telegram — قريبًا'}:lang==='fr'?{x:'𝕏 Suivre @QUQNbtc',tg:'✈ Rejoindre Telegram',soon:'✈ Telegram — bientôt'}:{x:'𝕏 Follow @QUQNbtc',tg:'✈ Join Telegram',soon:'✈ Telegram — coming soon'};safe('#socialButtons',e=>e.innerHTML=`<a class="btn dark" href="${xUrl}" target="_blank" rel="noopener">${labels.x}</a>`+(s.telegram?`<a class="btn dark" href="${s.telegram}" target="_blank" rel="noopener">${labels.tg}</a>`:`<span class="btn dark disabled">${labels.soon}</span>`))}
function updateMintCalc(){const input=$('#mintCount');if(!input||!cfg)return;let n=Math.max(1,Math.min(21000,Number(input.value)||1));safe('#mintCalcResult',e=>e.textContent=`${fmt(n*cfg.mintLimit)} QUQN`)}

function applyLang(){if(!translations[lang])lang='en';document.documentElement.lang=lang==='zh'?'zh-CN':lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';safe('#lang',e=>e.value=lang);$$('[data-t]').forEach(el=>{const v=translations[lang][el.dataset.t];if(v!==undefined)el.innerHTML=v});if(cfg){const c=(cfg.homeCopy&&(cfg.homeCopy[lang]||cfg.homeCopy.en))||{};const heroTitles={en:'SMALL COQ.<br><em>BIG DREAMS.</em>',zh:'小小公鸡。<br><em>大大梦想。</em>',ko:'작은 수탉.<br><em>큰 꿈.</em>',pt:'SMALL COQ.<br><em>BIG DREAMS.</em>',es:'SMALL COQ.<br><em>BIG DREAMS.</em>',ja:'小さなコック。<br><em>大きな夢。</em>',ar:'ديك صغير.<br><em>أحلام كبيرة.</em>',fr:'PETIT COQ.<br><em>GRANDS RÊVES.</em>'};safe('#heroTitle',e=>e.innerHTML=heroTitles[lang]||heroTitles.en);safe('#heroSubtitle',e=>e.textContent=c.heroSubtitle||'');safe('#storyLead',e=>e.textContent=c.storyLead||'');safe('#storyBody',e=>e.textContent=c.storyBody||'');safe('#voiceQuote',e=>e.textContent=c.voiceQuote||'');safe('#beginnerLead',e=>e.textContent=c.beginnerLead||'');safe('#beginnerQuote',e=>e.textContent=c.beginnerQuote||'');safe('#announcement',e=>e.textContent=(cfg.announcement&&(cfg.announcement[lang]||cfg.announcement.en))||'')}renderSeason();renderRanks();updateMintCalc();setupSocial()}

function futurePool(){return (cfg?.gallery||[]).filter(x=>x.visible)}
function showFuture(item){if(!item)return;safe('#futureImage',e=>{e.src=item.src;e.alt=item.title});safe('#futureTitle',e=>e.textContent=item.title)}
function spinFuture(){const pool=futurePool();if(!pool.length)return;const card=$('#futureCard');card?.classList.add('spinning');let ticks=0;const maxTicks=18;const timer=setInterval(()=>{let i=Math.floor(Math.random()*pool.length);showFuture(pool[i]);ticks++;if(ticks>=maxTicks){clearInterval(timer);let i;do{i=Math.floor(Math.random()*pool.length)}while(pool.length>1&&i===currentFutureIndex);currentFutureIndex=i;showFuture(pool[i]);setTimeout(()=>card?.classList.remove('spinning'),180)}},70)}
function setupGuide(){const modal=$('#guideModal');$$('[data-open-guide]').forEach(b=>b.addEventListener('click',()=>{if(modal?.showModal)modal.showModal();else modal?.setAttribute('open','')}));safe('#guideClose',e=>e.addEventListener('click',()=>modal?.close()));modal?.addEventListener('click',ev=>{if(ev.target===modal)modal.close()})}

async function init(){
  cfg=await fetch('assets/config.json',{cache:'no-store'}).then(r=>r.json());
  // V6 hotfix: presentation copy only. Never rewrite apiBase or other config fields.
  if(cfg?.homeCopy?.en){
    cfg.homeCopy.en.heroSubtitle='Meet QUQN — the tiny coq who represents every crypto dreamer.';
    cfg.homeCopy.en.storyBody='He watches whales, celebrity coins and legendary memes from the edge of the farm and asks the only question that matters: “Why not me?” QUQN is overconfident, impulsive, charmingly clumsy and absolutely convinced that one day the little guy gets his turn. He often jumps into things before understanding them and gets dramatically serious whenever he starts imagining himself as a billionaire.';
  }
  if(cfg?.homeCopy?.fr){
    cfg.homeCopy.fr.heroSubtitle='Voici QUQN — le petit coq qui représente tous les rêveurs crypto.';
    cfg.homeCopy.fr.storyBody='Il regarde les baleines, les tokens de célébrités et les memecoins devenus légendaires depuis le bord de la ferme et se pose une seule question : « Pourquoi pas moi ? » QUQN est trop sûr de lui, impulsif, maladroit mais attachant, et persuadé qu’un jour le petit investisseur aura son tour. Il fonce parfois avant d’avoir compris et devient soudain très sérieux dès qu’il s’imagine milliardaire.';
  }
  cfg.homeCopy=cfg.homeCopy||{};
  cfg.homeCopy.zh={
    heroSubtitle:'认识 QUQN —— 一只代表每个加密梦想家的小公鸡。',
    storyLead:'QUQN 生来很小。它的梦想可一点也不小。',
    storyBody:'它站在农场边上，看着巨鲸、名人币和那些成为传奇的 memecoin，只问一个最重要的问题：“为什么不能是我？” QUQN 自信过头、冲动、笨拙得有点可爱，并且坚信总有一天，小人物也会轮到自己的机会。它常常还没完全搞懂就先冲进去；一旦开始幻想自己成为亿万富翁，又会突然认真得不得了。',
    voiceQuote:'他们说小公鸡飞不起来？哼。今天也许不行。明天……亿万富翁。呃……大概吧。',
    beginnerLead:'从没用过 Bitcoin 钱包？没关系。按步骤慢慢来。你不需要向 QUQN 转钱，QUQN 也永远不会索要你的助记词。',
    beginnerQuote:'第一次？呃……太好了。慢慢来。连这只小公鸡都学会了。'
  };

  cfg.homeCopy.ko={
    heroSubtitle:'QUQN을 만나보세요 — 모든 크립토 드리머를 대표하는 작은 수탉.',
    storyLead:'QUQN은 작게 태어났습니다. 꿈은 전혀 작지 않습니다.',
    storyBody:'농장 가장자리에서 고래, 셀럽 토큰, 전설이 된 memecoin을 바라보며 단 하나를 묻습니다. “왜 나는 안 돼?” QUQN은 지나치게 자신감 있고, 충동적이고, 서툴지만 사랑스럽고, 언젠가는 작은 투자자에게도 차례가 올 거라고 믿습니다. 이해하기 전에 뛰어들기도 하고, 억만장자가 되는 상상을 할 때는 갑자기 진지해집니다.',
    voiceQuote:'작은 수탉은 못 난다고? 흥. 오늘은 아닐지 몰라도. 내일은… 억만장자. 어… 아마도.',
    beginnerLead:'Bitcoin 지갑이 처음인가요? 괜찮습니다. 천천히 단계별로 진행하세요. QUQN에 돈을 보낼 필요도 없고, QUQN은 절대 복구 구문을 요구하지 않습니다.',
    beginnerQuote:'처음이라고? 어… 좋아. 천천히 해. 이 작은 수탉도 배웠으니까.'
  };
  cfg.homeCopy.pt={
    heroSubtitle:'Conheça QUQN — o pequeno coq que representa todo sonhador cripto.',
    storyLead:'QUQN nasceu pequeno. Os sonhos dele, nem um pouco.',
    storyBody:'Da beira da fazenda, ele observa baleias, tokens de celebridades e memecoins que viraram lendas e faz uma única pergunta: “Por que não eu?” QUQN é confiante demais, impulsivo, meio desajeitado, mas carismático, e acredita que um dia o pequeno investidor terá sua vez. Às vezes entra antes de entender e fica subitamente sério quando começa a imaginar a vida de bilionário.',
    voiceQuote:'Disseram que galinho não voa? Hm. Hoje talvez não. Amanhã… bilionário. É… talvez.',
    beginnerLead:'Nunca usou uma carteira Bitcoin? Sem problema. Vá passo a passo. Você não precisa enviar dinheiro ao QUQN e QUQN nunca vai pedir sua seed phrase.',
    beginnerQuote:'Primeira vez? Ah… ótimo. Vai devagar. Até esse pequeno coq aprendeu.'
  };
  cfg.homeCopy.es={
    heroSubtitle:'Conoce a QUQN — el pequeño coq que representa a todos los soñadores cripto.',
    storyLead:'QUQN nació pequeño. Sus sueños, para nada.',
    storyBody:'Desde el borde de la granja observa ballenas, tokens de famosos y memecoins convertidos en leyenda, y se hace una sola pregunta: “¿Por qué yo no?” QUQN es demasiado seguro de sí mismo, impulsivo, torpe pero entrañable, y está convencido de que algún día le tocará al pequeño inversor. A veces se lanza antes de entender y se pone de repente muy serio cuando se imagina multimillonario.',
    voiceQuote:'¿Dicen que un gallito no puede volar? Hm. Hoy quizá no. Mañana… multimillonario. Eh… probablemente.',
    beginnerLead:'¿Nunca has usado una wallet Bitcoin? No pasa nada. Ve paso a paso. No necesitas enviar dinero a QUQN y QUQN nunca te pedirá tu frase de recuperación.',
    beginnerQuote:'¿Primera vez? Eh… perfecto. Ve despacio. Hasta este pequeño coq aprendió.'
  };

  cfg.homeCopy.ja={
    heroSubtitle:'QUQNを紹介します — すべてのクリプトドリーマーを代表する小さなコック。',
    storyLead:'QUQNは小さく生まれた。でも夢は小さくない。',
    storyBody:'農場の端から、クジラ、セレブコイン、伝説になったmemecoinを眺めながら、たった一つの質問をします。「なぜ僕じゃダメ？」 QUQNは自信過剰で、衝動的で、少し不器用。でも憎めません。そしていつか“小さい側”にも順番が来ると本気で信じています。',
    voiceQuote:'小さなコックは飛べないって？ふん。今日は無理かも。明日は……億万長者。えっと……たぶん。',
    beginnerLead:'Bitcoinウォレットを使ったことがなくても大丈夫。ゆっくり進めましょう。QUQNにお金を送る必要はなく、QUQNがリカバリーフレーズを求めることもありません。',
    beginnerQuote:'初めて？えっと……最高。ゆっくりいこう。この小さなコックでもできた。'
  };
  cfg.homeCopy.ar={
    heroSubtitle:'تعرّف على QUQN — الديك الصغير الذي يمثل كل حالم في عالم الكريبتو.',
    storyLead:'وُلد QUQN صغيرًا. أحلامه لم تكن صغيرة.',
    storyBody:'من طرف المزرعة يراقب الحيتان وعملات المشاهير والميم كوينز التي أصبحت أسطورية ويسأل سؤالًا واحدًا فقط: «لماذا ليس أنا؟» QUQN واثق أكثر من اللازم، مندفع، أخرق بطريقة محببة، ومقتنع أن دور الصغير سيأتي يومًا ما.',
    voiceQuote:'يقولون إن الديك الصغير لا يطير؟ همم. اليوم ربما لا. غدًا… ملياردير. آه… غالبًا.',
    beginnerLead:'لم تستخدم محفظة Bitcoin من قبل؟ لا مشكلة. اتبع الخطوات بهدوء. لا تحتاج لإرسال أموال إلى QUQN، ولن يطلب منك QUQN عبارة الاسترداد أبدًا.',
    beginnerQuote:'أول مرة؟ ممتاز. نمشي بهدوء. حتى هذا الديك الصغير تعلّم.'
  };

  ['topUniscan','heroUniscan','beginnerUniscan','guideUniscan'].forEach(id=>safe('#'+id,e=>e.href=cfg.uniscanUrl));
  safe('#unisatCta',e=>e.href=cfg.unisatMintUrl);safe('#walletDownload',e=>e.href=cfg.unisatWalletUrl||'https://unisat.io/download');safe('#officialMintGuide',e=>e.href=cfg.unisatGuideUrl||'https://docs.unisat.io/products/unisat-inscribe/how-to-inscribe-on-unisat');
  safe('#mintCount',e=>e.addEventListener('input',updateMintCalc));safe('#lang',e=>e.addEventListener('change',()=>{lang=e.value;localStorage.setItem('quqnLang',lang);applyLang()}));
  safe('#spinFuture',e=>e.addEventListener('click',spinFuture));safe('#spinAgain',e=>e.addEventListener('click',spinFuture));safe('#futureImage',e=>e.addEventListener('click',()=>openLightbox(e.src,$('#futureTitle')?.textContent||'QUQN')));
  safe('#lightboxClose',e=>e.addEventListener('click',()=>$('#lightbox')?.classList.remove('open')));safe('#lightbox',e=>e.addEventListener('click',ev=>{if(ev.target===e)e.classList.remove('open')}));
  setupGuide(); applyLang(); liveStats();
}
init().catch(console.error);
