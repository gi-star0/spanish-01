/**
 * ESPAÑA · Minimalist Modern Spain Travel Guide Logic
 */

// City Detail Database for Dynamic Modal
const CITY_DETAILS = {
  barcelona: {
    name: "巴塞隆納 · Barcelona",
    region: "加泰隆尼亞 (Cataluña)",
    days: "建議停留：4 ~ 5 天",
    img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=85",
    desc: "巴塞隆納是地中海沿岸最具前衛靈魂的城市。安東尼·高第（Antoni Gaudí）的超現實建築語彙深深烙印在街角，從歷經百年仍在構築的聖家堂，到宛如骨骼與巨龍化身的巴特婁之家，整座城市就是露天的當代藝術館。",
    highlights: [
      "聖家堂 (Basílica de la Sagrada Família) — 建議預約登塔俯瞰市容，下午 3 點欣賞彩繪玻璃的落日金色斜陽。",
      "奎爾公園 (Park Güell) — 坐在彩色馬賽克蛇形長椅上眺望地中海與全城輪廓。",
      "哥德區 (Barri Gòtic) — 穿梭於中世紀狹窄巷弄、拜訪隱密的獨立香氛店與露天咖啡座。",
      "巴塞隆內塔海灘 (Barceloneta Beach) — 黃昏時分來一杯 Sangría，感受溫暖海風與慢跑人潮。"
    ],
    food: [
      "Pan con Tomate (烤脆麵包抹生番茄、特級初榨橄欖油與海鹽)",
      "Bomba (加泰隆尼亞辣味牛肉馬鈴薯球)",
      "新鮮烤海鮮 (Boqueria 市場旁的酒館直出墨魚與海蝦)"
    ],
    tips: "蘭布拉大道人潮眾多，隨身防扒務必保持警覺；聖家堂與奎爾公園門票皆需提前數週於官網預約。"
  },
  madrid: {
    name: "馬德里 · Madrid",
    region: "馬德里自治區 (Comunidad de Madrid)",
    days: "建議停留：3 ~ 4 天",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=85",
    desc: "作為西班牙首都，馬德里散發著歐洲皇室的尊爵大氣與不眠之城的澎湃生機。這裡匯聚了享譽世界的「藝術金三角」，更有隨時滿座的露天小酒館，是深度品味西班牙都市生活質感的首選。",
    highlights: [
      "普拉多國家博物館 (Museo del Prado) — 收藏哥雅、委拉斯蓋茲《宮女》等西班牙黃金時代傳世巨作。",
      "麗池公園 (Parque del Buen Retiro) — UNESCO 世界遺產，探訪波光粼粼的水晶宮（Palacio de Cristal）。",
      "馬德里王宮 (Palacio Real) — 西歐面積最大的現存王宮之一，巴洛克與古典主義極致結晶。",
      "太陽門廣場與格蘭大道 (Gran Vía) — 感受百老匯式劇院建築與繁華不夜城的節奏。"
    ],
    food: [
      "Bocadillo de Calamares (經典酥炸花枝三明治，搭配冰生啤)",
      "Cocido Madrileño (陶鍋慢燉鷹嘴豆馬德里肉骨濃湯)",
      "Churros con Chocolate (百年老店 San Ginés 濃郁熱巧克力沾吉拿棒)"
    ],
    tips: "普拉多與蘇菲亞美術館每晚皆有免費參觀時段（需排隊）；周日早上可安排前往 El Rastro 露天跳蚤市場尋寶。"
  },
  seville: {
    name: "塞維亞 · Sevilla",
    region: "安達魯西亞 (Andalucía)",
    days: "建議停留：3 天",
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=85",
    desc: "塞維亞是佛朗明哥舞與安達魯西亞文化的精神核心。春天整座城瀰漫著苦橙樹的芬芳，伊斯蘭統治留下的摩爾磚雕與基督教華麗殿堂在此交織出不可思議的歷史厚度。",
    highlights: [
      "塞維亞西班牙廣場 (Plaza de España) — 半月形壯麗迴廊與護城河，是《星際大戰》取景勝地。",
      "塞維亞王宮 (Real Alcázar) — 穆德哈爾風格的頂峰之作，《權力遊戲》多恩流水花園場景。",
      "塞維亞大教堂與吉拉達鐘樓 (La Giralda) — 世界第三大教堂，可沿無階斜坡登頂俯瞰全景。",
      "聖十字區 (Barrio de Santa Cruz) — 昔日猶太區，白色粉牆、繁花盆栽與石板小徑交錯。"
    ],
    food: [
      "Salmorejo (安達魯西亞濃郁番茄冷湯，撒上伊比利火腿碎與水煮蛋)",
      "Solomillo al Whisky (蒜香威士忌醬汁煎豬小里肌)",
      "Cruzcampo 生啤酒搭配炸小魚 (Pescaito Frito)"
    ],
    tips: "盛夏 7-8 月氣溫常超過 40°C，強烈推薦安排在春季（4-5月）或秋季造訪；務必預約當地正統小酒館觀看佛朗明哥舞。"
  },
  granada: {
    name: "格拉納達 · Granada",
    region: "安達魯西亞 (Andalucía)",
    days: "建議停留：2 ~ 3 天",
    img: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1200&q=85",
    desc: "格拉納達是摩爾人留在伊比利半島的最後一座明珠。背景映襯著內華達山脈的皚皚積雪，這座城市完整保存了阿拉伯千夜一夜的優雅細膩，也是全西班牙少數仍維持「點酒即贈免費 Tapas」的傳統聖地。",
    highlights: [
      "阿爾罕布拉宮 (Alhambra) — 桃金孃宮與獅子中庭的水池倒影，是阿拉伯幾何灰泥與木雕的奇蹟。",
      "阿爾拜辛區 (Albaicín) — 世界遺產古老阿拉伯街區，白牆土瓦錯落，隨處可見伊斯蘭茶館。",
      "聖尼古拉斯瞭望台 (Mirador de San Nicolás) — 遠眺阿爾罕布拉宮與夕陽雪山的傳奇視角。"
    ],
    food: [
      "免費 Tapas (每點一杯飲料即隨機獲贈一份精緻小點，從燉牛尾到煎魚不等)",
      "Habas con Jamón (嫩蠶豆炒伊比利風乾火腿)",
      "Pionono (格拉納達百年甜點，肉桂焦糖蛋奶捲)"
    ],
    tips: "阿爾罕布拉宮中「納斯里德宮殿（Palacios Nazaríes）」需在嚴格指定時段入場，門票極度熱門，務必提早 1~2 個月上網搶訂。"
  },
  "san-sebastian": {
    name: "聖塞巴斯提安 · Donostia-San Sebastián",
    region: "巴斯克自治區 (País Vasco)",
    days: "建議停留：2 ~ 3 天",
    img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1200&q=85",
    desc: "緊鄰比斯開灣的聖塞巴斯提安，擁有歐洲最美的城市海灣——貝殼灣（La Concha）。這裡更是全球老饕的聖地，舊城區每一間酒吧櫃檯上都陳列著巧奪天工的精緻 Pintxos，以極致的新鮮海產征服挑剔味蕾。",
    highlights: [
      "貝殼灣步道 (Playa de la Concha) — 沿著優雅的白色鑄鐵欄杆散步，感受大西洋海風拂面。",
      "舊城區酒館巡禮 (Parte Vieja) — 體驗「一間喝一杯、吃一串」的道地巴斯克社交節奏。",
      "烏爾古爾山 (Monte Urgull) — 登上山頂的十字架雕像，將貝殼灣整片翠綠與蔚藍盡收眼底。"
    ],
    food: [
      "Gilda (經典酸醃辣椒、綠橄欖與油漬鯷魚串，開胃靈魂)",
      "Txangurro (巴斯克焗烤蜘蛛蟹肉配奶油脆皮)",
      "Txakoli (巴斯克特產微氣泡酸白酒，高空倒酒激發香氣)",
      "Tarta de Queso (全球風靡的焦香巴斯克乳酪蛋糕發源地 La Viña)"
    ],
    tips: "各酒吧最招牌的往往不是吧台上的冷盤，而是黑板上的「現做熱食（Pintxos Calientes）」，記得詢問店家現點。"
  },
  mallorca: {
    name: "馬略卡島 · Mallorca",
    region: "巴利阿里群島 (Islas Baleares)",
    days: "建議停留：3 ~ 5 天",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85",
    desc: "地中海上的夢幻寶島，兼具高山石灰岩峽谷與透明果凍般的隱密海灣（Cala）。除了碧海藍天，島上典雅的黃石山城、修道院與百年木造復古觀光火車，更賦予其獨特深邃的文藝氣質。",
    highlights: [
      "帕爾馬聖母主教座堂 (La Seu) — 傲立於港灣旁的高聳哥德式教堂，高第曾參與內部祭壇整修。",
      "瓦爾德莫薩古鎮 (Valldemossa) — 音樂家蕭邦與作家喬治·桑度過「馬略卡島之冬」的避世桃源。",
      "卡拉菲格拉 (Cala Figuera) — 靜謐的傳統漁村海灣，停泊著綠白相間的小漁船。",
      "索列爾復古木造火車 (Tren de Sóller) — 穿梭於柑橘樹林與特拉蒙塔納山脈山谷之間。"
    ],
    food: [
      "Ensaimada (馬略卡傳統螺旋糖霜螺旋酥餅)",
      "Sobrassada (巴利阿里特產香辣醃肉抹醬，搭配烤麵包與蜂蜜)",
      "地中海鮮烤海鱸魚與蒜味美乃滋 (Aioli)"
    ],
    tips: "若想造訪隱密絕美的果凍海灣（Calas），強烈建議在島上租車自駕；夏季海灘熱門，出發請備妥防曬與足夠飲用水。"
  }
};

// Itinerary Data
const ITINERARIES = {
  classic: {
    title: "經典雙城與高鐵巡禮 · 7 日",
    badge: "第一次去西班牙首選",
    daysCount: "7 天 6 夜",
    pace: "交通便捷 · AVE高鐵串聯",
    steps: [
      { day: "Day 1", title: "抵達馬德里 · 皇室大氣迎賓", desc: "抵達馬德里巴拉哈斯機場，入住市中心。下午漫步太陽門廣場、主廣場 (Plaza Mayor)，在百年吉拿棒店 San Ginés 享用暖心下午茶。" },
      { day: "Day 2", title: "馬德里藝術盛宴 · 普拉多與麗池公園", desc: "上午參觀世界三大美術館之一的普拉多博物館；午後在麗池公園水晶宮旁野餐漫步；黃昏登上麗池對面阿爾卡拉門拍照，晚餐於聖米格爾市場品味特色 Tapas。" },
      { day: "Day 3", title: "托雷多古城一日往返 (Toledo)", desc: "搭乘 AVE 高鐵僅 30 分鐘直達三種文化（基督教、猶太教、伊斯蘭）共榮的古都托雷多，走訪大教堂、阿卡薩城堡與俯瞰護城河 Mirador del Valle。" },
      { day: "Day 4", title: "高鐵奔赴巴塞隆納 · 哥德舊城慢活", desc: "搭乘高速列車（約 2.5 小時）穿梭至加泰隆尼亞。下午穿梭於哥德區中世紀石板路、巴塞隆納大教堂，傍晚於蘭布拉大道旁皇家廣場用餐。" },
      { day: "Day 5", title: "高第奇蹟建築日 · 聖家堂與奎爾公園", desc: "預約清晨入場朝聖聖家堂，感受光影穿透彩色玻璃柱林的森林神蹟；午後前往奎爾公園俯瞰城市；傍晚漫步格拉西亞大道參觀米拉之家與巴特婁之家外觀。" },
      { day: "Day 6", title: "地中海之風 · 蒙特惠奇山與海灘落日", desc: "上午搭乘纜車登上蒙特惠奇城堡眺望港口，下午在巴塞隆內塔海灘吹海風，品嚐道地正統海鮮飯（Paella Marinera），享受慵懶西西里生活感。" },
      { day: "Day 7", title: "Boqueria 市場採買 · 滿載回程", desc: "最後一早走進色彩繽紛的波蓋利亞市場，品嚐現切伊比利火腿杯與熱帶果汁，選購優質橄欖油與伴手禮，前往機場返程。" }
    ]
  },
  south: {
    title: "安達魯西亞熱情南境 · 8 日",
    badge: "伊斯蘭文明與佛朗明哥",
    daysCount: "8 天 7 夜",
    pace: "文化震撼 · 橘花與吉他",
    steps: [
      { day: "Day 1-3", title: "塞維亞 (Sevilla) — 靈魂心臟", desc: "遊覽塞維亞王宮與西班牙廣場，走進聖十字區小酒館，欣賞一場無修飾的真實洞穴佛朗明哥表演，感受吉他與踏步的震撼。" },
      { day: "Day 4", title: "哥多華 (Córdoba) — 清真寺大教堂之奇", desc: "高鐵 45 分鐘抵達哥多華，造訪由 850 根紅白拱門構成的傳奇清真寺大教堂（Mezquita），漫步百花巷眺望鐘樓。" },
      { day: "Day 5-6", title: "格拉納達 (Granada) — 阿爾罕布拉宮", desc: "參觀摩爾王朝終極宮殿群，在阿爾拜辛區白色土牆巷弄尋找最美瞭望台；晚上每點一杯冰啤酒就獲贈一份免費在地風味 Tapas！" },
      { day: "Day 7", title: "隆達 (Ronda) — 懸崖上的天空之城", desc: "造訪海明威筆下最適合私奔的懸崖古城，站在百米深的新橋（Puente Nuevo）頂端俯瞰深邃峽谷與壯闊夕照。" },
      { day: "Day 8", title: "馬拉加 (Málaga) — 畢卡索故鄉海岸", desc: "漫步陽光海岸大城馬拉加，參觀畢卡索博物館與古羅馬劇場，在港灣陽光中結束這場南境之夢。" }
    ]
  },
  north: {
    title: "巴斯克美食與綠色西班牙 · 5 日",
    badge: "全球老饕頂級朝聖",
    daysCount: "5 天 4 夜",
    pace: "微醺享受 · 米其林與海灣",
    steps: [
      { day: "Day 1-2", title: "畢爾包 (Bilbao) — 工業重生的當代建築", desc: "造訪法蘭克·蓋瑞設計的古根漢美術館（Guggenheim Bilbao），站在金屬鈦金屬流線下感受現代藝術，品嚐新派巴斯克料理。" },
      { day: "Day 3-4", title: "聖塞巴斯提安 (Donostia) — 世界上最美味的城市", desc: "入住貝殼灣畔，晚間在舊城區開啟 Pintxos 酒吧巡迴；探訪傳奇名店 La Viña 享用最道地的炙烤巴斯克乳酪蛋糕配微氣泡白酒 Txakoli。" },
      { day: "Day 5", title: "海邊小鎮格塔里亞 (Getaria) — 白葡萄酒與炭烤魚", desc: "順訪時尚大師 Balenciaga 故鄉與海岸漁村，在港口炭火烤架上品味剛打撈上岸的野生海魚，帶著極致味蕾記憶告別。" }
    ]
  }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initFilters();
  initItineraryDisplay();
});

// Navbar scroll & Mobile Menu
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".m-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}

// Category Filters for Destinations
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".city-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Render Itinerary Tab
function switchItinerary(key) {
  const tabs = document.querySelectorAll(".itin-tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  event.target.classList.add("active");

  const data = ITINERARIES[key];
  if (!data) return;

  const container = document.getElementById("itineraryDisplay");
  container.innerHTML = `
    <div class="itin-header-box">
      <div>
        <h3 class="itin-info-title">${data.title}</h3>
        <div class="itin-badge-list">
          <span class="itin-badge">${data.badge}</span>
          <span class="itin-badge">${data.daysCount}</span>
          <span class="itin-badge">${data.pace}</span>
        </div>
      </div>
    </div>
    <div class="itin-timeline">
      ${data.steps.map(step => `
        <div class="timeline-step">
          <div class="timeline-day">
            ${step.day}
          </div>
          <div class="timeline-body">
            <h4 class="timeline-title">${step.title}</h4>
            <p class="timeline-desc">${step.desc}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function initItineraryDisplay() {
  const classic = ITINERARIES.classic;
  const container = document.getElementById("itineraryDisplay");
  container.innerHTML = `
    <div class="itin-header-box">
      <div>
        <h3 class="itin-info-title">${classic.title}</h3>
        <div class="itin-badge-list">
          <span class="itin-badge">${classic.badge}</span>
          <span class="itin-badge">${classic.daysCount}</span>
          <span class="itin-badge">${classic.pace}</span>
        </div>
      </div>
    </div>
    <div class="itin-timeline">
      ${classic.steps.map(step => `
        <div class="timeline-step">
          <div class="timeline-day">
            ${step.day}
          </div>
          <div class="timeline-body">
            <h4 class="timeline-title">${step.title}</h4>
            <p class="timeline-desc">${step.desc}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// City Modal Handler
function openCityModal(cityKey) {
  const city = CITY_DETAILS[cityKey];
  if (!city) return;

  const backdrop = document.getElementById("cityModalBackdrop");
  const content = document.getElementById("modalDynamicContent");

  content.innerHTML = `
    <img src="${city.img}" alt="${city.name}" class="modal-hero-img">
    <div class="modal-body">
      <h3 class="modal-title">${city.name}</h3>
      <div class="modal-meta-bar">
        <span>📍 ${city.region}</span>
        <span>⏱️ ${city.days}</span>
      </div>
      <p class="modal-desc">${city.desc}</p>

      <h4 class="modal-section-title">經典必訪亮點</h4>
      <ul class="modal-list">
        ${city.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>

      <h4 class="modal-section-title">老饕在地必嚐</h4>
      <ul class="modal-list">
        ${city.food.map(f => `<li>${f}</li>`).join("")}
      </ul>

      <div style="background: var(--bg-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-sm); border-left: 3px solid var(--accent); margin-top: 1.5rem;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent); display: block; margin-bottom: 0.25rem;">💡 TRAVEL TIP</span>
        <span style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${city.tips}</span>
      </div>
    </div>
  `;

  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCityModal() {
  const backdrop = document.getElementById("cityModalBackdrop");
  backdrop.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCityModal();
  }
});
