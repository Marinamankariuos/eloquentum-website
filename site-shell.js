(function () {
  var nav = document.getElementById("nav");
  if (!nav) return;

  function onScroll() {
    var sc = document.documentElement.scrollTop || document.body.scrollTop || 0;
    nav.classList.toggle("solid", sc > 30);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.querySelectorAll("a, button").forEach(function (control) {
    if (control.textContent.trim().toLowerCase() !== "coming soon") return;
    control.setAttribute("aria-disabled", "true");
    control.setAttribute("data-disabled", "true");

    if (control.tagName.toLowerCase() === "a") {
      control.setAttribute("tabindex", "-1");
    } else {
      control.setAttribute("disabled", "");
    }
  });

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var control = target.closest("[data-disabled='true']");
    if (!control) return;
    event.preventDefault();
  });
})();
