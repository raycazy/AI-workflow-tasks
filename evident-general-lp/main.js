/* Evident general LP: sticky bar, FAQ hook, smooth scroll to in page targets and the character video loops. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* Smooth scroll for every in page link (CTAs to #offer, hero CTA to #reason-1,
     footnote marks). Done in JS, not html{scroll-behavior}, so captures and
     programmatic scrolls stay instant. */
  document.addEventListener("click", function (ev) {
    var link = ev.target.closest('a[href^="#"]');
    if (!link) return;
    var id = link.getAttribute("href").slice(1);
    var target = id ? document.getElementById(id) : null;
    if (!target) return;
    ev.preventDefault();
    /* On a phone the offer section opens with the full width R6 image; land on
       the reason 6 copy so the value stack and the buy button are on screen. */
    var scrollTo = target;
    if (id === "offer" && window.matchMedia("(max-width: 900px)").matches) {
      scrollTo = target.querySelector(".split-copy") || target;
    }
    scrollTo.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    if (history.replaceState) history.replaceState(null, "", "#" + id);
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });

  /* Reason 4 bars: grow once from their left edge on first view (transform only).
     Armed only when motion is allowed, IntersectionObserver exists and the bars
     start below the fold, so without JS, with reduced motion or on a deep link
     the bars are simply drawn at full length. Never gated on opacity. */
  var bars = document.querySelector(".bars");
  if (bars && "IntersectionObserver" in window && !reduceMotion.matches &&
      bars.getBoundingClientRect().top > window.innerHeight) {
    bars.setAttribute("data-armed", "");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { bars.setAttribute("data-in", ""); io.disconnect(); }
      });
    }, { threshold: 0.4 });
    io.observe(bars);
  }

  /* Character video loops. Each <video> sits over its still with no src, so without
     JS, with reduced motion, on a load error or when autoplay is blocked the still
     is what shows. The src (and the poster, so lazy stills stay lazy) is set only
     when motion is allowed: the hero clip for the current breakpoint at once, the
     reason clips once they come within half a viewport. A clip fades in on "playing".
     Playback follows what is on screen: every clip plays only while it intersects
     the viewport (no margin) and pauses as soon as it leaves. */
  var vids = Array.prototype.slice.call(document.querySelectorAll("video.vid"));

  function playVid(v) {
    var p = v.play();
    if (p && p.catch) p.catch(function () { /* autoplay refused: the still stays */ });
  }

  /* on screen as far as the play observer knows: reason clips wait for its first
     report, the hero (on screen at load) counts as visible until it reports */
  function wantsPlay(v) {
    if (reduceMotion.matches) return false;
    if (v.__mq && !v.__mq.matches) return false;
    return v.hasAttribute("data-lazy") ? v.__inView === true : v.__inView !== false;
  }

  function loadVid(v) {
    if (v.hasAttribute("data-loaded")) return;
    v.setAttribute("data-loaded", "");
    v.muted = true;
    v.poster = v.getAttribute("data-poster");
    var sources = v.querySelectorAll("source[data-src]");
    sources.forEach(function (s) { s.src = s.getAttribute("data-src"); });
    /* a failed source fires on the source element; after the last one, drop the video */
    var last = sources[sources.length - 1];
    if (last) last.addEventListener("error", function () { v.remove(); });
    v.addEventListener("playing", function () { v.classList.add("is-on"); });
    v.load();
    if (wantsPlay(v)) playVid(v);
  }

  function stopVid(v) {
    v.classList.remove("is-on");
    if (!v.paused) v.pause();
  }

  if (vids.length && !reduceMotion.matches) {
    var hasIO = "IntersectionObserver" in window;

    /* playback: play while on screen, pause as soon as a clip leaves (hero and reasons) */
    if (hasIO) {
      var pio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var v = en.target;
          v.__inView = en.isIntersecting;
          if (!v.hasAttribute("data-loaded")) return;
          if (wantsPlay(v)) { if (v.paused) playVid(v); }
          else if (!v.paused) v.pause();
        });
      });
      vids.forEach(function (v) { pio.observe(v); });
    }

    /* hero: one clip per breakpoint; load the matching one at once, pause the hidden one */
    vids.filter(function (v) { return v.hasAttribute("data-media"); }).forEach(function (v) {
      var mq = window.matchMedia(v.getAttribute("data-media"));
      v.__mq = mq;
      function sync() {
        if (reduceMotion.matches) return;
        if (mq.matches) {
          if (!v.hasAttribute("data-loaded")) loadVid(v);
          else if (v.paused && wantsPlay(v)) playVid(v);
        } else if (v.hasAttribute("data-loaded")) {
          v.pause();
        }
      }
      if (mq.addEventListener) mq.addEventListener("change", sync);
      sync();
    });

    /* reasons: load once a clip comes within half a viewport (loading only) */
    var lazy = vids.filter(function (v) { return v.hasAttribute("data-lazy"); });
    if (hasIO) {
      var lio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { loadVid(en.target); lio.unobserve(en.target); }
        });
      }, { rootMargin: "50% 0px" });
      lazy.forEach(function (v) { lio.observe(v); });
    } else {
      lazy.forEach(function (v) { v.__inView = true; loadVid(v); });
    }
  }

  /* motion switched off while the page is open: back to the stills */
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener("change", function () {
      if (reduceMotion.matches) vids.forEach(stopVid);
    });
  }

  /* Sticky bar: shows once the hero CTA has scrolled out of view; hides while
     the FAQ is on screen (so it never covers an answer) and while the offer
     button itself is visible. Driven by a scroll listener, not an observer,
     so jump scrolls from the CTAs update it too. */
  var bar = document.getElementById("sticky");
  var heroCta = document.querySelector(".hero-cta");
  var faq = document.getElementById("faq");
  var buy = document.querySelector(".btn-buy");
  if (!bar || !heroCta) return;

  function inView(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  }

  var shown = false;
  function update() {
    var past = heroCta.getBoundingClientRect().bottom < 0;
    var show = past && !inView(faq) && !inView(buy);
    if (show === shown) return;
    shown = show;
    if (show) {
      bar.setAttribute("data-show", "");
      bar.removeAttribute("inert");
      bar.setAttribute("aria-hidden", "false");
    } else {
      bar.removeAttribute("data-show");
      bar.setAttribute("inert", "");
      bar.setAttribute("aria-hidden", "true");
    }
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; update(); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* FAQ: opening or closing an answer changes the page height, so recheck. */
  document.querySelectorAll(".faq-row").forEach(function (row) {
    row.addEventListener("toggle", update);
  });

  update();
})();
