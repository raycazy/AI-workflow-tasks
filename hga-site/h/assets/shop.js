// HGA redesign: the shopping flow. One cart shared by home, PDP, cart,
// checkout and thank you. Kept in localStorage per viewer; the page still
// works (in memory) when storage is blocked. Payments are not wired: placing
// an order stores a demo order and opens the thank you page.
// 2026-10-30 (Dylan's pricing update): the cart holds variants, housing x card size.
// Ids: glass, poly (standard cards, the old shape), glass-booklet, poly-booklet,
// glass-trifold, poly-trifold. Oversized is priced on request and cannot be added.
(function () {
  "use strict";

  var PRICES = {
    poly: { now: 29, open: 150, name: "HGA Poly" },
    glass: { now: 200, open: 600, name: "HGA Glass" }
  };
  // card sizes: presale price per housing; launch prices for booklets are not published yet (null = no strike)
  var SIZES = {
    std: { name: "Standard card", glass: [200, 600], poly: [29, 150] },
    booklet: { name: "Booklet", glass: [200, null], poly: [200, null] },
    trifold: { name: "Trifold booklet", glass: [300, null], poly: [300, null] },
    oversized: { name: "Oversized", quote: true }
  };
  var HOUSINGS = ["glass", "poly"], SIZE_IDS = ["std", "booklet", "trifold"];
  var VARIANTS = [];
  HOUSINGS.forEach(function (h) { SIZE_IDS.forEach(function (s) { VARIANTS.push(vid(h, s)); }); });
  function vid(h, s) { return s === "std" ? h : h + "-" + s; }
  function split(v) { var p = v.split("-"); return { h: p[0], s: p[1] || "std" }; }
  function price(v) {
    var x = split(v), sz = SIZES[x.s], pr = sz[x.h];
    return { now: pr[0], open: pr[1], name: PRICES[x.h].name + (x.s === "std" ? "" : " · " + sz.name), housing: PRICES[x.h].name, size: sz.name, h: x.h, s: x.s };
  }
  var KEY = "hga_cart", ORDER = "hga_last_order";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var money = function (n) { return "$" + n.toLocaleString("en-US"); };
  var clamp = function (n) { n = parseInt(n, 10); return isNaN(n) ? 0 : Math.max(0, Math.min(100, n)); };
  var empty = function () { var c = {}; VARIANTS.forEach(function (v) { c[v] = 0; }); return c; };
  var mem = empty();

  function norm(c) { var o = empty(); VARIANTS.forEach(function (v) { o[v] = clamp(c && c[v]); }); return o; }
  function read() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY) || "null");
      if (c && typeof c === "object") return norm(c);  // the old {poly, glass} shape reads as standard cards
    } catch (e) {}
    return norm(mem);
  }
  function write(c) {
    mem = norm(c);
    try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) {}
    badge(true);
    render();
  }
  function add(v, n) { var c = read(); c[v] = clamp(c[v] + n); write(c); }
  function totals(c) {
    var count = 0, now = 0, open = 0;
    VARIANTS.forEach(function (v) { var p = price(v); count += c[v]; now += c[v] * p.now; open += c[v] * (p.open === null ? p.now : p.open); });
    return { count: count, now: now, open: open, save: open - now };
  }
  function byHousing(c, h) { var n = 0; VARIANTS.forEach(function (v) { if (split(v).h === h) n += c[v]; }); return n; }
  function badge(bump) {
    var n = totals(read()).count;
    $$("[data-cart-count]").forEach(function (b) {
      b.textContent = n; b.hidden = n === 0;
      if (bump) { b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
    });
  }
  function set(sel, v) { $$(sel).forEach(function (e) { e.textContent = v; }); }

  // ---------- rows for the booklet and trifold variants: cloned from the housing's standard row ----------
  function cloneRows(scope) {
    var r = scope || document;
    HOUSINGS.forEach(function (h) {
      var tpl = $('[data-line-row="' + h + '"]', r);
      if (!tpl || tpl.dataset.cloned) return;
      tpl.dataset.cloned = "1";
      var after = tpl;
      ["booklet", "trifold"].forEach(function (s) {
        var v = vid(h, s), p = price(v), el = tpl.cloneNode(true);
        el.setAttribute("data-line-row", v);
        $$("[data-line-q],[data-line-now],[data-line-open],[data-cart-step],[data-cart-remove]", el).forEach(function (x) {
          ["data-line-q", "data-line-now", "data-line-open", "data-cart-step", "data-cart-remove"].forEach(function (a) { if (x.hasAttribute(a)) x.setAttribute(a, v); });
          if (x.hasAttribute("aria-label")) x.setAttribute("aria-label", x.getAttribute("aria-label").replace(/HGA (Glass|Poly)|(Glass|Poly) (slots|passes)/, p.name));
        });
        $$("h2, .co-line > div > b, .sl > span:first-child", el).forEach(function (t) {
          t.innerHTML = t.innerHTML.replace(/HGA (Glass|Poly)/, p.name);
        });
        $$(".l-unit", el).forEach(function (u) { u.innerHTML = "<b>" + money(p.now) + "</b> a card" + (p.open === null ? "" : " <s>" + money(p.open) + "</s>"); });
        $$(".l-meta", el).forEach(function (m) { m.textContent = m.textContent.replace(/^Graded on the date you book/, "Graded on the date you book · " + p.size.toLowerCase()); });
        if (p.open === null) $$("[data-line-open]", el).forEach(function (x) { x.hidden = true; });
        after.insertAdjacentElement("afterend", el);
        after = el;
      });
    });
  }

  // Fills every data-c-* hook on the page from a cart (or a placed order).
  function fill(c, scope) {
    var t = totals(c);
    var r = scope || document;
    cloneRows(r);
    VARIANTS.forEach(function (v) {
      var p = price(v);
      $$('[data-line-row="' + v + '"]', r).forEach(function (e) { e.hidden = c[v] === 0; });
      $$('[data-line-q="' + v + '"]', r).forEach(function (e) { if ("value" in e && e.tagName === "INPUT") e.value = c[v]; else e.textContent = c[v]; });
      $$('[data-line-now="' + v + '"]', r).forEach(function (e) { e.textContent = money(c[v] * p.now); });
      $$('[data-line-open="' + v + '"]', r).forEach(function (e) { e.textContent = p.open === null ? "" : money(c[v] * p.open); });
    });
    HOUSINGS.forEach(function (h) {
      $$('[data-xsell="' + h + '"]', r).forEach(function (e) { e.hidden = !(byHousing(c, h) === 0 && t.count > 0); });
    });
    $$("[data-c-count]", r).forEach(function (e) { e.textContent = t.count + (t.count === 1 ? " pass" : " passes"); });
    $$("[data-c-verb]", r).forEach(function (e) { e.textContent = t.count === 1 ? "is" : "are"; });
    $$("[data-c-sub]", r).forEach(function (e) { e.textContent = money(t.open); });
    $$("[data-c-save]", r).forEach(function (e) { e.textContent = "-" + money(t.save); });
    $$("[data-c-save-plain]", r).forEach(function (e) { e.textContent = money(t.save); });
    $$("[data-c-total]", r).forEach(function (e) { e.textContent = money(t.now); });
    $$("[data-c-empty]", r).forEach(function (e) { e.hidden = t.count > 0; });
    $$("[data-c-full]", r).forEach(function (e) { e.hidden = t.count === 0; });
    $$("[data-c-go]", r).forEach(function (e) { e.classList.toggle("is-off", t.count === 0); e.setAttribute("aria-disabled", String(t.count === 0)); });
  }
  function render() { if (!$("[data-thanks]")) fill(read()); }

  // ---------- home builder: add the chosen quantities ----------
  $$("[data-add-cart]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      if (a.classList.contains("is-off")) return;
      var c = read();
      HOUSINGS.forEach(function (h) { var i = $('[data-qty="' + h + '"]'); if (i) c[h] = clamp(i.value); });
      write(c);
      location.href = a.getAttribute("href");
    });
  });

  // ---------- PDP ----------
  var pdp = $("[data-pdp]");
  if (pdp) {
    var params = new URLSearchParams(location.search);
    var st = { h: params.get("h") === "poly" ? "poly" : "glass", s: SIZE_IDS.indexOf(params.get("size")) >= 0 ? params.get("size") : "std", q: 1 };
    var cur = function () { return price(vid(st.h, st.s)); };
    var pdpRender = function () {
      var quote = st.s === "oversized", p = quote ? null : cur();
      $$("[data-pdp-pick]").forEach(function (r) { r.checked = r.value === st.h; r.closest(".hopt").classList.toggle("on", r.checked); });
      HOUSINGS.forEach(function (h) {
        var sz = SIZES[quote ? "std" : st.s], pr = sz[h];
        $$('[data-ho-now="' + h + '"]').forEach(function (e) { e.textContent = money(pr[0]); });
        $$('[data-ho-open="' + h + '"]').forEach(function (e) { e.textContent = pr[1] === null ? "" : money(pr[1]); e.hidden = pr[1] === null; });
      });
      $$("[data-pdp-size]").forEach(function (b) { var on = b.dataset.pdpSize === st.s; b.classList.toggle("on", on); b.setAttribute("aria-checked", String(on)); });
      $$("[data-sz-price]").forEach(function (e) { var sz = SIZES[e.dataset.szPrice]; e.textContent = sz.quote ? "On request" : money(sz[st.h][0]); });
      $$("[data-pdp-quote]").forEach(function (e) { e.hidden = !quote; });
      $$("[data-pdp-add],[data-pdp-buy]").forEach(function (b) { b.disabled = quote; b.setAttribute("aria-disabled", String(quote)); });
      $$("[data-slab]", pdp).forEach(function (s) { s.hidden = s.dataset.slab !== st.h; });
      $$("[data-pdp-only]").forEach(function (e) { e.hidden = e.dataset.pdpOnly !== st.h; });
      if (quote) { set("[data-pdp-name]", PRICES[st.h].name + " · Oversized"); set("[data-pdp-price]", "On request"); set("[data-pdp-total]", "On request"); set("[data-pdp-count]", st.q + (st.q === 1 ? " card" : " cards")); return; }
      set("[data-pdp-name]", p.name);
      set("[data-pdp-price]", money(p.now));
      set("[data-pdp-open]", p.open === null ? "" : money(p.open));
      set("[data-pdp-save]", p.open === null ? "" : money(p.open - p.now));
      set("[data-pdp-pct]", p.open === null ? "" : Math.round((1 - p.now / p.open) * 100) + "%");
      $$("[data-pdp-qty]").forEach(function (i) { if (document.activeElement !== i) i.value = st.q; });
      set("[data-pdp-count]", st.q + (st.q === 1 ? " pass" : " passes"));
      set("[data-pdp-total]", money(st.q * p.now));
      set("[data-pdp-total-open]", p.open === null ? "" : money(st.q * p.open));
      set("[data-pdp-total-save]", p.open === null ? "" : money(st.q * (p.open - p.now)));
      $$("[data-pdp-saveline]").forEach(function (e) { e.textContent = p.open === null ? "Presale pricing. Launch pricing for " + p.size.toLowerCase() + "s publishes Feb 1." : "Save " + money(p.open - p.now) + " a card on " + p.housing.replace("HGA ", "") + " vs launch pricing"; });
      $$("[data-pdp-quick]").forEach(function (b) { b.setAttribute("aria-pressed", String(Number(b.dataset.pdpQuick) === st.q)); });
    };
    $$("[data-pdp-pick]").forEach(function (r) { r.addEventListener("change", function () { st.h = r.value; pdpRender(); }); });
    $$("[data-pdp-size]").forEach(function (b) { b.addEventListener("click", function () { st.s = b.dataset.pdpSize; pdpRender(); }); });
    $$("[data-pdp-step]").forEach(function (b) { b.addEventListener("click", function () { st.q = Math.max(1, clamp(st.q + Number(b.dataset.pdpStep))); pdpRender(); }); });
    $$("[data-pdp-quick]").forEach(function (b) { b.addEventListener("click", function () { st.q = Number(b.dataset.pdpQuick); pdpRender(); }); });
    var qi = $("[data-pdp-qty]");
    if (qi) {
      qi.addEventListener("input", function () { st.q = Math.max(1, clamp(qi.value)); pdpRender(); });
      qi.addEventListener("blur", function () { qi.value = st.q; });
    }
    var toast = $("[data-added]");
    $$("[data-pdp-add]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (st.s === "oversized") return;
        add(vid(st.h, st.s), st.q);
        if (toast) {
          set("[data-added-what]", st.q + " × " + PRICES[st.h].name);
          set("[data-added-what]", st.q + " × " + cur().name);
          toast.hidden = false;
          requestAnimationFrame(function () { toast.classList.add("show"); });
          clearTimeout(toast._t);
          toast._t = setTimeout(function () { toast.classList.remove("show"); }, 6000);
        }
      });
    });
    $$("[data-added-close]").forEach(function (b) { b.addEventListener("click", function () { toast.classList.remove("show"); }); });
    $$("[data-pdp-buy]").forEach(function (b) { b.addEventListener("click", function () { if (st.s === "oversized") return; add(vid(st.h, st.s), st.q); location.href = "checkout.html"; }); });

    // sticky add to cart once the buy box button leaves the screen
    var bar = $("[data-pdp-bar]"), anchor = $("[data-pdp-anchor]"), stop = $("[data-pdp-stop]");
    if (bar && anchor && "IntersectionObserver" in window) {
      var past = false, stopped = false;
      var upd = function () { bar.classList.toggle("show", past && !stopped); };
      new IntersectionObserver(function (es) { past = !es[0].isIntersecting && es[0].boundingClientRect.top < 0; upd(); }).observe(anchor);
      if (stop) new IntersectionObserver(function (es) { stopped = es[0].isIntersecting; upd(); }).observe(stop);
    }
    pdpRender();
  }


  // ---------- claim buttons (variation A): add one slot and open the cart ----------
  $$("[data-claim]").forEach(function (b) {
    b.addEventListener("click", function () { add(b.dataset.claim === "poly" ? "poly" : "glass", 1); location.href = "cart.html"; });
  });
  // ---------- cart page + checkout summary controls (delegated: the booklet rows are cloned at run time) ----------
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-cart-step],[data-cart-remove],[data-cart-add]") : null;
    if (!b) return;
    var c = read();
    if (b.hasAttribute("data-cart-step")) { var v = b.dataset.cartStep; c[v] = clamp(c[v] + Number(b.dataset.d)); write(c); }
    else if (b.hasAttribute("data-cart-remove")) { c[b.dataset.cartRemove] = 0; write(c); }
    else if (b.hasAttribute("data-cart-add")) { add(b.dataset.cartAdd, Number(b.dataset.n || 1)); }
  });
  document.addEventListener("change", function (e) {
    var i = e.target;
    if (i && i.tagName === "INPUT" && i.hasAttribute("data-line-q")) { var c = read(); c[i.dataset.lineQ] = clamp(i.value); write(c); }
  });
  $$("[data-c-go]").forEach(function (a) { a.addEventListener("click", function (e) { if (a.classList.contains("is-off")) e.preventDefault(); }); });

  // ---------- checkout ----------
  var co = $("[data-checkout-form]");
  if (co) {
    var gift = $("[data-gift-toggle]"), giftFields = $("[data-gift-fields]");
    if (gift) gift.addEventListener("change", function () {
      giftFields.hidden = !gift.checked;
      $$("input", giftFields).forEach(function (i) { i.required = gift.checked && i.dataset.req === "1"; });
    });
    var cc = $("[data-cc]");
    if (cc) cc.addEventListener("input", function () {
      var d = cc.value.replace(/\D/g, "").slice(0, 16);
      cc.value = d.replace(/(.{4})/g, "$1 ").trim();
    });
    var exp = $("[data-exp]");
    if (exp) exp.addEventListener("input", function () {
      var d = exp.value.replace(/\D/g, "").slice(0, 4);
      exp.value = d.length > 2 ? d.slice(0, 2) + " / " + d.slice(2) : d;
    });
    var place = function (method) {
      var c = read();
      if (totals(c).count === 0) { location.href = "cart.html"; return; }
      var email = ($("#co-email") || {}).value || "you@example.com";
      var order = {
        num: "HGA-" + String(Date.now()).slice(-6),
        items: c, poly: byHousing(c, "poly"), glass: byHousing(c, "glass"), email: email,
        name: ($("#co-first") || {}).value || "",
        gift: gift && gift.checked ? (($("#gift-email") || {}).value || "") : "",
        method: method
      };
      try { localStorage.setItem(ORDER, JSON.stringify(order)); } catch (e) {}
      try { sessionStorage.setItem(ORDER, JSON.stringify(order)); } catch (e) {}
      write(empty());
      location.href = "thank-you.html";
    };
    // inline errors: a message under each invalid field, first one focused
    var msg = function (f) {
      if (f.validity.valueMissing) return f.type === "checkbox" ? "Please confirm to continue." : "This field is required.";
      if (f.validity.typeMismatch) return "Enter a valid email address.";
      return f.validationMessage;
    };
    var clear = function (f) {
      f.removeAttribute("aria-invalid");
      var e = document.getElementById(f.id + "-err"); if (e) e.remove();
    };
    co.addEventListener("invalid", function (e) {
      var f = e.target; e.preventDefault();
      if (!f.id) f.id = "f" + Math.random().toString(36).slice(2, 8);
      clear(f);
      var p = document.createElement("p");
      p.className = "err"; p.id = f.id + "-err"; p.textContent = msg(f);
      f.setAttribute("aria-invalid", "true"); f.setAttribute("aria-describedby", p.id);
      (f.type === "checkbox" ? f.closest(".chk") : f).insertAdjacentElement("afterend", p);
      if (!co._focused) { co._focused = true; f.focus(); setTimeout(function () { co._focused = false; }, 0); }
    }, true);
    $$("input,select,textarea", co).forEach(function (f) { f.addEventListener("input", function () { if (f.checkValidity()) clear(f); }); f.addEventListener("change", function () { if (f.checkValidity()) clear(f); }); });
    co.addEventListener("submit", function (e) { e.preventDefault(); place("card"); });
    $$("[data-express]").forEach(function (b) { b.addEventListener("click", function () { place(b.dataset.express); }); });
  }

  // ---------- thank you ----------
  var ty = $("[data-thanks]");
  if (ty) {
    var o = null;
    try { o = JSON.parse(localStorage.getItem(ORDER) || "null"); } catch (e) {}
    if (!o) o = { num: "HGA-204117", poly: 2, glass: 1, email: "you@example.com", name: "", gift: "" };
    var items = o.items ? norm(o.items) : norm({ poly: o.poly, glass: o.glass });
    fill(items, ty);
    set("[data-o-num]", o.num);
    set("[data-o-email]", o.email);
    if (o.name) set("[data-o-name]", ", " + o.name);
    $$("[data-o-gift]").forEach(function (e) { e.hidden = !o.gift; });
    set("[data-o-gift-email]", o.gift);

    // one pass card per card bought, up to 6 shown
    var tpl = $("[data-pass-tpl]"), wall = $("[data-pass-wall]"), more = $("[data-pass-more]");
    if (tpl && wall) {
      // show a mix when both housings were bought: up to 3 of each, then fill
      var og = byHousing(items, "glass"), op = byHousing(items, "poly");
      var g = Math.min(og, op ? 3 : 6), pl = Math.min(op, 6 - g);
      g = Math.min(og, 6 - pl);
      var list = [], total = og + op;
      for (var i = 0; i < g; i++) list.push("glass");
      for (var j = 0; j < pl; j++) list.push("poly");
      list.forEach(function (h, k) {
        var el = tpl.cloneNode(true);
        el.removeAttribute("data-pass-tpl"); el.hidden = false;
        el.classList.add(h);
        $("[data-pass-h]", el).textContent = PRICES[h].name;
        $("[data-pass-logo]", el).src = h === "glass" ? "./assets/hybrid_grading/hga-glass-828ebfd2.svg" : "./assets/hybrid_grading/hga-poly-69885480.svg";
        $("[data-pass-logo]", el).alt = PRICES[h].name;
        var code = o.num.replace("HGA-", "") + "-" + String(k + 1).padStart(3, "0");
        $("[data-pass-code]", el).textContent = "PASS " + code;
        el.style.setProperty("--i", k);
        wall.insertBefore(el, more || null);
      });
      if (more) { more.hidden = total <= 6; more.textContent = "+" + (total - 6) + " more in My Passes"; }
    }

    // a calendar reminder for the day booking opens
    var ics = $("[data-ics]");
    if (ics) {
      var body = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//HGA//Presale//EN", "BEGIN:VEVENT",
        "UID:hga-calendar-opens-2027@hybridgrading.com", "DTSTAMP:20261101T000000Z",
        "DTSTART;VALUE=DATE:20270201", "DTEND;VALUE=DATE:20270202",
        "SUMMARY:HGA grading calendar opens: reserve your grading day",
        "DESCRIPTION:Your HGA passes are ready to book. Reserve any open day up to a year ahead from My Passes.",
        "END:VEVENT", "END:VCALENDAR"].join("\r\n");
      try { ics.href = URL.createObjectURL(new Blob([body], { type: "text/calendar" })); } catch (e) {}
    }
  }

  $$("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var done = function () { var t = b.dataset.label || b.textContent; b.dataset.label = t; b.textContent = "Link copied"; setTimeout(function () { b.textContent = t; }, 2000); };
      try { navigator.clipboard.writeText(b.dataset.copy).then(done, done); } catch (e) { done(); }
    });
  });

  window.HGA_PRICES = PRICES; window.HGA_SIZES = SIZES;
  badge(false);
  render();
})();
