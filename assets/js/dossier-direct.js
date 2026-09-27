
(() => {
  const L = {
    en:{
      kicker:'THE QUQN DOSSIER',title:'Understand QUQN.',intro:'The essentials: the idea, Bitcoin and BRC-20, fair mint, token facts, the universe and risks.',back:'← BACK TO SITE',
      nav:['THE IDEA','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','THE UNIVERSE','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN is a Bitcoin-native meme character: a tiny rooster with completely disproportionate ambition. The universe is built around identity, story and community culture — not a promise of wealth.','MEET QUQN →','SEE THE CHARACTERS →'],
      bitcoin:['Bitcoin is the network. BRC-20 is the format.','QUQN is deployed on Bitcoin mainnet as a classic four-character BRC-20 ticker. The QUQN website is informational: it does not custody funds, execute the mint or ask for a wallet recovery phrase.','VERIFY ON UNISCAN ↗','SEE THE BASICS →'],
      fair:['Same public rules.','QUQN uses a fair-mint model: no presale, no ICO, no primary token sale by the project and no creator mint fee. Bitcoin network fees and third-party service fees remain external to QUQN.','LEGAL / MICA NOTE ↗','MINT GUIDE →'],
      token:['Public token facts.','Ticker QUQN · Bitcoin mainnet · BRC-20 · Max supply 21,000,000 · 1,000 QUQN per full mint · Inscription #127329518.','OPEN UNISCAN ↗','OPEN LOG →'],
      universe:['QUQN is chapter one.','Two other characters will progressively join the story. The creative universe can grow through scenes, memes, PFPs, creative votes and community archives without creating financial rights.','SEE THE CHARACTERS →','OPEN QUQN LAB →'],
      risk:'QUQN is experimental and speculative. No price, return, liquidity or future listing is promised.'
    },
    fr:{
      kicker:'LE DOSSIER QUQN',title:'Comprendre QUQN.',intro:'L’essentiel du projet : son idée, Bitcoin et le BRC-20, le fair mint, les données du token, son univers et les risques.',back:'← RETOUR AU SITE',
      nav:['L’IDÉE','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','L’UNIVERS','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN est un personnage meme natif de Bitcoin : un petit coq avec une ambition complètement disproportionnée. L’univers construit une identité, une histoire et une culture communautaire — pas une promesse de richesse.','RENCONTRER QUQN →','VOIR LES PERSONNAGES →'],
      bitcoin:['Bitcoin est le réseau. BRC-20 est le format.','QUQN est déployé sur Bitcoin mainnet sous la forme d’un ticker BRC-20 classique à quatre caractères. Le site QUQN informe : il ne conserve pas de fonds, n’exécute pas le mint et ne demande jamais la phrase de récupération du wallet.','VÉRIFIER SUR UNISCAN ↗','VOIR LES BASES →'],
      fair:['Mêmes règles publiques.','QUQN suit un modèle de fair mint : pas de prévente, pas d’ICO, pas de vente primaire par le projet et pas de frais de mint créateur. Les frais Bitcoin et ceux des services tiers restent externes à QUQN.','NOTE LÉGALE / MICA ↗','GUIDE DE MINT →'],
      token:['Les données publiques du token.','Ticker QUQN · Bitcoin mainnet · BRC-20 · Offre max 21 000 000 · 1 000 QUQN par mint complet · Inscription #127329518.','OUVRIR UNISCAN ↗','OUVRIR LE LOG →'],
      universe:['QUQN est le premier chapitre.','Deux autres personnages rejoindront progressivement l’histoire. L’univers peut grandir avec des scènes, memes, PFP, votes créatifs et archives communautaires sans créer de droits financiers.','VOIR LES PERSONNAGES →','OUVRIR QUQN LAB →'],
      risk:'QUQN est expérimental et spéculatif. Aucun prix, rendement, niveau de liquidité ou cotation future n’est promis.'
    },
    zh:{
      kicker:'QUQN 档案',title:'了解 QUQN。',intro:'项目要点：理念、Bitcoin 与 BRC-20、公平铸造、代币数据、QUQN 世界以及风险信息。',back:'← 返回网站',
      nav:['理念','BITCOIN / BRC-20','公平铸造','代币数据','QUQN 世界','风险与法律'],
      idea:['Small Coq. Big Dreams.','QUQN 是诞生于 Bitcoin 的 meme 角色：一只野心远大于体型的小公鸡。这个世界强调身份、故事和社区文化，而不是财富承诺。','认识 QUQN →','查看角色 →'],
      bitcoin:['Bitcoin 是网络，BRC-20 是格式。','QUQN 部署在 Bitcoin 主网上，使用经典四字符 BRC-20 ticker。网站仅提供信息，不托管资金、不执行 mint，也绝不会索要钱包恢复短语。','在 UNISCAN 验证 ↗','查看基础信息 →'],
      fair:['相同的公开规则。','QUQN 采用 fair mint：无预售、无 ICO、项目不进行一级代币销售，也不收取创作者 mint 费用。Bitcoin 网络和第三方费用独立于 QUQN。','法律 / MICA ↗','MINT 指南 →'],
      token:['公开代币数据。','Ticker QUQN · Bitcoin 主网 · BRC-20 · 最大供应 21,000,000 · 每次完整 mint 1,000 QUQN · Inscription #127329518。','打开 UNISCAN ↗','打开日志 →'],
      universe:['QUQN 是第一章。','另外两个角色将逐步加入故事。世界观可以通过场景、meme、PFP、创意投票和社区档案扩展，但不会产生金融权利。','查看角色 →','打开 QUQN LAB →'],
      risk:'QUQN 属于实验性和高投机项目，不承诺价格、收益、流动性或未来上市。'
    },
    ko:{
      kicker:'QUQN DOSSIER',title:'QUQN 이해하기.',intro:'프로젝트의 핵심: 아이디어, Bitcoin과 BRC-20, 공정 민트, 토큰 정보, 세계관과 위험 정보.',back:'← 사이트로 돌아가기',
      nav:['아이디어','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','세계관','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN은 Bitcoin에서 태어난 밈 캐릭터입니다. 작은 수탉이지만 터무니없이 큰 야망을 가졌습니다. 이 세계는 부의 약속이 아니라 정체성, 이야기, 커뮤니티 문화에 관한 것입니다.','QUQN 만나기 →','캐릭터 보기 →'],
      bitcoin:['Bitcoin은 네트워크, BRC-20은 형식입니다.','QUQN은 Bitcoin mainnet의 클래식 4자 BRC-20 ticker입니다. 사이트는 정보만 제공하며 자금을 보관하거나 mint를 실행하거나 복구 문구를 요구하지 않습니다.','UNISCAN에서 확인 ↗','기본 정보 보기 →'],
      fair:['모두에게 같은 공개 규칙.','QUQN은 fair mint 모델입니다. presale, ICO, 프로젝트의 1차 판매, creator mint fee가 없습니다. Bitcoin 네트워크와 제3자 서비스 수수료는 QUQN과 별개입니다.','LEGAL / MICA ↗','MINT GUIDE →'],
      token:['공개 토큰 정보.','Ticker QUQN · Bitcoin mainnet · BRC-20 · 최대 21,000,000 · full mint당 1,000 QUQN · Inscription #127329518.','UNISCAN 열기 ↗','LOG 열기 →'],
      universe:['QUQN은 첫 번째 챕터입니다.','두 캐릭터가 앞으로 이야기에 합류합니다. 장면, meme, PFP, 창작 투표와 커뮤니티 아카이브로 세계가 확장될 수 있지만 금융 권리는 만들지 않습니다.','캐릭터 보기 →','QUQN LAB 열기 →'],
      risk:'QUQN은 실험적이고 투기적입니다. 가격, 수익, 유동성 또는 향후 상장을 보장하지 않습니다.'
    },
    ja:{
      kicker:'QUQN DOSSIER',title:'QUQNを知る。',intro:'プロジェクトの要点：アイデア、BitcoinとBRC-20、フェアミント、トークン情報、世界観、リスク情報。',back:'← サイトへ戻る',
      nav:['アイデア','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','世界観','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQNはBitcoin生まれのmemeキャラクター。小さな雄鶏なのに、野心は桁外れです。この世界は富の約束ではなく、個性、物語、コミュニティ文化を作るためのものです。','QUQNを見る →','キャラクターを見る →'],
      bitcoin:['Bitcoinがネットワーク、BRC-20が形式。','QUQNはBitcoin mainnet上のクラシックな4文字BRC-20 tickerです。サイトは情報提供のみで、資金保管、mint実行、リカバリーフレーズの要求は行いません。','UNISCANで確認 ↗','基本を見る →'],
      fair:['同じ公開ルール。','QUQNはfair mintです。presale、ICO、プロジェクトによる一次販売、creator mint feeはありません。Bitcoinや第三者サービスの手数料はQUQNとは別です。','LEGAL / MICA ↗','MINT GUIDE →'],
      token:['公開トークン情報。','Ticker QUQN · Bitcoin mainnet · BRC-20 · 最大供給 21,000,000 · full mintごとに1,000 QUQN · Inscription #127329518。','UNISCANを開く ↗','LOGを開く →'],
      universe:['QUQNは第1章。','今後2人のキャラクターが物語に加わります。シーン、meme、PFP、創作投票、コミュニティアーカイブへ広げられますが、金融上の権利にはなりません。','キャラクターを見る →','QUQN LABを開く →'],
      risk:'QUQNは実験的かつ投機的です。価格、リターン、流動性、将来の上場は約束されません。'
    },
    pt:{
      kicker:'DOSSIÊ QUQN',title:'Entenda o QUQN.',intro:'O essencial do projeto: a ideia, Bitcoin e BRC-20, fair mint, dados do token, universo e riscos.',back:'← VOLTAR AO SITE',
      nav:['A IDEIA','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','O UNIVERSO','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN é um personagem meme nativo do Bitcoin: um pequeno galo com uma ambição totalmente desproporcional. O universo cria identidade, história e cultura comunitária — não uma promessa de riqueza.','CONHECER QUQN →','VER PERSONAGENS →'],
      bitcoin:['Bitcoin é a rede. BRC-20 é o formato.','QUQN está no Bitcoin mainnet como ticker BRC-20 clássico de quatro caracteres. O site é informativo: não guarda fundos, não executa mint e nunca pede a frase de recuperação.','VERIFICAR NO UNISCAN ↗','VER O BÁSICO →'],
      fair:['As mesmas regras públicas.','QUQN usa fair mint: sem presale, sem ICO, sem venda primária pelo projeto e sem creator mint fee. Taxas de Bitcoin e serviços terceiros permanecem externas ao QUQN.','LEGAL / MICA ↗','GUIA DE MINT →'],
      token:['Dados públicos do token.','Ticker QUQN · Bitcoin mainnet · BRC-20 · Supply máxima 21.000.000 · 1.000 QUQN por full mint · Inscription #127329518.','ABRIR UNISCAN ↗','ABRIR LOG →'],
      universe:['QUQN é o primeiro capítulo.','Outros dois personagens entrarão gradualmente na história. O universo pode crescer com cenas, memes, PFPs, votos criativos e arquivos comunitários sem criar direitos financeiros.','VER PERSONAGENS →','ABRIR QUQN LAB →'],
      risk:'QUQN é experimental e especulativo. Nenhum preço, retorno, liquidez ou listing futuro é prometido.'
    },
    es:{
      kicker:'DOSSIER QUQN',title:'Entiende QUQN.',intro:'Lo esencial del proyecto: la idea, Bitcoin y BRC-20, fair mint, datos del token, universo y riesgos.',back:'← VOLVER AL SITIO',
      nav:['LA IDEA','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','EL UNIVERSO','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN es un personaje meme nativo de Bitcoin: un pequeño gallo con una ambición completamente desproporcionada. El universo crea identidad, historia y cultura comunitaria — no una promesa de riqueza.','CONOCER QUQN →','VER PERSONAJES →'],
      bitcoin:['Bitcoin es la red. BRC-20 es el formato.','QUQN está desplegado en Bitcoin mainnet como ticker BRC-20 clásico de cuatro caracteres. El sitio es informativo: no custodia fondos, no ejecuta el mint y nunca pide la frase de recuperación.','VERIFICAR EN UNISCAN ↗','VER LO BÁSICO →'],
      fair:['Las mismas reglas públicas.','QUQN usa un fair mint: sin preventa, sin ICO, sin venta primaria por el proyecto y sin creator mint fee. Las comisiones de Bitcoin y de terceros son externas a QUQN.','LEGAL / MICA ↗','GUÍA DE MINT →'],
      token:['Datos públicos del token.','Ticker QUQN · Bitcoin mainnet · BRC-20 · Supply máxima 21.000.000 · 1.000 QUQN por mint completo · Inscription #127329518.','ABRIR UNISCAN ↗','ABRIR LOG →'],
      universe:['QUQN es el primer capítulo.','Otros dos personajes se unirán progresivamente a la historia. El universo puede crecer con escenas, memes, PFP, votos creativos y archivos comunitarios sin crear derechos financieros.','VER PERSONAJES →','ABRIR QUQN LAB →'],
      risk:'QUQN es experimental y especulativo. No se promete precio, rentabilidad, liquidez ni futura cotización.'
    },
    ar:{
      kicker:'ملف QUQN',title:'تعرّف على QUQN.',intro:'أساسيات المشروع: الفكرة، Bitcoin وBRC-20، الـ fair mint، بيانات التوكن، العالم والمخاطر.',back:'← العودة إلى الموقع',
      nav:['الفكرة','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','العالم','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN شخصية meme مولودة على Bitcoin: ديك صغير بطموح أكبر بكثير من حجمه. العالم يركز على الهوية والقصة وثقافة المجتمع، وليس على وعد بالثراء.','تعرّف على QUQN →','عرض الشخصيات →'],
      bitcoin:['Bitcoin هي الشبكة وBRC-20 هو التنسيق.','QUQN منشور على Bitcoin mainnet كتكر BRC-20 كلاسيكي من أربعة أحرف. الموقع معلوماتي فقط: لا يحتفظ بالأموال ولا ينفذ mint ولا يطلب عبارة الاسترداد.','التحقق على UNISCAN ↗','عرض الأساسيات →'],
      fair:['نفس القواعد العامة.','QUQN يعمل بنموذج fair mint: لا presale ولا ICO ولا بيع أولي من المشروع ولا creator mint fee. رسوم Bitcoin والخدمات الخارجية مستقلة عن QUQN.','LEGAL / MICA ↗','دليل MINT →'],
      token:['بيانات التوكن العامة.','Ticker QUQN · Bitcoin mainnet · BRC-20 · الحد الأقصى 21,000,000 · 1,000 QUQN لكل full mint · Inscription #127329518.','فتح UNISCAN ↗','فتح السجل →'],
      universe:['QUQN هو الفصل الأول.','ستنضم شخصيتان أخريان تدريجيًا إلى القصة. يمكن للعالم أن يتوسع بالمشاهد وmemes وPFP والتصويت الإبداعي والأرشيف المجتمعي دون خلق حقوق مالية.','عرض الشخصيات →','فتح QUQN LAB →'],
      risk:'QUQN تجريبي ومضاربي. لا يوجد وعد بالسعر أو العائد أو السيولة أو الإدراج مستقبلاً.'
    },
    th:{
      kicker:'ข้อมูล QUQN',title:'ทำความเข้าใจ QUQN',intro:'สาระสำคัญของโปรเจกต์: แนวคิด Bitcoin และ BRC-20, fair mint, ข้อมูลโทเคน, จักรวาล และความเสี่ยง',back:'← กลับไปที่เว็บไซต์',
      nav:['แนวคิด','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','จักรวาล','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN คือคาแรกเตอร์มีมที่เกิดบน Bitcoin: ไก่ตัวเล็กที่มีความทะเยอทะยานใหญ่เกินตัว จักรวาลนี้สร้างตัวตน เรื่องราว และวัฒนธรรมชุมชน ไม่ใช่คำสัญญาว่าจะรวย','พบ QUQN →','ดูตัวละคร →'],
      bitcoin:['Bitcoin คือเครือข่าย BRC-20 คือรูปแบบ','QUQN ถูก deploy บน Bitcoin mainnet เป็น ticker BRC-20 แบบคลาสสิก 4 ตัวอักษร เว็บไซต์มีไว้ให้ข้อมูล ไม่เก็บเงิน ไม่ทำ mint และไม่ขอ recovery phrase','ตรวจสอบบน UNISCAN ↗','ดูข้อมูลพื้นฐาน →'],
      fair:['กติกาสาธารณะเดียวกัน','QUQN ใช้ fair mint: ไม่มี presale, ICO, การขาย token โดยโปรเจกต์ หรือ creator mint fee ค่าธรรมเนียม Bitcoin และบริการภายนอกไม่เข้า QUQN','LEGAL / MICA ↗','คู่มือ MINT →'],
      token:['ข้อมูล token สาธารณะ','Ticker QUQN · Bitcoin mainnet · BRC-20 · Max supply 21,000,000 · 1,000 QUQN ต่อ full mint · Inscription #127329518','เปิด UNISCAN ↗','เปิด LOG →'],
      universe:['QUQN คือบทแรก','อีกสองตัวละครจะค่อย ๆ เข้าสู่เรื่องราว จักรวาลสามารถเติบโตผ่านฉาก มีม PFP โหวตเชิงสร้างสรรค์ และ archive ชุมชน โดยไม่สร้างสิทธิทางการเงิน','ดูตัวละคร →','เปิด QUQN LAB →'],
      risk:'QUQN เป็นโปรเจกต์ทดลองและมีความเสี่ยงสูง ไม่มีการรับประกันราคา ผลตอบแทน สภาพคล่อง หรือการลิสต์'
    },
    vi:{
      kicker:'HỒ SƠ QUQN',title:'Tìm hiểu QUQN.',intro:'Những điểm chính: ý tưởng, Bitcoin và BRC-20, fair mint, dữ liệu token, vũ trụ và rủi ro.',back:'← QUAY LẠI SITE',
      nav:['Ý TƯỞNG','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','VŨ TRỤ','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN là một nhân vật meme sinh ra trên Bitcoin: chú gà trống nhỏ với tham vọng cực lớn. Vũ trụ này xây dựng bản sắc, câu chuyện và văn hóa cộng đồng — không phải lời hứa làm giàu.','GẶP QUQN →','XEM NHÂN VẬT →'],
      bitcoin:['Bitcoin là mạng. BRC-20 là định dạng.','QUQN được triển khai trên Bitcoin mainnet dưới dạng ticker BRC-20 cổ điển gồm bốn ký tự. Website chỉ cung cấp thông tin, không giữ tiền, không thực hiện mint và không bao giờ hỏi recovery phrase.','KIỂM TRA TRÊN UNISCAN ↗','XEM CƠ BẢN →'],
      fair:['Cùng một quy tắc công khai.','QUQN dùng mô hình fair mint: không presale, không ICO, không bán token sơ cấp bởi dự án và không creator mint fee. Phí Bitcoin và dịch vụ bên thứ ba nằm ngoài QUQN.','LEGAL / MICA ↗','HƯỚNG DẪN MINT →'],
      token:['Dữ liệu token công khai.','Ticker QUQN · Bitcoin mainnet · BRC-20 · Max supply 21.000.000 · 1.000 QUQN mỗi full mint · Inscription #127329518.','MỞ UNISCAN ↗','MỞ LOG →'],
      universe:['QUQN là chương đầu tiên.','Hai nhân vật khác sẽ dần tham gia câu chuyện. Vũ trụ có thể phát triển qua scene, meme, PFP, bình chọn sáng tạo và archive cộng đồng mà không tạo quyền tài chính.','XEM NHÂN VẬT →','MỞ QUQN LAB →'],
      risk:'QUQN mang tính thử nghiệm và đầu cơ. Không có cam kết về giá, lợi nhuận, thanh khoản hoặc listing trong tương lai.'
    },
    tr:{
      kicker:'QUQN DOSYASI',title:'QUQN’ı anla.',intro:'Projenin özü: fikir, Bitcoin ve BRC-20, fair mint, token bilgileri, evren ve riskler.',back:'← SİTEYE DÖN',
      nav:['FİKİR','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','EVREN','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN Bitcoin doğumlu bir meme karakteridir: boyuna göre tamamen orantısız bir hırsı olan küçük bir horoz. Evren kimlik, hikâye ve topluluk kültürü yaratır; zenginlik vaadi değildir.','QUQN’I TANI →','KARAKTERLERİ GÖR →'],
      bitcoin:['Bitcoin ağdır. BRC-20 formattır.','QUQN Bitcoin mainnet üzerinde klasik dört karakterli bir BRC-20 ticker olarak deploy edilmiştir. Site bilgi amaçlıdır; fon saklamaz, mint yapmaz ve recovery phrase istemez.','UNISCAN’DE DOĞRULA ↗','TEMELLERİ GÖR →'],
      fair:['Aynı açık kurallar.','QUQN fair mint modelini kullanır: presale yok, ICO yok, proje tarafından birincil satış yok ve creator mint fee yok. Bitcoin ve üçüncü taraf ücretleri QUQN’dan bağımsızdır.','LEGAL / MICA ↗','MINT REHBERİ →'],
      token:['Herkese açık token bilgileri.','Ticker QUQN · Bitcoin mainnet · BRC-20 · Max supply 21.000.000 · full mint başına 1.000 QUQN · Inscription #127329518.','UNISCAN AÇ ↗','LOG AÇ →'],
      universe:['QUQN ilk bölüm.','İki karakter daha zamanla hikâyeye katılacak. Evren sahneler, meme’ler, PFP’ler, yaratıcı oylamalar ve topluluk arşiviyle büyüyebilir; finansal hak yaratmaz.','KARAKTERLERİ GÖR →','QUQN LAB AÇ →'],
      risk:'QUQN deneysel ve spekülatiftir. Fiyat, getiri, likidite veya gelecekte listeleme vaadi yoktur.'
    },
    id:{
      kicker:'DOSSIER QUQN',title:'Pahami QUQN.',intro:'Inti proyek: ide, Bitcoin dan BRC-20, fair mint, data token, dunia QUQN, dan risiko.',back:'← KEMBALI KE SITUS',
      nav:['IDE','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','DUNIA QUQN','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN adalah karakter meme yang lahir di Bitcoin: ayam kecil dengan ambisi yang sangat tidak sebanding dengan ukurannya. Dunia ini membangun identitas, cerita, dan budaya komunitas — bukan janji kekayaan.','KENAL QUQN →','LIHAT KARAKTER →'],
      bitcoin:['Bitcoin adalah jaringan. BRC-20 adalah format.','QUQN di-deploy di Bitcoin mainnet sebagai ticker BRC-20 klasik empat karakter. Situs ini informatif: tidak menyimpan dana, tidak menjalankan mint, dan tidak pernah meminta recovery phrase.','VERIFIKASI DI UNISCAN ↗','LIHAT DASAR →'],
      fair:['Aturan publik yang sama.','QUQN menggunakan fair mint: tanpa presale, ICO, penjualan primer oleh proyek, atau creator mint fee. Biaya Bitcoin dan layanan pihak ketiga berada di luar QUQN.','LEGAL / MICA ↗','PANDUAN MINT →'],
      token:['Data token publik.','Ticker QUQN · Bitcoin mainnet · BRC-20 · Max supply 21.000.000 · 1.000 QUQN per full mint · Inscription #127329518.','BUKA UNISCAN ↗','BUKA LOG →'],
      universe:['QUQN adalah bab pertama.','Dua karakter lain akan bergabung secara bertahap. Dunia ini dapat berkembang lewat scene, meme, PFP, voting kreatif, dan arsip komunitas tanpa menciptakan hak finansial.','LIHAT KARAKTER →','BUKA QUQN LAB →'],
      risk:'QUQN bersifat eksperimental dan spekulatif. Tidak ada janji harga, return, likuiditas, atau listing di masa depan.'
    },
    hi:{
      kicker:'QUQN डॉसियर',title:'QUQN को समझें।',intro:'प्रोजेक्ट की मुख्य बातें: विचार, Bitcoin और BRC-20, fair mint, token facts, दुनिया और जोखिम।',back:'← साइट पर वापस',
      nav:['विचार','BITCOIN / BRC-20','FAIR MINT','TOKEN FACTS','दुनिया','RISK & LEGAL'],
      idea:['Small Coq. Big Dreams.','QUQN Bitcoin पर जन्मा meme character है: एक छोटा मुर्गा जिसकी ambition उसके आकार से बहुत बड़ी है। यह दुनिया identity, story और community culture बनाती है — wealth की promise नहीं।','QUQN से मिलें →','CHARACTERS देखें →'],
      bitcoin:['Bitcoin network है। BRC-20 format है।','QUQN Bitcoin mainnet पर classic four-character BRC-20 ticker के रूप में deployed है। Website केवल information देती है; funds custody नहीं करती, mint execute नहीं करती और recovery phrase नहीं मांगती।','UNISCAN पर VERIFY करें ↗','BASICS देखें →'],
      fair:['सभी के लिए वही public rules.','QUQN fair mint model है: कोई presale नहीं, ICO नहीं, project की primary token sale नहीं और creator mint fee नहीं। Bitcoin network और third-party fees QUQN से बाहर हैं।','LEGAL / MICA ↗','MINT GUIDE →'],
      token:['Public token facts.','Ticker QUQN · Bitcoin mainnet · BRC-20 · Max supply 21,000,000 · हर full mint पर 1,000 QUQN · Inscription #127329518.','UNISCAN खोलें ↗','LOG खोलें →'],
      universe:['QUQN पहला chapter है।','दो और characters धीरे-धीरे story में आएँगे। Universe scenes, memes, PFP, creative votes और community archive के साथ बढ़ सकता है, लेकिन financial rights नहीं देता।','CHARACTERS देखें →','QUQN LAB खोलें →'],
      risk:'QUQN experimental और speculative है। Price, return, liquidity या future listing का कोई promise नहीं है।'
    }
  };

  const getLang=()=>{
    const raw=(document.documentElement.lang||localStorage.getItem('quqnLang')||'en').toLowerCase().split('-')[0];
    return L[raw]?raw:'en';
  };

  const modal=document.getElementById('qfrDirectDossierModal');
  const body=document.getElementById('qfrDirectModalBody');
  const kicker=document.getElementById('qfrDirectModalKicker');
  const close=document.getElementById('qfrDirectModalClose');
  if(!modal||!body||!kicker||!close)return;

  const link=(href,label,secondary=false,external=false)=>`<a class="${secondary?'secondary':''}" href="${href}" ${external?'target="_blank" rel="noopener"':''}>${label}</a>`;

  function openDossier(key){
    const t=L[getLang()]||L.en;
    const idx={idea:0,bitcoin:1,fair:2,token:3,universe:4}[key];
    if(idx===undefined)return;
    kicker.textContent=`QUQN / 0${idx+1} · ${t.nav[idx]}`;

    if(key==='idea'){
      body.innerHTML=`<h2>${t.idea[0]}</h2><p>${t.idea[1]}</p><div class="qfr-direct-modal-actions">${link('#story',t.idea[2])}${link('#chapters',t.idea[3],true)}</div>`;
    }else if(key==='bitcoin'){
      body.innerHTML=`<h2>${t.bitcoin[0]}</h2><p>${t.bitcoin[1]}</p><div class="qfr-direct-modal-actions">${link('https://uniscan.cc/brc20/QUQN',t.bitcoin[2],false,true)}${link('#how',t.bitcoin[3],true)}</div>`;
    }else if(key==='fair'){
      body.innerHTML=`<h2>${t.fair[0]}</h2><p>${t.fair[1]}</p><div class="qfr-direct-modal-actions">${link('legal.html#mica',t.fair[2],false,true)}${link('#how',t.fair[3],true)}</div>`;
    }else if(key==='token'){
      body.innerHTML=`<h2>${t.token[0]}</h2><p>${t.token[1]}</p>
        <div class="qfr-direct-token-facts">
          <span><small>TICKER</small><strong>QUQN</strong></span>
          <span><small>NETWORK</small><strong>Bitcoin</strong></span>
          <span><small>FORMAT</small><strong>BRC-20</strong></span>
          <span><small>MAX SUPPLY</small><strong>21,000,000</strong></span>
          <span><small>PER MINT</small><strong>1,000</strong></span>
          <span><small>INSCRIPTION</small><strong>#127329518</strong></span>
        </div>
        <div class="qfr-direct-modal-actions">${link('https://uniscan.cc/brc20/QUQN',t.token[2],false,true)}${link('#inscription-log',t.token[3],true)}</div>`;
    }else if(key==='universe'){
      body.innerHTML=`<h2>${t.universe[0]}</h2><p>${t.universe[1]}</p><div class="qfr-direct-modal-actions">${link('#chapters',t.universe[2])}${link('#quqn-lab',t.universe[3],true)}</div>`;
    }
    modal.showModal();
  }

  document.querySelectorAll('[data-dossier-key]').forEach(el=>el.addEventListener('click',e=>{
    e.preventDefault();
    openDossier(el.dataset.dossierKey);
  }));

  close.addEventListener('click',()=>modal.close());
  modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.open)modal.close()});

  /* If language changes while the modal is open, refresh current section. */
  let active=null;
  document.querySelectorAll('[data-dossier-key]').forEach(el=>el.addEventListener('click',()=>active=el.dataset.dossierKey));
  new MutationObserver(()=>{if(modal.open&&active)openDossier(active)})
    .observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

  /* Backward compatibility for old dossier.html#section links. */
  const requested=new URLSearchParams(location.search).get('dossier');
  if(['idea','bitcoin','fair','token','universe'].includes(requested)){
    setTimeout(()=>{
      active=requested;
      openDossier(requested);
      document.getElementById('quqn-dossier')?.scrollIntoView({block:'center'});
      const url=new URL(location.href);
      url.searchParams.delete('dossier');
      history.replaceState(null,'',url.pathname+url.search+'#quqn-dossier');
    },120);
  }

})();
