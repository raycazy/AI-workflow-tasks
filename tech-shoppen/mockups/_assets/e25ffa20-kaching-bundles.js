import { s as C, d as h, i as I, a as H, n as et, g as j, b as D, c as P, q as A, e as F, f as Yt, w as Vt, h as y, j as Zt, k as nt, o as it, l as J, m as O, p as L, r as te, t as ee, u as ne, v as Q, x as M, y as ie, z as re, A as ae, B as se, C as oe, D as le, E as ce, F as ue, G as de, H as pe } from "./kaching-bundles-api.js";
const he = () => {
  const i = /\b__kaching_/, t = ["script", "style"], e = (r) => {
    const a = document.createTreeWalker(r, NodeFilter.SHOW_TEXT, {
      acceptNode: (s) => {
        const l = s.parentElement;
        return !l || t.includes(l.tagName.toLowerCase()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    let o;
    for (; o = a.nextNode(); ) {
      const s = o.textContent || "";
      if (i.test(s)) {
        const l = o.parentElement;
        if (l.classList.contains("properties-key-value-key"))
          continue;
        if (l.tagName.toLowerCase() === "dt") {
          const c = l.nextElementSibling;
          (c == null ? void 0 : c.tagName.toLowerCase()) === "dd" && (c.style.display = "none");
        }
        l.style.display = "none", C(
          "kaching_property_hidden",
          {
            text: s,
            element: l.tagName
          },
          0.01
        );
      }
    }
  };
  new MutationObserver((r) => {
    for (const a of r)
      for (const o of a.addedNodes)
        o.nodeType === Node.ELEMENT_NODE && e(o);
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  }), e(document.body);
}, fe = () => {
  const i = document.querySelector('link[href*="kaching-bundles.css"]');
  if (!i) return;
  const t = i.closest(
    'div[data-block-type="liquid"]'
  );
  t && (t.dataset.blockType = "liquid-kaching-fix");
}, $ = ({
  country: i,
  language: t
}) => {
  const e = [];
  return i && e.push(`country: ${i}`), t && e.push(`language: ${t}`), e.length > 0 ? `@inContext(${e.join(", ")})` : "";
}, me = async (i, {
  productId: t,
  country: e,
  language: n
}) => {
  var a;
  const r = $({ country: e, language: n });
  return ((a = (await i.query(
    `
      query FetchComplementaryProductGIDs($productGID: ID!) ${r} {
        productRecommendations(productId: $productGID, intent: COMPLEMENTARY) {
          id
        }
      }
    `,
    {
      variables: {
        productGID: `gid://shopify/Product/${t}`
      }
    }
  )).productRecommendations) == null ? void 0 : a.map((o) => o.id)) || [];
}, ge = async (i, t, e = 200) => (t = t.filter(Boolean).filter((n) => !n.startsWith("placeholder")), t.length === 0 ? [] : (await i.query(
  `
      query FetchMediaImages($mediaImageIds: [ID!]!, $size: Int!) {
        nodes(ids: $mediaImageIds) {
          ... on MediaImage {
            id
            image {
              url(transform: { maxWidth: $size, maxHeight: $size })
            }
          }
        }
      }
    `,
  {
    variables: {
      mediaImageIds: t,
      size: e
    }
  }
)).nodes.filter(Boolean).map((n) => ({
  gid: n.id,
  url: n.image.url
}))), _e = async (i, t) => {
  if (!t.length) return [];
  const e = t.map((n) => `gid://shopify/Product/${n}`);
  return (await i.query(
    `
      query FetchNativeBundleProductIds($productGIDs: [ID!]!) {
        nodes(ids: $productGIDs) {
          ... on Product {
            id
            variants(first: 1) {
              nodes {
                requiresComponents
              }
            }
          }
        }
      }
    `,
    { variables: { productGIDs: e } }
  )).nodes.filter((n) => n !== null).filter(
    (n) => n.variants.nodes.some((r) => r.requiresComponents)
  ).map((n) => Number(n.id.split("/").pop()));
}, mt = async (i, {
  country: t,
  language: e,
  blockVisibility: n,
  excludedProductGIDs: r,
  selectedProductGIDs: a,
  selectedCollectionGIDs: o,
  limit: s = 1e3
}) => {
  switch (n) {
    case "selected-products":
      return a.slice(0, s);
    case "all-products":
    case "excluded-products": {
      const l = $({ country: t, language: e });
      let c = [], u = null;
      for (; c.length < s; ) {
        const d = Math.min(s - c.length, 250), m = await i.query(
          `
            query FetchProductGIDs($limit: Int!, $cursor: String) ${l} {
              products(first: $limit, after: $cursor) {
                nodes {
                  id
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          `,
          {
            variables: {
              limit: d,
              cursor: u
            }
          }
        );
        if (c.push(...m.products.nodes.map((p) => p.id)), !m.products.pageInfo.hasNextPage) break;
        u = m.products.pageInfo.endCursor;
      }
      if (n === "excluded-products") {
        const d = new Set(r);
        c = c.filter((m) => !d.has(m));
      }
      return c;
    }
    case "selected-collections": {
      const l = $({ country: t, language: e }), c = (await i.query(
        `
          query FetchCollectionProductGIDs($collectionGIDs: [ID!]!, $limit: Int!) ${l} {
            nodes(ids: $collectionGIDs) {
              ... on Collection {
                products(first: $limit) {
                  nodes {
                    id
                  }
                }
              }
            }
          }
        `,
        {
          variables: {
            collectionGIDs: o,
            limit: Math.min(s, 250)
          }
        }
      )).nodes.filter((u) => u !== null).flatMap(
        (u) => u.products.nodes.map((d) => d.id)
      );
      return Array.from(new Set(c)).slice(0, s);
    }
  }
}, xt = `
  id
  availableForSale
  price {
    amount
  }
  compareAtPrice {
    amount
  }
  selectedOptions {
    name
    value
  }
  image {
    id
    url(transform: { maxWidth: 200, maxHeight: 200 })
  }
  unitPriceMeasurement {
    quantityUnit
    quantityValue
    referenceUnit
    referenceValue
  }
  requiresComponents
  sellingPlanAllocations(first: 100) @include(if: $includeSellingPlans) {
    nodes {
      sellingPlan {
        id
      }
      priceAdjustments {
        price {
          amount
        }
        compareAtPrice {
          amount
        }
        perDeliveryPrice {
          amount
        }
      }
    }
  }
  quantityAvailable @include(if: $includeAvailableQuantity)
`, z = async (i, {
  country: t,
  language: e,
  productIds: n,
  includeSellingPlans: r = !0,
  includeAvailableQuantity: a = !0,
  useExternalMetafieldNamespace: o = !1,
  batchSize: s = 250,
  onBatchError: l
}) => {
  if (!n.length)
    return [];
  const c = n.map((_) => typeof _ == "string" && _.startsWith("gid://") ? _ : `gid://shopify/Product/${_}`), u = `
    query FetchProducts($productGIDs: [ID!]!, $includeSellingPlans: Boolean!, $includeAvailableQuantity: Boolean!, $metafieldNamespace: String!) ${$({ country: t, language: e })} {
      nodes(ids: $productGIDs) {
        ... on Product {
          id
          handle
          onlineStoreUrl
          availableForSale
          createdAt
          title
          featuredImage {
            url
          }
          options {
            name
            optionValues {
              id
              name
              swatch {
                color
                image {
                  previewImage {
                    url(transform: { maxWidth: 200, maxHeight: 200 })
                  }
                }
              }
            }
          }
          variants(first: 250) {
            nodes {
              ${xt}
            }
          }
          collections(first: 50) {
            nodes {
              id
            }
          }
          metafield: metafield(namespace: $metafieldNamespace, key: "text") {
            value
          }
          metafield2: metafield(namespace: $metafieldNamespace, key: "text2") {
            value
          }
          metafield3: metafield(namespace: $metafieldNamespace, key: "text3") {
            value
          }
          metafield4: metafield(namespace: $metafieldNamespace, key: "text4") {
            value
          }
          requiresSellingPlan
          sellingPlanGroups(first: 100) @include(if: $includeSellingPlans) {
            nodes {
              sellingPlans(first: 100) {
                nodes {
                  id
                  name
                  priceAdjustments {
                    adjustmentValue {
                      __typename
                      ... on SellingPlanPercentagePriceAdjustment {
                        adjustmentPercentage
                      }
                      ... on SellingPlanFixedAmountPriceAdjustment {
                        adjustmentAmount {
                          amount
                        }
                      }
                      ... on SellingPlanFixedPriceAdjustment {
                        price {
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `, d = o ? "app--2935586817--kaching_bundles" : "$app:kaching_bundles", m = [], p = Math.min(s, 250);
  for (let _ = 0; _ < c.length; _ += p)
    m.push(c.slice(_, _ + p));
  const f = (_) => i.query(u, {
    variables: {
      productGIDs: _,
      includeSellingPlans: r,
      includeAvailableQuantity: a,
      metafieldNamespace: d
    }
  });
  let b;
  if (l) {
    const _ = await Promise.allSettled(m.map(f));
    for (const v of _)
      v.status === "rejected" && l(
        v.reason instanceof Error ? v.reason : new Error(String(v.reason))
      );
    b = _.filter(
      (v) => v.status === "fulfilled"
    ).flatMap((v) => v.value.nodes);
  } else
    b = (await Promise.all(m.map(f))).flatMap((_) => _.nodes);
  const k = b.filter((_) => _ != null);
  if (l) {
    const _ = await Promise.allSettled(
      k.map(async (g) => {
        const B = await gt(
          i,
          g,
          { includeSellingPlans: r, includeAvailableQuantity: a }
        );
        return _t(B, i.shopifyDomain);
      })
    ), v = [];
    for (const g of _)
      g.status === "fulfilled" ? v.push(g.value) : l(
        g.reason instanceof Error ? g.reason : new Error(String(g.reason))
      );
    return v;
  }
  return (await Promise.all(
    k.map(
      (_) => gt(i, _, {
        includeSellingPlans: r,
        includeAvailableQuantity: a
      })
    )
  )).map(
    (_) => _t(_, i.shopifyDomain)
  );
}, gt = async (i, t, e) => {
  if (t.variants.nodes.length < 250)
    return t;
  const n = /* @__PURE__ */ new Set(), r = [], a = [], o = async (s) => {
    let l = !0, c = null;
    for (; l; ) {
      const u = await i.query(
        `
          query($productGID: ID!, $cursor: String, $reverse: Boolean, $includeSellingPlans: Boolean!, $includeAvailableQuantity: Boolean!) {
            product(id: $productGID) {
              variants(first: 250, after: $cursor, reverse: $reverse) {
                nodes {
                  ${xt}
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          }
        `,
        {
          variables: {
            productGID: t.id,
            cursor: c,
            reverse: s,
            ...e
          }
        }
      ), { nodes: d, pageInfo: m } = u.product.variants;
      for (const p of d) {
        if (n.has(p.id)) {
          l = !1;
          break;
        }
        n.add(p.id), s ? a.push(p) : r.push(p);
      }
      m.hasNextPage || (l = !1), c = m.endCursor;
    }
  };
  return await Promise.all([
    o(!1),
    o(!0)
  ]), t.variants.nodes = [...r, ...a.reverse()], t;
}, _t = (i, t) => {
  var s, l, c, u, d, m;
  const e = i.variants.nodes.map(
    ({ unitPriceMeasurement: p, ...f }) => {
      var b, k, _;
      return {
        id: Number(f.id.split("/").pop()),
        availableForSale: f.availableForSale,
        price: Math.round(Number(f.price.amount) * 100),
        compareAtPrice: f.compareAtPrice ? Math.round(Number(f.compareAtPrice.amount) * 100) : null,
        options: f.selectedOptions.map((v) => v.value),
        imageId: f.image ? Number(f.image.id.split("/").pop()) : null,
        image: ((b = f.image) == null ? void 0 : b.url) || null,
        sellingPlans: ((k = f.sellingPlanAllocations) == null ? void 0 : k.nodes.map((v) => ({
          id: Number(v.sellingPlan.id.split("/").pop()),
          price: v.priceAdjustments.length > 0 ? Math.round(Number(v.priceAdjustments[0].price.amount) * 100) : Math.round(Number(f.price.amount) * 100),
          compareAtPrice: v.priceAdjustments.length > 0 ? Math.round(
            Number(v.priceAdjustments[0].compareAtPrice.amount) * 100
          ) : Math.round(Number(f.price.amount) * 100),
          perDeliveryPrice: v.priceAdjustments.length > 0 ? Math.round(
            Number(v.priceAdjustments[0].perDeliveryPrice.amount) * 100
          ) : Math.round(Number(f.price.amount) * 100)
        }))) || [],
        inventoryManagement: null,
        // Storefront API does not return inventory management, only available in liquid
        inventoryPolicy: null,
        // Storefront API does not return inventory policy, only available in liquid
        inventoryQuantity: (_ = f.quantityAvailable) != null ? _ : null,
        unitPriceMeasurement: p != null && p.quantityUnit && (p != null && p.referenceUnit) ? {
          quantityValue: p.quantityValue,
          quantityUnit: p.quantityUnit.toLowerCase(),
          referenceValue: p.referenceValue,
          referenceUnit: p.referenceUnit.toLowerCase()
        } : null
      };
    }
  ), n = i.options.map((p, f) => {
    const b = p.optionValues.map((k) => {
      var _, v, g, B;
      return {
        id: Number(k.id.split("/").pop()),
        defaultName: k.name,
        name: k.name,
        swatch: {
          color: ((_ = k.swatch) == null ? void 0 : _.color) || null,
          image: ((B = (g = (v = k.swatch) == null ? void 0 : v.image) == null ? void 0 : g.previewImage) == null ? void 0 : B.url) || null
        }
      };
    });
    return {
      defaultName: p.name,
      name: p.name,
      position: f + 1,
      optionValues: be(b, f, e)
    };
  }), r = (p) => {
    const f = p.priceAdjustments[0];
    if (!f)
      return null;
    const b = f.adjustmentValue;
    switch (b.__typename) {
      case "SellingPlanPercentagePriceAdjustment":
        return {
          type: "percentage",
          value: b.adjustmentPercentage
        };
      case "SellingPlanFixedAmountPriceAdjustment":
        return {
          type: "fixed_amount",
          value: Number(b.adjustmentAmount.amount) * 100
        };
      case "SellingPlanFixedPriceAdjustment":
        return {
          type: "price",
          value: Number(b.price.amount) * 100
        };
      default:
        throw new Error(
          `Unknown price adjustment type: ${b.__typename}`
        );
    }
  }, a = ((s = i.sellingPlanGroups) == null ? void 0 : s.nodes.flatMap(
    (p) => p.sellingPlans.nodes.map((f) => ({
      id: Number(f.id.split("/").pop()),
      name: f.name,
      priceAdjustment: r(f)
    }))
  )) || [], o = i.variants.nodes.some(
    (p) => p.requiresComponents
  );
  return {
    id: Number(i.id.split("/").pop()),
    handle: i.handle,
    url: i.onlineStoreUrl || `https://${t}/products/${i.handle}`,
    availableForSale: i.availableForSale,
    createdAt: i.createdAt,
    title: i.title,
    image: ((l = i.featuredImage) == null ? void 0 : l.url) || null,
    collectionIds: i.collections.nodes.map(
      (p) => Number(p.id.split("/").pop())
    ),
    options: n,
    selectedVariantId: Number(
      i.variants.nodes[0].id.split("/").pop()
    ),
    variants: e,
    requiresSellingPlan: i.requiresSellingPlan,
    sellingPlans: a,
    isNativeBundle: o,
    metafields: {
      text: ((c = i.metafield) == null ? void 0 : c.value) || null,
      text2: ((u = i.metafield2) == null ? void 0 : u.value) || null,
      text3: ((d = i.metafield3) == null ? void 0 : d.value) || null,
      text4: ((m = i.metafield4) == null ? void 0 : m.value) || null
    }
  };
}, be = (i, t, e) => i.filter((n) => e.filter(
  (r) => r.options[t] === n.name
).length > 0), ye = async (i, t, e) => {
  const n = t.map((a) => `gid://shopify/Product/${a}`), r = $({
    country: e == null ? void 0 : e.country,
    language: e == null ? void 0 : e.language
  });
  return (await i.query(
    `
      query FetchProductsInDefaultLanguage($productGIDs: [ID!]!) ${r} {
        nodes(ids: $productGIDs) {
          ... on Product {
            id
            options {
              name
              optionValues {
                id
                name
              }
            }
          }
        }
        localization {
          country {
            isoCode
          }
          language {
            isoCode
          }
        }
      }
    `,
    {
      variables: {
        productGIDs: n
      }
    }
  )).nodes.filter((a) => a != null).map(Ce);
}, Ce = (i) => {
  const t = i.options.map(
    (e, n) => ({
      defaultName: e.name,
      position: n + 1,
      optionValues: e.optionValues.map((r) => ({
        id: Number(r.id.split("/").pop()),
        defaultName: r.name
      }))
    })
  );
  return {
    id: Number(i.id.split("/").pop()),
    options: t
  };
}, ke = (i, t) => {
  const e = [], n = i.filter(
    (s) => s.blockVisibility === "selected-products"
  );
  for (const s of n)
    s.selectedProductIds.map(Number).includes(t.id) && e.push(s);
  const r = i.filter(
    (s) => s.blockVisibility === "selected-collections"
  );
  for (const s of r)
    t.collectionIds.some(
      (l) => s.selectedCollectionIds.map(Number).includes(l)
    ) && e.push(s);
  const a = i.filter(
    (s) => s.blockVisibility === "excluded-products"
  );
  for (const s of a)
    !s.excludedProductIds.map(Number).includes(t.id) && !(s.excludedCollectionIds || []).some(
      (l) => t.collectionIds.includes(l)
    ) && e.push(s);
  const o = i.filter(
    (s) => s.blockVisibility === "all-products"
  );
  for (const s of o)
    e.push(s);
  return e;
}, ve = (i) => [
  ...Ie(i),
  ...we(i),
  ...Pe(i),
  ...Se(i),
  ...Be(i),
  ...Ae(i),
  ...Te(i),
  ...Ee(i),
  ...De(i),
  ...qe(i),
  ...Fe(i)
].filter((t) => t != null && !t.includes("placeholder")), Ie = (i) => i.dealBars.flatMap((t) => [t.mediaImageGID, t.badgeImageGID]).filter((t) => t != null), we = (i) => i.dealBars.map(
  ({ freeGifts: t }) => (t || []).map((e) => e.mediaImageGID)
).reduce((t, e) => t.concat(e), []).filter((t) => t != null), Pe = (i) => i.dealBars.flatMap(
  ({ multipleGiftsSelectors: t }) => (t || []).map((e) => e.mediaImageGID)
).filter((t) => t != null), Se = (i) => i.dealBars.map(({ upsells: t }) => (t || []).map((e) => e.mediaImageGID)).reduce((t, e) => t.concat(e), []).filter((t) => t != null), Be = (i) => i.swatchOptions ? i.swatchOptions.reduce((t, e) => {
  const n = e.images.map((r) => r.mediaImageGID).filter((r) => r != null);
  return [...t, ...n];
}, []) : [], Ae = (i) => {
  if (!i.collectionBreaksEnabled || !i.collectionBreaks)
    return [];
  const t = i.collectionBreaks.mediaImageGID;
  return t ? [t] : [];
}, Te = (i) => {
  var t, e, n;
  return i.progressiveGifts ? [
    ...((t = i.progressiveGifts.gifts) == null ? void 0 : t.map((r) => r.mediaImageGID)) || [],
    (e = i.progressiveGifts.style) == null ? void 0 : e.lockedMediaImageGID,
    (n = i.progressiveGifts.dealBarStyle) == null ? void 0 : n.lockedMediaImageGID
  ].filter((r) => r != null) : [];
}, Ee = (i) => !i.checkboxUpsellsEnabled || !i.checkboxUpsells ? [] : i.checkboxUpsells.upsells.flatMap((t) => [t.mediaImageGID, t.badgeImageGID]).filter((t) => t != null), De = (i) => i.dealBars.map((t) => {
  var e;
  return (e = t.productPersonalisation) == null ? void 0 : e.mediaImageGID;
}).filter((t) => t != null), qe = (i) => {
  var n, r;
  const t = i.dealBars.map((a) => {
    var o;
    return (o = a.highlights) == null ? void 0 : o.customIconGID;
  }).filter((a) => a != null), e = (r = (n = i.subscriptions) == null ? void 0 : n.highlights) == null ? void 0 : r.customIconGID;
  return e ? [...t, e] : t;
}, Fe = (i) => !i.savingsSummaryEnabled || !i.savingsSummary ? [] : i.savingsSummary.customIconGID ? [i.savingsSummary.customIconGID] : [];
var Y = /* @__PURE__ */ ((i) => (i.QuantityBreak = "quantity-break", i.Bxgy = "bxgy", i.Bundle = "bundle", i.MixAndMatch = "mix-and-match", i.Sku = "sku", i))(Y || {});
const Ne = (i) => {
  const t = [
    ...Oe(i),
    ...Me(i),
    ...Le(i),
    ...Ve(i),
    ...xe(i),
    ...$e(i),
    ...Re(i),
    ...Ge(i)
  ];
  return Array.from(new Set(t.filter((e) => e != null)));
}, Oe = (i) => i.dealBars.flatMap(
  ({ freeGifts: t }) => t ? t.map((e) => e.productGID) : []
).filter((t) => t != null), Me = (i) => i.dealBars.flatMap(
  ({ multipleGiftsSelectors: t }) => t ? t.flatMap(
    (e) => e.products ? e.products.map((n) => n.id) : []
  ) : []
).filter((t) => t != null), Le = (i) => {
  var t;
  return i.progressiveGiftsEnabled ? ((t = i.progressiveGifts) == null ? void 0 : t.gifts.map((e) => e.productGID).filter((e) => e != null)) || [] : [];
}, Ve = (i) => i.dealBars.flatMap(({ upsells: t }) => t ? t.map((e) => e.productGID) : []).filter((t) => t != null), xe = (i) => i.dealBars.filter((t) => t.dealBarType === Y.Bundle).flatMap(
  ({ bundleProducts: t }) => t ? t.map((e) => e.productGID) : []
).filter((t) => t != null).filter((t) => t !== "default"), $e = (i) => i.dealBars.filter((t) => t.dealBarType === Y.MixAndMatch).flatMap(
  ({ bundleProducts: t }) => t ? t.flatMap((e) => {
    var n, r;
    return [
      e.productGID,
      ...(r = (n = e.selectedProducts) == null ? void 0 : n.map((a) => a.id)) != null ? r : []
    ];
  }) : []
).filter((t) => t != null).filter((t) => t !== "default"), Re = (i) => !i.checkboxUpsellsEnabled || !i.checkboxUpsells ? [] : i.checkboxUpsells.upsells.map((t) => t.productGID).filter((t) => t != null), Ge = (i) => i.dealBars.filter((t) => t.dealBarType === Y.Sku).flatMap(({ productGID: t }) => t ? [t] : []), V = "kachingBundlesSaveOverlayDismissed", He = "bundles.kachingappz.app", Qe = () => {
  const i = document.createElement("div");
  return i.className = "kaching-bundles-save-overlay", i.setAttribute("role", "status"), i.setAttribute("tabindex", "0"), i.setAttribute(
    "aria-label",
    "Click Save in the top-right corner to activate the app. Press Escape or Enter to dismiss."
  ), i.innerHTML = `
    <div class="kaching-bundles-save-overlay__content">
      <div class="kaching-bundles-save-overlay__text">Click "Save" in the top-right corner.</div>
      <svg class="kaching-bundles-save-overlay__arrow" aria-hidden="true" width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0235 30.0476C26.9813 26.0688 31.6367 20.3068 34.359 13.6647C34.5787 13.1287 34.7807 12.5866 34.9688 12.0407C34.9872 12.1286 35.0055 12.2166 35.0239 12.3045C35.6997 15.541 36.1871 18.9234 37.35 22.0252C37.7091 22.9828 39.2759 22.7067 39.9528 22.449C40.7647 22.1396 42.0725 21.3396 41.9969 20.292C41.7562 16.9608 40.8171 13.666 40.0928 10.414C39.3726 7.17983 38.6526 3.94569 37.9324 0.711381C37.7809 0.0312821 36.6451 -0.0343474 36.1453 0.0113582C35.3082 0.0879608 34.2573 0.50077 33.6973 1.15893C33.4368 1.46497 33.1749 1.76993 32.9143 2.07579C32.6324 2.30048 32.3929 2.56904 32.2294 2.87801C29.1225 6.52203 26.0063 10.1587 22.8826 13.7888C22.4856 14.2503 22.2166 14.9143 22.9177 15.2375C23.5886 15.5469 24.5829 15.0895 25.0594 14.6178C27.0866 12.6108 29.1155 10.6056 31.1471 8.60291C30.1175 12.9391 28.3489 17.1025 25.7631 20.7229C24.0598 23.1078 21.9 25.3178 19.6649 26.9826C17.264 28.771 14.6378 30.214 11.9792 31.178C10.3347 31.7744 8.62775 32.2461 6.92197 32.6287C5.09815 33.0377 3.24342 33.2486 1.42578 33.6781C0.857063 33.8125 -0.79524 35.2271 0.459136 35.5827C3.73503 36.5115 7.65457 35.7308 10.8601 34.7902C14.4641 33.7324 17.896 32.1362 21.0235 30.0476Z" fill="white"/>
      </svg>
    </div>
  `, i;
}, bt = (i) => {
  i.classList.add("kaching-bundles-save-overlay--dismissed");
  try {
    sessionStorage.setItem(V, "true");
  } catch {
  }
  setTimeout(() => i.remove(), 300);
}, ze = () => {
  if (sessionStorage.getItem(V))
    return;
  const i = Qe();
  document.body.appendChild(i), requestAnimationFrame(() => {
    i.classList.add("kaching-bundles-save-overlay--visible"), i.focus();
  }), i.addEventListener("click", () => bt(i)), i.addEventListener("keydown", (t) => {
    (t.key === "Escape" || t.key === "Enter") && bt(i);
  });
}, Ue = async ({
  appHost: i,
  shopifyDomain: t,
  themeId: e
}) => {
  try {
    if (sessionStorage.getItem(V))
      return !0;
  } catch {
  }
  const n = new URLSearchParams({ shop: t });
  e && n.set("theme_id", e.toString());
  const r = `${i}/public_api/app_embed?${n.toString()}`, a = await fetch(r);
  if (!a.ok)
    throw new Error(`API error: ${a.status}`);
  const o = await a.json();
  if (o.themeInaccessible) {
    try {
      sessionStorage.setItem(V, "true");
    } catch {
    }
    return !0;
  }
  if (o.active)
    try {
      sessionStorage.setItem(V, "true");
    } catch {
    }
  return o.active;
}, je = async ({
  customApiHost: i,
  shopifyDomain: t,
  themeId: e
}) => {
  const r = `https://${i != null ? i : He}`;
  try {
    await Ue({
      appHost: r,
      shopifyDomain: t,
      themeId: e
    }) || ze();
  } catch {
  }
};
function Je(i, t, e) {
  var r, a;
  return t ? ((a = (r = window.Shopify.currency) == null ? void 0 : r.active) != null ? a : e) === t.currencyCode ? 1 : 1 / t.currencyRate * i : i;
}
function yt(i) {
  const t = i.properties && typeof i.properties == "object" ? i.properties : {};
  for (const [n, r] of Object.entries(i)) {
    const a = n.match(/^properties\[(.+)\]$/);
    a && (t[a[1]] = r);
  }
  dt(t);
  const e = {
    id: Number(i.id),
    quantity: Number(i.quantity) || 1,
    properties: t
  };
  return i.selling_plan && (e.selling_plan = Number(i.selling_plan)), i.parent_id && (e.parent_id = Number(i.parent_id)), e;
}
function dt(i) {
  const t = i.__kaching_bundles;
  typeof t == "string" && (i.__kaching_bundles = $t(t));
}
function $t(i) {
  try {
    const t = atob(i);
    return JSON.parse(t), t;
  } catch {
    return i;
  }
}
function W(i) {
  try {
    return JSON.parse(i), !1;
  } catch {
    return !0;
  }
}
function K(i) {
  const t = new URLSearchParams(i), e = new FormData();
  return t.forEach((n, r) => {
    e.append(r, n);
  }), e;
}
function We(i) {
  const t = new URLSearchParams();
  return i.forEach((e, n) => {
    t.append(n, e);
  }), t.toString();
}
function Ke(i, t) {
  const e = i.find((n) => n.properties.__kaching_bundles);
  if (!e)
    return t;
  try {
    return JSON.parse(e.properties.__kaching_bundles).deal;
  } catch {
    return t;
  }
}
const Xe = (i) => {
  var r;
  let t;
  try {
    t = JSON.parse(i);
  } catch {
    return null;
  }
  if (t.key != null || !Array.isArray(t.items)) return null;
  const e = t.items.filter(
    (a) => {
      var o;
      return (o = a.properties) == null ? void 0 : o.__kaching_bundles;
    }
  );
  if (!e.length) return null;
  const n = (r = e.find(Ye)) != null ? r : e[0];
  return JSON.stringify({ ...t, ...n });
}, Ye = (i) => {
  var e;
  const t = (e = i.properties) == null ? void 0 : e.__kaching_bundles;
  if (typeof t != "string") return !1;
  try {
    return !!JSON.parse($t(t)).main;
  } catch {
    return !1;
  }
}, Ze = (i) => /\/cart\/change(\.js)?(\?|$)/.test(i), tn = (i) => {
  const t = { id: null, line: null, quantity: null };
  if (i == null) return t;
  if (i instanceof FormData || i instanceof URLSearchParams)
    return tt(i);
  if (typeof i == "string") {
    if (W(i))
      return tt(K(i));
    try {
      const e = JSON.parse(i);
      return {
        id: e.id != null ? String(e.id) : null,
        line: e.line != null ? Number(e.line) : null,
        quantity: e.quantity != null ? Number(e.quantity) : null
      };
    } catch {
      return t;
    }
  }
  return t;
}, tt = (i) => {
  const t = i.get("id"), e = i.get("line"), n = i.get("quantity");
  return {
    id: t,
    line: e != null ? Number(e) : null,
    quantity: n != null ? Number(n) : null
  };
}, en = (i, t) => {
  if (t.line != null && Number.isFinite(t.line)) {
    const e = t.line - 1;
    return e >= 0 && e < i.length ? e : -1;
  }
  if (t.id != null) {
    const e = i.findIndex((r) => r.key === t.id);
    if (e >= 0) return e;
    const n = Number(t.id);
    if (Number.isFinite(n))
      return i.findIndex((r) => r.id === n);
  }
  return -1;
}, nn = (i, t) => {
  var s;
  if (t.quantity == null || !Number.isFinite(t.quantity))
    return { rewrite: !1 };
  let e;
  try {
    e = JSON.parse(i);
  } catch {
    return { rewrite: !1 };
  }
  const n = e == null ? void 0 : e.items;
  if (!Array.isArray(n)) return { rewrite: !1 };
  const r = en(n, t);
  if (r < 0) return { rewrite: !1 };
  const a = n[r];
  return ((s = a.properties) == null ? void 0 : s.__kaching_bundles) ? a.quantity === t.quantity ? { rewrite: !1 } : (a.quantity = t.quantity, { rewrite: !0, body: JSON.stringify(e) }) : { rewrite: !1 };
};
function X(i) {
  return Array.from(i.keys()).some(
    (e) => e.startsWith("items[")
  ) ? an(i) : rn(i);
}
function rn(i) {
  const t = i.get("id");
  if (!t)
    return C("intercept_cart_request_error", {
      type: "processing",
      error: "Missing item id in form data",
      body: i
    }), null;
  const e = {};
  i.forEach((o, s) => {
    const l = s.match(/^properties\[(.+)\]$/);
    l && (e[l[1]] = o);
  }), dt(e);
  const n = {
    id: Number(t),
    quantity: Number(i.get("quantity")) || 1,
    properties: e
  }, r = i.get("selling_plan");
  r && (n.selling_plan = Number(r));
  const a = i.get("parent_id");
  return a && (n.parent_id = Number(a)), [n];
}
function an(i) {
  const t = /* @__PURE__ */ new Map();
  if (i.forEach((n, r) => {
    const a = r.match(/^items\[(\d+)\]\[(.+)\]$/);
    if (!a) return;
    const o = Number(a[1]), s = a[2];
    t.has(o) || t.set(o, { properties: {} });
    const l = t.get(o);
    switch (s) {
      case "id":
        l.id = Number(n);
        break;
      case "quantity":
        l.quantity = Number(n);
        break;
      case "selling_plan":
        l.selling_plan = Number(n);
        break;
      case "parent_id":
        l.parent_id = Number(n);
        break;
      default: {
        const c = s.match(/^properties\]\[(.+)$/);
        c && (l.properties[c[1]] = n);
      }
    }
  }), t.size === 0) return null;
  const e = [];
  for (const [, n] of t) {
    if (!n.id) continue;
    dt(n.properties);
    const r = {
      id: n.id,
      quantity: n.quantity || 1,
      properties: n.properties
    };
    n.selling_plan && (r.selling_plan = n.selling_plan), n.parent_id && (r.parent_id = n.parent_id), e.push(r);
  }
  return e.length > 0 ? e : null;
}
function Ct(i, t) {
  const e = new FormData();
  if (i.forEach((n, r) => {
    sn(r) || e.append(r, n);
  }), t.length === 1) {
    const n = t[0];
    if (e.append("id", String(n.id)), e.append("quantity", String(n.quantity)), n.selling_plan && e.append("selling_plan", String(n.selling_plan)), n.parent_id && e.append("parent_id", String(n.parent_id)), n.properties)
      for (const [r, a] of Object.entries(n.properties))
        e.append(`properties[${r}]`, Rt(a));
  } else
    t.forEach(
      (n, r) => on(e, n, r)
    );
  return e;
}
function sn(i) {
  return ["id", "quantity", "selling_plan", "parent_id"].includes(i) || // Some themes (e.g. Candy) submit both `id` and `id[]` with the same
  // variant id in their product form. Shopify treats `id[]` as a separate
  // add operation, so it must be stripped along with `id` — otherwise the
  // variant gets added a second time (with empty properties) alongside the
  // rewritten `items[N][...]` payload.
  ["id[]", "quantity[]", "selling_plan[]", "parent_id[]"].includes(i) || i.startsWith("properties[") || i.startsWith("items[");
}
function on(i, t, e) {
  if (i.append(`items[${e}][id]`, String(t.id)), i.append(`items[${e}][quantity]`, String(t.quantity)), t.selling_plan && i.append(`items[${e}][selling_plan]`, String(t.selling_plan)), t.parent_id && i.append(`items[${e}][parent_id]`, String(t.parent_id)), t.properties)
    for (const [n, r] of Object.entries(t.properties))
      i.append(
        `items[${e}][properties][${n}]`,
        Rt(r)
      );
}
function Rt(i) {
  return i instanceof Blob ? i : String(i);
}
function Gt(i) {
  try {
    const t = JSON.parse(i);
    return !t || typeof t != "object" ? (C("intercept_cart_request_error", {
      type: "processing",
      error: "Failed to parse JSON body",
      body: i
    }), null) : Array.isArray(t.items) ? t.items.filter(
      (e) => e && typeof e == "object" && "id" in e
    ).map((e) => yt(e)) : t.id ? [yt(t)] : null;
  } catch {
    return C("intercept_cart_request_error", {
      type: "processing",
      error: "Failed to parse JSON body",
      body: i
    }), null;
  }
}
function ln(i, t) {
  try {
    const e = JSON.parse(i), n = [
      "id",
      "quantity",
      "selling_plan",
      "parent_id",
      "properties"
    ], r = {};
    for (const [a, o] of Object.entries(e))
      !n.includes(a) && a !== "items" && !a.startsWith("properties[") && (r[a] = o);
    return t.length === 1 ? Object.assign(r, t[0]) : r.items = t, JSON.stringify(r);
  } catch {
    return t.length === 1 ? JSON.stringify(t[0]) : JSON.stringify({ items: t });
  }
}
const cn = 100, un = 1500;
class dn {
  constructor() {
    this._inFlight = /* @__PURE__ */ new Map();
  }
  // Returns a stable key for a bundle add body, or null if this body either
  // isn't a bundle add or isn't a body shape we know how to dedupe. The cheap
  // string check up front means we don't parse (and don't trigger the parse-
  // error telemetry) for normal non-bundle adds.
  buildKey(t) {
    if (!pn(t)) return null;
    const e = hn(t);
    return !(e != null && e.length) || !e.some((n) => n.properties.__kaching_bundles) ? null : fn(e);
  }
  // Runs `send` and remembers the in-flight Response for `key`. If another
  // call comes in with the same key while the first is in flight, or for a
  // short window after it settles, the second call doesn't run — it gets a
  // clone of the first response and `deduped: true`.
  //
  // If the first request errors out, we don't replay the error: we re-enter
  // so this waiter either joins onto a sibling's fresh retry (if one already
  // started) or starts the retry itself. Without re-entering, three concurrent
  // waiters could each fire their own send after a failed first attempt and
  // double the cart all over again — the bug this guard exists to prevent.
  async dispatch(t, e) {
    const n = this._inFlight.get(t);
    if (n)
      try {
        const o = new Promise(
          (l, c) => setTimeout(() => {
            this._inFlight.get(t) === n && this._inFlight.delete(t), c(new Error("stale"));
          }, un)
        );
        return { response: (await Promise.race([n, o])).clone(), deduped: !0 };
      } catch {
        return this.dispatch(t, e);
      }
    const r = e();
    return this._inFlight.set(t, r), r.then(
      () => {
        setTimeout(() => {
          this._inFlight.get(t) === r && this._inFlight.delete(t);
        }, cn);
      },
      () => {
        this._inFlight.get(t) === r && this._inFlight.delete(t);
      }
    ), { response: (await r).clone(), deduped: !1 };
  }
}
function pn(i) {
  if (typeof i == "string")
    return i.includes("__kaching_bundles");
  if (i instanceof FormData) {
    for (const t of i.keys())
      if (t.includes("__kaching_bundles")) return !0;
    return !1;
  }
  return !1;
}
function hn(i) {
  try {
    return i instanceof FormData ? X(i) : W(i) ? X(K(i)) : Gt(i);
  } catch {
    return null;
  }
}
function fn(i) {
  const t = i.map((e) => {
    var n;
    return {
      id: e.id,
      quantity: e.quantity,
      sellingPlan: (n = e.selling_plan) != null ? n : null,
      properties: e.properties
    };
  }).sort((e, n) => {
    var o, s;
    if (e.id !== n.id) return e.id - n.id;
    const r = String((o = e.properties.__kaching_bundles) != null ? o : ""), a = String((s = n.properties.__kaching_bundles) != null ? s : "");
    return r.localeCompare(a);
  });
  return JSON.stringify(t);
}
function mn(i, t, e) {
  i = i.map((l) => ({
    ...l
  }));
  const n = i.find(
    (l) => l.properties.__kaching_bundles
  );
  if (!n && e.fallbackDeal) {
    const l = e.fallbackDeal, c = i.filter(
      (f) => !l.product.variants.some((b) => b.id === f.id) && !t.some((b) => b.id === f.id)
    ), u = i.find(
      (f) => l.product.variants.some((b) => b.id === f.id)
    ), d = u ? It(u.properties).custom : {}, m = vt(
      d,
      t,
      e.propagateLineProperties
    );
    return [...t.map(
      (f) => kt(
        f,
        m,
        d
      )
    ), ...c];
  }
  const r = n ? It(n.properties) : { custom: {}, internal: {} }, a = n ? vt(
    r.custom,
    t,
    e.propagateLineProperties
  ) : null;
  if (n) {
    const l = t.find(
      (c) => c.id === n.id && c.properties.__kaching_bundles === n.properties.__kaching_bundles
    );
    l && (n.quantity = l.quantity, l.selling_plan && (n.selling_plan = l.selling_plan), a && (n.properties = {
      ...r.internal,
      ...a.get(l)
    }));
  }
  return [...t.filter(
    (l) => !i.some(
      (c) => c.id === l.id && c.properties.__kaching_bundles === l.properties.__kaching_bundles
    )
  ).map(
    (l) => kt(
      l,
      a,
      r.custom
    )
  ), ...i];
}
function kt(i, t, e) {
  if (t)
    return {
      ...i,
      properties: {
        ...t.get(i),
        ...i.properties
      }
    };
  const n = JSON.parse(i.properties.__kaching_bundles);
  return n != null && n.main ? {
    ...i,
    properties: {
      ...e,
      ...i.properties
    }
  } : i;
}
function vt(i, t, e) {
  var l;
  if (!e)
    return null;
  const n = {}, r = /* @__PURE__ */ new Map();
  for (const [c, u] of Object.entries(i)) {
    const d = c.match(/(\d+)\s*$/);
    if (d) {
      const m = parseInt(d[1], 10), p = (l = r.get(m)) != null ? l : {};
      p[c] = u, r.set(m, p);
    } else
      n[c] = u;
  }
  const a = t.reduce(
    (c, u) => c + u.quantity,
    0
  );
  for (const [c, u] of r)
    (c < 1 || c > a) && (Object.assign(n, u), r.delete(c));
  const o = /* @__PURE__ */ new Map();
  let s = 0;
  for (const c of t) {
    const u = { ...n };
    for (const [d, m] of r)
      d > s && d <= s + c.quantity && Object.assign(u, m);
    o.set(c, u), s += c.quantity;
  }
  return o;
}
function It(i) {
  const t = {}, e = {};
  for (const [n, r] of Object.entries(i))
    n.startsWith("_kaching") || n.startsWith("__kaching") ? e[n] = r : t[n] = r;
  return { custom: t, internal: e };
}
const wt = /* @__PURE__ */ new WeakMap();
class gn {
  constructor() {
    this._started = !1, this._registeredDeals = /* @__PURE__ */ new Map(), this._fallbackDeal = null, this._fallbackDealTimeout = null, this._rewriteCartChangeEnabled = !1, this._propagateLinePropertiesEnabled = !1, this._cartChangeDetectionReported = !1, this._dedupeEnabled = !0, this._dedupe = new dn(), this._skipCartDealIds = /* @__PURE__ */ new Set();
  }
  start() {
    this._started || (this._started = !0, this._interceptFetchRequests(), this._interceptXHRRequests(), this._interceptCartFormSubmits(), window.OpusNoATC = !0, h("CartInterceptor started"));
  }
  registerDeal(t, e, n, r) {
    const a = this._registeredDeals.get(t) || [];
    a.push({ getItems: n, product: e }), this._registeredDeals.set(t, a), r && this._skipCartDealIds.add(t), h("CartInterceptor deal registered", {
      dealId: t,
      totalDeals: a.length
    });
  }
  setCartChangeRewriteEnabled(t) {
    this._rewriteCartChangeEnabled = t;
  }
  setDedupeEnabled(t) {
    this._dedupeEnabled = t;
  }
  setPropagateLinePropertiesEnabled(t) {
    this._propagateLinePropertiesEnabled = t;
  }
  setFallbackDeal(t, e) {
    h("CartInterceptor fallback deal set", { dealId: t }), this._fallbackDealTimeout && clearTimeout(this._fallbackDealTimeout), this._fallbackDeal = { dealId: t, product: e }, this._fallbackDealTimeout = window.setTimeout(() => {
      this._fallbackDeal = null, this._fallbackDealTimeout = null;
    }, 2e3);
  }
  _interceptFetchRequests() {
    const t = window.fetch.bind(window);
    window.fetch = async (e, n) => {
      var a;
      const r = _n(e);
      if (!r) return t(e, n);
      if (this._isInterceptableUrl(r)) {
        const o = this._getModifiedBody(r, n == null ? void 0 : n.body), s = o != null ? o : n == null ? void 0 : n.body, l = this._dedupe.buildKey(s), c = () => this._sendInterceptableCartAdd(
          t,
          e,
          n,
          o
        );
        if (l && this._dedupeEnabled) {
          const { response: u, deduped: d } = await this._dedupe.dispatch(
            l,
            c
          );
          return d && C("intercept_cart_request_deduped", {
            theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
          }), u;
        }
        return c();
      } else if (Ze(r)) {
        const o = await t(e, n);
        return this._maybeRewriteCartChangeResponse(o, n == null ? void 0 : n.body);
      }
      return t(e, n);
    };
  }
  async _sendInterceptableCartAdd(t, e, n, r) {
    var a, o;
    if (!r)
      return t(e, n);
    I("Intercepting cart/add request, merging bundle items"), C(
      "intercept_cart_request",
      {
        type: "fetch",
        theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
      },
      0.01
    );
    try {
      const s = await t(e, {
        ...n,
        body: r
      });
      return await this._rewriteCartAddResponse(s);
    } catch (s) {
      return h("Modified request failed, retrying with original", { error: s }), C("intercept_cart_request_error", {
        type: "fetch",
        theme: (o = window.Shopify.theme) == null ? void 0 : o.schema_name,
        error: s instanceof Error ? s.message : String(s)
      }), t(e, n);
    }
  }
  async _rewriteCartAddResponse(t) {
    if (!t.ok) return t;
    try {
      const e = Xe(await t.clone().text());
      if (!e) return t;
      const n = new Headers(t.headers);
      return n.delete("content-length"), new Response(e, {
        status: t.status,
        statusText: t.statusText,
        headers: n
      });
    } catch (e) {
      return h("Cart add response rewrite failed, returning original", {
        error: e
      }), t;
    }
  }
  async _maybeRewriteCartChangeResponse(t, e) {
    var a;
    if (!t.ok || !(t.headers.get("content-type") || "").includes("json")) return t;
    const r = tn(e);
    if (r.quantity == null || !this._rewriteCartChangeEnabled && this._cartChangeDetectionReported)
      return t;
    try {
      const s = await t.clone().text(), l = nn(s, r);
      if (!l.rewrite || (this._cartChangeDetectionReported || (this._cartChangeDetectionReported = !0, C("cart_change_rewrite_detected", {
        applied: this._rewriteCartChangeEnabled,
        theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
      })), !this._rewriteCartChangeEnabled)) return t;
      const c = new Headers(t.headers);
      return c.delete("content-length"), new Response(l.body, {
        status: t.status,
        statusText: t.statusText,
        headers: c
      });
    } catch (o) {
      return h("Cart change response rewrite failed, returning original", {
        error: o
      }), t;
    }
  }
  _interceptXHRRequests() {
    var s, l, c, u;
    const t = XMLHttpRequest.prototype.open, e = XMLHttpRequest.prototype.send, n = function(d, m, p = !0, f, b) {
      return wt.set(this, m instanceof URL ? m.href : m), t.call(this, d, m, p, f, b);
    }, r = function(d) {
      var p, f;
      const m = wt.get(this);
      if (m) {
        const b = q._getModifiedBody(m, d);
        if (b) {
          I("Intercepting XHR cart/add request, merging bundle items"), C("intercept_cart_request", {
            type: "xhr",
            theme: (p = window.Shopify.theme) == null ? void 0 : p.schema_name
          });
          try {
            return e.call(this, b);
          } catch (k) {
            return h("Modified XHR request failed, retrying with original", {
              error: k
            }), C("intercept_cart_request_error", {
              type: "xhr",
              theme: (f = window.Shopify.theme) == null ? void 0 : f.schema_name,
              error: k instanceof Error ? k.message : String(k)
            }), e.call(this, d);
          }
        }
      }
      return e.call(this, d);
    }, a = Object.getOwnPropertyDescriptor(
      XMLHttpRequest.prototype,
      "open"
    ), o = Object.getOwnPropertyDescriptor(
      XMLHttpRequest.prototype,
      "send"
    );
    if ((a == null ? void 0 : a.configurable) === !1 || (o == null ? void 0 : o.configurable) === !1) {
      h("Cannot intercept XHR - prototype methods are not configurable");
      return;
    }
    Object.defineProperty(XMLHttpRequest.prototype, "open", {
      value: n,
      writable: (s = a == null ? void 0 : a.writable) != null ? s : !0,
      configurable: (l = a == null ? void 0 : a.configurable) != null ? l : !0
    }), Object.defineProperty(XMLHttpRequest.prototype, "send", {
      value: r,
      writable: (c = o == null ? void 0 : o.writable) != null ? c : !0,
      configurable: (u = o == null ? void 0 : o.configurable) != null ? u : !0
    });
  }
  _interceptCartFormSubmits() {
    const t = async (e) => {
      var u, d, m, p;
      if (e.defaultPrevented || this._fallbackDeal && this._skipCartDealIds.has(this._fallbackDeal.dealId) || !(e.target instanceof HTMLFormElement))
        return;
      const n = e.target, r = n.action;
      if (!r.includes("/cart/add"))
        return;
      const a = new FormData(n);
      if (!this._getModifiedBody(r, a))
        return;
      e.preventDefault(), C("intercept_cart_request", {
        type: "form",
        theme: (u = window.Shopify.theme) == null ? void 0 : u.schema_name
      });
      const s = this._parseOriginalItems(a), l = s ? Ke(s, (d = this._fallbackDeal) == null ? void 0 : d.dealId) : (m = this._fallbackDeal) == null ? void 0 : m.dealId, c = l ? this._skipCartDealIds.has(l) : !1;
      try {
        const f = await fetch(r, {
          method: "POST",
          body: a
        });
        if (!f.ok)
          throw new Error(`HTTP ${f.status}`);
        window.location.href = c ? H("checkout") : "/cart";
      } catch (f) {
        h("Fetch request failed, submitting original form", {
          error: f
        }), C("intercept_cart_request_error", {
          type: "form",
          theme: (p = window.Shopify.theme) == null ? void 0 : p.schema_name,
          error: f instanceof Error ? f.message : String(f)
        }), n.submit();
      }
    };
    document.addEventListener("submit", t), setTimeout(() => {
      document.removeEventListener("submit", t), document.addEventListener("submit", t);
    }, 3e3);
  }
  _getModifiedBody(t, e) {
    try {
      if (!this._isInterceptableUrl(t))
        return null;
      if (h("Request body", e), typeof e != "string" && !(e instanceof FormData))
        return C("intercept_cart_request_error", {
          type: "processing",
          error: "Invalid body type"
        }), null;
      const n = this._parseOriginalItems(e);
      if (h("Original items", n), !n)
        return null;
      const r = this._findBundleItems(n);
      if (h("Bundle items", r), !r)
        return null;
      const a = this._mergeItems(n, r);
      if (h("Merged items", a), JSON.stringify(n) === JSON.stringify(a))
        return null;
      const o = this._updateBody(e, a);
      return h("Updated body", o), o;
    } catch (n) {
      return h("CartInterceptor error, falling back to original request", {
        error: n
      }), C("intercept_cart_request_error", {
        type: "processing",
        error: n instanceof Error ? n.message : String(n)
      }), null;
    }
  }
  _isInterceptableUrl(t) {
    return t.includes("cart/add") && !t.includes("kaching_bundles=true") && !t.includes("kaching-cart=true") && !t.includes("kaching_popup=true") && !t.includes("kaching_subscriptions_gift=true");
  }
  _parseOriginalItems(t) {
    if (t instanceof FormData)
      return X(t);
    if (W(t)) {
      const e = K(t);
      return X(e);
    }
    return Gt(t);
  }
  _findBundleItems(t) {
    var o, s;
    const e = t.find(
      (l) => l.properties.__kaching_bundles
    ), n = e ? JSON.parse(e.properties.__kaching_bundles).deal : (o = this._fallbackDeal) == null ? void 0 : o.dealId;
    if (!n)
      return null;
    const r = this._fallbackDeal;
    if (!e && r) {
      if (!t.some(
        (c) => r.product.variants.some((u) => u.id === c.id)
      ))
        return null;
      C("fallback_deal_used", {
        theme: (s = window.Shopify.theme) == null ? void 0 : s.schema_name
      });
    }
    const a = this._registeredDeals.get(n);
    if (!(a != null && a.length))
      return h("No registered deals found", { dealId: n }), null;
    for (const { getItems: l, product: c } of a) {
      const u = l();
      if (e ? u.some(
        (m) => t.some(
          (p) => p.id === m.id && p.properties.__kaching_bundles === m.properties.__kaching_bundles
        )
      ) : u.length > 0 && c.id === (r == null ? void 0 : r.product.id)) return u;
    }
    return h("No matching items found for deal", { dealId: n }), null;
  }
  _mergeItems(t, e) {
    return mn(t, e, {
      fallbackDeal: this._fallbackDeal,
      propagateLineProperties: this._propagateLinePropertiesEnabled
    });
  }
  _updateBody(t, e) {
    if (t instanceof FormData)
      return Ct(t, e);
    if (W(t)) {
      const n = K(t), r = Ct(n, e);
      return We(r);
    }
    return ln(t, e);
  }
}
const _n = (i) => typeof i == "string" ? i : i instanceof URL ? i.href : i && typeof i == "object" && "url" in i ? i.url : null, q = new gn();
function bn(i, t) {
  var e;
  if ((i == null ? void 0 : i.dealBarType) === et.Sku && i.productGID)
    return j(i.productGID);
  if ((i == null ? void 0 : i.dealBarType) === et.Bundle && i.bundleProducts) {
    const n = i.bundleProducts.some(
      (a) => a.productGID === "default"
    ), r = (e = i.bundleProducts[0]) == null ? void 0 : e.productGID;
    if (!n && r)
      return j(r);
  }
  return t;
}
const Pt = /* @__PURE__ */ new WeakSet();
function yn(i, t) {
  var s;
  if (Pt.has(i)) return;
  Pt.add(i);
  const e = (s = i.closest("main")) != null ? s : document.body;
  let n = i.getAttribute("selling-plan-id") || void 0;
  const r = () => {
    let l = i;
    for (; l; ) {
      const c = A(
        'input[name="selling_plan"]:checked',
        l
      );
      if (c) return c.value || void 0;
      const u = A(
        'input[name="selling_plan"]',
        l
      );
      if (u) return u.value || void 0;
      if (l === e) break;
      l = l.parentElement;
    }
  }, a = (l) => {
    n !== l && (n = l, h("observeExternalSellingPlanInput", l), P(i, "selling-plan-id", l != null ? l : ""));
  };
  a(r()), D(e, "change", (l) => {
    const c = l.target;
    (c == null ? void 0 : c.name) === "selling_plan" && a(r());
  }), new MutationObserver(() => {
    a(r());
  }).observe(e, {
    childList: !0,
    subtree: !0
  });
}
const Cn = (i) => {
  Ht(String(j(i)));
}, kn = () => {
  const i = document.querySelector("[data-media-id]");
  if (!i)
    return;
  const t = i.getAttribute("data-media-id");
  Ht(
    t.slice(t.lastIndexOf("-") + 1)
  );
}, Ht = (i) => {
  var t;
  try {
    const e = En(i), n = /* @__PURE__ */ new Set();
    if (e.length === 0) {
      Tn(i, n) || h("activateGalleryMedia: no media element matched", i);
      return;
    }
    const r = e.filter(
      (u) => u.matches("button[data-action='select'][data-media-id]")
    ), a = e.filter(
      (u) => !u.matches("button[data-action='select'][data-media-id]")
    ), o = a.filter(R), s = r.filter(R), l = o.length ? o : s.length ? s : [(t = a[0]) != null ? t : e[0]], c = /* @__PURE__ */ new Set();
    for (const u of l)
      vn(u, i, n, c);
  } catch (e) {
    console.error(e);
  }
}, vn = (i, t, e, n) => {
  const r = i.getAttribute("data-media-id"), a = r !== t, o = i.closest(Qt);
  if (o && wn(o, t, e))
    return;
  const s = i.closest(
    "media-gallery"
  );
  if (!o && a && s && typeof s.setActiveMedia == "function") {
    e.has(s) || (e.add(s), s.setActiveMedia(r, !1));
    return;
  }
  const l = i.closest(
    "slideshow-component"
  );
  if (l && typeof l.select == "function") {
    const d = i.closest("slideshow-slide");
    if (d) {
      if (!e.has(l)) {
        e.add(l);
        const m = Array.from(
          l.querySelectorAll("slideshow-slide")
        );
        l.select(m.indexOf(d));
      }
      return;
    }
  }
  if (Sn(i, t, e) || Bn(i, t, e) || An(i, t, e) || Pn(i, t, e))
    return;
  const c = Dn(t);
  for (const d of c)
    if (!n.has(d)) {
      n.add(d), d.click();
      return;
    }
  const u = i.closest(
    "button, [role='button'], a[href^='#']"
  );
  if (u) {
    n.has(u) || (n.add(u), u.click());
    return;
  }
  i.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest"
  });
}, Qt = "media-gallery.m-media-gallery[data-context='product']", In = ".m-media-gallery__list > .m-product-media--item[data-media-id][data-index]:not(.swiper-slide-duplicate)", wn = (i, t, e) => {
  var s;
  if (e.has(i))
    return !0;
  const n = Array.from(
    i.querySelectorAll(In)
  ).find(
    (l) => l.closest(Qt) === i && l.getAttribute("data-media-id") === t
  ), r = (s = n == null ? void 0 : n.getAttribute("data-index")) == null ? void 0 : s.trim(), a = r ? Number(r) : Number.NaN, o = a + 1;
  return !Number.isSafeInteger(a) || a < 0 || !Number.isSafeInteger(o) || typeof i.setActiveMedia != "function" ? !1 : (e.add(i), i.setActiveMedia({
    featured_media: { id: Number(t), position: o }
  }), !0);
}, St = "swiper-slider-container.swiper-slider__product-page__mobile", Pn = (i, t, e) => {
  var o;
  const n = i.closest(St), r = (o = n == null ? void 0 : n.parentElement) == null ? void 0 : o.closest(
    ".product--thumbnail_slider__mobile"
  );
  return !n || !r ? !1 : e.has(n) ? !0 : !Array.from(
    n.querySelectorAll("swiper-slider [data-media-id]")
  ).some(
    (s) => s.closest(St) === n && s.getAttribute("data-media-id") === t
  ) || typeof n.changeSlide != "function" ? !1 : (e.add(n), n.changeSlide(t), !0);
}, Sn = (i, t, e) => {
  var l;
  const n = i.closest(
    "[data-product-single-media-slider].flickity-enabled"
  );
  if (!n)
    return !1;
  if (e.has(n))
    return !0;
  const a = Array.from(
    n.querySelectorAll("[data-product-slide]")
  ).findIndex(
    (c) => [c.getAttribute("data-id"), c.getAttribute("data-media-id")].some(
      (u) => u === t || (u == null ? void 0 : u.endsWith(`-${t}`))
    )
  ), o = (l = window.theme) == null ? void 0 : l.Flickity;
  if (a < 0 || !o || typeof o.data != "function")
    return !1;
  const s = o.data(n);
  return !s || typeof s.select != "function" ? !1 : (e.add(n), s.select(a), !0);
}, Bn = (i, t, e) => {
  const n = i.closest(
    "[data-product-slideshow].flickity-enabled"
  );
  return n ? (e.has(n) || (e.add(n), n.dispatchEvent(
    new CustomEvent("theme:image:change", { detail: { id: t } })
  )), !0) : !1;
}, pt = "[data-section-type='product'][data-product-id]", zt = (i) => `a.product__thumb[data-product-thumb][data-id='${i}'][data-index]`, Ut = (i, t, e) => e.has(i) ? !0 : Array.from(
  i.querySelectorAll(zt(t))
).some(
  (r) => r.closest(pt) === i
) ? (e.add(i), i.dispatchEvent(
  new CustomEvent("variantImageChange", {
    detail: {
      variant: {
        featured_media: {
          id: Number(t),
          preview_image: { src: null }
        }
      }
    }
  })
), !0) : !1, An = (i, t, e) => {
  if (!i.matches(".product-main-slide[data-media-id]"))
    return !1;
  const n = i.closest(pt);
  return n ? Ut(n, t, e) : !1;
}, Tn = (i, t) => {
  const e = [], n = document.querySelectorAll(
    zt(i)
  );
  for (const s of n) {
    const l = s.closest(pt);
    l && !e.includes(l) && e.push(l);
  }
  const r = e.filter(R), a = r.length ? r : e.slice(0, 1);
  let o = !1;
  for (const s of a)
    o = Ut(s, i, t) || o;
  return o;
}, En = (i) => {
  const t = document.querySelectorAll("[data-media-id]"), e = [];
  for (const n of t) {
    const r = n.getAttribute("data-media-id");
    (r === i || r.endsWith(`-${i}`)) && e.push(n);
  }
  return e;
}, Dn = (i) => {
  const t = Array.from(
    document.querySelectorAll(
      `button[data-target$="-${i}"], button[data-action='select'][data-media-id='${i}'], button[data-action='select'][data-media-id$='-${i}']`
    )
  ), e = t.filter(R), n = t.filter(
    (r) => !R(r)
  );
  return [...e, ...n];
}, R = (i) => {
  if (typeof i.checkVisibility == "function")
    return i.checkVisibility({ checkVisibilityCSS: !0 });
  let t = i;
  for (; t; ) {
    const e = getComputedStyle(t);
    if (e.display === "none" || e.visibility === "hidden")
      return !1;
    t = t.parentElement;
  }
  return !0;
};
function qn(i) {
  const t = i.map((n) => ({
    item: n,
    kachingBundles: Fn(n)
  })), e = new Set(
    t.filter(({ kachingBundles: n }) => Bt(n)).map(({ item: n }) => n.id)
  );
  return t.reduce((n, { item: r, kachingBundles: a }) => Bt(a) || a.collectionBreaksProduct && !a.bxgy && e.has(r.id) ? n + r.quantity : n, 0);
}
function Bt(i) {
  return i ? i.main || !1 : !0;
}
function Fn(i) {
  return i.properties.__kaching_bundles ? JSON.parse(i.properties.__kaching_bundles) : null;
}
const U = async (i, t, e, n) => {
  var l;
  if (!t || e.length === 0) return;
  const r = Nn(n);
  if (r.length === 0) return;
  const a = e.map((c) => c.id), o = (l = r.find((c) => c.localization)) == null ? void 0 : l.localization, s = new F(
    i,
    t
  );
  try {
    const c = await ye(
      s,
      a,
      o
    );
    for (const u of e) {
      const d = c.find(
        (m) => m.id === u.id
      );
      d && On(u, d);
    }
  } catch (c) {
    console.error("[Kaching Bundles] Failed to fetch swatches", c), setTimeout(() => {
      throw c;
    }, 0);
  }
}, Nn = (i) => i.map((e) => e.swatchOptions || []).reduce((e, n) => e.concat(n), []).filter((e) => e != null).filter((e) => e.swatchType !== "default"), On = (i, t) => {
  for (const e of t.options) {
    const n = i.options.find(
      (r) => r.position === e.position
    );
    if (n) {
      n.defaultName = e.defaultName;
      for (const r of e.optionValues) {
        const a = n.optionValues.find(
          (o) => o.id === r.id
        );
        a && (a.defaultName = r.defaultName);
      }
    }
  }
}, At = window;
class Mn {
  constructor(t, e, n, r, a, o, s) {
    var l, c, u, d;
    if (this._featuredImageActivated = !1, this._items = [], this._clickedAddToCartBeforeFormSubmit = !1, this._isFirstVariantChange = !0, I("Deal block id:", a.id), I("Deal block settings", a), I("Config", n), I("Product", o), I("Deal block widget", { widget: t }), I("Cart form", { form: (l = e.addToCartForm()) == null ? void 0 : l.form }), I("Add to cart button", {
      button: (c = e.addToCartButton()) == null ? void 0 : c.button
    }), I("Quantity input", { input: e.quantityInput() }), I("Variant picker", {
      picker: (u = e.variantPicker()) == null ? void 0 : u.elements()
    }), this._dealBlockElement = t, this._productBlock = e, this._globalConfig = n, this._translations = r, this._dealBlockSettings = a, this._product = o, this._otherProductsFromLiquid = s, this._country = this._globalConfig.country, this._language = this._globalConfig.locale.split("-")[0].toUpperCase(), this._globalConfig.featureFlags.initialize_with_form_variant) {
      let m = this._product.selectedVariantId || this._product.variants[0].id;
      const p = (d = this._productBlock.addToCartForm()) == null ? void 0 : d.currentVariantId();
      p && this._product.variants.some((f) => f.id == p) && (m = p), this._currentVariantId = m;
    } else
      this._currentVariantId = this._product.selectedVariantId || this._product.variants[0].id;
    this._initialize();
  }
  _initialize() {
    P(
      this._dealBlockElement,
      "deal-block-id",
      this._dealBlockSettings.id
    ), P(
      this._dealBlockElement,
      "config",
      JSON.stringify(this._globalConfig)
    ), P(
      this._dealBlockElement,
      "translations",
      JSON.stringify(this._translations)
    ), P(
      this._dealBlockElement,
      "deal-block",
      JSON.stringify(this._dealBlockSettings)
    ), P(
      this._dealBlockElement,
      "product",
      JSON.stringify(this._product)
    ), P(
      this._dealBlockElement,
      "current-variant-id",
      String(this._currentVariantId)
    ), P(
      this._dealBlockElement,
      "other-products",
      JSON.stringify(this._otherProductsFromLiquid)
    ), this._loadMediaImagesAsync(), this._loadOtherProductsAsync(), this._loadCollectionBreaksProductsAsync(), this._loadComplementaryProductsAsync(), this._loadNativeBundleProductIdsAsync(), this._listenForExternalSellingPlanInput();
    const t = !!this._productBlock.addToCartForm(), e = !t && this._globalConfig.featureFlags.intercept_cart_request === !0 && !!this._globalConfig.customSelectors.addToCartButton;
    !t && !e || this._addEventListeners(e);
  }
  async _loadMediaImagesAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = new F(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), e = ve(this._dealBlockSettings), n = await ge(t, e, 300);
    P(
      this._dealBlockElement,
      "media-images",
      JSON.stringify(n)
    );
  }
  async _loadOtherProductsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = Ne(this._dealBlockSettings);
    if (!t.length)
      return;
    const e = new Set(
      this._otherProductsFromLiquid.map((s) => s.id)
    ), n = t.filter(
      (s) => !e.has(j(s))
    ), r = new F(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), a = n.length ? await z(r, {
      country: this._country,
      language: this._language,
      productIds: n,
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    }) : [], o = [...this._otherProductsFromLiquid, ...a];
    await U(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      o,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "other-products",
      JSON.stringify(o)
    );
  }
  async _loadCollectionBreaksProductsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const { collectionBreaksEnabled: t, collectionBreaks: e } = this._dealBlockSettings;
    if (!t || !e)
      return;
    const n = new F(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    );
    let r;
    e.visibility === "deal-products" ? r = await mt(n, {
      country: this._country,
      language: this._language,
      blockVisibility: this._dealBlockSettings.blockVisibility,
      excludedProductGIDs: (this._dealBlockSettings.excludedProductIds || []).map((o) => `gid://shopify/Product/${o}`),
      selectedProductGIDs: (this._dealBlockSettings.selectedProductIds || []).map((o) => `gid://shopify/Product/${o}`),
      selectedCollectionGIDs: (this._dealBlockSettings.selectedCollectionIds || []).map((o) => `gid://shopify/Collection/${o}`)
    }) : r = await mt(n, {
      country: this._country,
      language: this._language,
      blockVisibility: e.visibility,
      excludedProductGIDs: (e.excludedProducts || []).map(
        ({ id: o }) => o
      ),
      selectedProductGIDs: (e.selectedProducts || []).map(
        ({ id: o }) => o
      ),
      selectedCollectionGIDs: (e.selectedCollections || []).map(({ id: o }) => o)
    });
    let a = await z(n, {
      country: this._country,
      language: this._language,
      productIds: r.map((o) => Number(o.split("/").pop())),
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1,
      batchSize: 20,
      onBatchError: (o) => {
        var s;
        return Zt(o.message, (s = o.stack) != null ? s : "", 1);
      }
    });
    a = a.filter(
      (o) => o.availableForSale
    ), a.sort((o, s) => o.id === this._product.id ? -1 : s.id === this._product.id ? 1 : 0), await U(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      a,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "collection-breaks-products",
      JSON.stringify(a)
    ), setTimeout(() => {
      this._preloadImages(a);
    }, 1e3);
  }
  async _loadComplementaryProductsAsync() {
    var a, o;
    if (!(this._dealBlockSettings.dealBars.some(
      (s) => {
        var l;
        return (l = s.upsells) == null ? void 0 : l.some(
          (c) => c.productSource === "complementary"
        );
      }
    ) || ((o = (a = this._dealBlockSettings.checkboxUpsells) == null ? void 0 : a.upsells) == null ? void 0 : o.some(
      (s) => s.productSource === "complementary"
    ))) || !this._globalConfig.storefrontAccessToken)
      return;
    const e = new F(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await me(
      e,
      {
        country: this._country,
        language: this._language,
        productId: this._product.id
      }
    );
    if (!n.length)
      return;
    let r = await z(e, {
      country: this._country,
      language: this._language,
      productIds: n.map(
        (s) => Number(s.split("/").pop())
      ),
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    });
    r = r.filter(
      (s) => s.availableForSale
    ), await U(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      r,
      [this._dealBlockSettings]
    ), P(
      this._dealBlockElement,
      "complementary-products",
      JSON.stringify(r)
    );
  }
  async _loadNativeBundleProductIdsAsync() {
    if (!this._globalConfig.storefrontAccessToken)
      return;
    const t = [
      this._product,
      ...this._otherProductsFromLiquid
    ].filter((r) => r.isNativeBundle === null);
    if (t.length === 0)
      return;
    const e = new F(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ), n = await _e(
      e,
      t.map((r) => r.id)
    );
    n.length > 0 && P(
      this._dealBlockElement,
      "native-bundle-product-ids",
      JSON.stringify(n)
    );
  }
  _preloadImages(t) {
    for (const e of t) {
      const n = e.variants[0].image || e.image;
      if (n) {
        const r = new Image();
        r.src = n;
      }
    }
  }
  _addEventListeners(t) {
    if (this._listenForVariantUrlChange(), this._listenForQuantityInputChange(), this._listenForBlockVariantSelect(), this._listenForBlockDealBarSelect(), this._listenForBlockDealBarFeaturedImage(), this._listenForBlockItemsChange(), this._listenForBlockAddToCartRequested(), t || (this._listenForFormVariantIdChange(), this._listenForFormSellingPlanChange()), this._listenForAmountDiscountExceedsPrice(), this._listenForUpsellSubscriptionInherited(), !window.kachingBundlesDisableAddToCartHandling) {
      if (this._globalConfig.featureFlags.intercept_cart_request) {
        q.setCartChangeRewriteEnabled(
          this._globalConfig.featureFlags.cart_change_response_rewrite === !0
        ), q.setDedupeEnabled(
          this._globalConfig.featureFlags.cart_interceptor_dedupe_disabled !== !0
        ), q.setPropagateLinePropertiesEnabled(
          this._globalConfig.featureFlags.propagate_line_properties === !0
        ), q.start();
        const e = this._dealBlockSettings.nanoId || this._dealBlockSettings.id;
        q.registerDeal(
          e,
          this._product,
          () => this._items,
          this._dealBlockSettings.skipCart === !0
        );
      }
      this._listenForAddToCartClick();
    }
  }
  _listenForBlockAddToCartRequested() {
    D(
      this._dealBlockElement,
      "add-to-cart-requested",
      async (t) => {
        var r, a;
        const e = (r = t.detail) == null ? void 0 : r.items;
        if (!(e != null && e.length))
          return;
        h("add-to-cart-requested", e);
        const n = (a = this._productBlock.addToCartButton()) == null ? void 0 : a.button;
        if (n) {
          this._overrideItemsForNextAddToCart = e, n.click();
          return;
        }
        await this._makeAddToCartRequest({ items: e }), window.location.href = H("checkout");
      }
    );
  }
  /* Native variant change handling */
  _listenForVariantUrlChange() {
    Yt(), D(At, "locationchange", () => {
      const e = new URLSearchParams(At.location.search).get("variant");
      e && (h("listenForVariantUrlChange", e), this._handleNativeVariantChange(Number(e)));
    });
  }
  _listenForFormVariantIdChange() {
    const t = this._productBlock.addToCartForm();
    t && t.onVariantIdChange((e) => {
      h("listenForFormVariantIdChange", e), this._handleNativeVariantChange(e);
    });
  }
  _handleNativeVariantChange(t) {
    if (h("handleNativeVariantChange", {
      variantId: t,
      currentVariantId: this._currentVariantId
    }), t != this._currentVariantId && this._product.variants.find((e) => e.id == t)) {
      if (this._globalConfig.featureFlags.remove_variant_change_delay ? window.kachingBundlesCurrentVariantChangeInProgress || (this._currentVariantId = t) : this._currentVariantId = t, this._globalConfig.featureFlags.remove_variant_change_delay) {
        if (window.kachingBundlesCurrentVariantChangeInProgress) {
          h("handleNativeVariantChange", "skipping");
          return;
        }
      } else if (this._dealBlockElement.dataset.nativeVariantChangeInProgress || window.kachingBundlesCurrentVariantChangeInProgress) {
        h("handleNativeVariantChange", "skipping");
        return;
      }
      this._dealBlockElement.dataset.nativeVariantChangeInProgress = "true", setTimeout(
        () => {
          delete this._dealBlockElement.dataset.nativeVariantChangeInProgress;
        },
        this._globalConfig.featureFlags.remove_variant_change_delay ? 1e3 : 500
      ), P(
        this._dealBlockElement,
        "current-variant-id",
        String(t)
      );
    }
  }
  _listenForFormSellingPlanChange() {
    if (!this._globalConfig.featureFlags.observe_form_selling_plan)
      return;
    const t = this._productBlock.addToCartForm();
    if (t) {
      try {
        !!A(
          'input[name="selling_plan"][type="radio"]',
          t.form
        ) && C("selling_plan_radio_detected", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id
        });
      } catch {
      }
      t.onSellingPlanChange((e) => {
        h("listenForFormSellingPlanChange", e), P(
          this._dealBlockElement,
          "selling-plan-id",
          e ? String(e) : ""
        );
      });
    }
  }
  _listenForExternalSellingPlanInput() {
    this._globalConfig.featureFlags.observe_external_selling_plan && (this._productBlock.addToCartForm() || yn(this._dealBlockElement));
  }
  /* Native quantity input */
  _listenForQuantityInputChange() {
    this._productBlock.onQuantityInputChange((t) => {
      if (h("_listenForQuantityInputChange", t), !window.kachingBundlesQuantityChangeInProgress) {
        if (!this._globalConfig.keepQuantityInput || window.kachingBundlesCurrentVariantChangeInProgress || this._dealBlockElement.dataset.nativeVariantChangeInProgress) {
          this._changeQuantityInput();
          return;
        }
        this._globalConfig.keepQuantityInput && P(this._dealBlockElement, "quantity", String(t));
      }
    });
  }
  _changeQuantityInput() {
    const t = this._productBlock.quantityInput();
    !t || this._items.length === 0 || window.kachingBundlesDisableAddToCartHandling && !this._globalConfig.keepQuantityInput || this._setQuantityInputValue(t, qn(this._items));
  }
  _setQuantityInputValue(t, e) {
    window.kachingBundlesQuantityChangeInProgress = !0, h("_setQuantityInputValue", e), t.value = String(e), this._globalConfig.shopifyDomain === "119a01-bf.myshopify.com" && t.dispatchEvent(new Event("input", { bubbles: !0 })), t.dispatchEvent(new Event("change", { bubbles: !0 })), setTimeout(() => {
      delete window.kachingBundlesQuantityChangeInProgress;
    }, 100);
  }
  /* Block variants change handling */
  _listenForBlockVariantSelect() {
    D(this._dealBlockElement, "variant-selected", (t) => {
      const { variantId: e } = t.detail;
      h("listenForBlockVariantSelect", e), this._changeCurrentVariant(e);
    });
  }
  _listenForBlockDealBarSelect() {
    this._globalConfig.webPixel && this._dealBlockElement.addEventListener("deal-bar-selected", (t) => {
      const { dealBarId: e } = t.detail, n = this._dealBlockSettings.dealBars.find(
        (a) => a.id === e
      ), r = bn(n, this._product.id);
      Vt(() => {
        window.Shopify.analytics.publish("kaching_deal_bar_selected", {
          product_id: r,
          deal_block_id: this._dealBlockSettings.id,
          deal_bar_id: e,
          ab_test_variant_id: this._dealBlockSettings.abTestVariantId,
          deal_block_version_id: this._dealBlockSettings.versionId
        });
      });
    });
  }
  _listenForBlockDealBarFeaturedImage() {
    D(this._dealBlockElement, "deal-bar-selected", (t) => {
      const { dealBarId: e, preselected: n } = t.detail;
      if (n)
        return;
      const r = e ? this._dealBlockSettings.dealBars.find((a) => a.id === e) : void 0;
      if (r != null && r.featuredMediaGID) {
        h("listenForBlockDealBarFeaturedImage", r.featuredMediaGID), this._featuredImageActivated = !0, Cn(r.featuredMediaGID);
        return;
      }
      this._featuredImageActivated && (this._featuredImageActivated = !1, kn());
    });
  }
  _listenForBlockItemsChange() {
    D(this._dealBlockElement, "items-changed", () => {
      var r, a, o;
      clearTimeout(this._updateQuantityInputTimeoutHandle);
      const t = this._dealBlockElement.pricing();
      this._items = this._dealBlockElement.items(), I("Selected items changed", this._items);
      const e = this._items.filter(
        (s) => this._isMainProductItem(s)
      ), n = e.find((s) => s.id == this._currentVariantId) || e[0];
      if (n) {
        if (this._changeCurrentVariant(n.id), (r = this._productBlock.addToCartForm()) == null || r.updateItem(n), this._changeQuantityInput(), (a = this._productBlock.addToCartButton()) == null || a.updatePrice(t.discountedPrice, t.fullPrice), clearTimeout(this._updateAddToCartButtonPriceTimeoutHandle), this._updateAddToCartButtonPriceTimeoutHandle = setTimeout(
          () => {
            var s;
            return (s = this._productBlock.addToCartButton()) == null ? void 0 : s.updatePrice(t.discountedPrice, t.fullPrice);
          },
          2e3
        ), (o = this._productBlock.addToCartForm()) == null || o.toggleAcceleratedCheckoutButtons(
          this._shouldShowAcceleratedCheckoutButtons()
        ), this._isFirstVariantChange && (this._updateQuantityInputTimeoutHandle = setTimeout(() => {
          this._changeQuantityInput(), delete this._updateQuantityInputTimeoutHandle;
        }, 1e3), this._isFirstVariantChange = !1), this._dealBlockSettings.updateNativePrice) {
          clearTimeout(this._updateNativePriceTimeoutHandle);
          const s = this._dealBlockSettings.updateNativePriceType === "item" ? t.discountedPricePerItem : t.discountedPrice, l = this._dealBlockSettings.updateNativePriceType === "item" ? t.fullPricePerItem : t.fullPrice;
          this._productBlock.updatePrice(s, l), this._updateNativePriceTimeoutHandle = setTimeout(() => {
            this._productBlock.updatePrice(s, l);
          }, 1e3);
        }
        this._reconvertPrices();
      }
    });
  }
  _reconvertPrices() {
    var t, e, n, r;
    h("reconvertPrices");
    try {
      (t = window.bucksCC) != null && t.reConvert && window.bucksCC.reConvert(), (e = window.baCurr) != null && e.refreshConversion && window.baCurr.refreshConversion(), (n = window.DoublyGlobalCurrency) != null && n.convertAll && window.DoublyGlobalCurrency.convertAll(), (r = window.conversionBearAutoCurrencyConverter) != null && r.convertPricesOnPage && window.conversionBearAutoCurrencyConverter.convertPricesOnPage(), window.mlvedaload && window.mlvedaload();
    } catch (a) {
      console.error(a);
    }
  }
  _changeCurrentVariant(t) {
    const e = this._product.variants.find((a) => a.id == t);
    if (h("_changeCurrentVariant", {
      variantId: t,
      currentVariantId: this._currentVariantId
    }), this._currentVariantId == t || (this._currentVariantId = t, !e))
      return;
    const n = this._productBlock.variantPicker();
    if (!n)
      return;
    (this._globalConfig.featureFlags.remove_variant_change_delay ? !this._dealBlockElement.dataset.nativeVariantChangeInProgress : !0) && (clearTimeout(window.kachingBundlesCurrentVariantChangeInProgress), window.kachingBundlesCurrentVariantChangeInProgress = setTimeout(() => {
      delete window.kachingBundlesCurrentVariantChangeInProgress;
    }, 1e3));
    for (const [a, o] of e.options.entries()) {
      const s = this._product.options[a], l = s.name, c = s.optionValues.find(
        (u) => u.name === o
      ).id;
      n.select(
        a + 1,
        c,
        l,
        o,
        this._product.id,
        e.id
      );
    }
  }
  _listenForAmountDiscountExceedsPrice() {
    document.addEventListener(
      "kaching-bundles-amount-discount-exceeds-price",
      (t) => {
        var r;
        const { totalDiscount: e, fullOrderPrice: n } = t.detail;
        C("amount_discount_exceeds_price_v3", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id,
          country: this._country,
          currency: (r = window.Shopify.currency) == null ? void 0 : r.active,
          totalDiscount: e,
          fullOrderPrice: n
        });
      },
      { once: !0 }
    );
  }
  _listenForUpsellSubscriptionInherited() {
    document.addEventListener(
      "kaching-bundles-upsell-subscription-inherited",
      (t) => {
        const { type: e } = t.detail;
        C("upsell_subscription_inherited", {
          dealBlockId: this._dealBlockSettings.id,
          productId: this._product.id,
          upsellType: e
        });
      },
      { once: !0 }
    );
  }
  /* Add to cart */
  _refreshItemsBeforeAddToCart() {
    var n, r;
    this._dealBlockElement.rotateBundleNonce(), this._overrideItemsForNextAddToCart ? (this._items = this._overrideItemsForNextAddToCart, this._overrideItemsForNextAddToCart = void 0) : this._items = this._dealBlockElement.items();
    const t = this._items.filter(
      (a) => this._isMainProductItem(a)
    ), e = (n = t.find((a) => a.id == this._currentVariantId)) != null ? n : t[0];
    e && ((r = this._productBlock.addToCartForm()) == null || r.updateItem(e));
  }
  _listenForAddToCartClick() {
    const t = this._productBlock.addToCartButton();
    if (!t)
      return;
    t.setValidation(() => {
      var a;
      return !this._dealBlockSettings.collectionBreaksEnabled || !((a = this._dealBlockSettings.collectionBreaks) != null && a.requireItemSelectionEnabled) ? !0 : this._dealBlockElement.validateItemSelection().valid;
    }), t.onClick(() => {
      if (this._globalConfig.featureFlags.intercept_cart_request) {
        const a = this._dealBlockSettings.nanoId || this._dealBlockSettings.id;
        q.setFallbackDeal(a, this._product);
      }
      this._refreshItemsBeforeAddToCart();
    });
    const e = () => window.kachingBundlesDisableAddToCartHandling ? !1 : this._dealBlockSettings.skipCart || this._isUpcartAppEnabled() || this._isOpusAppEnabled() || this._isKrakenCartAppEnabled() ? !0 : this._globalConfig.featureFlags.intercept_cart_request ? !1 : this._items.length > 1, n = async () => {
      var a;
      if (this._dealBlockSettings.skipCart) {
        await this._addAllItemsToCart(), window.kachingCartApi && (h("Kaching Cart update tiered promotions bar"), await window.kachingCartApi.updateTieredPromotionsBar()), window.location.href = H("checkout");
        return;
      }
      if (this._isUpcartAppEnabled()) {
        try {
          window.upcartOpenCart && window.upcartOpenCart();
        } catch (o) {
          console.error("upcartOpenCart error", o);
        }
        await this._addAllItemsToCart(), window.upcartRefreshCart && window.upcartRefreshCart();
        return;
      }
      if (this._isOpusAppEnabled()) {
        try {
          window.opusOpen && window.opusOpen();
        } catch (o) {
          console.error("opusOpen error", o);
        }
        await this._addAllItemsToCart(), window.opusRefreshCart && window.opusRefreshCart();
        return;
      }
      if (this._isKrakenCartAppEnabled()) {
        try {
          (a = window.KrakenCart) != null && a.toggleCart && window.KrakenCart.toggleCart(!0);
        } catch (o) {
          console.error("KrakenCart error", o);
        }
        await this._addAllItemsToCart();
        return;
      }
      return this._addItemsExceptCurrentToCart();
    }, r = () => this._dealBlockSettings.skipCart || this._isUpcartAppEnabled() || this._isOpusAppEnabled() || this._isKrakenCartAppEnabled();
    t.onClickIfConditionMet(
      e,
      n,
      r
    ), !this._globalConfig.featureFlags.intercept_cart_request && (this._setupUpcart(), this._setupOpus(), this._setupKrakenCart());
  }
  _setupUpcart() {
    window.upcartShouldSkipAddToCartInterceptor = !0;
    const t = window.upcartShouldSkipAddToCart;
    window.upcartShouldSkipAddToCart = (e) => typeof t == "function" && t(e) === !0 ? !0 : e.includes("kaching_bundles=true");
  }
  _setupOpus() {
    [
      "the-gloria-skincare.myshopify.com",
      "xzxihx-8t.myshopify.com",
      "e76602-61.myshopify.com"
    ].includes(this._globalConfig.shopifyDomain) && (window.OpusNoATC = !0);
  }
  _setupKrakenCart() {
    window.krakenCartIsFormATCEnabled = !1;
  }
  _isUpcartAppEnabled() {
    return this._globalConfig.featureFlags.intercept_cart_request || this._globalConfig.shopifyDomain === "qu1udi-ws.myshopify.com" ? !1 : !!A("#UpcartPopup") || !!window.upcartDocumentOrShadowRoot;
  }
  _isOpusAppEnabled() {
    return this._globalConfig.featureFlags.intercept_cart_request || ![
      "the-gloria-skincare.myshopify.com",
      "xzxihx-8t.myshopify.com",
      "e76602-61.myshopify.com"
    ].includes(this._globalConfig.shopifyDomain) ? !1 : window.opusActive || !1;
  }
  _isKrakenCartAppEnabled() {
    var t;
    return this._globalConfig.featureFlags.intercept_cart_request ? !1 : ((t = window.KrakenCart) == null ? void 0 : t.isActive) && window.KrakenCart.isActive() || !1;
  }
  async _addItemsExceptCurrentToCart() {
    var l;
    h("addItemsExceptCurrentToCart", this._items);
    const t = (l = this._productBlock.addToCartForm()) == null ? void 0 : l.currentVariantId();
    setTimeout(() => {
      t != this._currentVariantId && C("different_current_variant_v3", {
        form: t,
        object: this._currentVariantId
      });
    });
    const e = this._items.findIndex(
      (c) => this._isMainProductItem(c) && c.id == t
    ), n = this._items.filter(
      (c, u) => u !== e
    ), r = n.filter((c) => c.parent_id), a = n.filter((c) => !c.parent_id), o = [
      ...r.reverse(),
      ...a
    ].map(({ parent_id: c, ...u }) => u);
    I("Adding only extra items to cart", o);
    const s = e >= 0 ? this._items[e] : void 0;
    if (s) {
      const c = this._productBlock.quantityInput();
      c && this._setQuantityInputValue(c, s.quantity);
    }
    await this._makeAddToCartRequest({
      items: o,
      partial: !0
    });
  }
  async _addAllItemsToCart() {
    var e, n;
    h("addAllItemsToCart", this._items);
    let t = this._items;
    t.length === 0 && (t = [
      {
        id: (n = (e = this._productBlock.addToCartForm()) == null ? void 0 : e.currentVariantId()) != null ? n : this._currentVariantId,
        quantity: 1,
        properties: {}
      }
    ]), I("Adding all items to cart", t), await this._makeAddToCartRequest({ items: t });
  }
  _collectProperties() {
    const e = y(
      '[name^="properties"]'
    ).map((n) => [n.name.match(/properties\[(.*)\]/)[1], n.value]).filter(([n]) => n !== "__kaching_bundles");
    return Object.fromEntries(e);
  }
  _isMainProductItem(t) {
    const e = this._kachingBundlesProperty(t);
    return e ? e.main || !1 : !0;
  }
  _shouldShowAcceleratedCheckoutButtons() {
    var t;
    return this._items.length > 1 ? !1 : !this._dealBlockSettings.collectionBreaksEnabled || !((t = this._dealBlockSettings.collectionBreaks) != null && t.requireItemSelectionEnabled) ? !0 : this._dealBlockElement.isItemSelectionValid();
  }
  _kachingBundlesProperty(t) {
    return t.properties.__kaching_bundles ? JSON.parse(
      t.properties.__kaching_bundles
    ) : null;
  }
  async _makeAddToCartRequest({
    items: t,
    partial: e = !1
  }) {
    const n = this._collectProperties(), r = t.map((s) => {
      var l;
      return !this._isMainProductItem(s) && !((l = this._kachingBundlesProperty(s)) != null && l.collectionBreaksProduct) ? s : {
        ...s,
        properties: { ...n, ...s.properties }
      };
    });
    setTimeout(() => this._logCollectionBreakProperties(n));
    const a = { kaching_bundles: "true" };
    e && (a.partial = "true");
    const o = {
      "Content-Type": "application/json"
    };
    e || (o["X-Kaching-Cart-Ignore"] = "1"), await fetch(H("cart/add.js", a), {
      method: "POST",
      body: JSON.stringify({ items: r }),
      headers: o
    });
  }
  _logCollectionBreakProperties(t) {
    if (!this._dealBlockSettings.collectionBreaksEnabled)
      return;
    const e = Object.fromEntries(
      Object.entries(t).filter(
        ([n]) => !n.startsWith("__kaching_")
      )
    );
    Object.keys(e).length !== 0 && C("collection_break_properties", {
      properties: e
    });
  }
}
const Ln = "essential-preorder:kaching-bundles-pv-updated", rt = "kaching-bundles-block, kaching-bundles-bar", Tt = "variant-badges", Z = "[]";
let N = Z, Et = !1, Dt = !1, qt = !1;
function Vn() {
  try {
    Et || (Et = !0, D(
      window,
      Ln,
      () => Ft(!0)
    )), Ft(!1);
  } catch (i) {
    console.error(i);
  }
}
function Ft(i) {
  var n, r, a;
  const t = (a = (r = (n = window.essentialPreorderConfigs) == null ? void 0 : n.kachingBundles) == null ? void 0 : r.preorderVariants) != null ? a : [];
  xn(t, i);
  const e = $n(t);
  e !== N && (N = e, h("Essential preorder badges updated", N), Rn(), N !== Z && Gn());
}
function xn(i, t) {
  qt || i.length === 0 || (qt = !0, C(
    "essential_preorders_detected_v6",
    {
      variantCount: i.length,
      badgeCount: i.filter((e) => e.badgeHtml).length,
      late: t
    },
    0.1
  ));
}
function $n(i) {
  const t = [];
  for (const { id: e, badgeHtml: n } of i)
    e && n && t.push({ variantId: e, badgeHtml: n });
  return JSON.stringify(t);
}
function Rn() {
  for (const i of y(rt))
    at(i);
}
function at(i) {
  var e;
  ((e = i.getAttribute(Tt)) != null ? e : Z) !== N && P(i, Tt, N);
}
function Gn() {
  if (Dt)
    return;
  Dt = !0, new MutationObserver((t) => {
    if (N !== Z) {
      for (const e of t)
        for (const n of e.addedNodes)
          if (n instanceof HTMLElement) {
            if (n.matches(rt)) {
              at(n);
              continue;
            }
            if (n.firstElementChild)
              for (const r of y(rt, n))
                at(r);
          }
    }
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  });
}
class Hn {
  constructor(t) {
    this._submitInProgress = !1, this._ignoreClick = !1, this._clickHandler = null, this._onClickCallback = null, this._validationCallback = null, this._horizonAnimationDisabled = !1, this.button = t;
  }
  onClick(t) {
    this._onClickCallback = t;
  }
  setValidation(t) {
    this._validationCallback = t;
  }
  onClickIfConditionMet(t, e, n) {
    this._clickHandler = {
      condition: t,
      callback: e,
      shouldPreventDefault: n
    }, this._registerClickHandler();
  }
  replaceButton(t) {
    I("New add to cart button", { button: t }), this.button = t, this._clickHandler && this._registerClickHandler();
  }
  _registerClickHandler() {
    if (!this._clickHandler)
      return;
    this._setupHorizonThemeHandling();
    const t = async (n) => {
      const r = this._submitInProgress || this._ignoreClick;
      if (this._onClickCallback && !r && this._onClickCallback(), this._validationCallback && !this._validationCallback()) {
        n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation();
        return;
      }
      const a = this._clickHandler.condition(), o = this._clickHandler.shouldPreventDefault();
      if (this._ignoreClick || I("Add to cart button clicked"), h("AddToCartButton#interceptClick", {
        conditionMet: a,
        preventDefault: o,
        submitInProgress: this._submitInProgress,
        ignoreClick: this._ignoreClick
      }), !!a) {
        if (this._submitInProgress) {
          this._submitInProgress = !1;
          return;
        }
        if (!this._ignoreClick) {
          if (this._submitInProgress = !0, this._ignoreClick = !0, this.button.disabled = !0, setTimeout(() => {
            this._ignoreClick = !1;
          }, 1e3), n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), await this._clickHandler.callback(), this.button.disabled = !1, o) {
            this._submitInProgress = !1;
            return;
          }
          await new Promise((s) => setTimeout(s, 200)), this.button.click();
        }
      }
    };
    this.button.addEventListener("click", t, !0);
  }
  updatePrice(t, e) {
    const n = this._findAllAddToCartPriceElements(this.button);
    if (n.length === 0)
      return;
    const r = n.find(
      (o) => this._isCompareAtPriceElement(o)
    ), a = n.find((o) => o !== r) || n[0];
    a.innerHTML = t.amount > 0 ? t.formatted : "", r && r !== a && (e.amount > t.amount && t.amount > 0 ? (r.innerHTML = e.formatted, r.style.display = "") : r.innerHTML = "");
  }
  _setupHorizonThemeHandling() {
    const t = this.button.closest("add-to-cart-component");
    t && this.button.addEventListener(
      "pointerdown",
      () => {
        this._validationCallback && !this._validationCallback() ? (t.setAttribute("data-add-to-cart-animation", "false"), this._horizonAnimationDisabled = !0) : this._horizonAnimationDisabled && (t.setAttribute("data-add-to-cart-animation", "true"), this._horizonAnimationDisabled = !1);
      },
      !0
    );
  }
  _isPriceNode(t) {
    var n;
    const e = (n = t.childNodes[0]) == null ? void 0 : n.nodeValue;
    return !!(e && e.match(/\d/) && !e.match(/\p{L}{4}/u) && !e.includes("%"));
  }
  _findAllAddToCartPriceElements(t) {
    const e = [];
    if (!t.childNodes.length)
      return e;
    if (this._isPriceNode(t))
      return e.push(t), e;
    for (const n of t.childNodes)
      e.push(...this._findAllAddToCartPriceElements(n));
    return e;
  }
  _isCompareAtPriceElement(t) {
    let e = t;
    for (; e && e !== this.button; ) {
      const n = e.tagName;
      if (n === "S" || n === "DEL" || n === "STRIKE" || /compare/i.test(e.className || "") || getComputedStyle(e).textDecorationLine.includes("line-through"))
        return !0;
      e = e.parentElement;
    }
    return !1;
  }
}
class Qn {
  constructor(t, e, n, r) {
    this._acceleratedCheckoutButtonsEnabled = !0, this._currentItem = null, this._variantIdChangeCallback = null, this._sellingPlanChangeCallback = null, this._variantIdIntervalId = null, this._sellingPlanObserver = null, this._sellingPlanChangeHandler = null, h("AddToCartForm", {
      form: t,
      addQuantityInput: e,
      allowSellingPlanUpdate: n
    }), this.form = t, this._addQuantityInput = e, this._allowSellingPlanUpdate = n, this._abTestRunning = r, this._addAbTestSessionId();
  }
  _addAbTestSessionId() {
    if (!this._abTestRunning)
      return;
    const t = this._findOrCreateInput(
      "properties[__kaching_session_id]"
    );
    t.value = nt();
  }
  updateItem(t) {
    h("AddToCartForm#updateItem", [this.form, t]), this._currentItem = t, this._updateIdInput(t.id), this._updateQuantityInput(t.quantity), this._updateKachingBundlesPropertyInput(t.properties), this._updateSellingPlanInput(t.selling_plan);
  }
  currentVariantId() {
    const t = this._findVariantIdElement();
    if (t)
      return Number(t.value);
  }
  onVariantIdChange(t) {
    this._variantIdChangeCallback = t, this._registerVariantIdObserver();
  }
  _registerVariantIdObserver() {
    if (!this._variantIdChangeCallback)
      return;
    this._variantIdIntervalId !== null && (window.clearInterval(this._variantIdIntervalId), this._variantIdIntervalId = null);
    const t = this._variantIdChangeCallback, e = this._findVariantIdElement();
    if (e instanceof HTMLInputElement && it(e, "value", (n, r) => {
      n !== r && r && t(Number(r));
    }), e instanceof HTMLSelectElement) {
      let n;
      this._variantIdIntervalId = window.setInterval(() => {
        const r = e.value;
        n !== r && r && (n = r, t(Number(r)));
      }, 100);
    }
  }
  onSellingPlanChange(t) {
    this._sellingPlanChangeCallback = t, this._registerSellingPlanObserver();
  }
  _registerSellingPlanObserver() {
    if (this._allowSellingPlanUpdate || !this._sellingPlanChangeCallback)
      return;
    this._sellingPlanObserver && (this._sellingPlanObserver.disconnect(), this._sellingPlanObserver = null);
    const t = this._sellingPlanChangeCallback;
    let e;
    const n = (o) => {
      e !== o && (e = o, t(o ? Number(o) : void 0));
    };
    let r = null;
    const a = () => {
      var l;
      const o = this._findInput("selling_plan");
      o !== r && (r = o, o && it(o, "value", (c, u) => {
        n(u);
      })), this._sellingPlanChangeHandler || (this._sellingPlanChangeHandler = (c) => {
        const u = c.target;
        u.name === "selling_plan" && n(u.value);
      }, this.form.addEventListener("change", this._sellingPlanChangeHandler));
      const s = A(
        'input[name="selling_plan"]:checked',
        this.form
      );
      n((l = s == null ? void 0 : s.value) != null ? l : o == null ? void 0 : o.value);
    };
    a(), this._sellingPlanObserver = new MutationObserver((o) => {
      o.some((s) => s.type === "childList") && a();
    }), this._sellingPlanObserver.observe(this.form, {
      childList: !0,
      subtree: !0
    });
  }
  toggleAcceleratedCheckoutButtons(t) {
    const e = "kaching-bundles-form--different-variants-selected";
    this._acceleratedCheckoutButtonsEnabled = t, t ? this.form.classList.remove(e) : this.form.classList.add(e);
  }
  _cleanupObservers() {
    this._variantIdIntervalId !== null && (window.clearInterval(this._variantIdIntervalId), this._variantIdIntervalId = null), this._sellingPlanObserver && (this._sellingPlanObserver.disconnect(), this._sellingPlanObserver = null), this._sellingPlanChangeHandler && (this.form.removeEventListener("change", this._sellingPlanChangeHandler), this._sellingPlanChangeHandler = null);
  }
  replaceForm(t) {
    I("New add to cart form", { form: t }), this._cleanupObservers(), this.form = t, this._addAbTestSessionId(), this.toggleAcceleratedCheckoutButtons(
      this._acceleratedCheckoutButtonsEnabled
    ), this._currentItem && this.updateItem(this._currentItem), this._registerVariantIdObserver(), this._registerSellingPlanObserver();
  }
  _updateIdInput(t) {
    const e = this._findVariantIdElement() || this._createInput("id"), n = String(t);
    this._ensureSelectOptionExists(e, n), e.disabled = !1, e.value = n;
  }
  _updateQuantityInput(t) {
    h("AddToCartForm#_updateQuantityInput", t);
    let e = null;
    this._addQuantityInput ? e = this._findOrCreateInput("quantity") : e = this._findInput("quantity"), e && (e.disabled = !1, e.value = String(t));
  }
  _updateKachingBundlesPropertyInput(t) {
    var e, n;
    if (t.__kaching_bundles) {
      const r = this._findOrCreateInput(
        "properties[__kaching_bundles]"
      );
      r.disabled = !1, r.value = this._encodeBundlesProperty(
        t.__kaching_bundles
      );
      const a = (n = (e = window.Shopify.theme) == null ? void 0 : e.schema_name) == null ? void 0 : n.toLowerCase();
      a != null && a.includes("pipeline") && (r.dataset.morphSkip = "true");
    } else {
      const r = this._findInput("properties[__kaching_bundles]");
      r == null || r.remove();
    }
  }
  _encodeBundlesProperty(t) {
    var n, r;
    const e = (r = (n = window.Shopify.theme) == null ? void 0 : n.schema_name) == null ? void 0 : r.toLowerCase();
    return e != null && e.includes("shrine pro") || e != null && e.includes("ascendify") ? btoa(t) : t;
  }
  _updateSellingPlanInput(t) {
    if (this._allowSellingPlanUpdate)
      if (t) {
        const e = this._findOrCreateInput("selling_plan");
        e.disabled = !1, e.value = String(t);
      } else {
        const e = this._findInput("selling_plan");
        e == null || e.remove();
      }
  }
  _findOrCreateInput(t) {
    return this._findInput(t) || this._createInput(t);
  }
  _ensureSelectOptionExists(t, e) {
    if (!(t instanceof HTMLSelectElement)) return;
    if (!Array.from(t.options).some(
      (r) => r.value === e
    )) {
      const r = J("option");
      r.value = e, r.text = "", t.appendChild(r);
    }
  }
  _findInput(t) {
    return A(
      `[name="${t}"]`,
      this.form
    );
  }
  _findVariantIdElement() {
    return Array.from(this.form.elements).find(
      (t) => (t instanceof HTMLInputElement || t instanceof HTMLSelectElement) && t.name === "id"
    ) || null;
  }
  _createInput(t) {
    const e = J("input");
    return e.type = "hidden", e.name = t, this.form.prepend(e), e;
  }
}
const st = "kaching-bundle, kaching-bundle-deals", jt = [
  'form[action*="/cart/add"]',
  "form[data-instant-form-product-url]",
  // Instant page builder
  'form[action$="/add"]'
], ot = [
  '[data-pf-type^="ProductATC"]',
  // PageFly sometimes uses ProductATC2
  "button.gp-button-atc",
  // Gempages
  "gp-product-button button",
  // Gempages v7
  "x-buy-button",
  // Minimog
  "button.button--addToCart",
  // Booster
  'button[type="submit"]',
  'input[type="submit"]'
], Jt = [
  // Gempages
  [
    '[data-icon="gpicon-product-cartbutton"]',
    '[data-icon="gpicon-product-quantity"]'
  ],
  // Gempages v7
  ["gp-product-button", "gp-product-quantity"],
  // Dawn (and other free themes)
  ["product-form", ".product-form__quantity"],
  // Horizon
  [".buy-buttons-block", ".quantity-selector-wrapper"],
  // PageFly app
  ['[data-pf-type^="ProductATC"]', '[data-pf-type="ProductQuantity"]'],
  // PageFly sometimes uses ProductATC2
  // Debut
  [".product-form__item--submit", 'label[for="Quantity-product-template"]'],
  // Debutify
  [".product-single__add-to-cart", ".product-single__quantity"],
  // Impact
  [".product-info__buy-buttons", ".product-info__quantity-selector"],
  // Prestige
  [
    ".ProductForm__BuyButtons, .ProductForm__AddToCart",
    ".ProductForm__QuantitySelector"
  ],
  // Prestige (v7)
  ['[data-block-type="buy-buttons"]', '[data-block-type="quantity-selector"]'],
  // Envy
  [".product-page--submit-action", ".quantity-controls__outer"],
  // Warehouse
  [".product-form__payment-container", ".product-form__info-item--quantity"],
  // Atlantic
  ["[data-product-submit]", ".product-quantity-input"],
  // Empire
  [".product-form--atc", ".product-form--atc-qty"],
  // Turbo
  [".purchase-details", ".purchase-details__quantity"],
  // Expanse
  [".product-single__form .payment-buttons", ".product__quantity"],
  // Minimal
  [".product-form--wide", ".product-single__quantity"],
  // Brooklyn
  [".product-single__add-to-cart", ".product-single__quantity"],
  // Blockshop
  [".product-form--button-container", null],
  // Venture
  [".product-form__item--submit", ".product-form__item--quantity"],
  // Showcase
  [".product-detail__form__action", null],
  // Palo Alto
  [".product__submit__buttons", null],
  // Symmetry
  [".buy-buttons-row", ".quantity-wrapper"],
  // Kalles, Unsen
  [".t4s-product-form__buttons", "[data-quantity-wrapper]"],
  // Alchemy
  [".qty-wrapper--with-payment-button", ".product-qty"],
  // Baseline
  [".shopify-product-form", ".product-quantity-block"],
  // Shapes
  [".shopify-product-form", ".product-block-quantity-selector"],
  // Colors
  [".type_buy_buttons", ".type_quantity_selector"],
  // Motion
  [".product-single__form .add-to-cart", ".product__quantity"],
  // Avenue
  [".purchase-section", ".quantity.form"],
  // Ella
  [".product-form__buttons", ".quantity_selector"],
  // Booster
  [".product__atc", ".quantity--input"],
  // Focal
  [".product-form__payment-container", ".quantity-selector"],
  // EComposer
  [".ecom-product-single__add-to-cart", ".ecom-product-single__quantity"],
  // Solodrop
  [".product-form__submit", ".product__quantity"],
  // Enterprise
  [".product-info__add-to-cart", "quantity-input"],
  // Yuva
  [".yv-checkout-btn", ".yv-product-quantity"],
  // Reformation
  [".product-add-to-cart-container", "quantity-selector"],
  // Pipeline
  [".product__block__buttons", ".product__block__quantity"],
  // Minimog
  ["x-buy-button", "x-quantity-input"],
  // Xtra
  [".submit:has(.overlay-buy_button)", ".input-amount"],
  // Instant page builder
  [
    '[data-instant-action-type="redirect-to-cart"]',
    '[data-instant-type="container"]:has(> .instant-quantity-input)'
  ]
], zn = (i, t, e, n) => {
  if (h("_updateNativePrice", {
    discountedPrice: t,
    fullPrice: e
  }), e.amount > 0) {
    let r = y(
      "[data-kaching-price-compare]"
    );
    if (n.customSelectors.priceCompare && (r = y(
      n.customSelectors.priceCompare
    )), r.length > 0)
      for (const a of r)
        e.amount > t.amount ? (a.innerHTML = e.formatted, a.style.display = "") : a.style.display = "none";
    else {
      const a = [
        ".price--large .price__sale .price-item--regular",
        // Dawn, Shrine
        ".price--medium .price__sale .price-item--regular",
        // Be Yours
        ".lumin-price .price__sale .price-item--regular",
        // Architect, Beauty
        ".product-page-price .price__sale .price-item--regular",
        // Craft, Atlas
        ".f-price--large .f-price__sale .f-price-item--regular",
        // Sleek
        'gp-product-price div[type="compare"]',
        // Gempages
        "gp-product-price .gp-product-compare-price",
        // Gempages
        "product-price .compare-at-price",
        // Horizon
        ".pp-product-price .pp-price-item--sale",
        // Page Pilot
        ".product__price-and-badge .product__price--compare",
        // Palo Alto
        ".product-block--price span[data-compare-price]",
        // Impulse
        ".main-product__block-price .m-price__sale .m-price-item--regular",
        // Minimog
        ".product-info__price compare-at-price",
        // Impact
        '.product-info__block-item[data-block-type="price"] compare-at-price',
        // Prestige
        ".product-form__info-item .price--compare",
        // Warehouse
        '[data-product-type="compare_at_price"]',
        // PageFly
        ".product__price-wrapper .price__container .price__sale del",
        // Marble
        ".product__price-wrapper .price__container .product__price span:not(.visually-hidden)"
        // Marble
      ].flatMap((s) => y(s)), o = O(
        i,
        a
      );
      if (o) {
        o.innerHTML = e.formatted;
        const s = o.closest("gp-product-price");
        s instanceof HTMLElement && (s.dataset.hidden = e.amount > t.amount ? "false" : "true");
      }
    }
  }
  if (t.amount > 0) {
    let r = y("[data-kaching-price]");
    if (n.customSelectors.price && (r = y(
      n.customSelectors.price
    )), r.length > 0)
      for (const a of r)
        a.innerHTML = t.formatted;
    else {
      const a = [
        ".price--large .price__regular .price-item--regular",
        // Dawn, Shrine
        ".price--large .price__sale .price-item--sale",
        // Dawn, Shrine
        ".price--medium .price__regular .price-item--regular",
        // Be Yours
        ".price--medium .price__sale .price-item--sale",
        // Be Yours
        ".lumin-price .price__regular .price-item--regular",
        // Architect, Beauty
        ".lumin-price .price__sale .price-item--sale",
        // Architect, Beauty
        ".product-page-price .price__regular .price-item--regular",
        // Craft, Atlas
        ".product-page-price .price__sale .price-item--sale",
        // Craft, Atlas
        ".f-price--large .f-price__regular .f-price-item--regular",
        // Sleek
        ".f-price--large .f-price__sale .f-price-item--sale",
        // Sleek
        'gp-product-price div[type="regular"]',
        // Gempages
        "gp-product-price .gp-price:not(.gp-product-compare-price)",
        // Gempages
        "product-price .price",
        // Horizon
        ".pp-product-price .pp-price-item--regular",
        // Page Pilot
        ".product__price-and-badge .product__price--regular",
        // Palo Alto
        ".product-block--price span[data-product-price]",
        // Impulse
        ".main-product__block-price .m-price__sale .m-price-item--sale",
        // Minimog
        ".product-info__price sale-price",
        // Impact
        '.product-info__block-item[data-block-type="price"] sale-price',
        // Prestige
        ".product-form__info-item .price:not(.price--compare)",
        // Warehouse
        '[data-product-type="price"]',
        // PageFly
        ".product__price-wrapper .price__container .price__sale ins"
        // Marble
      ].flatMap((s) => y(s)), o = O(i, a);
      o && (o.innerHTML = t.formatted);
    }
  }
  if (t.amount > 0 && e.amount > 0) {
    const r = Math.round(
      (e.amount - t.amount) / e.amount * 100
    ), a = y("[data-kaching-price-badge]");
    if (a.length > 0)
      for (const o of a)
        r > 0 ? (o.innerHTML = o.innerHTML.replace(
          /\d+%/,
          `${r}%`
        ), o.style.display = "") : o.style.display = "none";
    else {
      const o = [
        ".price--large .price__badge-sale",
        // Dawn, Shrine
        ".lumin-price .price__badge-sale",
        // Architect
        ".product-page-price .price__badge-sale",
        // Craft, Atlas
        "gp-product-tag div[data-gp-text]",
        // Gempages
        ".product__price-and-badge span[data-price-off-amount]",
        // Palo Alto
        ".product-block--price span[data-save-price]",
        // Impulse
        ".product-info__price on-sale-badge"
        // Impact
      ].flatMap((l) => y(l)), s = O(i, o);
      s && (/\d/.test(s.innerHTML) && !s.innerHTML.includes("%") ? s.style.display = "none" : s.innerHTML = s.innerHTML.replace(/\d+%/, `${r}%`));
    }
  }
};
class x {
  static find(t, e) {
    let n = t.parentElement;
    for (; n; ) {
      if (e) {
        const o = y(
          e,
          n
        );
        if (o.length > 0)
          return new x(o);
      }
      const r = A(
        [
          "variant-selects",
          "variant-radios",
          "variant-picker",
          "product-variants",
          "gp-product-variants",
          ".gf_variants-wrapper",
          '[data-pf-type="ProductVariantSwatches"]',
          ".product-selectors",
          ".product-block-variant-picker",
          "dm-variant-selects",
          "simple-variant-picker"
        ].join(", "),
        n
      );
      if (r) return new x([r]);
      let a = y(
        [
          ".selector-wrapper",
          ".radio-wrapper",
          ".variant-wrapper",
          "div[data-product-option]",
          ".pp-variant-picker"
        ].join(", "),
        n
      );
      if (window.Shopify.shop && ["28212b.myshopify.com", "9bd9ad.myshopify.com"].includes(
        window.Shopify.shop
      ) && (a = y(
        ".selector-wrapper, .radio-wrapper, .variant-wrapper, .select-wrapper, div[data-product-option]",
        n
      )), a.length > 0) {
        const o = a.filter(
          (s) => !a.some(
            (l) => l !== s && l.contains(s)
          )
        );
        return new x(o);
      }
      n = n.parentElement;
    }
    return null;
  }
  constructor(t) {
    this._elements = t;
  }
  elements() {
    return this._elements;
  }
  hide() {
    for (const t of this._elements)
      t.style.display = "none", t.parentElement.classList.add(
        "kaching-bundles--variant-selects-hidden"
      );
  }
  select(t, e, n, r, a, o) {
    h("VariantPicker#select", [
      t,
      e,
      n,
      r
    ]), this._clickOptionWrapper(n, r) || this._clickRadioInput(
      t,
      e,
      n,
      r,
      a
    ) || this._setSelectValue(t, n, r) || this._setSelectVariantId(o) || this._clickButton(n, r);
  }
  // GemPages v7
  _clickOptionWrapper(t, e) {
    const r = this._elements.map((a) => y(".option-value-wrapper", a)).flat().find(
      (a) => a.getAttribute("option-data") === t && a.getAttribute("option-value") === e
    );
    return r ? (h("VariantPicker#_clickOptionWrapper", r), r.click(), !0) : !1;
  }
  _clickRadioInput(t, e, n, r, a) {
    const o = this._elements.map((c) => [...c.querySelectorAll("input")]).flat();
    let s = o.filter(
      (c) => [
        n,
        `${n}-${t}`,
        `options[${n}]`,
        `option${t}`,
        `option-${a}-${t - 1}`,
        `${a}-options-${n}`
      ].includes(c.name.trim())
    );
    s.length || (s = o.filter(
      (c) => c.dataset.optionPosition ? Number(c.dataset.optionPosition) === t : !1
    )), s.length || (s = o.filter((c) => c.type === "radio"));
    const l = s.find(
      (c) => c.value == r || c.value === String(e)
    );
    return l ? (h("VariantPicker#_clickRadioInput", l), l.click(), !0) : !1;
  }
  _setSelectValue(t, e, n) {
    const a = this._elements.map((s) => [...s.querySelectorAll("select")]).flat().find((s) => !!([`options[${e}]`, `option${t}`].includes(s.name) || s.dataset.index === `option${t}` || s.dataset.optionName === e || [
      `SingleOptionSelector-product-${t - 1}`,
      // PageFly
      `p-variant-dropdown-${t}`,
      // Gempages v6
      `option-${e.toLowerCase().replace(/ /g, "-")}`
    ].includes(s.id)));
    return !a || ![...a.options].find(
      (s) => s.value == n
    ) ? !1 : a.value === n ? (h("VariantPicker#_setSelectValue - already set", {
      variantSelect: a,
      optionValue: n
    }), !0) : (h("VariantPicker#_setSelectValue", { variantSelect: a, optionValue: n }), a.value = n, a.dispatchEvent(new Event("change", { bubbles: !0 })), !0);
  }
  _setSelectVariantId(t) {
    const n = this._elements.map((r) => [...r.querySelectorAll("select")]).flat().find(
      (r) => [...r.options].find((a) => Number(a.value) === t)
    );
    return n ? n.value === String(t) ? (h("VariantPicker#_setSelectVariantId - already set", {
      variantSelect: n,
      variantId: t
    }), !0) : (h("VariantPicker#_setSelectVariantId", { variantSelect: n, variantId: t }), n.value = String(t), n.dispatchEvent(new Event("change", { bubbles: !0 })), !0) : !1;
  }
  _clickButton(t, e) {
    const n = this._elements.find(
      (a) => a.getAttribute("data-product-option") === t
    );
    if (!n) return !1;
    const r = y("[data-value]", n).find(
      (a) => a.getAttribute("data-value") === e
    );
    return r ? (h("VariantPicker#_clickButton", r), r.click(), !0) : !1;
  }
}
class Un {
  constructor(t, e, n) {
    this._variantPicker = null, this._quantityInput = null, this._hiddenQuantityElement = null, this._onQuantityChange = null, this._addToCartForm = null, this._addToCartButton = null, this._placeholder = t, this._globalConfig = e, this._dealBlockSettings = n;
  }
  initialize() {
    this._findVariantPicker(), this._observeVariantPickerRemoval(), this._findQuantityInput(), this._listenForQuantityInputChange(), this._observeQuantityInputRemoval(), this._findAddToCartForm(), this._observeAddToCartFormRemoval(), this._findAddToCartButton(), this._moveAddToCartButtonOutOfQuantityElement(), this._observeAddToCartButtonRemoval();
  }
  variantPicker() {
    return this._variantPicker;
  }
  quantityInput() {
    return this._quantityInput;
  }
  addToCartForm() {
    return this._addToCartForm;
  }
  addToCartButton() {
    return this._addToCartButton;
  }
  onQuantityInputChange(t) {
    this._onQuantityChange = t;
  }
  updatePrice(t, e) {
    zn(
      this._placeholder,
      t,
      e,
      this._globalConfig
    );
  }
  _findVariantPicker() {
    const t = x.find(
      this._placeholder,
      this._globalConfig.customSelectors.variantPicker
    );
    t && (this._dealBlockSettings.hideVariantPicker && t.hide(), this._variantPicker = t);
  }
  _observeVariantPickerRemoval() {
    this._variantPicker && L(this._variantPicker.elements()[0], () => {
      var t, e;
      this._findVariantPicker(), I("New variant picker", {
        picker: (t = this._variantPicker) == null ? void 0 : t.elements()
      }), C(
        "variant_picker_removed",
        {
          recreated: !!this._variantPicker,
          theme: (e = window.Shopify.theme) == null ? void 0 : e.schema_name
        },
        0.01
      ), this._observeVariantPickerRemoval();
    });
  }
  _findQuantityInput() {
    const t = this._findQuantityElements(), n = O(
      this._placeholder,
      t,
      6
    );
    if (!n)
      return;
    this._globalConfig.keepQuantityInput || (this._hiddenQuantityElement = n, n.style.display = "none");
    const r = n.matches("input") ? n : n.querySelector("input");
    this._quantityInput = r;
  }
  _listenForQuantityInputChange() {
    this._quantityInput && (D(this._quantityInput, "change", () => {
      this._onQuantityChange && this._onQuantityChange(Number(this._quantityInput.value));
    }), it(this._quantityInput, "value", (t, e) => {
      t !== e && this._onQuantityChange && this._onQuantityChange(Number(e));
    }));
  }
  _observeQuantityInputRemoval() {
    this._quantityInput && L(this._quantityInput, () => {
      var t;
      this._findQuantityInput(), this._listenForQuantityInputChange(), this._moveAddToCartButtonOutOfQuantityElement(), I("New quantity input", {
        input: this._quantityInput
      }), C(
        "quantity_input_removed",
        {
          recreated: !!this._quantityInput,
          theme: (t = window.Shopify.theme) == null ? void 0 : t.schema_name
        },
        0.01
      ), this._observeQuantityInputRemoval();
    });
  }
  _findQuantityElements() {
    const t = this._globalConfig.customSelectors.quantity;
    if (t) {
      const e = y(t);
      if (e.length)
        return e;
    }
    for (const [e, n] of Jt) {
      if (!n)
        continue;
      const r = y(n);
      if (r.length)
        return r;
    }
    return y(".product-form__quantity");
  }
  _findAddToCartForm() {
    const t = this._findCartForm();
    if (!t)
      return;
    const e = !!this._dealBlockSettings.subscriptionsEnabled || this._dealBlockSettings.dealBars.some(
      (n) => n.sellingPlanEnabled
    );
    this._addToCartForm = new Qn(
      t,
      !this._quantityInput,
      e,
      !!this._dealBlockSettings.abTestVariantNumber
    );
  }
  _findCartForm() {
    let t = this._placeholder.parentElement;
    for (; t; ) {
      for (const e of jt)
        for (const n of [
          this._globalConfig.customSelectors.addToCartButton,
          ...ot,
          "button"
        ]) {
          if (!n)
            continue;
          const r = A(
            `${e} ${n}`,
            t
          );
          if (r) {
            const a = r.closest(
              e
            );
            if (!a) continue;
            return !a.contains(this._placeholder) && a.querySelector(st) ? null : a;
          }
        }
      t = t.parentElement;
    }
    return null;
  }
  _observeAddToCartFormRemoval() {
    var e;
    const t = (e = this._addToCartForm) == null ? void 0 : e.form;
    window.Shopify.designMode || !t || L(t, () => {
      var r, a;
      const n = this._findCartForm();
      n && ((r = this._addToCartForm) == null || r.replaceForm(n), C(
        "cart_form_removed",
        {
          theme: (a = window.Shopify.theme) == null ? void 0 : a.schema_name
        },
        0.01
      ), this._observeAddToCartFormRemoval());
    });
  }
  _findAddToCartButton() {
    const t = this._findAddToCartButtonElement() || this._findFormlessAddToCartButtonElement();
    if (!t) {
      this._warnAboutMissingAddToCartButton(), this._addToCartButton = null;
      return;
    }
    this._addToCartButton = new Hn(t);
  }
  _moveAddToCartButtonOutOfQuantityElement() {
    !this._hiddenQuantityElement || !this._addToCartButton || this._hiddenQuantityElement.contains(this._addToCartButton.button) && this._hiddenQuantityElement.after(this._addToCartButton.button);
  }
  _findAddToCartButtonElement() {
    var r;
    const t = (r = this.addToCartForm()) == null ? void 0 : r.form;
    if (!t)
      return null;
    if (this._globalConfig.customSelectors.addToCartButton) {
      const a = A(
        this._globalConfig.customSelectors.addToCartButton,
        t
      );
      if (a)
        return a;
    }
    const e = [];
    for (const a of ot) {
      const o = y(a, t);
      e.push(...o);
    }
    const n = O(
      this._placeholder,
      e
    );
    return n || t.querySelector("button");
  }
  _findFormlessAddToCartButtonElement() {
    if (this._addToCartForm || this._globalConfig.featureFlags.intercept_cart_request !== !0 || !this._globalConfig.customSelectors.addToCartButton)
      return null;
    const t = this._globalConfig.customSelectors.addToCartButton;
    if (!t)
      return null;
    const e = y(t);
    return e.length === 0 ? null : O(
      this._placeholder,
      e,
      3
    );
  }
  _observeAddToCartButtonRemoval() {
    this._addToCartButton && L(this._addToCartButton.button, () => {
      var e, n;
      if ((e = this._addToCartButton) != null && e.button.isConnected) {
        this._observeAddToCartButtonRemoval();
        return;
      }
      let t = this._findAddToCartButtonElement() || this._findFormlessAddToCartButtonElement();
      t ? (this._addToCartButton.replaceButton(t), this._moveAddToCartButtonOutOfQuantityElement()) : this._addToCartButton = null, C(
        "add_to_cart_button_removed",
        {
          recreated: !!t,
          theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name
        },
        0.01
      ), this._observeAddToCartButtonRemoval();
    });
  }
  _warnAboutMissingAddToCartButton() {
    new URLSearchParams(window.location.search).get("source") !== "visualPreviewInitialLoad" && console.log(
      "%c[Kaching Bundles] Add to cart button not found. Please add a selector to the settings page or contact support.",
      "background: #f8d7da; color: #721c24; padding: 8px; border-left: 4px solid #f5c6cb;"
    );
  }
}
const jn = (i, t, e, n, r) => {
  if (!e.stickyAtcEnabled || t.offsetParent === null || document.querySelector(".kaching-bundles-sticky-atc-wrapper"))
    return;
  const a = document.createElement("div");
  a.classList.add("kaching-bundles-sticky-atc-wrapper"), document.body.appendChild(a);
  const o = document.createElement("div");
  o.classList.add("kaching-bundles-sticky-atc-spacer"), a.appendChild(o);
  const s = document.createElement("kaching-bundles-sticky-atc");
  s.setAttribute(
    "sticky-atc",
    JSON.stringify(e.stickyAtc)
  ), s.setAttribute("config", JSON.stringify(i)), s.setAttribute("translations", JSON.stringify(n)), s.setAttribute("product", JSON.stringify(r)), s.setAttribute("deal-block", JSON.stringify(e)), a.appendChild(s), s.addEventListener(
    "kaching-bundles-sticky-atc-clicked",
    () => {
      const m = t.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: m,
        behavior: "smooth"
      });
    }
  );
  let l = !1;
  const c = () => {
    const d = t.getBoundingClientRect().bottom < 0;
    d !== l && (l = d, d ? (s.style.display = "block", requestAnimationFrame(() => {
      l && s.classList.add("kaching-bundles-sticky-atc--visible");
    })) : s.classList.contains("kaching-bundles-sticky-atc--visible") && (s.classList.remove("kaching-bundles-sticky-atc--visible"), s.addEventListener(
      "transitionend",
      () => {
        l || (s.style.display = "");
      },
      { once: !0 }
    )));
  };
  requestAnimationFrame(c), window.addEventListener("scroll", c, { passive: !0 }), new ResizeObserver(() => {
    const d = s.offsetHeight;
    o.style.height = `${d}px`;
  }).observe(s);
}, Jn = 0.1;
let Nt = !1, lt, ct, ut = 0, Wt;
const Wn = (i) => {
  lt === void 0 && (lt = Math.round(i));
}, Kn = (i) => {
  ct === void 0 && (ut = performance.now(), ct = Math.round(ut), Wt = i);
}, Xn = async () => {
  var i;
  if (!Nt && !((i = window.Shopify) != null && i.designMode) && typeof PerformanceObserver != "undefined" && (Nt = !0, !(!te() && !ee() && Math.random() > Jn)))
    try {
      (await import("./web-vitals-collector.js")).start(() => ({
        bundleImportMs: lt,
        widgetMountedMs: ct,
        widgetInsertedAt: ut,
        widgetElement: Wt
      }));
    } catch (t) {
      console.error(t);
    }
};
class Ot {
  constructor(t) {
    this._globalConfig = t, setTimeout(() => {
      const e = document.querySelector(
        'link[href*="kaching-bundles.css"]'
      );
      e && L(e, () => {
        var n;
        C(
          "css_removed",
          {
            theme: (n = window.Shopify.theme) == null ? void 0 : n.schema_name
          },
          0.01
        );
      });
    }, 100), Vn();
  }
  initialize() {
    this._setupTranslations();
    const t = y(st);
    this._addProductIdForPlaceholders(t), t.length === 0 && this._addPlaceholders(), this._initializePlaceholders(), this._globalConfig.abTestsRunning && ne(), this._setupPlaceholderObserver();
  }
  _setupTranslations() {
    const t = Q("script#kaching-bundles-translations") || [], e = t.find(
      (n) => n.locale === this._globalConfig.locale
    );
    this._translations = e == null ? void 0 : e.translations, se(t);
  }
  _addProductIdForPlaceholders(t) {
    const e = Q("script.kaching-bundles-product[data-main]");
    if (e)
      for (const n of t)
        n.getAttribute("product-id") || n.setAttribute("product-id", e.id);
  }
  _addPlaceholders() {
    if (!A("script.kaching-bundles-deal-block-settings"))
      return;
    const t = this._findPosition();
    if (!t)
      return;
    const e = Q("script.kaching-bundles-product[data-main]"), n = e && e.id || this._globalConfig.productId, r = J("kaching-bundle");
    r.setAttribute("product-id", n), t.parentElement.insertBefore(r, t);
  }
  async _initializePlaceholders() {
    const t = [...y(st)].filter(
      (s) => s.getAttribute("product-id")
    );
    if (h("_initializePlaceholders", t), t.length === 0) {
      window.kachingBundlesInitialized = !0, window.dispatchEvent(new CustomEvent("kaching-bundles-initialized"));
      return;
    }
    if (t.filter(
      (s) => !M(s).initialized
    ).length === 0)
      return;
    const n = await this._fetchPlaceholdersData(t);
    h("placeholdersData", n);
    const r = Array.from(n.values()).map(({ dealBlock: s }) => s).filter((s) => s != null), a = Array.from(n.values()).map(({ product: s }) => s).filter((s) => s != null);
    await U(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken,
      a,
      r
    );
    const o = nt();
    for (const s of t) {
      const { product: l, dealBlock: c } = n.get(s);
      if (!l || !c) {
        M(s).initialized = "skipped";
        continue;
      }
      await this._initializePlaceholder(
        s,
        l,
        c,
        o
      );
    }
    window.kachingBundlesInitialized = !0, window.dispatchEvent(new CustomEvent("kaching-bundles-initialized"));
  }
  async _initializePlaceholder(t, e, n, r) {
    var f, b;
    const a = e.id;
    Xn(), this._globalConfig.webPixel ? (h("Tracking view with web pixel", window.Shopify.analytics), Vt(() => {
      window.Shopify.analytics.publish("kaching_bundle_viewed", {
        product_id: a,
        deal_block_id: n.id,
        ab_test_variant_id: n.abTestVariantId,
        deal_block_version_id: n.versionId,
        session_id: r
      });
    })) : (h("Tracking view without web pixel (legacy)"), setTimeout(() => {
      ie(
        this._globalConfig.shopifyDomain,
        n.id,
        a,
        n.abTestVariantId,
        n.versionId,
        r
      );
    }, 2e3));
    const o = {
      ...this._globalConfig.defaultTranslations,
      ...(f = this._translations) == null ? void 0 : f.system
    }, s = (b = this._translations) == null ? void 0 : b.dealBlocks[n.id], l = { ...o, ...s }, c = this._globalConfig.locale === this._globalConfig.liquidLocale ? y("script.kaching-bundles-product:not([data-main])").map((k) => JSON.parse(k.textContent)).filter((k) => k.variants.length < 250) : [], u = performance.now();
    await import("./kaching-bundles-block.js"), Wn(performance.now() - u);
    const d = { ...this._globalConfig };
    d.currencyRate = Je(
      this._globalConfig.currencyRate,
      n.currency,
      this._globalConfig.marketCurrencyCode
    ), n.dealBars.some(
      (k) => k.dealBarType === et.QuantityBreak && k.quantitySelector
    ) && (d.keepQuantityInput = !1);
    const m = new Un(t, d, n);
    m.initialize();
    const p = J(
      "kaching-bundles-block"
    );
    for (p.setAttribute("data-instant-styles", "none"), new Mn(
      p,
      m,
      d,
      l,
      n,
      e,
      c
    ); t.firstChild; )
      t.removeChild(t.firstChild);
    t.appendChild(p), M(t).initialized = "true", Kn(p), Yn(p), jn(
      this._globalConfig,
      p,
      n,
      l,
      e
    );
  }
  _setupPlaceholderObserver() {
    if (window.Shopify.designMode)
      return;
    new MutationObserver((e) => {
      var r;
      e.some(
        (a) => Array.from(a.addedNodes).some((o) => {
          if (!(o instanceof HTMLElement)) return !1;
          const s = (l) => l.tagName === "KACHING-BUNDLE" && !M(l).initialized;
          return s(o) || Array.from(o.querySelectorAll("kaching-bundle")).some(
            (l) => s(l)
          );
        })
      ) && (this._globalConfig.featureFlags.reinitialize_morphed_placeholders ? (I("Initializing new kaching-bundle placeholder"), this._initializePlaceholders()) : document.querySelector(
        "#replo-fullpage-element, #replo-element-styles"
      ) || C(
        "kaching_bundle_added_v8",
        {
          theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
        },
        0.01
      ));
    }).observe(document.body, {
      childList: !0,
      subtree: !0
    });
  }
  async _fetchPlaceholdersData(t) {
    var _, v;
    const e = t.map(
      (g) => Number(g.getAttribute("product-id"))
    ), n = new Map(
      this._globalConfig.locale === this._globalConfig.liquidLocale ? y("script.kaching-bundles-product[data-main]").map((g) => JSON.parse(g.textContent)).filter((g) => g.variants.length < 250).map((g) => [g.id, g]) : []
    ), r = e.filter(
      (g) => !n.has(g)
    ), a = y(
      "script.kaching-bundles-deal-block-settings"
    ), o = /* @__PURE__ */ new Map();
    for (const g of e) {
      const B = a.filter(
        (E) => Number(M(E).productId) === g
      );
      B.length && o.set(
        g,
        B.map(
          (E) => E.textContent ? JSON.parse(E.textContent) : null
        )
      );
    }
    const s = e.filter(
      (g) => !o.has(g)
    ), l = this._globalConfig.storefrontAccessToken ? new F(
      this._globalConfig.shopifyDomain,
      this._globalConfig.storefrontAccessToken
    ) : null, c = l && r.length > 0 ? z(l, {
      country: this._globalConfig.country,
      language: this._globalConfig.locale.split("-")[0].toUpperCase(),
      productIds: r,
      includeSellingPlans: this._globalConfig.includeSellingPlans,
      includeAvailableQuantity: this._globalConfig.includeAvailableQuantity,
      useExternalMetafieldNamespace: !1
    }) : [], u = l && s.length > 0 ? re(l, {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: this._globalConfig.featureFlags.storefront_metaobjects
    }) : [], [d, m] = await Promise.all([
      c,
      u
    ]), p = new Map(
      r.map((g) => [
        g,
        d.find((B) => B.id == g)
      ])
    ), f = new Map([...n, ...p]), b = nt(), k = /* @__PURE__ */ new Map();
    for (const g of t) {
      const B = Number(g.getAttribute("product-id")), E = f.get(B);
      if (!E)
        continue;
      const ht = ((_ = o.get(B)) == null ? void 0 : _.filter((w) => w)) || m;
      ht.sort((w, T) => {
        const ft = !!w.marketId, Xt = !!T.marketId;
        return ft === Xt ? 0 : ft ? -1 : 1;
      });
      let S = ke(ht, E);
      h("applicableDealBlocks", S), S = S.filter((w) => w.marketId ? w.marketId === this._globalConfig.marketId : !0), S = S.filter(
        (w) => {
          var T;
          return !((T = w.excludedMarketIds) != null && T.includes(this._globalConfig.marketId));
        }
      ), S = S.filter((w) => {
        if (!w.abTestVariantId)
          return !0;
        const T = ae({
          kachingSessionId: b,
          abTestVariantsCount: w.abTestVariantsCount,
          abTestTrafficAllocation: w.abTestTrafficAllocation
        });
        return w.abTestVariantNumber === T;
      }), this._globalConfig.b2bCustomer && (S = S.filter(
        (w) => !w.excludeB2bCustomers
      )), this._globalConfig.requireCustomerLogin && !this._globalConfig.isLoggedIn && (S = []);
      const G = (v = g.getAttribute("manual-deal-block-id")) == null ? void 0 : v.trim();
      if (G) {
        const w = S.findIndex(
          (T) => T.id === G || T.nanoId === G
        );
        if (I("Manual deal override", {
          deal: S[w],
          manualDealBlockId: G,
          manualDealBlockIndex: w
        }), w > 0) {
          const [T] = S.splice(
            w,
            1
          );
          S.unshift(T);
        }
      }
      if (!S.length) {
        k.set(g, {
          product: E,
          dealBlock: null
        });
        continue;
      }
      k.set(g, {
        product: E,
        dealBlock: S[0]
      });
    }
    return k;
  }
  _findPosition() {
    const t = this._findGempagesPosition();
    if (t)
      return t;
    const e = this._findThemePosition();
    if (e)
      return e;
    const n = this._findDefaultPosition();
    return n || null;
  }
  // Temporary
  _findGempagesPosition() {
    const t = y("gp-product-button");
    for (const e of t)
      if (!e.closest("gp-sticky"))
        return e;
    return null;
  }
  _findThemePosition() {
    for (const t of Jt) {
      const e = A(t[0]);
      if (e) {
        if (e.closest(
          ".dbtfy-sticky-addtocart, .cart-drawer, cart-drawer, cart-items"
        ))
          continue;
        return setTimeout(() => {
          var r;
          const n = e.closest(
            '[class*="cart"], [class*="Cart"]'
          );
          n && n.tagName.toLowerCase() !== "body" && !n.classList.toString().includes("add-to-cart") && !n.classList.toString().includes("AddToCart") && !n.classList.toString().includes("icartShopifyCartContent") && C(
            "theme_position_in_cart_drawer_v8",
            {
              selector: t[0],
              classes: n.classList.toString(),
              theme: (r = window.Shopify.theme) == null ? void 0 : r.schema_name
            },
            0.01
          );
        }), e;
      }
    }
    return null;
  }
  _findDefaultPosition() {
    for (const t of jt)
      for (const e of [
        this._globalConfig.customSelectors.addToCartButton,
        ...ot,
        "button"
      ]) {
        if (!e)
          continue;
        const n = A(
          `${t} ${e}`
        );
        if (n)
          return n.parentElement;
      }
    return null;
  }
}
function Yn(i) {
  const t = () => typeof window.FastClick != "undefined" || typeof window.T4SThemeSP != "undefined" && typeof window.T4SThemeSP.FastClick != "undefined" || typeof window.BEEThemeSP != "undefined" && typeof window.BEEThemeSP.FastClick != "undefined", e = setInterval(() => {
    t() && (clearInterval(e), y("*", i).forEach(
      (n) => oe(n, "needsclick")
    ));
  }, 500);
}
const Mt = (i) => {
  var t;
  ((t = window.Shopify.theme) == null ? void 0 : t.theme_store_id) === 801 ? setTimeout(() => new Ot(i).initialize(), 100) : new Ot(i).initialize();
}, Kt = () => {
  var t;
  if (le()) {
    const e = y(
      "style#kaching-bundles-custom-css"
    );
    for (const n of e)
      n.remove();
    return;
  }
  const i = Q(
    "script#kaching-bundles-config"
  );
  i && (I("Shopify domain:", i.shopifyDomain), ce(), ue(i), window.kachingBundlesKeepQuantityInput && (i.keepQuantityInput = !0), Mt(i), window.Shopify.designMode && (D(window, "shopify:section:load", () => {
    Mt(i);
  }), i.isDeprecatedAppEmbed || je({
    customApiHost: i.customApiHost,
    shopifyDomain: i.shopifyDomain,
    themeId: (t = window.Shopify.theme) == null ? void 0 : t.id
  })), he(), fe(), window.kachingBundlesApi = de(i), setTimeout(() => {
    pe();
  }, 1e3));
};
window.__kachingBundlesInitializeInternal = Kt;
const Lt = () => {
  window.kachingBundlesDisableAutoInitialize || Kt();
};
document.readyState === "loading" ? (h("Waiting for DOMContentLoaded"), document.addEventListener("DOMContentLoaded", Lt)) : Lt();
