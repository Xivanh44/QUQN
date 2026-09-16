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
const fmt=n=>Number(n).toLocaleString(lang==='fr'?'fr-FR':lang==='zh'?'zh-CN':'en-US');
const safe=(sel,fn)=>{const el=$(sel); if(el)fn(el); return el};

function currentSeason(){const m=new Date().getMonth()+1; if(m>=3&&m<=5)return 'spring'; if(m>=6&&m<=8)return 'summer'; if(m>=9&&m<=11)return 'autumn'; return 'winter'}
function renderSeason(){const s=seasons[currentSeason()], t=s[lang]||s.en; safe('#seasonHeroImage',e=>e.style.backgroundImage=`url('${s.img}')`); safe('#seasonImage',e=>{e.src=s.img;e.alt=t.title}); safe('#seasonPill',e=>e.textContent=t.pill); safe('#seasonTitle',e=>e.textContent=t.title); safe('#seasonText',e=>e.textContent=t.text); safe('#seasonDates',e=>e.textContent=t.dates); safe('#seasonCaption',e=>e.textContent=t.caption)}
function renderRanks(){if(!cfg)return;safe('#rankGrid',e=>e.innerHTML=cfg.ranks.map(r=>`<article class="rank"><img src="${r.image}" alt="${r.name}" loading="lazy"><div><small>${fmt(r.threshold)}+ QUQN</small><h3>${r.name}</h3><p>${r.tag}</p></div></article>`).join(''))}
function openLightbox(src,title){safe('#lightboxImg',e=>e.src=src);safe('#lightboxTitle',e=>e.textContent=title);safe('#lightbox',e=>{e.classList.add('open');e.setAttribute('aria-hidden','false')})}
function setStats(minted,holders){if(!cfg)return;minted=Number(minted)||cfg.fallbackMinted;holders=Number(holders)||cfg.fallbackHolders;const pct=Math.min(100,(minted/cfg.maxSupply)*100);safe('#minted',e=>e.textContent=fmt(minted));safe('#holders',e=>e.textContent=fmt(holders));safe('#progressPct',e=>e.textContent=pct.toFixed(2)+'%');safe('#meterFill',e=>e.style.width=Math.max(.35,pct)+'%')}
async function liveStats(){setStats(cfg.fallbackMinted,cfg.fallbackHolders);if(!cfg.autoSync||!cfg.apiBase){safe('#syncState',e=>e.textContent='STATIC');return}try{const r=await fetch(cfg.apiBase.replace(/\/$/,'')+'/api/token',{cache:'no-store'});if(!r.ok)throw Error();const d=await r.json();setStats(d.totalMinted||d.minted,d.holdersCount);safe('#syncState',e=>e.textContent='LIVE')}catch{safe('#syncState',e=>e.textContent='STATIC')}}
function setupSocial(){if(!cfg)return;const s=cfg.social||{},xUrl=s.x||'https://x.com/QUQNbtc';const labels=lang==='zh'?{x:'𝕏 关注 @QUQNbtc',tg:'✈ 加入 Telegram',soon:'✈ Telegram — 即将开放'}:lang==='fr'?{x:'𝕏 Suivre @QUQNbtc',tg:'✈ Rejoindre Telegram',soon:'✈ Telegram — bientôt'}:{x:'𝕏 Follow @QUQNbtc',tg:'✈ Join Telegram',soon:'✈ Telegram — coming soon'};safe('#socialButtons',e=>e.innerHTML=`<a class="btn dark" href="${xUrl}" target="_blank" rel="noopener">${labels.x}</a>`+(s.telegram?`<a class="btn dark" href="${s.telegram}" target="_blank" rel="noopener">${labels.tg}</a>`:`<span class="btn dark disabled">${labels.soon}</span>`))}
function updateMintCalc(){const input=$('#mintCount');if(!input||!cfg)return;let n=Math.max(1,Math.min(21000,Number(input.value)||1));safe('#mintCalcResult',e=>e.textContent=`${fmt(n*cfg.mintLimit)} QUQN`)}

function applyLang(){if(!translations[lang])lang='en';document.documentElement.lang=lang==='zh'?'zh-CN':lang;safe('#lang',e=>e.value=lang);$$('[data-t]').forEach(el=>{const v=translations[lang][el.dataset.t];if(v!==undefined)el.innerHTML=v});if(cfg){const c=(cfg.homeCopy&&(cfg.homeCopy[lang]||cfg.homeCopy.en))||{};const heroTitles={en:'SMALL COQ.<br><em>BIG DREAMS.</em>',fr:'PETIT COQ.<br><em>GRANDS RÊVES.</em>',zh:'小小公鸡。<br><em>大大梦想。</em>'};safe('#heroTitle',e=>e.innerHTML=heroTitles[lang]||heroTitles.en);safe('#heroSubtitle',e=>e.textContent=c.heroSubtitle||'');safe('#storyLead',e=>e.textContent=c.storyLead||'');safe('#storyBody',e=>e.textContent=c.storyBody||'');safe('#voiceQuote',e=>e.textContent=c.voiceQuote||'');safe('#beginnerLead',e=>e.textContent=c.beginnerLead||'');safe('#beginnerQuote',e=>e.textContent=c.beginnerQuote||'');safe('#announcement',e=>e.textContent=(cfg.announcement&&(cfg.announcement[lang]||cfg.announcement.en))||'')}renderSeason();renderRanks();updateMintCalc();setupSocial()}

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

  ['topUniscan','heroUniscan','beginnerUniscan','guideUniscan'].forEach(id=>safe('#'+id,e=>e.href=cfg.uniscanUrl));
  safe('#unisatCta',e=>e.href=cfg.unisatMintUrl);safe('#walletDownload',e=>e.href=cfg.unisatWalletUrl||'https://unisat.io/download');safe('#officialMintGuide',e=>e.href=cfg.unisatGuideUrl||'https://docs.unisat.io/products/unisat-inscribe/how-to-inscribe-on-unisat');
  safe('#mintCount',e=>e.addEventListener('input',updateMintCalc));safe('#lang',e=>e.addEventListener('change',()=>{lang=e.value;localStorage.setItem('quqnLang',lang);applyLang()}));
  safe('#spinFuture',e=>e.addEventListener('click',spinFuture));safe('#spinAgain',e=>e.addEventListener('click',spinFuture));safe('#futureImage',e=>e.addEventListener('click',()=>openLightbox(e.src,$('#futureTitle')?.textContent||'QUQN')));
  safe('#lightboxClose',e=>e.addEventListener('click',()=>$('#lightbox')?.classList.remove('open')));safe('#lightbox',e=>e.addEventListener('click',ev=>{if(ev.target===e)e.classList.remove('open')}));
  setupGuide(); applyLang(); liveStats();
}
init().catch(console.error);
