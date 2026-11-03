// HGA buy box, Option C: how many cards, then the Glass / Poly split, then booklets and oversized per slab.
// Rachel's build (racheltomi/hga-presale shop/shop.html, 2026-11-03), ported onto window.HGA_CART / HGA_PRICING so it
// sells the same variants and writes the same cart as the other product page versions. Markup: _tools/buybox-rachel.html,
// styles: _tools/shop-builder.css. The box describes the whole order, so Claim replaces the cart instead of adding to it.
(function () {
  "use strict";
  var bd = document.querySelector("[data-builder]");
  var C = window.HGA_CART, TABLE = window.HGA_PRICING;
  if (!bd || !C || !TABLE) return;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var set = function (sel, v) { $$(sel).forEach(function (e) { e.textContent = v; }); };
  var money = C.money, vid = C.vid, read = C.read, write = C.write, T = TABLE.types;
  var HOUSINGS = ["glass", "poly"], MAX = 100;
  var clamp = function (n) { n = parseInt(n, 10); return isNaN(n) ? 0 : Math.max(0, Math.min(MAX, n)); };
  var hname = function (h) { return TABLE.housings[h].name; };
  var empty = function () { var c = {}; C.variants.forEach(function (v) { c[v] = 0; }); return c; };
  var totals = function (c) {
    var count = 0, now = 0, open = 0;
    C.variants.forEach(function (v) { var p = C.price(v), u = C.unit(v, c), q = c[v] || 0; count += q; now += q * u; open += q * (p.open === null || p.open === undefined ? u : p.open); });
    return { count: count, now: now, open: open, save: open - now };
  };
  var byHousing = function (c, h) { var n = 0; C.variants.forEach(function (v) { if (v === h || v.indexOf(h + "-") === 0) n += c[v] || 0; }); return n; };
  // booklet sizes the price table knows, by fold count (booklet = 1 fold, trifold = 2)
  var FOLDS = TABLE.order.filter(function (s) { return T[s].folds && !T[s].quote; }).map(function (s) { return T[s].folds; }).sort();
  var folds = function (f) { var k = null; TABLE.order.forEach(function (s) { if (T[s].folds === f) k = s; }); return k; };
  var hasSize = function (s) { return TABLE.order.indexOf(s) >= 0 && !T[s].quote; };

  var bdParams = new URLSearchParams(location.search);
  var S = { step: 1, total: 1, glass: bdParams.get("h") === "poly" ? 0 : 1, special: false,
    over: { glass: 0, poly: 0 }, books: { glass: [{ f: FOLDS[0], q: 0 }], poly: [{ f: FOLDS[0], q: 0 }] } };
  var inH = function (h) { return h === "glass" ? S.glass : S.total - S.glass; };
  // a booklet is two cards joined and a trifold three (Bhaskar 2026-11-04), so a booklet with f folds counts 1 + f cards
  var W = function (f) { return 1 + f; };
  var bookN = function (h) { return S.books[h].reduce(function (n, b) { return n + W(b.f) * b.q; }, 0); };
  var bookUnits = function (h) { return S.books[h].reduce(function (n, b) { return n + b.q; }, 0); };
  var stdN = function (h) { return inH(h) - (S.special ? S.over[h] + bookN(h) : 0); };
  // when a housing shrinks, take the cards back from its booklets, then its oversized
  var fit = function () {
    S.total = Math.max(1, Math.min(MAX, S.total));
    S.glass = Math.max(0, Math.min(S.total, S.glass));
    HOUSINGS.forEach(function (h) {
      var extra = S.over[h] + bookN(h) - inH(h), i = S.books[h].length - 1;
      while (extra > 0 && i >= 0) { var b = S.books[h][i]; if (b.q > 0) { b.q -= 1; extra -= W(b.f); } else i--; }
      if (extra > 0) S.over[h] -= extra;
    });
  };
  var toCart = function () {
    var c = empty();
    HOUSINGS.forEach(function (h) {
      c[vid(h, "std")] = stdN(h);
      if (S.special) {
        if (hasSize("oversized")) c[vid(h, "oversized")] = S.over[h];
        S.books[h].forEach(function (b) { var k = vid(h, folds(b.f)); c[k] = clamp((c[k] || 0) + b.q); });
      }
    });
    return c;
  };
  // coming back from the cart: open on what is already in it
  var fromCart = function () {
    var c = read(), t = totals(c);
    if (!t.count || t.count > MAX) return;
    S.total = t.count; S.glass = byHousing(c, "glass"); S.step = 3;
    HOUSINGS.forEach(function (h) {
      S.over[h] = hasSize("oversized") ? (c[vid(h, "oversized")] || 0) : 0;
      var list = [];
      FOLDS.forEach(function (f) { var q = c[vid(h, folds(f))] || 0; if (q) list.push({ f: f, q: q }); });
      S.books[h] = list.length ? list : [{ f: FOLDS[0], q: 0 }];
      if (S.over[h] || list.length) S.special = true;
    });
  };
  if (!bdParams.get("h")) fromCart();
  var ico = function (n) { return '<svg class="ico" aria-hidden="true"><use href="#' + n + '"/></svg>'; };
  var mini = function (k, n, room, label) {
    return '<div class="bd-st sm"><button type="button" data-st="' + k + '" data-d="-1" aria-label="One fewer ' + label + '"' + (n <= 0 ? " disabled" : "") + ">" + ico("i-minus") + "</button><output>" + n + '</output><button type="button" data-st="' + k + '" data-d="1" aria-label="One more ' + label + '"' + (room <= 0 ? " disabled" : "") + ">" + ico("i-plus") + "</button></div>";
  };
  var sizesHtml = function () {
    return HOUSINGS.filter(function (h) { return inH(h) > 0; }).map(function (h) {
      var nm = hname(h), room = stdN(h);
      var rows = '<div class="bd-z"><span class="bd-zn">Standard</span><span class="bd-zp">' + money(T.std[h].now) + '</span><span class="bd-zq" title="The rest of your ' + nm + ' cards">' + room + "</span></div>";
      if (hasSize("oversized")) rows += '<div class="bd-z"><span class="bd-zn">Oversized</span><span class="bd-zp">' + money(T.oversized[h].now) + "</span>" + mini("over:" + h, S.over[h], room, nm + " oversized card") + "</div>";
      S.books[h].forEach(function (b, i) {
        var opts = "";
        FOLDS.forEach(function (f) {
          if (f !== b.f && S.books[h].some(function (o) { return o.f === f; })) return;
          opts += '<option value="' + f + '"' + (f === b.f ? " selected" : "") + ">" + f + (f === 1 ? " fold" : " folds") + "</option>";
        });
        var many = S.books[h].length > 1;
        rows += '<div class="bd-z' + (many ? " has-x" : "") + '"><span class="bd-zn"><span class="bd-zw">Booklet</span><select data-fold="' + h + ":" + i + '" aria-label="' + nm + ' booklet folds">' + opts + "</select>" + (many ? '<button type="button" class="bd-x" data-rm="' + h + ":" + i + '" aria-label="Remove this ' + nm + " booklet with " + b.f + (b.f === 1 ? " fold" : " folds") + '">' + ico("i-x") + "</button>" : "") + '</span><span class="bd-zp">' + money(T[folds(b.f)][h].now) + "</span>" + mini("book:" + h + ":" + i, b.q, room - (W(b.f) - 1), nm + " booklet") + "</div>";
      });
      // stays put once a booklet is in play; goes quiet (not away) when no cards are left to assign
      if (bookUnits(h) > 0 && S.books[h].length < FOLDS.length) rows += '<button type="button" class="bd-more" data-more="' + h + '"' + (room >= 2 ? "" : " disabled") + ">" + ico("i-plus") + "<span>Add a booklet with different folds</span></button>";
      return '<div class="bd-zg ' + h + '"><p class="bd-zh"><img src="./assets/hybrid_grading/' + (h === "glass" ? "hga-glass-828ebfd2" : "hga-poly-69885480") + '.svg" alt="' + nm + '" width="' + (h === "glass" ? 96 : 88) + '" height="16"><span>' + inH(h) + (inH(h) === 1 ? " card" : " cards") + "</span></p>" + rows + "</div>";
    }).join("") + '<p class="bd-note">Folds are how many times the booklet opens: one fold is a booklet and counts as two of your cards, two folds a trifold and counts as three. <a href="sizes.html">See every size</a></p>';
  };
  var bdRender = function (focus) {
    fit();
    var c = toCart(), t = totals(c), g = S.glass, p = S.total - g, one = S.total === 1;
    $$("[data-s]", bd).forEach(function (el) {
      var n = Number(el.dataset.s);
      el.classList.toggle("on", n === S.step); el.classList.toggle("done", n < S.step); el.classList.toggle("todo", n > S.step);
      $(".bd-b", el).hidden = n !== S.step;
      var head = $("button.bd-head", el);
      if (head) { head.disabled = n >= S.step; if (n < S.step) head.setAttribute("aria-label", "Edit step " + n); else head.removeAttribute("aria-label"); }
    });
    $$("[data-in]", bd).forEach(function (i) {
      var k = i.dataset.in, v = k === "total" ? S.total : k === "glass" ? g : p;
      if (document.activeElement !== i) i.value = v;
    });
    $$("[data-st]", bd).forEach(function (x) {
      var k = x.dataset.st, d = Number(x.dataset.d);
      if (k === "total") x.disabled = d < 0 ? S.total <= 1 : S.total >= MAX;
      if (k === "glass") x.disabled = d < 0 ? g <= 0 : g >= S.total;
      if (k === "poly") x.disabled = d < 0 ? p <= 0 : p >= S.total;
    });
    $$("[data-q]", bd).forEach(function (x) { x.setAttribute("aria-pressed", String(Number(x.dataset.q) === S.total)); });
    set("[data-sum='1']", S.total + (one ? " card" : " cards"));
    set("[data-sum='2']", g && p ? g + " Glass, " + p + " Poly" : g ? (one ? "Glass" : "All Glass") : (one ? "Poly" : "All Poly"));
    set("[data-t2]", one ? "Glass or Poly?" : "How many in Glass, how many in Poly?");
    // one card is a single tap; more cards get steppers and a slider that always add up to the total
    bd.classList.toggle("is-one", one);
    $$("[data-pick]", bd).forEach(function (x) {
      var on = inH(x.dataset.pick) > 0;
      x.classList.toggle("sel", on); x.classList.toggle("off", !on);
      if (one) { x.setAttribute("role", "radio"); x.setAttribute("aria-checked", String(on)); x.tabIndex = 0; } else { x.removeAttribute("role"); x.removeAttribute("aria-checked"); x.removeAttribute("tabindex"); }
    });
    var r = $("[data-range]", bd); r.max = S.total; r.value = g; r.hidden = one; r.style.setProperty("--p", (g / S.total * 100) + "%");
    $$("[data-special]", bd).forEach(function (x) { x.setAttribute("aria-checked", String((x.dataset.special === "1") === S.special)); });
    var box = $("[data-sizes]", bd); box.hidden = !S.special;
    if (S.special) box.innerHTML = sizesHtml();
    var tot = $("[data-total]", bd), acts = $("[data-acts]", bd);
    tot.hidden = S.step < 2; acts.hidden = S.step < 3;
    set("[data-t-count]", S.total + (one ? " card" : " cards") + (g && p ? " · " + g + " Glass, " + p + " Poly" : g ? " · Glass" : " · Poly"));
    set("[data-t-now]", money(t.now));
    set("[data-t-save]", t.save > 0 ? "Save " + money(t.save) + " vs launch pricing" : "Presale price through " + TABLE.presale_ends + ".");
    var solo = one && !S.special;
    set("[data-claim-label]", solo ? "Claim my " + money(t.now) + " " + hname(g ? "glass" : "poly") : "Claim my " + S.total + (one ? " card" : " cards") + " · " + money(t.now));
    // the slab on the left follows the housing in play
    var showH = g > 0 ? "glass" : "poly";
    $$("[data-slab]").forEach(function (e) { e.hidden = e.dataset.slab !== showH; });
    set("[data-pdp-name]", hname(showH));
    if (focus) { var f = $(focus, bd); if (f && !f.disabled) f.focus({ preventScroll: true }); }
  };
  var goTo = function (n) {
    S.step = n; bdRender();
    var el = $('[data-s="' + n + '"]', bd);
    el.tabIndex = -1; el.focus({ preventScroll: true });
    if (el.getBoundingClientRect().top < 70) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  var setTotal = function (n) {
    // keep the split when the count changes: a housing already at zero stays at zero
    var wasPoly = S.total - S.glass, n2 = Math.max(1, Math.min(MAX, n));
    if (S.glass === 0) S.glass = 0; else if (wasPoly === 0) S.glass = n2; else S.glass = Math.min(S.glass, n2);
    S.total = n2;
  };
  bd.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("button,[data-pick]") : null;
    if (!t) return;
    if (t.hasAttribute("data-go")) { goTo(Number(t.dataset.go)); return; }
    if (t.hasAttribute("data-q")) { setTotal(Number(t.dataset.q)); bdRender(); return; }
    if (t.hasAttribute("data-special")) { S.special = t.dataset.special === "1"; bdRender(); return; }
    if (t.hasAttribute("data-more")) {
      var mh = t.dataset.more, list = S.books[mh], nf = null;
      FOLDS.forEach(function (f) { if (nf === null && !list.some(function (o) { return o.f === f; })) nf = f; });
      if (nf === null) return;
      list.push({ f: nf, q: 1 });
      bdRender('[data-fold="' + mh + ":" + (list.length - 1) + '"]');
      return;
    }
    if (t.hasAttribute("data-rm")) {
      var rm = t.dataset.rm.split(":");
      S.books[rm[0]].splice(Number(rm[1]), 1);
      bdRender('[data-more="' + rm[0] + '"]');
      if (document.activeElement === document.body) { var ff = $('[data-fold="' + rm[0] + ':0"]', bd); if (ff) ff.focus({ preventScroll: true }); }
      return;
    }
    if (t.hasAttribute("data-st")) {
      var k = t.dataset.st, d = Number(t.dataset.d), part = k.split(":");
      if (k === "total") setTotal(S.total + d);
      else if (k === "glass") S.glass += d;
      else if (k === "poly") S.glass -= d;
      else if (part[0] === "over") S.over[part[1]] = Math.max(0, S.over[part[1]] + d);
      else if (part[0] === "book") { var b = S.books[part[1]][Number(part[2])]; b.q = Math.max(0, b.q + d); }
      var dSel = '[data-st="' + k + '"][data-d="' + d + '"]';
      bdRender(dSel);
      // a stepper button that just hit its limit is disabled: keep the keyboard on the stepper
      if (document.activeElement === document.body) { var other = $('[data-st="' + k + '"][data-d="' + (-d) + '"]', bd); if (other && !other.disabled) other.focus({ preventScroll: true }); }
      return;
    }
    if (t.hasAttribute("data-pick") && bd.classList.contains("is-one")) { S.glass = t.dataset.pick === "glass" ? 1 : 0; bdRender(); }
  });
  bd.addEventListener("keydown", function (e) {
    var t = e.target;
    if (bd.classList.contains("is-one") && t.hasAttribute && t.hasAttribute("data-pick") && (e.key === " " || e.key === "Enter" || e.key.indexOf("Arrow") === 0)) {
      e.preventDefault();
      S.glass = e.key.indexOf("Arrow") === 0 ? (S.glass ? 0 : 1) : (t.dataset.pick === "glass" ? 1 : 0);
      bdRender('[data-pick="' + (S.glass ? "glass" : "poly") + '"]');
    }
  });
  bd.addEventListener("input", function (e) {
    var i = e.target;
    if (i.hasAttribute("data-range")) { S.glass = Number(i.value); bdRender(); return; }
    if (!i.hasAttribute("data-in")) return;
    if (i.value === "") return;
    var v = Math.max(0, parseInt(i.value, 10) || 0);
    if (i.dataset.in === "total") setTotal(v);
    if (i.dataset.in === "glass") S.glass = v;
    if (i.dataset.in === "poly") S.glass = S.total - Math.min(v, S.total);
    bdRender();
  });
  bd.addEventListener("change", function (e) {
    var i = e.target;
    if (i.hasAttribute("data-in")) { i.blur(); bdRender(); return; }
    if (i.hasAttribute("data-fold")) { var p = i.dataset.fold.split(":"); S.books[p[0]][Number(p[1])].f = Number(i.value); bdRender('[data-fold="' + i.dataset.fold + '"]'); }
  });
  // the buy box describes the whole order, so it replaces the cart rather than adding to it
  $("[data-claim-all]", bd).addEventListener("click", function () { write(toCart()); location.href = "cart.html"; });
  $("[data-buy-now]", bd).addEventListener("click", function () { write(toCart()); location.href = "checkout.html"; });
  bdRender();
})();
