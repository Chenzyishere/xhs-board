(function () {
  const board = window.BOARD;
  if (!board) return;

  const $ = (id) => document.getElementById(id);

  $("kicker").textContent = board.account + " · 人格测试大全";
  $("lede").textContent = board.focus;
  $("meta").textContent =
    "更新 " + board.updated + "  ·  " + board.fans + " 粉  ·  " + board.sellMode;

  $("projects").innerHTML = board.projects
    .map(function (p) {
      const name = p.url
        ? '<a href="' + escapeAttr(p.url) + '" target="_blank" rel="noreferrer">' + escapeHtml(p.name) + "</a>"
        : escapeHtml(p.name);
      return (
        '<article class="project">' +
        '<p class="status status-' +
        escapeAttr(p.statusKind) +
        '">' +
        escapeHtml(p.status) +
        "</p>" +
        "<h3>" +
        name +
        "</h3>" +
        "<p>" +
        escapeHtml(p.note) +
        "</p>" +
        "</article>"
      );
    })
    .join("");

  $("you-list").innerHTML = renderItems(board.you);
  $("me-list").innerHTML = renderItems(board.me);

  $("later").innerHTML = board.later
    .map(function (item) {
      return (
        "<li><strong>" +
        escapeHtml(item.title) +
        "</strong><span>" +
        escapeHtml(item.reason) +
        "</span></li>"
      );
    })
    .join("");

  $("rules").innerHTML = board.rules
    .map(function (row) {
      return (
        '<div class="rule"><h3>' +
        escapeHtml(row[0]) +
        "</h3><p>" +
        escapeHtml(row[1]) +
        "</p></div>"
      );
    })
    .join("");

  function renderItems(items) {
    return items
      .map(function (item, i) {
        return (
          "<li><em>" +
          String(i + 1).padStart(2, "0") +
          "</em><div><strong>" +
          escapeHtml(item.title) +
          "</strong><p>" +
          escapeHtml(item.detail) +
          "</p></div></li>"
        );
      })
      .join("");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();
