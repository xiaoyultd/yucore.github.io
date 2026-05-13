const PRIVATE_PASSWORD = "summer2026";
const LEAD_KEY = "yucore-lead-library-v2";
const DUPLICATE_KEY = "yucore-duplicate-count-v2";

const keywordGroups = {
  pumps: {
    "насос": "水泵",
    "промышленные насосы": "工业泵",
    "циркуляционный насос": "循环泵",
    "скважинный насос": "井泵",
    "дренажный насос": "排水泵",
    "центробежный насос": "离心泵",
    "вакуумный насос": "真空泵",
    "насос для отопления": "供暖泵",
    "насос для водоснабжения": "供水泵",
    "насосное оборудование": "泵设备",
    "насосные станции": "泵站",
    "запрос коммерческого предложения насос": "水泵询价"
  },
  automation: {
    "автоматизация": "自动化",
    "системы автоматизации": "自动化系统",
    "промышленная автоматизация": "工业自动化",
    "частотный преобразователь": "变频器",
    "plc контроллер": "PLC 控制器",
    "датчики давления": "压力传感器",
    "датчики температуры": "温度传感器",
    "сенсоры": "传感器",
    "китайские датчики": "中国传感器",
    "поставщик автоматики в россии": "俄罗斯自动化供应商"
  },
  sensors: {
    "датчики": "传感器",
    "датчики уровня": "液位传感器",
    "датчики расхода": "流量传感器",
    "датчики положения": "位置传感器",
    "индуктивные датчики": "感应传感器",
    "кип": "仪表和自动化设备",
    "контрольно измерительные приборы": "测量仪器",
    "измерительное оборудование": "测量设备",
    "аналоги датчиков": "传感器替代品"
  },
  hydraulics: {
    "гидравлика": "液压",
    "гидравлическое оборудование": "液压设备",
    "пневматика": "气动",
    "гидронасосы": "液压泵",
    "гидромоторы": "液压马达",
    "гидрораспределители": "液压分配器",
    "гидроцилиндры": "液压缸",
    "клапаны гидравлические": "液压阀",
    "запчасти для гидравлики": "液压配件"
  },
  electrical: {
    "электротехническое оборудование": "电气设备",
    "электромеханическое оборудование": "机电设备",
    "промышленное электрооборудование": "工业电气设备",
    "электродвигатели": "电动机",
    "мотор-редукторы": "减速电机",
    "генераторы": "发电机",
    "трансформаторы": "变压器",
    "автоматические выключатели": "自动断路器",
    "контакторы": "接触器",
    "шкафы автоматики": "自动化柜",
    "частотные преобразователи": "变频器",
    "кабельная продукция": "电缆产品",
    "измерительные приборы": "测量仪器"
  }
};

const cities = [
  "莫斯科", "圣彼得堡", "喀山", "叶卡捷琳堡", "新西伯利亚", "下诺夫哥罗德",
  "萨马拉", "顿河畔罗斯托夫", "克拉斯诺达尔", "沃罗涅日", "彼尔姆", "乌法", "车里雅宾斯克",
  "伏尔加格勒", "萨拉托夫", "秋明", "加里宁格勒", "符拉迪沃斯托克", "伊尔库茨克", "哈巴罗夫斯克"
];

const industries = [
  "水处理厂", "食品厂", "风电维修厂", "风电厂",
  "生物制药厂", "机械制造厂", "化工厂", "石油天然气服务",
  "矿业冶金", "包装厂", "农产品加工", "市政公用事业",
  "暖通供热", "电气柜厂", "自动化集成商", "MRO 备件经销商",
  "水泵维修公司", "工业工程建设", "仓储物流", "发电厂"
];

const productFocus = [
  "工业泵", "PLC 与自动化", "传感器与仪表", "液压与气动",
  "电机与减速电机", "变频器与软启动", "低压电气元件", "控制柜",
  "变压器与电力设备", "电缆与连接器", "工业照明", "工业备件"
];

const ruIndustryTerms = {
  "水处理厂": "водоочистная станция",
  "食品厂": "пищевое производство",
  "风电维修厂": "сервис ветроустановок",
  "风电厂": "ветропарк",
  "生物制药厂": "биофармацевтическое производство",
  "机械制造厂": "машиностроительный завод",
  "化工厂": "химический завод",
  "石油天然气服务": "нефтегазовый сервис",
  "矿业冶金": "горнодобывающая промышленность металлургия",
  "包装厂": "упаковочное производство",
  "农产品加工": "агропереработка",
  "市政公用事业": "коммунальное предприятие",
  "暖通供热": "теплоснабжение отопление",
  "电气柜厂": "сборка электрощитов",
  "自动化集成商": "интегратор автоматизации",
  "MRO 备件经销商": "поставщик запчастей",
  "水泵维修公司": "сервис насосов",
  "工业工程建设": "промышленное строительство",
  "仓储物流": "логистика склад",
  "发电厂": "электростанция"
};

const ruCityTerms = {
  "莫斯科": "Москва",
  "圣彼得堡": "Санкт-Петербург",
  "喀山": "Казань",
  "叶卡捷琳堡": "Екатеринбург",
  "新西伯利亚": "Новосибирск",
  "下诺夫哥罗德": "Нижний Новгород",
  "萨马拉": "Самара",
  "顿河畔罗斯托夫": "Ростов-на-Дону",
  "克拉斯诺达尔": "Краснодар",
  "沃罗涅日": "Воронеж",
  "彼尔姆": "Пермь",
  "乌法": "Уфа",
  "车里雅宾斯克": "Челябинск",
  "伏尔加格勒": "Волгоград",
  "萨拉托夫": "Саратов",
  "秋明": "Тюмень",
  "加里宁格勒": "Калининград",
  "符拉迪沃斯托克": "Владивосток",
  "伊尔库茨克": "Иркутск",
  "哈巴罗夫斯克": "Хабаровск"
};

const ruProductTerms = {
  "工业泵": "промышленные насосы",
  "PLC 与自动化": "plc контроллер промышленная автоматизация",
  "传感器与仪表": "датчики кип измерительное оборудование",
  "液压与气动": "гидравлика пневматика",
  "电机与减速电机": "электродвигатели мотор-редукторы",
  "变频器与软启动": "частотные преобразователи устройства плавного пуска",
  "低压电气元件": "низковольтное оборудование контакторы",
  "控制柜": "шкафы автоматики щиты управления",
  "变压器与电力设备": "трансформаторы силовое оборудование",
  "电缆与连接器": "кабельная продукция разъемы",
  "工业照明": "промышленные светильники",
  "工业备件": "промышленные запчасти"
};

const companyRoots = [
  "AquaTech", "VodoServis", "PromEnergo", "BioFarm", "FoodLine", "WindService", "SeverTech",
  "RusControl", "VolgaPump", "BalticProcess", "UralMechanic", "SibAutomation", "KamaEngineering",
  "NevaIndustrial", "DonHydro", "VectorMRO", "SigmaKIP", "ProgressPlant", "Technika Plus", "RotorGroup",
  "Industrial Partner", "CleanWater", "AgroProcess", "EnergoKomplekt", "PanelSystems"
];

const guideItems = [
  ["浙江商人思路", "小单快跑，报价清楚，先建立稳定复购。第一单重点让客户感受到速度、确定性和付款便利。"],
  ["犹太商人思路", "看客户终身价值。记录每次需求、采购角色和关系线索，把一次询价变成长期供应关系。"],
  ["潮汕商人思路", "重信用、重关系、重转介绍。成交后继续问备件计划、项目周期和采购同事推荐。"],
  ["俄罗斯客户沟通", "直接、具体、少空话。先问型号、数量、收货城市、付款方式和交期，再给清单式方案。"],
  ["高成交率信号", "优先跟进有工厂官网、采购/工程联系人、进口设备痕迹、项目新闻、招标记录和 1 万美金以上需求的公司。"]
];

let leads = readJson(LEAD_KEY, []);
let duplicatesBlocked = Number(localStorage.getItem(DUPLICATE_KEY) || 0);
let activeMessage = "early";
let lastCompare = { fresh: [], duplicates: [] };

function $(selector) {
  return document.querySelector(selector);
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function saveLeads() {
  localStorage.setItem(LEAD_KEY, JSON.stringify(leads));
  localStorage.setItem(DUPLICATE_KEY, String(duplicatesBlocked));
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeWebsite(value) {
  return normalize(value).replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

function normalizePhone(value) {
  return String(value || "").replace(/[^\d+]/g, "");
}

function uniqueId(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function getLeadKeys(lead) {
  return {
    email: normalize(lead.email),
    website: normalizeWebsite(lead.website),
    phone: normalizePhone(lead.whatsapp || lead.phone)
  };
}

function findDuplicate(lead, list = leads) {
  const keys = getLeadKeys(lead);
  return list.find((item) => {
    const itemKeys = getLeadKeys(item);
    return (keys.email && keys.email === itemKeys.email)
      || (keys.website && keys.website === itemKeys.website)
      || (keys.phone && keys.phone === itemKeys.phone);
  });
}

function scoreLead(lead) {
  let score = 50;
  if (["水处理厂", "食品厂", "风电维修厂", "风电厂", "生物制药厂"].includes(lead.industry)) score += 18;
  if (["工业泵", "PLC 与自动化", "传感器与仪表", "变频器与软启动"].includes(lead.product)) score += 12;
  if (["莫斯科", "圣彼得堡", "喀山", "叶卡捷琳堡", "新西伯利亚"].includes(lead.city)) score += 8;
  if (Number(lead.minValue || 10000) >= 30000) score += 6;
  if (lead.website) score += 4;
  if (lead.email) score += 4;
  return Math.min(score + Math.floor(Math.random() * 8), 96);
}

function enrichLead(raw) {
  const company = raw.company || "Unnamed company";
  const website = raw.website || "";
  const city = raw.city || ($("#citySelect") ? $("#citySelect").value : "");
  const industry = raw.industry || ($("#industrySelect") ? $("#industrySelect").value : "");
  const product = raw.product || raw.products || ($("#productSelect") ? $("#productSelect").value : "");
  const minValue = raw.minValue || ($("#valueSelect") ? $("#valueSelect").value : 10000);
  const query = encodeURIComponent(`${company} ${ruCityTerms[city] || city} ${ruIndustryTerms[industry] || industry} ${ruProductTerms[product] || product} контакты email`);
  const lead = {
    id: raw.id || uniqueId(`${company}|${website}|${raw.email || ""}|${raw.whatsapp || raw.phone || ""}`),
    company,
    website,
    email: raw.email || "",
    whatsapp: raw.whatsapp || raw.phone || "",
    city,
    industry,
    product,
    contactPerson: raw.contactPerson || "",
    position: raw.position || "",
    taxNumber: raw.taxNumber || "",
    address: raw.address || "",
    source: raw.source || "手动研究",
    notes: raw.notes || "核对公司官网、决策人、进口记录和采购时间。",
    potential: raw.potential || `$${Number(minValue).toLocaleString()}+`,
    minValue,
    createdAt: raw.createdAt || new Date().toISOString(),
    yandex: raw.yandex || `https://yandex.com/maps/?text=${query}`,
    webSearch: raw.webSearch || `https://yandex.com/search/?text=${query}`
  };
  lead.score = raw.score || scoreLead(lead);
  return lead;
}

function parseImportedLeads() {
  const box = $("#importBox");
  if (!box) return [];
  return box.value.split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("|").map((item) => item.trim());
      return enrichLead({
        company: parts[0],
        website: parts[1],
        email: parts[2],
        whatsapp: parts[3],
        city: parts[4],
        industry: parts[5],
        product: parts[6],
        contactPerson: parts[7],
        position: parts[8],
        source: parts[9],
        notes: parts[10]
      });
    });
}

function compareImportedLeads() {
  const incoming = parseImportedLeads();
  const fresh = [];
  const duplicates = [];
  incoming.forEach((lead) => {
    const duplicate = findDuplicate(lead, [...leads, ...fresh]);
    if (duplicate) {
      duplicates.push({ lead, duplicate });
    } else {
      fresh.push(lead);
    }
  });
  lastCompare = { fresh, duplicates };
  renderCompare();
  return lastCompare;
}

function importLeads() {
  const result = compareImportedLeads();
  leads = [...result.fresh, ...leads];
  duplicatesBlocked += result.duplicates.length;
  saveLeads();
  if ($("#importBox")) $("#importBox").value = "";
  renderLeads();
  renderCompare();
}

function makeLead(index) {
  const city = $("#citySelect").value;
  const industry = $("#industrySelect").value;
  const product = $("#productSelect").value;
  const minValue = $("#valueSelect").value;
  const root = companyRoots[(index + leads.length + Math.floor(Math.random() * companyRoots.length)) % companyRoots.length];
  const suffix = ["OOO", "LLC", "Group", "Service", "Engineering"][Math.floor(Math.random() * 5)];
  const company = `${root} ${suffix}`;
  const slug = company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return enrichLead({
    company,
    website: `https://${slug}.ru`,
    email: `info@${slug}.ru`,
    whatsapp: `+7 ${900 + Math.floor(Math.random() * 89)} ${100 + Math.floor(Math.random() * 899)}-${10 + Math.floor(Math.random() * 89)}-${10 + Math.floor(Math.random() * 89)}`,
    city,
    industry,
    product,
    minValue,
    source: "系统生成研究目标",
    notes: "研究目标。打开 Yandex 核对真实官网，并替换成确认后的公司信息。"
  });
}

function generateLeads() {
  const batch = [];
  let blocked = 0;
  let attempts = 0;
  while (batch.length < 30 && attempts < 500) {
    const lead = makeLead(attempts);
    if (findDuplicate(lead, [...leads, ...batch])) {
      blocked += 1;
    } else {
      batch.push(lead);
    }
    attempts += 1;
  }
  leads = [...batch, ...leads];
  duplicatesBlocked += blocked;
  saveLeads();
  lastCompare = { fresh: batch, duplicates: [] };
  renderLeads();
  renderCompare();
}

function addManualLead() {
  const lead = enrichLead({
    company: $("#manualCompany").value,
    website: $("#manualWebsite").value,
    email: $("#manualEmail").value,
    whatsapp: $("#manualPhone").value,
    city: $("#citySelect").value,
    industry: $("#industrySelect").value,
    product: $("#manualProducts").value || $("#productSelect").value,
    contactPerson: $("#manualContact").value,
    position: $("#manualPosition").value,
    taxNumber: $("#manualTax").value,
    address: $("#manualAddress").value,
    source: $("#manualSource").value || "手动公司档案",
    notes: $("#manualNotes").value
  });
  const duplicate = findDuplicate(lead);
  if (duplicate) {
    duplicatesBlocked += 1;
    lastCompare = { fresh: [], duplicates: [{ lead, duplicate }] };
  } else {
    leads = [lead, ...leads];
    lastCompare = { fresh: [lead], duplicates: [] };
    document.querySelectorAll(".manual-panel input, .manual-panel textarea").forEach((field) => {
      field.value = "";
    });
  }
  saveLeads();
  renderLeads();
  renderCompare();
}

function renderKeywords(group = "pumps") {
  const cloud = $("#keywordCloud");
  if (!cloud) return;
  cloud.innerHTML = Object.entries(keywordGroups[group])
    .map(([term, meaning]) => `<div class="keyword-chip"><strong>${escapeHtml(term)}</strong><span>${escapeHtml(meaning)}</span></div>`)
    .join("");
}

function renderGuide() {
  const guide = $("#salesGuide");
  if (!guide) return;
  guide.innerHTML = guideItems.map(([title, body]) => `
    <div class="guide-item"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></div>
  `).join("");
}

function renderCompare() {
  const target = $("#compareResult");
  if (!target) return;
  if (!lastCompare.fresh.length && !lastCompare.duplicates.length) {
    target.innerHTML = "";
    return;
  }
  target.innerHTML = `
    <div class="compare-box">
      <strong>${lastCompare.fresh.length} 条新线索可导入</strong>
      <span>发现 ${lastCompare.duplicates.length} 条邮箱、官网或电话重复线索。</span>
    </div>
  `;
}

function renderLeads() {
  const list = $("#leadList");
  if (!list) return;
  const filter = normalize($("#leadFilter") ? $("#leadFilter").value : "");
  const visible = leads.filter((lead) => normalize(`${lead.company} ${lead.email} ${lead.website} ${lead.city} ${lead.industry} ${lead.product}`).includes(filter));
  const avg = leads.length ? Math.round(leads.reduce((sum, lead) => sum + Number(lead.score || 0), 0) / leads.length) : 0;
  if ($("#storedCount")) $("#storedCount").textContent = leads.length;
  if ($("#avgScore")) $("#avgScore").textContent = avg;
  if ($("#duplicateCount")) $("#duplicateCount").textContent = duplicatesBlocked;
  if ($("#nextAction")) $("#nextAction").textContent = leads.some((lead) => lead.score >= 85) ? "优先报价高分客户" : "核对联系方式";

  list.innerHTML = visible.map((lead) => `
    <article class="lead-card">
      <header>
        <div>
          <h4>${escapeHtml(lead.company)}</h4>
          <div class="lead-meta">
            <span>${escapeHtml(lead.city)}</span>
            <span>${escapeHtml(lead.industry)}</span>
            <span>${escapeHtml(lead.product)}</span>
            <span>${escapeHtml(lead.potential)}</span>
          </div>
        </div>
        <span class="score-pill">${escapeHtml(lead.score)}% fit</span>
      </header>
      <p><strong>官网：</strong> ${escapeHtml(lead.website || "待核对")} | <strong>邮箱：</strong> ${escapeHtml(lead.email || "待寻找")} | <strong>电话：</strong> ${escapeHtml(lead.whatsapp || "待寻找")}</p>
      <p><strong>联系人：</strong> ${escapeHtml(lead.contactPerson || "未知")} ${lead.position ? `(${escapeHtml(lead.position)})` : ""} | <strong>INN：</strong> ${escapeHtml(lead.taxNumber || "未知")}</p>
      <p><strong>地址：</strong> ${escapeHtml(lead.address || "待核对")}</p>
      <p>${escapeHtml(lead.notes)}</p>
      <div class="lead-links">
        ${lead.website ? `<a href="${escapeHtml(lead.website)}" target="_blank" rel="noopener">打开官网</a>` : ""}
        <a href="${escapeHtml(lead.yandex)}" target="_blank" rel="noopener">Yandex 地图</a>
        <a href="${escapeHtml(lead.webSearch)}" target="_blank" rel="noopener">Yandex 搜索</a>
        ${lead.email ? `<a href="mailto:${escapeHtml(lead.email)}">发邮件</a>` : ""}
      </div>
    </article>
  `).join("") || "<p>还没有线索。可以先生成、粘贴导入，或手动保存第一家公司。</p>";
}

function messageTemplates() {
  const product = $("#productSelect") ? $("#productSelect").value : "industrial products";
  const city = $("#citySelect") ? $("#citySelect").value : "Russia";
  return {
    early: `Hello, my name is Summer from Guangzhou Xiaoyu Import & Export Co., Ltd.\n\nWe supply industrial products from China for Russian factories and maintenance teams, including ${product}, pumps, sensors, PLCs, drives, electrical parts and spare parts.\n\nMay I ask if your team is currently looking for any equipment, replacement parts, or alternative supply channels? If you send model, photo, nameplate or quantity, I can check and offer a quotation.\n\nWhatsApp: +86 15018485957\nEmail: summer@yucore.ltd`,
    middle: `Hello, I want to follow up with a practical proposal.\n\nFor customers in ${city}, we can help combine multiple product categories in one shipment: pumps, automation, sensors, drives, low-voltage electrical parts, hydraulics and MRO spare parts. We can also support RUB payment through a local VTB Bank account.\n\nIf you have a purchasing list above USD 10,000, I can help check price, availability and delivery options item by item. Please send the models or technical parameters.`,
    late: `Hello, thank you for staying in contact.\n\nTo support your next maintenance or project purchase, I can prepare a regular spare-parts checklist for your equipment: urgent items, long-lead items, alternative models and budget planning.\n\nCould you share your upcoming procurement plan for the next 1-3 months? I will help organize quotation options in advance so your team can compare calmly.`
  };
}

function updateMessage() {
  if ($("#messageBox")) $("#messageBox").value = messageTemplates()[activeMessage];
}

function fillSelect(select, values) {
  if (!select) return;
  select.innerHTML = values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
}

function openSearch(kind) {
  const city = $("#citySelect").value;
  const industry = $("#industrySelect").value;
  const product = $("#productSelect").value;
  const ruTerm = ruIndustryTerms[industry] || industry;
  const ruCity = ruCityTerms[city] || city;
  const ruProduct = ruProductTerms[product] || product;
  const query = encodeURIComponent(`${ruTerm} ${ruProduct} ${ruCity} контакты email`);
  const url = kind === "maps"
    ? `https://yandex.com/maps/?text=${query}`
    : `https://yandex.com/search/?text=${query}`;
  window.open(url, "_blank", "noopener");
}

function exportCsv() {
  const header = ["公司", "官网", "邮箱", "电话", "城市", "行业", "产品", "联系人", "职位", "INN", "地址", "评分", "潜在金额", "来源", "备注", "创建时间"];
  const rows = leads.map((lead) => [
    lead.company, lead.website, lead.email, lead.whatsapp, lead.city, lead.industry, lead.product,
    lead.contactPerson, lead.position, lead.taxNumber, lead.address, lead.score, lead.potential,
    lead.source, lead.notes, lead.createdAt
  ]);
  const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `yucore-lead-library-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function initPublicPage() {
  renderKeywords();
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      renderKeywords(tab.dataset.tab);
    });
  });
}

function initSystemPage() {
  fillSelect($("#citySelect"), cities);
  fillSelect($("#industrySelect"), industries);
  fillSelect($("#productSelect"), productFocus);
  renderGuide();
  renderLeads();
  updateMessage();

  $("#unlockBtn").addEventListener("click", () => {
    if ($("#passwordInput").value === PRIVATE_PASSWORD) {
      $("#lockPanel").classList.add("hidden");
      $("#toolShell").classList.remove("hidden");
      localStorage.setItem("yucore-unlocked", "yes");
    } else {
      alert("密码不正确。");
    }
  });

  if (localStorage.getItem("yucore-unlocked") === "yes") {
    $("#lockPanel").classList.add("hidden");
    $("#toolShell").classList.remove("hidden");
  }

  $("#generateBtn").addEventListener("click", generateLeads);
  $("#compareBtn").addEventListener("click", compareImportedLeads);
  $("#importBtn").addEventListener("click", importLeads);
  $("#addManualBtn").addEventListener("click", addManualLead);
  $("#searchYandexBtn").addEventListener("click", () => openSearch("maps"));
  $("#searchWebBtn").addEventListener("click", () => openSearch("web"));
  $("#leadFilter").addEventListener("input", renderLeads);
  $("#exportBtn").addEventListener("click", exportCsv);
  $("#clearBtn").addEventListener("click", () => {
    if (confirm("确定清空这个浏览器里的全部线索库数据吗？")) {
      leads = [];
      duplicatesBlocked = 0;
      lastCompare = { fresh: [], duplicates: [] };
      saveLeads();
      renderLeads();
      renderCompare();
    }
  });
  $("#copyMsgBtn").addEventListener("click", async () => {
    await navigator.clipboard.writeText($("#messageBox").value);
    $("#copyMsgBtn").textContent = "已复制";
    setTimeout(() => {
      $("#copyMsgBtn").textContent = "复制话术";
    }, 1200);
  });
  document.querySelectorAll(".msg-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".msg-tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      activeMessage = tab.dataset.message;
      updateMessage();
    });
  });
  ["citySelect", "industrySelect", "productSelect"].forEach((id) => {
    $(`#${id}`).addEventListener("change", updateMessage);
  });
}

if ($("#keywordCloud")) initPublicPage();
if ($("#toolShell")) initSystemPage();
