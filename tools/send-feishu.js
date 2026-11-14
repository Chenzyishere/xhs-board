const fs = require("fs");
const path = require("path");

const webhook = process.env.FEISHU_WEBHOOK;
if (!webhook) {
  console.error("缺少 FEISHU_WEBHOOK。飞书群自定义机器人的 webhook 填到环境变量或 GitHub Secret。");
  process.exit(1);
}

const file = process.argv[2] || path.join(__dirname, "..", "today.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

function slotCard(slot, date) {
  const md = [
    "**" + slot.time + " · " + slot.type + " · " + slot.persona + "**",
    "",
    "推荐标题：" + slot.title,
    "",
    "**封面**",
    slot.cover,
    "",
    "**正文**",
    slot.body,
    "",
    "**标签**",
    slot.tags,
    "",
    "**首评**",
    slot.comment,
  ].join("\n");

  return {
    msg_type: "interactive",
    card: {
      header: {
        template: slot.type === "硬广" ? "red" : "turquoise",
        title: {
          tag: "plain_text",
          content: "人格图鉴 " + date + " · " + slot.time,
        },
      },
      elements: [
        { tag: "div", text: { tag: "lark_md", content: md } },
        {
          tag: "note",
          elements: [
            {
              tag: "plain_text",
              content: "复制到小红书发。软文不挂商品。要改稿在 Cursor 回一句即可。",
            },
          ],
        },
      ],
    },
  };
}

async function post(payload) {
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  const ok = json.code === 0 || json.StatusCode === 0 || json.StatusMessage === "success";
  if (!ok) {
    throw new Error("飞书返回 " + JSON.stringify(json));
  }
}

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

(async function main() {
  const lines = (data.slots || []).map(function (slot) {
    return "· " + slot.time + "  " + slot.title;
  });
  await post({
    msg_type: "text",
    content: {
      text:
        "人格图鉴 " +
        data.date +
        " 看稿\n" +
        lines.join("\n") +
        (data.notes ? "\n" + data.notes : ""),
    },
  });
  for (const slot of data.slots || []) {
    await sleep(400);
    await post(slotCard(slot, data.date));
  }
  console.log("已发到飞书：" + (data.slots || []).length + " 条");
})().catch(function (err) {
  console.error(err.message || err);
  process.exit(1);
});
