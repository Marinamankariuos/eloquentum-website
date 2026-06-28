(function () {
  var nav = document.getElementById("nav");
  if (!nav) return;

  function onScroll() {
    var sc = document.documentElement.scrollTop || document.body.scrollTop || 0;
    nav.classList.toggle("solid", sc > 30);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.querySelectorAll("a").forEach(function (link) {
    if (link.textContent.trim().toLowerCase() !== "coming soon") return;
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("data-disabled", "true");
    link.setAttribute("tabindex", "-1");
  });

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var link = target.closest("a[data-disabled='true']");
    if (!link) return;
    event.preventDefault();
  });
})();
