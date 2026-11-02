// HGA buy box design options (shop-a/b/c.html). Adds to the shared cart through window.HGA_CART (shop.js).
(function () {
  "use strict";
  var page = document.querySelector("[data-bo-page]");
  var C = window.HGA_CART, T = window.HGA_PRICING;
  if (!page || !C || !T) return;
  var kind = page.getAttribute("data-bo-page");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var money = C.money, TY = T.types;
  var clamp = function (n, lo) { n = parseInt(n, 10); return isNaN(n) ? lo : Math.max(lo, Math.min(100, n)); };
  var set = function (sel, v) { $$(sel).forEach(function (e) { e.textContent = v; }); };
  var quoted = function (s) { return !!TY[s].quote; };
  var hname = function (h) { return T.housings[h].name; };

  // gallery follows the housing in view
  function gallery(h, label) {
    $$("[data-slab]", page).forEach(function (s) { s.hidden = s.dataset.slab !== h; });
    $$(".gal-badge [data-pdp-name]").forEach(function (e) { e.textContent = label || hname(h); });
  }
  function toast(text) {
    var t = $("[data-added]");
    if (!t) return;
    set("[data-added-what]", text);
    t.hidden = false;
    requestAnimationFrame(function () { t.classList.add("show"); });
    clearTimeout(t._t);
    t._t = setTimeout(function () { t.classList.remove("show"); }, 6000);
  }
  $$("[data-added-close]").forEach(function (b) { b.addEventListener("click", function () { $("[data-added]").classList.remove("show"); }); });

  // the unit price for n cards of a variant, counting what is already in the cart (Poly bulk, when set)
  function unitFor(v, n) { var c = C.read(); c[v] = (c[v] || 0) + n; return C.unit(v, c); }
  function radios(group, attr, val) {
    $$("[" + attr + "]", group).forEach(function (b) {
      var on = b.getAttribute(attr) === val;
      b.classList.toggle("on", on);
      if (b.hasAttribute("aria-pressed")) b.setAttribute("aria-pressed", String(on)); else b.setAttribute("aria-checked", String(on));
      if (b.getAttribute("role") === "radio" && b.tagName === "BUTTON" && b.closest(".szs")) b.tabIndex = on ? 0 : -1;
    });
  }
  // arrow keys inside the size radio group
  $$(".szs", page).forEach(function (g) {
    g.addEventListener("keydown", function (e) {
      var keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
      if (keys.indexOf(e.key) < 0) return;
      var bs = $$("[role=radio]", g), i = bs.indexOf(document.activeElement);
      if (i < 0) return;
      e.preventDefault();
      var n = e.key === "Home" ? bs[0] : e.key === "End" ? bs[bs.length - 1] : bs[(i + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : bs.length - 1)) % bs.length];
      n.focus(); n.click();
    });
  });

  // ---------- A and C: one housing, one size, one quantity ----------
  function single(root, after) {
    var st = { h: "glass", s: "std", q: 1 };
    function render() {
      var quote = quoted(st.s), v = C.vid(st.h, quote ? "std" : st.s), p = C.price(v), u = unitFor(v, st.q), b = (C.bulk || {})[st.h];
      $$("[data-bo-h]", root).forEach(function (r) { r.checked = r.value === st.h; r.closest(".hopt").classList.toggle("on", r.checked); });
      ["glass", "poly"].forEach(function (h) {
        var hp = C.price(C.vid(h, quote ? "std" : st.s));
        set('[data-bo-hnow="' + h + '"]', money(hp.now));
        $$('[data-bo-hopen="' + h + '"]', root).forEach(function (e) { e.textContent = hp.open ? money(hp.open) : ""; e.hidden = !hp.open; });
      });
      radios(root, "data-bo-s", st.s);
      $$("[data-bo-sp]", root).forEach(function (e) { var s = e.dataset.boSp; e.textContent = quoted(s) ? "On request" : money(C.price(C.vid(st.h, s)).now); });
      $$("[data-bo-quote]", root).forEach(function (e) { e.hidden = !quote; });
      $$("[data-bo-add],[data-bo-buy]", root).forEach(function (x) { x.disabled = quote; x.setAttribute("aria-disabled", String(quote)); x.hidden = quote; });
      $$("[data-bo-quote-cta]", root).forEach(function (x) { x.hidden = !quote; });
      $$("[data-bo-q]", root).forEach(function (i) { if (document.activeElement !== i) i.value = st.q; });
      $$("[data-bo-quick]", root).forEach(function (x) { x.setAttribute("aria-pressed", String(Number(x.dataset.boQuick) === st.q)); });
      set("[data-bo-hname]", hname(st.h));
      gallery(st.h, quote ? hname(st.h) + " · " + TY[st.s].name : p.name);
      $$("[data-bo-bulk]", root).forEach(function (e) {
        var on = !quote && st.s === "std" && b && b.now !== null && b.now !== undefined;
        e.hidden = !on;
        if (on) e.textContent = b.min + " or more " + hname(st.h).replace("HGA ", "") + " cards: " + money(b.now) + " a card";
      });
      if (quote) {
        set("[data-bo-price]", ""); set("[data-bo-count]", TY[st.s].name); set("[data-bo-total]", "On request");
        set("[data-bo-line]", "Priced once we see the card.");
      } else {
        set("[data-bo-price]", money(u));
        set("[data-bo-count]", st.q + (st.q === 1 ? " pass" : " passes") + (st.s === "std" ? "" : " · " + TY[st.s].name));
        set("[data-bo-total]", money(st.q * u));
        set("[data-bo-line]", u !== p.now ? "Bulk price applied: " + money(u) + " a card"
          : p.open ? "Save " + money(p.open - p.now) + " a card on " + hname(st.h).replace("HGA ", "") + " vs launch pricing"
          : "Presale price through " + T.presale_ends + ".");
      }
      if (after) after(st, quote, p, u);
    }
    $$("[data-bo-h]", root).forEach(function (r) { r.addEventListener("change", function () { st.h = r.value; render(); }); });
    $$("[data-bo-s]", root).forEach(function (x) { x.addEventListener("click", function () { st.s = x.dataset.boS; render(); }); });
    $$("[data-bo-step]", root).forEach(function (x) { x.addEventListener("click", function () { st.q = clamp(st.q + Number(x.dataset.boStep), 1); render(); }); });
    $$("[data-bo-quick]", root).forEach(function (x) { x.addEventListener("click", function () { st.q = Number(x.dataset.boQuick); render(); }); });
    $$("[data-bo-q]", root).forEach(function (i) {
      i.addEventListener("input", function () { st.q = clamp(i.value, 1); render(); });
      i.addEventListener("blur", function () { i.value = st.q; });
    });
    var buy = function (go) {
      if (quoted(st.s)) return;
      var v = C.vid(st.h, st.s);
      C.add(v, st.q);
      if (go) { location.href = "checkout.html"; return; }
      toast(st.q + " × " + C.price(v).name);
    };
    $$("[data-bo-add]", root).forEach(function (x) { x.addEventListener("click", function () { buy(false); }); });
    $$("[data-bo-buy]", root).forEach(function (x) { x.addEventListener("click", function () { buy(true); }); });
    render();
    return { st: st, render: render };
  }

  // ---------- B: every housing and size on one list ----------
  function builder(root) {
    var q = {};
    C.variants.forEach(function (v) { q[v] = 0; });
    q.glass = 1;
    var poly = $("[data-bo-poly]", root);
    function render() {
      var c = C.read(), count = 0, now = 0, open = 0, last = null;
      Object.keys(q).forEach(function (v) { c[v] = (c[v] || 0) + q[v]; });
      Object.keys(q).forEach(function (v) {
        var p = C.price(v), u = C.unit(v, c);
        count += q[v]; now += q[v] * u; open += q[v] * (p.open && u === p.now ? p.open : u);
        $$('[data-bo-rq="' + v + '"]', root).forEach(function (i) { if (document.activeElement !== i) i.value = q[v]; });
        $$('[data-bo-row="' + v + '"]', root).forEach(function (r) { r.classList.toggle("has", q[v] > 0); });
        if (q[v] > 0) last = p;
      });
      var g = 0, pl = 0;
      Object.keys(q).forEach(function (v) { if (v.indexOf("glass") === 0) g += q[v]; else pl += q[v]; });
      var b = (C.bulk || {}).poly;
      $$("[data-bo-bulk]", root).forEach(function (e) {
        var on = b && b.now !== null && b.now !== undefined;
        e.hidden = !on;
        if (on) e.textContent = b.min + " or more Poly cards: " + money(b.now) + " a card";
      });
      set("[data-bo-count]", count === 0 ? "No passes yet" : [g ? g + " Glass" : "", pl ? pl + " Poly" : ""].filter(Boolean).join(" · "));
      set("[data-bo-total]", money(now));
      set("[data-bo-line]", open > now ? "Save " + money(open - now) + " vs launch pricing" : count ? "Presale price through " + T.presale_ends + "." : "Add a card to start.");
      set("[data-bo-total2]", money(now));
      $$("[data-bo-add],[data-bo-buy]", root).forEach(function (x) { x.disabled = count === 0; x.setAttribute("aria-disabled", String(count === 0)); });
      gallery(pl > 0 && g === 0 ? "poly" : "glass");
    }
    $$("[data-bo-rstep]", root).forEach(function (x) { x.addEventListener("click", function () { var v = x.dataset.boRstep; q[v] = clamp(q[v] + Number(x.dataset.d), 0); render(); }); });
    $$("[data-bo-rq]", root).forEach(function (i) {
      i.addEventListener("input", function () { q[i.dataset.boRq] = clamp(i.value, 0); render(); });
      i.addEventListener("blur", function () { i.value = q[i.dataset.boRq]; });
    });
    // closing the Poly panel removes its cards, so nothing is charged that the buyer cannot see
    if (poly) poly.addEventListener("toggle", function () { if (!poly.open) { Object.keys(q).forEach(function (v) { if (v.indexOf("poly") === 0) q[v] = 0; }); render(); } });
    var buy = function (go) {
      var n = 0;
      Object.keys(q).forEach(function (v) { if (q[v] > 0) { C.add(v, q[v]); n += q[v]; } });
      if (!n) return;
      if (go) { location.href = "checkout.html"; return; }
      toast(n + (n === 1 ? " pass" : " passes") + " added");
    };
    $$("[data-bo-add]", root).forEach(function (x) { x.addEventListener("click", function () { buy(false); }); });
    $$("[data-bo-buy]", root).forEach(function (x) { x.addEventListener("click", function () { buy(true); }); });
    render();
  }

  // ---------- C: steps that fold into summaries ----------
  function guided(root) {
    var extra = { cat: "", high: "no", val: 0 };
    var steps = $$("[data-bo-stepn]", root);
    function open(n) {
      steps.forEach(function (s) { s.classList.toggle("open", s.dataset.boStepn === String(n)); });
      var f = $('[data-bo-stepn="' + n + '"] .boc-body', root);
      f = f && f.querySelector("input:checked, button.on, button, input, a");
      if (f) f.focus({ preventScroll: true });  // the Continue that was pressed is now hidden
    }
    var ctl = single(root, function (st, quote, p, u) {
      set('[data-bo-sum="1"]', hname(st.h) + " · " + money(C.price(st.h).now) + " a card");
      set('[data-bo-sum="2"]', TY[st.s].short + " · " + (quote ? "on request" : st.q + (st.q === 1 ? " card" : " cards")));
      var bits = [];
      if (extra.cat) bits.push(extra.cat === "tcg" ? "TCG" : extra.cat === "both" ? "Sports and TCG" : "Sports");
      if (extra.high === "yes") bits.push("a card over " + money(T.value_fee.threshold));
      set('[data-bo-sum="3"]', bits.length ? bits.join(" · ") : "Optional");
    });
    $$("[data-bo-next]", root).forEach(function (x) { x.addEventListener("click", function () { open(x.dataset.boNext); var s = $('[data-bo-stepn="' + x.dataset.boNext + '"] .boc-hd', root); if (s) s.scrollIntoView({ block: "nearest", behavior: "smooth" }); }); });
    $$("[data-bo-edit]", root).forEach(function (x) { x.addEventListener("click", function () { open(x.dataset.boEdit); }); });
    $$("[data-bo-cat]", root).forEach(function (x) { x.addEventListener("click", function () { extra.cat = x.dataset.boCat; radios(root, "data-bo-cat", extra.cat); ctl.render(); }); });
    var fee = $("[data-bo-fee]", root), est = $("[data-bo-est]", root), val = $("[data-bo-val]", root);
    $$("[data-bo-high]", root).forEach(function (x) { x.addEventListener("click", function () { extra.high = x.dataset.boHigh; radios(root, "data-bo-high", extra.high); fee.hidden = extra.high !== "yes"; ctl.render(); }); });
    if (val) val.addEventListener("input", function () {
      var n = parseInt(val.value.replace(/\D/g, ""), 10) || 0, f = T.value_fee;
      extra.val = n;
      est.hidden = !n;
      if (n) est.textContent = n <= f.threshold ? "No value fee on this card." : "Estimated fee: " + money(Math.round((n - f.threshold) * f.pct) / 100) + ", paid when you book.";
    });
    try { var saved = JSON.parse(sessionStorage.getItem("hga_bo_extra") || "null"); if (saved) extra = saved; } catch (e) {}
    radios(root, "data-bo-cat", extra.cat); radios(root, "data-bo-high", extra.high); fee.hidden = extra.high !== "yes";
    $$("[data-bo-add],[data-bo-buy]", root).forEach(function (x) { x.addEventListener("click", function () { try { sessionStorage.setItem("hga_bo_extra", JSON.stringify(extra)); } catch (e) {} }); });
    ctl.render();
  }

  var root = $("[data-bo]", page);
  if (kind === "a") single(root);
  else if (kind === "b") builder(root);
  else if (kind === "c") guided(root);
})();
