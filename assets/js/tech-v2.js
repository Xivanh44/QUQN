
(() => {
  "use strict";

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  const strings = {
    en:{onchain:'On-chain',lab:'QUQN Lab',fairMint:'FAIR MINT',heroNote:'A Bitcoin-native meme character built around a public BRC-20 fair mint.',mintCta:'MINT QUQN ↗',exploreCta:'EXPLORE ON-CHAIN ↗',protocol:'PROTOCOL',network:'NETWORK',verifyFirst:'VERIFY FIRST. MINT SECOND.',labTitle:'Turn the meme into something people can use.',labIntro:'Create a meme, build a QUQN-style profile picture, then bring it back to The Coop.',memeFactory:'Meme Factory',pfpMaker:'PFP Maker',coopWall:'Coop Wall',template:'Template',topText:'Top text',bottomText:'Bottom text',exportPng:'EXPORT PNG ↗',localOnly:'Your image stays in your browser. Nothing is uploaded to QUQN.',uploadPhoto:'Upload a photo',exportPfp:'EXPORT PFP ↗',wallNote:'A future community wall for real QUQN creations. The preview uses official QUQN artwork — no fake community posts.',shareX:'CREATE & SHARE ON X ↗',playgroundKicker:'QUQN PLAYGROUND / PURE NONSENSE',playgroundTitle:'The tech is real. The billionaire test is not.',playgroundIntro:'We kept the weird part of QUQN — just moved it away from the front door.'},
    fr:{onchain:'On-chain',lab:'QUQN Lab',fairMint:'FAIR MINT',heroNote:'Un personnage meme natif de Bitcoin construit autour d’un fair mint BRC-20 public.',mintCta:'MINTER QUQN ↗',exploreCta:'EXPLORER ON-CHAIN ↗',protocol:'PROTOCOLE',network:'RÉSEAU',verifyFirst:'VÉRIFIER D’ABORD. MINTER ENSUITE.',labTitle:'Transformer le meme en quelque chose que la communauté peut utiliser.',labIntro:'Crée un meme, fabrique un PFP façon QUQN, puis ramène-le dans The Coop.',memeFactory:'Meme Factory',pfpMaker:'PFP Maker',coopWall:'Coop Wall',template:'Modèle',topText:'Texte haut',bottomText:'Texte bas',exportPng:'EXPORTER PNG ↗',localOnly:'Ton image reste dans ton navigateur. Rien n’est envoyé à QUQN.',uploadPhoto:'Importer une photo',exportPfp:'EXPORTER LE PFP ↗',wallNote:'Un futur mur communautaire pour de vraies créations QUQN. L’aperçu utilise uniquement des visuels officiels — aucun faux post communautaire.',shareX:'CRÉER & PARTAGER SUR X ↗',playgroundKicker:'QUQN PLAYGROUND / PUR NON-SENS',playgroundTitle:'La tech est réelle. Le test du milliardaire ne l’est pas.',playgroundIntro:'On garde le côté absurde de QUQN — simplement plus loin de la porte d’entrée.'},
    zh:{onchain:'链上',lab:'QUQN Lab',fairMint:'公平铸造',heroNote:'一个基于 Bitcoin 公共 BRC-20 公平铸造的 meme 角色。',mintCta:'铸造 QUQN ↗',exploreCta:'查看链上数据 ↗',protocol:'协议',network:'网络',verifyFirst:'先核对，再铸造。',labTitle:'让 meme 变成社区真正可以使用的东西。',labIntro:'制作 meme、生成 QUQN 风格头像，然后带回 The Coop。',memeFactory:'Meme 工厂',pfpMaker:'PFP 制作器',coopWall:'Coop 墙',template:'模板',topText:'顶部文字',bottomText:'底部文字',exportPng:'导出 PNG ↗',localOnly:'图片只保留在你的浏览器中，不会上传到 QUQN。',uploadPhoto:'上传照片',exportPfp:'导出 PFP ↗',wallNote:'未来用于真实 QUQN 社区作品的展示墙。预览只使用官方 QUQN 图片，不伪造社区帖子。',shareX:'创建并分享到 X ↗',playgroundKicker:'QUQN PLAYGROUND / 纯属胡闹',playgroundTitle:'技术是真的。亿万富翁测试不是。',playgroundIntro:'我们保留 QUQN 的荒诞感，只是不再把它放在第一屏。'},
    ko:{onchain:'온체인',lab:'QUQN Lab',fairMint:'FAIR MINT',heroNote:'공개 BRC-20 페어 민트를 중심으로 만든 Bitcoin-native 밈 캐릭터.',mintCta:'QUQN 민트 ↗',exploreCta:'온체인 보기 ↗',protocol:'프로토콜',network:'네트워크',verifyFirst:'먼저 확인. 그다음 민트.',labTitle:'밈을 커뮤니티가 실제로 쓸 수 있는 것으로.',labIntro:'밈을 만들고 QUQN 스타일 PFP를 만든 뒤 The Coop으로 가져오세요.',memeFactory:'Meme Factory',pfpMaker:'PFP Maker',coopWall:'Coop Wall',template:'템플릿',topText:'위 텍스트',bottomText:'아래 텍스트',exportPng:'PNG 내보내기 ↗',localOnly:'이미지는 브라우저에만 남습니다. QUQN에 업로드되지 않습니다.',uploadPhoto:'사진 업로드',exportPfp:'PFP 내보내기 ↗',wallNote:'실제 QUQN 커뮤니티 작품을 위한 미래의 월입니다. 미리보기에는 공식 QUQN 아트만 사용합니다.',shareX:'X에 만들고 공유 ↗',playgroundKicker:'QUQN PLAYGROUND / PURE NONSENSE',playgroundTitle:'기술은 진짜. 억만장자 테스트는 아니죠.',playgroundIntro:'QUQN의 이상한 매력은 그대로 두되 첫 화면에서는 내려놓았습니다.'},
    ja:{onchain:'オンチェーン',lab:'QUQN Lab',fairMint:'FAIR MINT',heroNote:'公開 BRC-20 フェアミントを中心にした Bitcoin-native の meme キャラクター。',mintCta:'QUQNをミント ↗',exploreCta:'オンチェーンを見る ↗',protocol:'プロトコル',network:'ネットワーク',verifyFirst:'確認してからミント。',labTitle:'meme をコミュニティが実際に使えるものへ。',labIntro:'meme を作り、QUQN風PFPを作って The Coop に持ち帰ろう。',memeFactory:'Meme Factory',pfpMaker:'PFP Maker',coopWall:'Coop Wall',template:'テンプレート',topText:'上の文字',bottomText:'下の文字',exportPng:'PNGを書き出す ↗',localOnly:'画像はブラウザ内だけで処理され、QUQNへアップロードされません。',uploadPhoto:'写真をアップロード',exportPfp:'PFPを書き出す ↗',wallNote:'実際のQUQNコミュニティ作品のための将来のウォール。プレビューは公式QUQNアートのみです。',shareX:'作成してXへ共有 ↗',playgroundKicker:'QUQN PLAYGROUND / PURE NONSENSE',playgroundTitle:'技術は本物。億万長者テストは違います。',playgroundIntro:'QUQNらしい変な部分は残しつつ、入口から少し奥へ移しました。'},
    pt:{onchain:'On-chain',lab:'QUQN Lab',fairMint:'FAIR MINT',heroNote:'Um personagem meme nativo do Bitcoin construído em torno de um fair mint BRC-20 público.',mintCta:'MINTAR QUQN ↗',exploreCta:'EXPLORAR ON-CHAIN ↗',protocol:'PROTOCOLO',network:'REDE',verifyFirst:'CONFIRA PRIMEIRO. MINTE DEPOIS.',labTitle:'Transforme o meme em algo que a comunidade pode usar.',labIntro:'Crie um meme, monte um PFP no estilo QUQN e leve de volta para The Coop.',memeFactory:'Meme Factory',pfpMaker:'PFP Maker',coopWall:'Coop Wall',template:'Modelo',topText:'Texto superior',bottomText:'Texto inferior',exportPng:'EXPORTAR PNG ↗',localOnly:'Sua imagem fica no navegador. Nada é enviado para QUQN.',uploadPhoto:'Enviar foto',exportPfp:'EXPORTAR PFP ↗',wallNote:'Um futuro mural comunitário para criações QUQN reais. A prévia usa apenas arte oficial QUQN.',shareX:'CRIAR E COMPARTILHAR NO X ↗',playgroundKicker:'QUQN PLAYGROUND / PURO ABSURDO',playgroundTitle:'A tecnologia é real. O teste de bilionário não.',playgroundIntro:'Mantivemos a parte estranha do QUQN — só tiramos da porta de entrada.'},
    es:{onchain:'On-chain',lab:'QUQN Lab',fairMint:'FAIR MINT',heroNote:'Un personaje meme nativo de Bitcoin construido alrededor de un fair mint BRC-20 público.',mintCta:'MINTEAR QUQN ↗',exploreCta:'EXPLORAR ON-CHAIN ↗',protocol:'PROTOCOLO',network:'RED',verifyFirst:'VERIFICA PRIMERO. MINTEA DESPUÉS.',labTitle:'Convierte el meme en algo que la comunidad pueda usar.',labIntro:'Crea un meme, haz un PFP estilo QUQN y llévalo de vuelta a The Coop.',memeFactory:'Meme Factory',pfpMaker:'PFP Maker',coopWall:'Coop Wall',template:'Plantilla',topText:'Texto superior',bottomText:'Texto inferior',exportPng:'EXPORTAR PNG ↗',localOnly:'Tu imagen se queda en el navegador. Nada se sube a QUQN.',uploadPhoto:'Subir una foto',exportPfp:'EXPORTAR PFP ↗',wallNote:'Un futuro muro comunitario para creaciones QUQN reales. La vista previa usa solo arte oficial QUQN.',shareX:'CREAR Y COMPARTIR EN X ↗',playgroundKicker:'QUQN PLAYGROUND / PURO ABSURDO',playgroundTitle:'La tecnología es real. El test del multimillonario no.',playgroundIntro:'Conservamos la parte rara de QUQN; simplemente la alejamos de la entrada.'},
    ar:{onchain:'على السلسلة',lab:'QUQN Lab',fairMint:'سك عادل',heroNote:'شخصية meme أصلية على Bitcoin مبنية حول سك BRC-20 عام وعادل.',mintCta:'سك QUQN ↗',exploreCta:'استكشاف ON-CHAIN ↗',protocol:'البروتوكول',network:'الشبكة',verifyFirst:'تحقق أولًا. ثم قم بالسك.',labTitle:'حوّل الـ meme إلى شيء يمكن للمجتمع استخدامه.',labIntro:'أنشئ meme وصورة PFP بأسلوب QUQN ثم أعدها إلى The Coop.',memeFactory:'مصنع Meme',pfpMaker:'صانع PFP',coopWall:'Coop Wall',template:'القالب',topText:'النص العلوي',bottomText:'النص السفلي',exportPng:'تصدير PNG ↗',localOnly:'صورتك تبقى داخل متصفحك ولا يتم رفعها إلى QUQN.',uploadPhoto:'رفع صورة',exportPfp:'تصدير PFP ↗',wallNote:'جدار مجتمعي مستقبلي لإبداعات QUQN الحقيقية. المعاينة تستخدم أعمال QUQN الرسمية فقط.',shareX:'أنشئ وشارك على X ↗',playgroundKicker:'QUQN PLAYGROUND / عبث كامل',playgroundTitle:'التقنية حقيقية. اختبار الملياردير ليس كذلك.',playgroundIntro:'احتفظنا بالجانب الغريب من QUQN، لكن نقلناه بعيدًا عن الواجهة الأولى.'}
  };

  const extraStrings = {
    en:{shareImage:'SHARE IMAGE ↗',createMeme:'CREATE A MEME ↗',createPfp:'CREATE A PFP ↗',wallComing:'COMMUNITY SUBMISSIONS · COMING LATER',wallNote:'Create a meme or a PFP above, export it, then share it. The Coop Wall will later showcase real community creations after moderation.',flowCreateTitle:'CREATE',flowCreateText:'Make a meme or a PFP',flowExportTitle:'EXPORT / SHARE',flowExportText:'Download the PNG or share it',flowWallTitle:'THE COOP WALL',flowWallText:'Community submissions coming later',memeHelp:'Choose a QUQN scene, add your text, then download the finished meme.',pfpHelp:'Upload a photo. The QUQN frame is applied locally in your browser.',captionPreset:'Caption preset',downloadMeme:'DOWNLOAD MEME · PNG ↓',downloadPfp:'DOWNLOAD PFP · PNG ↓',shareXClear:'SHARE ON X ↗',shareHelp:'On mobile, sharing can send the image file directly. On desktop, the PNG may download first so you can attach it to X.',comingSoon:'COMING SOON',wallInactive:'NOT ACTIVE YET',wallTitle:'Later: a gallery of real QUQN community creations.',wallNoteClear:'The images on the right are only official QUQN examples. When submissions are enabled, approved community memes and PFPs will appear here.',shareFallback:'IMAGE DOWNLOADED · ADD IT TO X'},
    fr:{shareImage:'PARTAGER L’IMAGE ↗',createMeme:'CRÉER UN MEME ↗',createPfp:'CRÉER UN PFP ↗',wallComing:'ENVOIS COMMUNAUTAIRES · BIENTÔT',wallNote:'Crée un meme ou un PFP ci-dessus, exporte-le puis partage-le. Plus tard, The Coop Wall affichera de vraies créations de la communauté après modération.',flowCreateTitle:'CRÉE',flowCreateText:'Fais un meme ou un PFP',flowExportTitle:'TÉLÉCHARGE / PARTAGE',flowExportText:'Récupère le PNG ou partage-le',flowWallTitle:'THE COOP WALL',flowWallText:'Envois communautaires bientôt',memeHelp:'Choisis une scène QUQN, ajoute ton texte puis télécharge le meme terminé.',pfpHelp:'Importe une photo. Le cadre QUQN est appliqué localement dans ton navigateur.',captionPreset:'Texte prédéfini',downloadMeme:'TÉLÉCHARGER LE MEME · PNG ↓',downloadPfp:'TÉLÉCHARGER LE PFP · PNG ↓',shareXClear:'PARTAGER SUR X ↗',shareHelp:'Sur mobile, le partage peut envoyer directement l’image. Sur ordinateur, le PNG peut d’abord être téléchargé pour que tu l’ajoutes à X.',comingSoon:'BIENTÔT',wallInactive:'PAS ENCORE ACTIF',wallTitle:'Bientôt : une galerie des vraies créations de la communauté QUQN.',wallNoteClear:'Les images à droite sont uniquement des exemples officiels QUQN. Quand les envois seront activés, les memes et PFP de la communauté validés apparaîtront ici.',shareFallback:'IMAGE TÉLÉCHARGÉE · AJOUTE-LA SUR X'},
    zh:{shareImage:'分享图片 ↗',createMeme:'制作 MEME ↗',createPfp:'制作 PFP ↗',wallComing:'社区投稿 · 即将推出',wallNote:'先在上方制作 meme 或 PFP，导出后再分享。未来 The Coop Wall 将展示经过审核的真实社区作品。',flowCreateTitle:'创建',flowCreateText:'制作 meme 或 PFP',flowExportTitle:'导出 / 分享',flowExportText:'下载 PNG 或直接分享',flowWallTitle:'THE COOP WALL',flowWallText:'社区投稿即将推出',memeHelp:'选择 QUQN 场景，添加文字，然后下载完成的 meme。',pfpHelp:'上传照片。QUQN 边框会在浏览器本地应用。',captionPreset:'文字预设',downloadMeme:'下载 MEME · PNG ↓',downloadPfp:'下载 PFP · PNG ↓',shareXClear:'分享到 X ↗',shareHelp:'在手机上可直接分享图片文件；桌面端可能先下载 PNG，再手动添加到 X。',comingSoon:'即将推出',wallInactive:'尚未启用',wallTitle:'未来：真实 QUQN 社区作品画廊。',wallNoteClear:'右侧图片仅为 QUQN 官方示例。投稿启用后，审核通过的社区 meme 和 PFP 将显示在这里。',shareFallback:'图片已下载 · 请在 X 中添加'},
    ko:{shareImage:'이미지 공유 ↗',createMeme:'MEME 만들기 ↗',createPfp:'PFP 만들기 ↗',wallComing:'커뮤니티 제출 · 곧 제공',wallNote:'위에서 meme 또는 PFP를 만들고 내보낸 뒤 공유하세요. 이후 The Coop Wall에는 검토된 실제 커뮤니티 작품이 표시됩니다.',flowCreateTitle:'만들기',flowCreateText:'Meme 또는 PFP 만들기',flowExportTitle:'내보내기 / 공유',flowExportText:'PNG 다운로드 또는 공유',flowWallTitle:'THE COOP WALL',flowWallText:'커뮤니티 제출 곧 제공',memeHelp:'QUQN 장면을 고르고 텍스트를 추가한 뒤 완성된 meme을 다운로드하세요.',pfpHelp:'사진을 올리면 QUQN 프레임이 브라우저에서 로컬로 적용됩니다.',captionPreset:'문구 프리셋',downloadMeme:'MEME 다운로드 · PNG ↓',downloadPfp:'PFP 다운로드 · PNG ↓',shareXClear:'X에 공유 ↗',shareHelp:'모바일에서는 이미지 파일을 직접 공유할 수 있습니다. 데스크톱에서는 PNG가 먼저 다운로드될 수 있습니다.',comingSoon:'곧 제공',wallInactive:'아직 활성화되지 않음',wallTitle:'추후: 실제 QUQN 커뮤니티 작품 갤러리.',wallNoteClear:'오른쪽 이미지는 공식 QUQN 예시입니다. 제출 기능이 열리면 승인된 커뮤니티 meme과 PFP가 이곳에 표시됩니다.',shareFallback:'이미지 다운로드됨 · X에 추가하세요'},
    ja:{shareImage:'画像を共有 ↗',createMeme:'MEMEを作る ↗',createPfp:'PFPを作る ↗',wallComing:'コミュニティ投稿 · 近日公開',wallNote:'上で meme または PFP を作成し、書き出して共有してください。将来 The Coop Wall には審査済みの実際のコミュニティ作品を掲載します。',flowCreateTitle:'作成',flowCreateText:'meme または PFP を作る',flowExportTitle:'書き出し / 共有',flowExportText:'PNGを保存または共有',flowWallTitle:'THE COOP WALL',flowWallText:'コミュニティ投稿は近日公開',memeHelp:'QUQNのシーンを選び、文字を追加して完成したmemeを保存します。',pfpHelp:'写真をアップロードするとQUQNフレームがブラウザ内で適用されます。',captionPreset:'キャプションプリセット',downloadMeme:'MEMEを保存 · PNG ↓',downloadPfp:'PFPを保存 · PNG ↓',shareXClear:'Xで共有 ↗',shareHelp:'モバイルでは画像ファイルを直接共有できます。デスクトップではPNGが先に保存される場合があります。',comingSoon:'近日公開',wallInactive:'まだ利用できません',wallTitle:'今後：実際のQUQNコミュニティ作品ギャラリー。',wallNoteClear:'右側はQUQN公式のサンプル画像です。投稿機能開始後、承認されたコミュニティmemeとPFPがここに表示されます。',shareFallback:'画像を保存しました · Xで添付してください'},
    pt:{shareImage:'COMPARTILHAR IMAGEM ↗',createMeme:'CRIAR UM MEME ↗',createPfp:'CRIAR UM PFP ↗',wallComing:'ENVIOS DA COMUNIDADE · EM BREVE',wallNote:'Crie um meme ou PFP acima, exporte e compartilhe. Depois, The Coop Wall exibirá criações reais da comunidade após moderação.',flowCreateTitle:'CRIAR',flowCreateText:'Faça um meme ou PFP',flowExportTitle:'EXPORTAR / COMPARTILHAR',flowExportText:'Baixe o PNG ou compartilhe',flowWallTitle:'THE COOP WALL',flowWallText:'Envios da comunidade em breve',memeHelp:'Escolha uma cena QUQN, adicione seu texto e baixe o meme pronto.',pfpHelp:'Envie uma foto. A moldura QUQN é aplicada localmente no navegador.',captionPreset:'Legenda pronta',downloadMeme:'BAIXAR MEME · PNG ↓',downloadPfp:'BAIXAR PFP · PNG ↓',shareXClear:'COMPARTILHAR NO X ↗',shareHelp:'No celular, o compartilhamento pode enviar a imagem diretamente. No desktop, o PNG pode baixar primeiro para anexar no X.',comingSoon:'EM BREVE',wallInactive:'AINDA NÃO ATIVO',wallTitle:'Em breve: uma galeria de criações reais da comunidade QUQN.',wallNoteClear:'As imagens à direita são apenas exemplos oficiais QUQN. Quando os envios forem ativados, memes e PFPs aprovados da comunidade aparecerão aqui.',shareFallback:'IMAGEM BAIXADA · ANEXE NO X'},
    es:{shareImage:'COMPARTIR IMAGEN ↗',createMeme:'CREAR UN MEME ↗',createPfp:'CREAR UN PFP ↗',wallComing:'ENVÍOS DE LA COMUNIDAD · PRÓXIMAMENTE',wallNote:'Crea un meme o PFP arriba, expórtalo y compártelo. Más adelante, The Coop Wall mostrará creaciones reales de la comunidad tras moderación.',flowCreateTitle:'CREAR',flowCreateText:'Haz un meme o PFP',flowExportTitle:'EXPORTAR / COMPARTIR',flowExportText:'Descarga el PNG o compártelo',flowWallTitle:'THE COOP WALL',flowWallText:'Envíos de la comunidad próximamente',memeHelp:'Elige una escena QUQN, añade tu texto y descarga el meme terminado.',pfpHelp:'Sube una foto. El marco QUQN se aplica localmente en tu navegador.',captionPreset:'Texto predefinido',downloadMeme:'DESCARGAR MEME · PNG ↓',downloadPfp:'DESCARGAR PFP · PNG ↓',shareXClear:'COMPARTIR EN X ↗',shareHelp:'En móvil, compartir puede enviar la imagen directamente. En escritorio, el PNG puede descargarse primero para adjuntarlo en X.',comingSoon:'PRÓXIMAMENTE',wallInactive:'TODAVÍA NO ACTIVO',wallTitle:'Próximamente: una galería de creaciones reales de la comunidad QUQN.',wallNoteClear:'Las imágenes de la derecha son solo ejemplos oficiales de QUQN. Cuando se habiliten los envíos, aparecerán aquí memes y PFP aprobados de la comunidad.',shareFallback:'IMAGEN DESCARGADA · AÑÁDELA EN X'},
    ar:{shareImage:'مشاركة الصورة ↗',createMeme:'إنشاء MEME ↗',createPfp:'إنشاء PFP ↗',wallComing:'مشاركات المجتمع · قريبًا',wallNote:'أنشئ meme أو PFP أعلاه، ثم صدّره وشاركه. لاحقًا سيعرض The Coop Wall إبداعات حقيقية من المجتمع بعد المراجعة.',flowCreateTitle:'إنشاء',flowCreateText:'أنشئ meme أو PFP',flowExportTitle:'تصدير / مشاركة',flowExportText:'نزّل PNG أو شاركه',flowWallTitle:'THE COOP WALL',flowWallText:'مشاركات المجتمع قريبًا',memeHelp:'اختر مشهد QUQN وأضف النص ثم نزّل الـ meme النهائي.',pfpHelp:'ارفع صورة وسيتم تطبيق إطار QUQN محليًا داخل المتصفح.',captionPreset:'نص جاهز',downloadMeme:'تنزيل MEME · PNG ↓',downloadPfp:'تنزيل PFP · PNG ↓',shareXClear:'مشاركة على X ↗',shareHelp:'على الهاتف يمكن مشاركة ملف الصورة مباشرة. على الكمبيوتر قد يتم تنزيل PNG أولًا لإرفاقه على X.',comingSoon:'قريبًا',wallInactive:'غير مفعّل بعد',wallTitle:'لاحقًا: معرض حقيقي لإبداعات مجتمع QUQN.',wallNoteClear:'الصور على اليمين أمثلة رسمية من QUQN فقط. عند تفعيل الإرسال ستظهر هنا memes وPFP المعتمدة من المجتمع.',shareFallback:'تم تنزيل الصورة · أرفقها على X'}
  };

  function currentLang(){
    const l=(document.documentElement.lang||'en').toLowerCase();
    if(l.startsWith('zh')) return 'zh';
    return l.split('-')[0];
  }
  function applyTechLang(){
    const langKey=currentLang(); const dict={...(strings[langKey]||strings.en),...(extraStrings[langKey]||extraStrings.en)};
    $$('[data-tech-i18n]').forEach(el=>{ const v=dict[el.dataset.techI18n]; if(v) el.textContent=v; });
  }
  new MutationObserver(applyTechLang).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  setTimeout(applyTechLang,0);

  function loadImage(src){return new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=src;});}
  const memeSources={
    city:'assets/hero-night-city.webp',
    lambo:'assets/gallery/destiny-36-lambo-coq.webp',
    moon:'assets/gallery/destiny-05-moon-base-billionaire.webp',
    casino:'assets/gallery/destiny-08-casino-boss.webp',
    wallstreet:'assets/gallery/destiny-02-wall-street-coq.webp',
    broke:'assets/gallery/destiny-30-still-broke.webp',
    diamond:'assets/gallery/destiny-12-diamond-hands.webp',
    trader:'assets/gallery/destiny-29-the-3-a-m-trader.webp',
    king:'assets/gallery/coq-roi-dans-un-royaume-dore.webp',
    jet:'assets/gallery/coq-royal-en-jet-prive.webp',
    nantes:'assets/gallery/destiny-31-nantes-coq.webp',
    himeji:'assets/gallery/destiny-33-himeji-shogun.webp'
  };
  let memeImg=null;
  async function drawMeme(){
    const canvas=$('#memeCanvas'); if(!canvas) return;
    const ctx=canvas.getContext('2d');
    const key=$('#memeTemplate')?.value||'city';
    try{memeImg=await loadImage(memeSources[key]);}catch(_){return;}
    const cw=canvas.width,ch=canvas.height,ir=memeImg.width/memeImg.height,cr=cw/ch;
    let sx=0,sy=0,sw=memeImg.width,sh=memeImg.height;
    if(ir>cr){sw=memeImg.height*cr;sx=(memeImg.width-sw)/2}else{sh=memeImg.width/cr;sy=(memeImg.height-sh)/2}
    ctx.clearRect(0,0,cw,ch);ctx.drawImage(memeImg,sx,sy,sw,sh,0,0,cw,ch);
    const grad=ctx.createLinearGradient(0,0,0,ch);grad.addColorStop(0,'rgba(0,0,0,.42)');grad.addColorStop(.25,'rgba(0,0,0,0)');grad.addColorStop(.72,'rgba(0,0,0,0)');grad.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=grad;ctx.fillRect(0,0,cw,ch);
    ctx.textAlign='center';ctx.textBaseline='top';ctx.lineJoin='round';ctx.font='900 60px Arial Black, Arial, sans-serif';ctx.lineWidth=12;ctx.strokeStyle='rgba(0,0,0,.88)';ctx.fillStyle='#fff';
    const top=($('#memeTop')?.value||'').toUpperCase();const bottom=($('#memeBottom')?.value||'').toUpperCase();
    ctx.strokeText(top,cw/2,34,cw-55);ctx.fillText(top,cw/2,34,cw-55);ctx.textBaseline='bottom';ctx.strokeText(bottom,cw/2,ch-34,cw-55);ctx.fillText(bottom,cw/2,ch-34,cw-55);
    ctx.textBaseline='bottom';ctx.textAlign='left';ctx.font='800 18px ui-monospace, monospace';ctx.lineWidth=0;ctx.fillStyle='rgba(255,220,126,.92)';ctx.fillText('QUQN / SMALL COQ. BIG DREAMS.',24,ch-16);
  }
  const memePresets={
    dreams:['SMALL COQ.','BIG DREAMS.'],
    bitcoin:['BORN ON BITCOIN.','BUILT DIFFERENT.'],
    fair:['FAIR MINT.','NO VC. NO PRESALE.'],
    broke:['STILL NOT RICH.','STILL HERE.'],
    coop:['FROM THE COOP.','TO THE MOON.'],
    early:['I MINTED EARLY.','NOW WE WAIT.']
  };
  ['memeTemplate','memeTop','memeBottom'].forEach(id=>$('#'+id)?.addEventListener(id==='memeTemplate'?'change':'input',drawMeme));
  $('#memePreset')?.addEventListener('change',ev=>{
    const preset=memePresets[ev.target.value];
    if(!preset) return;
    if($('#memeTop')) $('#memeTop').value=preset[0];
    if($('#memeBottom')) $('#memeBottom').value=preset[1];
    drawMeme();
  });
  $('#memeDownload')?.addEventListener('click',()=>{drawMeme().then(()=>{const a=document.createElement('a');a.download='QUQN-meme.png';a.href=$('#memeCanvas').toDataURL('image/png');a.click();});});

  function dataUrlToFile(dataUrl,filename){
    const parts=dataUrl.split(',');
    const mime=(parts[0].match(/data:([^;]+)/)||[])[1]||'image/png';
    const bin=atob(parts[1]);
    const bytes=new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
    return new File([bytes],filename,{type:mime});
  }
  function flashShareFallback(button){
    if(!button) return;
    const langKey=currentLang();
    const dict={...(strings[langKey]||strings.en),...(extraStrings[langKey]||extraStrings.en)};
    const old=button.textContent;
    button.textContent=dict.shareFallback||extraStrings.en.shareFallback;
    button.classList.add('share-fallback');
    setTimeout(()=>{button.textContent=old;button.classList.remove('share-fallback');applyTechLang();},3200);
  }
  async function shareCanvas(canvas,filename,button,text){
    if(!canvas) return;
    const dataUrl=canvas.toDataURL('image/png');
    const file=dataUrlToFile(dataUrl,filename);
    try{
      if(navigator.share && (!navigator.canShare || navigator.canShare({files:[file]}))){
        await navigator.share({title:'QUQN — Small Coq. Big Dreams.',text,files:[file]});
        return;
      }
    }catch(err){
      if(err?.name==='AbortError') return;
    }
    const a=document.createElement('a');a.download=filename;a.href=dataUrl;a.click();
    const xText=encodeURIComponent(text+'\nhttps://quqn.eu');
    window.open('https://x.com/intent/post?text='+xText,'_blank','noopener,noreferrer');
    flashShareFallback(button);
  }
  $('#memeShare')?.addEventListener('click',ev=>shareCanvas($('#memeCanvas'),'QUQN-meme.png',ev.currentTarget,'Small Coq. Big Dreams. $QUQN #BRC20 #Bitcoin'));
  drawMeme();

  let userPhoto=null;
  async function drawPfp(){
    const canvas=$('#pfpCanvas'); if(!canvas) return; const ctx=canvas.getContext('2d'); const w=canvas.width,h=canvas.height;
    ctx.clearRect(0,0,w,h);ctx.fillStyle='#090c0e';ctx.fillRect(0,0,w,h);
    ctx.save();ctx.beginPath();ctx.arc(w/2,h/2,w*.42,0,Math.PI*2);ctx.clip();
    if(userPhoto){const ir=userPhoto.width/userPhoto.height;let sx=0,sy=0,sw=userPhoto.width,sh=userPhoto.height;if(ir>1){sw=userPhoto.height;sx=(userPhoto.width-sw)/2}else{sh=userPhoto.width;sy=(userPhoto.height-sh)/2}ctx.drawImage(userPhoto,sx,sy,sw,sh,w*.08,h*.08,w*.84,h*.84);}else{const ph=await loadImage('assets/quqn-thinking.webp');const ir=ph.width/ph.height;let sx=0,sy=0,sw=ph.width,sh=ph.height;if(ir>1){sw=ph.height;sx=(ph.width-sw)/2}else{sh=ph.width;sy=(ph.height-sh)/2}ctx.drawImage(ph,sx,sy,sw,sh,w*.08,h*.08,w*.84,h*.84);}
    ctx.restore();
    ctx.lineWidth=18;ctx.strokeStyle='#efc15b';ctx.beginPath();ctx.arc(w/2,h/2,w*.425,0,Math.PI*2);ctx.stroke();
    ctx.lineWidth=4;ctx.strokeStyle='rgba(115,233,225,.75)';ctx.beginPath();ctx.arc(w/2,h/2,w*.455,0,Math.PI*2);ctx.stroke();
    const token=await loadImage('assets/quqn-token-clean.png');
    const badgeX=w*.78,badgeY=h*.78,badgeR=w*.115;
    ctx.beginPath();ctx.arc(badgeX,badgeY,badgeR,0,Math.PI*2);ctx.fillStyle='#0b0e10';ctx.fill();
    ctx.save();ctx.beginPath();ctx.arc(badgeX,badgeY,badgeR*.91,0,Math.PI*2);ctx.clip();
    ctx.drawImage(token,badgeX-badgeR*.91,badgeY-badgeR*.91,badgeR*1.82,badgeR*1.82);ctx.restore();
    ctx.lineWidth=4;ctx.strokeStyle='rgba(240,196,93,.72)';ctx.beginPath();ctx.arc(badgeX,badgeY,badgeR*.96,0,Math.PI*2);ctx.stroke();
    ctx.textAlign='center';ctx.font='900 30px Arial, sans-serif';ctx.fillStyle='#f3d27e';ctx.fillText('QUQN',w/2,h*.965);
  }
  $('#pfpUpload')?.addEventListener('change',ev=>{const f=ev.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{userPhoto=im;drawPfp();};im.src=r.result;};r.readAsDataURL(f);});
  $('#pfpDownload')?.addEventListener('click',()=>{drawPfp().then(()=>{const a=document.createElement('a');a.download='QUQN-pfp.png';a.href=$('#pfpCanvas').toDataURL('image/png');a.click();});});
  $('#pfpShare')?.addEventListener('click',ev=>shareCanvas($('#pfpCanvas'),'QUQN-pfp.png',ev.currentTarget,'My QUQN PFP. Small Coq. Big Dreams. $QUQN #BRC20 #Bitcoin'));
  drawPfp();

  // Coop Wall creator shortcuts: always give visible feedback and bring the
  // selected tool into view. Plain hash links can look like they do nothing
  // on wide screens because the three cards share the same vertical row.
  $$('.wall-create-actions a[href^="#"]').forEach(link=>{
    link.addEventListener('click',ev=>{
      ev.preventDefault();
      const selector=link.getAttribute('href');
      const target=selector ? document.querySelector(selector) : null;
      if(!target) return;

      target.classList.remove('lab-card-active');
      // Force restart of the highlight animation on repeated clicks.
      void target.offsetWidth;
      target.classList.add('lab-card-active');
      target.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});

      try{ history.replaceState(null,'',selector); }catch(_){ }

      window.setTimeout(()=>{
        const focusTarget = selector==='#pfpMakerCard'
          ? target.querySelector('#pfpUpload')
          : target.querySelector('#memeTemplate, #memeTop, button, input, select');
        focusTarget?.focus({preventScroll:true});
      },480);

      window.setTimeout(()=>target.classList.remove('lab-card-active'),2200);
    });
  });
})();
