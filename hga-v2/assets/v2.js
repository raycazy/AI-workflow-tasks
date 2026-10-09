// HGA v2: motion and the conversion modules. GSAP (cdnjs) drives the scroll
// work when it loads; everything degrades to static content without it.
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- theme toggle ----------
  $$("[data-theme-toggle]").forEach(function (b) {
    b.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      var next = dark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("hga_theme", next); } catch (e) {}
    });
  });

  // ---------- glass box toggle ----------
  $$("[data-gbox]").forEach(function (box) {
    var btns = $$("[data-mode]", box);
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        box.dataset.mode = b.dataset.mode;
        btns.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      });
    });
    // flips to glass on its own once in view, so the point lands without a click
    if ("IntersectionObserver" in window && !reduce) {
      var done = false;
      new IntersectionObserver(function (es) {
        if (done || !es[0].isIntersecting) return;
        done = true;
        setTimeout(function () { var g = btns.filter(function (b) { return b.dataset.mode === "glass"; })[0]; if (g && box.dataset.mode === "black") g.click(); }, 1400);
      }, { threshold: .5 }).observe(box);
    }
  });

  // ---------- process rail arrows ----------
  $$("[data-rail]").forEach(function (root) {
    var rail = $(".rail", root);
    $$("[data-rail-step]", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var w = rail.querySelector(".rc").getBoundingClientRect().width + 14;
        rail.scrollBy({ left: Number(b.dataset.railStep) * w, behavior: reduce ? "auto" : "smooth" });
      });
    });
  });

  // ---------- duplicate the ticker row so it loops ----------
  $$(".ticker .row").forEach(function (row) { row.innerHTML += row.innerHTML; });

  // ---------- GSAP ----------
  if (reduce || !window.gsap || !window.ScrollTrigger) {
    document.documentElement.classList.add("no-gsap");
    $$("[data-count]").forEach(function (el) { el.textContent = el.dataset.count; });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // hero: stagger in
  var heroBits = $$(".v2hero .eb, .v2hero .h1, .v2hero .lede, .v2hero .pick, .v2hero .hero-cta, .v2hero .hero-trust");
  if (heroBits.length) gsap.from(heroBits, { y: 24, opacity: 0, duration: .9, ease: "power3.out", stagger: .08, delay: .1 });
  $$(".spec").forEach(function (s, i) { gsap.from(s, { y: 16, opacity: 0, duration: .8, delay: .8 + i * .2, ease: "power3.out" }); });

  // section reveals
  $$(".gs").forEach(function (el) {
    gsap.fromTo(el, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
  });

  // counters
  $$("[data-count]").forEach(function (el) {
    var end = parseFloat(el.dataset.count), prefix = el.dataset.prefix || "", suffix = el.dataset.suffix || "";
    var o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: function () { el.textContent = prefix + Math.round(o.v).toLocaleString("en-US") + suffix; } });
  });

  // pillars: slight stagger lift
  var pls = $$(".pl");
  if (pls.length) gsap.from(pls, { y: 40, opacity: 0, duration: .8, stagger: .12, ease: "power3.out", scrollTrigger: { trigger: ".pillars2", start: "top 80%", once: true } });

  // parallax on image bands
  $$(".band-in > img, .gbox-art > img").forEach(function (img) {
    gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
  });
})();
