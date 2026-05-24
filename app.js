const phases = [
  {
    title: "第一阶段：基础校准",
    dates: "5/25-5/31",
    aim: "先把八个单元的课文、课后题、语文园地和习作题目对齐，确认孩子真正需要补哪里。",
    tags: ["课内底图", "字词句", "背诵清单"],
    actions: [
      "按单元整理会认字、会写字、易错音、易错形，每天听写 12-16 个。",
      "用课后题参考答案校准答题方向，只看思路，不直接背整句。",
      "古诗文和日积月累分成“会背、会默、会解释”三格检查。",
      "建立错题本：不会、粗心、表达不完整三类即可。"
    ],
    rubric: [
      ["A", "能独立默写重点词句，课后题回答有完整句。"],
      ["B", "基础大多会，偶尔漏字漏标点，需要二次订正。"],
      ["C", "字词和背诵不稳，先减量保准确。"]
    ]
  },
  {
    title: "第二阶段：课内巩固",
    dates: "6/1-6/7",
    aim: "围绕八个单元的语文要素做复盘：写景、科普、诗歌、动物、游记、长文章、人物品质、童话想象。",
    tags: ["单元要素", "课文理解", "语文园地"],
    actions: [
      "每天复盘 1-2 个单元，口头说出本单元语文要素和代表课文。",
      "整理每篇课文的主要内容、关键句、人物/景物特点。",
      "每两天做一次短阅读，重点练“概括、找依据、说理由”。",
      "把本学期 7 个习作题目各列 3 个可写素材。"
    ],
    rubric: [
      ["A", "能用自己的话讲清课文重点，并从文中找依据。"],
      ["B", "知道大意，但回答还不够完整。"],
      ["C", "课文记忆零散，需要回到原文朗读。"]
    ]
  },
  {
    title: "第三阶段：阅读习作",
    dates: "6/8-6/14",
    aim: "把阅读题和习作题放到真实输出里练，不追求题量，追求每次都能订正到位。",
    tags: ["阅读理解", "表达完整", "习作升级"],
    actions: [
      "阅读题固定三步：读题圈关键词、回文找句子、用完整句作答。",
      "练 4 类常见题：词句理解、概括内容、人物品质、中心启示。",
      "习作每次只改一个重点：结构、细节、语言、标点。",
      "准备 3 篇可迁移范文骨架：写人、写景/游记、想象/童话。"
    ],
    rubric: [
      ["A", "阅读答案有依据，习作有顺序和细节。"],
      ["B", "能写完整，但理由或细节偏少。"],
      ["C", "容易空泛，需要用提纲先说后写。"]
    ]
  },
  {
    title: "第四阶段：模拟冲刺",
    dates: "6/15-6/21",
    aim: "用整卷模拟检查时间分配和稳定性，最后一周少做新题，多看错题和答题规范。",
    tags: ["整卷模拟", "错题回流", "考前节奏"],
    actions: [
      "完成 1-2 套期末卷，按真实时间做，家长只记录卡点。",
      "讲评时不重做全卷，只重做错因相同的 3-5 题。",
      "每天 10 分钟默写，10 分钟阅读答题口述，10 分钟习作素材复盘。",
      "考前两天只看错题、背诵和作文提纲，保持睡眠。"
    ],
    rubric: [
      ["A", "整卷节奏稳定，作文留足 25 分钟以上。"],
      ["B", "基础稳定，但阅读或作文偶尔超时。"],
      ["C", "题目做不完，先训练时间分配。"]
    ]
  }
];

const rawDays = [
  ["5/25 周一", "单元底图", "整理 1-2 单元目录、课后题和习作题目。", ["听写 12 个第一单元易错词", "朗读《乡下人家》或《天窗》，说出景物特点", "列出“我的乐园”3 个素材"]],
  ["5/26 周二", "科普单元", "复盘第二单元提问策略和说明文关键词。", ["听写 12 个第二单元词语", "用一句话解释“纳米技术”类信息", "整理“我的奇思妙想”提纲"]],
  ["5/27 周三", "诗歌积累", "第三单元重在节奏、意象、仿写。", ["背默本册古诗 1 首", "摘抄 3 个诗歌意象", "仿写 4 行小诗"]],
  ["5/28 周四", "动物描写", "第四单元关注特点、事例和作者情感。", ["听写动物描写词语", "说出《猫》《母鸡》《白鹅》的表达差异", "准备“我的动物朋友”素材"]],
  ["5/29 周五", "游记顺序", "第五单元抓游览路线和景物转换。", ["画一张游览路线图", "复述《记金华的双龙洞》顺序", "写 120 字游记片段"]],
  ["5/30 周六", "长文章", "第六单元练概括主要内容。", ["用人物+事件概括长文", "整理“我学会了____”3 个事件", "订正本周错题"]],
  ["5/31 周日", "周复盘", "完成第一轮底图检查。", ["默写本周易错词 20 个", "背诵清单打勾", "选 1 篇习作补细节"]],
  ["6/1 周一", "一二单元巩固", "写景和科普各做一次表达。", ["完成 1 组课后题复盘", "阅读短文 1 篇并找依据", "改 1 个作文开头"]],
  ["6/2 周二", "三四单元巩固", "诗歌与动物描写合练。", ["背默诗句或日积月累", "赏析 1 个动物描写句", "完成 5 分钟口头表达"]],
  ["6/3 周三", "五六单元巩固", "游记顺序和长文概括。", ["说出游览顺序词", "概括长文主要内容", "写 1 段动作细节"]],
  ["6/4 周四", "七八单元巩固", "人物品质和童话想象。", ["整理人物品质词", "复述 1 个童话故事变化", "列“故事新编”提纲"]],
  ["6/5 周五", "语文园地", "集中处理交流平台、词句段运用。", ["做 8 道句式/标点题", "背默日积月累", "整理 5 个易错点"]],
  ["6/6 周六", "课内小测", "用少量题检查课内掌握。", ["完成知识点 PDF 中一组练习", "核对答案并标错因", "重做 3 道同类题"]],
  ["6/7 周日", "第二周复盘", "把课内漏洞收束。", ["复述八个单元重点", "完成错题回流", "作文素材卡补齐"]],
  ["6/8 周一", "阅读概括", "训练“谁做什么、结果怎样”。", ["阅读短文 1 篇", "写 3 个概括句", "订正表达不完整的答案"]],
  ["6/9 周二", "词句理解", "从上下文解释词句。", ["找关键词和提示句", "完成 4 道词句理解题", "积累 5 个答题句式"]],
  ["6/10 周三", "人物品质", "人物题必须有事件依据。", ["阅读人物类短文", "用事例说明品质", "写 1 段人物细节"]],
  ["6/11 周四", "中心启示", "避免空话，先说文本再说自己。", ["完成启示类题 3 道", "练“文本+感受”句式", "整理 2 条生活例子"]],
  ["6/12 周五", "习作结构", "开头、经过、结尾各有任务。", ["给 1 篇旧作文列结构", "补 2 处细节", "检查标点和分段"]],
  ["6/13 周六", "习作升级", "只改一个重点，改到明显更好。", ["完成一篇 300 字习作", "按结构/细节/语言自评", "家长只给 2 条修改建议"]],
  ["6/14 周日", "第三周复盘", "阅读和习作合并检查。", ["重做本周错题", "背默易错内容", "准备模拟卷文具和时间表"]],
  ["6/15 周一", "模拟卷一", "按真实时间完成整卷。", ["完成期末测试卷（一）", "记录每部分用时", "只标错因，不马上重写"]],
  ["6/16 周二", "模拟讲评", "讲评比刷题更重要。", ["订正基础题", "重答阅读错题", "作文列修改提纲"]],
  ["6/17 周三", "薄弱点专练", "按错因选 3-5 题即可。", ["听写错词", "练同类阅读题", "复盘作文素材"]],
  ["6/18 周四", "模拟卷二", "如果时间允许做第二套，否则做半卷。", ["完成一套或半套模拟", "核对答案解析", "记录进步点"]],
  ["6/19 周五", "错题回流", "最后集中看高频错因。", ["整理 10 个高频错点", "每类重做 1 题", "背默古诗文"]],
  ["6/20 周六", "轻量巩固", "不加新难题，保持手感。", ["听写 15 个词", "口述 1 篇阅读答案", "复述 3 个作文素材"]],
  ["6/21 周日", "考前收束", "睡眠和稳定性优先。", ["检查文具", "看一遍错题本", "早睡，不再刷题"]]
];

const STORAGE_PREFIX = "g4cn-v2";
const LEGACY_CURRENT_DAY_KEY = "g4cn-current-day";
const CURRENT_DAY_KEY = `${STORAGE_PREFIX}-current-day`;

function taskTypeForText(text) {
  if (/拼音|注音|辨音/.test(text)) return "拼音";
  if (/生字|默写|听写|易错词/.test(text)) return "生字";
  if (/词语|生词/.test(text)) return "生词";
  if (/阅读|朗读|复述|口述|课文|赏析|概括/.test(text)) return "阅读";
  if (/作文|习作|素材|提纲|片段|仿写|写/.test(text)) return "习作";
  return "复盘";
}

function unitForDay(index) {
  return ["第一单元", "第二单元", "第三单元", "第四单元", "第五单元", "第六单元", "第七单元", "第八单元"][index % 8];
}

function baseTasksForDay(index) {
  const unit = unitForDay(index);
  return [
    {
      detail: "从基础总表或打印表中选 8 个，读准平舌、翘舌、前鼻、后鼻。",
      key: `pinyin-${unit}`,
      label: `${unit}：看汉字写拼音 8 个`,
      type: "拼音",
      unit
    },
    {
      detail: "按拼音提示写生字，并给其中 3 个生字组词。",
      key: `chars-${unit}`,
      label: `${unit}：生字默写 10 个`,
      type: "生字",
      unit
    },
    {
      detail: "家长读词，孩子默写；订正时把错字圈出来再写一遍。",
      key: `words-${unit}`,
      label: `${unit}：生词听写 12 个`,
      type: "生词",
      unit
    }
  ];
}

function legacyTaskToObject(text, dayIndex, taskIndex) {
  const type = taskTypeForText(text);
  return {
    detail: type === "复盘" ? "完成后勾选，第二天优先看未完成项。" : "按今日节奏完成，保留错题或修改痕迹。",
    key: `legacy-${dayIndex}-${taskIndex}-${type}`,
    label: text,
    type,
    unit: unitForDay(dayIndex)
  };
}

const days = rawDays.map(([date, title, focus, tasks], dayIndex) => ({
  date,
  focus,
  tasks: [...baseTasksForDay(dayIndex), ...tasks.map((task, taskIndex) => legacyTaskToObject(task, dayIndex, taskIndex))],
  title,
  unit: unitForDay(dayIndex)
}));

const foundationUnits = [
  {
    unit: "第一单元",
    focus: "乡村生活与景物描写。基础复习以古诗词、写景词语和多音字为主。",
    chars: "徐 xú, 篱 lí, 疏 shū, 杂 zá, 锄 chú, 剥 bō, 构 gòu, 芍 sháo, 冠 guān, 朴 pǔ, 素 sù, 率 shuài, 倘 tǎng, 附 fù, 捣 dǎo, 绘 huì, 谐 xié, 慰 wèi, 藉 jiè, 瞥 piē, 绮 qǐ, 和 hè, 谈 tán",
    write: "杂 稀 篱 蜻 蜓 蝶 宿 徐 疏 茅 檐 翁 赖 剥 构 饰 蹲 凤 序 例 率 觅 耸 踏 倘 绘 谐 寄 眠 慰 藉 卜 锐 滩 帐 烁 蝙 蝠 霸 鹰",
    words: "屋檐 构成 装饰 顺序 华丽 独特 照例 率领 踏步 倘若 和谐 催眠曲 甜蜜 梦乡 慰藉 扫荡 威力 锐利 河滩 帐子 闪烁 奇幻 蝙蝠 霸气 猫头鹰 复杂",
    wordPinyin: ["wū yán", "gòu chéng", "zhuāng shì", "shùn xù", "huá lì", "dú tè", "zhào lì", "shuài lǐng", "tà bù", "tǎng ruò", "hé xié", "cuī mián qǔ", "tián mì", "mèng xiāng", "wèi jiè", "sǎo dàng", "wēi lì", "ruì lì", "hé tān", "zhàng zi", "shǎn shuò", "qí huàn", "biān fú", "bà qì", "māo tóu yīng", "fù zá"],
    pinyin: "剥 bō 莲蓬, 清平乐 yuè, 亡 wú 赖, 率 shuài 领, 应和 hè, 慰藉 jiè, 一瞥 piē",
    recite: [
      ["《四时田园杂兴（其二十五）》", "梅子金黄杏子肥，麦花雪白菜花稀。\n日长篱落无人过，惟有蜻蜓蛱蝶飞。"],
      ["《宿新市徐公店》", "篱落疏疏一径深，树头新绿未成阴。\n儿童急走追黄蝶，飞入菜花无处寻。"],
      ["《清平乐·村居》", "茅檐低小，溪上青青草。\n醉里吴音相媚好，白发谁家翁媪？\n大儿锄豆溪东，中儿正织鸡笼。\n最喜小儿亡赖，溪头卧剥莲蓬。"],
      ["语文园地一", "《卜算子·咏梅》请回到教材原文背诵默写。"]
    ]
  },
  {
    unit: "第二单元",
    focus: "科普说明与提问策略。重点是科学词语、后鼻音和多音字“率”。",
    chars: "琥 hǔ, 珀 pò, 嗡 wēng, 脂 zhī, 拭 shì, 渗 shèn, 俯 fǔ, 番 fān, 埋 mái, 澎 péng, 湃 pài, 钝 dùn, 仅 jǐn, 描 miáo, 隧 suì, 衍 yǎn, 吨 dūn, 斤 jīn, 颅 lú, 膨 péng, 捷 jié, 栖 qī, 辟 pì, 崭 zhǎn, 乒 pīng, 乓 pāng, 拥 yōng, 杀 shā, 菌 jūn, 臭 chòu, 蔬 shū, 碳 tàn, 癌 ái, 症 zhèng, 率 lǜ, 疾 jí, 灶 zào, 揽 lǎn, 焰 yàn, 驱 qū, 践 jiàn, 党 dǎng, 施 shī, 懈 xiè, 碑 bēi",
    write: "怒 吼 脂 拭 餐 划 晌 辣 渗 挣 番 埋 刷 测 详 笨 钝 谈 鸽 毫 末 描 隧 态 吨 颅 膨 肢 翼 辟 纳 拥 箱 臭 蔬 碳 钢 隐 健 康 胞 疾 防 灶 需",
    words: "怒吼 松脂 拂拭 灰尘 美餐 晌午 热辣辣 淹没 挣扎 成千上万 冲刷 断绝 推测 详细 情形 恐龙 笨重 迟钝 鸽子 根据 末期 描绘 隧道 形态 膨大 前肢 具备 开辟 脱离 纳米 无能为力 拥有 冰箱 功能 蔬菜 材料 钢铁 隐形 健康 细胞 疾病 预防 病灶 需要 深刻",
    wordPinyin: ["nù hǒu", "sōng zhī", "fú shì", "huī chén", "měi cān", "shǎng wǔ", "rè là là", "yān mò", "zhēng zhá", "chéng qiān shàng wàn", "chōng shuā", "duàn jué", "tuī cè", "xiáng xì", "qíng xíng", "kǒng lóng", "bèn zhòng", "chí dùn", "gē zi", "gēn jù", "mò qī", "miáo huì", "suì dào", "xíng tài", "péng dà", "qián zhī", "jù bèi", "kāi pì", "tuō lí", "nà mǐ", "wú néng wéi lì", "yōng yǒu", "bīng xiāng", "gōng néng", "shū cài", "cái liào", "gāng tiě", "yǐn xíng", "jiàn kāng", "xì bāo", "jí bìng", "yù fáng", "bìng zào", "xū yào", "shēn kè"],
    pinyin: "琥珀 hǔ pò, 拂拭 shì, 渗 shèn 透, 澎湃 péng pài, 迟钝 dùn, 繁衍 yǎn, 栖 qī 息, 死亡率 lǜ",
    recite: [
      ["语文园地二《江畔独步寻花》", "黄师塔前江水东，春光懒困倚微风。\n桃花一簇开无主，可爱深红爱浅红？"]
    ]
  },
  {
    unit: "第三单元",
    focus: "现代诗与诗歌语言。重点读准诗歌词语，区分“曝、晕”等多音字语境。",
    chars: "漫 màn, 涛 tāo, 挤 jǐ, 叉 chā, 绣 xiù, 潇 xiāo, 绽 zhàn, 朦 méng, 胧 lóng, 晖 huī, 徜 cháng, 徉 yáng, 姗 shān, 炫 xuàn, 垢 gòu, 怯 qiè, 曝 pù, 赤 chì, 涉 shè, 晕 yùn, 屈 qū, 渊 yuān, 孟 mèng, 甫 fǔ, 韩 hán, 愈 yù, 禹 yǔ, 锡 xī, 仲 zhòng, 龚 gōng",
    write: "繁 漫 灭 藤 萝 膝 涛 躲 瓶 挤 叉 挥 桦 涂 茸 绣 潇 穗 朦 胧 寂 霞 抹",
    words: "繁星 藤萝 波涛 墨绿 嫩绿 集中 交叉 教练 指挥 整齐 节拍 白桦 毛茸茸 潇洒 朦胧 寂静 朝霞",
    wordPinyin: ["fán xīng", "téng luó", "bō tāo", "mò lǜ", "nèn lǜ", "jí zhōng", "jiāo chā", "jiào liàn", "zhǐ huī", "zhěng qí", "jié pāi", "bái huà", "máo róng róng", "xiāo sǎ", "méng lóng", "jì jìng", "zhāo xiá"],
    pinyin: "藤萝 téng luó, 波涛 tāo, 交叉 chā, 潇洒 xiāo, 朦胧 méng lóng, 曝 pù 晒, 晕 yùn 车",
    recite: [
      ["第9课《短诗三首》", "现代诗请回到教材原文背诵三首《繁星》。"],
      ["第10课《绿》", "现代诗请回到教材原文背诵，重点默写颜色词和节奏。"],
      ["语文园地三", "三句关于诗的名言请按教材原文背诵。"]
    ]
  },
  {
    unit: "第四单元",
    focus: "动物描写与作者情感。重点是多音字、四字词语和拟声词。",
    chars: "虑 lǜ, 职 zhí, 屏 bǐng, 蹭 cèng, 稿 gǎo, 腔 qiāng, 殃 yāng, 折 shé, 疙 gē, 瘩 da, 侮 wǔ, 恶 wù, 撮 zuǒ, 聋 lóng, 雏 chú, 啄 zhuó, 伏 fú, 哼 hēng, 啼 tí, 凄 qī, 郑 zhèng, 看 kān, 嚣 xiāo, 吠 fèi, 促 cù, 颇 pō, 奢 shē, 侈 chǐ, 苟 gǒu, 侍 shì, 窥 kuī, 伺 sì, 供 gōng, 肝 gān, 秆 gǎn, 俏 qiào, 峭 qiào, 浦 pǔ, 哺 bǔ, 轴 zhóu, 届 jiè",
    write: "忧 虑 贪 职 屏 蹭 稿 腔 解 闷 蛇 遭 殃 盆 勃 讨 厌 坝 忠 毒 绩 孵 警 戒 歪 咕 汤 掘 伏 啼 吠 促 颇 剧 苟 譬 侍 馆 附 脾 敏 捷 昂 供 添",
    words: "呼唤 响动 尽职 屏息 稿纸 梅花 解闷 勇猛 满月 淘气 讨厌 理由 心事 反抗 忠厚 毒手 成绩 警戒 预备 汤圆 即将 姿态 高傲 狂吹 局促 京剧 一丝不苟 譬如 侍候 饭馆 附近 脾气 敏捷 空空如也 昂首 供养",
    wordPinyin: ["hū huàn", "xiǎng dòng", "jìn zhí", "bǐng xī", "gǎo zhǐ", "méi huā", "jiě mèn", "yǒng měng", "mǎn yuè", "táo qì", "tǎo yàn", "lǐ yóu", "xīn shì", "fǎn kàng", "zhōng hòu", "dú shǒu", "chéng jì", "jǐng jiè", "yù bèi", "tāng yuán", "jí jiāng", "zī tài", "gāo ào", "kuáng chuī", "jú cù", "jīng jù", "yī sī bù gǒu", "pì rú", "shì hòu", "fàn guǎn", "fù jìn", "pí qì", "mǐn jié", "kōng kōng rú yě", "áng shǒu", "gōng yǎng"],
    pinyin: "屏 bǐng 息, 枝折 shé 花落, 可恶 wù, 一撮 zuǒ 毛, 看 kān 守, 窥伺 sì, 供 gōng 养",
    recite: [
      ["语文园地四《蜂》", "无论平地与山尖，无限风光尽被占。\n采得百花成蜜后，为谁辛苦为谁甜？"]
    ]
  },
  {
    unit: "第五单元",
    focus: "游览顺序与景物变化。重点听写景物词和游记路线词。",
    chars: "扩 kuò, 荷 hè, 刹 chà, 镶 xiāng, 浙 zhè, 簇 cù, 兀 wù, 臀 tún, 漆 qī, 蜿 wān, 蜒 yán",
    write: "扩 范 努 刹 烂 替 镶 紫 仅 浙 罗 杜 鹃 窄 郁 肩 臀 移 额 陆 乳 笋 端 源",
    words: "清静 扩大 范围 努力 刹那 夺目 分辨 灿烂 不仅 杜鹃 气势 聚集 拥挤 心情 脚跟 移动 昏暗 挤压 额角 登陆 宽广 石钟乳 石笋 观赏",
    wordPinyin: ["qīng jìng", "kuò dà", "fàn wéi", "nǔ lì", "chà nà", "duó mù", "fēn biàn", "càn làn", "bù jǐn", "dù juān", "qì shì", "jù jí", "yōng jǐ", "xīn qíng", "jiǎo gēn", "yí dòng", "hūn àn", "jǐ yā", "é jiǎo", "dēng lù", "kuān guǎng", "shí zhōng rǔ", "shí sǔn", "guān shǎng"],
    pinyin: "重荷 hè, 一刹 chà 那, 镶 xiāng 边, 浙江 zhè, 一簇 cù, 突兀 wù, 臀 tún 部, 蜿蜒 wān yán",
    recite: [
      ["第16课《海上日出》", "现代课文请回到教材原文背诵指定段落，常见要求为重点段落默写。"]
    ]
  },
  {
    unit: "第六单元",
    focus: "长文章概括与成长故事。重点是抗战故事词语、人物描写词语。",
    chars: "晋 jìn, 扭 niǔ, 码 mǎ, 囊 nāng, 姥 lǎo, 吧 bā, 塞 sāi, 哇 wā, 栓 shuān, 捆 kǔn, 绑 bǎng, 劫 jié, 枕 zhěn, 柜 guì, 呜 wū, 扒 bā, 尸 shī, 徽 huī, 谜 mí, 拇 mǔ, 唇 chún, 尚 shàng, 倔 jué, 强 jiàng, 嘱 zhǔ, 咐 fù, 沮 jǔ, 绪 xù, 嘹 liáo, 悉 xī, 妨 fáng, 济 jǐ, 搓 cuō, 葵 kuí, 祈 qí, 遗 yí, 憾 hàn, 污 wū, 屑 xiè",
    write: "晋 炕 铅 迈 鸣 栓 胳 膊 劫 绸 扒 敌 尸 趁 慌",
    words: "芦花 发愣 铅笔 枪栓 胳膊 劫难 鬼脸 戒指 绸子 敌人 尸首 防备 慌忙",
    wordPinyin: ["lú huā", "fā lèng", "qiān bǐ", "qiāng shuān", "gē bo", "jié nàn", "guǐ liǎn", "jiè zhǐ", "chóu zi", "dí rén", "shī shǒu", "fáng bèi", "huāng máng"],
    pinyin: "行囊 nāng, 塞 sāi 在怀里, 扒 bā 开, 安徽 huī, 倔强 jué jiàng, 嘱咐 zhǔ fù, 济 jǐ 济一堂",
    recite: [
      ["语文园地六《独坐敬亭山》", "众鸟高飞尽，孤云独去闲。\n相看两不厌，只有敬亭山。"]
    ]
  },
  {
    unit: "第七单元",
    focus: "人物品质与古诗文。背诵量最大，建议分三天默写。",
    chars: "芙 fú, 蓉 róng, 洛 luò, 单 chán, 遁 dùn, 砚 yàn, 乾 qián, 坤 kūn, 恭 gōng, 勤 qín, 焉 yān, 杵 chǔ, 卒 zú, 脉 mài, 估 gū, 剖 pōu, 混 hùn, 汹 xiōng, 维 wéi, 械 xiè, 卑 bēi, 岗 gǎng, 宰 zǎi, 措 cuò, 遣 qiǎn, 梭 suō, 役 yì, 屡 lǚ, 摧 cuī, 膛 táng, 蔼 ǎi, 慷 kāng, 慨 kǎi, 徘 pái, 徊 huái, 惧 jù, 锲 qiè, 躁 zào, 焚 fén",
    write: "芙 蓉 洛 壶 雁 砚 乾 坤 囊 萤 恭 勤 博 贫 焉 逢 卒 伦 腹 剖 窟 窿 混 嘶 维 秩 卑 岗 宰 措 遣 践",
    words: "芙蓉 洛阳 玉壶 大雁 砚台 乾坤 囊萤 恭勤 博学 贫穷 相逢 卒业 行驶 凌晨 窟窿 混乱 维持 秩序 岗位 主宰 调遣 践行",
    wordPinyin: ["fú róng", "luò yáng", "yù hú", "dà yàn", "yàn tái", "qián kūn", "náng yíng", "gōng qín", "bó xué", "pín qióng", "xiāng féng", "zú yè", "xíng shǐ", "líng chén", "kū long", "hùn luàn", "wéi chí", "zhì xù", "gǎng wèi", "zhǔ zǎi", "diào qiǎn", "jiàn xíng"],
    pinyin: "芙蓉 fú róng, 单 chán 于, 砚 yàn 台, 乾坤 qián kūn, 焉 yān, 卒 zú 业, 剖 pōu 开, 调遣 qiǎn",
    recite: [
      ["《芙蓉楼送辛渐》", "寒雨连江夜入吴，平明送客楚山孤。\n洛阳亲友如相问，一片冰心在玉壶。"],
      ["《塞下曲》", "月黑雁飞高，单于夜遁逃。\n欲将轻骑逐，大雪满弓刀。"],
      ["《墨梅》", "我家洗砚池头树，朵朵花开淡墨痕。\n不要人夸好颜色，只留清气满乾坤。"],
      ["《囊萤夜读》", "胤恭勤不倦，博学多通。家贫不常得油，夏月则练囊盛数十萤火以照书，以夜继日焉。"],
      ["《铁杵成针》", "磨针溪，在象耳山下。世传李太白读书山中，未成，弃去。过是溪，逢老媪方磨铁杵。问之，曰：“欲作针。”太白感其意，还卒业。"],
      ["语文园地七", "天行健，君子以自强不息。\n胜人者有力，自胜者强。\n不怨天，不尤人。\n生于忧患而死于安乐。"]
    ]
  },
  {
    unit: "第八单元",
    focus: "童话想象与故事新编。重点是童话词语、动作词和近义字辨析。",
    chars: "妖 yāo, 矩 jǔ, 乖 guāi, 撵 niǎn, 丫 yā, 拽 zhuài, 冲 chòng, 瘦 shòu, 允 yǔn, 砌 qì, 啸 xiào, 缕 lǚ, 凋 diāo, 覆 fù, 叱 chì, 颊 jiá, 港 gǎng, 宴 yàn, 睫 jié, 婚 hūn, 讯 xùn, 挽 wǎn, 圣 shèng, 仪 yí, 帜 zhì, 陈 chén, 垫 diàn, 恒 héng, 抚 fǔ",
    write: "介 绍 妖 矩 乖 撵 烫 溜 丫 拽 福 舔 葵 瘦 罢 硕 允 砌 牌 禁 惩 踪 啸 私 颊 拆",
    words: "介绍 声明 妖怪 规矩 劈面 幸福 向日葵 柔嫩 丰硕 允许 禁止 踪迹 呼啸 始终 吼叫 自私 举动 脸颊 凶狠 拆除",
    wordPinyin: ["jiè shào", "shēng míng", "yāo guài", "guī ju", "pī miàn", "xìng fú", "xiàng rì kuí", "róu nèn", "fēng shuò", "yǔn xǔ", "jìn zhǐ", "zōng jì", "hū xiào", "shǐ zhōng", "hǒu jiào", "zì sī", "jǔ dòng", "liǎn jiá", "xiōng hěn", "chāi chú"],
    pinyin: "规矩 jǔ, 撵 niǎn 走, 拽 zhuài 住, 冲 chòng 着, 允许 yǔn, 砌 qì 墙, 一缕 lǚ, 叱 chì 责",
    recite: [
      ["语文园地八", "少年不知勤学苦，老来方知读书迟。\n一日读书一日功，一日不读十日空。\n学习不怕根底浅，只要迈步总不迟。\n书山有路勤为径，学海无涯苦作舟。"]
    ]
  }
];

const polyphoneByUnit = {
  "第一单元": [
    ["剥", ["bō 剥削/剥夺", "bāo 剥皮/剥花生"]],
    ["乐", ["yuè 音乐/清平乐", "lè 快乐/乐意"]],
    ["亡", ["wú 亡赖/同“无”", "wáng 死亡/灭亡"]],
    ["率", ["shuài 率领/率队", "lǜ 效率/圆周率"]],
    ["和", ["hè 应和/附和", "hé 和平/和气", "huó 和面", "huò 和药", "hú 和牌"]]
  ],
  "第二单元": [
    ["埋", ["mái 埋藏/掩埋", "mán 埋怨"]],
    ["划", ["huá 划船/划算", "huà 计划/划分"]],
    ["挣", ["zhēng 挣扎", "zhèng 挣钱/挣脱"]],
    ["率", ["lǜ 死亡率/效率", "shuài 率领/表率"]],
    ["臭", ["chòu 臭味/臭气", "xiù 乳臭/铜臭"]]
  ],
  "第三单元": [
    ["曝", ["pù 曝晒/一曝十寒", "bào 曝光/曝露"]],
    ["晕", ["yùn 晕车/红晕", "yūn 晕倒/头晕"]],
    ["叉", ["chā 交叉/叉子", "chǎ 叉着腿", "chà 劈叉"]]
  ],
  "第四单元": [
    ["屏", ["bǐng 屏息/屏气", "píng 屏风/屏幕"]],
    ["折", ["shé 枝折花落/折本", "zhé 折断/曲折", "zhē 折腾"]],
    ["恶", ["wù 可恶/厌恶", "è 凶恶/恶劣", "ě 恶心"]],
    ["看", ["kān 看守/看家", "kàn 看见/观看"]],
    ["供", ["gōng 供养/供给", "gòng 供品/口供"]]
  ],
  "第五单元": [
    ["荷", ["hè 重荷/负荷", "hé 荷花/荷叶"]],
    ["刹", ["chà 一刹那/古刹", "shā 刹车"]],
    ["仅", ["jǐn 不仅/仅有", "jìn 将近/几近"]]
  ],
  "第六单元": [
    ["囊", ["nāng 行囊/鼓囊囊", "náng 锦囊/囊括"]],
    ["塞", ["sāi 塞住/塞进", "sài 边塞/塞外", "sè 堵塞/闭塞"]],
    ["扒", ["bā 扒开/扒拉", "pá 扒手/扒土"]],
    ["强", ["jiàng 倔强", "qiáng 强大/坚强", "qiǎng 勉强/强迫"]],
    ["济", ["jǐ 济济一堂/人才济济", "jì 救济/经济"]]
  ],
  "第七单元": [
    ["单", ["chán 单于", "dān 单独/简单", "shàn 单县"]],
    ["脉", ["mài 脉搏/山脉", "mò 脉脉含情"]],
    ["估", ["gū 估计/估量", "gù 估衣"]],
    ["混", ["hùn 混乱/混合", "hún 混水摸鱼"]]
  ],
  "第八单元": [
    ["冲", ["chòng 冲着/冲劲", "chōng 冲锋/冲洗"]],
    ["禁", ["jìn 禁止/禁令", "jīn 禁受/不禁"]],
    ["溜", ["liū 溜走/溜冰", "liù 一溜烟/水溜"]]
  ]
};

const phaseDetail = document.querySelector("#phaseDetail");
const phaseTabs = document.querySelectorAll(".phase-tab");
const unitTabs = document.querySelector(".unit-tabs");
const foundationTitle = document.querySelector("#foundationTitle");
const foundationFocus = document.querySelector("#foundationFocus");
const foundationCount = document.querySelector("#foundationCount");
const charBank = document.querySelector("#charBank");
const dictationBank = document.querySelector("#dictationBank");
const reciteBank = document.querySelector("#reciteBank");
const pinyinBank = document.querySelector("#pinyinBank");
const polyphoneBank = document.querySelector("#polyphoneBank");
const printableSheet = document.querySelector("#printableSheet");
const printSheet = document.querySelector("#printSheet");
const daySelect = document.querySelector("#daySelect");
const taskList = document.querySelector("#taskList");
const dayTitle = document.querySelector("#dayTitle");
const dayFocus = document.querySelector("#dayFocus");
const prevDay = document.querySelector("#prevDay");
const nextDay = document.querySelector("#nextDay");

let currentDay = Number(localStorage.getItem(CURRENT_DAY_KEY) || localStorage.getItem(LEGACY_CURRENT_DAY_KEY) || 0);

function splitItems(text) {
  return text.split(/\s+/).filter(Boolean);
}

function parseChars(text) {
  return text.split(",").map((item) => {
    const [char, ...pinyin] = item.trim().split(/\s+/);
    return { char, pinyin: pinyin.join(" ") };
  });
}

function normalizePinyin(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ü/g, "v")
    .replace(/[^a-zA-Zv]/g, "")
    .toLowerCase();
}

function soundTags(syllable) {
  const plain = normalizePinyin(syllable);
  const tags = [];
  if (/^(zh|ch|sh|r)/.test(plain)) tags.push(["翘", "翘舌音"]);
  else if (/^[zcs]/.test(plain)) tags.push(["平", "平舌音"]);
  if (/ng$/.test(plain)) tags.push(["后", "后鼻音"]);
  else if (/n$/.test(plain)) tags.push(["前", "前鼻音"]);
  return tags;
}

function markPinyin(text) {
  return text.replace(/[A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]+/g, (syllable) => {
    const tags = soundTags(syllable);
    if (!tags.length) return syllable;
    const label = tags.map(([short]) => short).join("/");
    const title = tags.map(([, name]) => name).join("、");
    return `<span class="sound-alert" title="${title}">${syllable}<em>${label}</em></span>`;
  });
}

function soundBadgeHTML(text) {
  const found = new Map();
  text.replace(/[A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]+/g, (syllable) => {
    soundTags(syllable).forEach(([short, name]) => found.set(short, name));
    return syllable;
  });
  if (!found.size) return "读准声调";
  return Array.from(found)
    .map(([short, name]) => `<span class="print-sound-tag" title="${name}">${short}</span>`)
    .join("");
}

function parsePinyinItems(text) {
  return text.split(",").map((item) => {
    const tokens = item.trim().split(/\s+/).filter(Boolean);
    const firstPinyinIndex = tokens.findIndex((token) => /[A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/.test(token));
    if (firstPinyinIndex < 0) return { prompt: item.trim(), answer: "" };
    const answerTokens = [];
    let index = firstPinyinIndex;
    while (index < tokens.length && /^[A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]+$/.test(tokens[index])) {
      answerTokens.push(tokens[index]);
      index += 1;
    }
    const before = tokens.slice(0, firstPinyinIndex).join("");
    const after = tokens.slice(index).join("");
    const prompt = after ? `${before}（${after}）` : before;
    return { prompt, answer: answerTokens.join(" ") };
  });
}

function buildPinyinTestItems(unit) {
  const easyItems = parsePinyinItems(unit.pinyin).map((item) => ({
    ...item,
    kind: "easy"
  }));
  const polyphoneItems = (polyphoneByUnit[unit.unit] || []).map(([char, readings]) => ({
    answer: readings.join("；"),
    count: readings.length,
    kind: "polyphone",
    prompt: `多音字：${char}`
  }));
  return [...easyItems, ...polyphoneItems];
}

function validateFoundationData() {
  foundationUnits.forEach((unit) => {
    const words = splitItems(unit.words);
    if (!Array.isArray(unit.wordPinyin) || words.length !== unit.wordPinyin.length) {
      console.error(
        `${unit.unit} 词语与拼音数量不一致：词语 ${words.length} 个，拼音 ${unit.wordPinyin?.length || 0} 个`
      );
    }
  });
}

function taskStorageKey(day, task) {
  return `${STORAGE_PREFIX}-task-${day.date}-${task.key}`;
}

function legacyTaskStorageKey(dayIndex, taskIndex) {
  return `task-${dayIndex}-${taskIndex}`;
}

function isTaskChecked(day, dayIndex, task, taskIndex) {
  const key = taskStorageKey(day, task);
  if (localStorage.getItem(key) === "true") return true;
  const legacyIndex = taskIndex - 3;
  if (legacyIndex >= 0 && localStorage.getItem(legacyTaskStorageKey(dayIndex, legacyIndex)) === "true") {
    localStorage.setItem(key, "true");
    return true;
  }
  return false;
}

function renderPrintRows(items, type) {
  return items
    .map((item, index) => {
      if (type === "char") {
        return `<tr><th>${index + 1}</th><td>${markPinyin(item.pinyin)}</td><td></td><td></td><td></td></tr>`;
      }
      if (type === "pinyin") {
        if (item.kind === "polyphone") {
          return `
            <tr class="polyphone-test-row">
              <th>${index + 1}</th>
              <td>${item.prompt}</td>
              <td>读音+组词：__________；__________</td>
              <td>写出 ${item.count} 个读音并分别组词<span class="teacher-answer">参考：${markPinyin(item.answer)}</span></td>
            </tr>
          `;
        }
        return `
          <tr>
            <th>${index + 1}</th>
            <td>${item.prompt}</td>
            <td></td>
            <td>${soundBadgeHTML(item.answer)}<span class="teacher-answer">答案：${markPinyin(item.answer)}</span></td>
          </tr>
        `;
      }
      return `
        <tr>
          <th>${index + 1}</th>
          <td>${markPinyin(item.pinyin)}</td>
          <td></td>
          <td></td>
          <td class="teacher-answer">答案：${item.word}</td>
        </tr>
      `;
    })
    .join("");
}

function renderPrintableSheet(unit) {
  const chars = parseChars(unit.chars);
  const words = splitItems(unit.words).map((word, index) => ({
    pinyin: unit.wordPinyin[index],
    word
  }));
  const pinyinItems = buildPinyinTestItems(unit);
  printableSheet.innerHTML = `
    <section class="print-page">
      <h2>${unit.unit} 生字默写表</h2>
      <p>姓名：__________ 日期：__________ 用时：__________ 正确率：__________</p>
      <table class="print-table char-test">
        <thead><tr><th>序号</th><th>拼音提示</th><th>写生字</th><th>组词</th><th>订正</th></tr></thead>
        <tbody>${renderPrintRows(chars, "char")}</tbody>
      </table>
    </section>
    <section class="print-page">
      <h2>${unit.unit} 生词听写表</h2>
      <p>姓名：__________ 日期：__________ 用时：__________ 正确率：__________</p>
      <table class="print-table word-test">
        <thead><tr><th>序号</th><th>拼音提示</th><th>写词语</th><th>订正</th><th class="teacher-answer">参考答案</th></tr></thead>
        <tbody>${renderPrintRows(words, "word")}</tbody>
      </table>
    </section>
    <section class="print-page">
      <h2>${unit.unit} 拼音专项考核表</h2>
      <p>姓名：__________ 日期：__________ 重点检查平舌、翘舌、前鼻、后鼻和多音字。</p>
      <table class="print-table pinyin-test">
        <thead><tr><th>序号</th><th>汉字/词语</th><th>写拼音</th><th>辨音标记/订正</th></tr></thead>
        <tbody>${renderPrintRows(pinyinItems, "pinyin")}</tbody>
      </table>
    </section>
  `;
}

function renderFoundation(index) {
  const unit = foundationUnits[index];
  const chars = parseChars(unit.chars);
  foundationTitle.textContent = unit.unit;
  foundationFocus.textContent = unit.focus;
  foundationCount.textContent = `${chars.length} 项`;
  charBank.innerHTML = chars
    .map((item) => {
      return `<span class="char-chip"><strong>${item.char}</strong><span>${markPinyin(item.pinyin)}</span></span>`;
    })
    .join("") + `<div class="recite-item"><strong>会写字</strong><small>${unit.write}</small></div>`;
  dictationBank.innerHTML = splitItems(unit.words).map((word) => `<span class="word-chip">${word}</span>`).join("");
  pinyinBank.innerHTML = unit.pinyin.split(",").map((word) => `<span class="word-chip">${markPinyin(word.trim())}</span>`).join("");
  polyphoneBank.innerHTML = (polyphoneByUnit[unit.unit] || [])
    .map(([char, readings]) => {
      return `
        <div class="polyphone-item">
          <strong>${char}</strong>
          <div class="polyphone-readings">${readings.map((reading) => `<span>${markPinyin(reading)}</span>`).join("")}</div>
        </div>
      `;
    })
    .join("");
  reciteBank.innerHTML = unit.recite
    .map(([title, text]) => `<div class="recite-item"><strong>${title}</strong><p class="recite-text">${text}</p></div>`)
    .join("");
  renderPrintableSheet(unit);
  document.querySelectorAll(".unit-tab").forEach((tab, tabIndex) => tab.classList.toggle("active", tabIndex === index));
}

function renderPhase(index) {
  const phase = phases[index];
  phaseDetail.innerHTML = `
    <div>
      <h3>${phase.title}</h3>
      <p>${phase.aim}</p>
      <div class="phase-meta">
        <span>${phase.dates}</span>
        ${phase.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <ol class="phase-list">
        ${phase.actions.map((action) => `<li>${action}</li>`).join("")}
      </ol>
    </div>
    <div class="rubric">
      ${phase.rubric.map(([level, text]) => `<div><strong>${level} 档自评</strong>${text}</div>`).join("")}
    </div>
  `;
  phaseTabs.forEach((tab, tabIndex) => tab.classList.toggle("active", tabIndex === index));
}

function renderDay(index) {
  const day = days[index];
  currentDay = index;
  localStorage.setItem(CURRENT_DAY_KEY, String(index));
  daySelect.value = String(index);
  dayTitle.textContent = `${day.date}｜${day.title}`;
  dayFocus.textContent = day.focus;
  taskList.innerHTML = day.tasks
    .map((task, taskIndex) => {
      const id = taskStorageKey(day, task);
      const checked = isTaskChecked(day, index, task, taskIndex) ? "checked" : "";
      return `
        <div class="task-item" data-task-type="${task.type}">
          <input id="${id}" type="checkbox" ${checked} />
          <div>
            <label for="${id}"><span class="task-type">${task.type}</span>${task.label}</label>
            <p>${task.detail}</p>
          </div>
        </div>
      `;
    })
    .join("");
}

phaseTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderPhase(Number(tab.dataset.phase)));
});

days.forEach((day, index) => {
  const option = document.createElement("option");
  option.value = String(index);
  option.textContent = day.date;
  daySelect.appendChild(option);
});

foundationUnits.forEach((unit, index) => {
  const button = document.createElement("button");
  button.className = "unit-tab";
  button.type = "button";
  button.textContent = unit.unit;
  button.addEventListener("click", () => renderFoundation(index));
  unitTabs.appendChild(button);
});

validateFoundationData();

daySelect.addEventListener("change", (event) => renderDay(Number(event.target.value)));
prevDay.addEventListener("click", () => renderDay(Math.max(0, currentDay - 1)));
nextDay.addEventListener("click", () => renderDay(Math.min(days.length - 1, currentDay + 1)));
printSheet.addEventListener("click", () => window.print());
taskList.addEventListener("change", (event) => {
  if (event.target.matches("input[type='checkbox']")) {
    localStorage.setItem(event.target.id, String(event.target.checked));
  }
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("离线缓存注册失败：", error);
    });
  });
}

renderPhase(0);
renderFoundation(0);
renderDay(Math.min(currentDay, days.length - 1));
