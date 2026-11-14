# 作战看板

人格测试大全（账号「虾说说」）的进度页：正在做什么、Mark 做什么、Cursor 做什么。

纯静态，无构建。改 [js/data.js](js/data.js) 就是更新看板。

## 本地

双击 `index.html`，或：

```bash
npx --yes serve .
```

## 部署

GitHub Pages。仓库需 Public。

1. 推到 GitHub
2. Settings → Pages → Source 选 GitHub Actions（本仓库已带 `.github/workflows/deploy.yml`）
3. 地址：`https://chenzyishere.github.io/xhs-board/`

## 飞书看稿（手机）

稿写进 [today.json](today.json)，推到 GitHub 后自动发到飞书群。你在手机飞书里复制去小红书发。

### 一次性设置

1. 手机飞书建一个只有自己的群，名字随意，例如「虾说说看稿」
2. 群设置 → 机器人 → 添加自定义机器人  
   安全设置选 **自定义关键词**，填：`人格图鉴`（每条消息都会带这四个字）
3. 复制 webhook 地址
4. 打开 https://github.com/Chenzyishere/xhs-board/settings/secrets/actions  
   新建 `FEISHU_WEBHOOK`，把地址贴进去
5. 仓库 Actions 里手动跑一次 **Send today's copy to Feishu**，手机应收到今天的李白 / 王阳明

本地试发（不要把地址写进代码）：

```bash
$env:FEISHU_WEBHOOK="你的webhook"
node tools/send-feishu.js
```

### 之后怎么用

- 定时写稿仍由 Cursor 云端代理做（每天清晨改 `today.json` 并推送）
- 你只在飞书里看、复制、去小红书点发布
- 飞书里回消息我暂时收不到；要改标题或重写，还是在 Cursor 说一句

定时代理请在 Cursor 的 **Agents 窗口** 里建：每天 6:30（北京时间）写当天两软一硬，正面、带数字、不写摆烂，更新 `today.json` 和看板后推送。

## 谁改什么

- **Mark**：飞书看稿、小红书发布、回评、周末把四个数告诉 Cursor
- **Cursor**：写软文、改 H5 文案、改 `today.json` / `js/data.js`，推送后飞书自动提醒
