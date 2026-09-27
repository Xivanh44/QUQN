
(() => {
  const TITLE = {
    en:['SMALL COQ.','BIG DREAMS.'],
    fr:['PETIT COQ.','GRANDS RÊVES.'],
    zh:['小小公鸡。','大大梦想。'],
    ko:['작은 수탉.','큰 꿈.'],
    ja:['小さな雄鶏。','大きな夢。'],
    pt:['GALO PEQUENO.','GRANDES SONHOS.'],
    es:['GALLO PEQUEÑO.','GRANDES SUEÑOS.'],
    ar:['ديك صغير.','أحلام كبيرة.'],
    th:['ไก่น้อย.','ฝันใหญ่.'],
    vi:['GÀ TRỐNG NHỎ.','GIẤC MƠ LỚN.'],
    tr:['KÜÇÜK HOROZ.','BÜYÜK HAYALLER.'],
    id:['AYAM JAGO KECIL.','MIMPI BESAR.'],
    hi:['छोटा मुर्गा.','बड़े सपने.']
  };

  const ROAD = {
    en:['THE ROAD TO 21 MILLION','From the farm<br>to absurdly big dreams.','This tracks minted supply, not price. Each real QUQN mint simply moves the little coq a little further along the road.','Loading current mint progress…'],
    fr:['LA ROUTE VERS 21 MILLIONS','De la ferme<br>aux rêves démesurés.','Cette jauge suit l’offre déjà mintée, pas le prix. Chaque mint réel de QUQN fait simplement avancer un peu le petit coq.','Chargement de la progression du mint…'],
    zh:['通往 2100 万 QUQN','从农场出发，<br>奔向大得离谱的梦想。','这里显示的是已铸造供应量的进度，不是价格目标。每一次真实的 QUQN 铸造，只会让这只小公鸡再前进一步。','正在加载当前铸造进度…'],
    ko:['2,100만 QUQN을 향한 길','농장에서 시작해,<br>터무니없이 큰 꿈으로.','이 막대는 민트된 공급량의 진행 상황을 보여줄 뿐 가격 목표가 아닙니다. 실제 QUQN이 민트될 때마다 작은 수탉이 조금씩 앞으로 나아갑니다.','현재 민트 진행 상황을 불러오는 중…'],
    ja:['2100万 QUQN への道','農場から、<br>とてつもなく大きな夢へ。','これはミント済み供給量の進捗を示すもので、価格目標ではありません。QUQNが実際にミントされるたび、小さなコックが少しずつ先へ進みます。','現在のミント進捗を読み込み中…'],
    pt:['O CAMINHO ATÉ 21 MILHÕES','Da fazenda<br>a sonhos gigantes.','Esta barra acompanha a oferta já mintada, não o preço. Cada mint real de QUQN faz o pequeno galo avançar um pouco mais.','Carregando o progresso atual do mint…'],
    es:['EL CAMINO A 21 MILLONES','De la granja<br>a sueños descomunales.','Esta barra sigue la oferta ya minteada, no el precio. Cada mint real de QUQN hace avanzar un poco más al pequeño gallo.','Cargando el progreso actual del mint…'],
    ar:['الطريق إلى 21 مليون QUQN','من المزرعة<br>إلى أحلام هائلة.','يعرض هذا تقدم الكمية التي تم سكها، وليس هدفًا للسعر. كل عملية سك حقيقية لـ QUQN تدفع الديك الصغير خطوة أخرى إلى الأمام.','جارٍ تحميل تقدم السك الحالي…'],
    th:['เส้นทางสู่ 21 ล้าน QUQN','จากฟาร์ม<br>สู่ความฝันที่ใหญ่เกินตัว','แถบนี้แสดงความคืบหน้าของจำนวน QUQN ที่ Mint แล้ว ไม่ใช่เป้าหมายราคา ทุก Mint จริงจะพาเจ้าตัวเล็กเดินหน้าไปอีกนิด','กำลังโหลดความคืบหน้าการ Mint…'],
    vi:['HÀNH TRÌNH ĐẾN 21 TRIỆU QUQN','Từ nông trại<br>đến những giấc mơ khổng lồ.','Thanh này theo dõi lượng QUQN đã được mint, không phải mục tiêu giá. Mỗi lần mint thực sự chỉ đưa chú gà trống nhỏ tiến thêm một chút.','Đang tải tiến độ mint hiện tại…'],
    tr:["21 MİLYON QUQN'A GİDEN YOL",'Çiftlikten<br>devasa hayallere.',"Bu çubuk fiyatı değil, mint edilen arzın ilerlemesini gösterir. Her gerçek QUQN mint'i küçük horozu biraz daha ileri taşır.",'Mevcut mint ilerlemesi yükleniyor…'],
    id:['JALAN MENUJU 21 JUTA QUQN','Dari peternakan<br>menuju mimpi yang kelewat besar.','Bar ini menunjukkan progres suplai yang sudah di-mint, bukan target harga. Setiap mint QUQN yang nyata membuat si ayam kecil maju sedikit lagi.','Memuat progres mint saat ini…'],
    hi:['21 मिलियन QUQN की राह','फार्म से<br>बेहद बड़े सपनों तक।','यह bar mint हो चुकी supply की प्रगति दिखाता है, price target नहीं। हर वास्तविक QUQN mint छोटे मुर्गे को थोड़ा और आगे बढ़ाता है।','मौजूदा mint progress लोड हो रही है…']
  };

  let applying = false;
  let raf = 0;

  function lang(){
    return (document.documentElement.lang || localStorage.getItem('quqnLang') || 'en')
      .toLowerCase().split('-')[0];
  }

  function fitTitle(){
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(()=>{
      const box=document.querySelector('.hero-title-box');
      const title=document.getElementById('heroTitle');
      if(!box||!title)return;
      const lines=[...title.querySelectorAll('.hero-title-line')];
      if(!lines.length)return;

      const vw=window.innerWidth;
      let size=vw<=650?76:(vw<=980?88:112);
      const min=vw<=650?24:28;
      const set=n=>title.style.setProperty('font-size',n+'px','important');
      set(size);

      const fits=()=>{
        const widthOK=lines.every(line=>line.getBoundingClientRect().width<=box.clientWidth-4);
        const heightOK=title.getBoundingClientRect().height<=box.clientHeight-4;
        return widthOK&&heightOK;
      };
      while(size>min&&!fits()){size--;set(size)}
    });
  }

  function apply(){
    if(applying)return;
    applying=true;
    const l=lang();
    const pair=TITLE[l]||TITLE.en;
    const title=document.getElementById('heroTitle');
    if(title){
      const wanted=`<span class="hero-title-line">${pair[0]}</span><em class="hero-title-line">${pair[1]}</em>`;
      if(title.innerHTML!==wanted)title.innerHTML=wanted;
    }

    const r=ROAD[l]||ROAD.en;
    const rk=document.querySelector('[data-t="roadKicker"]');
    const rt=document.querySelector('[data-t="roadTitle"]');
    const rb=document.querySelector('[data-t="roadBody"]');
    const rl=document.querySelector('[data-t="roadLoading"]');
    if(rk)rk.textContent=r[0];
    if(rt)rt.innerHTML=r[1];
    if(rb)rb.textContent=r[2];
    if(rl && /Loading|Chargement|加载|불러|読み|Carreg|Cargando|تحميل|กำลัง|Đang|yüklen|Memuat|लोड/.test(rl.textContent)) rl.textContent=r[3];

    applying=false;
    fitTitle();
  }

  const boot=()=>{
    apply();
    setTimeout(apply,60);
    setTimeout(apply,350);
    setTimeout(apply,1000);
  };

  document.readyState==='loading'
    ? document.addEventListener('DOMContentLoaded',boot)
    : boot();

  new MutationObserver(()=>setTimeout(apply,0))
    .observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

  const ht=document.getElementById('heroTitle');
  if(ht){
    new MutationObserver(()=>setTimeout(apply,0))
      .observe(ht,{childList:true,subtree:true,characterData:true});
  }

  window.addEventListener('resize',fitTitle,{passive:true});
})();
