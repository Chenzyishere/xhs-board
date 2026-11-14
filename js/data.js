window.BOARD = {
  updated: "2026-11-14",
  account: "虾说说",
  fans: 7,
  sellMode: "个人售卖",
  focus: "本周只保日更三时段。产品已经能用，增长靠发出去，不靠再加功能。",
  projects: [
    {
      name: "历史人物测试",
      status: "已上线",
      statusKind: "live",
      url: "https://chenzyishere.github.io/xhs-history-test/",
      note: "店铺密码 SHUO16 · 自动发货",
    },
    {
      name: "分院帽测试",
      status: "已上线",
      statusKind: "live",
      url: "https://chenzyishere.github.io/xhs-harry-potter-test/",
      note: "店铺密码 FENYUAN · 收费模式走通用词",
    },
    {
      name: "人格图鉴日更",
      status: "进行中",
      statusKind: "now",
      url: "",
      note: "软 2 : 硬 1 · 8–9 / 12–13 / 20–21",
    },
  ],
  you: [
    {
      title: "确认周一三帖发出没有",
      detail: "苏轼 08:22、曹操 12:18、历史硬广 20:25。没发就按三个时段补发。",
    },
    {
      title: "每天三个点点「发布」",
      detail: "早软文、午软文、晚硬广。硬广才挂个人售卖。发完守评 15 分钟，回得像人。",
    },
    {
      title: "看四个数，周末告诉我",
      detail: "粉数、笔记互动、商品点击、结果页有没有人说去晒。分享率不行我改文案。",
    },
    {
      title: "封面三选一先测",
      detail: "悬念 / 结果 / 痛点各发一条，看哪种起量。配图用极简卡通，不用古画剧照。",
    },
  ],
  me: [
    {
      title: "写下一条可直接发的软文",
      detail: "人格标签 + 8 个标题 + 封面文案 + 正文 + 标签 + 首评。软文不推测试。",
    },
    {
      title: "把周二到周日的选题骨架补齐",
      detail: "先定会挨反驳的人格标签，再写。你点头后我再出定稿。",
    },
    {
      title: "分享率不行就改结果文案",
      detail: "动 data.js 的 tagline / traits，不动计分和页面结构。",
    },
    {
      title: "对话结束后更新这块看板",
      detail: "改 js/data.js 的「你要干 / 我要干 / 正在进行」，保持和实际情况一致。",
    },
  ],
  later: [
    { title: "电子资源 / 店铺", reason: "大约要 1000 粉 + 30 条笔记。继续个人售卖。" },
    { title: "OSS + CDN + 备案", reason: "单点没跑通就迁基建，等于放大没验证的东西。" },
    { title: "矩阵号、批量封面工具", reason: "第二个题材有稳定单量后再开。" },
    { title: "一单一码网关", reason: "店铺密码泄露后再上。现在固定密码够用。" },
    { title: "买粉 / 闲鱼解锁粉丝", reason: "不做。" },
  ],
  rules: [
    ["你发，我写", "你负责账号、发布、回评。我负责文案、代码、看板。"],
    ["进行中不超过 3 件", "本周主战场只有日更。别平行开基建。"],
    ["软文不提测试", "好奇留给主页和评论。硬广才挂商品。"],
    ["看板是唯一事实源", "进度变了就改 data.js，不要另开一份备忘。"],
  ],
};
