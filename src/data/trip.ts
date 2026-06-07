// 「梅雨之间 · 关西七日漫游」行程数据
// 2026.6.14(周日) — 6.21(周日) 大阪 · 奈良 · 宇治 · 京都 · 神户

export interface DayPlan {
  day: number;
  date: string;
  weekday: string;
  city: string;
  cityColor: string;
  theme: string;
  subtitle: string;
  morning: string;
  afternoon: string;
  evening: string;
  unique: string[];
  rainPlanB: string;
  budget: number; // 当日预算(日元/人)
}

export interface Highlight {
  emoji: string;
  title: string;
  desc: string;
  whyUnique: string;
  imagePrompt: string;
  imageSize: string;
  tone: "ajisai" | "matcha" | "lamp" | "mist";
}

export interface CityNode {
  name: string;
  romaji: string;
  x: number;
  y: number;
  days: number[];
  color: string;
}

export const TRIP_META = {
  title: "梅雨之间",
  titleEn: "BETWEEN THE RAINS",
  subtitle: "关西七日漫游",
  dateRange: "2026.6.14 — 6.21",
  days: 7,
  cities: 5,
  tagline: "梅雨不是阻碍，而是关西最温柔的滤镜。",
};

export const days: DayPlan[] = [
  {
    day: 1,
    date: "6.14",
    weekday: "周日",
    city: "京都",
    cityColor: "#6c7bb5",
    theme: "落地・古都序章",
    subtitle: "Arrival in Kyoto",
    morning: "关西机场入境 → JR HARUKA 特急直奔京都，行李寄存酒店。先在「锦市场」有顶拱廊里扫街暖身，找一把属于自己的雨季武器：透明胶伞或限定文具。",
    afternoon: "河原町・三条一带，沿高濑川与木屋町散步，雨后柳枝与河灯最有氛围，钻进一家町家咖啡歇脚。",
    evening: "夜访「先斗町」窄巷，雨夜灯笼一字排开，找一家只有 8 个座位的小店，为七日旅程开场。",
    unique: ["锦市场拱廊扫街", "雨夜先斗町窄巷"],
    rainPlanB: "锦市场、商场、町家咖啡全程有顶，落地首日下雨也轻松适应。",
    budget: 9000,
  },
  {
    day: 2,
    date: "6.15",
    weekday: "周一",
    city: "京都",
    cityColor: "#6c7bb5",
    theme: "雾山・天狗与水神",
    subtitle: "Kurama & Kibune",
    morning: "叡山电车前往「鞍马」。雨季的鞍马寺云雾缭绕，沿天狗传说的山道徒步翻山——这是全程最有「秘境」感的一段。",
    afternoon: "翻山下到「贵船」，贵船神社的水占卜：把白纸浮在神水上，字会慢慢浮现你的运势。沿溪的「川床」料理（梅雨季限定，溪上用餐）。",
    evening: "回京都市区，祇园白川一带散步，运气好能偶遇艺伎赶场，雨夜石板路别有韵味。",
    unique: ["雾中鞍马天狗山道", "贵船神水浮字占卜", "溪上川床料理"],
    rainPlanB: "若山区发布大雨警报则取消登山，改室内「三十三间堂」1001 尊佛像 + 锦市场拱廊。",
    budget: 13000,
  },
  {
    day: 3,
    date: "6.16",
    weekday: "周二",
    city: "京都",
    cityColor: "#6c7bb5",
    theme: "光影・传统艺能",
    subtitle: "Light & Stage",
    morning: "上午进「teamLab」或京都艺术馆系沉浸展，把雨天变成光影森林（数字艺术雨天反而更梦幻）。",
    afternoon: "三十三间堂——室内一字排开的 1001 尊千手观音，雨天最适合静静看；再逛附近的京都国立博物馆。",
    evening: "花见小路尽头的「祇园角」看一场浓缩版日本传统艺能（能剧/舞妓/狂言合集），沉浸式感受京都之夜。",
    unique: ["雨天光影数字森林", "祇园角传统艺能"],
    rainPlanB: "数字展、佛堂、博物馆、剧场全程室内，是梅雨季的完美室内日。",
    budget: 12000,
  },
  {
    day: 4,
    date: "6.17",
    weekday: "周三",
    city: "宇治",
    cityColor: "#7a8c5a",
    theme: "抹茶・绣球・源氏物语",
    subtitle: "Uji Green Hour",
    morning: "京阪/JR 到宇治。先去「中村藤吉本店」预约石臼磨茶体验，亲手把碾茶磨成抹茶粉，再点一份招牌抹茶荞麦/生茶冻。",
    afternoon: "三室户寺「紫陽花园」——梅雨季限定，两万株绣球花在雨中盛放；再到平等院凤凰堂，雨天水面如镜，倒影是 10 円硬币同款。",
    evening: "宇治川对岸「源氏物语博物馆」沉浸走进千年物语，傍晚返回京都收尾。",
    unique: ["石臼亲手磨抹茶", "梅雨限定两万株绣球", "雨镜里的凤凰堂倒影"],
    rainPlanB: "茶体验、博物馆均室内；绣球本就要雨、平等院水景小雨更美。",
    budget: 10000,
  },
  {
    day: 5,
    date: "6.18",
    weekday: "周四",
    city: "奈良",
    cityColor: "#7a8c5a",
    theme: "古都・鹿与苔",
    subtitle: "Nara in the Mist",
    morning: "近铁京都直达奈良，清晨先于人潮抵达。雨后的奈良公园苔藓发亮、鹿群安静——买鹿仙贝时先藏好，体验鹿对你「鞠躬讨食」的礼仪。",
    afternoon: "东大寺大佛殿（室内避雨）+ 二月堂回廊俯瞰雨雾中的奈良盆地。再钻进「ならまち」格子老街，找「庚申堂」屋檐下成串的红色护身猴。",
    evening: "在天理体验「一枚硬币变戒指」金工——把一枚日元硬币亲手敲打成戒指带走（当日可取，约 ¥5,900），之后转往大阪入住难波。",
    unique: ["雨后苔藓鹿礼", "硬币锻打成戒指"],
    rainPlanB: "大佛殿、博物馆室内充足；ならまち多檐廊，撑伞也舒服。",
    budget: 11000,
  },
  {
    day: 6,
    date: "6.19",
    weekday: "周五",
    city: "大阪",
    cityColor: "#e0a060",
    theme: "烟火气・工厂探秘",
    subtitle: "Osaka Vibes",
    morning: "提前预约的「明治 なるほどファクトリー」巧克力工厂参观——一整面 38 万板巧克力外墙，看蘑菇山/竹笋里如何诞生（完全预约制，免费）。",
    afternoon: "新世界 × 通天阁，玩塔下复古「射的」小摊与昭和弹珠台，午餐串炸（记得：酱汁不能二次蘸）；或把梅田地下迷宫当真人 RPG 闯关。",
    evening: "道顿堀夜雨霓虹，雨夜招牌倒映在运河里最上镜，乘「とんぼり river cruise」从水上看跑跑人。",
    unique: ["巧克力工厂预约参观", "昭和射的弹珠台", "雨夜运河船拍霓虹倒影"],
    rainPlanB: "工厂、地下街、有顶商店街全程不淋雨，是梅雨季的完美室内日。",
    budget: 10000,
  },
  {
    day: 7,
    date: "6.20",
    weekday: "周六",
    city: "神户",
    cityColor: "#4a6b7c",
    theme: "港城・百万夜景",
    subtitle: "Kobe Harbor",
    morning: "从大阪 JR 到神户。北野异人馆街——明治时期的西洋老建筑群，在雨雾里像欧洲小镇。星巴克入驻的洋馆值得一坐。",
    afternoon: "南京町吃点心暖胃，再去「竹中大工道具馆」——全日本唯一的木工工具博物馆，安静、有禅意、几乎没游客。",
    evening: "摩耶山掬星台缆车上山，看号称「日本三大夜景」之一的神户百万港湾夜景作为旅程压轴（雨停看云海，雨中看灯雾），之后返回大阪。",
    unique: ["唯一木工道具博物馆", "摩耶山百万夜景压轴"],
    rainPlanB: "若摩耶山被云封顶,改神户港 Harborland 摩天轮 + 马赛克广场室内夜景。",
    budget: 11000,
  },
];

// 第8天为返程,合并在 footer 表述; 时间轴展示 7 个游玩日
export const RETURN_NOTE = "6.21(周日) · 大阪关西机场返程 — 出发前可在临空 PREMIUM OUTLETS 扫尾购物。";

export const highlights: Highlight[] = [
  {
    emoji: "💍",
    title: "硬币变戒指",
    desc: "在奈良天理，把一枚日元硬币亲手锻打、塑形成一枚戒指，当天戴走。",
    whyUnique: "把「钱」变成「随身的旅行纪念」，全日本少见的金工当日体验。",
    imagePrompt: "close up of hands hammering a japanese coin into a silver ring on a wooden workbench, warm workshop light, craft jewelry making, cinematic shallow depth of field",
    imageSize: "square_hd",
    tone: "lamp",
  },
  {
    emoji: "🌸",
    title: "两万株绣球",
    desc: "宇治三室户寺梅雨限定的紫陽花园，蓝紫花海在雨中最浓艳。",
    whyUnique: "只有 6 月梅雨季开放，雨越大花越美，是「为下雨而生」的景点。",
    imagePrompt: "twenty thousand blue and purple hydrangeas in full bloom covering a temple hillside in light rain, misty atmosphere, lush green, japanese temple, soft overcast light",
    imageSize: "landscape_4_3",
    tone: "ajisai",
  },
  {
    emoji: "🍵",
    title: "石臼磨抹茶",
    desc: "宇治中村藤吉，亲手转动石臼把碾茶磨成翠绿抹茶粉再饮。",
    whyUnique: "从茶叶到茶汤的全过程亲手参与，比单纯喝抹茶多了一层仪式。",
    imagePrompt: "hands turning a stone mill grinding matcha green tea powder, vivid green powder, traditional japanese tea house, warm wood, top down view, detailed texture",
    imageSize: "square_hd",
    tone: "matcha",
  },
  {
    emoji: "⛩️",
    title: "贵船神水占卜",
    desc: "把空白御神签浮在贵船神社的神水上，运势文字会缓缓浮现。",
    whyUnique: "雨季溪水丰沛，水占卜配上川床溪上料理，是雾中山谷的限定体验。",
    imagePrompt: "a blank paper fortune slip floating on clear sacred spring water revealing japanese characters, stone basin at kibune shrine, green moss, soft rainy light",
    imageSize: "square_hd",
    tone: "mist",
  },
  {
    emoji: "🌫️",
    title: "雾中鞍马山道",
    desc: "叡山电车深入鞍马，沿天狗传说山道翻越到贵船的秘境徒步。",
    whyUnique: "梅雨的云雾把整座山染成水墨画，是关西最有「异世界感」的一段路。",
    imagePrompt: "misty mountain forest trail at kurama temple, towering cedar trees, fog rolling through, stone steps, mystical atmosphere, japanese mountain shrine, moody overcast",
    imageSize: "landscape_16_9",
    tone: "matcha",
  },
  {
    emoji: "🌃",
    title: "摩耶山百万夜景",
    desc: "缆车登摩耶山掬星台，俯瞰神户港湾被称作「日本三大夜景」的灯海。",
    whyUnique: "雨后空气通透，云海与灯火交叠，是 7 天旅程最戏剧化的收尾。",
    imagePrompt: "panoramic night view of kobe harbor city lights from maya mountain observatory, sea of clouds, glittering city below, deep blue twilight, cinematic",
    imageSize: "landscape_16_9",
    tone: "mist",
  },
];

export const cityNodes: CityNode[] = [
  { name: "京都", romaji: "KYOTO", x: 380, y: 175, days: [1, 2, 3], color: "#6c7bb5" },
  { name: "宇治", romaji: "UJI", x: 410, y: 250, days: [4], color: "#7a8c5a" },
  { name: "奈良", romaji: "NARA", x: 470, y: 360, days: [5], color: "#7a8c5a" },
  { name: "大阪", romaji: "OSAKA", x: 300, y: 330, days: [6], color: "#e0a060" },
  { name: "神户", romaji: "KOBE", x: 165, y: 290, days: [7], color: "#4a6b7c" },
];

export const tips = {
  weather: {
    season: "关西梅雨期约 6/6 — 7/19",
    temp: "22 – 28℃",
    rainChance: "降雨概率 40 – 60%",
    note: "梅雨≠整天下雨，多为间歇阵雨与晨雾。雨常在午后，建议早晨 7-9 点先攻热门户外点。",
  },
  packList: [
    { icon: "umbrella", label: "折叠透明胶伞", note: "便利店 ¥700 即可补" },
    { icon: "footprints", label: "防水/速干鞋", note: "湿袜毁一天，最重要的一件" },
    { icon: "shirt", label: "速干衣物", note: "避免纯棉牛仔，难干" },
    { icon: "backpack", label: "防水背包套", note: "护住相机与护照" },
    { icon: "package", label: "除湿小包", note: "百元店 Daiso 有售" },
    { icon: "sun", label: "薄长袖一件", note: "室内强冷气备用" },
  ],
  hacks: [
    "便利店雨伞用完插在寺院/车站伞架，留给下一个人——非常日式。",
    "用 Yahoo!天気 / Weather News 看逐小时降雨，挑干燥时段出门。",
    "大阪难波、梅田地下街可全程不淋雨穿城，雨天救星。",
    "梅雨是关西淡季：机酒便宜、热门点人少 40%，性价比之窗。",
  ],
  apps: [
    { name: "Yahoo!天気", use: "逐小时降雨预报，最准" },
    { name: "Google Maps", use: "电车换乘 + 步行导航" },
    { name: "ICOCA / 关西周游券", use: "刷卡坐遍关西私铁地铁" },
    { name: "NAVITIME Transit", use: "JR/私铁班次与票价" },
  ],
};

export const budgetMeta = {
  exchangeNote: "汇率参考 ¥1000 ≈ ¥48 人民币（仅供估算）",
  ticketTips: [
    "ICOCA 交通卡：押金 ¥500，刷遍关西地铁私铁巴士。",
    "关西周游券(KANSAI THRU PASS)：2/3 日券，适合大阪-奈良-京都多日跨城。",
    "JR 关西地区铁路周游券：往返机场 + 宇治/神户 JR 段更划算。",
  ],
};
