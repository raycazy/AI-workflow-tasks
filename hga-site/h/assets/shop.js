// HGA redesign: the shopping flow. One cart shared by home, PDP, cart,
// checkout and thank you. Kept in localStorage per viewer; the page still
// works (in memory) when storage is blocked. Payments are not wired: placing
// an order stores a demo order and opens the thank you page.
// 2026-10-31 (HGA_PreSale_Pricing): the cart holds variants, housing x card type.
// Ids: glass, poly (standard cards, the old shape), glass-oversized, poly-oversized,
// glass-booklet1 to glass-booklet5, poly-booklet1 to poly-booklet5 (the number is the fold count).
(function () {
  "use strict";

  // ===== PRICE TABLE: written by the build from _tools/hga_pricing.json. Edit prices there (or here in a handoff copy). =====
  var TABLE = {"presale_ends":"Jan 31","max_folds":5,"value_fee":{"threshold":10000,"pct":2.5},"bulk":{"poly":{"min":5,"now":null}},"housings":{"glass":{"name":"HGA Glass","includes":["Four subgrades and a full grading report","RFID chip in the label","Metal and glass housing","Your grading date on the calendar"]},"poly":{"name":"HGA Poly","includes":["Four subgrades and a full grading report","Digital record on your UCollect account","Protective poly housing","Your grading date on the calendar"]}},"types":{"std":{"name":"Standard card","note":"Standard size trading cards.","glass":{"now":200,"open":600,"days":30},"poly":{"now":29,"open":150,"days":60}},"oversized":{"name":"Oversized card","note":"Emanate, Cleat, Jumbo and other cards larger than standard size.","glass":{"now":600,"open":null,"days":30},"poly":{"now":90,"open":null,"days":30}},"booklet":{"name":"Booklet","note":"Folding booklet cards, priced by the number of folds.","glass":{"base":200,"fold":100,"open":null,"days":60},"poly":{"base":30,"fold":15,"open":null,"days":60}}}};
  // ===========================================================================================================================

  var PRICES = {
    poly: { now: TABLE.types.std.poly.now, open: TABLE.types.std.poly.open, name: TABLE.housings.poly.name },
    glass: { now: TABLE.types.std.glass.now, open: TABLE.types.std.glass.open, name: TABLE.housings.glass.name }
  };
  var SIZES = TABLE.types, MAXF = TABLE.max_folds, BULK = TABLE.bulk || {};
  var HOUSINGS = ["glass", "poly"], SIZE_IDS = ["std", "oversized", "booklet"];
  var VARIANTS = [];
  HOUSINGS.forEach(function (h) {
    VARIANTS.push(h, h + "-oversized");
    for (var f = 1; f <= MAXF; f++) VARIANTS.push(h + "-booklet" + f);
  });
  function vid(h, s, f) { return s === "std" ? h : s === "booklet" ? h + "-booklet" + (f || 1) : h + "-" + s; }
  function split(v) {
    var p = v.split("-"), m = /^booklet(\d)$/.exec(p[1] || "");
    return { h: p[0], s: m ? "booklet" : (p[1] || "std"), f: m ? Number(m[1]) : 0 };
  }
  function folds(f) { return f + (f === 1 ? " fold" : " folds"); }
  function price(v) {
    var x = split(v), sz = SIZES[x.s], pr = sz[x.h];
    var now = x.s === "booklet" ? pr.base + pr.fold * x.f : pr.now;
    var open = pr.open === null || pr.open === undefined ? null : (x.s === "booklet" ? pr.open + (pr.open_fold || 0) * x.f : pr.open);
    var size = x.s === "booklet" ? sz.name + ", " + folds(x.f) : sz.name;
    return { now: now, open: open, days: pr.days, name: PRICES[x.h].name + (x.s === "std" ? "" : " · " + size), housing: PRICES[x.h].name, size: size, h: x.h, s: x.s, f: x.f };
  }
  // the unit price in a given cart: Poly bulk pricing (when set) applies to standard Poly cards at the minimum count
  function unit(v, c) {
    var p = price(v), b = BULK[p.h];
    if (p.s === "std" && b && b.now !== null && b.now !== undefined && c[v] >= b.min) return b.now;
    return p.now;
  }
  var KEY = "hga_cart", ORDER = "hga_last_order";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var money = function (n) { return "$" + n.toLocaleString("en-US"); };
  var clamp = function (n) { n = parseInt(n, 10); return isNaN(n) ? 0 : Math.max(0, Math.min(100, n)); };
  var empty = function () { var c = {}; VARIANTS.forEach(function (v) { c[v] = 0; }); return c; };
  var mem = empty();

  // older carts: booklet = one fold, trifold = two folds
  var OLD = { "glass-booklet": "glass-booklet1", "poly-booklet": "poly-booklet1", "glass-trifold": "glass-booklet2", "poly-trifold": "poly-booklet2" };
  function norm(c) {
    var o = empty();
    VARIANTS.forEach(function (v) { o[v] = clamp(c && c[v]); });
    if (c) Object.keys(OLD).forEach(function (k) { if (c[k]) o[OLD[k]] = clamp(o[OLD[k]] + clamp(c[k])); });
    return o;
  }
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
    VARIANTS.forEach(function (v) { var p = price(v), u = unit(v, c); count += c[v]; now += c[v] * u; open += c[v] * (p.open === null ? u : p.open); });
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
  function unitHtml(u, p) { return "<b>" + money(u) + "</b> a card" + (p.open === null || u !== p.now ? "" : " <s>" + money(p.open) + "</s>"); }
  function meta(p) { return p.size + " · grading date from " + p.days + " business days out"; }

  // ---------- rows for the oversized and booklet variants: cloned from the housing's standard row ----------
  function cloneRows(scope) {
    var r = scope || document;
    HOUSINGS.forEach(function (h) {
      var tpl = $('[data-line-row="' + h + '"]', r);
      if (!tpl || tpl.dataset.cloned) return;
      tpl.dataset.cloned = "1";
      var after = tpl;
      VARIANTS.filter(function (v) { return v !== h && split(v).h === h; }).forEach(function (v) {
        var p = price(v), el = tpl.cloneNode(true);
        el.setAttribute("data-line-row", v);
        $$("[data-line-q],[data-line-now],[data-line-open],[data-cart-step],[data-cart-remove]", el).forEach(function (x) {
          ["data-line-q", "data-line-now", "data-line-open", "data-cart-step", "data-cart-remove"].forEach(function (a) { if (x.hasAttribute(a)) x.setAttribute(a, v); });
          if (x.hasAttribute("aria-label")) x.setAttribute("aria-label", x.getAttribute("aria-label").replace(/HGA (Glass|Poly)|(Glass|Poly) (slots|passes)/, p.name));
        });
        $$("h2, .co-line > div > b, .sl > span:first-child", el).forEach(function (t) {
          t.innerHTML = t.innerHTML.replace(/HGA (Glass|Poly)/, p.name);
        });
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
      var p = price(v), u = unit(v, c), strike = p.open !== null && u === p.now;
      $$('[data-line-row="' + v + '"]', r).forEach(function (e) {
        e.hidden = c[v] === 0;
        $$(".l-unit", e).forEach(function (x) { x.innerHTML = unitHtml(u, p); });
        $$(".l-meta", e).forEach(function (x) { x.textContent = meta(p); });
        $$(".co-line > div > span", e).forEach(function (x) { x.textContent = "Presale pass · " + meta(p); });
      });
      $$('[data-line-q="' + v + '"]', r).forEach(function (e) { if ("value" in e && e.tagName === "INPUT") e.value = c[v]; else e.textContent = c[v]; });
      $$('[data-line-now="' + v + '"]', r).forEach(function (e) { e.textContent = money(c[v] * u); });
      $$('[data-line-open="' + v + '"]', r).forEach(function (e) { e.textContent = strike ? money(c[v] * p.open) : ""; e.hidden = !strike; });
    });
    HOUSINGS.forEach(function (h) {
      $$('[data-xsell="' + h + '"]', r).forEach(function (e) { e.hidden = !(byHousing(c, h) === 0 && t.count > 0); });
    });
    $$("[data-c-count]", r).forEach(function (e) { e.textContent = t.count + (t.count === 1 ? " pass" : " passes"); });
    $$("[data-c-verb]", r).forEach(function (e) { e.textContent = t.count === 1 ? "is" : "are"; });
    $$("[data-c-sub]", r).forEach(function (e) { e.textContent = money(t.open); });
    $$("[data-c-save]", r).forEach(function (e) { e.textContent = "-" + money(t.save); });
    $$("[data-c-save-plain]", r).forEach(function (e) {
      e.textContent = money(t.save);
      var box = e.closest(".co-saved"); if (box) box.hidden = t.save === 0;
      var lead = e.previousSibling;  // "1 pass · saving $X" in the checkout bar
      if (lead && lead.nodeType === 3) { if (!e._lead) e._lead = lead.textContent; lead.textContent = t.save === 0 ? "" : e._lead; e.hidden = t.save === 0; }
    });
    // oversized and booklets have no launch price yet: no "Launch pricing" or "-$0" savings rows when nothing is saved
    $$("[data-c-sub],[data-c-save]", r).forEach(function (e) { var row = e.closest(".sl"); if (row) row.hidden = t.save === 0; });
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

  // ---------- pricing cards (PSA style): prices drawn from the table ----------
  $$("[data-pt-now]").forEach(function (e) { e.textContent = money(price(e.dataset.ptNow).now); });
  $$("[data-pt-open]").forEach(function (e) { var p = price(e.dataset.ptOpen); e.textContent = p.open === null ? "" : money(p.open); e.hidden = p.open === null; });

  // ---------- PDP ----------
  var pdp = $("[data-pdp]");
  if (pdp) {
    var params = new URLSearchParams(location.search);
    var pf = clamp(params.get("folds"));
    var st = { h: params.get("h") === "poly" ? "poly" : "glass", s: SIZE_IDS.indexOf(params.get("size")) >= 0 ? params.get("size") : "std", f: pf >= 1 && pf <= MAXF ? pf : 1, q: 1 };
    if (!$("[data-pdp-size]")) { st.s = "std"; st.f = 1; }  // pages without the picker (pass.html) sell standard cards
    var cur = function () { return price(vid(st.h, st.s, st.f)); };
    var pdpRender = function () {
      var p = cur(), qc = read(), b = BULK[st.h];
      qc[vid(st.h, st.s, st.f)] += st.q;  // bulk counts what is already in the cart
      var u = unit(vid(st.h, st.s, st.f), qc), strike = p.open !== null && u === p.now;
      $$("[data-pdp-pick]").forEach(function (r) { r.checked = r.value === st.h; r.closest(".hopt").classList.toggle("on", r.checked); });
      HOUSINGS.forEach(function (h) {
        var hp = price(vid(h, st.s, st.f));
        $$('[data-ho-now="' + h + '"]').forEach(function (e) { e.textContent = money(hp.now); });
        $$('[data-ho-open="' + h + '"]').forEach(function (e) { e.textContent = hp.open === null ? "" : money(hp.open); e.hidden = hp.open === null; });
      });
      $$("[data-pdp-size]").forEach(function (x) { var on = x.dataset.pdpSize === st.s; x.classList.toggle("on", on); x.setAttribute("aria-checked", String(on)); });
      $$("[data-sz-price]").forEach(function (e) { var s = e.dataset.szPrice; e.textContent = (s === "booklet" ? "From " : "") + money(price(vid(st.h, s, 1)).now); });
      $$("[data-sz-note]").forEach(function (e) { e.textContent = SIZES[st.s].note; });
      $$("[data-pdp-folds]").forEach(function (e) { e.hidden = st.s !== "booklet"; });
      $$("[data-pdp-fold]").forEach(function (x) {
        var f = Number(x.dataset.pdpFold), on = f === st.f;
        x.classList.toggle("on", on); x.setAttribute("aria-checked", String(on));
        $$("[data-fold-price]", x).forEach(function (e) { e.textContent = money(price(vid(st.h, "booklet", f)).now); });
      });
      $$("[data-pdp-days]").forEach(function (e) { e.textContent = p.days + " business days"; });
      $$("[data-slab]", pdp).forEach(function (s) { s.hidden = s.dataset.slab !== st.h; });
      $$("[data-pdp-only]").forEach(function (e) { e.hidden = e.dataset.pdpOnly !== st.h; });
      $$("[data-pdp-bulk]").forEach(function (e) {
        var on = st.s === "std" && b && b.now !== null && b.now !== undefined;
        e.hidden = !on;
        if (on) e.textContent = b.min + " or more " + p.housing.replace("HGA ", "") + " cards: " + money(b.now) + " a card";
      });
      set("[data-pdp-name]", p.name);
      set("[data-pdp-hname]", p.housing);
      set("[data-pdp-price]", money(p.now));
      set("[data-pdp-open]", p.open === null ? "" : money(p.open));
      set("[data-pdp-save]", p.open === null ? "" : money(p.open - p.now));
      set("[data-pdp-pct]", p.open === null ? "" : Math.round((1 - p.now / p.open) * 100) + "%");
      $$("[data-pdp-qty]").forEach(function (i) { if (document.activeElement !== i) i.value = st.q; });
      set("[data-pdp-count]", st.q + (st.q === 1 ? " pass" : " passes") + (st.s === "std" ? "" : " · " + p.size));
      set("[data-pdp-total]", money(st.q * u));
      set("[data-pdp-total-open]", strike ? money(st.q * p.open) : "");
      set("[data-pdp-total-save]", strike ? money(st.q * (p.open - p.now)) : "");
      $$("[data-pdp-saveline]").forEach(function (e) {
        e.textContent = u !== p.now ? "Bulk price applied: " + money(u) + " a card at " + b.min + " or more"
          : strike ? "Save " + money(p.open - p.now) + " a card on " + p.housing.replace("HGA ", "") + " vs launch pricing"
          : "Presale price through " + TABLE.presale_ends + ".";
      });
      $$("[data-pdp-quick]").forEach(function (x) { x.setAttribute("aria-pressed", String(Number(x.dataset.pdpQuick) === st.q)); });
      // one tab stop per radio group (the checked button); arrows move inside
      $$("[data-pdp-size],[data-pdp-fold]").forEach(function (x) { x.tabIndex = x.getAttribute("aria-checked") === "true" ? 0 : -1; });
      // the address keeps the choice, so a reload or a shared link opens the same variant
      if ($("[data-pdp-size]") && window.history && history.replaceState) {
        var u = new URLSearchParams(location.search);
        u.set("h", st.h); u.set("size", st.s);
        if (st.s === "booklet") u.set("folds", st.f); else u.delete("folds");
        try { history.replaceState(history.state, "", location.pathname + "?" + u.toString() + location.hash); } catch (e) {}
      }
    };
    $$("[data-pdp-pick]").forEach(function (r) { r.addEventListener("change", function () { st.h = r.value; pdpRender(); }); });
    $$("[data-pdp-size]").forEach(function (x) { x.addEventListener("click", function () { st.s = x.dataset.pdpSize; pdpRender(); }); });
    $$("[data-pdp-fold]").forEach(function (x) { x.addEventListener("click", function () { st.f = Number(x.dataset.pdpFold); pdpRender(); }); });
    // arrow keys move within the card type and fold radio groups
    $$(".szs,.folds").forEach(function (g) {
      g.addEventListener("keydown", function (e) {
        if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].indexOf(e.key) < 0) return;
        var bs = $$("[role=radio]", g), i = bs.indexOf(document.activeElement);
        if (i < 0) return;
        e.preventDefault();
        var n = e.key === "Home" ? bs[0] : e.key === "End" ? bs[bs.length - 1] : bs[(i + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : bs.length - 1)) % bs.length];
        n.focus(); n.click();
      });
    });
    // the pricing cards pick a variant here instead of reloading the page
    $$("[data-pt-pick]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        var q = new URLSearchParams(((a.getAttribute("href") || "").split("#")[0].split("?")[1]) || "");
        e.preventDefault();
        st.h = q.get("h") === "poly" ? "poly" : "glass";
        st.s = SIZE_IDS.indexOf(q.get("size")) >= 0 ? q.get("size") : "std";
        st.f = 1;
        pdpRender();
        var top = $(".sh-buy") || pdp;
        top.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    $$("[data-pdp-step]").forEach(function (x) { x.addEventListener("click", function () { st.q = Math.max(1, clamp(st.q + Number(x.dataset.pdpStep))); pdpRender(); }); });
    $$("[data-pdp-quick]").forEach(function (x) { x.addEventListener("click", function () { st.q = Number(x.dataset.pdpQuick); pdpRender(); }); });
    var qi = $("[data-pdp-qty]");
    if (qi) {
      qi.addEventListener("input", function () { st.q = Math.max(1, clamp(qi.value)); pdpRender(); });
      qi.addEventListener("blur", function () { qi.value = st.q; });
    }
    var toast = $("[data-added]");
    $$("[data-pdp-add]").forEach(function (x) {
      x.addEventListener("click", function () {
        add(vid(st.h, st.s, st.f), st.q);
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
    $$("[data-added-close]").forEach(function (x) { x.addEventListener("click", function () { toast.classList.remove("show"); }); });
    $$("[data-pdp-buy]").forEach(function (x) { x.addEventListener("click", function () { add(vid(st.h, st.s, st.f), st.q); location.href = "checkout.html"; }); });

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

  window.HGA_PRICES = PRICES; window.HGA_SIZES = SIZES; window.HGA_PRICING = TABLE;
  badge(false);
  render();
})();
