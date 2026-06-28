(function () {
  var nav = document.getElementById("nav");
  if (!nav) return;

  function onScroll() {
    var sc = document.documentElement.scrollTop || document.body.scrollTop || 0;
    nav.classList.toggle("solid", sc > 30);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
