# 作战看板

人格测试大全（账号「虾说说」）的进度页：正在做什么、智彦做什么、Cursor 做什么。

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

## 谁改什么

- **智彦**：发布、回评、看后台数字，周末把四个数告诉 Cursor
- **Cursor**：写软文、改 H5 文案、改 `js/data.js` 让看板跟对话一致
