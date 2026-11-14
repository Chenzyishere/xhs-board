window.BOARD = {
  updated: "2026-11-14 15:55",
  account: "虾说说",
  fans: 7,
  sellMode: "个人售卖",
  focus: "看稿改走飞书。Mark 建私人群自定义机器人，把 webhook 填进 GitHub Secret FEISHU_WEBHOOK。",
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
      title: "现在发：李白 · 勇往直前型",
      detail: "推荐标题「李白替我把『我有用』说出口了」。正面，不挂商品。发完守评 15 分钟。",
    },
    {
      title: "傍晚发：王阳明 · 破内耗型",
      detail: "推荐标题「王阳明替我把想通了就干做完了」。封面在 cover-maker.html。",
    },
    {
      title: "看四个数，周末告诉我",
      detail: "粉数、笔记互动、商品点击、结果页有没有人说去晒。分享率不行我改文案。",
    },
    {
      title: "接飞书看稿（一次性）",
      detail: "建「虾说说看稿」私人群 → 自定义机器人关键词「人格图鉴」→ GitHub Secret 填 FEISHU_WEBHOOK → Actions 手动跑一次试收。",
    },
  ],
  me: [
    {
      title: "周六软文已改正面定稿",
      detail: "李白 + 王阳明。之后软文不写摆烂、摸鱼、不负责。",
    },
    {
      title: "飞书通道已接脚本，等 webhook",
      detail: "today.json 一推送就发飞书。定时写稿要在 Agents 窗口建每天 6:30 的代理。",
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
