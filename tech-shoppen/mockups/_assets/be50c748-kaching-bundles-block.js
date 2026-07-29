(function() {
  try {
    if (typeof document != "undefined") {
      var jt = document.createElement("style");
      jt.id = "kaching-bundles-styles", jt.appendChild(document.createTextNode(`.kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__image-placeholder{flex-shrink:0;height:50px;width:50px}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__mix-and-match-products{display:flex;flex-direction:column;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4);overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-products--hidden{display:none}.kaching-bundles .kaching-bundles__mix-and-match-products__divider{display:flex;flex-direction:row;align-items:center;gap:4px;width:100%;height:0;overflow:visible}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-line{display:flex;flex:1;width:auto;height:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-product{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:12px;align-items:center;padding:12px}.kaching-bundles .kaching-bundles__mix-and-match-product__content{display:flex;flex-direction:column;gap:6px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing{display:flex;justify-content:flex-end}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end;gap:0}.kaching-bundles .kaching-bundles__mix-and-match-product__image-link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__mix-and-match-product__image-placeholder{height:50px;width:50px}.kaching-bundles .kaching-bundles__mix-and-match-product__title-link{align-self:flex-start;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__title{overflow-wrap:break-word;text-align:start;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__mix-and-match-product__swap-button{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--bar-border-radius, 8px);background-color:var(--collection-product-button-color, #2b2b2b);color:var(--collection-product-button-text-color, #ffffff);font-size:13px;line-height:1.2;text-align:center;cursor:pointer;white-space:nowrap}.kaching-bundles .kaching-bundles__mix-and-match-products__placeholder{display:flex;align-items:center;justify-content:center;padding:14px 12px;color:#0006;font-style:italic}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;flex:1;min-width:0;overflow-wrap:break-word}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-mix-and-match-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__mix-and-match-choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-mix-and-match-choose-product-photo-size, 100px);max-height:calc(var(--kaching-mix-and-match-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-mix-and-match-choose-product-text-size, 14px);color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-mix-and-match-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-mix-and-match-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-mix-and-match-choose-product-button-size, 16px);background-color:var(--kaching-mix-and-match-choose-product-button-color, #7f56d9);color:var(--kaching-mix-and-match-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__mix-and-match-choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__free-gift-summary{gap:8px;justify-content:flex-start}.kaching-bundles .kaching-bundles__free-gift-summary__images{display:flex;flex-shrink:0;align-items:center}.kaching-bundles .kaching-bundles__free-gift-summary__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0);margin-inline-start:-8px;border:1px solid var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift-summary__image:first-child{margin-inline-start:0}.kaching-bundles .kaching-bundles__free-gift-summary__image--no-border{border-color:transparent}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--bar-border-color, #fff)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--bar-selected-border-color)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.kaching-bundles .kaching-bundles__product-personalisation__image--default{width:70%;height:70%;-o-object-fit:contain;object-fit:contain;opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles-savings-summary{display:flex;align-items:center;justify-content:var(--kaching-bundles-savings-summary-alignment, flex-start);gap:8px;padding:12px 16px;margin-top:calc(10px * var(--block-spacing, 1));background-color:var(--kaching-bundles-savings-summary-background-color, #f5fcf7);color:var(--kaching-bundles-savings-summary-text-color, #1b5933);border-style:solid;border-color:var(--kaching-bundles-savings-summary-border-color, #457757);border-width:var(--kaching-bundles-savings-summary-border-width, 1px);border-radius:var(--kaching-bundles-savings-summary-border-radius, 8px);font-size:var(--kaching-bundles-savings-summary-title-font-size, 14px);font-style:var(--kaching-bundles-savings-summary-title-font-style, normal);font-weight:var(--kaching-bundles-savings-summary-title-font-weight, 500)}.kaching-bundles .kaching-bundles-savings-summary__icon{display:flex;align-items:center;width:1.2em;height:1.2em;flex-shrink:0;color:var(--kaching-bundles-savings-summary-icon-color, #1c5632)}.kaching-bundles .kaching-bundles-savings-summary__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles-savings-summary__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles-savings-summary__value{color:var(--kaching-bundles-savings-summary-value-color, #000000)}.kaching-bundles .kaching-bundles__scratch-off{position:relative;display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1));margin:calc(5px * var(--block-spacing, 1)) 0}.kaching-bundles .kaching-bundles__scratch-off>.kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__scratch-off--unscratched{-webkit-user-select:none;-moz-user-select:none;user-select:none}.kaching-bundles .kaching-bundles__scratch-off--unscratched .kaching-bundles__bar{pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off--revealing .kaching-bundles__bar-most-popular{animation:kaching-scratch-off-badge-pop .3s cubic-bezier(.34,1.56,.64,1) both}@keyframes kaching-scratch-off-badge-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.kaching-bundles .kaching-bundles__scratch-off--unscratched:not(.kaching-bundles__scratch-off--revealing) .kaching-bundles__bar-most-popular{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off--loading{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:var(--bar-border-radius, 8px);cursor:pointer;touch-action:none;transition:opacity .3s ease-out;z-index:11}.kaching-bundles .kaching-bundles__scratch-off-canvas--revealing{opacity:0;pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off-hint{position:absolute;inset:0;margin:auto;width:calc(100% - 10px);height:calc(100% - 10px);max-width:317px;max-height:143px;pointer-events:none;opacity:.4;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-hint--hidden{opacity:0}.kaching-bundles .kaching-bundles__scratch-off-hint-path{stroke-dasharray:1200;stroke-dashoffset:1200;animation:kaching-scratch-off-hint-draw 2.8s cubic-bezier(.4,0,.2,1) infinite}@keyframes kaching-scratch-off-hint-draw{0%{stroke-dashoffset:1200;opacity:1}60%{stroke-dashoffset:0;opacity:1}80%{stroke-dashoffset:0;opacity:1}to{stroke-dashoffset:0;opacity:0}}.kaching-bundles .kaching-bundles__scratch-off-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;color:var(--scratch-off-title-color);font-weight:700;font-size:var(--scratch-off-title-size);line-height:1.25;text-align:center;pointer-events:none;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-title--hidden{opacity:0}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display, block);width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}@media (width < 750px){.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display-mobile, var(--kaching-bundles-sticky-atc-image-display, block));height:var(--kaching-bundles-sticky-atc-product-photo-size-mobile, var(--kaching-bundles-sticky-atc-product-photo-size, 40px));border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius-mobile, var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{font-size:var(--kaching-bundles-sticky-atc-title-font-size-mobile, var(--kaching-bundles-sticky-atc-title-font-size, 16px))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{font-size:var(--kaching-bundles-sticky-atc-button-font-size-mobile, var(--kaching-bundles-sticky-atc-button-font-size, 16px));padding:var(--kaching-bundles-sticky-atc-button-padding-mobile, var(--kaching-bundles-sticky-atc-button-padding, 15px));border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius-mobile, var(--kaching-bundles-sticky-atc-button-corner-radius, 8px))}}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-price{font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-full-price{font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--link{display:flex;justify-content:center;align-items:center;padding:8px 0}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__link{all:unset;cursor:pointer;display:inline;text-decoration:underline;text-underline-offset:3px;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__bar-variant__content.kaching-bundles__bar-variant__content--with-option-names{align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant-option{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__bar-variant-option__name{font-size:13px;line-height:1.3}.kaching-bundles .kaching-bundles__bar-variant-option__name-label{font-weight:600}.kaching-bundles .kaching-bundles__bar-variant-option__name-value{font-weight:400;opacity:.85}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000;border-radius:0}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles .kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles .kaching-bundles__highlights--horizontal{flex-flow:row wrap}.kaching-bundles .kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles .kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles .kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles img{width:initial}.kaching-bundles svg{width:initial;height:initial}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4;font-family:var(--block-font-family, inherit)}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-top:10px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block>.kaching-bundles__block-title:first-child{margin-top:0}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:1}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:56px;width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-family:sans-serif;font-size:12px;font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bars--hide-prices .kaching-bundles__bar-pricing{display:none}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-main{display:flex;flex-direction:column;min-width:0}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:var(--block-font-family, inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants,.kaching-bundles .kaching-bundles__bar-variants--visible{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}`)), document.head.appendChild(jt);
    }
  } catch (Kt) {
    console.error("vite-plugin-css-injected-by-js", Kt);
  }
})();
var im = Object.defineProperty, lm = Object.getPrototypeOf, sm = Reflect.get, Ad = (jt) => {
  throw TypeError(jt);
}, om = (jt, Kt, _n) => Kt in jt ? im(jt, Kt, { enumerable: !0, configurable: !0, writable: !0, value: _n }) : jt[Kt] = _n, vn = (jt, Kt, _n) => om(jt, typeof Kt != "symbol" ? Kt + "" : Kt, _n), ho = (jt, Kt, _n) => Kt.has(jt) || Ad("Cannot " + _n), ye = (jt, Kt, _n) => (ho(jt, Kt, "read from private field"), _n ? _n.call(jt) : Kt.get(jt)), Bt = (jt, Kt, _n) => Kt.has(jt) ? Ad("Cannot add the same private member more than once") : Kt instanceof WeakSet ? Kt.add(jt) : Kt.set(jt, _n), Pt = (jt, Kt, _n, Ql) => (ho(jt, Kt, "write to private field"), Kt.set(jt, _n), _n), an = (jt, Kt, _n) => (ho(jt, Kt, "access private method"), _n), cm = (jt, Kt, _n) => sm(lm(jt), _n, Kt);
(function(jt) {
  var Kt, _n, Ql, Hi, fi, $r, bi, Zi, Ga, vi, Oa, ha, _i, Ji, Yi, Yr, po, Ki, Nl, wr, nr, Xi, Ar, Fa, Vr, dr, Zn, qr, pa, fa, Kr, La, ba, Wl, Ul, rr, fo, bo, el, tl, Hl, Xr, gr, mi, nl, Zl, Jl, vo, ki, Pr, va, Yl, rl, _o, mo, Tr, Gr, ea, Kl, Or, yi, al, il, ll;
  String.prototype.replaceAll || (String.prototype.replaceAll = function(n, t) {
    if (typeof n == "string") {
      const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return this.replace(new RegExp(r, "g"), t);
    }
    if (n instanceof RegExp) {
      if (!n.global) throw new TypeError("replaceAll must be called with a global RegExp");
      return this.replace(n, t);
    }
    return this.replace(n, t);
  }), typeof window != "undefined" && ((Ql = (_n = (Kt = window.__svelte) != null ? Kt : window.__svelte = {}).v) != null ? Ql : _n.v = /* @__PURE__ */ new Set()).add("5");
  const sl = "[!", _a = {}, Cn = Symbol(), Vd = !1;
  var xi = Array.isArray, qd = Array.prototype.indexOf, Xl = Array.from, ol = Object.keys, ma = Object.defineProperty, ka = Object.getOwnPropertyDescriptor, ko = Object.getOwnPropertyDescriptors, yo = Object.prototype, Td = Array.prototype, cl = Object.getPrototypeOf, xo = Object.isExtensible;
  const Fr = () => {
  };
  function Gd(n) {
    return n();
  }
  function ul(n) {
    for (var t = 0; t < n.length; t++) n[t]();
  }
  const wi = 16, dl = 32, wo = 64, hr = 256, es = 512, Vn = 1024, Lr = 2048, ya = 4096, Sr = 8192, ja = 16384, ts = 32768, Ea = 65536, Od = 1 << 17, Po = 1 << 19, ns = 1 << 21, Fd = 1 << 22, xa = 1 << 23, jr = Symbol("$state"), So = Symbol("legacy props"), Ld = Symbol(""), rs = new class extends Error {
    constructor() {
      super(...arguments), vn(this, "name", "StaleReactionError"), vn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function Bo(n) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Pi(n) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let It, gt = !1;
  function Ln(n) {
    gt = n;
  }
  function In(n) {
    if (n === null) throw Pi(), _a;
    return It = n;
  }
  function pr() {
    return In(br(It));
  }
  function x(n) {
    if (gt) {
      if (br(It) !== null) throw Pi(), _a;
      It = n;
    }
  }
  function ta(n = 1) {
    if (gt) {
      for (var t = n, r = It; t--; ) r = br(r);
      It = r;
    }
  }
  function gl(n = !0) {
    for (var t = 0, r = It; ; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "]") {
          if (t === 0) return r;
          t -= 1;
        } else a !== "[" && a !== sl || (t += 1);
      }
      var l = br(r);
      n && r.remove(), r = l;
    }
  }
  function Co(n) {
    if (!n || n.nodeType !== 8) throw Pi(), _a;
    return n.data;
  }
  function Io(n) {
    return n === this.v;
  }
  function hl(n, t) {
    return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
  }
  function jd(n, t) {
    return n !== t;
  }
  function Mo(n) {
    return !hl(n, this.v);
  }
  let Ra = !1;
  const Ed = [];
  function na(n, t = !1, r = !1) {
    return pl(n, /* @__PURE__ */ new Map(), "", Ed, null, r);
  }
  function pl(n, t, r, a, l = null, o = !1) {
    if (typeof n == "object" && n !== null) {
      var u = t.get(n);
      if (u !== void 0) return u;
      if (n instanceof Map) return new Map(n);
      if (n instanceof Set) return new Set(n);
      if (xi(n)) {
        var c = Array(n.length);
        t.set(n, c), l !== null && t.set(l, c);
        for (var i = 0; i < n.length; i += 1) {
          var s = n[i];
          i in n && (c[i] = pl(s, t, r, a, null, o));
        }
        return c;
      }
      if (cl(n) === yo) {
        for (var g in c = {}, t.set(n, c), l !== null && t.set(l, c), n) c[g] = pl(n[g], t, r, a, null, o);
        return c;
      }
      if (n instanceof Date) return structuredClone(n);
      if (typeof n.toJSON == "function" && !o) return pl(n.toJSON(), t, r, a, n);
    }
    if (n instanceof EventTarget) return n;
    try {
      return structuredClone(n);
    } catch {
      return n;
    }
  }
  let ln = null;
  function Qa(n) {
    ln = n;
  }
  function Na(n) {
    return zo().get(n);
  }
  function Wa(n, t) {
    return zo().set(n, t), t;
  }
  function Ye(n, t = !1, r) {
    ln = { p: ln, c: null, e: null, s: n, x: null, l: Ra && !t ? { s: null, u: null, $: [] } : null };
  }
  function Ke(n) {
    var t = ln, r = t.e;
    if (r !== null) for (var a of (t.e = null, r)) Ko(a);
    return n !== void 0 && (t.x = n), ln = t.p, n != null ? n : {};
  }
  function Ua() {
    return !Ra || ln !== null && ln.l === null;
  }
  function zo(n) {
    var t;
    return ln === null && Bo(), (t = ln.c) != null ? t : ln.c = new Map((function(r) {
      let a = r.p;
      for (; a !== null; ) {
        const l = a.c;
        if (l !== null) return l;
        a = a.p;
      }
      return null;
    })(ln) || void 0);
  }
  const Rd = typeof requestIdleCallback == "undefined" ? (n) => setTimeout(n, 1) : requestIdleCallback;
  let ra = [], Ha = [];
  function Do() {
    var n = ra;
    ra = [], ul(n);
  }
  function $o() {
    var n = Ha;
    Ha = [], ul(n);
  }
  function Qd() {
    return ra.length > 0 || Ha.length > 0;
  }
  function wa(n) {
    if (ra.length === 0 && !Bi) {
      var t = ra;
      queueMicrotask(() => {
        t === ra && Do();
      });
    }
    ra.push(n);
  }
  function Nd() {
    ra.length > 0 && Do(), Ha.length > 0 && $o();
  }
  const Wd = /* @__PURE__ */ new WeakMap();
  function Ao(n) {
    var t = qt;
    if (t === null) return Ft.f |= xa, n;
    if ((t.f & ts) === 0) {
      if (!(128 & t.f)) throw !t.parent && n instanceof Error && Vo(n), n;
      t.b.error(n);
    } else Za(n, t);
  }
  function Za(n, t) {
    for (; t !== null; ) {
      if (128 & t.f) try {
        return void t.b.error(n);
      } catch (r) {
        n = r;
      }
      t = t.parent;
    }
    throw n instanceof Error && Vo(n), n;
  }
  function Vo(n) {
    const t = Wd.get(n);
    t && (ma(n, "message", { value: t.message }), ma(n, "stack", { value: t.stack }));
  }
  const as = /* @__PURE__ */ new Set();
  let pn = null, Si = null, is = /* @__PURE__ */ new Set(), Pa = [], fl = null, ls = !1, Bi = !1;
  Hi = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), Zi = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakSet(), po = function(n) {
    var t;
    n.f ^= Vn;
    for (var r = n.first; r !== null; ) {
      var a = r.f, l = !!(96 & a);
      if (!(l && (a & Vn) !== 0 || (a & Sr) !== 0 || this.skipped_effects.has(r)) && r.fn !== null) {
        l ? r.f ^= Vn : 4 & a ? ye(this, ha).push(r) : (a & Vn) === 0 && ((a & Fd) !== 0 ? ((t = r.b) != null && t.is_pending() ? ye(this, vi) : ye(this, Ga)).push(r) : ml(r) && ((r.f & wi) !== 0 && ye(this, _i).push(r), Xa(r)));
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; ) r = u.next, u = u.parent;
    }
  }, Ki = function(n) {
    for (const t of n)
      ((t.f & Lr) !== 0 ? ye(this, Ji) : ye(this, Yi)).push(t), Un(t, Vn);
    n.length = 0;
  }, Nl = function() {
    if (!ye(this, Zi)) for (const n of ye(this, fi)) n();
    ye(this, fi).clear();
  };
  let Sa = class go {
    constructor() {
      Bt(this, Yr), vn(this, "current", /* @__PURE__ */ new Map()), Bt(this, Hi, /* @__PURE__ */ new Map()), Bt(this, fi, /* @__PURE__ */ new Set()), Bt(this, $r, 0), Bt(this, bi, null), Bt(this, Zi, !1), Bt(this, Ga, []), Bt(this, vi, []), Bt(this, Oa, []), Bt(this, ha, []), Bt(this, _i, []), Bt(this, Ji, []), Bt(this, Yi, []), vn(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      var r;
      Pa = [], Si = null;
      for (const o of t) an(this, Yr, po).call(this, o);
      if (ye(this, Ga).length === 0 && ye(this, $r) === 0) {
        an(this, Yr, Nl).call(this);
        var a = ye(this, Oa), l = ye(this, ha);
        Pt(this, Oa, []), Pt(this, ha, []), Pt(this, _i, []), Si = pn, pn = null, To(a), To(l), pn === null ? pn = this : as.delete(this), (r = ye(this, bi)) == null || r.resolve();
      } else an(this, Yr, Ki).call(this, ye(this, Oa)), an(this, Yr, Ki).call(this, ye(this, ha)), an(this, Yr, Ki).call(this, ye(this, _i));
      for (const o of ye(this, Ga)) Xa(o);
      for (const o of ye(this, vi)) Xa(o);
      Pt(this, Ga, []), Pt(this, vi, []);
    }
    capture(t, r) {
      ye(this, Hi).has(t) || ye(this, Hi).set(t, r), this.current.set(t, t.v);
    }
    activate() {
      pn = this;
    }
    deactivate() {
      pn = null, Si = null;
      for (const t of is) if (is.delete(t), t(), pn !== null) break;
    }
    neuter() {
      Pt(this, Zi, !0);
    }
    flush() {
      Pa.length > 0 ? qo() : an(this, Yr, Nl).call(this), pn === this && (ye(this, $r) === 0 && as.delete(this), this.deactivate());
    }
    increment() {
      Pt(this, $r, ye(this, $r) + 1);
    }
    decrement() {
      if (Pt(this, $r, ye(this, $r) - 1), ye(this, $r) === 0) {
        for (const t of ye(this, Ji)) Un(t, Lr), Ja(t);
        for (const t of ye(this, Yi)) Un(t, ya), Ja(t);
        Pt(this, Oa, []), Pt(this, ha, []), this.flush();
      } else this.deactivate();
    }
    add_callback(t) {
      ye(this, fi).add(t);
    }
    settled() {
      var t, r, a;
      return ((t = ye(this, bi)) != null ? t : Pt(this, bi, { promise: new Promise((l, o) => {
        r = l, a = o;
      }), resolve: r, reject: a })).promise;
    }
    static ensure() {
      if (pn === null) {
        const t = pn = new go();
        as.add(pn), Bi || go.enqueue(() => {
          pn === t && t.flush();
        });
      }
      return pn;
    }
    static enqueue(t) {
      wa(t);
    }
  };
  function _(n) {
    var t = Bi;
    Bi = !0;
    try {
      for (; ; ) {
        if (Nd(), Pa.length === 0 && !Qd() && (pn == null || pn.flush(), Pa.length === 0)) return void (fl = null);
        qo();
      }
    } finally {
      Bi = t;
    }
  }
  function qo() {
    var n = Ka;
    ls = !0;
    try {
      var t = 0;
      for (ic(!0); Pa.length > 0; ) {
        var r = Sa.ensure();
        t++ > 1e3 && Ud(), r.process(Pa), ia.clear();
      }
    } finally {
      ls = !1, ic(n), fl = null;
    }
  }
  function Ud() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (n) {
      Za(n, fl);
    }
  }
  let aa = null;
  function To(n) {
    var t = n.length;
    if (t !== 0) {
      for (var r = 0; r < t; ) {
        var a = n[r++];
        if (!(24576 & a.f) && ml(a) && (aa = [], Xa(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? nc(a) : a.fn = null), (aa == null ? void 0 : aa.length) > 0)) {
          ia.clear();
          for (const l of aa) Xa(l);
          aa = [];
        }
      }
      aa = null;
    }
  }
  function Ja(n) {
    for (var t = fl = n; t.parent !== null; ) {
      var r = (t = t.parent).f;
      if (ls && t === qt && (r & wi) !== 0) return;
      if (96 & r) {
        if ((r & Vn) === 0) return;
        t.f ^= Vn;
      }
    }
    Pa.push(t);
  }
  function Go(n) {
    let t, r = 0, a = Er(0);
    return () => {
      Ft === null || _r || (e(a), Ii(() => (r === 0 && (t = en(() => n(() => Jn(a)))), r += 1, () => {
        wa(() => {
          r -= 1, r === 0 && (t == null || t(), t = void 0, Jn(a));
        });
      })));
    };
  }
  class Hd {
    constructor(t, r, a) {
      Bt(this, rr), vn(this, "parent"), Bt(this, wr, !1), Bt(this, nr), Bt(this, Xi, gt ? It : null), Bt(this, Ar), Bt(this, Fa), Bt(this, Vr), Bt(this, dr, null), Bt(this, Zn, null), Bt(this, qr, null), Bt(this, pa, null), Bt(this, fa, 0), Bt(this, Kr, 0), Bt(this, La, !1), Bt(this, ba, null), Bt(this, Wl, () => {
        ye(this, ba) && Ya(ye(this, ba), ye(this, fa));
      }), Bt(this, Ul, Go(() => (Pt(this, ba, Er(ye(this, fa))), () => {
        Pt(this, ba, null);
      }))), Pt(this, nr, t), Pt(this, Ar, r), Pt(this, Fa, a), this.parent = qt.b, Pt(this, wr, !!ye(this, Ar).pending), Pt(this, Vr, Rr(() => {
        if (qt.b = this, gt) {
          const l = ye(this, Xi);
          pr(), l.nodeType === 8 && l.data === sl ? an(this, rr, bo).call(this) : an(this, rr, fo).call(this);
        } else {
          try {
            Pt(this, dr, Mn(() => a(ye(this, nr))));
          } catch (l) {
            this.error(l);
          }
          ye(this, Kr) > 0 ? an(this, rr, tl).call(this) : Pt(this, wr, !1);
        }
      }, 589952)), gt && Pt(this, nr, It);
    }
    is_pending() {
      return ye(this, wr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!ye(this, Ar).pending;
    }
    update_pending_count(t) {
      an(this, rr, Hl).call(this, t), Pt(this, fa, ye(this, fa) + t), is.add(ye(this, Wl));
    }
    get_effect_pending() {
      return ye(this, Ul).call(this), e(ye(this, ba));
    }
    error(t) {
      var r = ye(this, Ar).onerror;
      let a = ye(this, Ar).failed;
      if (ye(this, La) || !r && !a) throw t;
      ye(this, dr) && (zn(ye(this, dr)), Pt(this, dr, null)), ye(this, Zn) && (zn(ye(this, Zn)), Pt(this, Zn, null)), ye(this, qr) && (zn(ye(this, qr)), Pt(this, qr, null)), gt && (In(ye(this, Xi)), ta(), In(gl()));
      var l = !1, o = !1;
      const u = () => {
        l ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (l = !0, o && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), Sa.ensure(), Pt(this, fa, 0), ye(this, qr) !== null && Qr(ye(this, qr), () => {
          Pt(this, qr, null);
        }), Pt(this, wr, this.has_pending_snippet()), Pt(this, dr, an(this, rr, el).call(this, () => (Pt(this, La, !1), Mn(() => ye(this, Fa).call(this, ye(this, nr)))))), ye(this, Kr) > 0 ? an(this, rr, tl).call(this) : Pt(this, wr, !1));
      };
      var c = Ft;
      try {
        qn(null), o = !0, r == null || r(t, u), o = !1;
      } catch (i) {
        Za(i, ye(this, Vr) && ye(this, Vr).parent);
      } finally {
        qn(c);
      }
      a && wa(() => {
        Pt(this, qr, an(this, rr, el).call(this, () => {
          Pt(this, La, !0);
          try {
            return Mn(() => {
              a(ye(this, nr), () => t, () => u);
            });
          } catch (i) {
            return Za(i, ye(this, Vr).parent), null;
          } finally {
            Pt(this, La, !1);
          }
        }));
      });
    }
  }
  function Oo(n, t, r) {
    const a = Ua() ? Ci : ss;
    if (t.length !== 0) {
      var l = pn, o = qt, u = (function() {
        var i = qt, s = Ft, g = ln, h = pn, p = gt;
        if (p) var v = It;
        return function() {
          Br(i), qn(s), Qa(g), h == null || h.activate(), p && (Ln(!0), In(v));
        };
      })(), c = gt;
      Promise.all(t.map((i) => Zd(i))).then((i) => {
        l == null || l.activate(), u();
        try {
          r([...n.map(a), ...i]);
        } catch (s) {
          (o.f & ja) === 0 && Za(s, o);
        }
        c && Ln(!1), l == null || l.deactivate(), Fo();
      }).catch((i) => {
        Za(i, o);
      });
    } else r(n.map(a));
  }
  function Fo() {
    Br(null), qn(null), Qa(null);
  }
  function Ci(n) {
    var t = 2050, r = Ft !== null && 2 & Ft.f ? Ft : null;
    return qt === null || r !== null && (r.f & hr) !== 0 ? t |= hr : qt.f |= Po, { ctx: ln, deps: null, effects: null, equals: Io, f: t, fn: n, reactions: null, rv: 0, v: Cn, wv: 0, parent: r != null ? r : qt, ac: null };
  }
  function Zd(n, t) {
    let r = qt;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var a = r.b, l = void 0, o = Er(Cn), u = null, c = !Ft;
    return (function(i) {
      vr(4718592, i, !0);
    })(() => {
      var i;
      try {
        var s = n();
        u && Promise.resolve(s).catch(() => {
        });
      } catch (b) {
        s = Promise.reject(b);
      }
      var g = () => s;
      l = (i = u == null ? void 0 : u.then(g, g)) != null ? i : Promise.resolve(s), u = l;
      var h = pn, p = a.is_pending();
      c && (a.update_pending_count(1), p || h.increment());
      const v = (b, y = void 0) => {
        u = null, p || h.activate(), y ? y !== rs && (o.f |= xa, Ya(o, y)) : ((o.f & xa) !== 0 && (o.f ^= xa), Ya(o, b)), c && (a.update_pending_count(-1), p || h.decrement()), Fo();
      };
      if (l.then(v, (b) => v(null, b || "unknown")), h) return () => {
        queueMicrotask(() => h.neuter());
      };
    }), new Promise((i) => {
      (function s(g) {
        function h() {
          g === l ? i(o) : s(l);
        }
        g.then(h, h);
      })(l);
    });
  }
  function d(n) {
    const t = Ci(n);
    return sc(t), t;
  }
  function ss(n) {
    const t = Ci(n);
    return t.equals = Mo, t;
  }
  function Lo(n) {
    var t = n.effects;
    if (t !== null) {
      n.effects = null;
      for (var r = 0; r < t.length; r += 1) zn(t[r]);
    }
  }
  function os(n) {
    var t, r = qt;
    Br((function(a) {
      for (var l = a.parent; l !== null; ) {
        if (!(2 & l.f)) return l;
        l = l.parent;
      }
      return null;
    })(n));
    try {
      Lo(n), t = gc(n);
    } finally {
      Br(r);
    }
    return t;
  }
  function jo(n) {
    var t = os(n);
    n.equals(t) || (n.v = t, n.wv = uc()), Ba || Un(n, !la && (n.f & hr) === 0 || n.deps === null ? Vn : ya);
  }
  wr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), fa = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakSet(), fo = function() {
    try {
      Pt(this, dr, Mn(() => ye(this, Fa).call(this, ye(this, nr))));
    } catch (n) {
      this.error(n);
    }
    Pt(this, wr, !1);
  }, bo = function() {
    const n = ye(this, Ar).pending;
    n && (Pt(this, Zn, Mn(() => n(ye(this, nr)))), Sa.enqueue(() => {
      Pt(this, dr, an(this, rr, el).call(this, () => (Sa.ensure(), Mn(() => ye(this, Fa).call(this, ye(this, nr)))))), ye(this, Kr) > 0 ? an(this, rr, tl).call(this) : (Qr(ye(this, Zn), () => {
        Pt(this, Zn, null);
      }), Pt(this, wr, !1));
    }));
  }, el = function(n) {
    var t = qt, r = Ft, a = ln;
    Br(ye(this, Vr)), qn(ye(this, Vr)), Qa(ye(this, Vr).ctx);
    try {
      return n();
    } catch (l) {
      return Ao(l), null;
    } finally {
      Br(t), qn(r), Qa(a);
    }
  }, tl = function() {
    const n = ye(this, Ar).pending;
    ye(this, dr) !== null && (Pt(this, pa, document.createDocumentFragment()), (function(t, r) {
      for (var a = t.nodes_start, l = t.nodes_end; a !== null; ) {
        var o = a === l ? null : br(a);
        r.append(a), a = o;
      }
    })(ye(this, dr), ye(this, pa))), ye(this, Zn) === null && Pt(this, Zn, Mn(() => n(ye(this, nr))));
  }, Hl = function(n) {
    var t;
    this.has_pending_snippet() ? (Pt(this, Kr, ye(this, Kr) + n), ye(this, Kr) === 0 && (Pt(this, wr, !1), ye(this, Zn) && Qr(ye(this, Zn), () => {
      Pt(this, Zn, null);
    }), ye(this, pa) && (ye(this, nr).before(ye(this, pa)), Pt(this, pa, null)))) : this.parent && an(t = this.parent, rr, Hl).call(t, n);
  };
  const ia = /* @__PURE__ */ new Map();
  function Er(n, t) {
    return { f: 0, v: n, reactions: null, equals: Io, rv: 0, wv: 0 };
  }
  function Te(n, t) {
    const r = Er(n);
    return sc(r), r;
  }
  function cs(n, t = !1, r = !0) {
    var a, l;
    const o = Er(n);
    return t || (o.equals = Mo), Ra && r && ln !== null && ln.l !== null && ((l = (a = ln.l).s) != null ? l : a.s = []).push(o), o;
  }
  function re(n, t, r = !1) {
    return Ft !== null && (!_r || (Ft.f & Od) !== 0) && Ua() && 4325394 & Ft.f && !(ir != null && ir.includes(n)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), Ya(n, r ? lt(t) : t);
  }
  function Ya(n, t) {
    if (!n.equals(t)) {
      var r = n.v;
      Ba ? ia.set(n, t) : ia.set(n, r), n.v = t, Sa.ensure().capture(n, r), 2 & n.f && ((n.f & Lr) !== 0 && os(n), Un(n, (n.f & hr) === 0 ? Vn : ya)), n.wv = uc(), Eo(n, Lr), !Ua() || qt === null || (qt.f & Vn) === 0 || 96 & qt.f || (lr === null ? (function(a) {
        lr = a;
      })([n]) : lr.push(n));
    }
    return t;
  }
  function Jn(n) {
    re(n, n.v + 1);
  }
  function Eo(n, t) {
    var r = n.reactions;
    if (r !== null) for (var a = Ua(), l = r.length, o = 0; o < l; o++) {
      var u = r[o], c = u.f;
      if (a || u !== qt) {
        var i = (c & Lr) === 0;
        i && Un(u, t), 2 & c ? Eo(u, ya) : i && ((c & wi) !== 0 && aa !== null && aa.push(u), Ja(u));
      }
    }
  }
  function lt(n) {
    if (typeof n != "object" || n === null || jr in n) return n;
    const t = cl(n);
    if (t !== yo && t !== Td) return n;
    var r = /* @__PURE__ */ new Map(), a = xi(n), l = Te(0), o = mr, u = (c) => {
      if (mr === o) return c();
      var i = Ft, s = mr;
      qn(null), cc(o);
      var g = c();
      return qn(i), cc(s), g;
    };
    return a && r.set("length", Te(n.length)), new Proxy(n, { defineProperty(c, i, s) {
      "value" in s && s.configurable !== !1 && s.enumerable !== !1 && s.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var g = r.get(i);
      return g === void 0 ? g = u(() => {
        var h = Te(s.value);
        return r.set(i, h), h;
      }) : re(g, s.value, !0), !0;
    }, deleteProperty(c, i) {
      var s = r.get(i);
      if (s === void 0) {
        if (i in c) {
          const g = u(() => Te(Cn));
          r.set(i, g), Jn(l);
        }
      } else re(s, Cn), Jn(l);
      return !0;
    }, get(c, i, s) {
      var g;
      if (i === jr) return n;
      var h = r.get(i), p = i in c;
      if (h !== void 0 || p && !((g = ka(c, i)) != null && g.writable) || (h = u(() => Te(lt(p ? c[i] : Cn))), r.set(i, h)), h !== void 0) {
        var v = e(h);
        return v === Cn ? void 0 : v;
      }
      return Reflect.get(c, i, s);
    }, getOwnPropertyDescriptor(c, i) {
      var s = Reflect.getOwnPropertyDescriptor(c, i);
      if (s && "value" in s) {
        var g = r.get(i);
        g && (s.value = e(g));
      } else if (s === void 0) {
        var h = r.get(i), p = h == null ? void 0 : h.v;
        if (h !== void 0 && p !== Cn) return { enumerable: !0, configurable: !0, value: p, writable: !0 };
      }
      return s;
    }, has(c, i) {
      var s;
      if (i === jr) return !0;
      var g = r.get(i), h = g !== void 0 && g.v !== Cn || Reflect.has(c, i);
      return (g !== void 0 || qt !== null && (!h || (s = ka(c, i)) != null && s.writable)) && (g === void 0 && (g = u(() => Te(h ? lt(c[i]) : Cn)), r.set(i, g)), e(g) === Cn) ? !1 : h;
    }, set(c, i, s, g) {
      var h, p = r.get(i), v = i in c;
      if (a && i === "length") for (var b = s; b < p.v; b += 1) {
        var y = r.get(b + "");
        y !== void 0 ? re(y, Cn) : b in c && (y = u(() => Te(Cn)), r.set(b + "", y));
      }
      p === void 0 ? v && !((h = ka(c, i)) != null && h.writable) || (re(p = u(() => Te(void 0)), lt(s)), r.set(i, p)) : (v = p.v !== Cn, re(p, u(() => lt(s))));
      var m = Reflect.getOwnPropertyDescriptor(c, i);
      if (m != null && m.set && m.set.call(g, s), !v) {
        if (a && typeof i == "string") {
          var C = r.get("length"), P = Number(i);
          Number.isInteger(P) && P >= C.v && re(C, P + 1);
        }
        Jn(l);
      }
      return !0;
    }, ownKeys(c) {
      e(l);
      var i = Reflect.ownKeys(c).filter((h) => {
        var p = r.get(h);
        return p === void 0 || p.v !== Cn;
      });
      for (var [s, g] of r) g.v === Cn || s in c || i.push(s);
      return i;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function Ro(n) {
    try {
      if (n !== null && typeof n == "object" && jr in n) return n[jr];
    } catch {
    }
    return n;
  }
  function Jd(n, t) {
    return Object.is(Ro(n), Ro(t));
  }
  var Qo, No, Wo, Uo;
  function us() {
    if (Qo === void 0) {
      Qo = window, No = /Firefox/.test(navigator.userAgent);
      var n = Element.prototype, t = Node.prototype, r = Text.prototype;
      Wo = ka(t, "firstChild").get, Uo = ka(t, "nextSibling").get, xo(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), xo(r) && (r.__t = void 0);
    }
  }
  function fr(n = "") {
    return document.createTextNode(n);
  }
  function Wn(n) {
    return Wo.call(n);
  }
  function br(n) {
    return Uo.call(n);
  }
  function w(n, t) {
    if (!gt) return Wn(n);
    var r = Wn(It);
    if (r === null) r = It.appendChild(fr());
    else if (t && r.nodeType !== 3) {
      var a = fr();
      return r == null || r.before(a), In(a), a;
    }
    return In(r), r;
  }
  function _e(n, t = !1) {
    if (!gt) {
      var r = Wn(n);
      return r instanceof Comment && r.data === "" ? br(r) : r;
    }
    if (t && (It == null ? void 0 : It.nodeType) !== 3) {
      var a = fr();
      return It == null || It.before(a), In(a), a;
    }
    return It;
  }
  function F(n, t = 1, r = !1) {
    let a = gt ? It : n;
    for (var l; t--; ) l = a, a = br(a);
    if (!gt) return a;
    if (r && (a == null ? void 0 : a.nodeType) !== 3) {
      var o = fr();
      return a === null ? l == null || l.after(o) : a.before(o), In(o), o;
    }
    return In(a), a;
  }
  function Ho(n) {
    n.textContent = "";
  }
  function Yd(n, t) {
    if (t) {
      const r = document.body;
      n.autofocus = !0, wa(() => {
        document.activeElement === r && n.focus();
      });
    }
  }
  let Zo = !1;
  function Jo() {
    Zo || (Zo = !0, document.addEventListener("reset", (n) => {
      Promise.resolve().then(() => {
        var t;
        if (!n.defaultPrevented) for (const r of n.target.elements) (t = r.__on_r) == null || t.call(r);
      });
    }, { capture: !0 }));
  }
  function bl(n) {
    var t = Ft, r = qt;
    qn(null), Br(null);
    try {
      return n();
    } finally {
      qn(t), Br(r);
    }
  }
  function Yo(n) {
    qt === null && Ft === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), Ft !== null && (Ft.f & hr) !== 0 && qt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), Ba && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function vr(n, t, r, a = !0) {
    var l, o = qt;
    o !== null && (o.f & Sr) !== 0 && (n |= Sr);
    var u = { ctx: ln, deps: null, nodes_start: null, nodes_end: null, f: n | Lr, first: null, fn: t, last: null, next: null, parent: o, b: o && o.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      Xa(u), u.f |= ts;
    } catch (s) {
      throw zn(u), s;
    }
    else t !== null && Ja(u);
    if (a) {
      var c = u;
      if (r && c.deps === null && c.teardown === null && c.nodes_start === null && c.first === c.last && (c.f & Po) === 0 && (c = c.first), c !== null && (c.parent = o, o !== null && (function(s, g) {
        var h = g.last;
        h === null ? g.last = g.first = s : (h.next = s, s.prev = h, g.last = s);
      })(c, o), Ft !== null && 2 & Ft.f && (n & wo) === 0)) {
        var i = Ft;
        ((l = i.effects) != null ? l : i.effects = []).push(c);
      }
    }
    return u;
  }
  function ds(n) {
    const t = vr(8, null, !1);
    return Un(t, Vn), t.teardown = n, t;
  }
  function Je(n) {
    var t;
    Yo();
    var r = qt.f;
    if (!(!Ft && (r & dl) !== 0 && (r & ts) === 0)) return Ko(n);
    var a = ln;
    ((t = a.e) != null ? t : a.e = []).push(n);
  }
  function Ko(n) {
    return vr(1048580, n, !1);
  }
  function ar(n) {
    return Yo(), vr(1048584, n, !0);
  }
  function vl(n) {
    return vr(4, n, !1);
  }
  function Ii(n, t = 0) {
    return vr(8 | t, n, !0);
  }
  function pe(n, t = [], r = []) {
    Oo(t, r, (a) => {
      vr(8, () => n(...a.map(e)), !0);
    });
  }
  function Rr(n, t = 0) {
    return vr(wi | t, n, !0);
  }
  function Mn(n, t = !0) {
    return vr(524320, n, !0, t);
  }
  function Xo(n) {
    var t = n.teardown;
    if (t !== null) {
      const r = Ba, a = Ft;
      lc(!0), qn(null);
      try {
        t.call(null);
      } finally {
        lc(r), qn(a);
      }
    }
  }
  function ec(n, t = !1) {
    var r = n.first;
    for (n.first = n.last = null; r !== null; ) {
      const l = r.ac;
      l !== null && bl(() => {
        l.abort(rs);
      });
      var a = r.next;
      (r.f & wo) !== 0 ? r.parent = null : zn(r, t), r = a;
    }
  }
  function zn(n, t = !0) {
    var r = !1;
    (t || 262144 & n.f) && n.nodes_start !== null && n.nodes_end !== null && (tc(n.nodes_start, n.nodes_end), r = !0), ec(n, t && !r), kl(n, 0), Un(n, ja);
    var a = n.transitions;
    if (a !== null) for (const o of a) o.stop();
    Xo(n);
    var l = n.parent;
    l !== null && l.first !== null && nc(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
  }
  function tc(n, t) {
    for (; n !== null; ) {
      var r = n === t ? null : br(n);
      n.remove(), n = r;
    }
  }
  function nc(n) {
    var t = n.parent, r = n.prev, a = n.next;
    r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === n && (t.first = a), t.last === n && (t.last = r));
  }
  function Qr(n, t) {
    var r = [];
    gs(n, r, !0), rc(r, () => {
      zn(n), t && t();
    });
  }
  function rc(n, t) {
    var r = n.length;
    if (r > 0) {
      var a = () => --r || t();
      for (var l of n) l.out(a);
    } else t();
  }
  function gs(n, t, r) {
    if ((n.f & Sr) === 0) {
      if (n.f ^= Sr, n.transitions !== null) for (const o of n.transitions) (o.is_global || r) && t.push(o);
      for (var a = n.first; a !== null; ) {
        var l = a.next;
        gs(a, t, ((a.f & Ea) !== 0 || (a.f & dl) !== 0) && r), a = l;
      }
    }
  }
  function _l(n) {
    ac(n, !0);
  }
  function ac(n, t) {
    if ((n.f & Sr) !== 0) {
      n.f ^= Sr, (n.f & Vn) === 0 && (Un(n, Lr), Ja(n));
      for (var r = n.first; r !== null; ) {
        var a = r.next;
        ac(r, ((r.f & Ea) !== 0 || (r.f & dl) !== 0) && t), r = a;
      }
      if (n.transitions !== null) for (const l of n.transitions) (l.is_global || t) && l.in();
    }
  }
  let Ka = !1;
  function ic(n) {
    Ka = n;
  }
  let Ba = !1;
  function lc(n) {
    Ba = n;
  }
  let Ft = null, _r = !1;
  function qn(n) {
    Ft = n;
  }
  let qt = null;
  function Br(n) {
    qt = n;
  }
  let ir = null;
  function sc(n) {
    Ft !== null && (ir === null ? ir = [n] : ir.push(n));
  }
  let jn = null, Yn = 0, lr = null, oc = 1, Mi = 0, mr = Mi;
  function cc(n) {
    mr = n;
  }
  let la = !1;
  function uc() {
    return ++oc;
  }
  function ml(n) {
    var t, r, a = n.f;
    if ((a & Lr) !== 0) return !0;
    if ((a & ya) !== 0) {
      var l = n.deps, o = (a & hr) !== 0;
      if (l !== null) {
        var u, c, i = (a & es) !== 0, s = o && qt !== null && !la, g = l.length;
        if ((i || s) && (qt === null || (qt.f & ja) === 0)) {
          var h = n, p = h.parent;
          for (u = 0; u < g; u++) c = l[u], !i && ((t = c == null ? void 0 : c.reactions) != null && t.includes(h)) || ((r = c.reactions) != null ? r : c.reactions = []).push(h);
          i && (h.f ^= es), s && p !== null && (p.f & hr) === 0 && (h.f ^= hr);
        }
        for (u = 0; u < g; u++) if (ml(c = l[u]) && jo(c), c.wv > n.wv) return !0;
      }
      o && (qt === null || la) || Un(n, Vn);
    }
    return !1;
  }
  function dc(n, t, r = !0) {
    var a = n.reactions;
    if (a !== null && !(ir != null && ir.includes(n))) for (var l = 0; l < a.length; l++) {
      var o = a[l];
      2 & o.f ? dc(o, t, !1) : t === o && (r ? Un(o, Lr) : (o.f & Vn) !== 0 && Un(o, ya), Ja(o));
    }
  }
  function gc(n) {
    var t, r, a = jn, l = Yn, o = lr, u = Ft, c = la, i = ir, s = ln, g = _r, h = mr, p = n.f;
    jn = null, Yn = 0, lr = null, la = (p & hr) !== 0 && (_r || !Ka || Ft === null), Ft = 96 & p ? null : n, ir = null, Qa(n.ctx), _r = !1, mr = ++Mi, n.ac !== null && (bl(() => {
      n.ac.abort(rs);
    }), n.ac = null);
    try {
      n.f |= ns;
      var v = (0, n.fn)(), b = n.deps;
      if (jn !== null) {
        var y;
        if (kl(n, Yn), b !== null && Yn > 0) for (b.length = Yn + jn.length, y = 0; y < jn.length; y++) b[Yn + y] = jn[y];
        else n.deps = b = jn;
        if (!la || 2 & p && n.reactions !== null) for (y = Yn; y < b.length; y++) ((r = (t = b[y]).reactions) != null ? r : t.reactions = []).push(n);
      } else b !== null && Yn < b.length && (kl(n, Yn), b.length = Yn);
      if (Ua() && lr !== null && !_r && b !== null && !(6146 & n.f)) for (y = 0; y < lr.length; y++) dc(lr[y], n);
      return u !== null && u !== n && (Mi++, lr !== null && (o === null ? o = lr : o.push(...lr))), (n.f & xa) !== 0 && (n.f ^= xa), v;
    } catch (m) {
      return Ao(m);
    } finally {
      n.f ^= ns, jn = a, Yn = l, lr = o, Ft = u, la = c, ir = i, Qa(s), _r = g, mr = h;
    }
  }
  function Kd(n, t) {
    let r = t.reactions;
    if (r !== null) {
      var a = qd.call(r, n);
      if (a !== -1) {
        var l = r.length - 1;
        l === 0 ? r = t.reactions = null : (r[a] = r[l], r.pop());
      }
    }
    r === null && 2 & t.f && (jn === null || !jn.includes(t)) && (Un(t, ya), 768 & t.f || (t.f ^= es), Lo(t), kl(t, 0));
  }
  function kl(n, t) {
    var r = n.deps;
    if (r !== null) for (var a = t; a < r.length; a++) Kd(n, r[a]);
  }
  function Xa(n) {
    var t = n.f;
    if ((t & ja) === 0) {
      Un(n, Vn);
      var r = qt, a = Ka;
      qt = n, Ka = !0;
      try {
        (t & wi) !== 0 ? (function(o) {
          for (var u = o.first; u !== null; ) {
            var c = u.next;
            (u.f & dl) === 0 && zn(u), u = c;
          }
        })(n) : ec(n), Xo(n);
        var l = gc(n);
        n.teardown = typeof l == "function" ? l : null, n.wv = oc;
      } finally {
        Ka = a, qt = r;
      }
    }
  }
  async function hs() {
    await Promise.resolve(), _();
  }
  function e(n) {
    var t, r = !!(2 & n.f);
    if (Ft === null || _r) {
      if (r && n.deps === null && n.effects === null) {
        var a = n, l = a.parent;
        l !== null && (l.f & hr) === 0 && (a.f ^= hr);
      }
    } else if (!(qt !== null && (qt.f & ja) !== 0) && !(ir != null && ir.includes(n))) {
      var o = Ft.deps;
      if ((Ft.f & ns) !== 0) n.rv < Mi && (n.rv = Mi, jn === null && o !== null && o[Yn] === n ? Yn++ : jn === null ? jn = [n] : la && jn.includes(n) || jn.push(n));
      else {
        ((t = Ft.deps) != null ? t : Ft.deps = []).push(n);
        var u = n.reactions;
        u === null ? n.reactions = [Ft] : u.includes(Ft) || u.push(Ft);
      }
    }
    if (Ba) {
      if (ia.has(n)) return ia.get(n);
      if (r) {
        var c = (a = n).v;
        return ((a.f & Vn) === 0 && a.reactions !== null || hc(a)) && (c = os(a)), ia.set(a, c), c;
      }
    } else r && ml(a = n) && jo(a);
    if ((n.f & xa) !== 0) throw n.v;
    return n.v;
  }
  function hc(n) {
    if (n.v === Cn) return !0;
    if (n.deps === null) return !1;
    for (const t of n.deps)
      if (ia.has(t) || 2 & t.f && hc(t)) return !0;
    return !1;
  }
  function en(n) {
    var t = _r;
    try {
      return _r = !0, n();
    } finally {
      _r = t;
    }
  }
  const Xd = -7169;
  function Un(n, t) {
    n.f = n.f & Xd | t;
  }
  function pc(n) {
    if (typeof n == "object" && n && !(n instanceof EventTarget)) {
      if (jr in n) ps(n);
      else if (!Array.isArray(n)) for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && jr in r && ps(r);
      }
    }
  }
  function ps(n, t = /* @__PURE__ */ new Set()) {
    if (!(typeof n != "object" || n === null || n instanceof EventTarget || t.has(n))) {
      t.add(n), n instanceof Date && n.getTime();
      for (let a in n) try {
        ps(n[a], t);
      } catch {
      }
      const r = cl(n);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const a = ko(r);
        for (let l in a) {
          const o = a[l].get;
          if (o) try {
            o.call(n);
          } catch {
          }
        }
      }
    }
  }
  const fc = /* @__PURE__ */ new Set(), fs = /* @__PURE__ */ new Set();
  function bs(n, t, r, a = {}) {
    function l(o) {
      if (a.capture || zi.call(t, o), !o.cancelBubble) return bl(() => r == null ? void 0 : r.call(this, o));
    }
    return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? wa(() => {
      t.addEventListener(n, l, a);
    }) : t.addEventListener(n, l, a), l;
  }
  function bc(n, t, r, a, l) {
    var o = { capture: a, passive: l }, u = bs(n, t, r, o);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && ds(() => {
      t.removeEventListener(n, u, o);
    });
  }
  function Dn(n) {
    for (var t = 0; t < n.length; t++) fc.add(n[t]);
    for (var r of fs) r(n);
  }
  let vc = null;
  function zi(n) {
    var t, r = this, a = r.ownerDocument, l = n.type, o = ((t = n.composedPath) == null ? void 0 : t.call(n)) || [], u = o[0] || n.target;
    vc = n;
    var c = 0, i = vc === n && n.__root;
    if (i) {
      var s = o.indexOf(i);
      if (s !== -1 && (r === document || r === window)) return void (n.__root = r);
      var g = o.indexOf(r);
      if (g === -1) return;
      s <= g && (c = s);
    }
    if ((u = o[c] || n.target) !== r) {
      ma(n, "currentTarget", { configurable: !0, get: () => u || a });
      var h = Ft, p = qt;
      qn(null), Br(null);
      try {
        for (var v, b = []; u !== null; ) {
          var y = u.assignedSlot || u.parentNode || u.host || null;
          try {
            var m = u["__" + l];
            if (m != null && (!u.disabled || n.target === u)) if (xi(m)) {
              var [C, ...P] = m;
              C.apply(u, [n, ...P]);
            } else m.call(u, n);
          } catch (B) {
            v ? b.push(B) : v = B;
          }
          if (n.cancelBubble || y === r || y === null) break;
          u = y;
        }
        if (v) {
          for (let B of b) queueMicrotask(() => {
            throw B;
          });
          throw v;
        }
      } finally {
        n.__root = r, delete n.currentTarget, qn(h), Br(p);
      }
    }
  }
  function vs(n) {
    var t = document.createElement("template");
    return t.innerHTML = n.replaceAll("<!>", "<!---->"), t.content;
  }
  function Kn(n, t) {
    var r = qt;
    r.nodes_start === null && (r.nodes_start = n, r.nodes_end = t);
  }
  function V(n, t) {
    var r, a = !!(1 & t), l = !!(2 & t), o = !n.startsWith("<!>");
    return () => {
      if (gt) return Kn(It, null), It;
      r === void 0 && (r = vs(o ? n : "<!>" + n), a || (r = Wn(r)));
      var u = l || No ? document.importNode(r, !0) : r.cloneNode(!0);
      return a ? Kn(Wn(u), u.lastChild) : Kn(u, u), u;
    };
  }
  function eg(n, t, r = "svg") {
    var a, l = `<${r}>${n.startsWith("<!>") ? "<!>" + n : n}</${r}>`;
    return () => {
      if (gt) return Kn(It, null), It;
      if (!a) {
        var o = vs(l);
        a = Wn(Wn(o));
      }
      var u = a.cloneNode(!0);
      return Kn(u, u), u;
    };
  }
  function En(n, t) {
    return eg(n, 0, "svg");
  }
  function Tn(n = "") {
    if (!gt) {
      var t = fr(n + "");
      return Kn(t, t), t;
    }
    var r = It;
    return r.nodeType !== 3 && (r.before(r = fr()), In(r)), Kn(r, r), r;
  }
  function De() {
    if (gt) return Kn(It, null), It;
    var n = document.createDocumentFragment(), t = document.createComment(""), r = fr();
    return n.append(t, r), Kn(t, r), n;
  }
  function f(n, t) {
    if (gt) return qt.nodes_end = It, void pr();
    n !== null && n.before(t);
  }
  function tg(n) {
    return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
  }
  const ng = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function rg(n) {
    return ng.includes(n);
  }
  const ag = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function ig(n) {
    var t;
    return n = n.toLowerCase(), (t = ag[n]) != null ? t : n;
  }
  const lg = ["touchstart", "touchmove"];
  function sg(n) {
    return lg.includes(n);
  }
  const og = ["textarea", "script", "style", "title"];
  function mt(n, t) {
    var r, a = t == null ? "" : typeof t == "object" ? t + "" : t;
    a !== ((r = n.__t) != null ? r : n.__t = n.nodeValue) && (n.__t = a, n.nodeValue = a + "");
  }
  function _c(n, t) {
    return mc(n, t);
  }
  function cg(n, t) {
    var r;
    us(), t.intro = (r = t.intro) != null && r;
    const a = t.target, l = gt, o = It;
    try {
      for (var u = Wn(a); u && (u.nodeType !== 8 || u.data !== "["); ) u = br(u);
      if (!u) throw _a;
      Ln(!0), In(u);
      const c = mc(n, { ...t, anchor: u });
      return Ln(!1), c;
    } catch (c) {
      if (c instanceof Error && c.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/"))) throw c;
      return c !== _a && console.warn("Failed to hydrate: ", c), t.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), us(), Ho(a), Ln(!1), _c(n, t);
    } finally {
      Ln(l), In(o);
    }
  }
  const ei = /* @__PURE__ */ new Map();
  function mc(n, { target: t, anchor: r, props: a = {}, events: l, context: o, intro: u = !0 }) {
    us();
    var c = /* @__PURE__ */ new Set(), i = (h) => {
      for (var p = 0; p < h.length; p++) {
        var v = h[p];
        if (!c.has(v)) {
          c.add(v);
          var b = sg(v);
          t.addEventListener(v, zi, { passive: b });
          var y = ei.get(v);
          y === void 0 ? (document.addEventListener(v, zi, { passive: b }), ei.set(v, 1)) : ei.set(v, y + 1);
        }
      }
    };
    i(Xl(fc)), fs.add(i);
    var s = void 0, g = (function(h) {
      Sa.ensure();
      const p = vr(524352, h, !0);
      return (v = {}) => new Promise((b) => {
        v.outro ? Qr(p, () => {
          zn(p), b(void 0);
        }) : (zn(p), b(void 0));
      });
    })(() => {
      var h = r != null ? r : t.appendChild(fr());
      return (function(p, v, b) {
        new Hd(p, v, b);
      })(h, { pending: () => {
      } }, (p) => {
        if (o && (Ye({}), ln.c = o), l && (a.$$events = l), gt && Kn(p, null), s = n(p, a) || {}, gt && (qt.nodes_end = It, It === null || It.nodeType !== 8 || It.data !== "]")) throw Pi(), _a;
        o && Ke();
      }), () => {
        var p;
        for (var v of c) {
          t.removeEventListener(v, zi);
          var b = ei.get(v);
          --b === 0 ? (document.removeEventListener(v, zi), ei.delete(v)) : ei.set(v, b);
        }
        fs.delete(i), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
      };
    });
    return _s.set(s, g), s;
  }
  let _s = /* @__PURE__ */ new WeakMap();
  function ms(n, t, ...r) {
    var a, l = n, o = Fr;
    Rr(() => {
      o !== (o = t()) && (a && (zn(a), a = null), a = Mn(() => o(l, ...r)));
    }, Ea), gt && (l = It);
  }
  function Ca(n) {
    var t, r, a;
    ln === null && Bo(), Ra && ln.l !== null ? (t = ln, a = t.l, (r = a.u) != null ? r : a.u = { a: [], b: [], m: [] }).m.push(n) : Je(() => {
      const l = en(n);
      if (typeof l == "function") return l;
    });
  }
  function L(n, t, r = !1) {
    gt && pr();
    var a = n, l = null, o = null, u = Cn, c = !1;
    const i = (h, p = !0) => {
      c = !0, g(p, h);
    };
    function s() {
      var h = u ? l : o, p = u ? o : l;
      h && _l(h), p && Qr(p, () => {
        u ? o = null : l = null;
      });
    }
    const g = (h, p) => {
      if (u === (u = h)) return;
      let v = !1;
      if (gt) {
        const y = Co(a) === sl;
        !!u === y && (In(a = gl()), Ln(!1), v = !0);
      }
      var b = a;
      u ? l != null || (l = p && Mn(() => p(b))) : o != null || (o = p && Mn(() => p(b))), s(), v && Ln(!0);
    };
    Rr(() => {
      c = !1, t(i), c || g(null, null);
    }, r ? Ea : 0), gt && (a = It);
  }
  function Xe(n, t, r) {
    gt && pr();
    var a, l, o = n, u = Cn, c = Ua() ? jd : hl;
    function i() {
      a && Qr(a), a = l;
    }
    Rr(() => {
      if (c(u, u = t())) {
        var s = o;
        l = Mn(() => r(s)), i();
      }
    }), gt && (o = It);
  }
  function Nr(n, t) {
    return t;
  }
  function Zt(n, t, r, a, l, o = null) {
    var u = n, c = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & t) {
      var i = n;
      u = gt ? In(Wn(i)) : i.appendChild(fr());
    }
    gt && pr();
    var s, g, h = null, p = !1, v = /* @__PURE__ */ new Map(), b = ss(() => {
      var m = r();
      return xi(m) ? m : m == null ? [] : Xl(m);
    });
    function y() {
      (function(m, C, P, B, O, I, E, Z, G) {
        var ce, H, W, J, Q, U, z, D, j, Y, K = !!(8 & E), ee = !!(3 & E), q = C.length, S = P.items, T = P.first, M = T, R = null, ae = [], N = [];
        if (K) for (Y = 0; Y < q; Y += 1) D = Z(z = C[Y], Y), (j = S.get(D)) !== void 0 && ((ce = j.a) == null || ce.measure(), (U != null ? U : U = /* @__PURE__ */ new Set()).add(j));
        for (Y = 0; Y < q; Y += 1) if (D = Z(z = C[Y], Y), (j = S.get(D)) !== void 0) {
          if (ee && ug(j, z, Y, E), (j.e.f & Sr) !== 0 && (_l(j.e), K && ((H = j.a) == null || H.unfix(), (U != null ? U : U = /* @__PURE__ */ new Set()).delete(j))), j !== M) {
            if (Q !== void 0 && Q.has(j)) {
              if (ae.length < N.length) {
                var A, $ = N[0];
                R = $.prev;
                var ne = ae[0], te = ae[ae.length - 1];
                for (A = 0; A < ae.length; A += 1) ks(ae[A], $, O);
                for (A = 0; A < N.length; A += 1) Q.delete(N[A]);
                Cr(P, ne.prev, te.next), Cr(P, R, ne), Cr(P, te, $), M = $, R = te, Y -= 1, ae = [], N = [];
              } else Q.delete(j), ks(j, M, O), Cr(P, j.prev, j.next), Cr(P, j, R === null ? P.first : R.next), Cr(P, R, j), R = j;
              continue;
            }
            for (ae = [], N = []; M !== null && M.k !== D; ) (M.e.f & Sr) === 0 && (Q != null ? Q : Q = /* @__PURE__ */ new Set()).add(M), N.push(M), M = M.next;
            if (M === null) continue;
            j = M;
          }
          ae.push(j), R = j, M = j.next;
        } else {
          var ie = B.get(D);
          if (ie !== void 0) {
            B.delete(D), S.set(D, ie);
            var X = R ? R.next : M;
            Cr(P, R, ie), Cr(P, ie, X), ks(ie, X, O), R = ie;
          } else
            R = kc(M ? M.e.nodes_start : O, P, R, R === null ? P.first : R.next, z, D, Y, I, E, G);
          S.set(D, R), ae = [], N = [], M = R.next;
        }
        if (M !== null || Q !== void 0) {
          for (var ve = Q === void 0 ? [] : Xl(Q); M !== null; ) (M.e.f & Sr) === 0 && ve.push(M), M = M.next;
          var Be = ve.length;
          if (Be > 0) {
            var oe = 4 & E && q === 0 ? O : null;
            if (K) {
              for (Y = 0; Y < Be; Y += 1) (W = ve[Y].a) == null || W.measure();
              for (Y = 0; Y < Be; Y += 1) (J = ve[Y].a) == null || J.fix();
            }
            (function(ke, ze, he) {
              for (var de = ke.items, be = [], we = ze.length, Le = 0; Le < we; Le++) gs(ze[Le].e, be, !0);
              var Ce = we > 0 && be.length === 0 && he !== null;
              if (Ce) {
                var Se = he.parentNode;
                Ho(Se), Se.append(he), de.clear(), Cr(ke, ze[0].prev, ze[we - 1].next);
              }
              rc(be, () => {
                for (var Qe = 0; Qe < we; Qe++) {
                  var xe = ze[Qe];
                  Ce || (de.delete(xe.k), Cr(ke, xe.prev, xe.next)), zn(xe.e, !Ce);
                }
              });
            })(P, ve, oe);
          }
        }
        K && wa(() => {
          var ke;
          if (U !== void 0) for (j of U) (ke = j.a) == null || ke.apply();
        });
        for (var fe of (m.first = P.first && P.first.e, m.last = R && R.e, B.values())) zn(fe.e);
        B.clear();
      })(g, s, c, v, u, l, t, a, r), o !== null && (s.length === 0 ? h ? _l(h) : h = Mn(() => o(u)) : h !== null && Qr(h, () => {
        h = null;
      }));
    }
    Rr(() => {
      g != null || (g = qt);
      var m = (s = e(b)).length;
      if (p && m === 0) return;
      p = m === 0;
      let C = !1;
      if (gt && Co(u) === sl != (m === 0) && (In(u = gl()), Ln(!1), C = !0), gt) {
        for (var P, B = null, O = 0; O < m; O++) {
          if (It.nodeType === 8 && It.data === "]") {
            u = It, C = !0, Ln(!1);
            break;
          }
          var I = s[O], E = a(I, O);
          P = kc(It, c, B, null, I, E, O, l, t, r), c.items.set(E, P), B = P;
        }
        m > 0 && In(gl());
      }
      gt ? m === 0 && o && (h = Mn(() => o(u))) : y(), C && Ln(!0), e(b);
    }), gt && (u = It);
  }
  function ug(n, t, r, a) {
    1 & a && Ya(n.v, t), 2 & a ? Ya(n.i, r) : n.i = r;
  }
  function kc(n, t, r, a, l, o, u, c, i, s, g) {
    var h = 1 & i ? 16 & i ? Er(l) : cs(l, !1, !1) : l, p = 2 & i ? Er(u) : u, v = { i: p, v: h, k: o, a: null, e: null, prev: r, next: a };
    try {
      return n === null && document.createDocumentFragment().append(n = fr()), v.e = Mn(() => c(n, h, p, s), gt), v.e.prev = r && r.e, v.e.next = a && a.e, r === null ? g || (t.first = v) : (r.next = v, r.e.next = v.e), a !== null && (a.prev = v, a.e.prev = v.e), v;
    } finally {
    }
  }
  function ks(n, t, r) {
    for (var a = n.next ? n.next.e.nodes_start : r, l = t ? t.e.nodes_start : r, o = n.e.nodes_start; o !== null && o !== a; ) {
      var u = br(o);
      l.before(o), o = u;
    }
  }
  function Cr(n, t, r) {
    t === null ? n.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function Ge(n, t, r = !1, a = !1, l = !1) {
    var o = n, u = "";
    pe(() => {
      var c, i = qt;
      if (u !== (u = (c = t()) != null ? c : "")) {
        if (i.nodes_start !== null && (tc(i.nodes_start, i.nodes_end), i.nodes_start = i.nodes_end = null), u !== "") {
          if (gt) {
            It.data;
            for (var s = pr(), g = s; s !== null && (s.nodeType !== 8 || s.data !== ""); ) g = s, s = br(s);
            if (s === null) throw Pi(), _a;
            return Kn(It, g), void (o = In(s));
          }
          var h = u + "";
          r ? h = `<svg>${h}</svg>` : a && (h = `<math>${h}</math>`);
          var p = vs(h);
          if ((r || a) && (p = Wn(p)), Kn(Wn(p), p.lastChild), r || a) for (; Wn(p); ) o.before(Wn(p));
          else o.before(p);
        }
      } else gt && pr();
    });
  }
  function yc(n, t, r, a, l) {
    var o;
    gt && pr();
    var u = (o = t.$$slots) == null ? void 0 : o[r], c = !1;
    u === !0 && (u = t.children, c = !0), u === void 0 || u(n, c ? () => a : a);
  }
  function xc(n, t, r) {
    gt && pr();
    var a, l, o = n, u = null;
    function c() {
      l && (Qr(l), l = null), l = u, u = null;
    }
    Rr(() => {
      if (a !== (a = t())) {
        if (a) {
          var i = o;
          u = Mn(() => r(i, a));
        }
        c();
      }
    }, Ea), gt && (o = It);
  }
  function dg(n, t, r, a, l, o) {
    let u = gt;
    var c, i;
    gt && pr();
    var s = null;
    gt && It.nodeType === 1 && (s = It, pr());
    var g, h = gt ? It : n;
    Rr(() => {
      const p = t() || null;
      var v = p === "svg" ? "http://www.w3.org/2000/svg" : null;
      p !== c && (g && (p === null ? Qr(g, () => {
        g = null, i = null;
      }) : p === i ? _l(g) : zn(g)), p && p !== i && (g = Mn(() => {
        if (Kn(s = gt ? s : v ? document.createElementNS(v, p) : document.createElement(p), s), a) {
          gt && (y = p, og.includes(y)) && s.append(document.createComment(""));
          var b = gt ? Wn(s) : s.appendChild(fr());
          gt && (b === null ? Ln(!1) : In(b)), a(s, b);
        }
        var y;
        qt.nodes_end = s, h.before(s);
      })), (c = p) && (i = c));
    }, Ea), u && (Ln(!0), In(h));
  }
  function ys(n, t, r) {
    vl(() => {
      var a = en(() => t(n, r == null ? void 0 : r()) || {});
      if (r && (a != null && a.update)) {
        var l = !1, o = {};
        Ii(() => {
          var u = r();
          pc(u), l && hl(o, u) && (o = u, a.update(u));
        }), l = !0;
      }
      if (a != null && a.destroy) return () => a.destroy();
    });
  }
  function gg(n, t) {
    var r, a = void 0;
    Rr(() => {
      a !== (a = t()) && (r && (zn(r), r = null), a && (r = Mn(() => {
        vl(() => a(n));
      })));
    });
  }
  function wc(n) {
    var t, r, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var l = n.length;
      for (t = 0; t < l; t++) n[t] && (r = wc(n[t])) && (a && (a += " "), a += r);
    } else for (r in n) n[r] && (a && (a += " "), a += r);
    return a;
  }
  function Di(n) {
    return typeof n == "object" ? (function() {
      for (var t, r, a = 0, l = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = wc(t)) && (l && (l += " "), l += r);
      return l;
    })(n) : n != null ? n : "";
  }
  const Pc = [...` 	
\r\f \v\uFEFF`];
  function Sc(n, t = !1) {
    var r = t ? " !important;" : ";", a = "";
    for (var l in n) {
      var o = n[l];
      o != null && o !== "" && (a += " " + l + ": " + o + r);
    }
    return a;
  }
  function xs(n) {
    return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
  }
  function At(n, t, r, a, l, o) {
    var u = n.__className;
    if (gt || u !== r || u === void 0) {
      var c = (function(g, h, p) {
        var v = g == null ? "" : "" + g;
        if (h && (v = v ? v + " " + h : h), p) {
          for (var b in p) if (p[b]) v = v ? v + " " + b : b;
          else if (v.length) for (var y = b.length, m = 0; (m = v.indexOf(b, m)) >= 0; ) {
            var C = m + y;
            m !== 0 && !Pc.includes(v[m - 1]) || C !== v.length && !Pc.includes(v[C]) ? m = C : v = (m === 0 ? "" : v.substring(0, m)) + v.substring(C + 1);
          }
        }
        return v === "" ? null : v;
      })(r, a, o);
      gt && c === n.getAttribute("class") || (c == null ? n.removeAttribute("class") : t ? n.className = c : n.setAttribute("class", c)), n.__className = r;
    } else if (o && l !== o) for (var i in o) {
      var s = !!o[i];
      l != null && s === !!l[i] || n.classList.toggle(i, s);
    }
    return o;
  }
  function ws(n, t = {}, r, a) {
    for (var l in r) {
      var o = r[l];
      t[l] !== o && (r[l] == null ? n.style.removeProperty(l) : n.style.setProperty(l, o, a));
    }
  }
  function Nt(n, t, r, a) {
    var l = n.__style;
    if (gt || l !== t) {
      var o = (function(u, c) {
        if (c) {
          var i, s, g = "";
          if (Array.isArray(c) ? (i = c[0], s = c[1]) : i = c, u) {
            u = String(u).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var h = !1, p = 0, v = !1, b = [];
            i && b.push(...Object.keys(i).map(xs)), s && b.push(...Object.keys(s).map(xs));
            var y = 0, m = -1;
            const O = u.length;
            for (var C = 0; C < O; C++) {
              var P = u[C];
              if (v ? P === "/" && u[C - 1] === "*" && (v = !1) : h ? h === P && (h = !1) : P === "/" && u[C + 1] === "*" ? v = !0 : P === '"' || P === "'" ? h = P : P === "(" ? p++ : P === ")" && p--, !v && h === !1 && p === 0) {
                if (P === ":" && m === -1) m = C;
                else if (P === ";" || C === O - 1) {
                  if (m !== -1) {
                    var B = xs(u.substring(y, m).trim());
                    b.includes(B) || (P !== ";" && C++, g += " " + u.substring(y, C).trim() + ";");
                  }
                  y = C + 1, m = -1;
                }
              }
            }
          }
          return i && (g += Sc(i)), s && (g += Sc(s, !0)), (g = g.trim()) === "" ? null : g;
        }
        return u == null ? null : String(u);
      })(t, a);
      gt && o === n.getAttribute("style") || (o == null ? n.removeAttribute("style") : n.style.cssText = o), n.__style = t;
    } else a && (Array.isArray(a) ? (ws(n, r == null ? void 0 : r[0], a[0]), ws(n, r == null ? void 0 : r[1], a[1], "important")) : ws(n, r, a));
    return a;
  }
  function $i(n, t, r = !1) {
    if (n.multiple) {
      if (t == null) return;
      if (!xi(t)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of n.options) a.selected = t.includes(Bc(a));
    } else {
      for (a of n.options)
        if (Jd(Bc(a), t)) return void (a.selected = !0);
      r && t === void 0 || (n.selectedIndex = -1);
    }
  }
  function Ps(n) {
    var t = new MutationObserver(() => {
      $i(n, n.__value);
    });
    t.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), ds(() => {
      t.disconnect();
    });
  }
  function Bc(n) {
    return "__value" in n ? n.__value : n.value;
  }
  const Ai = Symbol("class"), Vi = Symbol("style"), Cc = Symbol("is custom element"), Ic = Symbol("is html");
  function Wr(n) {
    if (gt) {
      var t, r = !1, a = () => {
        if (!r) {
          if (r = !0, n.hasAttribute("value")) {
            var l = n.value;
            Pe(n, "value", null), n.value = l;
          }
          if (n.hasAttribute("checked")) {
            var o = n.checked;
            Pe(n, "checked", null), n.checked = o;
          }
        }
      };
      n.__on_r = a, t = a, Ha.length === 0 && Rd($o), Ha.push(t), Jo();
    }
  }
  function Ia(n, t) {
    var r = yl(n);
    r.value !== (r.value = t != null ? t : void 0) && (n.value !== t || t === 0 && n.nodeName === "PROGRESS") && (n.value = t != null ? t : "");
  }
  function qi(n, t) {
    var r = yl(n);
    r.checked !== (r.checked = t != null ? t : void 0) && (n.checked = t);
  }
  function hg(n, t) {
    t ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
  }
  function Pe(n, t, r, a) {
    var l = yl(n);
    gt && (l[t] = n.getAttribute(t), t === "src" || t === "srcset" || t === "href" && n.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (n[Ld] = r), r == null ? n.removeAttribute(t) : typeof r != "string" && zc(n).includes(t) ? n[t] = r : n.setAttribute(t, r));
  }
  function pg(n, t, r = [], a = [], l, o = !1, u = !1) {
    Oo(r, a, (c) => {
      var i = void 0, s = {}, g = n.nodeName === "SELECT", h = !1;
      if (Rr(() => {
        var v = t(...c.map(e)), b = (function(m, C, P, B, O = !1) {
          if (gt && O && m.tagName === "INPUT") {
            var I = m;
            (I.type === "checkbox" ? "defaultChecked" : "defaultValue") in P || Wr(I);
          }
          var E = yl(m), Z = E[Cc], G = !E[Ic];
          let ce = gt && Z;
          ce && Ln(!1);
          var H = C || {}, W = m.tagName === "OPTION";
          for (var J in C) J in P || (P[J] = null);
          P.class ? P.class = Di(P.class) : P[Ai] && (P.class = null), P[Vi] && (P.style != null || (P.style = null));
          var Q = zc(m);
          for (const K in P) {
            let ee = P[K];
            if (W && K === "value" && ee == null) m.value = m.__value = "", H[K] = ee;
            else if (K !== "class") if (K !== "style") {
              var U = H[K];
              if (ee !== U || ee === void 0 && m.hasAttribute(K)) {
                H[K] = ee;
                var z = K[0] + K[1];
                if (z !== "$$") if (z === "on") {
                  const q = {}, S = "$$" + K;
                  let T = K.slice(2);
                  var D = rg(T);
                  if (tg(T) && (T = T.slice(0, -7), q.capture = !0), !D && U) {
                    if (ee != null) continue;
                    m.removeEventListener(T, H[S], q), H[S] = null;
                  }
                  if (ee != null) if (D) m[`__${T}`] = ee, Dn([T]);
                  else {
                    let M = function(R) {
                      H[K].call(this, R);
                    };
                    H[S] = bs(T, m, M, q);
                  }
                  else D && (m[`__${T}`] = void 0);
                } else if (K === "style") Pe(m, K, ee);
                else if (K === "autofocus") Yd(m, !!ee);
                else if (Z || K !== "__value" && (K !== "value" || ee == null)) if (K === "selected" && W) hg(m, ee);
                else {
                  var j = K;
                  G || (j = ig(j));
                  var Y = j === "defaultValue" || j === "defaultChecked";
                  if (ee != null || Z || Y) Y || Q.includes(j) && (Z || typeof ee != "string") ? (m[j] = ee, j in E && (E[j] = Cn)) : typeof ee != "function" && Pe(m, j, ee);
                  else if (E[K] = null, j === "value" || j === "checked") {
                    let q = m;
                    const S = C === void 0;
                    if (j === "value") {
                      let T = q.defaultValue;
                      q.removeAttribute(j), q.defaultValue = T, q.value = q.__value = S ? T : null;
                    } else {
                      let T = q.defaultChecked;
                      q.removeAttribute(j), q.defaultChecked = T, q.checked = !!S && T;
                    }
                  } else m.removeAttribute(K);
                }
                else m.value = m.__value = ee;
              }
            } else Nt(m, ee, C == null ? void 0 : C[Vi], P[Vi]), H[K] = ee, H[Vi] = P[Vi];
            else At(m, m.namespaceURI === "http://www.w3.org/1999/xhtml", ee, B, C == null ? void 0 : C[Ai], P[Ai]), H[K] = ee, H[Ai] = P[Ai];
          }
          return ce && Ln(!0), H;
        })(n, i, v, l, o, u);
        h && g && "value" in v && $i(n, v.value);
        for (let m of Object.getOwnPropertySymbols(s)) v[m] || zn(s[m]);
        for (let m of Object.getOwnPropertySymbols(v)) {
          var y = v[m];
          m.description !== "@attach" || i && y === i[m] || (s[m] && zn(s[m]), s[m] = Mn(() => gg(n, () => y))), b[m] = y;
        }
        i = b;
      }), g) {
        var p = n;
        vl(() => {
          $i(p, i.value, !0), Ps(p);
        });
      }
      h = !0;
    });
  }
  function yl(n) {
    var t;
    return (t = n.__attributes) != null ? t : n.__attributes = { [Cc]: n.nodeName.includes("-"), [Ic]: n.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var Mc = /* @__PURE__ */ new Map();
  function zc(n) {
    var t, r = n.getAttribute("is") || n.nodeName, a = Mc.get(r);
    if (a) return a;
    Mc.set(r, a = []);
    for (var l = n, o = Element.prototype; o !== l; ) {
      for (var u in t = ko(l)) t[u].set && a.push(u);
      l = cl(l);
    }
    return a;
  }
  function fg(n, t, r = t) {
    var a = /* @__PURE__ */ new WeakSet();
    (function(l, o, u, c = u) {
      l.addEventListener(o, () => bl(u));
      const i = l.__on_r;
      l.__on_r = i ? () => {
        i(), c(!0);
      } : () => c(!0), Jo();
    })(n, "input", async (l) => {
      var o = l ? n.defaultValue : n.value;
      if (o = Ss(n) ? Bs(o) : o, r(o), pn !== null && a.add(pn), await hs(), o !== (o = t())) {
        var u = n.selectionStart, c = n.selectionEnd;
        n.value = o != null ? o : "", c !== null && (n.selectionStart = u, n.selectionEnd = Math.min(c, n.value.length));
      }
    }), (gt && n.defaultValue !== n.value || en(t) == null && n.value) && (r(Ss(n) ? Bs(n.value) : n.value), pn !== null && a.add(pn)), Ii(() => {
      var l = t();
      if (n === document.activeElement) {
        var o = Si != null ? Si : pn;
        if (a.has(o)) return;
      }
      Ss(n) && l === Bs(n.value) || (n.type !== "date" || l || n.value) && l !== n.value && (n.value = l != null ? l : "");
    });
  }
  function Ss(n) {
    var t = n.type;
    return t === "number" || t === "range";
  }
  function Bs(n) {
    return n === "" ? null : +n;
  }
  function Dc(n, t) {
    return n === t || (n == null ? void 0 : n[jr]) === t;
  }
  function xl(n = {}, t, r, a) {
    return vl(() => {
      var l, o;
      return Ii(() => {
        l = o, o = [], en(() => {
          n !== r(...o) && (t(n, ...o), l && Dc(r(...l), n) && t(null, ...l));
        });
      }), () => {
        wa(() => {
          o && Dc(r(...o), n) && t(null, ...o);
        });
      };
    }), n;
  }
  function $c(n, t) {
    if (n.l.s) for (const r of n.l.s) e(r);
    t();
  }
  function Ac(n, t, r) {
    if (n == null) return t(void 0), Fr;
    const a = en(() => n.subscribe(t, r));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }
  const ti = [];
  function Ur(n, t = Fr) {
    let r = null;
    const a = /* @__PURE__ */ new Set();
    function l(u) {
      if (hl(n, u) && (n = u, r)) {
        const c = !ti.length;
        for (const i of a) i[1](), ti.push(i, n);
        if (c) {
          for (let i = 0; i < ti.length; i += 2) ti[i][0](ti[i + 1]);
          ti.length = 0;
        }
      }
    }
    function o(u) {
      l(u(n));
    }
    return { set: l, update: o, subscribe: function(u, c = Fr) {
      const i = [u, c];
      return a.add(i), a.size === 1 && (r = t(l, o) || Fr), u(n), () => {
        a.delete(i), a.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let Vc, wl = !1, Cs = Symbol();
  function Ie(n, t, r) {
    var a;
    const l = (a = r[t]) != null ? a : r[t] = { store: null, source: cs(void 0), unsubscribe: Fr };
    if (l.store !== n && !(Cs in r)) if (l.unsubscribe(), l.store = n != null ? n : null, n == null) l.source.v = void 0, l.unsubscribe = Fr;
    else {
      var o = !0;
      l.unsubscribe = Ac(n, (u) => {
        o ? l.source.v = u : re(l.source, u);
      }), o = !1;
    }
    return n && Cs in r ? (function(u) {
      let c;
      return Ac(u, (i) => c = i)(), c;
    })(n) : e(l.source);
  }
  function kt() {
    const n = {};
    return [n, function() {
      ds(() => {
        for (var t in n)
          n[t].unsubscribe();
        ma(n, Cs, { enumerable: !1, value: !0 });
      });
    }];
  }
  function k(n, t, r, a) {
    var l, o, u, c, i = !Ra || !!(2 & r), s = !!(8 & r), g = !!(16 & r), h = a, p = !0, v = () => (p && (p = !1, h = g ? en(a) : a), h);
    if (s) {
      var b = jr in n || So in n;
      u = (o = (l = ka(n, t)) == null ? void 0 : l.set) != null ? o : b && t in n ? (I) => n[t] = I : void 0;
    }
    var y, m = !1;
    if (s ? [c, m] = (function(I) {
      var E = wl;
      try {
        return wl = !1, [I(), wl];
      } finally {
        wl = E;
      }
    })(() => n[t]) : c = n[t], c === void 0 && a !== void 0 && (c = v(), u && (i && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), u(c))), y = i ? () => {
      var I = n[t];
      return I === void 0 ? v() : (p = !0, I);
    } : () => {
      var I = n[t];
      return I !== void 0 && (h = void 0), I === void 0 ? h : I;
    }, i && !(4 & r)) return y;
    if (u) {
      var C = n.$$legacy;
      return function(I, E) {
        return arguments.length > 0 ? (i && E && !C && !m || u(E ? y() : I), I) : y();
      };
    }
    var P = !1, B = (1 & r ? Ci : ss)(() => (P = !1, y()));
    s && e(B);
    var O = qt;
    return function(I, E) {
      if (arguments.length > 0) {
        const Z = E ? e(B) : i && s ? lt(I) : I;
        return re(B, Z), P = !0, h !== void 0 && (h = Z), I;
      }
      return Ba && P || (O.f & ja) !== 0 ? B.v : e(B);
    };
  }
  class bg {
    constructor(t) {
      var r, a;
      Bt(this, Xr), Bt(this, gr);
      var l = /* @__PURE__ */ new Map(), o = (c, i) => {
        var s = cs(i, !1, !1);
        return l.set(c, s), s;
      };
      const u = new Proxy({ ...t.props || {}, $$events: {} }, { get(c, i) {
        var s;
        return e((s = l.get(i)) != null ? s : o(i, Reflect.get(c, i)));
      }, has(c, i) {
        var s;
        return i === So || (e((s = l.get(i)) != null ? s : o(i, Reflect.get(c, i))), Reflect.has(c, i));
      }, set(c, i, s) {
        var g;
        return re((g = l.get(i)) != null ? g : o(i, s), s), Reflect.set(c, i, s);
      } });
      Pt(this, gr, (t.hydrate ? cg : _c)(t.component, { target: t.target, anchor: t.anchor, props: u, context: t.context, intro: (r = t.intro) != null && r, recover: t.recover })), (a = t == null ? void 0 : t.props) != null && a.$$host && t.sync !== !1 || _(), Pt(this, Xr, u.$$events);
      for (const c of Object.keys(ye(this, gr))) c !== "$set" && c !== "$destroy" && c !== "$on" && ma(this, c, { get() {
        return ye(this, gr)[c];
      }, set(i) {
        ye(this, gr)[c] = i;
      }, enumerable: !0 });
      ye(this, gr).$set = (c) => {
        Object.assign(u, c);
      }, ye(this, gr).$destroy = () => {
        (function(c, i) {
          const s = _s.get(c);
          s ? (_s.delete(c), s(i)) : Promise.resolve();
        })(ye(this, gr));
      };
    }
    $set(t) {
      ye(this, gr).$set(t);
    }
    $on(t, r) {
      ye(this, Xr)[t] = ye(this, Xr)[t] || [];
      const a = (...l) => r.call(this, ...l);
      return ye(this, Xr)[t].push(a), () => {
        ye(this, Xr)[t] = ye(this, Xr)[t].filter((l) => l !== a);
      };
    }
    $destroy() {
      ye(this, gr).$destroy();
    }
  }
  function Pl(n, t, r, a) {
    var l;
    const o = (l = r[n]) == null ? void 0 : l.type;
    if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !a || !r[n]) return t;
    if (a === "toAttribute") switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t == null ? null : t;
      default:
        return t;
    }
    else switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
      default:
        return t;
      case "Number":
        return t != null ? +t : t;
    }
  }
  function Ne(n, t, r, a, l, o) {
    let u = class extends Vc {
      constructor() {
        super(n, r, l), this.$$p_d = t;
      }
      static get observedAttributes() {
        return ol(t).map((c) => (t[c].attribute || c).toLowerCase());
      }
    };
    return ol(t).forEach((c) => {
      ma(u.prototype, c, { get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      }, set(i) {
        var s;
        i = Pl(c, i, t), this.$$d[c] = i;
        var g = this.$$c;
        g && ((s = ka(g, c)) != null && s.get ? g[c] = i : g.$set({ [c]: i }));
      } });
    }), a.forEach((c) => {
      ma(u.prototype, c, { get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[c];
      } });
    }), o && (u = o(u)), n.element = u, u;
  }
  Xr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && (Vc = class extends HTMLElement {
    constructor(n, t, r) {
      super(), vn(this, "$$ctor"), vn(this, "$$s"), vn(this, "$$c"), vn(this, "$$cn", !1), vn(this, "$$d", {}), vn(this, "$$r", !1), vn(this, "$$p_d", {}), vn(this, "$$l", {}), vn(this, "$$l_u", /* @__PURE__ */ new Map()), vn(this, "$$me"), this.$$ctor = n, this.$$s = t, r && this.attachShadow({ mode: "open" });
    }
    addEventListener(n, t, r) {
      if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(t), this.$$c) {
        const a = this.$$c.$on(n, t);
        this.$$l_u.set(t, a);
      }
      super.addEventListener(n, t, r);
    }
    removeEventListener(n, t, r) {
      if (super.removeEventListener(n, t, r), this.$$c) {
        const a = this.$$l_u.get(t);
        a && (a(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (this.$$cn = !0, !this.$$c) {
        let t = function(l) {
          return (o) => {
            const u = document.createElement("slot");
            l !== "default" && (u.name = l), f(o, u);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        const r = {}, a = (function(l) {
          const o = {};
          return l.childNodes.forEach((u) => {
            o[u.slot || "default"] = !0;
          }), o;
        })(this);
        for (const l of this.$$s) l in a && (l !== "default" || this.$$d.children ? r[l] = t(l) : (this.$$d.children = t(l), r.default = !0));
        for (const l of this.attributes) {
          const o = this.$$g_p(l.name);
          o in this.$$d || (this.$$d[o] = Pl(o, l.value, this.$$p_d, "toProp"));
        }
        for (const l in this.$$p_d) l in this.$$d || this[l] === void 0 || (this.$$d[l] = this[l], delete this[l]);
        this.$$c = (n = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new bg(n)), this.$$me = (function(l) {
          Sa.ensure();
          const o = vr(524352, l, !0);
          return () => {
            zn(o);
          };
        })(() => {
          Ii(() => {
            var l;
            this.$$r = !0;
            for (const o of ol(this.$$c)) {
              if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
              this.$$d[o] = this.$$c[o];
              const u = Pl(o, this.$$d[o], this.$$p_d, "toAttribute");
              u == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, u);
            }
            this.$$r = !1;
          });
        });
        for (const l in this.$$l) for (const o of this.$$l[l]) {
          const u = this.$$c.$on(l, o);
          this.$$l_u.set(o, u);
        }
        this.$$l = {};
      }
      var n;
    }
    attributeChangedCallback(n, t, r) {
      var a;
      this.$$r || (n = this.$$g_p(n), this.$$d[n] = Pl(n, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [n]: this.$$d[n] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(n) {
      return ol(this.$$p_d).find((t) => this.$$p_d[t].attribute === n || !this.$$p_d[t].attribute && t.toLowerCase() === n) || n;
    }
  });
  const qc = "swatchSettings", Ti = (n) => {
    const t = Ur(n);
    return Wa(qc, t), { swatchSettings: t, setSwatchSettings: (r) => {
      t.set(r);
    } };
  }, Tc = () => {
    const n = Na(qc);
    if (!n) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
    return n;
  };
  var vg = V("<span> </span>"), _g = V("<div></div>");
  function Hr(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "product", 7), o = k(t, "class", 7, ""), u = Tc(), c = d(() => Ie(u, "$swatchSettings", r).showSelectedSwatchName ? [] : l().options.map((v) => v.name));
    var i = { get product() {
      return l();
    }, set product(v) {
      l(v), _();
    }, get class() {
      return o();
    }, set class(v = "") {
      o(v), _();
    } }, s = De(), g = _e(s), h = (v) => {
      var b = _g();
      Zt(b, 21, () => e(c), Nr, (y, m) => {
        var C = vg(), P = w(C, !0);
        x(C), pe(() => mt(P, e(m))), f(y, C);
      }), x(b), pe(() => At(b, 1, Di(["kaching-bundles__bar-variant-names", o()]))), f(v, b);
    };
    L(g, (v) => {
      e(c).length && v(h);
    }), f(n, s);
    var p = Ke(i);
    return a(), p;
  }
  Ne(Hr, { product: {}, class: {} }, [], [], !0);
  const Sl = Math.min, Ma = Math.max, Bl = Math.round, Cl = Math.floor, Ir = (n) => ({ x: n, y: n }), mg = { left: "right", right: "left", bottom: "top", top: "bottom" }, kg = { start: "end", end: "start" };
  function Gc(n, t, r) {
    return Ma(n, Sl(t, r));
  }
  function Il(n, t) {
    return typeof n == "function" ? n(t) : n;
  }
  function za(n) {
    return n.split("-")[0];
  }
  function Ml(n) {
    return n.split("-")[1];
  }
  function Oc(n) {
    return n === "x" ? "y" : "x";
  }
  function Fc(n) {
    return n === "y" ? "height" : "width";
  }
  const yg = /* @__PURE__ */ new Set(["top", "bottom"]);
  function sa(n) {
    return yg.has(za(n)) ? "y" : "x";
  }
  function Lc(n) {
    return Oc(sa(n));
  }
  function Is(n) {
    return n.replace(/start|end/g, (t) => kg[t]);
  }
  const jc = ["left", "right"], Ec = ["right", "left"], xg = ["top", "bottom"], wg = ["bottom", "top"];
  function Pg(n, t, r, a) {
    const l = Ml(n);
    let o = (function(u, c, i) {
      switch (u) {
        case "top":
        case "bottom":
          return i ? c ? Ec : jc : c ? jc : Ec;
        case "left":
        case "right":
          return c ? xg : wg;
        default:
          return [];
      }
    })(za(n), r === "start", a);
    return l && (o = o.map((u) => u + "-" + l), t && (o = o.concat(o.map(Is)))), o;
  }
  function zl(n) {
    return n.replace(/left|right|bottom|top/g, (t) => mg[t]);
  }
  function Dl(n) {
    const { x: t, y: r, width: a, height: l } = n;
    return { width: a, height: l, top: r, left: t, right: t + a, bottom: r + l, x: t, y: r };
  }
  function Rc(n, t, r) {
    let { reference: a, floating: l } = n;
    const o = sa(t), u = Lc(t), c = Fc(u), i = za(t), s = o === "y", g = a.x + a.width / 2 - l.width / 2, h = a.y + a.height / 2 - l.height / 2, p = a[c] / 2 - l[c] / 2;
    let v;
    switch (i) {
      case "top":
        v = { x: g, y: a.y - l.height };
        break;
      case "bottom":
        v = { x: g, y: a.y + a.height };
        break;
      case "right":
        v = { x: a.x + a.width, y: h };
        break;
      case "left":
        v = { x: a.x - l.width, y: h };
        break;
      default:
        v = { x: a.x, y: a.y };
    }
    switch (Ml(t)) {
      case "start":
        v[u] -= p * (r && s ? -1 : 1);
        break;
      case "end":
        v[u] += p * (r && s ? -1 : 1);
    }
    return v;
  }
  async function Qc(n, t) {
    var r;
    t === void 0 && (t = {});
    const { x: a, y: l, platform: o, rects: u, elements: c, strategy: i } = n, { boundary: s = "clippingAncestors", rootBoundary: g = "viewport", elementContext: h = "floating", altBoundary: p = !1, padding: v = 0 } = Il(t, n), b = (function(I) {
      return typeof I != "number" ? (function(E) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...E };
      })(I) : { top: I, right: I, bottom: I, left: I };
    })(v), y = c[p ? h === "floating" ? "reference" : "floating" : h], m = Dl(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(y))) == null || r ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)), boundary: s, rootBoundary: g, strategy: i })), C = h === "floating" ? { x: a, y: l, width: u.floating.width, height: u.floating.height } : u.reference, P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating)), B = await (o.isElement == null ? void 0 : o.isElement(P)) && await (o.getScale == null ? void 0 : o.getScale(P)) || { x: 1, y: 1 }, O = Dl(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: c, rect: C, offsetParent: P, strategy: i }) : C);
    return { top: (m.top - O.top + b.top) / B.y, bottom: (O.bottom - m.bottom + b.bottom) / B.y, left: (m.left - O.left + b.left) / B.x, right: (O.right - m.right + b.right) / B.x };
  }
  const Sg = /* @__PURE__ */ new Set(["left", "top"]);
  function $l() {
    return typeof window != "undefined";
  }
  function ni(n) {
    return Nc(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function Xn(n) {
    var t;
    return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function Mr(n) {
    var t;
    return (t = (Nc(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function Nc(n) {
    return !!$l() && (n instanceof Node || n instanceof Xn(n).Node);
  }
  function kr(n) {
    return !!$l() && (n instanceof Element || n instanceof Xn(n).Element);
  }
  function zr(n) {
    return !!$l() && (n instanceof HTMLElement || n instanceof Xn(n).HTMLElement);
  }
  function Wc(n) {
    return !(!$l() || typeof ShadowRoot == "undefined") && (n instanceof ShadowRoot || n instanceof Xn(n).ShadowRoot);
  }
  const Bg = /* @__PURE__ */ new Set(["inline", "contents"]);
  function Gi(n) {
    const { overflow: t, overflowX: r, overflowY: a, display: l } = yr(n);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !Bg.has(l);
  }
  const Cg = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function Ig(n) {
    return Cg.has(ni(n));
  }
  const Mg = [":popover-open", ":modal"];
  function Al(n) {
    return Mg.some((t) => {
      try {
        return n.matches(t);
      } catch {
        return !1;
      }
    });
  }
  const zg = ["transform", "translate", "scale", "rotate", "perspective"], Dg = ["transform", "translate", "scale", "rotate", "perspective", "filter"], $g = ["paint", "layout", "strict", "content"];
  function Ms(n) {
    const t = zs(), r = kr(n) ? yr(n) : n;
    return zg.some((a) => !!r[a] && r[a] !== "none") || !!r.containerType && r.containerType !== "normal" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || Dg.some((a) => (r.willChange || "").includes(a)) || $g.some((a) => (r.contain || "").includes(a));
  }
  function zs() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const Ag = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function ri(n) {
    return Ag.has(ni(n));
  }
  function yr(n) {
    return Xn(n).getComputedStyle(n);
  }
  function Vl(n) {
    return kr(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
  }
  function oa(n) {
    if (ni(n) === "html") return n;
    const t = n.assignedSlot || n.parentNode || Wc(n) && n.host || Mr(n);
    return Wc(t) ? t.host : t;
  }
  function Uc(n) {
    const t = oa(n);
    return ri(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : zr(t) && Gi(t) ? t : Uc(t);
  }
  function Oi(n, t, r) {
    var a;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const l = Uc(n), o = l === ((a = n.ownerDocument) == null ? void 0 : a.body), u = Xn(l);
    if (o) {
      const c = Ds(u);
      return t.concat(u, u.visualViewport || [], Gi(l) ? l : [], c && r ? Oi(c) : []);
    }
    return t.concat(l, Oi(l, [], r));
  }
  function Ds(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function Hc(n) {
    const t = yr(n);
    let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
    const l = zr(n), o = l ? n.offsetWidth : r, u = l ? n.offsetHeight : a, c = Bl(r) !== o || Bl(a) !== u;
    return c && (r = o, a = u), { width: r, height: a, $: c };
  }
  function $s(n) {
    return kr(n) ? n : n.contextElement;
  }
  function ai(n) {
    const t = $s(n);
    if (!zr(t)) return Ir(1);
    const r = t.getBoundingClientRect(), { width: a, height: l, $: o } = Hc(t);
    let u = (o ? Bl(r.width) : r.width) / a, c = (o ? Bl(r.height) : r.height) / l;
    return u && Number.isFinite(u) || (u = 1), c && Number.isFinite(c) || (c = 1), { x: u, y: c };
  }
  const Vg = Ir(0);
  function Zc(n) {
    const t = Xn(n);
    return zs() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : Vg;
  }
  function Da(n, t, r, a) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const l = n.getBoundingClientRect(), o = $s(n);
    let u = Ir(1);
    t && (a ? kr(a) && (u = ai(a)) : u = ai(n));
    const c = (function(p, v, b) {
      return v === void 0 && (v = !1), !(!b || v && b !== Xn(p)) && v;
    })(o, r, a) ? Zc(o) : Ir(0);
    let i = (l.left + c.x) / u.x, s = (l.top + c.y) / u.y, g = l.width / u.x, h = l.height / u.y;
    if (o) {
      const p = Xn(o), v = a && kr(a) ? Xn(a) : a;
      let b = p, y = Ds(b);
      for (; y && a && v !== b; ) {
        const m = ai(y), C = y.getBoundingClientRect(), P = yr(y), B = C.left + (y.clientLeft + parseFloat(P.paddingLeft)) * m.x, O = C.top + (y.clientTop + parseFloat(P.paddingTop)) * m.y;
        i *= m.x, s *= m.y, g *= m.x, h *= m.y, i += B, s += O, b = Xn(y), y = Ds(b);
      }
    }
    return Dl({ width: g, height: h, x: i, y: s });
  }
  function ql(n, t) {
    const r = Vl(n).scrollLeft;
    return t ? t.left + r : Da(Mr(n)).left + r;
  }
  function Jc(n, t) {
    const r = n.getBoundingClientRect();
    return { x: r.left + t.scrollLeft - ql(n, r), y: r.top + t.scrollTop };
  }
  const qg = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function Yc(n, t, r) {
    let a;
    if (t === "viewport") a = (function(l, o) {
      const u = Xn(l), c = Mr(l), i = u.visualViewport;
      let s = c.clientWidth, g = c.clientHeight, h = 0, p = 0;
      if (i) {
        s = i.width, g = i.height;
        const b = zs();
        (!b || b && o === "fixed") && (h = i.offsetLeft, p = i.offsetTop);
      }
      const v = ql(c);
      if (v <= 0) {
        const b = c.ownerDocument, y = b.body, m = getComputedStyle(y), C = b.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, P = Math.abs(c.clientWidth - y.clientWidth - C);
        P <= 25 && (s -= P);
      } else v <= 25 && (s += v);
      return { width: s, height: g, x: h, y: p };
    })(n, r);
    else if (t === "document") a = (function(l) {
      const o = Mr(l), u = Vl(l), c = l.ownerDocument.body, i = Ma(o.scrollWidth, o.clientWidth, c.scrollWidth, c.clientWidth), s = Ma(o.scrollHeight, o.clientHeight, c.scrollHeight, c.clientHeight);
      let g = -u.scrollLeft + ql(l);
      const h = -u.scrollTop;
      return yr(c).direction === "rtl" && (g += Ma(o.clientWidth, c.clientWidth) - i), { width: i, height: s, x: g, y: h };
    })(Mr(n));
    else if (kr(t)) a = (function(l, o) {
      const u = Da(l, !0, o === "fixed"), c = u.top + l.clientTop, i = u.left + l.clientLeft, s = zr(l) ? ai(l) : Ir(1);
      return { width: l.clientWidth * s.x, height: l.clientHeight * s.y, x: i * s.x, y: c * s.y };
    })(t, r);
    else {
      const l = Zc(n);
      a = { x: t.x - l.x, y: t.y - l.y, width: t.width, height: t.height };
    }
    return Dl(a);
  }
  function Kc(n, t) {
    const r = oa(n);
    return !(r === t || !kr(r) || ri(r)) && (yr(r).position === "fixed" || Kc(r, t));
  }
  function Tg(n, t, r) {
    const a = zr(t), l = Mr(t), o = r === "fixed", u = Da(n, !0, o, t);
    let c = { scrollLeft: 0, scrollTop: 0 };
    const i = Ir(0);
    function s() {
      i.x = ql(l);
    }
    if (a || !a && !o) if ((ni(t) !== "body" || Gi(l)) && (c = Vl(t)), a) {
      const h = Da(t, !0, o, t);
      i.x = h.x + t.clientLeft, i.y = h.y + t.clientTop;
    } else l && s();
    o && !a && l && s();
    const g = !l || a || o ? Ir(0) : Jc(l, c);
    return { x: u.left + c.scrollLeft - i.x - g.x, y: u.top + c.scrollTop - i.y - g.y, width: u.width, height: u.height };
  }
  function As(n) {
    return yr(n).position === "static";
  }
  function Xc(n, t) {
    if (!zr(n) || yr(n).position === "fixed") return null;
    if (t) return t(n);
    let r = n.offsetParent;
    return Mr(n) === r && (r = r.ownerDocument.body), r;
  }
  function eu(n, t) {
    const r = Xn(n);
    if (Al(n)) return r;
    if (!zr(n)) {
      let l = oa(n);
      for (; l && !ri(l); ) {
        if (kr(l) && !As(l)) return l;
        l = oa(l);
      }
      return r;
    }
    let a = Xc(n, t);
    for (; a && Ig(a) && As(a); ) a = Xc(a, t);
    return a && ri(a) && As(a) && !Ms(a) ? r : a || (function(l) {
      let o = oa(l);
      for (; zr(o) && !ri(o); ) {
        if (Ms(o)) return o;
        if (Al(o)) return null;
        o = oa(o);
      }
      return null;
    })(n) || r;
  }
  const Gg = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
    let { elements: t, rect: r, offsetParent: a, strategy: l } = n;
    const o = l === "fixed", u = Mr(a), c = !!t && Al(t.floating);
    if (a === u || c && o) return r;
    let i = { scrollLeft: 0, scrollTop: 0 }, s = Ir(1);
    const g = Ir(0), h = zr(a);
    if ((h || !h && !o) && ((ni(a) !== "body" || Gi(u)) && (i = Vl(a)), zr(a))) {
      const v = Da(a);
      s = ai(a), g.x = v.x + a.clientLeft, g.y = v.y + a.clientTop;
    }
    const p = !u || h || o ? Ir(0) : Jc(u, i);
    return { width: r.width * s.x, height: r.height * s.y, x: r.x * s.x - i.scrollLeft * s.x + g.x + p.x, y: r.y * s.y - i.scrollTop * s.y + g.y + p.y };
  }, getDocumentElement: Mr, getClippingRect: function(n) {
    let { element: t, boundary: r, rootBoundary: a, strategy: l } = n;
    const o = [...r === "clippingAncestors" ? Al(t) ? [] : (function(i, s) {
      const g = s.get(i);
      if (g) return g;
      let h = Oi(i, [], !1).filter((y) => kr(y) && ni(y) !== "body"), p = null;
      const v = yr(i).position === "fixed";
      let b = v ? oa(i) : i;
      for (; kr(b) && !ri(b); ) {
        const y = yr(b), m = Ms(b);
        m || y.position !== "fixed" || (p = null), (v ? !m && !p : !m && y.position === "static" && p && qg.has(p.position) || Gi(b) && !m && Kc(i, b)) ? h = h.filter((C) => C !== b) : p = y, b = oa(b);
      }
      return s.set(i, h), h;
    })(t, this._c) : [].concat(r), a], u = o[0], c = o.reduce((i, s) => {
      const g = Yc(t, s, l);
      return i.top = Ma(g.top, i.top), i.right = Sl(g.right, i.right), i.bottom = Sl(g.bottom, i.bottom), i.left = Ma(g.left, i.left), i;
    }, Yc(t, u, l));
    return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
  }, getOffsetParent: eu, getElementRects: async function(n) {
    const t = this.getOffsetParent || eu, r = this.getDimensions, a = await r(n.floating);
    return { reference: Tg(n.reference, await t(n.floating), n.strategy), floating: { x: 0, y: 0, width: a.width, height: a.height } };
  }, getClientRects: function(n) {
    return Array.from(n.getClientRects());
  }, getDimensions: function(n) {
    const { width: t, height: r } = Hc(n);
    return { width: t, height: r };
  }, getScale: ai, isElement: kr, isRTL: function(n) {
    return yr(n).direction === "rtl";
  } };
  function tu(n, t) {
    return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
  }
  function Og(n, t, r, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: l = !0, ancestorResize: o = !0, elementResize: u = typeof ResizeObserver == "function", layoutShift: c = typeof IntersectionObserver == "function", animationFrame: i = !1 } = a, s = $s(n), g = l || o ? [...s ? Oi(s) : [], ...Oi(t)] : [];
    g.forEach((m) => {
      l && m.addEventListener("scroll", r, { passive: !0 }), o && m.addEventListener("resize", r);
    });
    const h = s && c ? (function(m, C) {
      let P, B = null;
      const O = Mr(m);
      function I() {
        var E;
        clearTimeout(P), (E = B) == null || E.disconnect(), B = null;
      }
      return (function E(Z, G) {
        Z === void 0 && (Z = !1), G === void 0 && (G = 1), I();
        const ce = m.getBoundingClientRect(), { left: H, top: W, width: J, height: Q } = ce;
        if (Z || C(), !J || !Q) return;
        const U = { rootMargin: -Cl(W) + "px " + -Cl(O.clientWidth - (H + J)) + "px " + -Cl(O.clientHeight - (W + Q)) + "px " + -Cl(H) + "px", threshold: Ma(0, Sl(1, G)) || 1 };
        let z = !0;
        function D(j) {
          const Y = j[0].intersectionRatio;
          if (Y !== G) {
            if (!z) return E();
            Y ? E(!1, Y) : P = setTimeout(() => {
              E(!1, 1e-7);
            }, 1e3);
          }
          Y !== 1 || tu(ce, m.getBoundingClientRect()) || E(), z = !1;
        }
        try {
          B = new IntersectionObserver(D, { ...U, root: O.ownerDocument });
        } catch {
          B = new IntersectionObserver(D, U);
        }
        B.observe(m);
      })(!0), I;
    })(s, r) : null;
    let p, v = -1, b = null;
    u && (b = new ResizeObserver((m) => {
      let [C] = m;
      C && C.target === s && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        var P;
        (P = b) == null || P.observe(t);
      })), r();
    }), s && !i && b.observe(s), b.observe(t));
    let y = i ? Da(n) : null;
    return i && (function m() {
      const C = Da(n);
      y && !tu(y, C) && r(), y = C, p = requestAnimationFrame(m);
    })(), r(), () => {
      var m;
      g.forEach((C) => {
        l && C.removeEventListener("scroll", r), o && C.removeEventListener("resize", r);
      }), h == null || h(), (m = b) == null || m.disconnect(), b = null, i && cancelAnimationFrame(p);
    };
  }
  const Fg = function(n) {
    return { name: "offset", options: n, async fn(t) {
      var r, a;
      const { x: l, y: o, placement: u, middlewareData: c } = t, i = await (async function(s, g) {
        const { placement: h, platform: p, elements: v } = s, b = await (p.isRTL == null ? void 0 : p.isRTL(v.floating)), y = za(h), m = Ml(h), C = sa(h) === "y", P = Sg.has(y) ? -1 : 1, B = b && C ? -1 : 1, O = Il(g, s);
        let { mainAxis: I, crossAxis: E, alignmentAxis: Z } = typeof O == "number" ? { mainAxis: O, crossAxis: 0, alignmentAxis: null } : { mainAxis: O.mainAxis || 0, crossAxis: O.crossAxis || 0, alignmentAxis: O.alignmentAxis };
        return m && typeof Z == "number" && (E = m === "end" ? -1 * Z : Z), C ? { x: E * B, y: I * P } : { x: I * P, y: E * B };
      })(t, n);
      return u === ((r = c.offset) == null ? void 0 : r.placement) && (a = c.arrow) != null && a.alignmentOffset ? {} : { x: l + i.x, y: o + i.y, data: { ...i, placement: u } };
    } };
  }, Lg = function(n) {
    return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
      const { x: r, y: a, placement: l } = t, { mainAxis: o = !0, crossAxis: u = !1, limiter: c = { fn: (m) => {
        let { x: C, y: P } = m;
        return { x: C, y: P };
      } }, ...i } = Il(n, t), s = { x: r, y: a }, g = await Qc(t, i), h = sa(za(l)), p = Oc(h);
      let v = s[p], b = s[h];
      if (o) {
        const m = p === "y" ? "bottom" : "right";
        v = Gc(v + g[p === "y" ? "top" : "left"], v, v - g[m]);
      }
      if (u) {
        const m = h === "y" ? "bottom" : "right";
        b = Gc(b + g[h === "y" ? "top" : "left"], b, b - g[m]);
      }
      const y = c.fn({ ...t, [p]: v, [h]: b });
      return { ...y, data: { x: y.x - r, y: y.y - a, enabled: { [p]: o, [h]: u } } };
    } };
  }, jg = function(n) {
    return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
      var r, a;
      const { placement: l, middlewareData: o, rects: u, initialPlacement: c, platform: i, elements: s } = t, { mainAxis: g = !0, crossAxis: h = !0, fallbackPlacements: p, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: b = "none", flipAlignment: y = !0, ...m } = Il(n, t);
      if ((r = o.arrow) != null && r.alignmentOffset) return {};
      const C = za(l), P = sa(c), B = za(c) === c, O = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)), I = p || (B || !y ? [zl(c)] : (function(U) {
        const z = zl(U);
        return [Is(U), z, Is(z)];
      })(c)), E = b !== "none";
      !p && E && I.push(...Pg(c, y, b, O));
      const Z = [c, ...I], G = await Qc(t, m), ce = [];
      let H = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (g && ce.push(G[C]), h) {
        const U = (function(z, D, j) {
          j === void 0 && (j = !1);
          const Y = Ml(z), K = Lc(z), ee = Fc(K);
          let q = K === "x" ? Y === (j ? "end" : "start") ? "right" : "left" : Y === "start" ? "bottom" : "top";
          return D.reference[ee] > D.floating[ee] && (q = zl(q)), [q, zl(q)];
        })(l, u, O);
        ce.push(G[U[0]], G[U[1]]);
      }
      if (H = [...H, { placement: l, overflows: ce }], !ce.every((U) => U <= 0)) {
        var W, J;
        const U = (((W = o.flip) == null ? void 0 : W.index) || 0) + 1, z = Z[U];
        if (z && (!(h === "alignment" && P !== sa(z)) || H.every((j) => sa(j.placement) !== P || j.overflows[0] > 0)))
          return { data: { index: U, overflows: H }, reset: { placement: z } };
        let D = (J = H.filter((j) => j.overflows[0] <= 0).sort((j, Y) => j.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!D) switch (v) {
          case "bestFit": {
            var Q;
            const j = (Q = H.filter((Y) => {
              if (E) {
                const K = sa(Y.placement);
                return K === P || K === "y";
              }
              return !0;
            }).map((Y) => [Y.placement, Y.overflows.filter((K) => K > 0).reduce((K, ee) => K + ee, 0)]).sort((Y, K) => Y[1] - K[1])[0]) == null ? void 0 : Q[0];
            j && (D = j);
            break;
          }
          case "initialPlacement":
            D = c;
        }
        if (l !== D) return { reset: { placement: D } };
      }
      return {};
    } };
  }, Eg = (n, t, r) => {
    const a = /* @__PURE__ */ new Map(), l = { platform: Gg, ...r }, o = { ...l.platform, _c: a };
    return (async (u, c, i) => {
      const { placement: s = "bottom", strategy: g = "absolute", middleware: h = [], platform: p } = i, v = h.filter(Boolean), b = await (p.isRTL == null ? void 0 : p.isRTL(c));
      let y = await p.getElementRects({ reference: u, floating: c, strategy: g }), { x: m, y: C } = Rc(y, s, b), P = s, B = {}, O = 0;
      for (let I = 0; I < v.length; I++) {
        const { name: E, fn: Z } = v[I], { x: G, y: ce, data: H, reset: W } = await Z({ x: m, y: C, initialPlacement: s, placement: P, strategy: g, middlewareData: B, rects: y, platform: p, elements: { reference: u, floating: c } });
        m = G != null ? G : m, C = ce != null ? ce : C, B = { ...B, [E]: { ...B[E], ...H } }, W && O <= 50 && (O++, typeof W == "object" && (W.placement && (P = W.placement), W.rects && (y = W.rects === !0 ? await p.getElementRects({ reference: u, floating: c, strategy: g }) : W.rects), { x: m, y: C } = Rc(y, P, b)), I = -1);
      }
      return { x: m, y: C, placement: P, strategy: g, middlewareData: B };
    })(n, t, { ...l, platform: o });
  };
  function er(n) {
    const t = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in t) if (n.includes(r)) return t[r];
    return "normal";
  }
  function tr(n) {
    return n.includes("italic") ? "italic" : "normal";
  }
  function Ee(n) {
    return `rgba(${n.red}, ${n.green}, ${n.blue}, ${n.alpha})`;
  }
  const Rg = { "SF Mono": '"SF Mono", ui-monospace, Menlo, monospace', Helvetica: '"Helvetica Neue", Helvetica, -apple-system, sans-serif', "New York": '"New York", ui-serif, Georgia, serif', "System UI": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" };
  function Qg(n) {
    var t;
    return (t = Rg[n]) != null ? t : `"${n}"`;
  }
  function dn(n) {
    return Object.entries(n).reduce((t, [r, a]) => (a && t.push(`--${r}:${a}`), t), []).join(";");
  }
  function nu(n) {
    var t, r;
    const { colors: a, fonts: l, cornerRadius: o, spacing: u, imageSize: c, imageCornerRadius: i, bundleBarsPerRow: s, dealBars: g } = n, h = a.border || a.primary, p = Math.min(g.length, s ? parseInt(s) : 3).toString();
    return dn({ "block-font-family": l.fontFamily ? Qg(l.fontFamily) : null, "block-title-color": Ee(a.title), "block-title-font-size": l.blockTitle.size + "px", "block-title-font-weight": er(l.blockTitle.style), "block-title-font-style": tr(l.blockTitle.style), "block-spacing": u == null ? void 0 : u.toString(), "bar-border-radius": (o || 0) + "px", "bar-background-color": Ee(a.background), "bar-selected-background-color": Ee(a.selectedBackground || a.background), "bar-border-color": Ee({ ...h, alpha: 0.3 * h.alpha }), "bar-selected-border-color": Ee(h), "block-block-title-color": Ee(a.blockTitle || a.title), "bar-title-color": Ee(a.title), "bar-title-font-size": l.title.size + "px", "bar-title-font-weight": er(l.title.style), "bar-title-font-style": tr(l.title.style), "bar-subtitle-color": Ee(a.subtitle), "bar-subtitle-font-size": l.subtitle.size + "px", "bar-subtitle-font-weight": er(l.subtitle.style), "bar-subtitle-font-style": tr(l.subtitle.style), "bar-price-color": Ee(a.price || a.title), "bar-full-price-color": Ee(a.fullPrice || a.subtitle), "bar-label-border-top-radius": (o ? o - 1 : 0) + "px", "bar-label-background-color": Ee(a.labelBackground), "bar-label-color": Ee(a.label), "bar-label-font-size": l.label.size + "px", "bar-label-font-weight": er(l.label.style), "bar-label-font-style": tr(l.label.style), "bar-most-popular-background-color": Ee(a.badgeBackground), "bar-most-popular-color": Ee(a.badgeText), "bar-variant-select-border-radius": (o || 0) / 2 + "px", "bar-image-size": (c || 48) + "px", "bar-image-border-radius": (i || 0) + "px", "kaching-bundle-products-image-border-radius": (o || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": l.unitLabel ? l.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": l.unitLabel ? er(l.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": l.unitLabel ? tr(l.unitLabel.style) : null, "bundle-bars-per-row": p, "kaching-collection-breaks-require-selection-background-color": ((t = n.collectionBreaks) == null ? void 0 : t.requireItemSelectionAlert) && Ee(n.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = n.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && Ee(n.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const ru = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Ng = (n) => {
    const t = n.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(t in ru)) return;
    const r = ru[t];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, Wg = (n, t) => ({ red: Math.max(0, n.red - Math.round(n.red * t)), green: Math.max(0, n.green - Math.round(n.green * t)), blue: Math.max(0, n.blue - Math.round(n.blue * t)), alpha: n.alpha });
  var Ug = V("<div></div>");
  function Tl(n, t) {
    Ye(t, !0);
    let r = k(t, "color", 7), a = k(t, "image", 7), l = k(t, "size", 7), o = k(t, "shape", 7), u = k(t, "unavailable", 7, !1);
    const c = d(() => r() ? (function(p) {
      p = p.replace(/^#/, "");
      let v = parseInt(p, 16);
      return { red: v >> 16 & 255, green: v >> 8 & 255, blue: 255 & v, alpha: 1 };
    })(r()) : null), i = d(() => {
      let p = { "kaching-swatch-size": `${l() - 2}px` };
      const v = { rounded: 20, circle: 50 }[o()];
      return v && (p = { ...p, "kaching-swatch-border-radius": `${v}%` }), a() ? p = { ...p, "kaching-swatch-image-url": `url(${a()})` } : e(c) && (p = { ...p, "kaching-swatch-color": Ee(e(c)), "kaching-swatch-border-color": Ee(Wg(e(c), 0.1)) }), dn(p);
    });
    var s = { get color() {
      return r();
    }, set color(p) {
      r(p), _();
    }, get image() {
      return a();
    }, set image(p) {
      a(p), _();
    }, get size() {
      return l();
    }, set size(p) {
      l(p), _();
    }, get shape() {
      return o();
    }, set shape(p) {
      o(p), _();
    }, get unavailable() {
      return u();
    }, set unavailable(p = !1) {
      u(p), _();
    } }, g = Ug();
    let h;
    return pe((p) => {
      h = At(g, 1, "kaching-bundles__swatch", null, h, p), Nt(g, e(i));
    }, [() => ({ "kaching-bundles__swatch--unavailable": u() })]), f(n, g), Ke(s);
  }
  function Et(n, t) {
    Ye(t, !0);
    let r = k(t, "element", 7, "button"), a = k(t, "class", 7), l = k(t, "onclick", 7), o = k(t, "onkeydown", 7), u = k(t, "data-value", 7), c = k(t, "title", 7), i = k(t, "id", 7), s = k(t, "role", 7), g = k(t, "aria-label", 7), h = k(t, "aria-expanded", 7), p = k(t, "aria-haspopup", 7), v = k(t, "aria-selected", 7), b = k(t, "aria-checked", 7), y = k(t, "aria-activedescendant", 7), m = k(t, "aria-controls", 7), C = k(t, "tabindex", 7), P = k(t, "disabled", 7, !1), B = k(t, "ref", 15);
    function O(G) {
      o() && (o()(G), G.defaultPrevented) || P() || G.key !== "Enter" && G.key !== " " || (G.preventDefault(), G.currentTarget.click());
    }
    function I(G) {
      var ce;
      if (P()) return G.preventDefault(), void G.stopPropagation();
      (ce = l()) == null || ce(G);
    }
    var E = { get element() {
      return r();
    }, set element(G = "button") {
      r(G), _();
    }, get class() {
      return a();
    }, set class(G) {
      a(G), _();
    }, get onclick() {
      return l();
    }, set onclick(G) {
      l(G), _();
    }, get onkeydown() {
      return o();
    }, set onkeydown(G) {
      o(G), _();
    }, get "data-value"() {
      return u();
    }, set "data-value"(G) {
      u(G), _();
    }, get title() {
      return c();
    }, set title(G) {
      c(G), _();
    }, get id() {
      return i();
    }, set id(G) {
      i(G), _();
    }, get role() {
      return s();
    }, set role(G) {
      s(G), _();
    }, get "aria-label"() {
      return g();
    }, set "aria-label"(G) {
      g(G), _();
    }, get "aria-expanded"() {
      return h();
    }, set "aria-expanded"(G) {
      h(G), _();
    }, get "aria-haspopup"() {
      return p();
    }, set "aria-haspopup"(G) {
      p(G), _();
    }, get "aria-selected"() {
      return v();
    }, set "aria-selected"(G) {
      v(G), _();
    }, get "aria-checked"() {
      return b();
    }, set "aria-checked"(G) {
      b(G), _();
    }, get "aria-activedescendant"() {
      return y();
    }, set "aria-activedescendant"(G) {
      y(G), _();
    }, get "aria-controls"() {
      return m();
    }, set "aria-controls"(G) {
      m(G), _();
    }, get tabindex() {
      return C();
    }, set tabindex(G) {
      C(G), _();
    }, get disabled() {
      return P();
    }, set disabled(G = !1) {
      P(G), _();
    }, get ref() {
      return B();
    }, set ref(G) {
      B(G), _();
    } }, Z = De();
    return dg(_e(Z), r, 0, (G, ce) => {
      xl(G, (W) => B(W), () => B()), pg(G, () => {
        var W, J;
        return { role: (W = s()) != null ? W : "button", tabindex: (J = C()) != null ? J : P() ? -1 : 0, class: a(), onclick: I, "data-value": u(), title: c(), id: i(), "aria-label": g(), "aria-expanded": h(), "aria-haspopup": p(), "aria-selected": v(), "aria-checked": b(), "aria-activedescendant": y(), "aria-controls": m(), "aria-disabled": P() ? "true" : void 0, onkeydown: O };
      });
      var H = De();
      yc(_e(H), t, "default", {}), f(ce, H);
    }), f(n, Z), Ke(E);
  }
  Ne(Tl, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), Ne(Et, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const au = "translations", $a = (n = {}) => {
    const t = Ur(iu(n));
    return Wa(au, t), { translate: t, setTranslations: (r) => {
      t.set(iu(r));
    } };
  }, Dt = () => {
    const n = Na(au);
    if (!n) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return n;
  }, iu = (n) => (t) => n[t] || t;
  function Vs(n) {
    return String.fromCharCode(64 + n);
  }
  async function sr(n, t, r = {}, a = !0) {
    a && await hs();
    const l = new CustomEvent(t, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    n.dispatchEvent(l);
  }
  function Rt(n) {
    return typeof n == "number" ? n : Number(n.split("/").pop());
  }
  function or(n) {
    const t = n.variants.filter((r) => r.availableForSale);
    return t.length > 0 ? { ...n, variants: t } : n;
  }
  var Hg = V("<span> <!></span>"), Zg = V("<span> </span>"), Jg = V("<!> <!>", 1), Yg = V("<span> <!></span>"), Kg = V("<span> </span>"), Xg = V("<!> <!>", 1), eh = V('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), th = V('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function lu(n, t) {
    Ye(t, !0);
    const r = () => Ie(C, "$translate", a), [a, l] = kt();
    let o = k(t, "option", 7), u = k(t, "swatchSize", 7), c = k(t, "swatchShape", 7), i = k(t, "value", 7), s = k(t, "onChange", 7), g = Te(!1), h = Te(-1), p = Te(void 0), v = Te(void 0), b = d(() => o().optionValues.find((Q) => Q.name === i()) || o().optionValues[0]);
    const y = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function m(Q) {
      return `${y}-option-${Q}`;
    }
    const C = Dt();
    function P() {
      re(g, !0), re(h, o().optionValues.findIndex((Q) => Q.name === i()), !0), e(h) === -1 && re(h, 0);
    }
    function B() {
      re(g, !1), re(h, -1);
    }
    function O() {
      var Q;
      B(), (Q = e(p)) == null || Q.focus();
    }
    function I(Q) {
      i(Q), O();
      try {
        const U = o().optionValues.find((z) => z.name === Q);
        U != null && U.unavailable && sr(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (U) {
        console.error(U);
      }
      s()(i());
    }
    function E(Q, U) {
      const z = (D) => {
        Q.contains(D.target) || U();
      };
      return document.addEventListener("click", z, !0), { destroy() {
        document.removeEventListener("click", z, !0);
      } };
    }
    Je(() => {
      if (e(g) && e(p) && e(v)) return Og(e(p), e(v), async () => {
        if (!e(p) || !e(v)) return;
        const Q = e(v), { x: U, y: z } = await Eg(e(p), Q, { placement: "bottom-start", strategy: "fixed", middleware: [Fg(2), jg(), Lg({ padding: 8 })] });
        Q.style.left = `${U}px`, Q.style.top = `${z}px`;
      });
    });
    var Z = { get option() {
      return o();
    }, set option(Q) {
      o(Q), _();
    }, get swatchSize() {
      return u();
    }, set swatchSize(Q) {
      u(Q), _();
    }, get swatchShape() {
      return c();
    }, set swatchShape(Q) {
      c(Q), _();
    }, get value() {
      return i();
    }, set value(Q) {
      i(Q), _();
    }, get onChange() {
      return s();
    }, set onChange(Q) {
      s(Q), _();
    } }, G = th(), ce = w(G);
    {
      let Q = d(() => e(g) && e(h) >= 0 ? m(e(h)) : void 0);
      Et(ce, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return o().name;
      }, onclick: function(U) {
        e(g) ? (re(g, !1), re(h, -1)) : P(), U.preventDefault();
      }, onkeydown: function(U) {
        if (!e(g)) return void (U.key !== "ArrowDown" && U.key !== "ArrowUp" && U.key !== "Enter" && U.key !== " " || (U.preventDefault(), P()));
        const z = o().optionValues.length;
        switch (U.key) {
          case "Escape":
            U.preventDefault(), O();
            break;
          case "ArrowDown":
            U.preventDefault(), re(h, e(h) < z - 1 ? e(h) + 1 : 0, !0);
            break;
          case "ArrowUp":
            U.preventDefault(), re(h, e(h) > 0 ? e(h) - 1 : z - 1, !0);
            break;
          case "Home":
            U.preventDefault(), re(h, 0);
            break;
          case "End":
            U.preventDefault(), re(h, z - 1);
            break;
          case "Enter":
          case " ":
            U.preventDefault(), e(h) >= 0 && I(o().optionValues[e(h)].name);
        }
      }, get "aria-expanded"() {
        return e(g);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return y;
      }, get "aria-activedescendant"() {
        return e(Q);
      }, get ref() {
        return e(p);
      }, set ref(U) {
        re(p, U, !0);
      }, children: (U, z) => {
        var D = Jg(), j = _e(D);
        Tl(j, { get color() {
          return e(b).swatch.color;
        }, get image() {
          return e(b).swatch.image;
        }, get size() {
          return u();
        }, get shape() {
          return c();
        }, get unavailable() {
          return e(b).unavailable;
        } }), Xe(F(j, 2), () => e(b).name, (Y) => {
          var K = De(), ee = _e(K), q = (T) => {
            var M = Hg(), R = w(M);
            Ge(F(R), () => r()("system.unavailable_option_value")), x(M), pe(() => {
              var ae;
              return mt(R, `${(ae = e(b).name) != null ? ae : ""} - `);
            }), f(T, M);
          }, S = (T) => {
            var M = Zg(), R = w(M, !0);
            x(M), pe(() => mt(R, e(b).name)), f(T, M);
          };
          L(ee, (T) => {
            e(b).unavailable ? T(q) : T(S, !1);
          }), f(Y, K);
        }), f(U, D);
      }, $$slots: { default: !0 } });
    }
    var H = F(ce, 2), W = (Q) => {
      var U = eh();
      Zt(U, 23, () => o().optionValues, (z) => z.name, (z, D, j) => {
        {
          let Y = d(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(j) === e(h) && "kaching-bundles__swatch-dropdown__option--focused"]), K = d(() => m(e(j))), ee = d(() => e(D).name === i());
          Et(z, { element: "span", get class() {
            return e(Y);
          }, get id() {
            return e(K);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(ee);
          }, get "data-value"() {
            return e(D).name;
          }, onclick: () => I(e(D).name), children: (q, S) => {
            var T = Xg(), M = _e(T);
            {
              let A = d(() => 1.333 * u());
              Tl(M, { get color() {
                return e(D).swatch.color;
              }, get image() {
                return e(D).swatch.image;
              }, get size() {
                return e(A);
              }, get shape() {
                return c();
              }, get unavailable() {
                return e(D).unavailable;
              } });
            }
            var R = F(M, 2), ae = (A) => {
              var $ = Yg(), ne = w($);
              Ge(F(ne), () => r()("system.unavailable_option_value")), x($), pe(() => {
                var te;
                return mt(ne, `${(te = e(D).name) != null ? te : ""} - `);
              }), f(A, $);
            }, N = (A) => {
              var $ = Kg(), ne = w($, !0);
              x($), pe(() => mt(ne, e(D).name)), f(A, $);
            };
            L(R, (A) => {
              e(D).unavailable ? A(ae) : A(N, !1);
            }), f(q, T);
          }, $$slots: { default: !0 } });
        }
      }), x(U), xl(U, (z) => re(v, z), () => e(v)), pe(() => Pe(U, "id", y)), f(Q, U);
    };
    L(H, (Q) => {
      e(g) && Q(W);
    }), x(G), ys(G, (Q, U) => E == null ? void 0 : E(Q, U), () => B), pe(() => {
      Pe(G, "data-name", o().name), Pe(G, "data-value", i());
    }), f(n, G);
    var J = Ke(Z);
    return l(), J;
  }
  function nh(n, t, r) {
    try {
      const a = t().optionValues.find((l) => l.name === n.target.value);
      a != null && a.unavailable && sr(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (a) {
      console.error(a);
    }
    r()(n.target.value);
  }
  Ne(lu, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0);
  var rh = V(" <!>", 1), ah = V('<option class="kaching-bundles-option-value"><!></option>'), ih = V('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"></select>');
  function su(n, t) {
    Ye(t, !0);
    const [r, a] = kt();
    let l = k(t, "option", 7), o = k(t, "value", 7), u = k(t, "onChange", 7);
    const c = Dt();
    var i, s = { get option() {
      return l();
    }, set option(p) {
      l(p), _();
    }, get value() {
      return o();
    }, set value(p) {
      o(p), _();
    }, get onChange() {
      return u();
    }, set onChange(p) {
      u(p), _();
    } }, g = ih();
    g.__change = [nh, l, u], Zt(g, 21, () => l().optionValues, (p) => p.name, (p, v) => {
      var b = ah(), y = w(b), m = (B) => {
        var O = rh(), I = _e(O);
        Ge(F(I), () => Ie(c, "$translate", r)("system.unavailable_option_value")), pe(() => {
          var E;
          return mt(I, `${(E = e(v).name) != null ? E : ""} - `);
        }), f(B, O);
      }, C = (B) => {
        var O = Tn();
        pe(() => mt(O, e(v).name)), f(B, O);
      };
      L(y, (B) => {
        e(v).unavailable ? B(m) : B(C, !1);
      }), x(b);
      var P = {};
      pe(() => {
        var B;
        Pe(b, "data-value", e(v).name), P !== (P = e(v).name) && (b.value = (B = b.__value = e(v).name) != null ? B : "");
      }), f(p, b);
    }), x(g), Ps(g), pe(() => {
      var p;
      Pe(g, "aria-label", l().name), Pe(g, "data-name", l().name), Pe(g, "data-value", o()), i !== (i = o()) && (g.value = (p = g.__value = o()) != null ? p : "", $i(g, o()));
    }), f(n, g);
    var h = Ke(s);
    return a(), h;
  }
  Dn(["change"]), Ne(su, { option: {}, value: {}, onChange: {} }, [], [], !0);
  var lh = V('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function ou(n, t) {
    Ye(t, !0);
    const [r, a] = kt();
    let l = k(t, "option", 7), o = k(t, "swatchSize", 7), u = k(t, "swatchShape", 7), c = k(t, "value", 7), i = k(t, "onChange", 7);
    const s = Dt();
    var g = { get option() {
      return l();
    }, set option(v) {
      l(v), _();
    }, get swatchSize() {
      return o();
    }, set swatchSize(v) {
      o(v), _();
    }, get swatchShape() {
      return u();
    }, set swatchShape(v) {
      u(v), _();
    }, get value() {
      return c();
    }, set value(v) {
      c(v), _();
    }, get onChange() {
      return i();
    }, set onChange(v) {
      i(v), _();
    } }, h = lh();
    Zt(h, 21, () => l().optionValues, (v) => v.name, (v, b) => {
      {
        let y = d(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(b).name === c() && "kaching-bundles__swatch-buttons__button--selected"]), m = d(() => e(b).unavailable ? `${e(b).name} - ${Ie(s, "$translate", r)("system.unavailable_option_value")}` : e(b).name);
        Et(v, { element: "span", get class() {
          return e(y);
        }, get title() {
          return e(b).name;
        }, get "aria-label"() {
          return e(m);
        }, get "data-value"() {
          return e(b).name;
        }, onclick: () => (function(C) {
          c(C);
          try {
            const P = l().optionValues.find((B) => B.name === C);
            P != null && P.unavailable && sr(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (P) {
            console.error(P);
          }
          i()(c());
        })(e(b).name), children: (C, P) => {
          Tl(C, { get color() {
            return e(b).swatch.color;
          }, get image() {
            return e(b).swatch.image;
          }, get size() {
            return o();
          }, get shape() {
            return u();
          }, get unavailable() {
            return e(b).unavailable;
          } });
        }, $$slots: { default: !0 } });
      }
    }), x(h), pe(() => {
      Pe(h, "data-name", l().name), Pe(h, "data-value", c());
    }), f(n, h);
    var p = Ke(g);
    return a(), p;
  }
  function cu(n, t) {
    Ye(t, !0);
    let r = k(t, "value", 7), a = k(t, "option", 7), l = k(t, "swatchSize", 7, 18), o = k(t, "swatchShape", 7, "circle"), u = k(t, "swatchType", 7), c = k(t, "onChange", 7);
    function i(b) {
      c()({ position: a().position, value: b });
    }
    var s = { get value() {
      return r();
    }, set value(b) {
      r(b), _();
    }, get option() {
      return a();
    }, set option(b) {
      a(b), _();
    }, get swatchSize() {
      return l();
    }, set swatchSize(b = 18) {
      l(b), _();
    }, get swatchShape() {
      return o();
    }, set swatchShape(b = "circle") {
      o(b), _();
    }, get swatchType() {
      return u();
    }, set swatchType(b) {
      u(b), _();
    }, get onChange() {
      return c();
    }, set onChange(b) {
      c(b), _();
    } }, g = De(), h = _e(g), p = (b) => {
      lu(b, { get option() {
        return a();
      }, get swatchSize() {
        return l();
      }, get swatchShape() {
        return o();
      }, get value() {
        return r();
      }, onChange: i });
    }, v = (b) => {
      var y = De(), m = _e(y), C = (B) => {
        ou(B, { get option() {
          return a();
        }, get swatchSize() {
          return l();
        }, get swatchShape() {
          return o();
        }, get value() {
          return r();
        }, onChange: i });
      }, P = (B) => {
        su(B, { get option() {
          return a();
        }, get value() {
          return r();
        }, onChange: i });
      };
      L(m, (B) => {
        u() === "colorButtons" || u() === "imageButtons" || u() === "productImageButtons" ? B(C) : B(P, !1);
      }, !0), f(b, y);
    };
    return L(h, (b) => {
      u() === "colorDropdown" || u() === "imageDropdown" || u() === "productImageDropdown" || u() === "mixedDropdown" ? b(p) : b(v, !1);
    }), f(n, g), Ke(s);
  }
  Ne(ou, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0), Ne(cu, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, onChange: {} }, [], [], !0);
  const uu = "mediaImages", Fi = (n = []) => {
    const t = Ur(du(n));
    return Wa(uu, t), { getMediaImageUrl: t, setMediaImages: (r) => {
      t.set(du(r));
    } };
  }, An = () => {
    const n = Na(uu);
    if (!n) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return n;
  }, du = (n) => (t) => {
    if (!t) return;
    const r = n.find((a) => a.gid === t);
    return r == null ? void 0 : r.url;
  }, gu = "config", Aa = (n) => {
    const t = Ur(n);
    return Wa(gu, t), { config: t, setConfig: (r) => {
      t.set(r);
    } };
  }, fn = () => {
    const n = Na(gu);
    if (!n) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return n;
  };
  var sh = V('<img alt="" class="kaching-bundles__bar-variant-image"/>'), oh = V('<div class="kaching-bundles__bar-variant-number"><span>#</span> <span> </span></div>'), ch = V('<span class="kaching-bundles__bar-variant-option__name-value"> </span>'), uh = V('<div class="kaching-bundles__bar-variant-option"><span class="kaching-bundles__bar-variant-option__name"><span class="kaching-bundles__bar-variant-option__name-label"> </span> <!></span> <!></div>'), dh = V('<div class="kaching-bundles__invalid-variant-error"><!></div>'), gh = V('<div><div><!> <div class="kaching-bundles__bar-variant-main"><div class="kaching-bundles__bar-variant-selects"></div> <!></div></div></div>');
  function Gn(n, t) {
    Ye(t, !0);
    const r = () => Ie(m, "$config", l), a = () => Ie(C, "$swatchSettings", l), [l, o] = kt(), u = (N, A = Fr) => {
      cu(N, { get option() {
        return A();
      }, get swatchSize() {
        return a().swatchSize;
      }, get swatchShape() {
        return a().swatchShape;
      }, get swatchType() {
        return A().swatchType;
      }, get value() {
        return e(B)[A().position - 1];
      }, onChange: G });
    };
    let c = k(t, "product", 7), i = k(t, "selectedVariantId", 7), s = k(t, "number", 7, void 0), g = k(t, "showImage", 7, !1), h = k(t, "forceDropdown", 7, !1), p = k(t, "onChange", 7), v = k(t, "onOptionChange", 7);
    const b = Dt(), y = An(), m = fn(), C = Tc();
    let P = d(() => c().variants.find((N) => N.id === i())), B = Te(lt([]));
    Je(() => {
      if (e(P)) re(B, [...e(P).options], !0);
      else {
        if (i() && r().featureFlags.hide_missing_variants && c().variants.length > 0) {
          const N = Q(c().variants, 0, e(B));
          if (N) return re(B, [...N.options], !0), void en(() => p()(N.id));
        }
        re(B, [], !0);
      }
    });
    let O = d(() => {
      return N = c(), A = e(B), $ = a().swatchOptions, ne = Ie(y, "$getMediaImageUrl", l), te = h(), N.options.map((ie) => ({ name: ie.name, position: ie.position, swatchType: ce(ie, $, te), optionValues: ie.optionValues.map((X) => {
        const ve = J(ie.position, X.name, A, N);
        if (r().featureFlags.hide_missing_variants && ve.length === 0) return null;
        const Be = !ve.some((oe) => oe.availableForSale);
        return { name: X.name, unavailable: Be, swatch: H(ie, X, $, ne, A, N) };
      }).filter((X) => X !== null) }));
      var N, A, $, ne, te;
    }), I = d(() => a().showSelectedSwatchName && !h());
    const E = ["colorButtons", "imageButtons", "productImageButtons"];
    let Z = d(() => {
      var N;
      return g() ? ((N = e(P)) == null ? void 0 : N.image) || c().image : null;
    });
    function G({ position: N, value: A }) {
      const $ = e(B)[N - 1];
      e(B)[N - 1] = A;
      let ne = c().variants.find((te) => e(B).every((ie, X) => te.options[X] === ie));
      if (!ne && r().featureFlags.hide_missing_variants) {
        const te = Q(J(N, A, e(B), c()), N, e(B));
        te && (ne = te, re(B, [...ne.options], !0));
      }
      ne && (p()(ne.id), v() && v()(N, A, $));
    }
    function ce(N, A, $) {
      var ne;
      const te = (ne = A.find((ie) => ie.name === N.defaultName)) == null ? void 0 : ne.swatchType;
      if (te && te !== "default") return $ ? (function(ie) {
        switch (ie) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          default:
            return ie;
        }
      })(te) : te;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const ie of N.optionValues) if (ie.swatch.image || ie.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function H(N, A, $, ne, te, ie) {
      var X, ve;
      const Be = r().featureFlags.native_swatches_disabled ? null : A.swatch, oe = $.find((fe) => fe.name === N.defaultName);
      if (!oe || oe.swatchType === "default") return Be || { color: null, image: null };
      if (oe.swatchType === "colorButtons" || oe.swatchType === "colorDropdown")
        return { color: W((X = oe.colors.find((fe) => fe.name === A.defaultName)) == null ? void 0 : X.color) || (Be == null ? void 0 : Be.color) || W(Ng(A.defaultName)) || null, image: null };
      if (oe.swatchType === "imageButtons" || oe.swatchType === "imageDropdown") {
        const fe = ne(((ve = oe.images.find((ke) => ke.name === A.defaultName)) == null ? void 0 : ve.mediaImageGID) || null);
        return { color: (Be == null ? void 0 : Be.color) || null, image: fe || (Be == null ? void 0 : Be.image) || null };
      }
      if (oe.swatchType === "productImageDropdown" || oe.swatchType === "productImageButtons") {
        const fe = N.position - 1, ke = ie.variants.filter((de) => de.image && de.options[fe] === A.name);
        let ze = ke[0], he = 0;
        for (const de of ke) {
          let be = 0;
          for (let we = 0; we < fe; we++) de.options[we] === te[we] && be++;
          be > he && (he = be, ze = de);
        }
        return { color: null, image: (ze == null ? void 0 : ze.image) || null };
      }
      return { color: null, image: null };
    }
    function W(N) {
      if (!N) return;
      const { red: A, green: $, blue: ne } = N;
      return `#${A.toString(16).padStart(2, "0")}${$.toString(16).padStart(2, "0")}${ne.toString(16).padStart(2, "0")}`;
    }
    function J(N, A, $, ne) {
      const te = N - 1, ie = $.slice(0, te);
      return ne.variants.filter((X) => X.options[te] === A && ie.every((ve, Be) => X.options[Be] === ve));
    }
    function Q(N, A, $) {
      if (N.length === 0) return null;
      let ne = N[0], te = -1;
      const ie = $.slice(A);
      for (const X of N) {
        let ve = 0;
        for (let Be = 0; Be < ie.length; Be++) X.options[A + Be] === ie[Be] && (ve += ie.length - Be);
        ve > te && (te = ve, ne = X);
      }
      return ne;
    }
    var U = { get product() {
      return c();
    }, set product(N) {
      c(N), _();
    }, get selectedVariantId() {
      return i();
    }, set selectedVariantId(N) {
      i(N), _();
    }, get number() {
      return s();
    }, set number(N = void 0) {
      s(N), _();
    }, get showImage() {
      return g();
    }, set showImage(N = !1) {
      g(N), _();
    }, get forceDropdown() {
      return h();
    }, set forceDropdown(N = !1) {
      h(N), _();
    }, get onChange() {
      return p();
    }, set onChange(N) {
      p(N), _();
    }, get onOptionChange() {
      return v();
    }, set onOptionChange(N) {
      v(N), _();
    } }, z = gh();
    let D;
    var j = w(z);
    let Y;
    var K = w(j), ee = (N) => {
      var A = sh();
      pe(() => Pe(A, "src", e(Z))), f(N, A);
    }, q = (N) => {
      var A = De(), $ = _e(A), ne = (te) => {
        var ie = oh(), X = F(w(ie), 2), ve = w(X, !0);
        x(X), x(ie), pe(() => mt(ve, s())), f(te, ie);
      };
      L($, (te) => {
        s() && te(ne);
      }, !0), f(N, A);
    };
    L(K, (N) => {
      e(Z) ? N(ee) : N(q, !1);
    });
    var S = F(K, 2), T = w(S);
    Zt(T, 21, () => e(O), (N) => N.name, (N, A) => {
      var $ = De(), ne = _e($), te = (X) => {
        var ve = uh(), Be = w(ve), oe = w(Be), fe = w(oe);
        x(oe);
        var ke = F(oe, 2), ze = (de) => {
          var be = ch(), we = w(be, !0);
          x(be), pe(() => mt(we, e(B)[e(A).position - 1])), f(de, be);
        };
        L(ke, (de) => {
          E.includes(e(A).swatchType) && de(ze);
        }), x(Be);
        var he = F(Be, 2);
        u(he, () => e(A)), x(ve), pe(() => {
          var de;
          return mt(fe, `${(de = e(A).name) != null ? de : ""}:`);
        }), f(X, ve);
      }, ie = (X) => {
        u(X, () => e(A));
      };
      L(ne, (X) => {
        e(I) ? X(te) : X(ie, !1);
      }), f(N, $);
    }), x(T);
    var M = F(T, 2), R = (N) => {
      var A = dh();
      Ge(w(A), () => Ie(b, "$translate", l)("system.invalid_variant")), x(A), f(N, A);
    };
    L(M, (N) => {
      e(P) && e(P).availableForSale || N(R);
    }), x(S), x(j), x(z), pe((N, A) => {
      D = At(z, 1, "kaching-bundles__bar-variant", null, D, N), Y = At(j, 1, "kaching-bundles__bar-variant__content", null, Y, A);
    }, [() => ({ "kaching-bundles__bar-variant--invalid": !e(P) || !e(P).availableForSale }), () => ({ "kaching-bundles__bar-variant__content--with-option-names": e(I) })]), f(n, z);
    var ae = Ke(U);
    return o(), ae;
  }
  Ne(Gn, { product: {}, selectedVariantId: {}, number: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var hh = V('<a target="_blank"><!></a>'), ph = V("<div><!></div>");
  function Rn(n, t) {
    Ye(t, !0);
    const r = k(t, "url", 7), a = k(t, "children", 7), l = k(t, "class", 7);
    var o = { get url() {
      return r();
    }, set url(g) {
      r(g), _();
    }, get children() {
      return a();
    }, set children(g) {
      a(g), _();
    }, get class() {
      return l();
    }, set class(g) {
      l(g), _();
    } }, u = De(), c = _e(u), i = (g) => {
      var h = hh();
      ms(w(h), a), x(h), pe(() => {
        Pe(h, "href", r()), At(h, 1, Di(l()));
      }), f(g, h);
    }, s = (g) => {
      var h = ph();
      ms(w(h), a), x(h), pe(() => At(h, 1, Di(l()))), f(g, h);
    };
    return L(c, (g) => {
      r() ? g(i) : g(s, !1);
    }), f(n, u), Ke(o);
  }
  Ne(Rn, { url: {}, children: {}, class: {} }, [], [], !0);
  const hu = "priceFormatter", ii = (n = "{{amount}}", t) => {
    const r = Ur(pu(n, t));
    return Wa(hu, r), { formatPrice: r, setMoneyFormat: (a, l) => {
      r.set(pu(a, l));
    } };
  }, sn = () => {
    const n = Na(hu);
    if (!n) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return n;
  }, pu = (n, t) => (r, a) => fh(r, n, (!(a != null && a.preserveDecimals) || Math.round(r) % 100 == 0) && t), fh = (n, t, r) => {
    const a = ((i, s) => s ? i.includes("amount_no_decimals") ? i : i.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : i)(t, r), l = { amount: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (i) => i.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (i) => i.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (i) => i.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, o = /{{\s*(\w+)\s*}}/, u = a.match(o), c = (l[u ? u[1] : "amount"] || l.amount)(n / 100);
    return a.replace(o, c);
  }, fu = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", bu = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var ht = ((n) => (n.QuantityBreak = "quantity-break", n.Bxgy = "bxgy", n.Bundle = "bundle", n.MixAndMatch = "mix-and-match", n.Sku = "sku", n))(ht || {});
  const bh = { new_price: ({ totalDiscountedPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), new_total: ({ totalDiscountedPrice: n }) => ({ value: n, type: "price" }), original_price: ({ totalFullPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), original_total: ({ totalFullPrice: n }) => ({ value: n, type: "price" }), saved_total: ({ totalCompareAtPrice: n, totalDiscountedPrice: t }) => ({ value: n - t, type: "price" }), saved_amount: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, quantity: r }) => ({ value: (n - t) / r, type: "price" }), quantity: ({ quantity: n }) => ({ value: n, type: "number" }), gifts_count: ({ freeGiftsCount: n }) => {
    if (n !== void 0) return { value: n, type: "number" };
  }, buy_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== ht.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: t - Math.floor(t / r) * n.getQuantity, type: "number" };
  }, get_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== ht.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: Math.floor(t / r) * n.getQuantity, type: "number" };
  }, saved_percentage: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, dealBar: r, legacySavedPercentage: a }) => {
    if (a && r && (r.dealBarType === ht.QuantityBreak || !r.dealBarType) && r.discountType === "percentage") return { value: Math.round(Number(r.discountValue)), type: "percentage" };
    if (n <= 0) return { value: 0, type: "percentage" };
    let l = (n - t) / n * 100;
    return l = Math.round(100 * l) / 100, { value: Math.round(l), type: "percentage" };
  }, new_unit_price: ({ totalDiscountedPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, saved_per_unit: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, unitQuantity: r }) => {
    if (r) return { value: (n - t) / r, type: "price", preserveDecimals: !0 };
  }, original_unit_price: ({ totalFullPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, unit_quantity: ({ unitQuantity: n }) => {
    if (n) return { value: n, type: "number" };
  }, selling_plan_discount: ({ sellingPlan: n, totalFullPrice: t, quantity: r }) => {
    const a = n == null ? void 0 : n.priceAdjustment;
    if (a) switch (a.type) {
      case "percentage":
        return a.value <= 0 ? void 0 : { value: a.value, type: "percentage" };
      case "fixed_amount":
        return a.value <= 0 ? void 0 : { value: a.value, type: "price" };
      case "price": {
        const l = t / r - a.value;
        return l <= 0 ? void 0 : { value: l, type: "price" };
      }
    }
  } }, vh = (n) => {
    if (!n) return;
    const t = n.options.join(" / ");
    return t && t !== "Default Title" ? t : void 0;
  }, _h = ({ variable: n, product: t, products: r, selectedProductTitles: a, selectedVariants: l, sellingPlan: o }) => {
    var u, c;
    const i = n.match(/^product_(\d+)$/);
    if (i) {
      const s = Number(i[1]);
      return (u = r == null ? void 0 : r.get(s)) == null ? void 0 : u.title;
    }
    switch (n) {
      case "product":
        return (c = t == null ? void 0 : t.title) != null ? c : a && a.length > 0 ? a.join(", ") : void 0;
      case "variant_title":
        return ((s) => {
          if (!s) return;
          const g = [];
          for (const { variant: h, quantity: p } of s) {
            const v = vh(h);
            if (!v) continue;
            const b = g.find((y) => y.title === v);
            b ? b.count += p : g.push({ title: v, count: p });
          }
          return g.length !== 0 ? g.length === 1 && g[0].count === 1 ? g[0].title : g.map(({ title: h, count: p }) => `${p}× ${h}`).join(", ") : void 0;
        })(l);
      case "metafield":
        return (t == null ? void 0 : t.metafields.text) || void 0;
      case "metafield2":
        return (t == null ? void 0 : t.metafields.text2) || void 0;
      case "metafield3":
        return (t == null ? void 0 : t.metafields.text3) || void 0;
      case "metafield4":
        return (t == null ? void 0 : t.metafields.text4) || void 0;
      case "selling_plan":
        return (o == null ? void 0 : o.name) || void 0;
    }
  }, vu = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, mh = /\{\{[^}]*\}\}/g, kh = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: l, totalFullPrice: o, totalCompareAtPrice: u, totalDiscountedPrice: c, quantity: i, dealBar: s, legacySavedPercentage: g, unitQuantity: h, sellingPlan: p, freeGiftsCount: v }) => (b, y, m) => {
    const C = bh[b];
    if (C) {
      const P = C({ totalFullPrice: o, totalCompareAtPrice: u != null ? u : o, totalDiscountedPrice: c, quantity: i, dealBar: s, legacySavedPercentage: g, unitQuantity: h, sellingPlan: p, freeGiftsCount: v });
      if (!P) return;
      let B = P.value;
      if (y !== void 0 && m !== void 0) {
        const I = ((E, Z, G) => {
          switch (Z) {
            case "+":
              return E + G;
            case "-":
              return E - G;
            case "*":
              return E * G;
            case "/":
              return G === 0 ? void 0 : E / G;
          }
        })(B, y, P.type !== "price" || y !== "+" && y !== "-" ? m : 100 * m);
        if (I === void 0) return;
        B = I;
      }
      const O = y === "/" || P.preserveDecimals === !0;
      return ((I, E, Z, G) => {
        switch (E) {
          case "price":
            return Z(I, { preserveDecimals: G });
          case "number":
            return String(Math.round(100 * I) / 100);
          case "percentage":
            return `${Math.round(I)}%`;
        }
      })(B, P.type, n, O);
    }
    if (y === void 0) return _h({ variable: b, product: t, products: r, selectedProductTitles: a, selectedVariants: l, sellingPlan: p });
  }, gn = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: l, totalFullPrice: o, totalCompareAtPrice: u, totalDiscountedPrice: c, quantity: i, dealBar: s, legacySavedPercentage: g = !1, unitQuantity: h, sellingPlan: p, freeGiftsCount: v }) => (b) => {
    if (!b) return b;
    const y = kh({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: l, totalFullPrice: o, totalCompareAtPrice: u, totalDiscountedPrice: c, quantity: i, dealBar: s, legacySavedPercentage: g, unitQuantity: h, sellingPlan: p, freeGiftsCount: v });
    return b.replace(vu, (m, C, P, B) => {
      var O;
      if (P && B) {
        const I = parseFloat(B);
        return (O = y(C, P, I)) != null ? O : "";
      }
      return y(C) || "";
    }).replace(mh, "");
  };
  function qs(n) {
    const { unitPriceMeasurement: t } = n;
    return t ? t.referenceValue == 1 ? t.referenceUnit : `${t.referenceValue}${t.referenceUnit}` : null;
  }
  function cr(n) {
    return n.reduce((t, { variant: r, quantity: a }) => {
      const { unitPriceMeasurement: l } = r;
      if (!l) return t;
      const o = (function(u, c, i) {
        if (c === i) return u;
        if (c === "g" && i === "kg" || c === "ml" && i === "l") return u / 1e3;
      })(l.quantityValue, l.quantityUnit, l.referenceUnit);
      return o ? t + o / l.referenceValue * a : t;
    }, 0) || null;
  }
  var yh = V('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), xh = V('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), wh = V('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), Ph = V('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), Sh = V('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), Bh = V('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), Ch = V('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), Ih = V('<img alt="Decrease"/>'), Mh = V('<img alt="Increase"/>'), zh = V('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), Dh = V("<img/>"), $h = V("<!> <!>", 1), Ah = V('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function _u(n, t) {
    Ye(t, !0);
    const r = () => Ie(m, "$formatPrice", l), a = () => Ie(y, "$translate", l), [l, o] = kt(), u = k(t, "product", 7), c = k(t, "dealBlock", 7), i = k(t, "multipleGiftsSelector", 7), s = k(t, "selectedVariantIds", 7), g = k(t, "availableQuantity", 7), h = k(t, "onSelect", 7), p = k(t, "onRemove", 7), v = k(t, "onVariantChange", 7), b = k(t, "onQuantityChange", 7), y = Dt(), m = sn();
    let C = Te(!1);
    const P = d(() => s().length > 0), B = d(() => s().length || 1), O = d(() => !e(P) && g() === 0), I = d(() => u().variants.find((fe) => fe.id === s()[0]) || u().variants[0]), E = d(() => e(C) && e(I).image || u().image), Z = d(() => s().map((fe) => u().variants.find((ke) => ke.id === fe) || u().variants[0])), G = d(() => e(Z).length > 0 ? e(Z).reduce((fe, ke) => fe + U(c(), ke), 0) : U(c(), e(I))), ce = d(() => u().url ? `${u().url}?variant=${s()[0] || u().variants[0].id}` : void 0), H = d(() => c().chooseMultipleGiftsModal), W = d(() => gn({ priceFormatter: r(), product: u(), totalFullPrice: e(G), totalDiscountedPrice: 0, quantity: e(B), unitQuantity: cr(e(Z).map((fe) => ({ variant: fe, quantity: 1 }))) })), J = d(() => {
      var fe;
      return e(W)(a()(((fe = e(H)) == null ? void 0 : fe.subtitle) || ""));
    }), Q = d(() => {
      var fe, ke;
      return e(P) ? (fe = e(H)) == null ? void 0 : fe.buttonTextAfterSelection : (ke = e(H)) == null ? void 0 : ke.buttonTextBeforeSelection;
    });
    function U(fe, ke) {
      return fe.useProductCompareAtPrice && ke.compareAtPrice ? Math.max(ke.price, ke.compareAtPrice) : ke.price;
    }
    function z() {
      e(B) <= 1 || b()(e(B) - 1);
    }
    function D() {
      e(B) >= g() || b()(e(B) + 1);
    }
    var j = { get product() {
      return u();
    }, set product(fe) {
      u(fe), _();
    }, get dealBlock() {
      return c();
    }, set dealBlock(fe) {
      c(fe), _();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(fe) {
      i(fe), _();
    }, get selectedVariantIds() {
      return s();
    }, set selectedVariantIds(fe) {
      s(fe), _();
    }, get availableQuantity() {
      return g();
    }, set availableQuantity(fe) {
      g(fe), _();
    }, get onSelect() {
      return h();
    }, set onSelect(fe) {
      h(fe), _();
    }, get onRemove() {
      return p();
    }, set onRemove(fe) {
      p(fe), _();
    }, get onVariantChange() {
      return v();
    }, set onVariantChange(fe) {
      v(fe), _();
    }, get onQuantityChange() {
      return b();
    }, set onQuantityChange(fe) {
      b(fe), _();
    } }, Y = Ah(), K = w(Y), ee = w(K), q = (fe) => {
      Rn(fe, { get url() {
        return e(ce);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (ke, ze) => {
        var he = yh();
        Pe(he, "width", 100), Pe(he, "height", 100), pe(() => Pe(he, "src", e(E))), f(ke, he);
      }, $$slots: { default: !0 } });
    };
    L(ee, (fe) => {
      e(E) && fe(q);
    });
    var S = F(ee, 2), T = w(S);
    Rn(T, { get url() {
      return e(ce);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (fe, ke) => {
      var ze = xh(), he = w(ze, !0);
      x(ze), pe(() => mt(he, u().title)), f(fe, ze);
    }, $$slots: { default: !0 } });
    var M = F(T, 2), R = (fe) => {
      var ke = wh();
      Ge(w(ke), () => e(J)), x(ke), f(fe, ke);
    };
    L(M, (fe) => {
      e(J) && fe(R);
    });
    var ae = F(M, 2), N = w(ae);
    Ge(w(N), () => a()("system.free")), x(N);
    var A = F(N, 2), $ = (fe) => {
      var ke = De();
      Xe(_e(ke), () => e(G), (ze) => {
        var he = Ph();
        Ge(w(he), () => r()(e(G))), x(he), f(ze, he);
      }), f(fe, ke);
    };
    L(A, (fe) => {
      i().showPrice && e(G) > 0 && fe($);
    }), x(ae);
    var ne = F(ae, 2), te = (fe) => {
      var ke = Ch();
      Zt(ke, 21, s, Nr, (ze, he, de) => {
        var be = Bh(), we = w(be), Le = w(we), Ce = ($e) => {
          Hr($e, { get product() {
            return u();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        L(Le, ($e) => {
          de === 0 && $e(Ce);
        });
        var Se = F(Le, 2), Qe = w(Se), xe = ($e) => {
          var ge = Sh();
          ge.textContent = `#${de + 1}`, f($e, ge);
        };
        L(Qe, ($e) => {
          s().length > 1 && $e(xe);
        });
        var ue = F(Qe, 2);
        Gn(w(ue), { get product() {
          return u();
        }, get selectedVariantId() {
          return e(he);
        }, onChange: ($e) => {
          re(C, !0), v()(de, $e);
        } }), x(ue), x(Se), x(we), x(be), f(ze, be);
      }), x(ke), f(fe, ke);
    };
    L(ne, (fe) => {
      u().variants.length > 1 && fe(te);
    }), x(S), x(K);
    var ie = F(K, 2), X = w(ie), ve = (fe) => {
      var ke = zh(), ze = w(ke);
      {
        let we = d(() => e(B) <= 1);
        Et(ze, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: z, get disabled() {
          return e(we);
        }, children: (Le, Ce) => {
          var Se = Ih();
          pe(() => Pe(Se, "src", fu)), f(Le, Se);
        }, $$slots: { default: !0 } });
      }
      var he = F(ze, 2), de = w(he, !0);
      x(he);
      var be = F(he, 2);
      {
        let we = d(() => e(B) >= g());
        Et(be, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: D, get disabled() {
          return e(we);
        }, children: (Le, Ce) => {
          var Se = Mh();
          pe(() => Pe(Se, "src", bu)), f(Le, Se);
        }, $$slots: { default: !0 } });
      }
      x(ke), pe(() => mt(de, e(B))), f(fe, ke);
    };
    L(X, (fe) => {
      e(P) && i().maxQuantity > 1 && fe(ve);
    });
    var Be = F(X, 2);
    {
      let fe = d(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(O) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(P) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Et(Be, { element: "span", get class() {
        return e(fe);
      }, onclick: function() {
        e(P) ? (re(C, !1), p()()) : h()();
      }, get disabled() {
        return e(O);
      }, children: (ke, ze) => {
        var he = $h(), de = _e(he), be = (Se) => {
          var Qe = Dh();
          pe((xe) => {
            Pe(Qe, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Pe(Qe, "alt", xe);
          }, [() => a()("system.remove")]), f(Se, Qe);
        };
        L(de, (Se) => {
          e(P) && Se(be);
        });
        var we = F(de, 2), Le = (Se) => {
          var Qe = Tn();
          pe((xe) => mt(Qe, xe), [() => a()(e(Q))]), f(Se, Qe);
        }, Ce = (Se) => {
          f(Se, Tn("Choose"));
        };
        L(we, (Se) => {
          e(Q) ? Se(Le) : Se(Ce, !1);
        }), f(ke, he);
      }, $$slots: { default: !0 } });
    }
    x(ie), x(Y), f(n, Y);
    var oe = Ke(j);
    return o(), oe;
  }
  Ne(_u, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const Vh = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function qh(n, t) {
    var r;
    (r = t()) == null || r();
  }
  function Th(n, t, r, a, l) {
    var o;
    const u = t();
    r()(a().id, u), (o = l()) == null || o();
  }
  var Gh = V('<img alt="Close"/>'), Oh = V('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function Ts(n, t) {
    Ye(t, !0);
    const r = () => Ie(h, "$translate", a), [a, l] = kt(), o = k(t, "dealBlock", 7), u = k(t, "multipleGiftsSelector", 7), c = k(t, "products", 23, () => []), i = k(t, "initialSelectedGifts", 23, () => []), s = k(t, "onConfirm", 7, () => {
    }), g = k(t, "onClose", 7), h = Dt();
    let p = Te(lt((function(S) {
      const T = {};
      for (const M of S) {
        const R = M.product.id;
        T[R] || (T[R] = []), T[R].push(M.variant.id);
      }
      return T;
    })(i())));
    const v = d(() => o().chooseMultipleGiftsModal), b = d(() => ((S) => S ? dn({ "kaching-choose-multiple-gifts-button-size": S.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": S.textSize + "px", "kaching-choose-multiple-gifts-price-color": Ee(S.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": Ee(S.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": Ee(S.textColor), "kaching-choose-multiple-gifts-button-color": Ee(S.buttonColor), "kaching-choose-multiple-gifts-button-text-color": Ee(S.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": S.productPhotoSize + "px" }) : "")(e(v) || null)), y = d(() => u().maxQuantity), m = d(() => Object.values(e(p)).reduce((S, T) => S + T.length, 0));
    function C(S) {
      return e(p)[S] || [];
    }
    function P(S) {
      const T = S.variants.find((M) => M.availableForSale);
      return (T == null ? void 0 : T.id) || S.variants[0].id;
    }
    const B = d(() => {
      var S;
      return ((S = e(v)) == null ? void 0 : S.footerText) || "FREE gifts selected";
    });
    var O = { get dealBlock() {
      return o();
    }, set dealBlock(S) {
      o(S), _();
    }, get multipleGiftsSelector() {
      return u();
    }, set multipleGiftsSelector(S) {
      u(S), _();
    }, get products() {
      return c();
    }, set products(S = []) {
      c(S), _();
    }, get initialSelectedGifts() {
      return i();
    }, set initialSelectedGifts(S = []) {
      i(S), _();
    }, get onConfirm() {
      return s();
    }, set onConfirm(S = () => {
    }) {
      s(S), _();
    }, get onClose() {
      return g();
    }, set onClose(S) {
      g(S), _();
    } }, I = Oh(), E = w(I), Z = w(E), G = w(Z), ce = (S) => {
      var T = Tn();
      pe((M) => mt(T, M), [() => r()(e(v).heading)]), f(S, T);
    };
    L(G, (S) => {
      var T;
      (T = e(v)) != null && T.heading && S(ce);
    }), x(Z);
    var H = F(Z, 2), W = (S) => {
      Et(S, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return g();
      }, children: (T, M) => {
        var R = Gh();
        pe(() => Pe(R, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), f(T, R);
      }, $$slots: { default: !0 } });
    };
    L(H, (S) => {
      g() && S(W);
    }), x(E);
    var J = F(E, 2);
    Zt(J, 21, c, (S) => S.id, (S, T) => {
      {
        let M = d(() => C(e(T).id)), R = d(() => (function(ae) {
          const N = C(ae).length;
          return e(y) - e(m) + N;
        })(e(T).id));
        _u(S, { get dealBlock() {
          return o();
        }, get multipleGiftsSelector() {
          return u();
        }, get product() {
          return e(T);
        }, get selectedVariantIds() {
          return e(M);
        }, get availableQuantity() {
          return e(R);
        }, onSelect: () => (function(ae) {
          if (e(m) >= e(y)) return;
          const N = P(ae), A = c().length === 1 ? e(y) : 1;
          re(p, { ...e(p), [ae.id]: Array(A).fill(N) }, !0);
        })(e(T)), onRemove: () => (function(ae) {
          const { [ae]: N, ...A } = e(p);
          re(p, A, !0);
        })(e(T).id), onVariantChange: (ae, N) => (function(A, $, ne) {
          const te = C(A);
          if ($ >= te.length) return;
          const ie = [...te];
          ie[$] = ne, re(p, { ...e(p), [A]: ie }, !0);
        })(e(T).id, ae, N), onQuantityChange: (ae) => (function(N, A) {
          const $ = C(N.id), ne = $.length;
          if (A === ne) return;
          let te;
          if (A > ne) {
            const ie = P(N), X = A - ne;
            te = [...$, ...Array(X).fill(ie)];
          } else te = $.slice(0, A);
          re(p, { ...e(p), [N.id]: te }, !0);
        })(e(T), ae) });
      }
    }), x(J);
    var Q = F(J, 2), U = w(Q), z = w(U);
    x(U);
    var D = F(U, 2), j = w(D);
    j.__click = [qh, g];
    var Y = w(j, !0);
    x(j);
    var K = F(j, 2);
    K.__click = [Th, function() {
      const S = [];
      for (const T of c()) {
        const M = C(T.id);
        for (const R of M) {
          const ae = T.variants.find((A) => A.id === R);
          if (!ae) continue;
          const N = o().useProductCompareAtPrice && ae.compareAtPrice ? Math.max(ae.price, ae.compareAtPrice) : ae.price;
          S.push({ id: `${R}`, variant: ae, product: T, quantity: 1, fullPrice: N });
        }
      }
      return S;
    }, s, u, g];
    var ee = w(K, !0);
    x(K), x(D), x(Q), x(I), pe((S, T, M) => {
      var R, ae;
      Nt(I, e(b)), mt(z, `${(R = e(m)) != null ? R : ""}/${(ae = e(y)) != null ? ae : ""}
      ${S != null ? S : ""}`), mt(Y, T), mt(ee, M);
    }, [() => r()(e(B)), () => r()("system.cancel"), () => r()("system.confirm")]), f(n, I);
    var q = Ke(O);
    return l(), q;
  }
  Dn(["click"]), Ne(Ts, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Fh = V('<div class="kaching-bundles"><!></div>');
  function mu(n, t) {
    var r;
    Ye(t, !0);
    const a = k(t, "config", 7), l = k(t, "dealBlock", 7), o = k(t, "products", 23, () => []), u = k(t, "mediaImages", 7), c = k(t, "translations", 7), i = k(t, "multipleGiftsSelector", 7), { setConfig: s } = Aa(a()), { setMoneyFormat: g } = ii(a().moneyFormat), { setTranslations: h } = $a(c()), { setMediaImages: p } = Fi(u()), { setSwatchSettings: v } = Ti({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (r = l().showSelectedSwatchName) != null && r });
    Je(() => {
      s(a());
    }), Je(() => {
      g(a().moneyFormat, !!l().showPricesWithoutDecimals);
    }), Je(() => {
      h(c());
    }), Je(() => {
      p(u());
    }), Je(() => {
      var P;
      v({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (P = l().showSelectedSwatchName) != null && P });
    });
    var b = { get config() {
      return a();
    }, set config(P) {
      a(P), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(P) {
      l(P), _();
    }, get products() {
      return o();
    }, set products(P = []) {
      o(P), _();
    }, get mediaImages() {
      return u();
    }, set mediaImages(P) {
      u(P), _();
    }, get translations() {
      return c();
    }, set translations(P) {
      c(P), _();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(P) {
      i(P), _();
    } }, y = De(), m = _e(y), C = (P) => {
      var B = Fh();
      Ts(w(B), { get dealBlock() {
        return l();
      }, get products() {
        return o();
      }, get multipleGiftsSelector() {
        return i();
      } }), x(B), f(P, B);
    };
    return L(m, (P) => {
      i() && P(C);
    }), f(n, y), Ke(b);
  }
  function Li(n, t) {
    var r;
    if (!t) return n.price;
    const a = n.sellingPlans.find((l) => l.id === t.id);
    return (r = a == null ? void 0 : a.price) != null ? r : n.price;
  }
  function Gs(n, t) {
    const r = t.priceAdjustment;
    if (!r) return n;
    switch (r.type) {
      case "percentage":
        return n * (1 - r.value / 100);
      case "fixed_amount":
        return n - r.value;
      case "price":
        return r.value;
    }
  }
  function ji(n, t) {
    return n.sellingPlans.filter((r) => t.some((a) => a.sellingPlans.some((l) => l.id === r.id)));
  }
  function Os(n, t, r) {
    let a;
    if (n.sellingPlanGid) {
      const l = Rt(n.sellingPlanGid);
      a = t.find((o) => o.id === l);
    } else a = r || t[0];
    return a && t.some((l) => l.id === a.id) ? a : t[0];
  }
  function Fs(n, t, r, a) {
    return n || (t ? r.some((l) => l.id === t.id) ? t : r[0] : a && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", Ne(mu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), vn(this, "component"), this.component = this;
    }
  }));
  const Qn = (n, t, r) => Lh(n, t, r) || jh(n, t), Lh = (n, t, r) => {
    if (!r || t.sellingPlans.length === 0) return;
    const a = new Set(t.sellingPlans.map((o) => o.id));
    return a.has(r.id) ? n.sellingPlans.find((o) => o.id === r.id) : n.sellingPlans.find((o) => a.has(o.id) && o.name === r.name) || n.sellingPlans.find((o) => o.id === t.sellingPlans[0].id);
  }, jh = (n, t) => {
    if (!n.requiresSellingPlan || t.sellingPlans.length === 0) return;
    const r = t.sellingPlans[0].id;
    return n.sellingPlans.find((a) => a.id === r);
  };
  function Zr({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: l, priceRounding: o, sellingPlan: u, percentageCentsRoundingWorkaround: c }) {
    const i = (function({ discountType: h, discountValue: p, discountQuantity: v, variantQuantities: b, currencyRate: y, sellingPlan: m, percentageCentsRoundingWorkaround: C }) {
      const P = b.map(({ variant: I, quantity: E }) => Li(I, m) * E), B = P.reduce((I, E) => I + E, 0), O = b.map(({ quantity: I }) => I).reduce((I, E) => I + E, 0);
      if (h === "specific") {
        let I = 100 * Number(p) * y;
        if (O > Number(v)) {
          const G = I / Number(v);
          I = Math.ceil(G * O);
        }
        const E = I / O;
        let Z = 0;
        for (const { variant: G, quantity: ce } of b) {
          if (m && G.sellingPlans.some((H) => H.id === m.id) && m.priceAdjustment) {
            Z += Gs(E, m) * ce;
            continue;
          }
          Z += E * ce;
        }
        return Math.max(0, Math.min(Z, B));
      }
      if (h === "percentage") {
        if (C) {
          const E = B * (100 - Number(p)) / 100;
          return Math.max(0, Math.min(Math.ceil(E), B));
        }
        let I = 0;
        for (const { variant: E, quantity: Z } of b) {
          const G = Li(E, m);
          I += Math.ceil(G * (100 - Number(p)) / 100) * Z;
        }
        return Math.max(0, Math.min(I, B));
      }
      if (h === "amount") {
        const I = Math.round(100 * Number(p)) * y, E = I * O;
        return typeof document != "undefined" && B > 0 && E > B && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: { totalDiscount: E, fullOrderPrice: B } })), Math.max(0, Math.min(B - I * O, B));
      }
      return B;
    })({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: l, sellingPlan: u, percentageCentsRoundingWorkaround: c }), s = a.map(({ variant: h, quantity: p }) => o != null && o.v2 ? Li(h, u) * p : h.price * p).reduce((h, p) => h + p, 0), g = a.map(({ quantity: h }) => h).reduce((h, p) => h + p, 0);
    if (o && (n !== "default" || o.v2)) {
      if (o.perItem) {
        const h = li(i / g, o.precision) * g;
        return o.v2 && Math.round(h) > Math.round(s) && i / g > 100 ? li(i / g - 100, o.precision) * g : h <= s ? h : i;
      }
      {
        const h = li(i, o.precision);
        return o.v2 && Math.round(h) > Math.round(s) && i > 100 ? li(i - 100, o.precision) : h <= s ? h : i;
      }
    }
    return i;
  }
  function ku(n, t, r, a, l, o) {
    return Zr({ discountType: n.discountType, discountValue: n.discountValue, discountQuantity: n.quantity, variantQuantities: t, currencyRate: r, priceRounding: a, sellingPlan: l, percentageCentsRoundingWorkaround: o });
  }
  function yu(n, t, r, a, l) {
    var o, u, c, i;
    const s = [...t].sort((m, C) => m.variant.price - C.variant.price), g = s.reduce((m, C) => m + C.quantity, 0) >= n.buyQuantity + n.getQuantity ? n.getQuantity : 0, h = [], p = [];
    let v = g;
    for (const { variant: m, quantity: C } of s) {
      const P = Math.min(C, v), B = C - P;
      v -= P, P > 0 && h.push({ variant: m, quantity: P }), B > 0 && p.push({ variant: m, quantity: B });
    }
    const b = h.length > 0 ? Zr({ discountType: (o = n.getDiscountType) != null ? o : "percentage", discountValue: (u = n.getDiscountValue) != null ? u : 100, discountQuantity: g, variantQuantities: h, currencyRate: r, priceRounding: a, sellingPlan: l }) : 0, y = p.reduce((m, C) => m + C.quantity, 0);
    return b + Zr({ discountType: (c = n.buyDiscountType) != null ? c : "default", discountValue: (i = n.buyDiscountValue) != null ? i : 0, discountQuantity: y, variantQuantities: p, currencyRate: r, priceRounding: a, sellingPlan: l });
  }
  function Ls(n, t, r, a, l) {
    return n.bundleProducts.filter(({ productGID: o }) => o).map((o) => {
      const u = t[o.id];
      if (!u) return 0;
      const c = Qn(u.product, u.variant, l);
      return Zr({ discountType: o.discountType, discountValue: o.discountValue, discountQuantity: o.quantity, variantQuantities: [u], currencyRate: r, priceRounding: a, sellingPlan: c });
    }).reduce((o, u) => o + u, 0);
  }
  function Gl(n, t, r, a, l) {
    const o = n.bundleProducts.filter(({ productGID: i }) => i).reduce((i, s) => {
      const g = t[s.id];
      if (!g) return i;
      const h = Qn(g.product, g.variant, l);
      return i + (h ? Gs(g.variant.price, h) : g.variant.price);
    }, 0), u = Number(n.discountValue) || 0;
    let c;
    switch (n.discountType) {
      case "percentage":
        c = o * (1 - Math.min(Math.max(u, 0), 100) / 100);
        break;
      case "amount":
        c = o - Math.round(100 * u) * r;
        break;
      case "specific":
        c = Math.round(100 * u) * r;
        break;
      default:
        c = o;
    }
    if (c = Math.max(0, Math.min(c, o)), a && (n.discountType !== "default" || a.v2)) {
      const i = c;
      let s = li(i, a.precision);
      a.v2 && Math.round(s) > Math.round(o) && i > 100 && (s = li(i - 100, a.precision)), c = s <= o ? s : i;
    }
    return Math.max(0, Math.round(c));
  }
  function li(n, t = ".00") {
    switch (t) {
      case ".99":
        return n > 99 ? 100 * Math.ceil(n / 100) - 1 : n;
      case ".95":
        return n > 95 ? 100 * Math.ceil(n / 100) - 5 : n;
      case ".90":
        return n > 90 ? 100 * Math.ceil(n / 100) - 10 : n;
      case ".x9":
        return n > 9 ? 10 * Math.ceil(n / 10) - 1 : n;
      case ".x0":
        return 10 * Math.ceil(n / 10);
      default:
        return 100 * Math.ceil(n / 100);
    }
  }
  var Eh = V('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), Rh = V('<span class="kaching-bundles__choose-product__product-title"> </span>'), Qh = V('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), Nh = V('<div class="kaching-bundles__choose-product__product-price"><!></div>'), Wh = V('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), Uh = V("<div><!> <!></div>"), Hh = V('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!></div></div> <!></div>');
  function xu(n, t) {
    var r;
    Ye(t, !0);
    const a = () => Ie(b, "$config", u), l = () => Ie(v, "$formatPrice", u), o = () => Ie(p, "$translate", u), [u, c] = kt(), i = k(t, "product", 7), s = k(t, "dealBlock", 7), g = k(t, "dealBar", 7), h = k(t, "onChoose", 7), p = Dt(), v = sn(), b = fn();
    let y = Te(!1), m = Te(lt(((r = i().variants.find((A) => A.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const C = d(() => i().variants.find((A) => A.id === e(m)) || i().variants[0]), P = d(() => {
      var A;
      return e(y) || ((A = s().chooseProductModal) == null ? void 0 : A.showVariantImageByDefault);
    }), B = d(() => e(P) && e(C).image || i().image), O = d(() => s().priceRounding ? { perItem: !0, precision: s().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), I = d(() => g().dealBarType === ht.Bxgy ? e(C).price : Zr({ discountType: g().discountType, discountValue: g().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(C), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(O) })), E = d(() => (function(A, $) {
      return A.useProductCompareAtPrice && $.compareAtPrice ? Math.max($.price, $.compareAtPrice) : $.price;
    })(s(), e(C))), Z = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), G = d(() => gn({ priceFormatter: l(), product: i(), totalFullPrice: e(E), totalDiscountedPrice: e(I), quantity: 1, unitQuantity: cr([{ variant: e(C), quantity: 1 }]) })), ce = d(() => e(G)(o()(s().chooseProductModal.subtitle || ""))), H = d(() => s().chooseProductModal.buttonText);
    function W(A) {
      re(y, !0), re(m, A, !0);
    }
    var J = { get product() {
      return i();
    }, set product(A) {
      i(A), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(A) {
      s(A), _();
    }, get dealBar() {
      return g();
    }, set dealBar(A) {
      g(A), _();
    }, get onChoose() {
      return h();
    }, set onChoose(A) {
      h(A), _();
    } }, Q = Hh(), U = w(Q), z = w(U), D = (A) => {
      Rn(A, { get url() {
        return e(Z);
      }, class: "kaching-bundles__choose-product__product-image-link", children: ($, ne) => {
        var te = Eh();
        Pe(te, "width", 100), Pe(te, "height", 100), pe(() => Pe(te, "src", e(B))), f($, te);
      }, $$slots: { default: !0 } });
    };
    L(z, (A) => {
      e(B) && A(D);
    });
    var j = F(z, 2), Y = w(j);
    Rn(Y, { get url() {
      return e(Z);
    }, class: "kaching-bundles__choose-product__product-link", children: (A, $) => {
      var ne = Rh(), te = w(ne, !0);
      x(ne), pe(() => mt(te, i().title)), f(A, ne);
    }, $$slots: { default: !0 } });
    var K = F(Y, 2), ee = (A) => {
      var $ = Qh();
      Ge(w($), () => e(ce)), x($), f(A, $);
    };
    L(K, (A) => {
      e(ce) && A(ee);
    });
    var q = F(K, 2), S = w(q);
    Xe(S, () => e(I), (A) => {
      var $ = Nh();
      Ge(w($), () => l()(e(I))), x($), f(A, $);
    });
    var T = F(S, 2), M = (A) => {
      var $ = De();
      Xe(_e($), () => e(E), (ne) => {
        var te = Wh();
        Ge(w(te), () => l()(e(E))), x(te), f(ne, te);
      }), f(A, $);
    };
    L(T, (A) => {
      e(E) && e(E) > e(I) && A(M);
    }), x(q);
    var R = F(q, 2), ae = (A) => {
      var $ = Uh(), ne = w($);
      Hr(ne, { get product() {
        return i();
      }, class: "kaching-bundles__choose-product__product-option-names" }), Gn(F(ne, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: W }), x($), f(A, $);
    };
    L(R, (A) => {
      i().variants.length > 1 && A(ae);
    }), x(j), x(U), Et(F(U, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      h()({ product: i(), variant: e(C) });
    }, children: (A, $) => {
      var ne = De(), te = _e(ne), ie = (ve) => {
        var Be = Tn();
        pe((oe) => mt(Be, oe), [() => o()(e(H))]), f(ve, Be);
      }, X = (ve) => {
        f(ve, Tn("Choose"));
      };
      L(te, (ve) => {
        e(H) ? ve(ie) : ve(X, !1);
      }), f(A, ne);
    }, $$slots: { default: !0 } }), x(Q), f(n, Q);
    var N = Ke(J);
    return c(), N;
  }
  Ne(xu, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const js = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var Zh = V('<img alt="Close"/>'), Jh = (n, t) => {
    re(t, !e(t));
  }, Yh = (n, t, r, a) => {
    re(t, e(r).value, !0), re(a, !1);
  }, Kh = V('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), Xh = V('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), ep = V('<div class="kaching-bundles__choose-product__sort-menu"></div>'), tp = V('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), np = (n, t) => {
    re(t, "");
  }, rp = V('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), ap = V('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), ip = V('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function Es(n, t) {
    var r;
    Ye(t, !0);
    const a = () => Ie(h, "$translate", l), [l, o] = kt(), u = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), i = k(t, "products", 23, () => []), s = k(t, "onChoose", 7), g = k(t, "onClose", 7), h = Dt(), p = d(() => u().chooseProductModal), v = d(() => ((q) => dn({ "kaching-choose-product-button-size": q.buttonSize + "px", "kaching-choose-product-text-size": q.textSize + "px", "kaching-choose-product-price-color": Ee(q.priceColor), "kaching-choose-product-compare-at-price-color": Ee(q.compareAtPriceColor), "kaching-choose-product-text-color": Ee(q.textColor), "kaching-choose-product-button-color": Ee(q.buttonColor), "kaching-choose-product-button-text-color": Ee(q.buttonTextColor), "kaching-choose-product-photo-size": q.productPhotoSize + "px" }))(e(p)));
    let b = Te(""), y = Te(!1);
    const m = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, C = d(() => [{ value: m.Relevance, label: a()("system.sort_relevance") }, { value: m.NewestFirst, label: a()("system.sort_newest_first") }, { value: m.PriceLowToHigh, label: a()("system.sort_price_low_to_high") }, { value: m.PriceHighToLow, label: a()("system.sort_price_high_to_low") }]);
    let P = Te(lt(Object.values(m).includes((r = e(p).defaultSortOption) != null ? r : "") ? e(p).defaultSortOption : m.Relevance));
    const B = d(() => e(p).showSearchField ? i().filter((q) => q.title.toLowerCase().includes(e(b).toLowerCase().trim())) : i()), O = d(() => {
      const q = [...e(B)], S = (M) => {
        const R = M.variants.find((ae) => ae.availableForSale) || M.variants[0];
        return (R == null ? void 0 : R.price) || 0;
      }, T = (M) => {
        if (!M.createdAt) return 0;
        const R = Date.parse(M.createdAt);
        return Number.isNaN(R) ? 0 : R;
      };
      switch (e(P)) {
        case m.Relevance:
          return q;
        case m.NewestFirst:
          return q.sort((M, R) => {
            const ae = T(R) - T(M);
            return ae !== 0 ? ae : R.id - M.id;
          });
        case m.PriceLowToHigh:
          return q.sort((M, R) => S(M) - S(R));
        case m.PriceHighToLow:
          return q.sort((M, R) => S(R) - S(M));
        default:
          return q;
      }
    }), I = d(() => e(p).showSearchField && e(b).trim().length > 0 && e(O).length === 0);
    function E() {
      re(y, !1);
    }
    function Z(q, S) {
      const T = (M) => {
        q.contains(M.target) || S();
      };
      return document.addEventListener("click", T, !0), { destroy() {
        document.removeEventListener("click", T, !0);
      } };
    }
    var G = { get dealBlock() {
      return u();
    }, set dealBlock(q) {
      u(q), _();
    }, get dealBar() {
      return c();
    }, set dealBar(q) {
      c(q), _();
    }, get products() {
      return i();
    }, set products(q = []) {
      i(q), _();
    }, get onChoose() {
      return s();
    }, set onChoose(q) {
      s(q), _();
    }, get onClose() {
      return g();
    }, set onClose(q) {
      g(q), _();
    } }, ce = ip(), H = w(ce), W = w(H), J = w(W), Q = (q) => {
      var S = Tn();
      pe((T) => mt(S, T), [() => a()(e(p).heading)]), f(q, S);
    };
    L(J, (q) => {
      e(p).heading && q(Q);
    }), x(W), Et(F(W, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return g();
    }, children: (q, S) => {
      var T = Zh();
      pe(() => Pe(T, "src", js)), f(q, T);
    }, $$slots: { default: !0 } }), x(H);
    var U = F(H, 2), z = (q) => {
      var S = tp(), T = w(S), M = w(T), R = F(M, 2);
      Wr(R), x(T);
      var ae = F(T, 2), N = w(ae);
      N.__click = [Jh, y];
      var A = w(N), $ = F(A);
      x(N);
      var ne = F(N, 2), te = (ie) => {
        var X = ep();
        Zt(X, 21, () => e(C), (ve) => ve.value, (ve, Be) => {
          var oe = Xh();
          oe.__click = [Yh, P, Be, y];
          var fe = w(oe), ke = w(fe, !0);
          x(fe);
          var ze = F(fe, 2), he = (de) => {
            var be = Kh();
            pe(() => Pe(be, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), f(de, be);
          };
          L(ze, (de) => {
            e(P) === e(Be).value && de(he);
          }), x(oe), pe(() => mt(ke, e(Be).label)), f(ve, oe);
        }), x(X), f(ie, X);
      };
      L(ne, (ie) => {
        e(y) && ie(te);
      }), x(ae), ys(ae, (ie, X) => Z == null ? void 0 : Z(ie, X), () => E), x(S), pe((ie, X, ve) => {
        Pe(M, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Pe(R, "aria-label", ie), Pe(R, "placeholder", X), Pe(A, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), mt($, ` ${ve != null ? ve : ""}`);
      }, [() => a()("system.search"), () => a()("system.search"), () => a()("system.sort_by")]), fg(R, () => e(b), (ie) => re(b, ie)), f(q, S);
    };
    L(U, (q) => {
      e(p).showSearchField && q(z);
    });
    var D = F(U, 2), j = w(D), Y = (q) => {
      var S = ap(), T = w(S), M = (ae) => {
        var N = rp(), A = _e(N), $ = w(A);
        x(A);
        var ne = F(A, 2), te = w(ne, !0);
        x(ne);
        var ie = F(ne, 2), X = w(ie, !0);
        x(ie);
        var ve = F(ie, 2);
        ve.__click = [np, b];
        var Be = w(ve, !0);
        x(ve), pe((oe, fe, ke) => {
          Pe($, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), mt(te, oe), mt(X, fe), mt(Be, ke);
        }, [() => a()("system.no_results_found"), () => a()("system.no_results_description"), () => a()("system.clear_search")]), f(ae, N);
      }, R = (ae) => {
        var N = Tn();
        pe((A) => mt(N, A), [() => a()("system.no_products_available")]), f(ae, N);
      };
      L(T, (ae) => {
        e(I) ? ae(M) : ae(R, !1);
      }), x(S), f(q, S);
    }, K = (q) => {
      var S = De();
      Zt(_e(S), 17, () => e(O), (T) => T.id, (T, M) => {
        xu(T, { get dealBlock() {
          return u();
        }, get dealBar() {
          return c();
        }, get product() {
          return e(M);
        }, get onChoose() {
          return s();
        } });
      }), f(q, S);
    };
    L(j, (q) => {
      e(O).length === 0 ? q(Y) : q(K, !1);
    }), x(D), x(ce), pe(() => Nt(ce, e(v))), f(n, ce);
    var ee = Ke(G);
    return o(), ee;
  }
  Dn(["click"]), Ne(Es, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var lp = V('<div class="kaching-bundles"><!></div>');
  function wu(n, t) {
    var r;
    Ye(t, !0);
    const a = k(t, "config", 7), l = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), u = k(t, "products", 23, () => []), c = k(t, "mediaImages", 7), i = k(t, "translations", 7), { setConfig: s } = Aa(a()), { setMoneyFormat: g } = ii(a().moneyFormat), { setTranslations: h } = $a(i()), { setMediaImages: p } = Fi(c()), { setSwatchSettings: v } = Ti({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (r = l().showSelectedSwatchName) != null && r });
    Je(() => {
      s(a());
    }), Je(() => {
      g(a().moneyFormat, !!l().showPricesWithoutDecimals);
    }), Je(() => {
      h(i());
    }), Je(() => {
      p(c());
    }), Je(() => {
      var m;
      v({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (m = l().showSelectedSwatchName) != null && m });
    });
    var b = { get config() {
      return a();
    }, set config(m) {
      a(m), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(m) {
      l(m), _();
    }, get dealBar() {
      return o();
    }, set dealBar(m) {
      o(m), _();
    }, get products() {
      return u();
    }, set products(m = []) {
      u(m), _();
    }, get mediaImages() {
      return c();
    }, set mediaImages(m) {
      c(m), _();
    }, get translations() {
      return i();
    }, set translations(m) {
      i(m), _();
    } }, y = lp();
    return Es(w(y), { get dealBlock() {
      return l();
    }, get dealBar() {
      return o();
    }, get products() {
      return u();
    }, onChoose: () => {
    }, onClose: () => {
    } }), x(y), f(n, y), Ke(b);
  }
  customElements.define("kaching-bundles-choose-product", Ne(wu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), vn(this, "component"), this.component = this;
    }
  })), Ra = !0;
  var sp = En('<svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function Pu(n) {
    f(n, sp());
  }
  Ne(Pu, {}, [], [], !0);
  var op = V('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), cp = V('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), up = V('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), dp = V('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function Va(n, t) {
    Ye(t, !0);
    const r = k(t, "style", 7, "simple"), a = k(t, "text", 7, ""), l = k(t, "imageUrl", 7), o = k(t, "blockLayout", 7), u = d(() => o() === "vertical" && (r() === "most-popular" || r() === "simple" && !!a() || r() === "custom" && !!l()));
    var c = { get style() {
      return r();
    }, set style(h = "simple") {
      r(h), _();
    }, get text() {
      return a();
    }, set text(h = "") {
      a(h), _();
    }, get imageUrl() {
      return l();
    }, set imageUrl(h) {
      l(h), _();
    }, get blockLayout() {
      return o();
    }, set blockLayout(h) {
      o(h), _();
    } }, i = De(), s = _e(i), g = (h) => {
      var p = De(), v = _e(p), b = (m) => {
        var C = op(), P = w(C);
        x(C), pe(() => {
          Pe(P, "alt", a() || "Badge"), Pe(P, "src", l());
        }), f(m, C);
      }, y = (m) => {
        var C = De(), P = _e(C), B = (I) => {
          var E = cp();
          Pu(w(E)), x(E), f(I, E);
        }, O = (I) => {
          var E = dp();
          Xe(w(E), a, (Z) => {
            var G = up();
            Ge(w(G), a), x(G), f(Z, G);
          }), x(E), f(I, E);
        };
        L(P, (I) => {
          r() === "most-popular" ? I(B) : I(O, !1);
        }, !0), f(m, C);
      };
      L(v, (m) => {
        r() === "custom" && l() ? m(b) : m(y, !1);
      }), f(h, p);
    };
    return L(s, (h) => {
      e(u) && h(g);
    }), f(n, i), Ke(c);
  }
  function Ei(n, t, r) {
    return n + t.reduce((a, l) => l.includeInCompareAt ? a + l.fullPrice : a, 0) + r.reduce((a, l) => l.includeInCompareAt ? a + l.fullPrice * l.quantity : a, 0);
  }
  function Rs(n, t, r) {
    return n ? t : r;
  }
  Ne(Va, { style: {}, text: {}, imageUrl: {}, blockLayout: {} }, [], [], !0);
  const Ri = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", Qs = ({ dealBlock: n, imageSize: t }) => {
    const { fonts: r, colors: a, cornerRadius: l } = n;
    return dn({ "kaching-free-gift-background-color": a.freeGiftBackground && Ee(a.freeGiftBackground), "kaching-free-gift-text-color": a.freeGiftText && Ee(a.freeGiftText), "kaching-free-gift-selected-background-color": a.freeGiftSelectedBackground && Ee(a.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": a.freeGiftSelectedText && Ee(a.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && er(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && tr(r.freeGift.style), "kaching-free-gift-image-border-radius": (l || 0) / 2 + "px", "kaching-free-gift-image-height": t + "px" });
  }, Ns = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=", Su = ({ freeGift: n, product: t, variantImage: r, getMediaImageUrl: a }) => n.mediaImageGID ? a(n.mediaImageGID) : n.giftType === "shipping" ? Ns : r || (t == null ? void 0 : t.image), Ws = (n, t, r) => {
    var a, l;
    const o = (l = (a = t.variantGIDs) == null ? void 0 : a.map(Rt)) != null ? l : null;
    return n.variants.filter((u) => (r || u.availableForSale) && (!o || o.includes(u.id)));
  };
  var gp = V('<img alt="" class="kaching-bundles__free-gift__image"/>'), hp = V('<div class="kaching-bundles__free-gift__image"></div>'), pp = V('<span class="kaching-bundles__free-gift__text"><!></span>'), fp = V('<div class="kaching-bundles__free-gift__full-price"><!></div>'), bp = V('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function Bu(n, t) {
    Ye(t, !0);
    const r = () => Ie(b, "$config", l), a = () => Ie(m, "$formatPrice", l), [l, o] = kt();
    let u = k(t, "dealBlock", 7), c = k(t, "freeGift", 7), i = k(t, "product", 7), s = k(t, "dealBarSelected", 7, !1), g = k(t, "collapsed", 7, !1), h = k(t, "sets", 7), p = k(t, "mainProductVariantId", 7), v = k(t, "onChange", 7);
    const b = fn(), y = Dt(), m = sn(), C = An(), P = d(() => {
      if (i()) return { ...i(), variants: Ws(i(), c(), r().preview) };
    });
    let B = Te(void 0);
    const O = d(() => (function(q, S) {
      if (q !== void 0) return q;
      if (S != null && S.availableForSale && S.variants.length > 0) return S.variants[0].id;
    })(e(B), e(P))), I = d(() => e(P) && e(O) ? e(P).variants.find((q) => q.id === e(O)) : void 0), E = d(() => {
      var q;
      return Su({ freeGift: c(), product: i(), variantImage: (q = e(I)) == null ? void 0 : q.image, getMediaImageUrl: Ie(C, "$getMediaImageUrl", l) });
    }), Z = d(() => c().quantity * h()), G = d(() => (function(q, S) {
      if (!S) return 0;
      let T = S.price;
      return S.compareAtPrice && q.useProductCompareAtPrice && (T = Math.max(T, S.compareAtPrice)), T * e(Z);
    })(u(), e(I))), ce = d(() => Qs({ dealBlock: u(), imageSize: c().imageSize })), H = d(() => gn({ priceFormatter: a(), product: i(), totalFullPrice: e(G), totalDiscountedPrice: 0, quantity: e(Z), unitQuantity: e(I) ? cr([{ variant: e(I), quantity: e(Z) }]) : null })), W = d(() => c() ? e(H)(Ie(y, "$translate", l)(c().text)) : ""), J = d(() => {
      var q;
      if ((q = i()) != null && q.url) return e(O) ? `${i().url}?variant=${e(O)}` : i().url;
    });
    function Q(q) {
      re(B, q, !0);
    }
    let U;
    ar(() => {
      c().productGID, re(B, void 0), U = void 0;
    }), ar(() => {
      if (u().disableVariantOptionSync || !p() || !e(P) || p() === U) return;
      const q = U;
      U = p(), e(P).variants.some((S) => S.id === p()) && (e(B) !== void 0 && e(B) !== q || re(B, p(), !0));
    }), Je(() => {
      var q;
      e(I) && ((q = i()) != null && q.availableForSale) && e(Z) && en(() => {
        v()({ variant: e(I), product: i(), fullPrice: e(G) });
      });
    });
    const z = d(() => !(!i() || i().availableForSale && Ws(i(), c(), !1).length !== 0));
    var D = { get dealBlock() {
      return u();
    }, set dealBlock(q) {
      u(q), _();
    }, get freeGift() {
      return c();
    }, set freeGift(q) {
      c(q), _();
    }, get product() {
      return i();
    }, set product(q) {
      i(q), _();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(q = !1) {
      s(q), _();
    }, get collapsed() {
      return g();
    }, set collapsed(q = !1) {
      g(q), _();
    }, get sets() {
      return h();
    }, set sets(q) {
      h(q), _();
    }, get mainProductVariantId() {
      return p();
    }, set mainProductVariantId(q) {
      p(q), _();
    }, get onChange() {
      return v();
    }, set onChange(q) {
      v(q), _();
    } }, j = De(), Y = _e(j), K = (q) => {
      var S = bp();
      let T;
      var M = w(S), R = w(M);
      {
        let X = d(() => s() ? e(J) : void 0);
        Rn(R, { get url() {
          return e(X);
        }, class: "kaching-bundles__free-gift__link", children: (ve, Be) => {
          var oe = De(), fe = _e(oe), ke = (he) => {
            var de = gp();
            pe(() => {
              Pe(de, "src", e(E)), Pe(de, "height", c().imageSize || 0);
            }), f(he, de);
          }, ze = (he) => {
            var de = hp();
            let be;
            pe((we) => be = Nt(de, "", be, we), [() => {
              var we, Le;
              return { height: `${(we = c().imageSize || 0) != null ? we : ""}px`, width: `${(Le = (i() || c().mediaImageGID) && c().imageSize || 0) != null ? Le : ""}px` };
            }]), f(he, de);
          };
          L(fe, (he) => {
            e(E) ? he(ke) : he(ze, !1);
          }), f(ve, oe);
        }, $$slots: { default: !0 } });
      }
      var ae = F(R, 2), N = w(ae), A = (X) => {
        var ve = De();
        Xe(_e(ve), () => e(W), (Be) => {
          var oe = pp();
          Ge(w(oe), () => e(W)), x(oe), f(Be, oe);
        }), f(X, ve);
      };
      L(N, (X) => {
        e(W) && X(A);
      });
      var $ = F(N, 2), ne = (X) => {
        Gn(X, { get product() {
          return e(P);
        }, get selectedVariantId() {
          return e(O);
        }, onChange: Q });
      };
      L($, (X) => {
        s() && e(P) && e(P).variants.length > 1 && e(O) && X(ne);
      }), x(ae), x(M);
      var te = F(M, 2), ie = (X) => {
        var ve = De();
        Xe(_e(ve), () => e(G), (Be) => {
          var oe = fp();
          Ge(w(oe), () => a()(e(G))), x(oe), f(Be, oe);
        }), f(X, ve);
      };
      L(te, (X) => {
        c().showPrice && e(G) > 0 && X(ie);
      }), x(S), pe((X) => {
        T = At(S, 1, "kaching-bundles__free-gift", null, T, X), Pe(S, "data-free-gift-id", c().id), Nt(S, e(ce));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(z) })]), f(q, S);
    };
    L(Y, (q) => {
      !g() && (!c().productGID || e(I) || r().preview && e(z)) && q(K);
    }), f(n, j);
    var ee = Ke(D);
    return o(), ee;
  }
  Ne(Bu, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, collapsed: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var vp = V('<img alt=""/>'), _p = V('<div class="kaching-bundles__free-gift-summary__images"></div>'), mp = V('<span class="kaching-bundles__free-gift__text"><!></span>'), kp = V('<div class="kaching-bundles__free-gift kaching-bundles__free-gift-summary"><!> <!></div>');
  function Cu(n, t) {
    Ye(t, !0);
    const [r, a] = kt();
    let l = k(t, "dealBlock", 7), o = k(t, "images", 7), u = k(t, "count", 7), c = k(t, "title", 7), i = k(t, "imageSize", 7);
    const s = Dt(), g = sn(), h = d(() => gn({ priceFormatter: Ie(g, "$formatPrice", r), product: void 0, totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null, freeGiftsCount: u() })(Ie(s, "$translate", r)(c()))), p = d(() => Qs({ dealBlock: l(), imageSize: i() }));
    var v = { get dealBlock() {
      return l();
    }, set dealBlock(O) {
      l(O), _();
    }, get images() {
      return o();
    }, set images(O) {
      o(O), _();
    }, get count() {
      return u();
    }, set count(O) {
      u(O), _();
    }, get title() {
      return c();
    }, set title(O) {
      c(O), _();
    }, get imageSize() {
      return i();
    }, set imageSize(O) {
      i(O), _();
    } }, b = kp(), y = w(b), m = (O) => {
      var I = _p();
      Zt(I, 21, o, Nr, (E, Z) => {
        var G = vp();
        let ce;
        pe((H) => {
          Pe(G, "src", e(Z).source), Pe(G, "height", i() || 0), ce = At(G, 1, "kaching-bundles__free-gift-summary__image", null, ce, H);
        }, [() => ({ "kaching-bundles__free-gift-summary__image--no-border": !e(Z).bordered })]), f(E, G);
      }), x(I), f(O, I);
    };
    L(y, (O) => {
      o().length && O(m);
    });
    var C = F(y, 2), P = (O) => {
      var I = De();
      Xe(_e(I), () => e(h), (E) => {
        var Z = mp();
        Ge(w(Z), () => e(h)), x(Z), f(E, Z);
      }), f(O, I);
    };
    L(C, (O) => {
      e(h) && O(P);
    }), x(b), pe(() => Nt(b, e(p))), f(n, b);
    var B = Ke(v);
    return a(), B;
  }
  Ne(Cu, { dealBlock: {}, images: {}, count: {}, title: {}, imageSize: {} }, [], [], !0);
  var yp = V('<div class="kaching-bundles__free-gift__divider"></div>'), xp = V("<!> <!>", 1), wp = V("<!> <!>", 1);
  function si(n, t) {
    Ye(t, !0);
    const r = () => Ie(b, "$config", a), [a, l] = kt();
    let o = k(t, "dealBlock", 7), u = k(t, "freeGifts", 7), c = k(t, "otherProducts", 7), i = k(t, "dealBarSelected", 7), s = k(t, "freeGiftsSummary", 7), g = k(t, "sellingPlan", 7), h = k(t, "sets", 7, 1), p = k(t, "mainProductVariantId", 7), v = k(t, "onChange", 7);
    const b = fn(), y = An();
    let m = Te(lt({})), C = d(() => u().filter((W) => !W.applyOnlyForSubscriptions || g()));
    const P = d(() => e(C).flatMap((W) => {
      const J = W.productGID ? c().find((U) => U.id === Rt(W.productGID)) : void 0;
      if (!r().preview && W.productGID && !(J != null && J.availableForSale)) return [];
      const Q = J && !r().preview ? or(J) : J;
      return { freeGift: W, product: Q };
    })), B = d(() => {
      var W, J;
      return (J = (W = s()) == null ? void 0 : W.enabled) != null && J;
    }), O = d(() => !i() && e(B) && e(P).length >= 2), I = d(() => {
      var W, J;
      return (J = (W = s()) == null ? void 0 : W.showImages) != null && J ? e(P).flatMap(({ freeGift: Q, product: U }) => {
        const z = ((j, Y, { preview: K, mainProductVariantId: ee, disableVariantOptionSync: q }) => {
          if (!j) return;
          const S = Ws(j, Y, K);
          if (S.length !== 0) {
            if (!q && ee) {
              const T = S.find((M) => M.id === ee);
              if (T) return T;
            }
            return S[0];
          }
        })(U, Q, { preview: r().preview, mainProductVariantId: p(), disableVariantOptionSync: o().disableVariantOptionSync }), D = Su({ freeGift: Q, product: U, variantImage: z == null ? void 0 : z.image, getMediaImageUrl: Ie(y, "$getMediaImageUrl", a) });
        return D ? [{ source: D, bordered: Q.giftType !== "shipping" }] : [];
      }) : [];
    });
    Je(() => {
      (function(W, J) {
        if (!u().length) return;
        const Q = W.filter((U) => U.id in J).map((U) => ({ id: U.id, variant: J[U.id].variant, product: J[U.id].product, quantity: U.quantity * h(), fullPrice: J[U.id].fullPrice, showPrice: U.showPrice, includeInCompareAt: U.includeInCompareAt === !0, applyOnlyForSubscriptions: U.applyOnlyForSubscriptions }));
        v()(Q);
      })(e(C), e(m));
    });
    var E = { get dealBlock() {
      return o();
    }, set dealBlock(W) {
      o(W), _();
    }, get freeGifts() {
      return u();
    }, set freeGifts(W) {
      u(W), _();
    }, get otherProducts() {
      return c();
    }, set otherProducts(W) {
      c(W), _();
    }, get dealBarSelected() {
      return i();
    }, set dealBarSelected(W) {
      i(W), _();
    }, get freeGiftsSummary() {
      return s();
    }, set freeGiftsSummary(W) {
      s(W), _();
    }, get sellingPlan() {
      return g();
    }, set sellingPlan(W) {
      g(W), _();
    }, get sets() {
      return h();
    }, set sets(W = 1) {
      h(W), _();
    }, get mainProductVariantId() {
      return p();
    }, set mainProductVariantId(W) {
      p(W), _();
    }, get onChange() {
      return v();
    }, set onChange(W) {
      v(W), _();
    } }, Z = wp(), G = _e(Z), ce = (W) => {
      {
        let J = d(() => {
          var U, z;
          return (z = (U = s()) == null ? void 0 : U.title) != null ? z : "";
        }), Q = d(() => {
          var U, z;
          return (z = (U = e(P)[0]) == null ? void 0 : U.freeGift.imageSize) != null ? z : 30;
        });
        Cu(W, { get dealBlock() {
          return o();
        }, get images() {
          return e(I);
        }, get count() {
          return e(P).length;
        }, get title() {
          return e(J);
        }, get imageSize() {
          return e(Q);
        } });
      }
    };
    L(G, (W) => {
      e(O) && W(ce);
    }), Zt(F(G, 2), 19, () => e(P), ({ freeGift: W, product: J }) => W.id, (W, J, Q) => {
      let U = () => e(J).freeGift;
      var z = xp(), D = _e(z);
      Bu(D, { get dealBlock() {
        return o();
      }, get freeGift() {
        return U();
      }, get product() {
        return e(J).product;
      }, get dealBarSelected() {
        return i();
      }, get collapsed() {
        return e(O);
      }, get sets() {
        return h();
      }, get mainProductVariantId() {
        return p();
      }, onChange: (K) => (function(ee, q) {
        q.variant ? e(m)[ee] = q : delete e(m)[ee];
      })(U().id, K) });
      var j = F(D, 2), Y = (K) => {
        f(K, yp());
      };
      L(j, (K) => {
        !e(O) && e(Q) < e(P).length - 1 && K(Y);
      }), f(W, z);
    }), f(n, Z);
    var H = Ke(E);
    return l(), H;
  }
  function Iu(n, t = "body") {
    let r;
    async function a(l) {
      if (typeof (t = l) == "string") {
        if (r = document.querySelector(t), r === null && (await hs(), r = document.querySelector(t)), r === null) throw new Error(`No element found matching css selector: "${t}"`);
      } else {
        if (!(t instanceof HTMLElement)) throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
        r = t;
      }
      r.appendChild(n), n.hidden = !1;
    }
    return a(t), { update: a, destroy: function() {
      n.parentNode && n.parentNode.removeChild(n);
    } };
  }
  Ne(si, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, freeGiftsSummary: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var Pp = V('<div hidden=""><!></div>');
  function Qi(n, t) {
    Ye(t, !1);
    let r = k(t, "target", 12, "body");
    var a = { get target() {
      return r();
    }, set target(o) {
      r(o), _();
    } };
    (function(o = !1) {
      const u = ln, c = u.l.u;
      if (!c) return;
      let i = () => pc(u.s);
      if (o) {
        let s = 0, g = {};
        const h = Ci(() => {
          let p = !1;
          const v = u.s;
          for (const b in v) v[b] !== g[b] && (g[b] = v[b], p = !0);
          return p && s++, s;
        });
        i = () => e(h);
      }
      c.b.length && ar(() => {
        $c(u, i), ul(c.b);
      }), Je(() => {
        const s = en(() => c.m.map(Gd));
        return () => {
          for (const g of s) typeof g == "function" && g();
        };
      }), c.a.length && Je(() => {
        $c(u, i), ul(c.a);
      });
    })();
    var l = Pp();
    return yc(w(l), t, "default", {}), x(l), ys(l, (o, u) => Iu == null ? void 0 : Iu(o, u), r), f(n, l), Ke(a);
  }
  Ne(Qi, { target: {} }, ["default"], [], !0);
  const Mu = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], zu = [0, 12, 16, 20, 24, 28];
  var Sp = (n, t) => {
    n.target === n.currentTarget && t()();
  }, Bp = V('<img alt="Close"/>'), Cp = V('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), Ip = (n, t, r) => t(r(), n.currentTarget.value), Mp = V('<img alt="Clear"/>'), zp = V("<span> </span>"), Dp = V('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!></div></div>'), $p = V('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function Us(n, t) {
    Ye(t, !0);
    const r = () => Ie(p, "$translate", a), [a, l] = kt(), o = k(t, "product", 7), u = k(t, "selectedVariants", 7), c = k(t, "personalisationValues", 7), i = k(t, "addPersonalisationModal", 7), s = k(t, "inline", 7, !1), g = k(t, "onConfirm", 7), h = k(t, "onClose", 7), p = Dt(), v = d(() => {
      var q, S;
      return (S = (q = i()) == null ? void 0 : q.characterLimitEnabled) != null && S;
    }), b = d(() => {
      var q, S;
      return e(v) ? (S = (q = i()) == null ? void 0 : q.characterLimit) != null ? S : 30 : void 0;
    }), y = Math.max(...u().map(({ index: q }) => q), -1);
    let m = Te(lt(Array.from({ length: y + 1 }, (q, S) => c()[S] || "")));
    const C = new Set(c().map((q, S) => q && q.trim() !== "" ? S : -1).filter((q) => q !== -1)), P = d(() => i() ? (({ size: q, roundness: S, imageSize: T, textSize: M, overlayColor: R, primaryTextColor: ae, secondaryTextColor: N, buttonColor: A, buttonTextColor: $, errorColor: ne }) => {
      const te = Math.min(Math.max(0, q), Mu.length - 1), ie = Math.min(Math.max(0, S), zu.length - 1), X = Mu[te], ve = zu[ie];
      return dn({ "kaching-product-personalisation-font-0": X.fonts[0] + "px", "kaching-product-personalisation-font-1": X.fonts[1] + "px", "kaching-product-personalisation-font-2": X.fonts[2] + "px", "kaching-product-personalisation-font-3": X.fonts[3] + "px", "kaching-product-personalisation-gap-0": X.gaps[0] + "px", "kaching-product-personalisation-gap-1": X.gaps[1] + "px", "kaching-product-personalisation-gap-2": X.gaps[2] + "px", "kaching-product-personalisation-image-size": (T != null ? T : X.image) + "px", "kaching-product-personalisation-radius": ve + "px", "kaching-product-personalisation-text-size": M + "px", "kaching-product-personalisation-overlay-color": Ee(R), "kaching-product-personalisation-primary-text-color": Ee(ae), "kaching-product-personalisation-secondary-text-color": Ee(N), "kaching-product-personalisation-button-color": Ee(A), "kaching-product-personalisation-button-text-color": Ee($), "kaching-product-personalisation-error-color": Ee(ne) });
    })(i()) : "");
    function B(q, S) {
      if (e(b) === void 0 || S.length <= e(b)) {
        const T = [...e(m)];
        T[q] = S, re(m, T, !0);
      }
    }
    function O(q) {
      return C.has(q) && !!e(m)[q] && e(m)[q].trim() !== "";
    }
    const I = d(() => e(m).some((q) => q && q.trim() !== "")), E = d(() => C.size > 0), Z = d(() => !e(I) && !e(E));
    var G = { get product() {
      return o();
    }, set product(q) {
      o(q), _();
    }, get selectedVariants() {
      return u();
    }, set selectedVariants(q) {
      u(q), _();
    }, get personalisationValues() {
      return c();
    }, set personalisationValues(q) {
      c(q), _();
    }, get addPersonalisationModal() {
      return i();
    }, set addPersonalisationModal(q) {
      i(q), _();
    }, get inline() {
      return s();
    }, set inline(q = !1) {
      s(q), _();
    }, get onConfirm() {
      return g();
    }, set onConfirm(q) {
      g(q), _();
    }, get onClose() {
      return h();
    }, set onClose(q) {
      h(q), _();
    } }, ce = $p();
    let H;
    ce.__click = [Sp, h];
    var W = w(ce), J = w(W), Q = w(J), U = w(Q), z = w(U, !0);
    x(U), Et(F(U, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return h();
    }, children: (q, S) => {
      var T = Bp();
      pe(() => Pe(T, "src", js)), f(q, T);
    }, $$slots: { default: !0 } }), x(Q);
    var D = F(Q, 2);
    Zt(D, 21, u, ({ variant: q, index: S }) => S, (q, S) => {
      let T = () => e(S).variant, M = () => e(S).index;
      var R = Dp(), ae = w(R), N = w(ae), A = w(N);
      x(N);
      var $ = F(N, 2), ne = w($), te = w(ne);
      x(ne);
      var ie = F(ne, 2), X = (be) => {
        var we = Cp(), Le = w(we, !0);
        x(we), pe((Ce) => mt(Le, Ce), [() => T().options.join(", ")]), f(be, we);
      };
      L(ie, (be) => {
        o().variants.length > 1 && be(X);
      }), x($), x(ae);
      var ve = F(ae, 2), Be = w(ve), oe = w(Be);
      let fe;
      Wr(oe), oe.__input = [Ip, B, M];
      var ke = F(oe, 2), ze = (be) => {
        Et(be, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(we) {
          const Le = [...e(m)];
          Le[we] = "", re(m, Le, !0);
        })(M()), children: (we, Le) => {
          var Ce = Mp();
          pe(() => Pe(Ce, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), f(we, Ce);
        }, $$slots: { default: !0 } });
      };
      L(ke, (be) => {
        O(M()) && be(ze);
      }), x(Be);
      var he = F(Be, 2), de = (be) => {
        var we = zp();
        let Le;
        var Ce = w(we);
        x(we), pe((Se) => {
          var Qe, xe;
          Le = At(we, 1, "kaching-bundles__personalisation-modal__input-counter", null, Le, Se), mt(Ce, `${(Qe = (e(m)[M()] || "").length) != null ? Qe : ""}/${(xe = e(b)) != null ? xe : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(b) !== void 0 && (e(m)[M()] || "").length >= e(b) })]), f(be, we);
      };
      L(he, (be) => {
        e(v) && be(de);
      }), x(ve), x(R), pe((be, we) => {
        var Le;
        Pe(A, "src", T().image || o().image), mt(te, `${(Le = o().title) != null ? Le : ""} #${M() + 1}`), fe = At(oe, 1, "kaching-bundles__personalisation-modal__input", null, fe, be), Pe(oe, "placeholder", we), Ia(oe, e(m)[M()] || ""), Pe(oe, "maxlength", e(b));
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": O(M()), "kaching-bundles__personalisation-modal__input--error": e(b) !== void 0 && (e(m)[M()] || "").length >= e(b) }), () => {
        var be;
        return (be = i()) != null && be.placeholderText ? r()(i().placeholderText) : "";
      }]), f(q, R);
    }), x(D);
    var j = F(D, 2), Y = w(j);
    Et(Y, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return h();
    }, children: (q, S) => {
      ta();
      var T = Tn();
      pe((M) => mt(T, M), [() => r()("system.cancel")]), f(q, T);
    }, $$slots: { default: !0 } });
    var K = F(Y, 2);
    {
      let q = d(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e(Z) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Et(K, { element: "button", get class() {
        return e(q);
      }, get disabled() {
        return e(Z);
      }, onclick: () => g()(e(m)), children: (S, T) => {
        ta();
        var M = Tn();
        pe((R) => mt(M, R), [() => r()("system.confirm")]), f(S, M);
      }, $$slots: { default: !0 } });
    }
    x(j), x(J), x(W), x(ce), pe((q, S) => {
      H = At(ce, 1, "kaching-bundles__personalisation-modal-overlay", null, H, q), Nt(ce, e(P)), mt(z, S);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": s() }), () => {
      var q;
      return (q = i()) != null && q.heading ? r()(i().heading) : "";
    }]), f(n, ce);
    var ee = Ke(G);
    return l(), ee;
  }
  Dn(["click", "input"]), Ne(Us, { product: {}, selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Ap = (n, t) => {
    re(t, !0);
  }, Vp = (n, t) => {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), re(t, !0));
  }, qp = V('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), Tp = V('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), Gp = V('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), Op = V('<span class="kaching-bundles__product-personalisation__title"><!></span>'), Fp = V('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), Lp = V("<!> <!>", 1), jp = V('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), Ep = V('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), Rp = V('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), Qp = V('<div class="kaching-bundles"><!></div>'), Np = V('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function qa(n, t) {
    Ye(t, !0);
    const r = () => Ie(b, "$config", o), a = () => Ie(m, "$formatPrice", o), l = () => Ie(y, "$translate", o), [o, u] = kt();
    let c = k(t, "productPersonalisation", 7), i = k(t, "product", 7), s = k(t, "selectedVariantIds", 7), g = k(t, "quantity", 7), h = k(t, "addPersonalisationModal", 7), p = k(t, "onPersonalisationsChange", 7), v = k(t, "initialValues", 23, () => []);
    const b = fn(), y = Dt(), m = sn(), C = An();
    let P = Te(!1), B = Te(lt([]));
    Je(() => {
      c().id, v(), re(B, v().map((he) => he || ""), !0);
    });
    const O = d(() => {
      if (c().mediaImageGID) return Ie(C, "$getMediaImageUrl", o)(c().mediaImageGID);
    }), I = d(() => !e(O) && c().imageSize > 0), E = d(() => Math.round(100 * parseFloat(c().pricePerItem || "0") * r().currencyRate)), Z = d(() => Math.round(100 * parseFloat(c().compareAtPrice || "0") * r().currencyRate)), G = d(() => e(E)), ce = d(() => e(Z)), H = d(() => e(ce) > 0 && e(ce) > e(G)), W = d(() => ((he) => dn({ "kaching-product-personalisation-image-height": he.imageSize + "px" }))(c())), J = d(() => gn({ priceFormatter: a(), product: void 0, totalFullPrice: e(ce) || e(G), totalDiscountedPrice: e(G), quantity: g(), unitQuantity: null })), Q = d(() => e(J)(l()(c().title))), U = d(() => c().subtitle ? e(J)(l()(c().subtitle)) : ""), z = d(() => s().map((he, de) => ({ variant: i().variants.find((be) => be.id === he) || i().variants[0], index: de }))), D = d(() => e(B).some((he) => (he || "").trim() !== "")), j = d(() => e(B).map((he, de) => ({ value: he, index: de })).filter(({ value: he }) => (he || "").trim() !== "")), Y = d(() => g() === 1);
    function K(he) {
      var de;
      const be = he.map((Se) => Se || "");
      if (re(B, be, !0), re(P, !1), !c().variantGID) return;
      const we = Rt(c().variantGID);
      if (!we) return;
      const Le = l()(c().valueLabel || "Value"), Ce = be.map((Se, Qe) => ({ id: c().id, variantId: we, text: Se, valueLabel: Le, productIndex: Qe })).filter((Se) => Se.text.trim() !== "");
      (de = p()) == null || de(Ce);
    }
    var ee = { get productPersonalisation() {
      return c();
    }, set productPersonalisation(he) {
      c(he), _();
    }, get product() {
      return i();
    }, set product(he) {
      i(he), _();
    }, get selectedVariantIds() {
      return s();
    }, set selectedVariantIds(he) {
      s(he), _();
    }, get quantity() {
      return g();
    }, set quantity(he) {
      g(he), _();
    }, get addPersonalisationModal() {
      return h();
    }, set addPersonalisationModal(he) {
      h(he), _();
    }, get onPersonalisationsChange() {
      return p();
    }, set onPersonalisationsChange(he) {
      p(he), _();
    }, get initialValues() {
      return v();
    }, set initialValues(he = []) {
      v(he), _();
    } }, q = Np(), S = _e(q);
    let T;
    S.__click = [Ap, P], S.__keydown = [Vp, P];
    var M = w(S), R = w(M), ae = (he) => {
      var de = qp(), be = w(de);
      x(de), pe(() => {
        Pe(be, "src", e(O)), Pe(be, "height", c().imageSize || 0);
      }), f(he, de);
    }, N = (he) => {
      var de = De(), be = _e(de), we = (Le) => {
        var Ce = Tp(), Se = w(Ce);
        x(Ce), pe(() => {
          Pe(Se, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), Pe(Se, "height", c().imageSize || 0);
        }), f(Le, Ce);
      };
      L(be, (Le) => {
        e(I) && Le(we);
      }, !0), f(he, de);
    };
    L(R, (he) => {
      e(O) ? he(ae) : he(N, !1);
    });
    var A = F(R, 2), $ = w(A), ne = (he) => {
      var de = De();
      Zt(_e(de), 17, () => e(j), ({ value: be, index: we }) => we, (be, we) => {
        var Le = Gp(), Ce = w(Le), Se = (ue) => {
          var $e = Tn();
          pe(() => mt($e, `#${e(we).index + 1}`)), f(ue, $e);
        };
        L(Ce, (ue) => {
          e(Y) || ue(Se);
        });
        var Qe = F(Ce, 2), xe = w(Qe, !0);
        x(Qe), x(Le), pe(() => mt(xe, e(we).value)), f(be, Le);
      }), f(he, de);
    }, te = (he) => {
      var de = Lp(), be = _e(de), we = (Se) => {
        var Qe = Op();
        Ge(w(Qe), () => e(Q)), x(Qe), f(Se, Qe);
      };
      L(be, (Se) => {
        e(Q) && Se(we);
      });
      var Le = F(be, 2), Ce = (Se) => {
        var Qe = Fp();
        Ge(w(Qe), () => e(U)), x(Qe), f(Se, Qe);
      };
      L(Le, (Se) => {
        e(U) && Se(Ce);
      }), f(he, de);
    };
    L($, (he) => {
      e(D) ? he(ne) : he(te, !1);
    }), x(A), x(M);
    var ie = F(M, 2), X = w(ie), ve = (he) => {
      var de = Ep(), be = w(de);
      Ge(be, () => a()(e(G)));
      var we = F(be, 2), Le = (Ce) => {
        var Se = jp(), Qe = w(Se, !0);
        x(Se), pe(() => mt(Qe, c().pricePerItemUnitLabel)), f(Ce, Se);
      };
      L(we, (Ce) => {
        c().pricePerItemUnitLabel && Ce(Le);
      }), x(de), f(he, de);
    };
    L(X, (he) => {
      e(G) > 0 && he(ve);
    });
    var Be = F(X, 2), oe = (he) => {
      var de = Rp();
      Ge(w(de), () => a()(e(ce))), x(de), f(he, de);
    };
    L(Be, (he) => {
      e(H) && he(oe);
    }), x(ie), x(S);
    var fe = F(S, 2), ke = (he) => {
      Qi(he, { target: "body", children: (de, be) => {
        var we = Qp();
        Us(w(we), { get product() {
          return i();
        }, get selectedVariants() {
          return e(z);
        }, get personalisationValues() {
          return e(B);
        }, get addPersonalisationModal() {
          return h();
        }, onConfirm: K, onClose: () => {
          re(P, !1);
        } }), x(we), f(de, we);
      }, $$slots: { default: !0 } });
    };
    L(fe, (he) => {
      e(P) && he(ke);
    }), pe((he) => {
      T = At(S, 1, "kaching-bundles__product-personalisation", null, T, he), Pe(S, "data-product-personalisation-id", c().id), Nt(S, e(W));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(D) })]), f(n, q);
    var ze = Ke(ee);
    return u(), ze;
  }
  function Wp(n, t, r) {
    const a = Number(n.target.value), l = t().find((o) => o.id === a);
    r()(l);
  }
  Dn(["click", "keydown"]), Ne(qa, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var Up = (n) => n.stopPropagation(), Hp = V("<option> </option>"), Zp = V('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function ca(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "sellingPlans", 7), o = k(t, "selectedSellingPlan", 7), u = k(t, "onChange", 7), c = Dt();
    var i, s = { get sellingPlans() {
      return l();
    }, set sellingPlans(p) {
      l(p), _();
    }, get selectedSellingPlan() {
      return o();
    }, set selectedSellingPlan(p) {
      o(p), _();
    }, get onChange() {
      return u();
    }, set onChange(p) {
      u(p), _();
    } }, g = Zp();
    g.__change = [Wp, l, u], g.__click = [Up], Zt(g, 21, l, (p) => p.id, (p, v) => {
      var b = Hp(), y = w(b, !0);
      x(b);
      var m = {};
      pe(() => {
        var C;
        mt(y, e(v).name), m !== (m = e(v).id) && (b.value = (C = b.__value = e(v).id) != null ? C : "");
      }), f(p, b);
    }), x(g), Ps(g), pe((p) => {
      var v;
      Pe(g, "aria-label", p), i !== (i = o().id) && (g.value = (v = g.__value = o().id) != null ? v : "", $i(g, o().id));
    }, [() => Ie(c, "$translate", r)("system.subscription_plan")]), f(n, g);
    var h = Ke(s);
    return a(), h;
  }
  Dn(["change", "click"]), Ne(ca, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var Jp = En('<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Ol(n) {
    f(n, Jp());
  }
  Ne(Ol, {}, [], [], !0);
  var Yp = V('<img alt="" class="kaching-bundles__upsell__image"/>'), Kp = V('<div class="kaching-bundles__upsell__price"><!></div>'), Xp = V('<div class="kaching-bundles__upsell__full-price"><!></div>'), ef = V('<div class="kaching-bundles__upsell__price"><!></div>'), tf = V('<div class="kaching-bundles__upsell__full-price"><!></div>'), nf = V('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), rf = V('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), af = V('<div class="kaching-bundles__upsell__price"><!></div>'), lf = V('<div class="kaching-bundles__upsell__full-price"><!></div>'), sf = V('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), of = V('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), cf = V('<div class="kaching-bundles__upsell__price"><!></div>'), uf = V('<div class="kaching-bundles__upsell__full-price"><!></div>'), df = V("<!> <!>", 1), gf = V('<div><div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function Du(n, t) {
    Ye(t, !0);
    const r = () => Ie(m, "$config", l), a = () => Ie(b, "$formatPrice", l), [l, o] = kt();
    let u = k(t, "dealBlock", 7), c = k(t, "upsell", 7), i = k(t, "product", 7), s = k(t, "dealBarSelected", 7, !1), g = k(t, "dealSellingPlan", 7), h = k(t, "sets", 7), p = k(t, "onChange", 7);
    const v = Dt(), b = sn(), y = An(), m = fn();
    let C = Te(lt(c().preselected)), P = Te(void 0), B = Te(void 0);
    const O = d(() => c().variantGIDs ? c().variantGIDs.map(Rt) : i().variants.map((oe) => oe.id)), I = d(() => ({ ...i(), variants: i().variants.filter((oe) => (r().preview || oe.availableForSale) && e(O).includes(oe.id)) })), E = d(() => (function(oe, fe) {
      if (oe !== void 0) return oe;
      if (fe != null && fe.availableForSale && fe.variants.length > 0) return fe.variants[0].id;
    })(e(P), e(I))), Z = d(() => e(I).variants.find((oe) => oe.id === e(E))), G = d(() => Ie(y, "$getMediaImageUrl", l)(c().mediaImageGID)), ce = d(() => ((oe, fe) => {
      const { fonts: ke, colors: ze, cornerRadius: he } = oe;
      return dn({ "kaching-upsell-background-color": ze.upsellBackground && Ee(ze.upsellBackground), "kaching-upsell-text-color": ze.upsellText && Ee(ze.upsellText), "kaching-upsell-selected-background-color": ze.upsellSelectedBackground && Ee(ze.upsellSelectedBackground), "kaching-upsell-selected-text-color": ze.upsellSelectedText && Ee(ze.upsellSelectedText), "kaching-upsell-font-size": ke.upsell && ke.upsell.size + "px", "kaching-upsell-font-weight": ke.upsell && er(ke.upsell.style), "kaching-upsell-font-style": ke.upsell && tr(ke.upsell.style), "kaching-upsell-image-border-radius": (he || 0) / 2 + "px", "kaching-upsell-image-height": fe.imageSize + "px" });
    })(u(), c())), H = d(() => i().url ? `${i().url}?variant=${e(E)}` : void 0), W = d(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), J = d(() => c().quantity * h()), Q = d(() => (function(oe) {
      if (!oe) return 0;
      let fe = oe.price;
      return u().useProductCompareAtPrice && oe.compareAtPrice && (fe = Math.max(fe, oe.compareAtPrice)), fe * e(J);
    })(e(Z))), U = d(() => Math.ceil(e(Q) / e(J))), z = d(() => {
      var oe;
      return (oe = c().subscriptionEnabled) == null || oe;
    }), D = d(() => {
      var oe;
      return (oe = c().subscriptionType) != null ? oe : "deal";
    }), j = d(() => {
      if (!e(z) || e(D) !== "always" || !e(Z)) return [];
      const oe = new Set(e(Z).sellingPlans.map((fe) => fe.id));
      return i().sellingPlans.filter((fe) => oe.has(fe.id));
    }), Y = d(() => e(j).find((oe) => oe.id === e(B)) || e(j)[0]);
    Je(() => {
      var oe;
      e(j).some((fe) => {
        var ke;
        return fe.id === ((ke = g()) == null ? void 0 : ke.id);
      }) && re(B, (oe = g()) == null ? void 0 : oe.id, !0);
    });
    const K = d(() => {
      if (e(Z) && e(z))
        return e(D) === "deal" ? g() ? Qn(i(), e(Z), g()) : void 0 : e(Y);
    }), ee = d(() => Zr({ discountType: c().discountType, discountValue: c().discountValue, discountQuantity: c().quantity, variantQuantities: e(Z) ? [{ variant: e(Z), quantity: e(J) }] : [], currencyRate: r().currencyRate, priceRounding: e(W), sellingPlan: e(K) })), q = d(() => Math.ceil(e(ee) / e(J))), S = d(() => e(Q) > e(ee)), T = d(() => e(Z) && qs(e(Z))), M = d(() => e(Z) ? cr([{ variant: e(Z), quantity: e(J) }]) : null), R = d(() => e(M) ? e(ee) / e(M) : null), ae = d(() => gn({ priceFormatter: a(), product: i(), totalFullPrice: e(Q), totalDiscountedPrice: e(ee), quantity: e(J), unitQuantity: e(M), sellingPlan: e(K) })), N = d(() => e(ae)(Ie(v, "$translate", l)(c().text)));
    function A(oe) {
      re(P, oe, !0);
    }
    function $() {
      s() && re(C, !e(C));
    }
    ar(() => {
      c().productGID, re(P, void 0);
    }), Je(() => {
      if (e(Z) && i().availableForSale && e(J)) {
        const oe = e(C), fe = e(K);
        en(() => {
          p()({ variant: oe ? e(Z) : null, product: oe ? i() : null, discountedPrice: oe ? e(ee) : 0, fullPrice: oe ? e(Q) : 0, sellingPlan: oe ? fe : void 0 });
        });
      }
    });
    const ne = d(() => !i().availableForSale || i().variants.filter((oe) => oe.availableForSale && e(O).includes(oe.id)).length === 0);
    var te = { get dealBlock() {
      return u();
    }, set dealBlock(oe) {
      u(oe), _();
    }, get upsell() {
      return c();
    }, set upsell(oe) {
      c(oe), _();
    }, get product() {
      return i();
    }, set product(oe) {
      i(oe), _();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(oe = !1) {
      s(oe), _();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(oe) {
      g(oe), _();
    }, get sets() {
      return h();
    }, set sets(oe) {
      h(oe), _();
    }, get onChange() {
      return p();
    }, set onChange(oe) {
      p(oe), _();
    } }, ie = De(), X = _e(ie), ve = (oe) => {
      var fe = gf();
      let ke;
      var ze = w(fe), he = w(ze), de = (je) => {
        {
          let dt = d(() => ["kaching-bundles__upsell__checkbox", e(C) && "kaching-bundles__upsell__checkbox--selected"]);
          Et(je, { element: "span", get class() {
            return e(dt);
          }, onclick: $, children: (at, ot) => {
            var rt = De(), ft = _e(rt), Tt = ($t) => {
              Ol($t);
            };
            L(ft, ($t) => {
              e(C) && $t(Tt);
            }), f(at, rt);
          }, $$slots: { default: !0 } });
        }
      };
      L(he, (je) => {
        s() && je(de);
      });
      var be = F(he, 2), we = (je) => {
        {
          let dt = d(() => s() ? e(H) : void 0);
          Rn(je, { get url() {
            return e(dt);
          }, class: "kaching-bundles__upsell__link", children: (at, ot) => {
            var rt = Yp();
            pe(() => {
              var ft;
              Pe(rt, "src", e(G) || ((ft = e(Z)) == null ? void 0 : ft.image) || i().image), Pe(rt, "height", c().imageSize);
            }), f(at, rt);
          }, $$slots: { default: !0 } });
        }
      };
      L(be, (je) => {
        c().imageSize > 0 && je(we);
      });
      var Le = F(be, 2), Ce = w(Le), Se = (je) => {
        Et(je, { element: "span", class: "kaching-bundles__upsell__text", onclick: $, children: (dt, at) => {
          var ot = De();
          Ge(_e(ot), () => e(N)), f(dt, ot);
        }, $$slots: { default: !0 } });
      };
      L(Ce, (je) => {
        e(N) && je(Se);
      });
      var Qe = F(Ce, 2), xe = (je) => {
        Gn(je, { get product() {
          return e(I);
        }, get selectedVariantId() {
          return e(E);
        }, onChange: A });
      };
      L(Qe, (je) => {
        s() && e(I) && e(I).variants.length > 1 && e(E) && je(xe);
      });
      var ue = F(Qe, 2), $e = (je) => {
        ca(je, { get sellingPlans() {
          return e(j);
        }, get selectedSellingPlan() {
          return e(Y);
        }, onChange: (dt) => re(B, dt.id, !0) });
      };
      L(ue, (je) => {
        s() && e(C) && e(j).length > 1 && e(Y) && je($e);
      }), x(Le), x(ze);
      var ge = F(ze, 2), Re = w(ge), nt = (je) => {
        var dt = rf(), at = _e(dt), ot = w(at);
        Xe(ot, () => e(q), (Me) => {
          var Ze = Kp();
          Ge(w(Ze), () => a()(e(q))), x(Ze), f(Me, Ze);
        });
        var rt = F(ot, 2), ft = (Me) => {
          var Ze = De();
          Xe(_e(Ze), () => e(U), (bt) => {
            var ct = Xp();
            Ge(w(ct), () => a()(e(U))), x(ct), f(bt, ct);
          }), f(Me, Ze);
        };
        L(rt, (Me) => {
          e(S) && Me(ft);
        }), x(at);
        var Tt = F(at, 2), $t = (Me) => {
          var Ze = nf(), bt = w(Ze);
          Xe(bt, () => e(ee), (yt) => {
            var We = ef();
            Ge(w(We), () => a()(e(ee))), x(We), f(yt, We);
          });
          var ct = F(bt, 2), vt = (yt) => {
            var We = De();
            Xe(_e(We), () => e(Q), (wt) => {
              var tn = tf();
              Ge(w(tn), () => a()(e(Q))), x(tn), f(wt, tn);
            }), f(yt, We);
          };
          L(ct, (yt) => {
            e(S) && yt(vt);
          }), x(Ze), f(Me, Ze);
        };
        L(Tt, (Me) => {
          e(J) > 1 && Me($t);
        }), f(je, dt);
      }, et = (je) => {
        var dt = De(), at = _e(dt), ot = (ft) => {
          var Tt = of(), $t = _e(Tt), Me = w($t);
          Xe(Me, () => e(ee), (vt) => {
            var yt = af();
            Ge(w(yt), () => a()(u().showPricesPerItem ? e(q) : e(ee))), x(yt), f(vt, yt);
          });
          var Ze = F(Me, 2), bt = (vt) => {
            var yt = De();
            Xe(_e(yt), () => e(Q), (We) => {
              var wt = lf();
              Ge(w(wt), () => a()(u().showPricesPerItem ? e(U) : e(Q))), x(wt), f(We, wt);
            }), f(vt, yt);
          };
          L(Ze, (vt) => {
            e(S) && vt(bt);
          }), x($t);
          var ct = F($t, 2);
          Xe(w(ct), () => e(R), (vt) => {
            var yt = sf(), We = w(yt);
            Ge(We, () => a()(e(R), { preserveDecimals: !0 }));
            var wt = F(We);
            x(yt), pe(() => {
              var tn;
              return mt(wt, ` / ${(tn = e(T)) != null ? tn : ""}`);
            }), f(vt, yt);
          }), x(ct), f(ft, Tt);
        }, rt = (ft) => {
          var Tt = df(), $t = _e(Tt);
          Xe($t, () => e(ee), (bt) => {
            var ct = cf();
            Ge(w(ct), () => a()(u().showPricesPerItem ? e(q) : e(ee))), x(ct), f(bt, ct);
          });
          var Me = F($t, 2), Ze = (bt) => {
            var ct = De();
            Xe(_e(ct), () => e(Q), (vt) => {
              var yt = uf();
              Ge(w(yt), () => a()(u().showPricesPerItem ? e(U) : e(Q))), x(yt), f(vt, yt);
            }), f(bt, ct);
          };
          L(Me, (bt) => {
            e(S) && bt(Ze);
          }), f(ft, Tt);
        };
        L(at, (ft) => {
          e(R) && e(T) && !r().ignoreUnitPrice ? ft(ot) : ft(rt, !1);
        }, !0), f(je, dt);
      };
      L(Re, (je) => {
        u().showBothPrices ? je(nt) : je(et, !1);
      }), x(ge), x(fe), pe((je) => {
        ke = At(fe, 1, "kaching-bundles__upsell", null, ke, je), Pe(fe, "data-upsell-id", c().id), Nt(fe, e(ce));
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(ne) })]), f(oe, fe);
    };
    L(X, (oe) => {
      !(e(Z) || r().preview && e(ne)) || c().visibleOnlyWhenDealBarSelected && !s() || oe(ve);
    }), f(n, ie);
    var Be = Ke(te);
    return o(), Be;
  }
  Ne(Du, { dealBlock: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var hf = V('<div class="kaching-bundles__free-gift__divider"></div>'), pf = V("<!> <!>", 1);
  function oi(n, t) {
    Ye(t, !0);
    const r = () => Ie(v, "$config", a), [a, l] = kt();
    let o = k(t, "dealBlock", 7), u = k(t, "upsells", 7), c = k(t, "otherProducts", 7), i = k(t, "complementaryProducts", 7), s = k(t, "dealBarSelected", 7), g = k(t, "dealSellingPlan", 7), h = k(t, "sets", 7, 1), p = k(t, "onChange", 7);
    const v = fn();
    let b = Te(lt({}));
    const y = d(() => r().preview ? c() : c().map(or)), m = d(() => r().preview ? i() : i().map(or)), C = Math.floor(1e3 * Math.random()), P = d(() => u().flatMap((E, Z) => {
      if (E.productSource === "complementary") {
        const ce = e(m)[(Z + C) % (e(m).length || 1)];
        return ce && (r().preview || ce.availableForSale) ? { upsell: E, product: ce } : [];
      }
      if (!E.productGID) return [];
      const G = e(y).find((ce) => ce.id === Rt(E.productGID));
      if (!G) return [];
      if (!r().preview) {
        if (!G.availableForSale) return [];
        const ce = E.variantGIDs ? E.variantGIDs.map(Rt) : G.variants.map((H) => H.id);
        if (!G.variants.some((H) => H.availableForSale && ce.includes(H.id))) return [];
      }
      return { upsell: E, product: G };
    }));
    var B = { get dealBlock() {
      return o();
    }, set dealBlock(E) {
      o(E), _();
    }, get upsells() {
      return u();
    }, set upsells(E) {
      u(E), _();
    }, get otherProducts() {
      return c();
    }, set otherProducts(E) {
      c(E), _();
    }, get complementaryProducts() {
      return i();
    }, set complementaryProducts(E) {
      i(E), _();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(E) {
      s(E), _();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(E) {
      g(E), _();
    }, get sets() {
      return h();
    }, set sets(E = 1) {
      h(E), _();
    }, get onChange() {
      return p();
    }, set onChange(E) {
      p(E), _();
    } }, O = De();
    Zt(_e(O), 19, () => e(P), ({ upsell: E, product: Z }) => E.id, (E, Z, G) => {
      let ce = () => e(Z).upsell;
      var H = pf(), W = _e(H);
      Du(W, { get dealBlock() {
        return o();
      }, get upsell() {
        return ce();
      }, get product() {
        return e(Z).product;
      }, get dealBarSelected() {
        return s();
      }, get dealSellingPlan() {
        return g();
      }, get sets() {
        return h();
      }, onChange: (U) => (function(z, D) {
        const { variant: j, product: Y, discountedPrice: K, fullPrice: ee, sellingPlan: q } = D;
        j && Y ? e(b)[z] = { variant: j, product: Y, discountedPrice: K, fullPrice: ee, sellingPlan: q } : delete e(b)[z];
        const S = u().filter((T) => T.id in e(b)).map((T) => ({ id: T.id, variant: e(b)[T.id].variant, product: e(b)[T.id].product, quantity: T.quantity * h(), discountedPrice: e(b)[T.id].discountedPrice, fullPrice: e(b)[T.id].fullPrice, sellingPlan: e(b)[T.id].sellingPlan }));
        p()(S);
      })(ce().id, U) });
      var J = F(W, 2), Q = (U) => {
        f(U, hf());
      };
      L(J, (U) => {
        e(G) < e(P).length - 1 && U(Q);
      }), f(E, H);
    }), f(n, O);
    var I = Ke(B);
    return l(), I;
  }
  Ne(oi, { dealBlock: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var ff = V('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), bf = V('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function Dr(n, t) {
    Ye(t, !0);
    const r = () => Ie(i, "$translate", a), [a, l] = kt(), o = k(t, "amount", 7), u = k(t, "showPricesPerItem", 7), c = k(t, "unitLabel", 7, ""), i = Dt(), s = sn();
    var g = { get amount() {
      return o();
    }, set amount(m) {
      o(m), _();
    }, get showPricesPerItem() {
      return u();
    }, set showPricesPerItem(m) {
      u(m), _();
    }, get unitLabel() {
      return c();
    }, set unitLabel(m = "") {
      c(m), _();
    } }, h = bf(), p = w(h);
    Ge(p, () => Ie(s, "$formatPrice", a)(o()));
    var v = F(p, 2), b = (m) => {
      var C = ff();
      Ge(w(C), () => r()(c())), x(C), f(m, C);
    };
    L(v, (m) => {
      u() && c() && m(b);
    }), x(h), pe((m) => Pe(h, "data-a11y-label", m), [() => r()("system.price")]), f(n, h);
    var y = Ke(g);
    return l(), y;
  }
  Ne(Dr, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  const $u = "variantBadges";
  function Au(n = []) {
    const t = Ur(Vu(n));
    return Wa($u, t), { setVariantBadges: (r) => {
      t.set(Vu(r));
    } };
  }
  function Vu(n) {
    const t = new Map(n.map((r) => [r.variantId, r.badgeHtml]));
    return (r) => r === void 0 ? void 0 : t.get(r);
  }
  var vf = V('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function qu(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "lowStockAlert", 7), o = k(t, "inventoryQuantity", 7), u = Dt(), c = d(() => {
      return b = Ie(u, "$translate", r)(l().message), y = { stock: o() ? o().toString() : null }, b.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, C) => {
        var P;
        return (P = y[C]) != null ? P : "";
      });
      var b, y;
    }), i = d(() => ((b) => {
      const { textColor: y } = b;
      return dn({ "kaching-bundles-low-stock-alert-text-color": Ee(y) });
    })(l()));
    var s = { get lowStockAlert() {
      return l();
    }, set lowStockAlert(b) {
      l(b), _();
    }, get inventoryQuantity() {
      return o();
    }, set inventoryQuantity(b) {
      o(b), _();
    } }, g = De(), h = _e(g), p = (b) => {
      var y = vf();
      Ge(w(y), () => e(c)), x(y), pe(() => Nt(y, e(i))), f(b, y);
    };
    L(h, (b) => {
      o() && o() > 0 && o() < l().threshold && b(p);
    }), f(n, g);
    var v = Ke(s);
    return a(), v;
  }
  Ne(qu, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var _f = V("<div><!></div>");
  function Jr(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "dealBlock", 7), o = k(t, "variant", 7), u = (function() {
      const b = Na($u);
      if (!b) throw new Error("getVariantBadges must be called within a component tree that has setupVariantBadges initialized");
      return b;
    })(), c = d(() => {
      var b;
      return Ie(u, "$variantBadgeLookup", r)((b = o()) == null ? void 0 : b.id);
    });
    var i = { get dealBlock() {
      return l();
    }, set dealBlock(b) {
      l(b), _();
    }, get variant() {
      return o();
    }, set variant(b) {
      o(b), _();
    } }, s = De(), g = _e(s), h = (b) => {
      var y = _f();
      Ge(w(y), () => e(c)), x(y), f(b, y);
    }, p = (b) => {
      var y = De(), m = _e(y), C = (P) => {
        {
          let B = d(() => {
            var O, I;
            return (I = (O = o()) == null ? void 0 : O.inventoryQuantity) != null ? I : null;
          });
          qu(P, { get lowStockAlert() {
            return l().lowStockAlert;
          }, get inventoryQuantity() {
            return e(B);
          } });
        }
      };
      L(m, (P) => {
        l().lowStockAlertEnabled && l().lowStockAlert && P(C);
      }, !0), f(b, y);
    };
    L(g, (b) => {
      e(c) ? b(h) : b(p, !1);
    }), f(n, s);
    var v = Ke(i);
    return a(), v;
  }
  Ne(Jr, { dealBlock: {}, variant: {} }, [], [], !0);
  var mf = V('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function ci(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "showAsSoldOut", 7), o = k(t, "replaceLiquid", 7), u = Dt(), c = d(() => o()(Ie(u, "$translate", r)(l().label)));
    var i = { get showAsSoldOut() {
      return l();
    }, set showAsSoldOut(h) {
      l(h), _();
    }, get replaceLiquid() {
      return o();
    }, set replaceLiquid(h) {
      o(h), _();
    } }, s = mf();
    Ge(w(s), () => e(c)), x(s), f(n, s);
    var g = Ke(i);
    return a(), g;
  }
  Ne(ci, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const Ni = (n) => {
    const { opacity: t, backgroundColor: r, textColor: a, textSize: l } = n;
    return dn({ "kaching-bundles-show-as-sold-out-opacity": t.toString(), "kaching-bundles-show-as-sold-out-background-color": Ee(r), "kaching-bundles-show-as-sold-out-text-color": Ee(a), "kaching-bundles-show-as-sold-out-text-size": l + "px" });
  };
  var kf = V('<img alt="Decrease"/>'), yf = V('<img alt="Increase"/>'), xf = V('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function Wi(n, t) {
    Ye(t, !0);
    const [r, a] = kt();
    let l = k(t, "value", 7), o = k(t, "onChange", 7), u = k(t, "min", 7, 1);
    const c = Dt(), i = d(() => l() <= u());
    var s = { get value() {
      return l();
    }, set value(b) {
      l(b), _();
    }, get onChange() {
      return o();
    }, set onChange(b) {
      o(b), _();
    }, get min() {
      return u();
    }, set min(b = 1) {
      u(b), _();
    } }, g = xf(), h = w(g);
    {
      let b = d(() => ["kaching-bundles__quantity-selector__button", e(i) && "kaching-bundles__quantity-selector__button--disabled"]);
      Et(h, { element: "div", get class() {
        return e(b);
      }, onclick: function(y) {
        y.stopPropagation(), o()(Math.max(l() - 1, u()));
      }, get disabled() {
        return e(i);
      }, children: (y, m) => {
        var C = kf();
        pe(() => Pe(C, "src", fu)), f(y, C);
      }, $$slots: { default: !0 } });
    }
    var p = F(h, 2);
    Wr(p), Et(F(p, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(b) {
      b.stopPropagation(), o()(l() + 1);
    }, children: (b, y) => {
      var m = yf();
      pe(() => Pe(m, "src", bu)), f(b, m);
    }, $$slots: { default: !0 } }), x(g), pe((b) => {
      Pe(p, "aria-label", b), Ia(p, l()), Pe(p, "min", u());
    }, [() => Ie(c, "$translate", r)("system.quantity")]), bc("blur", p, function(b) {
      const y = b.target, m = parseInt(y.value);
      o()(isNaN(m) ? u() : Math.max(m, u()));
    }), f(n, g);
    var v = Ke(s);
    return a(), v;
  }
  function wf(n, t) {
    n.target === n.currentTarget && t()();
  }
  Ne(Wi, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var Pf = V('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function Tu(n, t) {
    Ye(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelector", 7), l = k(t, "products", 23, () => []), o = k(t, "initialSelectedGifts", 7), u = k(t, "isOpen", 7), c = k(t, "onConfirm", 7), i = k(t, "onClose", 7);
    var s = { get dealBlock() {
      return r();
    }, set dealBlock(v) {
      r(v), _();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(v) {
      a(v), _();
    }, get products() {
      return l();
    }, set products(v = []) {
      l(v), _();
    }, get initialSelectedGifts() {
      return o();
    }, set initialSelectedGifts(v) {
      o(v), _();
    }, get isOpen() {
      return u();
    }, set isOpen(v) {
      u(v), _();
    }, get onConfirm() {
      return c();
    }, set onConfirm(v) {
      c(v), _();
    }, get onClose() {
      return i();
    }, set onClose(v) {
      i(v), _();
    } }, g = De(), h = _e(g), p = (v) => {
      Qi(v, { target: "body", children: (b, y) => {
        var m = Pf(), C = w(m);
        C.__click = [wf, i];
        var P = w(C);
        Ts(w(P), { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return a();
        }, get products() {
          return l();
        }, get initialSelectedGifts() {
          return o();
        }, get onConfirm() {
          return c();
        }, get onClose() {
          return i();
        } }), x(P), x(C), x(m), pe((B) => Nt(C, B), [() => (function(B) {
          var O;
          return dn({ "kaching-choose-multiple-gifts-overlay-color": Ee(((O = B.chooseMultipleGiftsModal) == null ? void 0 : O.overlayColor) || Vh) });
        })(r())]), f(b, m);
      }, $$slots: { default: !0 } });
    };
    return L(h, (v) => {
      u() && v(p);
    }), f(n, g), Ke(s);
  }
  Dn(["click"]), Ne(Tu, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Sf = En('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Gu(n) {
    f(n, Sf());
  }
  Ne(Gu, {}, [], [], !0);
  var Bf = V('<img alt="" class="kaching-bundles__free-gift__image"/>'), Cf = V('<div class="kaching-bundles__free-gift__image"></div>'), If = V('<span class="kaching-bundles__free-gift__text"><!></span>'), Mf = V('<span class="kaching-bundles__free-gift__add-button"><!></span>'), zf = V('<div class="kaching-bundles__free-gift__full-price"><!></div>'), Df = V('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function Ou(n, t) {
    Ye(t, !0);
    const r = () => Ie(v, "$formatPrice", l), a = () => Ie(b, "$translate", l), [l, o] = kt();
    let u = k(t, "dealBlock", 7), c = k(t, "multipleGiftsSelector", 7), i = k(t, "selectedVariants", 7), s = k(t, "otherProducts", 7), g = k(t, "onConfirm", 7), h = Te(!1);
    const p = d(() => (c().products || []).flatMap((M) => {
      const R = Rt(M.id), ae = s().find((A) => A.id === R);
      if (!ae || !ae.availableForSale) return [];
      const N = or(ae);
      if (M.variantGIDs && M.variantGIDs.length > 0) {
        const A = M.variantGIDs.map(Rt);
        return { ...N, variants: N.variants.filter(($) => A.includes($.id)) };
      }
      return N;
    })), v = sn(), b = Dt(), y = An(), m = d(() => Qs({ dealBlock: u(), imageSize: c().imageSize })), C = d(() => {
      if (c().mediaImageGID) return Ie(y, "$getMediaImageUrl", l)(c().mediaImageGID);
    }), P = d(() => i().reduce((M, R) => M + R.quantity, 0)), B = d(() => e(P) >= c().maxQuantity), O = d(() => (function(M, R) {
      if (!R.length) return 0;
      let ae = R.reduce((N, A) => N + A.fullPrice * A.quantity, 0);
      return R.some((N) => N.variant.compareAtPrice) && M.useProductCompareAtPrice && (ae = Math.max(ae, R.reduce((N, A) => N + (A.variant.compareAtPrice || 0), 0))), ae;
    })(u(), i())), I = d(() => new Map((c().products || []).flatMap((M) => {
      const R = s().find((ae) => ae.id === Rt(M.id));
      return R ? [[R.id, R]] : [];
    }))), E = d(() => i().flatMap((M) => Array.from({ length: M.quantity }, () => M.product.title))), Z = d(() => gn({ priceFormatter: r(), product: void 0, products: e(I), selectedProductTitles: e(E), totalFullPrice: e(O), totalDiscountedPrice: 0, quantity: e(P), unitQuantity: null })), G = d(() => e(B) ? e(Z)(a()(c().textAfterSelection)) : e(Z)(a()(c().textBeforeSelection)));
    var ce = { get dealBlock() {
      return u();
    }, set dealBlock(M) {
      u(M), _();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(M) {
      c(M), _();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(M) {
      i(M), _();
    }, get otherProducts() {
      return s();
    }, set otherProducts(M) {
      s(M), _();
    }, get onConfirm() {
      return g();
    }, set onConfirm(M) {
      g(M), _();
    } }, H = Df(), W = w(H);
    {
      let M = d(() => {
        var R;
        return (R = e(G)) == null ? void 0 : R.replace(/<[^>]*>/g, "");
      });
      Et(W, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(M);
      }, onclick: () => re(h, !0) });
    }
    var J = F(W, 2), Q = w(J), U = (M) => {
      var R = Bf();
      pe(() => {
        Pe(R, "src", e(C)), Pe(R, "height", c().imageSize || 0);
      }), f(M, R);
    }, z = (M) => {
      var R = De(), ae = _e(R), N = (A) => {
        var $ = Cf();
        let ne;
        pe((te) => ne = Nt($, "", ne, te), [() => {
          var te;
          return { height: `${(te = c().imageSize) != null ? te : ""}px` };
        }]), f(A, $);
      };
      L(ae, (A) => {
        c().imageSize && A(N);
      }, !0), f(M, R);
    };
    L(Q, (M) => {
      e(C) ? M(U) : M(z, !1);
    });
    var D = F(Q, 2), j = w(D), Y = (M) => {
      var R = De();
      Xe(_e(R), () => e(G), (ae) => {
        var N = If();
        Ge(w(N), () => e(G)), x(N), f(ae, N);
      }), f(M, R);
    };
    L(j, (M) => {
      e(G) && M(Y);
    });
    var K = F(j, 2), ee = (M) => {
      var R = Mf();
      Gu(w(R)), x(R), f(M, R);
    };
    L(K, (M) => {
      e(B) || M(ee);
    }), x(D), x(J);
    var q = F(J, 2), S = (M) => {
      var R = De();
      Xe(_e(R), () => e(O), (ae) => {
        var N = zf();
        Ge(w(N), () => r()(e(O))), x(N), f(ae, N);
      }), f(M, R);
    };
    L(q, (M) => {
      c().showPrice && e(O) > 0 && M(S);
    }), Tu(F(q, 2), { get dealBlock() {
      return u();
    }, get multipleGiftsSelector() {
      return c();
    }, get isOpen() {
      return e(h);
    }, get products() {
      return e(p);
    }, get initialSelectedGifts() {
      return i();
    }, get onConfirm() {
      return g();
    }, onClose: () => re(h, !1) }), x(H), pe(() => {
      Pe(H, "data-multiple-gifts-selector-id", c().id), Nt(H, e(m));
    }), f(n, H);
    var T = Ke(ce);
    return o(), T;
  }
  Ne(Ou, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var $f = V('<div class="kaching-bundles__free-gift__divider"></div>'), Af = V("<!> <!>", 1);
  function ui(n, t) {
    Ye(t, !0);
    let r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelectors", 7), l = k(t, "sellingPlan", 7), o = k(t, "otherProducts", 7), u = k(t, "onChange", 7), c = Te(lt({})), i = d(() => a().filter((p) => !p.applyOnlyForSubscriptions || l()));
    function s(p, v) {
      const b = a().find((y) => y.id === p);
      b && (v.reduce((y, m) => y + m.quantity, 0) > b.maxQuantity || (e(c)[p] = v));
    }
    Je(() => {
      const p = new Set(e(i).map((b) => b.id)), v = Object.entries(e(c)).filter(([b]) => p.has(b)).flatMap(([b, y]) => {
        const m = e(i).find((P) => P.id === b), C = (m == null ? void 0 : m.includeInCompareAt) === !0;
        return y.map((P) => ({ id: P.id, quantity: P.quantity, variant: P.variant, product: P.product, fullPrice: P.fullPrice, includeInCompareAt: C }));
      });
      u()(v);
    });
    var g = { get dealBlock() {
      return r();
    }, set dealBlock(p) {
      r(p), _();
    }, get multipleGiftsSelectors() {
      return a();
    }, set multipleGiftsSelectors(p) {
      a(p), _();
    }, get sellingPlan() {
      return l();
    }, set sellingPlan(p) {
      l(p), _();
    }, get otherProducts() {
      return o();
    }, set otherProducts(p) {
      o(p), _();
    }, get onChange() {
      return u();
    }, set onChange(p) {
      u(p), _();
    } }, h = De();
    return Zt(_e(h), 19, () => e(i), (p) => p.id, (p, v, b) => {
      var y = Af(), m = _e(y);
      {
        let B = d(() => e(c)[e(v).id] || []);
        Ou(m, { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return e(v);
        }, get selectedVariants() {
          return e(B);
        }, onConfirm: s, get otherProducts() {
          return o();
        } });
      }
      var C = F(m, 2), P = (B) => {
        f(B, $f());
      };
      L(C, (B) => {
        e(b) < e(i).length - 1 && B(P);
      }), f(p, y);
    }), f(n, h), Ke(g);
  }
  Ne(ui, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, onChange: {} }, [], [], !0);
  var Vf = En('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Fu(n) {
    f(n, Vf());
  }
  Ne(Fu, {}, [], [], !0);
  var qf = V('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Tf = V('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), Gf = V('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Of = V('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Ff = V('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Lf = V('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), jf = V('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), Ef = V('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function Lu(n, t) {
    Ye(t, !0);
    const r = () => Ie(m, "$config", o), a = () => Ie(v, "$translate", o), l = () => Ie(y, "$getMediaImageUrl", o), [o, u] = kt(), c = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), s = k(t, "product", 7), g = k(t, "selectedDealBarIndex", 7), h = k(t, "selected", 7), p = k(t, "onChange", 7), v = Dt(), b = sn(), y = An(), m = fn(), C = d(() => i().differentVariantsEnabled), P = d(() => {
      var S;
      return s() ? i().variantGIDs ? i().variantGIDs.map(Rt) : (S = s()) == null ? void 0 : S.variants.map((T) => T.id) : null;
    }), B = d(() => {
      if (s()) return { ...s(), variants: s().variants.filter((S) => (r().preview || S.availableForSale) && (!e(P) || e(P).includes(S.id))) };
    });
    let O = Te(lt([]));
    const I = d(() => (function(S, T, M) {
      return S.length > 0 ? S : T != null && T.availableForSale && T.variants.length > 0 ? Array.from({ length: M }, () => T.variants[0].id) : [];
    })(e(O), e(B), i().quantity)), E = d(() => s() && e(I).length > 0 ? e(I).map((S) => s().variants.find((T) => T.id === S)).filter((S) => S !== void 0) : []), Z = d(() => {
      var S;
      return gn({ priceFormatter: Ie(b, "$formatPrice", o), product: s(), totalFullPrice: ((S = e(E)) == null ? void 0 : S.reduce((T, M) => {
        var R;
        return T + ((R = M == null ? void 0 : M.price) != null ? R : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: cr(e(E).map((T) => ({ variant: T, quantity: 1 }))) });
    }), G = d(() => e(Z)(a()(i().title))), ce = d(() => e(Z)(a()(i().lockedTitle))), H = d(() => e(Z)(a()(i().label))), W = d(() => e(Z)(a()(i().labelCrossedOut))), J = d(() => g() === null || i().unlockAtBar > g() + 1), Q = d(() => {
      var S, T, M;
      return i().giftType === "shipping" ? Ns : ((T = (S = e(E)) == null ? void 0 : S[0]) == null ? void 0 : T.image) || ((M = s()) == null ? void 0 : M.image);
    }), U = d(() => i().mediaImageGID ? l()(i().mediaImageGID) : e(Q)), z = d(() => c().dealBarStyle && l()(c().dealBarStyle.lockedMediaImageGID));
    Je(() => {
      if (h()) if (s() && e(E) && !e(J)) {
        const S = Object.values(e(E).reduce((T, M) => (T[M.id] ? T[M.id].quantity += 1 : T[M.id] = { variant: M, quantity: 1 }, T), {}));
        en(() => p()({ product: s(), variants: S }));
      } else en(() => p()(void 0));
      else en(() => p()(void 0));
    }), ar(() => {
      i().productGID, re(O, [], !0);
    }), Je(() => {
      e(J) && e(U) && (new Image().src = e(U));
    });
    const D = d(() => {
      var S;
      return i().giftType === "product" && !((S = s()) != null && S.availableForSale);
    });
    var j = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(S) {
      c(S), _();
    }, get gift() {
      return i();
    }, set gift(S) {
      i(S), _();
    }, get product() {
      return s();
    }, set product(S) {
      s(S), _();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(S) {
      g(S), _();
    }, get selected() {
      return h();
    }, set selected(S) {
      h(S), _();
    }, get onChange() {
      return p();
    }, set onChange(S) {
      p(S), _();
    } }, Y = De(), K = _e(Y), ee = (S) => {
      var T = De(), M = _e(T), R = (ae) => {
        var N = Ef();
        let A;
        var $ = w(N), ne = w($), te = (de) => {
          var be = De(), we = _e(be), Le = (Se) => {
            var Qe = qf();
            pe(() => Pe(Qe, "src", e(z))), f(Se, Qe);
          }, Ce = (Se) => {
            var Qe = Tf();
            Fu(w(Qe)), x(Qe), f(Se, Qe);
          };
          L(we, (Se) => {
            e(z) ? Se(Le) : Se(Ce, !1);
          }), f(de, be);
        }, ie = (de) => {
          var be = De(), we = _e(be), Le = (Ce) => {
            var Se = Gf();
            pe(() => {
              var Qe, xe;
              Pe(Se, "src", e(U)), Pe(Se, "alt", (xe = (Qe = s()) == null ? void 0 : Qe.title) != null ? xe : "");
            }), f(Ce, Se);
          };
          L(we, (Ce) => {
            e(U) && Ce(Le);
          }, !0), f(de, be);
        };
        L(ne, (de) => {
          e(J) ? de(te) : de(ie, !1);
        });
        var X = F(ne, 2), ve = w(X), Be = (de) => {
          var be = Of();
          Ge(w(be), () => e(ce)), x(be), f(de, be);
        }, oe = (de) => {
          var be = De(), we = _e(be), Le = (Ce) => {
            var Se = Ff();
            Ge(w(Se), () => e(G)), x(Se), f(Ce, Se);
          };
          L(we, (Ce) => {
            e(G) && Ce(Le);
          }, !0), f(de, be);
        };
        L(ve, (de) => {
          e(J) ? de(Be) : de(oe, !1);
        });
        var fe = F(ve, 2), ke = (de) => {
          var be = De();
          Zt(_e(be), 17, () => ({ length: e(C) ? i().quantity : 1 }), Nr, (we, Le, Ce) => {
            var Se = De(), Qe = _e(Se), xe = (ue) => {
              {
                let $e = d(() => e(C) ? Ce + 1 : void 0);
                Gn(ue, { get product() {
                  return e(B);
                }, get selectedVariantId() {
                  return e(I)[Ce];
                }, get number() {
                  return e($e);
                }, forceDropdown: !0, onChange: (ge) => (function(Re, nt) {
                  e(C) ? re(O, [...e(I).slice(0, nt), Re, ...e(I).slice(nt + 1)], !0) : re(O, Array.from({ length: i().quantity }, () => Re), !0);
                })(ge, Ce) });
              }
            };
            L(Qe, (ue) => {
              e(I)[Ce] !== void 0 && ue(xe);
            }), f(we, Se);
          }), f(de, be);
        };
        L(fe, (de) => {
          h() && !e(J) && e(B) && e(B).variants.length > 1 && e(I).length > 0 && de(ke);
        }), x(X), x($);
        var ze = F($, 2), he = (de) => {
          var be = De(), we = _e(be), Le = (Ce) => {
            var Se = jf(), Qe = w(Se), xe = (ge) => {
              var Re = De();
              Ge(_e(Re), () => e(H)), f(ge, Re);
            };
            L(Qe, (ge) => {
              e(H) && ge(xe);
            });
            var ue = F(Qe, 2), $e = (ge) => {
              var Re = Lf();
              Ge(w(Re), () => e(W)), x(Re), f(ge, Re);
            };
            L(ue, (ge) => {
              e(W) && ge($e);
            }), x(Se), f(Ce, Se);
          };
          L(we, (Ce) => {
            e(J) && !c().showLockedGiftLabels || Ce(Le);
          }), f(de, be);
        };
        L(ze, (de) => {
          (e(H) || e(W)) && de(he);
        }), x(N), pe((de) => A = At(N, 1, "kaching-bundles__deal-bar-progressive-gift", null, A, de), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(J), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(D) })]), f(ae, N);
      };
      L(M, (ae) => {
        var N;
        (s() && ((N = e(E)) != null && N.length) || i().giftType === "shipping") && ae(R);
      }), f(S, T);
    };
    L(K, (S) => {
      e(J) && c().hideLockedGifts || S(ee);
    }), f(n, Y);
    var q = Ke(j);
    return u(), q;
  }
  Ne(Lu, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, selected: {}, onChange: {} }, [], [], !0);
  var Rf = V('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function di(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "progressiveGifts", 7), o = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), c = k(t, "otherProducts", 7), i = k(t, "selectedDealBarIndex", 7), s = k(t, "selected", 7), g = k(t, "onChange", 7), h = d(() => o().dealBars.findIndex((I) => I.id === u().id)), p = fn();
    let v = Te(lt({}));
    const b = d(() => {
      var I, E;
      return ((Z) => Z ? dn({ "kaching-deal-bar-progressive-gift-image-size": Z.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": Z.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": Ee(Z.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": Ee(Z.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": Z.labelTextSize + "px", "kaching-deal-bar-progressive-gift-text-color": Ee(Z.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": Ee(Z.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": Z.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": Ee(Z.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": Ee(Z.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": Z.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": Ee(Z.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": Z.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": Ee(Z.lockedIconColor) }) : "")((E = (I = o().progressiveGifts) == null ? void 0 : I.dealBarStyle) != null ? E : null);
    }), y = d(() => {
      var I, E, Z;
      return (Z = (E = (I = l()) == null ? void 0 : I.gifts) == null ? void 0 : E.filter((G) => G.unlockAtBar <= e(h) + 1).flatMap((G) => {
        const ce = G.giftType === "product" && G.productGID ? c().find((W) => W.id === Rt(G.productGID)) : void 0;
        if (!Ie(p, "$config", r).preview && G.giftType === "product" && !(ce != null && ce.availableForSale)) return [];
        const H = ce && or(ce);
        return { gift: G, product: H };
      })) != null ? Z : [];
    });
    var m = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(I) {
      l(I), _();
    }, get dealBlock() {
      return o();
    }, set dealBlock(I) {
      o(I), _();
    }, get dealBar() {
      return u();
    }, set dealBar(I) {
      u(I), _();
    }, get otherProducts() {
      return c();
    }, set otherProducts(I) {
      c(I), _();
    }, get selectedDealBarIndex() {
      return i();
    }, set selectedDealBarIndex(I) {
      i(I), _();
    }, get selected() {
      return s();
    }, set selected(I) {
      s(I), _();
    }, get onChange() {
      return g();
    }, set onChange(I) {
      g(I), _();
    } }, C = De(), P = _e(C), B = (I) => {
      var E = Rf();
      Zt(E, 21, () => e(y), ({ gift: Z, product: G }) => Z.id, (Z, G) => {
        let ce = () => e(G).gift;
        Lu(Z, { get selectedDealBarIndex() {
          return i();
        }, get selected() {
          return s();
        }, get gift() {
          return ce();
        }, get product() {
          return e(G).product;
        }, get progressiveGifts() {
          return l();
        }, onChange: (H) => (function(W, J) {
          if (J ? e(v)[W] = J : delete e(v)[W], !s()) return;
          const Q = Object.entries(e(v)).map(([U, z]) => ({ id: U, variants: z.variants, product: z.product }));
          g()(Q);
        })(ce().id, H) });
      }), x(E), pe(() => Nt(E, e(b))), f(I, E);
    };
    L(P, (I) => {
      var E;
      o().progressiveGiftsEnabled && ((E = l()) == null ? void 0 : E.layout) === "deal-bar" && e(y).length > 0 && I(B);
    }), f(n, C);
    var O = Ke(m);
    return a(), O;
  }
  Ne(di, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, selected: {}, onChange: {} }, [], [], !0);
  var Qf = En('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function ju(n) {
    f(n, Qf());
  }
  Ne(ju, {}, [], [], !0);
  var Nf = En('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Eu(n) {
    f(n, Nf());
  }
  Ne(Eu, {}, [], [], !0);
  var Wf = En('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function Ru(n) {
    f(n, Wf());
  }
  Ne(Ru, {}, [], [], !0);
  var Uf = En('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Qu(n) {
    f(n, Uf());
  }
  Ne(Qu, {}, [], [], !0);
  var Hf = En('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Nu(n) {
    f(n, Hf());
  }
  Ne(Nu, {}, [], [], !0);
  var Zf = En('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Wu(n) {
    f(n, Zf());
  }
  Ne(Wu, {}, [], [], !0);
  const Uu = { checkmark: Eu, dot: Ru, arrow: ju, star: Nu, heart: Qu, "thumbs-up": Wu };
  var Jf = V('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), Yf = V('<span class="kaching-bundles__highlights__icon"><!></span>'), Kf = V('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), Xf = V("<div></div>");
  function ua(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "highlights", 7), o = k(t, "isSelected", 7), u = k(t, "replaceLiquid", 7), c = An(), i = Dt(), s = d(() => l().items.map((O) => Ie(i, "$translate", r)(O)).map((O) => u() ? u()(O) : O).filter((O) => O !== "")), g = d(() => ((O) => dn({ "kaching-highlights-icon-color": Ee(O.iconColor), "kaching-highlights-text-color": Ee(O.textColor), "kaching-highlights-icon-size": O.size + 2 + "px", "kaching-highlights-text-size": O.size + "px" }))(l())), h = d(() => {
      var O;
      return (O = l().layout) != null ? O : "vertical";
    }), p = d(() => {
      var O;
      return (O = l().iconType) != null ? O : "checkmark";
    }), v = d(() => Uu[e(p)]), b = d(() => {
      var O;
      return e(p) === "custom" ? Ie(c, "$getMediaImageUrl", r)((O = l().customIconGID) != null ? O : null) : void 0;
    });
    var y = { get highlights() {
      return l();
    }, set highlights(O) {
      l(O), _();
    }, get isSelected() {
      return o();
    }, set isSelected(O) {
      o(O), _();
    }, get replaceLiquid() {
      return u();
    }, set replaceLiquid(O) {
      u(O), _();
    } }, m = De(), C = _e(m), P = (O) => {
      var I = Xf();
      let E;
      Zt(I, 21, () => e(s), Nr, (Z, G) => {
        var ce = Kf(), H = w(ce), W = (U) => {
          var z = Jf(), D = w(z);
          x(z), pe(() => Pe(D, "src", e(b))), f(U, z);
        }, J = (U) => {
          var z = De(), D = _e(z), j = (Y) => {
            var K = Yf();
            xc(w(K), () => e(v), (ee, q) => {
              q(ee, {});
            }), x(K), f(Y, K);
          };
          L(D, (Y) => {
            e(v) && Y(j);
          }, !0), f(U, z);
        };
        L(H, (U) => {
          e(p) === "custom" && e(b) ? U(W) : U(J, !1);
        });
        var Q = F(H, 2);
        Ge(w(Q), () => e(G)), x(Q), x(ce), f(Z, ce);
      }), x(I), pe((Z) => {
        E = At(I, 1, "kaching-bundles__highlights", null, E, Z), Nt(I, e(g));
      }, [() => ({ "kaching-bundles__highlights--horizontal": e(h) === "horizontal" })]), f(O, I);
    };
    L(C, (O) => {
      e(s).length > 0 && (!l().showOnlyWhenSelected || o()) && O(P);
    }), f(n, m);
    var B = Ke(y);
    return a(), B;
  }
  function eb(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Ne(ua, { highlights: {}, isSelected: {}, replaceLiquid: {} }, [], [], !0);
  var tb = V('<img class="kaching-bundles__bar-image" alt=""/>'), nb = V('<div class="kaching-bundles__bar-radio"></div>'), rb = V('<span class="kaching-bundles__bar-title"><!></span>'), ab = V('<span class="kaching-bundles__bar-label"><!></span>'), ib = V('<div class="kaching-bundles__bar-subtitle"><!></div>'), lb = V('<div class="kaching-bundles__bar-full-price"><!></div>'), sb = V('<div class="kaching-bundles__bar-price"><!></div>'), ob = V('<div class="kaching-bundles__bar-full-price"><!></div>'), cb = V('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), ub = V('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), db = V('<div class="kaching-bundles__bar-full-price"><!></div>'), gb = V('<div class="kaching-bundles__bar-unit-price"><!> </div>'), hb = V('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), pb = V('<div class="kaching-bundles__bar-full-price"><!></div>'), fb = V("<!> <!>", 1), bb = V('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), vb = V('<div class="kaching-bundles__bar-selling-plan"><!></div>'), _b = V('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), mb = V('<div class="kaching-bundles__bar-variants"><!> <!></div>'), kb = V('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function Hs(n, t) {
    Ye(t, !0);
    const r = () => Ie(Q, "$config", u), a = () => Ie(W, "$formatPrice", u), l = () => Ie(H, "$translate", u), o = () => Ie(J, "$getMediaImageUrl", u), [u, c] = kt();
    let i = k(t, "dealBlock", 7), s = k(t, "dealBar", 7), g = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), p = k(t, "complementaryProducts", 23, () => []), v = k(t, "customQuantity", 7, void 0), b = k(t, "currentVariantId", 7, void 0), y = k(t, "componentId", 7), m = k(t, "selected", 7, !1), C = k(t, "globalSellingPlan", 7, void 0), P = k(t, "selectedDealBarIndex", 7), B = k(t, "onProgressiveGiftsChange", 7), O = k(t, "onDealBarSelect", 7), I = k(t, "onDealBarDeselect", 7), E = k(t, "onVariantSelect", 7), Z = k(t, "onVariantsChange", 7), G = k(t, "onPersonalisationsChange", 7), ce = k(t, "personalisationInitialValues", 23, () => []);
    const H = Dt(), W = sn(), J = An(), Q = fn();
    let U = Te(lt([])), z = Te(lt([])), D = Te(lt([]));
    const j = d(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), Y = d(() => {
      var me, tt;
      return i() && ((tt = (me = i().defaultVariantsV2) == null ? void 0 : me.find((pt) => Rt(pt.productGID) === g().id && pt.dealBarId === s().id)) == null ? void 0 : tt.variantGIDs) || [];
    });
    let K = d(() => S(s())), ee = Te(lt(S(s())));
    ar(() => {
      re(ee, e(K), !0);
    });
    const q = d(() => v() || e(ee));
    function S(me) {
      return me.dealBarType === ht.Bxgy ? me.buyQuantity + me.getQuantity : Number(me.quantity);
    }
    let T = Te(lt([])), M = Te(lt([]));
    Je(() => {
      const me = (function(tt, pt, le) {
        let Oe = [];
        for (let Ve = 0; Ve < tt; Ve++) {
          let Ue = pt[Ve];
          if (!Ue && tt > S(s()) && pt.filter((He) => He).length === S(s()) && (Ue = pt[pt.length - 1]), Ue) {
            const He = Rt(Ue);
            if (g().variants.find((ut) => ut.id == He)) {
              Oe.push(He);
              continue;
            }
          }
          le && Oe.push(le);
        }
        return Oe;
      })(e(q), e(Y), b());
      if (JSON.stringify(e(T)) !== JSON.stringify(me)) {
        const tt = e(T).length === me.length;
        re(T, me, !0), e(M).length === 0 ? re(M, me, !0) : tt ? r().featureFlags.preserve_variant_selections && i().differentVariantsEnabled && new Set(e(M)).size !== 1 || re(M, me, !0) : re(M, (function(pt, le) {
          const Oe = pt[pt.length - 1];
          if (pt.length < le) {
            const Ve = le - pt.length;
            return [...pt, ...Array(Ve).fill(Oe)];
          }
          return pt.slice(0, le);
        })(e(M), e(q)), !0);
      }
    });
    const R = d(() => Re(e(M))), ae = d(() => new Map(g().variants.map((me) => [me.id, me])));
    let N = Te(void 0);
    const A = d(() => ji(g(), e(R).map((me) => me.variant))), $ = d(() => {
      var me, tt;
      return (s().sellingPlanEnabled || i().subscriptionsEnabled && ((me = i().subscriptions) == null ? void 0 : me.layout) === "link" && ((tt = i().subscriptions) == null ? void 0 : tt.subscribeByDefault)) && (!i().subscriptionsEnabled || !!C());
    }), ne = d(() => e($) ? Os(s(), e(A), e(N)) : void 0), te = d(() => Fs(e(ne), C(), e(A), g().requiresSellingPlan)), ie = d(() => (function(me, tt, pt, le) {
      return pt.map(({ variant: Ve, quantity: Ue }) => {
        let He = (function(xt, _t) {
          var Mt;
          if (!_t) return xt.price;
          const Gt = xt.sellingPlans.find((Ot) => Ot.id === _t.id);
          return Gt && Gt.perDeliveryPrice !== Gt.price ? Math.max((Mt = Gt.compareAtPrice) != null ? Mt : xt.price, xt.price) : xt.price;
        })(Ve, le);
        const ut = me.useProductCompareAtPrice || (tt.dealBarType === void 0 || tt.dealBarType === ht.QuantityBreak) && tt.discountType === "default";
        return Ve.compareAtPrice && ut && (He = Math.max(He, Ve.compareAtPrice)), He * Ue;
      }).reduce((Ve, Ue) => Ve + Ue, 0);
    })(i(), s(), e(R), e(te))), X = d(() => Ei(e(ie), e(U), e(z))), ve = d(() => Math.ceil(e(ie) / e(q))), Be = d(() => Rs(e(q) === 1, e(X), e(ve))), oe = d(() => i() && Se(e(R), e(te))), fe = d(() => e(R)[0] && qs(e(R)[0].variant)), ke = d(() => cr(e(R))), ze = d(() => e(ke) ? e(oe) / e(ke) : null), he = d(() => gn({ priceFormatter: a(), product: g(), selectedVariants: e(R), totalFullPrice: e(ie), totalCompareAtPrice: e(X), totalDiscountedPrice: e(oe), quantity: e(q), dealBar: s(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e(ke), sellingPlan: e(te) })), de = d(() => e(he)(l()(s().title))), be = d(() => e(he)(l()(s().subtitle))), we = d(() => e(he)(l()(s().label))), Le = d(() => e(he)(l()(s().badgeText))), Ce = d(() => o()(s().badgeImageGID));
    function Se(me, tt) {
      switch (s().dealBarType) {
        case void 0:
        case ht.QuantityBreak:
          return ku(s(), me, r().currencyRate, e(j), tt, r().featureFlags.percentage_cents_rounding_workaround);
        case ht.Bxgy:
          return yu(s(), me, r().currencyRate, e(j), tt);
      }
    }
    const Qe = d(() => Math.ceil(e(oe) / e(q))), xe = d(() => e(X) > e(oe)), ue = d(() => e(q) && (function(me) {
      return !me.differentVariantsEnabled || g().variants.length === 1 ? !1 : me.hideVariantPicker ? !0 : !(e(q) == 1 && !me.showVariantsForSingleQuantity);
    })(i())), $e = d(() => r().featureFlags.variant_images && new Set(g().variants.map((me) => me.image).filter((me) => me)).size > 1), ge = d(() => `${s().id}_${y()}`);
    function Re(me) {
      return me.reduce((tt, pt) => {
        const le = tt.find(({ variant: Oe }) => Oe.id === pt);
        if (le) le.quantity += 1;
        else {
          const Oe = g().variants.find((Ve) => Ve.id === pt);
          if (!Oe) return tt;
          tt.push({ variant: Oe, quantity: 1 });
        }
        return tt;
      }, []);
    }
    Ca(() => {
      m() && O()({ dealBarId: s().id, dealBarQuantity: S(s()), preselected: !0 });
    });
    const nt = d(() => o()(s().mediaImageGID) || Ri);
    Je(() => {
      m() && (e(M), e(D), e(U), e(z), e(te), en(() => {
        (function() {
          if (!e(M).length) return;
          const me = Re(e(M)), tt = e(oe) + e(D).reduce((He, ut) => He + ut.discountedPrice, 0), pt = e(U).reduce((He, ut) => ut.showPrice ? He + ut.fullPrice : He, 0) + e(z).reduce((He, ut) => He + ut.fullPrice * ut.quantity, 0), le = e(ie) + e(D).reduce((He, ut) => He + ut.fullPrice, 0) + pt, Oe = Se(e(R), void 0), Ve = g().sellingPlans.map((He) => ({ sellingPlanId: He.id, discountedPrice: Se(e(R), He) })), Ue = { discountedPrice: tt, fullPrice: le, giftValue: pt, discountedPricePerItem: e(Qe), fullPricePerItem: e(ve), discountedPriceWithoutSellingPlan: Oe, discountedPricesForSellingPlans: Ve };
          Z()({ variants: me, freeGifts: [...e(U), ...e(z)], upsells: e(D), dealBarSellingPlan: e(ne), pricing: Ue });
        })();
      }));
    });
    const et = d(() => s().showAsSoldOutEnabled && s().showAsSoldOut ? Ni(s().showAsSoldOut) : "");
    var je = { get dealBlock() {
      return i();
    }, set dealBlock(me) {
      i(me), _();
    }, get dealBar() {
      return s();
    }, set dealBar(me) {
      s(me), _();
    }, get product() {
      return g();
    }, set product(me) {
      g(me), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(me = []) {
      h(me), _();
    }, get complementaryProducts() {
      return p();
    }, set complementaryProducts(me = []) {
      p(me), _();
    }, get customQuantity() {
      return v();
    }, set customQuantity(me = void 0) {
      v(me), _();
    }, get currentVariantId() {
      return b();
    }, set currentVariantId(me = void 0) {
      b(me), _();
    }, get componentId() {
      return y();
    }, set componentId(me) {
      y(me), _();
    }, get selected() {
      return m();
    }, set selected(me = !1) {
      m(me), _();
    }, get globalSellingPlan() {
      return C();
    }, set globalSellingPlan(me = void 0) {
      C(me), _();
    }, get selectedDealBarIndex() {
      return P();
    }, set selectedDealBarIndex(me) {
      P(me), _();
    }, get onProgressiveGiftsChange() {
      return B();
    }, set onProgressiveGiftsChange(me) {
      B(me), _();
    }, get onDealBarSelect() {
      return O();
    }, set onDealBarSelect(me) {
      O(me), _();
    }, get onDealBarDeselect() {
      return I();
    }, set onDealBarDeselect(me) {
      I(me), _();
    }, get onVariantSelect() {
      return E();
    }, set onVariantSelect(me) {
      E(me), _();
    }, get onVariantsChange() {
      return Z();
    }, set onVariantsChange(me) {
      Z(me), _();
    }, get onPersonalisationsChange() {
      return G();
    }, set onPersonalisationsChange(me) {
      G(me), _();
    }, get personalisationInitialValues() {
      return ce();
    }, set personalisationInitialValues(me = []) {
      ce(me), _();
    } }, dt = kb();
    let at;
    var ot = w(dt);
    Wr(ot), ot.__change = [eb, O, s, S];
    var rt = F(ot, 2);
    let ft;
    var Tt = w(rt);
    {
      let me = d(() => e(Le) || void 0);
      Va(Tt, { get style() {
        return s().badgeStyle;
      }, get text() {
        return e(me);
      }, get imageUrl() {
        return e(Ce);
      }, get blockLayout() {
        return i().blockLayout;
      } });
    }
    var $t = F(Tt, 2), Me = w($t);
    Et(Me, { element: "div", class: "kaching-bundles__bar-main", onclick: function(me) {
      m() && (me.preventDefault(), me.stopPropagation(), I()());
    }, children: (me, tt) => {
      var pt = bb(), le = _e(pt), Oe = (st) => {
        var St = tb();
        pe(() => Pe(St, "src", e(nt))), f(st, St);
      }, Ve = (st) => {
        f(st, nb());
      };
      L(le, (st) => {
        s().mediaImageGID ? st(Oe) : st(Ve, !1);
      });
      var Ue = F(le, 2), He = w(Ue), ut = w(He), xt = w(ut);
      Xe(xt, () => e(de), (st) => {
        var St = rb();
        Ge(w(St), () => e(de)), x(St), f(st, St);
      });
      var _t = F(xt, 2), Mt = (st) => {
        var St = De();
        Xe(_e(St), () => e(we), (zt) => {
          var Vt = ab();
          Ge(w(Vt), () => e(we)), x(Vt), f(zt, Vt);
        }), f(st, St);
      };
      L(_t, (st) => {
        e(we) && st(Mt);
      }), x(ut);
      var Gt = F(ut, 2), Ot = w(Gt), Ht = (st) => {
        var St = De();
        Xe(_e(St), () => e(be), (zt) => {
          var Vt = ib();
          Ge(w(Vt), () => e(be)), x(Vt), f(zt, Vt);
        }), f(st, St);
      };
      L(Ot, (st) => {
        e(be) && st(Ht);
      });
      var bn = F(Ot, 2), Yt = (st) => {
        {
          let St = d(() => {
            var zt, Vt;
            return (Vt = (zt = e(R)) == null ? void 0 : zt[0]) == null ? void 0 : Vt.variant;
          });
          Jr(st, { get dealBlock() {
            return i();
          }, get variant() {
            return e(St);
          } });
        }
      };
      L(bn, (st) => {
        e(ue) || st(Yt);
      }), x(Gt), x(He);
      var nn = F(He, 2), Hn = w(nn), xn = (st) => {
        var St = ub(), zt = _e(St), Vt = w(zt);
        Xe(Vt, () => e(Qe), (Lt) => {
          Dr(Lt, { get amount() {
            return e(Qe);
          }, get showPricesPerItem() {
            return i().showPricesPerItem;
          }, get unitLabel() {
            return i().unitLabel;
          } });
        });
        var Fn = F(Vt, 2), rn = (Lt) => {
          var cn = De();
          Xe(_e(cn), () => e(Be), (hn) => {
            var un = lb();
            Ge(w(un), () => a()(e(Be))), x(un), pe((se) => Pe(un, "data-a11y-label", se), [() => l()("system.original_price")]), f(hn, un);
          }), f(Lt, cn);
        };
        L(Fn, (Lt) => {
          e(xe) && Lt(rn);
        }), x(zt);
        var Pn = F(zt, 2), Sn = (Lt) => {
          var cn = cb(), hn = w(cn);
          Xe(hn, () => e(oe), (Ae) => {
            var qe = sb();
            Ge(w(qe), () => a()(e(oe))), x(qe), pe((Fe) => Pe(qe, "data-a11y-label", Fe), [() => l()("system.price")]), f(Ae, qe);
          });
          var un = F(hn, 2), se = (Ae) => {
            var qe = De();
            Xe(_e(qe), () => e(X), (Fe) => {
              var it = ob();
              Ge(w(it), () => a()(e(X))), x(it), pe((Ut) => Pe(it, "data-a11y-label", Ut), [() => l()("system.original_price")]), f(Fe, it);
            }), f(Ae, qe);
          };
          L(un, (Ae) => {
            e(xe) && Ae(se);
          }), x(cn), f(Lt, cn);
        };
        L(Pn, (Lt) => {
          e(q) > 1 && Lt(Sn);
        }), f(st, St);
      }, wn = (st) => {
        var St = De(), zt = _e(St), Vt = (rn) => {
          var Pn = hb(), Sn = _e(Pn), Lt = w(Sn);
          Xe(Lt, () => e(oe), (se) => {
            {
              let Ae = d(() => i().showPricesPerItem ? e(Qe) : e(oe));
              Dr(se, { get amount() {
                return e(Ae);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var cn = F(Lt, 2), hn = (se) => {
            var Ae = De();
            Xe(_e(Ae), () => i().showPricesPerItem ? e(Be) : e(X), (qe) => {
              var Fe = db();
              Ge(w(Fe), () => a()(i().showPricesPerItem ? e(Be) : e(X))), x(Fe), pe((it) => Pe(Fe, "data-a11y-label", it), [() => l()("system.original_price")]), f(qe, Fe);
            }), f(se, Ae);
          };
          L(cn, (se) => {
            e(xe) && se(hn);
          }), x(Sn);
          var un = F(Sn, 2);
          Xe(w(un), () => e(ze), (se) => {
            var Ae = gb(), qe = w(Ae);
            Ge(qe, () => a()(e(ze), { preserveDecimals: !0 }));
            var Fe = F(qe);
            x(Ae), pe(() => {
              var it;
              return mt(Fe, ` /
                    ${(it = e(fe)) != null ? it : ""}`);
            }), f(se, Ae);
          }), x(un), f(rn, Pn);
        }, Fn = (rn) => {
          var Pn = fb(), Sn = _e(Pn);
          Xe(Sn, () => e(oe), (hn) => {
            {
              let un = d(() => i().showPricesPerItem ? e(Qe) : e(oe));
              Dr(hn, { get amount() {
                return e(un);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var Lt = F(Sn, 2), cn = (hn) => {
            var un = De();
            Xe(_e(un), () => i().showPricesPerItem ? e(Be) : e(X), (se) => {
              var Ae = pb();
              Ge(w(Ae), () => a()(i().showPricesPerItem ? e(Be) : e(X))), x(Ae), pe((qe) => Pe(Ae, "data-a11y-label", qe), [() => l()("system.original_price")]), f(se, Ae);
            }), f(hn, un);
          };
          L(Lt, (hn) => {
            e(xe) && hn(cn);
          }), f(rn, Pn);
        };
        L(zt, (rn) => {
          e(ze) && !r().ignoreUnitPrice ? rn(Vt) : rn(Fn, !1);
        }, !0), f(st, St);
      };
      L(Hn, (st) => {
        i().showBothPrices ? st(xn) : st(wn, !1);
      }), x(nn), x(Ue), f(me, pt);
    }, $$slots: { default: !0 } });
    var Ze = F(Me, 2), bt = (me) => {
      ua(me, { get highlights() {
        return s().highlights;
      }, get isSelected() {
        return m();
      }, get replaceLiquid() {
        return e(he);
      } });
    };
    L(Ze, (me) => {
      s().highlights && me(bt);
    });
    var ct = F(Ze, 2), vt = (me) => {
      var tt = vb(), pt = w(tt);
      {
        let le = d(() => e(ne) || e(A)[0]);
        ca(pt, { get sellingPlans() {
          return e(A);
        }, get selectedSellingPlan() {
          return e(le);
        }, onChange: (Oe) => {
          re(N, Oe, !0);
        } });
      }
      x(tt), f(me, tt);
    };
    L(ct, (me) => {
      m() && e($) && !s().sellingPlanGid && e(A).length > 1 && me(vt);
    });
    var yt = F(ct, 2), We = (me) => {
      var tt = mb(), pt = w(tt);
      Hr(pt, { get product() {
        return g();
      } }), Zt(F(pt, 2), 17, () => ({ length: e(q) }), Nr, (le, Oe, Ve) => {
        var Ue = _b(), He = w(Ue);
        {
          let xt = d(() => e(q) > 1 ? Ve + 1 : void 0);
          Gn(He, { get product() {
            return g();
          }, get selectedVariantId() {
            return e(M)[Ve];
          }, get showImage() {
            return e($e);
          }, get number() {
            return e(xt);
          }, onChange: (_t) => (function(Mt, Gt) {
            const Ot = [...e(M)];
            Ot[Mt] = Gt, re(M, Ot, !0), m() && E()({ variantId: Gt });
          })(Ve, _t), onOptionChange: (_t, Mt, Gt) => (function(Ot, Ht, bn, Yt) {
            if (i().disableVariantOptionSync || Ot !== 0) return;
            const nn = Ht - 1, Hn = e(M).map((xn) => g().variants.find((wn) => wn.id === xn)).filter((xn) => xn != null).slice(1);
            Hn.length !== 0 && Hn.every((xn) => xn.options[nn] === Yt) && re(M, e(M).map((xn) => {
              const wn = g().variants.find((zt) => zt.id === xn);
              if (!wn || wn.options[nn] !== Yt) return xn;
              const st = [...wn.options];
              st[nn] = bn;
              const St = g().variants.find((zt) => zt.options.every((Vt, Fn) => Vt === st[Fn]));
              return St ? St.id : xn;
            }), !0);
          })(Ve, _t, Mt, Gt) });
        }
        var ut = F(He, 2);
        {
          let xt = d(() => e(ae).get(e(M)[Ve]));
          Jr(ut, { get dealBlock() {
            return i();
          }, get variant() {
            return e(xt);
          } });
        }
        x(Ue), f(le, Ue);
      }), x(tt), f(me, tt);
    };
    L(yt, (me) => {
      e(ue) && me(We);
    });
    var wt = F(yt, 2), tn = (me) => {
      {
        let tt = d(() => S(s()));
        Wi(me, { get value() {
          return e(ee);
        }, get min() {
          return e(tt);
        }, onChange: (pt) => re(ee, pt, !0) });
      }
    };
    L(wt, (me) => {
      m() && s().dealBarType === ht.QuantityBreak && s().quantitySelector && me(tn);
    });
    var mn = F(wt, 2), kn = (me) => {
      qa(me, { get product() {
        return g();
      }, get selectedVariantIds() {
        return e(M);
      }, get productPersonalisation() {
        return s().productPersonalisation;
      }, get quantity() {
        return e(K);
      }, get addPersonalisationModal() {
        return i().addPersonalisationModal;
      }, get onPersonalisationsChange() {
        return G();
      }, get initialValues() {
        return ce();
      } });
    };
    L(mn, (me) => {
      m() && s().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && me(kn);
    }), x($t);
    var Ct = F($t, 2);
    {
      let me = d(() => s().upsells || []);
      oi(Ct, { get dealBlock() {
        return i();
      }, get upsells() {
        return e(me);
      }, get otherProducts() {
        return h();
      }, get complementaryProducts() {
        return p();
      }, get dealBarSelected() {
        return m();
      }, get dealSellingPlan() {
        return e(te);
      }, onChange: (tt) => {
        re(D, tt, !0);
      } });
    }
    var Wt = F(Ct, 2);
    di(Wt, { get selectedDealBarIndex() {
      return P();
    }, get onChange() {
      return B();
    }, get dealBlock() {
      return i();
    }, get dealBar() {
      return s();
    }, get selected() {
      return m();
    }, get otherProducts() {
      return h();
    }, get progressiveGifts() {
      return i().progressiveGifts;
    } });
    var Jt = F(Wt, 2);
    {
      let me = d(() => s().freeGifts || []);
      si(Jt, { get dealBlock() {
        return i();
      }, get freeGifts() {
        return e(me);
      }, get freeGiftsSummary() {
        return s().freeGiftsSummary;
      }, get otherProducts() {
        return h();
      }, get dealBarSelected() {
        return m();
      }, get sellingPlan() {
        return e(te);
      }, get mainProductVariantId() {
        return e(M)[0];
      }, onChange: (tt) => {
        re(U, tt, !0);
      } });
    }
    var on = F(Jt, 2);
    {
      let me = d(() => s().multipleGiftsSelectors || []);
      ui(on, { get dealBlock() {
        return i();
      }, get multipleGiftsSelectors() {
        return e(me);
      }, get sellingPlan() {
        return e(te);
      }, get otherProducts() {
        return h();
      }, onChange: (tt) => {
        re(z, tt, !0);
      } });
    }
    x(rt);
    var yn = F(rt, 2), On = (me) => {
      ci(me, { get showAsSoldOut() {
        return s().showAsSoldOut;
      }, get replaceLiquid() {
        return e(he);
      } });
    };
    L(yn, (me) => {
      s().showAsSoldOutEnabled && s().showAsSoldOut && me(On);
    }), x(dt), pe((me, tt) => {
      var pt;
      at = At(dt, 1, "kaching-bundles__bar", null, at, me), Pe(dt, "data-deal-bar-id", s().id), Nt(dt, e(et)), Pe(ot, "name", `kaching-bundles-deal-${(pt = y()) != null ? pt : ""}`), Ia(ot, s().id), Pe(ot, "id", e(ge)), qi(ot, m()), ot.disabled = s().showAsSoldOutEnabled, Pe(rt, "for", e(ge)), ft = At(rt, 1, "kaching-bundles__bar-container", null, ft, tt);
    }, [() => ({ "kaching-bundles__bar--selected": m() }), () => ({ "kaching-bundles__bar-container--sold-out": s().showAsSoldOutEnabled })]), f(n, dt);
    var $n = Ke(je);
    return c(), $n;
  }
  Dn(["change"]), Ne(Hs, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var yb = V('<div class="kaching-bundles"><!></div>');
  function Hu(n, t) {
    var r;
    Ye(t, !0);
    const a = k(t, "config", 7), l = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), u = k(t, "translations", 7), c = k(t, "product", 7), i = k(t, "mediaImages", 23, () => []), s = k(t, "currentVariantId", 7), g = k(t, "variantBadges", 23, () => []), h = Math.random().toString(16).slice(2), { setConfig: p } = Aa(a()), { setMoneyFormat: v } = ii(a().moneyFormat), { setTranslations: b } = $a(u()), { setMediaImages: y } = Fi(i()), { setSwatchSettings: m } = Ti({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (r = l().showSelectedSwatchName) != null && r }), { setVariantBadges: C } = Au(g());
    Je(() => {
      p(a());
    }), Je(() => {
      v(a().moneyFormat, !!l().showPricesWithoutDecimals);
    }), Je(() => {
      b(u());
    }), Je(() => {
      y(i());
    }), Je(() => {
      var Z;
      m({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (Z = l().showSelectedSwatchName) != null && Z });
    }), Je(() => {
      C(g());
    });
    const P = d(() => l() && nu(l()));
    var B = { get config() {
      return a();
    }, set config(Z) {
      a(Z), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(Z) {
      l(Z), _();
    }, get dealBar() {
      return o();
    }, set dealBar(Z) {
      o(Z), _();
    }, get translations() {
      return u();
    }, set translations(Z) {
      u(Z), _();
    }, get product() {
      return c();
    }, set product(Z) {
      c(Z), _();
    }, get mediaImages() {
      return i();
    }, set mediaImages(Z = []) {
      i(Z), _();
    }, get currentVariantId() {
      return s();
    }, set currentVariantId(Z) {
      s(Z), _();
    }, get variantBadges() {
      return g();
    }, set variantBadges(Z = []) {
      g(Z), _();
    } }, O = yb(), I = w(O), E = (Z) => {
      Hs(Z, { selectedDealBarIndex: null, get dealBlock() {
        return l();
      }, get dealBar() {
        return o();
      }, get product() {
        return c();
      }, get currentVariantId() {
        return s();
      }, get componentId() {
        return h;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return L(I, (Z) => {
      o().dealBarType && o().dealBarType !== ht.QuantityBreak && o().dealBarType !== ht.Bxgy || Z(E);
    }), x(O), pe(() => Nt(O, e(P))), f(n, O), Ke(B);
  }
  customElements.define("kaching-bundles-bar", Ne(Hu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, variantBadges: { attribute: "variant-badges", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), vn(this, "component"), this.component = this;
    }
  }));
  var Zu = !1;
  const Ju = class extends Date {
    constructor(...n) {
      super(...n), Bt(this, Jl), Bt(this, mi, Te(super.getTime())), Bt(this, nl, /* @__PURE__ */ new Map()), Bt(this, Zl, Ft), Zu || an(this, Jl, vo).call(this);
    }
  };
  mi = /* @__PURE__ */ new WeakMap(), nl = /* @__PURE__ */ new WeakMap(), Zl = /* @__PURE__ */ new WeakMap(), Jl = /* @__PURE__ */ new WeakSet(), vo = function() {
    Zu = !0;
    var n = Ju.prototype, t = Date.prototype, r = Object.getOwnPropertyNames(t);
    for (const a of r) (a.startsWith("get") || a.startsWith("to") || a === "valueOf") && (n[a] = function(...l) {
      if (l.length > 0) return e(ye(this, mi)), t[a].apply(this, l);
      var o = ye(this, nl).get(a);
      if (o === void 0) {
        const u = Ft;
        qn(ye(this, Zl)), o = d(() => (e(ye(this, mi)), t[a].apply(this, l))), ye(this, nl).set(a, o), qn(u);
      }
      return e(o);
    }), a.startsWith("set") && (n[a] = function(...l) {
      var o = t[a].apply(this, l);
      return re(ye(this, mi), t.getTime.call(this)), o;
    });
  };
  let Zs = Ju;
  var xb = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], wb = ["difference", "intersection", "symmetricDifference", "union"], Yu = !1;
  const Js = class extends Set {
    constructor(n) {
      if (super(), Bt(this, rl), Bt(this, ki, /* @__PURE__ */ new Map()), Bt(this, Pr, Te(0)), Bt(this, va, Te(0)), Bt(this, Yl, mr || -1), n) {
        for (var t of n) super.add(t);
        ye(this, va).v = super.size;
      }
      Yu || an(this, rl, mo).call(this);
    }
    has(n) {
      var t = super.has(n), r = ye(this, ki), a = r.get(n);
      if (a === void 0) {
        if (!t) return e(ye(this, Pr)), !1;
        a = an(this, rl, _o).call(this, !0), r.set(n, a);
      }
      return e(a), t;
    }
    add(n) {
      return super.has(n) || (super.add(n), re(ye(this, va), super.size), Jn(ye(this, Pr))), this;
    }
    delete(n) {
      var t = super.delete(n), r = ye(this, ki), a = r.get(n);
      return a !== void 0 && (r.delete(n), re(a, !1)), t && (re(ye(this, va), super.size), Jn(ye(this, Pr))), t;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = ye(this, ki);
        for (var t of n.values()) re(t, !1);
        n.clear(), re(ye(this, va), 0), Jn(ye(this, Pr));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(ye(this, Pr)), super.values();
    }
    entries() {
      return e(ye(this, Pr)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(ye(this, va));
    }
  };
  ki = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ new WeakMap(), rl = /* @__PURE__ */ new WeakSet(), _o = function(n) {
    return mr === ye(this, Yl) ? Te(n) : Er(n);
  }, mo = function() {
    Yu = !0;
    var n = Js.prototype, t = Set.prototype;
    for (const r of xb) n[r] = function(...a) {
      return e(ye(this, Pr)), t[r].apply(this, a);
    };
    for (const r of wb) n[r] = function(...a) {
      e(ye(this, Pr));
      var l = t[r].apply(this, a);
      return new Js(l);
    };
  };
  let Pb = Js;
  const Ku = class extends Map {
    constructor(n) {
      if (super(), Bt(this, Or), Bt(this, Tr, /* @__PURE__ */ new Map()), Bt(this, Gr, Te(0)), Bt(this, ea, Te(0)), Bt(this, Kl, mr || -1), n) {
        for (var [t, r] of n) super.set(t, r);
        ye(this, ea).v = super.size;
      }
    }
    has(n) {
      var t = ye(this, Tr), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return e(ye(this, Gr)), !1;
        r = an(this, Or, yi).call(this, 0), t.set(n, r);
      }
      return e(r), !0;
    }
    forEach(n, t) {
      an(this, Or, al).call(this), super.forEach(n, t);
    }
    get(n) {
      var t = ye(this, Tr), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return void e(ye(this, Gr));
        r = an(this, Or, yi).call(this, 0), t.set(n, r);
      }
      return e(r), super.get(n);
    }
    set(n, t) {
      var r, a = ye(this, Tr), l = a.get(n), o = super.get(n), u = super.set(n, t), c = ye(this, Gr);
      if (l === void 0) l = an(this, Or, yi).call(this, 0), a.set(n, l), re(ye(this, ea), super.size), Jn(c);
      else if (o !== t) {
        Jn(l);
        var i = c.reactions === null ? null : new Set(c.reactions);
        (i === null || !((r = l.reactions) != null && r.every((s) => i.has(s)))) && Jn(c);
      }
      return u;
    }
    delete(n) {
      var t = ye(this, Tr), r = t.get(n), a = super.delete(n);
      return r !== void 0 && (t.delete(n), re(ye(this, ea), super.size), re(r, -1), Jn(ye(this, Gr))), a;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = ye(this, Tr);
        for (var t of (re(ye(this, ea), 0), n.values())) re(t, -1);
        Jn(ye(this, Gr)), n.clear();
      }
    }
    keys() {
      return e(ye(this, Gr)), super.keys();
    }
    values() {
      return an(this, Or, al).call(this), super.values();
    }
    entries() {
      return an(this, Or, al).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(ye(this, ea)), super.size;
    }
  };
  Tr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), Kl = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakSet(), yi = function(n) {
    return mr === ye(this, Kl) ? Te(n) : Er(n);
  }, al = function() {
    e(ye(this, Gr));
    var n = ye(this, Tr);
    if (ye(this, ea).v !== n.size) {
      for (var t of cm(Ku.prototype, this, "keys").call(this)) if (!n.has(t)) {
        var r = an(this, Or, yi).call(this, 0);
        n.set(t, r);
      }
    }
    for ([, r] of ye(this, Tr)) e(r);
  };
  let Sb = Ku;
  class Bb {
    constructor(t, r) {
      Bt(this, il), Bt(this, ll), Pt(this, il, t), Pt(this, ll, Go(r));
    }
    get current() {
      return ye(this, ll).call(this), ye(this, il).call(this);
    }
  }
  il = /* @__PURE__ */ new WeakMap(), ll = /* @__PURE__ */ new WeakMap();
  const Cb = /\(.+\)/, Ib = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
  class Mb extends Bb {
    constructor(t, r) {
      let a = Cb.test(t) || t.split(/[\s,]+/).some((o) => Ib.has(o.trim())) ? t : `(${t})`;
      const l = window.matchMedia(a);
      super(() => l.matches, (o) => (function(u, c, i, s = {}) {
        var g = bs(c, u, i, s);
        return () => {
          u.removeEventListener(c, g, s);
        };
      })(l, "change", o));
    }
  }
  var zb = V('<img alt="" class="kaching-bundles__bundle-products__image"/>'), Db = V('<div class="kaching-bundles__bundle-products__image-placeholder"></div>');
  function Ys(n, t) {
    Ye(t, !0);
    const r = k(t, "image", 7), a = k(t, "linkUrl", 7);
    var l = { get image() {
      return r();
    }, set image(s) {
      r(s), _();
    }, get linkUrl() {
      return a();
    }, set linkUrl(s) {
      a(s), _();
    } }, o = De(), u = _e(o), c = (s) => {
      Rn(s, { get url() {
        return a();
      }, class: "kaching-bundles__bundle-products__link", children: (g, h) => {
        var p = zb();
        Pe(p, "height", 50), Pe(p, "width", 50), pe(() => Pe(p, "src", r())), f(g, p);
      }, $$slots: { default: !0 } });
    }, i = (s) => {
      f(s, Db());
    };
    return L(u, (s) => {
      r() ? s(c) : s(i, !1);
    }), f(n, o), Ke(l);
  }
  Ne(Ys, { image: {}, linkUrl: {} }, [], [], !0);
  var $b = V('<span class="kaching-bundles__bundle-products__quantity"> </span>'), Ab = V('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function Ks(n, t) {
    Ye(t, !0);
    const r = k(t, "title", 7), a = k(t, "quantity", 7), l = k(t, "linkUrl", 7);
    var o = { get title() {
      return r();
    }, set title(u) {
      r(u), _();
    }, get quantity() {
      return a();
    }, set quantity(u) {
      a(u), _();
    }, get linkUrl() {
      return l();
    }, set linkUrl(u) {
      l(u), _();
    } };
    return Rn(n, { get url() {
      return l();
    }, class: "kaching-bundles__bundle-products__link", children: (u, c) => {
      var i = Ab(), s = w(i), g = (v) => {
        var b = $b(), y = w(b);
        x(b), pe(() => {
          var m;
          return mt(y, `${(m = a()) != null ? m : ""}x`);
        }), f(v, b);
      };
      L(s, (v) => {
        a() > 1 && v(g);
      });
      var h = F(s, 2), p = w(h, !0);
      x(h), x(i), pe(() => mt(p, r())), f(u, i);
    }, $$slots: { default: !0 } }), Ke(o);
  }
  Ne(Ks, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var Vb = V('<span class="kaching-bundles__bundle-products__price"><!></span>'), qb = V('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), Tb = V('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), Gb = V("<div><!> <!> <!></div>");
  function Fl(n, t) {
    Ye(t, !0);
    const r = () => Ie(g, "$formatPrice", a), [a, l] = kt();
    let o = k(t, "discountedPrice", 7), u = k(t, "fullPrice", 7), c = k(t, "unitPrice", 7), i = k(t, "unitPriceReference", 7), s = k(t, "ignoreUnitPrice", 7);
    const g = sn(), h = d(() => !!c() && !!i() && !s());
    var p = { get discountedPrice() {
      return o();
    }, set discountedPrice(I) {
      o(I), _();
    }, get fullPrice() {
      return u();
    }, set fullPrice(I) {
      u(I), _();
    }, get unitPrice() {
      return c();
    }, set unitPrice(I) {
      c(I), _();
    }, get unitPriceReference() {
      return i();
    }, set unitPriceReference(I) {
      i(I), _();
    }, get ignoreUnitPrice() {
      return s();
    }, set ignoreUnitPrice(I) {
      s(I), _();
    } }, v = Gb();
    let b;
    var y = w(v);
    Xe(y, o, (I) => {
      var E = Vb();
      Ge(w(E), () => r()(o())), x(E), f(I, E);
    });
    var m = F(y, 2), C = (I) => {
      var E = De();
      Xe(_e(E), u, (Z) => {
        var G = qb();
        Ge(w(G), () => r()(u())), x(G), f(Z, G);
      }), f(I, E);
    };
    L(m, (I) => {
      o() < u() && I(C);
    });
    var P = F(m, 2), B = (I) => {
      var E = De();
      Xe(_e(E), c, (Z) => {
        var G = Tb(), ce = w(G);
        Ge(ce, () => r()(c(), { preserveDecimals: !0 }));
        var H = F(ce);
        x(G), pe(() => {
          var W;
          return mt(H, ` / ${(W = i()) != null ? W : ""}`);
        }), f(Z, G);
      }), f(I, E);
    };
    L(P, (I) => {
      c() && i() && !s() && I(B);
    }), x(v), pe((I) => b = At(v, 1, "kaching-bundles__bundle-products__pricing", null, b, I), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(h) })]), f(n, v);
    var O = Ke(p);
    return l(), O;
  }
  Ne(Fl, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var Ob = V("<!> <!> <!> <!> <!>", 1), Fb = V("<!> <!>", 1), Lb = V('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), jb = V('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function Xu(n, t) {
    Ye(t, !0);
    const r = () => Ie(C, "$config", a), [a, l] = kt();
    let o = k(t, "dealBlock", 7), u = k(t, "layout", 7), c = k(t, "bundleProduct", 7), i = k(t, "product", 7), s = k(t, "dealBarSelected", 7), g = k(t, "currentVariantId", 7), h = k(t, "mainVariantId", 7), p = k(t, "priceRounding", 7), v = k(t, "sellingPlan", 7), b = k(t, "dealBar", 7), y = k(t, "sets", 7), m = k(t, "onChange", 7);
    const C = fn(), P = sn();
    let B = Te(void 0);
    const O = d(() => !!c().variantGIDs), I = d(() => {
      var A, $;
      return e(O) && i() ? i().variants.filter((ne) => c().variantGIDs.some((te) => Rt(te) === ne.id)) : ($ = (A = i()) == null ? void 0 : A.variants) != null ? $ : [];
    }), E = d(() => {
      var A, $, ne, te;
      const ie = c().productGID === "default", X = !!((A = o().defaultVariantsV2) != null && A.length);
      if (ie && X && i()) {
        const ve = i().id, Be = (te = (ne = ($ = o().defaultVariantsV2) == null ? void 0 : $.find((oe) => Rt(oe.productGID) === ve && oe.dealBarId === b().id)) == null ? void 0 : ne.variantGIDs) == null ? void 0 : te[0];
        if (Be) return Rt(Be);
      }
      if (c().defaultVariantGID) return Rt(c().defaultVariantGID);
    }), Z = d(() => {
      const A = e(B) || e(E);
      return A !== void 0 && e(I).some(({ id: $ }) => $ === A) ? A : c().productGID === "default" && g() ? g() : c().variantGIDs ? c().variantGIDs.length === 0 ? void 0 : Rt(c().variantGIDs[0]) : e(I).length > 0 ? e(I)[0].id : void 0;
    }), G = d(() => {
      var A;
      return e(Z) ? (A = i()) == null ? void 0 : A.variants.find(($) => $.id === e(Z)) : void 0;
    }), ce = d(() => i() && e(G) && Qn(i(), e(G), v())), H = d(() => c().quantity * y()), W = d(() => Zr({ discountType: c().discountType, discountValue: c().discountValue, discountQuantity: c().quantity, variantQuantities: e(G) ? [{ variant: e(G), quantity: e(H) }] : [], currencyRate: r().currencyRate, priceRounding: p(), sellingPlan: e(ce) })), J = d(() => (function(A) {
      if (!A) return 0;
      let $ = A.price;
      return o().useProductCompareAtPrice && A.compareAtPrice && ($ = Math.max($, A.compareAtPrice)), $ * e(H);
    })(e(G))), Q = d(() => e(G) ? qs(e(G)) : null), U = d(() => e(G) ? cr([{ variant: e(G), quantity: e(H) }]) : null), z = d(() => e(U) ? e(W) / e(U) : null), D = d(() => {
      var A;
      return (A = i()) != null && A.url && e(G) ? `${i().url}?variant=${e(G).id}` : void 0;
    }), j = d(() => {
      var A, $;
      return ((A = e(G)) == null ? void 0 : A.image) || (($ = i()) == null ? void 0 : $.image);
    }), Y = d(() => s() && i() && e(I).length > 1 && e(Z)), K = d(() => s() && c().productGID !== "default" ? e(D) : void 0), ee = d(() => i() ? c().title ? gn({ priceFormatter: Ie(P, "$formatPrice", a), product: i(), totalFullPrice: e(J), totalDiscountedPrice: e(W), quantity: e(H), unitQuantity: e(U) })(c().title) : i().title : "");
    function q(A) {
      re(B, A, !0);
    }
    let S;
    Je(() => {
      e(G) && e(H) && en(() => {
        m()({ variant: e(G), product: i(), quantity: e(H) });
      });
    }), ar(() => {
      c().productGID, re(B, void 0), S = void 0;
    }), ar(() => {
      const A = c().productGID === "default";
      if (!(A || !o().disableVariantOptionSync)) return;
      const $ = A ? g() : h();
      if (!$ || !i() || $ === S) return;
      const ne = S;
      if (S = $, !e(I).some((X) => X.id === $)) return;
      const te = e(B) === void 0 && e(E) === void 0, ie = e(B) === ne && ne !== void 0;
      (te || ie) && re(B, $, !0);
    });
    var T = { get dealBlock() {
      return o();
    }, set dealBlock(A) {
      o(A), _();
    }, get layout() {
      return u();
    }, set layout(A) {
      u(A), _();
    }, get bundleProduct() {
      return c();
    }, set bundleProduct(A) {
      c(A), _();
    }, get product() {
      return i();
    }, set product(A) {
      i(A), _();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(A) {
      s(A), _();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(A) {
      g(A), _();
    }, get mainVariantId() {
      return h();
    }, set mainVariantId(A) {
      h(A), _();
    }, get priceRounding() {
      return p();
    }, set priceRounding(A) {
      p(A), _();
    }, get sellingPlan() {
      return v();
    }, set sellingPlan(A) {
      v(A), _();
    }, get dealBar() {
      return b();
    }, set dealBar(A) {
      b(A), _();
    }, get sets() {
      return y();
    }, set sets(A) {
      y(A), _();
    }, get onChange() {
      return m();
    }, set onChange(A) {
      m(A), _();
    } }, M = De(), R = _e(M), ae = (A) => {
      var $ = jb(), ne = w($), te = (X) => {
        var ve = Ob(), Be = _e(ve);
        Ys(Be, { get image() {
          return e(j);
        }, get linkUrl() {
          return e(K);
        } });
        var oe = F(Be, 2);
        Ks(oe, { get title() {
          return e(ee);
        }, get quantity() {
          return e(H);
        }, get linkUrl() {
          return e(K);
        } });
        var fe = F(oe, 2);
        Fl(fe, { get discountedPrice() {
          return e(W);
        }, get fullPrice() {
          return e(J);
        }, get unitPrice() {
          return e(z);
        }, get unitPriceReference() {
          return e(Q);
        }, get ignoreUnitPrice() {
          return r().ignoreUnitPrice;
        } });
        var ke = F(fe, 2);
        Jr(ke, { get dealBlock() {
          return o();
        }, get variant() {
          return e(G);
        } });
        var ze = F(ke, 2), he = (de) => {
          {
            let be = d(() => ({ ...i(), variants: e(I) })), we = d(() => e(Z) || 0);
            Gn(de, { get product() {
              return e(be);
            }, get selectedVariantId() {
              return e(we);
            }, onChange: q });
          }
        };
        L(ze, (de) => {
          e(Y) && de(he);
        }), f(X, ve);
      }, ie = (X) => {
        var ve = Lb(), Be = _e(ve), oe = w(Be);
        Ys(oe, { get image() {
          return e(j);
        }, get linkUrl() {
          return e(K);
        } });
        var fe = F(oe, 2), ke = w(fe);
        Ks(ke, { get title() {
          return e(ee);
        }, get quantity() {
          return e(H);
        }, get linkUrl() {
          return e(K);
        } });
        var ze = F(ke, 2);
        Jr(ze, { get dealBlock() {
          return o();
        }, get variant() {
          return e(G);
        } });
        var he = F(ze, 2), de = (be) => {
          var we = Fb(), Le = _e(we);
          {
            let Se = d(() => ({ ...i(), variants: e(I) }));
            Hr(Le, { get product() {
              return e(Se);
            } });
          }
          var Ce = F(Le, 2);
          {
            let Se = d(() => ({ ...i(), variants: e(I) })), Qe = d(() => e(Z) || 0);
            Gn(Ce, { get product() {
              return e(Se);
            }, get selectedVariantId() {
              return e(Qe);
            }, onChange: q });
          }
          f(be, we);
        };
        L(he, (be) => {
          e(Y) && be(de);
        }), x(fe), x(Be), Fl(F(Be, 2), { get discountedPrice() {
          return e(W);
        }, get fullPrice() {
          return e(J);
        }, get unitPrice() {
          return e(z);
        }, get unitPriceReference() {
          return e(Q);
        }, get ignoreUnitPrice() {
          return r().ignoreUnitPrice;
        } }), f(X, ve);
      };
      L(ne, (X) => {
        u() === "horizontal" ? X(te) : X(ie, !1);
      }), x($), f(A, $);
    };
    L(R, (A) => {
      i() && A(ae);
    }), f(n, M);
    var N = Ke(T);
    return l(), N;
  }
  Ne(Xu, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var Eb = En('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function ed(n) {
    f(n, Eb());
  }
  function Rb(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Ne(ed, {}, [], [], !0);
  var Qb = V('<img class="kaching-bundles__bar-image" alt=""/>'), Nb = V('<div class="kaching-bundles__bar-radio"></div>'), Wb = V('<span class="kaching-bundles__bar-title"><!></span>'), Ub = V('<span class="kaching-bundles__bar-label"><!></span>'), Hb = V('<div class="kaching-bundles__bar-subtitle"><!></div>'), Zb = V('<div class="kaching-bundles__bar-full-price"><!></div>'), Jb = V('<div class="kaching-bundles__bar-price"><!></div>'), Yb = V('<div class="kaching-bundles__bar-full-price"><!></div>'), Kb = V('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Xb = V('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), ev = V('<div class="kaching-bundles__bar-full-price"><!></div>'), tv = V("<!> <!>", 1), nv = V('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), rv = V('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), av = V('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), iv = V("<!> <!>", 1), lv = V("<div></div>"), sv = V('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function td(n, t) {
    Ye(t, !0);
    const r = () => Ie(J, "$config", u), a = () => Ie(H, "$formatPrice", u), l = () => Ie(ce, "$translate", u), o = () => Ie(W, "$getMediaImageUrl", u), [u, c] = kt(), i = k(t, "dealBlock", 7), s = k(t, "dealBar", 7), g = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), p = k(t, "complementaryProducts", 23, () => []), v = k(t, "currentVariantId", 7), b = k(t, "componentId", 7), y = k(t, "selectedDealBarIndex", 7), m = k(t, "selected", 7, !1), C = k(t, "sellingPlan", 7), P = k(t, "onProgressiveGiftsChange", 7), B = k(t, "onDealBarSelect", 7), O = k(t, "onDealBarDeselect", 7), I = k(t, "onVariantSelect", 7), E = k(t, "onVariantsChange", 7), Z = k(t, "onPersonalisationsChange", 7), G = k(t, "personalisationInitialValues", 23, () => []), ce = Dt(), H = sn(), W = An(), J = fn();
    let Q = Te(lt({})), U = Te(lt([])), z = Te(lt([])), D = Te(lt([])), j = Te(1);
    const Y = d(() => `${s().id}_${b()}`), K = d(() => s().bundleProducts.filter(({ productGID: ge }) => ge)), ee = d(() => e(K).every((ge) => Le(ge, g(), h()))), q = d(() => s().showProductsOnlyWhenSelected && !m()), S = d(() => e(K).every((ge) => {
      var Re;
      const nt = Le(ge, g(), h());
      return (Re = nt == null ? void 0 : nt.availableForSale) != null && Re;
    })), T = d(() => i() ? (function(ge, Re) {
      return s().bundleProducts.map((et) => {
        const je = Re[et.id];
        if (!je) return 0;
        const { variant: dt, quantity: at } = je;
        let ot = dt.price;
        return dt.compareAtPrice && ge.useProductCompareAtPrice && (ot = Math.max(ot, dt.compareAtPrice)), ot * at;
      }).reduce((et, je) => et + je, 0);
    })(i(), e(Q)) : 0), M = d(() => Ei(e(T), e(U), e(z))), R = d(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), ae = d(() => i() ? Ls(s(), e(Q), r().currencyRate, e(R), C()) : 0), N = d(() => e(K).reduce((ge, Re) => ge + Re.quantity, 0) * e(j)), A = d(() => Math.ceil(e(ae) / (e(N) || 1))), $ = d(() => Math.ceil(e(T) / (e(N) || 1))), ne = d(() => Rs(e(N) === 1, e(M), e($))), te = d(() => e(M) > e(ae)), ie = d(() => cr(Object.values(e(Q)))), X = d(() => e(K).every((ge) => ge.productGID === "default" || Rt(ge.productGID) === g().id)), ve = d(() => {
      var ge;
      const Re = e(K)[0];
      if (Re) return (ge = e(Q)[Re.id]) == null ? void 0 : ge.variant.id;
    }), Be = d(() => i().showPricesPerItem && e(X)), oe = d(() => gn({ priceFormatter: a(), product: g(), dealBar: s(), totalFullPrice: e(T), totalCompareAtPrice: e(M), totalDiscountedPrice: e(ae), quantity: 1, unitQuantity: e(ie), sellingPlan: C() })), fe = d(() => e(oe)(l()(s().title))), ke = d(() => e(oe)(l()(s().subtitle))), ze = d(() => e(oe)(l()(s().label))), he = d(() => e(oe)(l()(s().badgeText))), de = d(() => o()(s().badgeImageGID)), be = d(() => o()(s().mediaImageGID) || Ri);
    function we(ge) {
      m() && (ge.preventDefault(), ge.stopPropagation(), O()());
    }
    function Le(ge, Re, nt) {
      if (ge.productGID) return ge.productGID === "default" ? Re : nt.find((et) => et.id === Rt(ge.productGID));
    }
    Ca(() => {
      m() && B()({ dealBarId: s().id, preselected: !0 });
    }), Je(() => {
      m() && (na(e(Q)), na(e(D)), na(e(U)), na(e(z)), C(), en(() => {
        (function() {
          if (!s().bundleProducts.map(({ id: at }) => at).every((at) => e(Q)[at])) return;
          const ge = [];
          for (const at of s().bundleProducts) {
            const ot = e(Q)[at.id];
            ot && ge.push({ id: at.id, variant: ot.variant, product: ot.product, quantity: ot.quantity });
          }
          if (ge.length === 0) return;
          const Re = e(ae) + e(D).reduce((at, ot) => at + ot.discountedPrice, 0), nt = e(U).reduce((at, ot) => ot.showPrice ? at + ot.fullPrice : at, 0) + e(z).reduce((at, ot) => at + ot.fullPrice * ot.quantity, 0), et = e(T) + e(D).reduce((at, ot) => at + ot.fullPrice, 0) + nt, je = Ls(s(), e(Q), r().currencyRate, e(R), void 0), dt = g().sellingPlans.map((at) => ({ sellingPlanId: at.id, discountedPrice: Ls(s(), e(Q), r().currencyRate, e(R), at) }));
          E()({ bundleProducts: ge, freeGifts: [...e(U), ...e(z)], upsells: e(D), pricing: { discountedPrice: Re, fullPrice: et, giftValue: nt, discountedPricePerItem: e(ae), fullPricePerItem: e(T), discountedPriceWithoutSellingPlan: je, discountedPricesForSellingPlans: dt } });
        })();
      }));
    });
    const Ce = d(() => s().showAsSoldOutEnabled && s().showAsSoldOut ? Ni(s().showAsSoldOut) : "");
    var Se = { get dealBlock() {
      return i();
    }, set dealBlock(ge) {
      i(ge), _();
    }, get dealBar() {
      return s();
    }, set dealBar(ge) {
      s(ge), _();
    }, get product() {
      return g();
    }, set product(ge) {
      g(ge), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(ge = []) {
      h(ge), _();
    }, get complementaryProducts() {
      return p();
    }, set complementaryProducts(ge = []) {
      p(ge), _();
    }, get currentVariantId() {
      return v();
    }, set currentVariantId(ge) {
      v(ge), _();
    }, get componentId() {
      return b();
    }, set componentId(ge) {
      b(ge), _();
    }, get selectedDealBarIndex() {
      return y();
    }, set selectedDealBarIndex(ge) {
      y(ge), _();
    }, get selected() {
      return m();
    }, set selected(ge = !1) {
      m(ge), _();
    }, get sellingPlan() {
      return C();
    }, set sellingPlan(ge) {
      C(ge), _();
    }, get onProgressiveGiftsChange() {
      return P();
    }, set onProgressiveGiftsChange(ge) {
      P(ge), _();
    }, get onDealBarSelect() {
      return B();
    }, set onDealBarSelect(ge) {
      B(ge), _();
    }, get onDealBarDeselect() {
      return O();
    }, set onDealBarDeselect(ge) {
      O(ge), _();
    }, get onVariantSelect() {
      return I();
    }, set onVariantSelect(ge) {
      I(ge), _();
    }, get onVariantsChange() {
      return E();
    }, set onVariantsChange(ge) {
      E(ge), _();
    }, get onPersonalisationsChange() {
      return Z();
    }, set onPersonalisationsChange(ge) {
      Z(ge), _();
    }, get personalisationInitialValues() {
      return G();
    }, set personalisationInitialValues(ge = []) {
      G(ge), _();
    } }, Qe = De(), xe = _e(Qe), ue = (ge) => {
      var Re = sv();
      let nt;
      var et = w(Re);
      Wr(et), et.__change = [Rb, B, s];
      var je = F(et, 2);
      let dt;
      var at = w(je);
      {
        let Ct = d(() => e(he) || void 0);
        Va(at, { get style() {
          return s().badgeStyle;
        }, get text() {
          return e(Ct);
        }, get imageUrl() {
          return e(de);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      }
      var ot = F(at, 2), rt = w(ot);
      Et(rt, { element: "div", class: "kaching-bundles__bar-main", onclick: we, children: (Ct, Wt) => {
        var Jt = nv(), on = _e(Jt), yn = (_t) => {
          var Mt = Qb();
          pe(() => Pe(Mt, "src", e(be))), f(_t, Mt);
        }, On = (_t) => {
          f(_t, Nb());
        };
        L(on, (_t) => {
          s().mediaImageGID ? _t(yn) : _t(On, !1);
        });
        var $n = F(on, 2), me = w($n), tt = w(me), pt = w(tt);
        Xe(pt, () => e(fe), (_t) => {
          var Mt = Wb();
          Ge(w(Mt), () => e(fe)), x(Mt), f(_t, Mt);
        });
        var le = F(pt, 2), Oe = (_t) => {
          var Mt = De();
          Xe(_e(Mt), () => e(ze), (Gt) => {
            var Ot = Ub();
            Ge(w(Ot), () => e(ze)), x(Ot), f(Gt, Ot);
          }), f(_t, Mt);
        };
        L(le, (_t) => {
          e(ze) && _t(Oe);
        }), x(tt);
        var Ve = F(tt, 2), Ue = (_t) => {
          var Mt = De();
          Xe(_e(Mt), () => e(ke), (Gt) => {
            var Ot = Hb();
            Ge(w(Ot), () => e(ke)), x(Ot), f(Gt, Ot);
          }), f(_t, Mt);
        };
        L(Ve, (_t) => {
          e(ke) && _t(Ue);
        }), x(me);
        var He = F(me, 2), ut = w(He), xt = (_t) => {
          var Mt = De(), Gt = _e(Mt), Ot = (bn) => {
            var Yt = Xb(), nn = _e(Yt), Hn = w(nn);
            Xe(Hn, () => e(A), (zt) => {
              Dr(zt, { get amount() {
                return e(A);
              }, get showPricesPerItem() {
                return e(Be);
              }, get unitLabel() {
                return i().unitLabel;
              } });
            });
            var xn = F(Hn, 2), wn = (zt) => {
              var Vt = De();
              Xe(_e(Vt), () => e(ne), (Fn) => {
                var rn = Zb();
                Ge(w(rn), () => a()(e(ne))), x(rn), pe((Pn) => Pe(rn, "data-a11y-label", Pn), [() => l()("system.original_price")]), f(Fn, rn);
              }), f(zt, Vt);
            };
            L(xn, (zt) => {
              e(te) && zt(wn);
            }), x(nn);
            var st = F(nn, 2), St = (zt) => {
              var Vt = Kb(), Fn = w(Vt);
              Xe(Fn, () => e(ae), (Sn) => {
                var Lt = Jb();
                Ge(w(Lt), () => a()(e(ae))), x(Lt), pe((cn) => Pe(Lt, "data-a11y-label", cn), [() => l()("system.price")]), f(Sn, Lt);
              });
              var rn = F(Fn, 2), Pn = (Sn) => {
                var Lt = De();
                Xe(_e(Lt), () => e(M), (cn) => {
                  var hn = Yb();
                  Ge(w(hn), () => a()(e(M))), x(hn), pe((un) => Pe(hn, "data-a11y-label", un), [() => l()("system.original_price")]), f(cn, hn);
                }), f(Sn, Lt);
              };
              L(rn, (Sn) => {
                e(te) && Sn(Pn);
              }), x(Vt), f(zt, Vt);
            };
            L(st, (zt) => {
              e(N) > 1 && zt(St);
            }), f(bn, Yt);
          }, Ht = (bn) => {
            var Yt = tv(), nn = _e(Yt);
            Xe(nn, () => e(ae), (wn) => {
              {
                let st = d(() => e(Be) ? e(A) : e(ae));
                Dr(wn, { get amount() {
                  return e(st);
                }, get showPricesPerItem() {
                  return e(Be);
                }, get unitLabel() {
                  return i().unitLabel;
                } });
              }
            });
            var Hn = F(nn, 2), xn = (wn) => {
              var st = De();
              Xe(_e(st), () => e(Be) ? e(ne) : e(M), (St) => {
                var zt = ev();
                Ge(w(zt), () => a()(e(Be) ? e(ne) : e(M))), x(zt), pe((Vt) => Pe(zt, "data-a11y-label", Vt), [() => l()("system.original_price")]), f(St, zt);
              }), f(wn, st);
            };
            L(Hn, (wn) => {
              e(te) && wn(xn);
            }), f(bn, Yt);
          };
          L(Gt, (bn) => {
            i().showBothPrices && e(X) ? bn(Ot) : bn(Ht, !1);
          }), f(_t, Mt);
        };
        L(ut, (_t) => {
          e(ee) && _t(xt);
        }), x(He), x($n), f(Ct, Jt);
      }, $$slots: { default: !0 } });
      var ft = F(rt, 2), Tt = (Ct) => {
        ua(Ct, { get highlights() {
          return s().highlights;
        }, get isSelected() {
          return m();
        }, get replaceLiquid() {
          return e(oe);
        } });
      };
      L(ft, (Ct) => {
        s().highlights && Ct(Tt);
      });
      var $t = F(ft, 2), Me = (Ct) => {
        Wi(Ct, { get value() {
          return e(j);
        }, onChange: (Wt) => {
          re(j, Wt, !0);
        } });
      };
      L($t, (Ct) => {
        m() && s().quantitySelector && Ct(Me);
      });
      var Ze = F($t, 2), bt = (Ct) => {
        var Wt = lv();
        let Jt;
        Zt(Wt, 23, () => s().bundleProducts, (on) => on.id, (on, yn, On) => {
          var $n = iv(), me = _e($n), tt = (Ve) => {
            {
              let Ue = d(() => Le(e(yn), g(), h())), He = d(() => s().layout || "horizontal");
              Xu(Ve, { get dealBar() {
                return s();
              }, get bundleProduct() {
                return e(yn);
              }, get product() {
                return e(Ue);
              }, get dealBlock() {
                return i();
              }, get layout() {
                return e(He);
              }, get dealBarSelected() {
                return m();
              }, get priceRounding() {
                return e(R);
              }, get currentVariantId() {
                return v();
              }, get mainVariantId() {
                return e(ve);
              }, get sellingPlan() {
                return C();
              }, get sets() {
                return e(j);
              }, onChange: (ut) => (function(xt, _t) {
                const { variant: Mt, product: Gt, quantity: Ot } = _t;
                e(Q)[xt] = { variant: Mt, product: Gt, quantity: Ot }, m() && s().bundleProducts.map(({ id: Ht }) => Ht).every((Ht) => e(Q)[Ht]) && xt === s().bundleProducts[0].id && I()({ variantId: Mt.id });
              })(e(yn).id, ut) });
            }
          }, pt = (Ve) => {
            var Ue = De(), He = _e(Ue), ut = (xt) => {
              f(xt, rv());
            };
            L(He, (xt) => {
              r().preview && xt(ut);
            }, !0), f(Ve, Ue);
          };
          L(me, (Ve) => {
            e(yn).productGID ? Ve(tt) : Ve(pt, !1);
          });
          var le = F(me, 2), Oe = (Ve) => {
            var Ue = av(), He = F(w(Ue), 2);
            ed(w(He)), x(He), ta(2), x(Ue), f(Ve, Ue);
          };
          L(le, (Ve) => {
            e(On) < s().bundleProducts.length - 1 && Ve(Oe);
          }), f(on, $n);
        }), x(Wt), pe((on) => Jt = At(Wt, 1, "kaching-bundles__bundle-products", null, Jt, on), [() => ({ "kaching-bundles__bundle-products--vertical": s().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(q) })]), f(Ct, Wt);
      };
      L(Ze, (Ct) => {
        e(ee) && Ct(bt);
      });
      var ct = F(Ze, 2), vt = (Ct) => {
        {
          let Wt = d(() => e(ve) ? [e(ve)] : []);
          qa(Ct, { get product() {
            return g();
          }, get productPersonalisation() {
            return s().productPersonalisation;
          }, get selectedVariantIds() {
            return e(Wt);
          }, get quantity() {
            return e(j);
          }, get addPersonalisationModal() {
            return i().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return Z();
          }, get initialValues() {
            return G();
          } });
        }
      };
      L(ct, (Ct) => {
        m() && s().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && Ct(vt);
      }), x(ot);
      var yt = F(ot, 2);
      {
        let Ct = d(() => s().upsells || []);
        oi(yt, { get dealBlock() {
          return i();
        }, get upsells() {
          return e(Ct);
        }, get otherProducts() {
          return h();
        }, get complementaryProducts() {
          return p();
        }, get dealBarSelected() {
          return m();
        }, get dealSellingPlan() {
          return C();
        }, get sets() {
          return e(j);
        }, onChange: (Wt) => {
          re(D, Wt, !0);
        } });
      }
      var We = F(yt, 2);
      di(We, { get selectedDealBarIndex() {
        return y();
      }, get onChange() {
        return P();
      }, get dealBlock() {
        return i();
      }, get dealBar() {
        return s();
      }, get otherProducts() {
        return h();
      }, get selected() {
        return m();
      }, get progressiveGifts() {
        return i().progressiveGifts;
      } });
      var wt = F(We, 2);
      {
        let Ct = d(() => s().freeGifts || []);
        si(wt, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(Ct);
        }, get freeGiftsSummary() {
          return s().freeGiftsSummary;
        }, get otherProducts() {
          return h();
        }, get dealBarSelected() {
          return m();
        }, get sellingPlan() {
          return C();
        }, get sets() {
          return e(j);
        }, onChange: (Wt) => {
          re(U, Wt, !0);
        } });
      }
      var tn = F(wt, 2);
      {
        let Ct = d(() => s().multipleGiftsSelectors || []);
        ui(tn, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(Ct);
        }, get sellingPlan() {
          return C();
        }, get otherProducts() {
          return h();
        }, onChange: (Wt) => {
          re(z, Wt, !0);
        } });
      }
      x(je);
      var mn = F(je, 2), kn = (Ct) => {
        ci(Ct, { get showAsSoldOut() {
          return s().showAsSoldOut;
        }, get replaceLiquid() {
          return e(oe);
        } });
      };
      L(mn, (Ct) => {
        s().showAsSoldOutEnabled && s().showAsSoldOut && Ct(kn);
      }), x(Re), pe((Ct, Wt) => {
        var Jt;
        nt = At(Re, 1, "kaching-bundles__bar", null, nt, Ct), Pe(Re, "data-deal-bar-id", s().id), Nt(Re, e(Ce)), Pe(et, "name", `kaching-bundles-deal-${(Jt = b()) != null ? Jt : ""}`), Ia(et, s().id), Pe(et, "id", e(Y)), qi(et, m()), et.disabled = s().showAsSoldOutEnabled, Pe(je, "for", e(Y)), dt = At(je, 1, "kaching-bundles__bar-container", null, dt, Wt);
      }, [() => ({ "kaching-bundles__bar--selected": m(), "kaching-bundles__bar--disabled": !e(S) && r().preview }), () => ({ "kaching-bundles__bar-container--sold-out": s().showAsSoldOutEnabled })]), f(ge, Re);
    };
    L(xe, (ge) => {
      (e(S) || r().preview) && ge(ue);
    }), f(n, Qe);
    var $e = Ke(Se);
    return c(), $e;
  }
  Dn(["change"]), Ne(td, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var ov = V('<img class="kaching-bundles__mix-and-match-choose-product__product-image" alt=""/>'), cv = V('<span class="kaching-bundles__mix-and-match-choose-product__product-title"> </span>'), uv = V('<span class="kaching-bundles__mix-and-match-choose-product__subtitle"><!></span>'), dv = V('<div class="kaching-bundles__mix-and-match-choose-product__product-price"><!></div>'), gv = V('<div class="kaching-bundles__mix-and-match-choose-product__product-compare-at-price"><!></div>'), hv = V('<div class="kaching-bundles__mix-and-match-choose-product__product-price-container"><!> <!></div>'), pv = V("<div><!> <!></div>"), fv = V('<div class="kaching-bundles__mix-and-match-choose-product__product"><div class="kaching-bundles__mix-and-match-choose-product__product-container"><!> <div class="kaching-bundles__mix-and-match-choose-product__product-content"><!> <!> <!> <!></div></div> <!></div>');
  function nd(n, t) {
    var r;
    Ye(t, !0);
    const a = () => Ie(y, "$config", u), l = () => Ie(b, "$formatPrice", u), o = () => Ie(v, "$translate", u), [u, c] = kt(), i = k(t, "product", 7), s = k(t, "dealBlock", 7), g = k(t, "dealBar", 7), h = k(t, "modal", 7), p = k(t, "onChoose", 7), v = Dt(), b = sn(), y = fn();
    let m = Te(lt(((r = i().variants.find((M) => M.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const C = d(() => i().variants.find((M) => M.id === e(m)) || i().variants[0]), P = d(() => s().priceRounding ? { perItem: !1, precision: s().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), B = d(() => g().discountType === "percentage" ? Zr({ discountType: g().discountType, discountValue: g().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(C), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(P) }) : e(C).price), O = d(() => s().useProductCompareAtPrice && e(C).compareAtPrice ? Math.max(e(C).price, e(C).compareAtPrice) : e(C).price), I = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), E = d(() => gn({ priceFormatter: l(), product: i(), totalFullPrice: e(O), totalDiscountedPrice: e(B), quantity: 1, unitQuantity: null })), Z = d(() => e(E)(o()(h().subtitle || ""))), G = d(() => h().buttonText);
    function ce(M) {
      re(m, M, !0);
    }
    var H = { get product() {
      return i();
    }, set product(M) {
      i(M), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(M) {
      s(M), _();
    }, get dealBar() {
      return g();
    }, set dealBar(M) {
      g(M), _();
    }, get modal() {
      return h();
    }, set modal(M) {
      h(M), _();
    }, get onChoose() {
      return p();
    }, set onChoose(M) {
      p(M), _();
    } }, W = fv(), J = w(W), Q = w(J), U = (M) => {
      Rn(M, { get url() {
        return e(I);
      }, class: "kaching-bundles__mix-and-match-choose-product__product-image-link", children: (R, ae) => {
        var N = ov();
        Pe(N, "width", 100), Pe(N, "height", 100), pe(() => Pe(N, "src", i().image)), f(R, N);
      }, $$slots: { default: !0 } });
    };
    L(Q, (M) => {
      i().image && M(U);
    });
    var z = F(Q, 2), D = w(z);
    Rn(D, { get url() {
      return e(I);
    }, class: "kaching-bundles__mix-and-match-choose-product__product-link", children: (M, R) => {
      var ae = cv(), N = w(ae, !0);
      x(ae), pe(() => mt(N, i().title)), f(M, ae);
    }, $$slots: { default: !0 } });
    var j = F(D, 2), Y = (M) => {
      var R = uv();
      Ge(w(R), () => e(Z)), x(R), f(M, R);
    };
    L(j, (M) => {
      e(Z) && M(Y);
    });
    var K = F(j, 2), ee = (M) => {
      var R = hv(), ae = w(R);
      Xe(ae, () => e(B), ($) => {
        var ne = dv();
        Ge(w(ne), () => l()(e(B))), x(ne), f($, ne);
      });
      var N = F(ae, 2), A = ($) => {
        var ne = De();
        Xe(_e(ne), () => e(O), (te) => {
          var ie = gv();
          Ge(w(ie), () => l()(e(O))), x(ie), f(te, ie);
        }), f($, ne);
      };
      L(N, ($) => {
        e(O) && e(O) > e(B) && $(A);
      }), x(R), f(M, R);
    };
    L(K, (M) => {
      g().discountType !== "specific" && M(ee);
    });
    var q = F(K, 2), S = (M) => {
      var R = pv(), ae = w(R);
      Hr(ae, { get product() {
        return i();
      }, class: "kaching-bundles__mix-and-match-choose-product__product-option-names" }), Gn(F(ae, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: ce }), x(R), f(M, R);
    };
    L(q, (M) => {
      i().variants.length > 1 && M(S);
    }), x(z), x(J), Et(F(J, 2), { element: "span", class: "kaching-bundles__mix-and-match-choose-product__product-button", onclick: function() {
      p()({ product: i(), variant: e(C) });
    }, children: (M, R) => {
      ta();
      var ae = Tn();
      pe((N) => mt(ae, N), [() => o()(e(G))]), f(M, ae);
    }, $$slots: { default: !0 } }), x(W), f(n, W);
    var T = Ke(H);
    return c(), T;
  }
  Ne(nd, { product: {}, dealBlock: {}, dealBar: {}, modal: {}, onChoose: {} }, [], [], !0);
  const bv = { red: 0, green: 0, blue: 0, alpha: 0.5 }, vv = { buttonSize: 16, textSize: 14, overlayColor: { red: 0, green: 0, blue: 0, alpha: 0.5 }, priceColor: { red: 0, green: 0, blue: 0, alpha: 1 }, compareAtPriceColor: { red: 128, green: 128, blue: 128, alpha: 1 }, textColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonTextColor: { red: 255, green: 255, blue: 255, alpha: 1 }, productPhotoSize: 100, heading: "Select product", buttonText: "Choose" };
  var _v = V('<img alt="Close"/>'), mv = V('<div class="kaching-bundles__mix-and-match-choose-product__empty-state"> </div>'), kv = V('<div class="kaching-bundles__mix-and-match-choose-product"><div class="kaching-bundles__mix-and-match-choose-product__header"><h2 class="kaching-bundles__mix-and-match-choose-product__heading"><!></h2> <!></div> <div class="kaching-bundles__mix-and-match-choose-product__products"><!></div></div>');
  function Xs(n, t) {
    Ye(t, !0);
    const r = () => Ie(g, "$translate", a), [a, l] = kt(), o = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), c = k(t, "products", 23, () => []), i = k(t, "onChoose", 7), s = k(t, "onClose", 7), g = Dt(), h = d(() => {
      var H;
      return (H = o().mixAndMatchChooseProductModal) != null ? H : vv;
    }), p = d(() => ((H) => dn({ "kaching-mix-and-match-choose-product-button-size": H.buttonSize + "px", "kaching-mix-and-match-choose-product-text-size": H.textSize + "px", "kaching-mix-and-match-choose-product-price-color": Ee(H.priceColor), "kaching-mix-and-match-choose-product-compare-at-price-color": Ee(H.compareAtPriceColor), "kaching-mix-and-match-choose-product-text-color": Ee(H.textColor), "kaching-mix-and-match-choose-product-button-color": Ee(H.buttonColor), "kaching-mix-and-match-choose-product-button-text-color": Ee(H.buttonTextColor), "kaching-mix-and-match-choose-product-photo-size": H.productPhotoSize + "px" }))(e(h)));
    var v = { get dealBlock() {
      return o();
    }, set dealBlock(H) {
      o(H), _();
    }, get dealBar() {
      return u();
    }, set dealBar(H) {
      u(H), _();
    }, get products() {
      return c();
    }, set products(H = []) {
      c(H), _();
    }, get onChoose() {
      return i();
    }, set onChoose(H) {
      i(H), _();
    }, get onClose() {
      return s();
    }, set onClose(H) {
      s(H), _();
    } }, b = kv(), y = w(b), m = w(y), C = w(m), P = (H) => {
      var W = Tn();
      pe((J) => mt(W, J), [() => r()(e(h).heading)]), f(H, W);
    };
    L(C, (H) => {
      e(h).heading && H(P);
    }), x(m);
    var B = F(m, 2), O = (H) => {
      Et(H, { element: "span", class: "kaching-bundles__mix-and-match-choose-product__close", get onclick() {
        return s();
      }, children: (W, J) => {
        var Q = _v();
        pe(() => Pe(Q, "src", js)), f(W, Q);
      }, $$slots: { default: !0 } });
    };
    L(B, (H) => {
      s() && H(O);
    }), x(y);
    var I = F(y, 2), E = w(I), Z = (H) => {
      var W = mv(), J = w(W, !0);
      x(W), pe((Q) => mt(J, Q), [() => r()("system.no_products_available")]), f(H, W);
    }, G = (H) => {
      var W = De();
      Zt(_e(W), 17, c, (J) => J.id, (J, Q) => {
        nd(J, { get dealBlock() {
          return o();
        }, get dealBar() {
          return u();
        }, get modal() {
          return e(h);
        }, get product() {
          return e(Q);
        }, get onChoose() {
          return i();
        } });
      }), f(H, W);
    };
    L(E, (H) => {
      c().length === 0 ? H(Z) : H(G, !1);
    }), x(I), x(b), pe(() => Nt(b, e(p))), f(n, b);
    var ce = Ke(v);
    return l(), ce;
  }
  function yv(n, t) {
    n.target === n.currentTarget && t()();
  }
  Ne(Xs, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var xv = V('<div class="kaching-bundles"><div class="kaching-bundles__mix-and-match-choose-product-modal" role="none"><div class="kaching-bundles__mix-and-match-choose-product-modal__content"><!></div></div></div>');
  function rd(n, t) {
    Ye(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "dealBar", 7), l = k(t, "products", 23, () => []), o = k(t, "isOpen", 7), u = k(t, "onChoose", 7), c = k(t, "onClose", 7);
    var i = { get dealBlock() {
      return r();
    }, set dealBlock(p) {
      r(p), _();
    }, get dealBar() {
      return a();
    }, set dealBar(p) {
      a(p), _();
    }, get products() {
      return l();
    }, set products(p = []) {
      l(p), _();
    }, get isOpen() {
      return o();
    }, set isOpen(p) {
      o(p), _();
    }, get onChoose() {
      return u();
    }, set onChoose(p) {
      u(p), _();
    }, get onClose() {
      return c();
    }, set onClose(p) {
      c(p), _();
    } }, s = De(), g = _e(s), h = (p) => {
      Qi(p, { target: "body", children: (v, b) => {
        var y = xv(), m = w(y);
        m.__click = [yv, c];
        var C = w(m);
        Xs(w(C), { get dealBlock() {
          return r();
        }, get dealBar() {
          return a();
        }, get products() {
          return l();
        }, get onChoose() {
          return u();
        }, get onClose() {
          return c();
        } }), x(C), x(m), x(y), pe((P) => Nt(m, P), [() => (function(P) {
          var B;
          return dn({ "kaching-mix-and-match-choose-product-overlay-color": Ee(((B = P.mixAndMatchChooseProductModal) == null ? void 0 : B.overlayColor) || bv) });
        })(r())]), f(v, y);
      }, $$slots: { default: !0 } });
    };
    return L(g, (p) => {
      o() && p(h);
    }), f(n, s), Ke(i);
  }
  Dn(["click"]), Ne(rd, { dealBlock: {}, dealBar: {}, products: {}, isOpen: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var wv = V('<img alt="" class="kaching-bundles__mix-and-match-product__image"/>'), Pv = V('<div class="kaching-bundles__mix-and-match-product__image-placeholder"></div>'), Sv = V('<div class="kaching-bundles__mix-and-match-product__title"> </div>'), Bv = V('<div class="kaching-bundles__mix-and-match-product__pricing"><!></div>'), Cv = V('<div class="kaching-bundles__mix-and-match-product"><!> <div class="kaching-bundles__mix-and-match-product__content"><!> <!> <!></div> <!> <!></div> <!>', 1);
  function ad(n, t) {
    Ye(t, !0);
    const [r, a] = kt();
    let l = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), u = k(t, "bundleProduct", 7), c = k(t, "product", 7), i = k(t, "swapProducts", 7), s = k(t, "dealBarSelected", 7), g = k(t, "currentVariantId", 7), h = k(t, "mainVariantId", 7), p = k(t, "pricing", 7), v = k(t, "onSwap", 7), b = k(t, "onChange", 7);
    const y = sn(), m = Dt();
    let C = Te(void 0), P = Te(!1);
    const B = d(() => s() && i().length > 1), O = d(() => Ie(m, "$translate", r)(o().buttonText || "Change"));
    function I() {
      re(P, !0);
    }
    function E(T) {
      re(P, !1), re(C, T.variant.id, !0), v()(T.product);
    }
    function Z() {
      re(P, !1);
    }
    const G = d(() => {
      var T, M;
      return (M = (T = c()) == null ? void 0 : T.variants) != null ? M : [];
    }), ce = d(() => {
      var T, M;
      return e(C) !== void 0 && e(G).some(({ id: R }) => R === e(C)) ? e(C) : u().productGID === "default" && g() ? g() : e(G).length > 0 ? (M = (T = e(G).find((R) => R.availableForSale)) == null ? void 0 : T.id) != null ? M : e(G)[0].id : void 0;
    }), H = d(() => {
      var T;
      return e(ce) ? (T = c()) == null ? void 0 : T.variants.find((M) => M.id === e(ce)) : void 0;
    }), W = d(() => {
      var T;
      return (T = c()) != null && T.url && e(H) ? `${c().url}?variant=${e(H).id}` : void 0;
    }), J = d(() => {
      var T, M;
      return ((T = e(H)) == null ? void 0 : T.image) || ((M = c()) == null ? void 0 : M.image);
    }), Q = d(() => s() && c() && e(G).length > 1 && e(ce)), U = d(() => s() && u().productGID !== "default" ? e(W) : void 0), z = d(() => c() ? u().title ? gn({ priceFormatter: Ie(y, "$formatPrice", r), product: c(), totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null })(u().title) : c().title : "");
    function D(T) {
      re(C, T, !0);
    }
    let j;
    Je(() => {
      e(H) && en(() => {
        b()({ variant: e(H), product: c() });
      });
    }), ar(() => {
      u().productGID, re(C, void 0), j = void 0;
    }), ar(() => {
      const T = u().productGID === "default";
      if (!(T || !l().disableVariantOptionSync)) return;
      const M = T ? g() : h();
      if (!M || !c() || M === j) return;
      const R = j;
      if (j = M, !e(G).some((A) => A.id === M)) return;
      const ae = e(C) === void 0, N = e(C) === R && R !== void 0;
      (ae || N) && re(C, M, !0);
    });
    var Y = { get dealBlock() {
      return l();
    }, set dealBlock(T) {
      l(T), _();
    }, get dealBar() {
      return o();
    }, set dealBar(T) {
      o(T), _();
    }, get bundleProduct() {
      return u();
    }, set bundleProduct(T) {
      u(T), _();
    }, get product() {
      return c();
    }, set product(T) {
      c(T), _();
    }, get swapProducts() {
      return i();
    }, set swapProducts(T) {
      i(T), _();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(T) {
      s(T), _();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(T) {
      g(T), _();
    }, get mainVariantId() {
      return h();
    }, set mainVariantId(T) {
      h(T), _();
    }, get pricing() {
      return p();
    }, set pricing(T) {
      p(T), _();
    }, get onSwap() {
      return v();
    }, set onSwap(T) {
      v(T), _();
    }, get onChange() {
      return b();
    }, set onChange(T) {
      b(T), _();
    } }, K = De(), ee = _e(K), q = (T) => {
      var M = Cv(), R = _e(M), ae = w(R), N = (ke) => {
        Rn(ke, { get url() {
          return e(U);
        }, class: "kaching-bundles__mix-and-match-product__image-link", children: (ze, he) => {
          var de = wv();
          Pe(de, "height", 50), Pe(de, "width", 50), pe(() => Pe(de, "src", e(J))), f(ze, de);
        }, $$slots: { default: !0 } });
      }, A = (ke) => {
        f(ke, Pv());
      };
      L(ae, (ke) => {
        e(J) ? ke(N) : ke(A, !1);
      });
      var $ = F(ae, 2), ne = w($);
      Rn(ne, { get url() {
        return e(U);
      }, class: "kaching-bundles__mix-and-match-product__title-link", children: (ke, ze) => {
        var he = Sv(), de = w(he, !0);
        x(he), pe(() => mt(de, e(z))), f(ke, he);
      }, $$slots: { default: !0 } });
      var te = F(ne, 2);
      Jr(te, { get dealBlock() {
        return l();
      }, get variant() {
        return e(H);
      } });
      var ie = F(te, 2), X = (ke) => {
        {
          let ze = d(() => e(ce) || 0);
          Gn(ke, { get product() {
            return c();
          }, get selectedVariantId() {
            return e(ze);
          }, onChange: D });
        }
      };
      L(ie, (ke) => {
        e(Q) && ke(X);
      }), x($);
      var ve = F($, 2), Be = (ke) => {
        var ze = Bv();
        Fl(w(ze), { get discountedPrice() {
          return p().discountedPrice;
        }, get fullPrice() {
          return p().fullPrice;
        }, unitPrice: null, unitPriceReference: null, ignoreUnitPrice: !0 }), x(ze), f(ke, ze);
      };
      L(ve, (ke) => {
        p() && ke(Be);
      });
      var oe = F(ve, 2), fe = (ke) => {
        Et(ke, { element: "div", class: "kaching-bundles__mix-and-match-product__swap-button", onclick: I, children: (ze, he) => {
          ta();
          var de = Tn();
          pe(() => mt(de, e(O))), f(ze, de);
        }, $$slots: { default: !0 } });
      };
      L(oe, (ke) => {
        e(B) && ke(fe);
      }), x(R), rd(F(R, 2), { get dealBlock() {
        return l();
      }, get dealBar() {
        return o();
      }, get products() {
        return i();
      }, get isOpen() {
        return e(P);
      }, onChoose: E, onClose: Z }), f(T, M);
    };
    L(ee, (T) => {
      c() && T(q);
    }), f(n, K);
    var S = Ke(Y);
    return a(), S;
  }
  Ne(ad, { dealBlock: {}, dealBar: {}, bundleProduct: {}, product: {}, swapProducts: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, pricing: {}, onSwap: {}, onChange: {} }, [], [], !0);
  var Iv = En('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5V14.5M6.5 10.5H14.5M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function id(n) {
    f(n, Iv());
  }
  function Mv(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Ne(id, {}, [], [], !0);
  var zv = V('<img class="kaching-bundles__bar-image" alt=""/>'), Dv = V('<div class="kaching-bundles__bar-radio"></div>'), $v = V('<span class="kaching-bundles__bar-title"><!></span>'), Av = V('<span class="kaching-bundles__bar-label"><!></span>'), Vv = V('<div class="kaching-bundles__bar-subtitle"><!></div>'), qv = V('<div class="kaching-bundles__bar-full-price"><!></div>'), Tv = V("<!> <!>", 1), Gv = V('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), Ov = V('<div class="kaching-bundles__mix-and-match-products__placeholder"><span>Select product</span></div>'), Fv = V('<div class="kaching-bundles__mix-and-match-products__divider"><div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__mix-and-match-products__divider-icon"><!></div> <div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div></div>'), Lv = V("<!> <!>", 1), jv = V("<div></div>"), Ev = V('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function ld(n, t) {
    Ye(t, !0);
    const r = () => Ie(J, "$config", u), a = () => Ie(H, "$formatPrice", u), l = () => Ie(ce, "$translate", u), o = () => Ie(W, "$getMediaImageUrl", u), [u, c] = kt(), i = k(t, "dealBlock", 7), s = k(t, "dealBar", 7), g = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), p = k(t, "complementaryProducts", 23, () => []), v = k(t, "currentVariantId", 7), b = k(t, "componentId", 7), y = k(t, "selectedDealBarIndex", 7), m = k(t, "selected", 7, !1), C = k(t, "sellingPlan", 7), P = k(t, "onProgressiveGiftsChange", 7), B = k(t, "onDealBarSelect", 7), O = k(t, "onDealBarDeselect", 7), I = k(t, "onVariantSelect", 7), E = k(t, "onVariantsChange", 7), Z = k(t, "onPersonalisationsChange", 7), G = k(t, "personalisationInitialValues", 23, () => []), ce = Dt(), H = sn(), W = An(), J = fn();
    let Q = Te(lt({})), U = Te(lt({}));
    const z = d(() => Object.fromEntries(s().bundleProducts.map((xe) => [xe.id, D(xe).filter(j)])));
    function D(xe) {
      var ue;
      const $e = new Set(((ue = xe.selectedProducts) != null ? ue : []).map((nt) => Rt(nt.id))), ge = h().filter((nt) => $e.has(nt.id)), Re = (function(nt) {
        if (!nt) return;
        if (nt === "default") return g();
        const et = Rt(nt);
        return h().find((je) => je.id === et);
      })(xe.productGID);
      return Re ? [Re, ...ge.filter((nt) => nt.id !== Re.id)] : ge;
    }
    function j(xe) {
      return xe.availableForSale && xe.variants.some((ue) => ue.availableForSale);
    }
    let Y = Te(lt([])), K = Te(lt([])), ee = Te(lt([]));
    const q = d(() => `${s().id}_${b()}`), S = d(() => s().bundleProducts.filter(({ productGID: xe }) => xe)), T = d(() => e(S).every((xe) => de(xe))), M = d(() => s().showProductsOnlyWhenSelected && !m()), R = d(() => e(S).every((xe) => {
      var ue, $e;
      return (($e = (ue = e(z)[xe.id]) == null ? void 0 : ue.length) != null ? $e : 0) > 0;
    })), ae = d(() => {
      return i() ? (xe = i(), ue = e(Q), s().bundleProducts.map(($e) => {
        const ge = ue[$e.id];
        if (!ge) return 0;
        const { variant: Re } = ge;
        let nt = Re.price;
        return Re.compareAtPrice && xe.useProductCompareAtPrice && (nt = Math.max(nt, Re.compareAtPrice)), nt;
      }).reduce(($e, ge) => $e + ge, 0)) : 0;
      var xe, ue;
    }), N = d(() => Ei(e(ae), e(Y), e(K))), A = d(() => i().priceRounding ? { perItem: !1, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), $ = d(() => i() ? Gl(s(), e(Q), r().currencyRate, e(A), C()) : 0), ne = d(() => e(N) > e($)), te = d(() => s().showProductPrices ? (function(xe, ue, $e, ge, Re, nt) {
      const et = xe.bundleProducts.filter(({ productGID: rt }) => rt).flatMap((rt) => {
        const ft = ue[rt.id];
        if (!ft) return [];
        const Tt = Qn(ft.product, ft.variant, Re), $t = Tt ? Gs(ft.variant.price, Tt) : ft.variant.price, { price: Me, compareAtPrice: Ze } = ft.variant, bt = nt && Ze ? Math.max(Me, Ze) : Me;
        return [{ id: rt.id, basisPrice: $t, fullPrice: bt }];
      }), je = et.reduce((rt, ft) => rt + ft.basisPrice, 0);
      if (je === 0) return Object.fromEntries(et.map((rt) => [rt.id, { discountedPrice: 0, fullPrice: rt.fullPrice }]));
      const dt = Gl(xe, ue, $e, ge, Re), at = et.map((rt) => {
        const ft = dt * rt.basisPrice / je;
        return { ...rt, share: Math.floor(ft), remainder: ft % 1 };
      });
      let ot = dt - at.reduce((rt, { share: ft }) => rt + ft, 0);
      for (const rt of [...at].sort((ft, Tt) => Tt.remainder - ft.remainder)) {
        if (ot <= 0) break;
        rt.share += 1, ot -= 1;
      }
      return Object.fromEntries(at.map((rt) => [rt.id, { discountedPrice: rt.share, fullPrice: rt.fullPrice }]));
    })(s(), e(Q), r().currencyRate, e(A), C(), i().useProductCompareAtPrice) : void 0), ie = d(() => {
      var xe;
      const ue = e(S)[0];
      if (ue) return (xe = e(Q)[ue.id]) == null ? void 0 : xe.variant.id;
    }), X = d(() => gn({ priceFormatter: a(), product: g(), dealBar: s(), totalFullPrice: e(ae), totalCompareAtPrice: e(N), totalDiscountedPrice: e($), quantity: 1, unitQuantity: null, sellingPlan: C() })), ve = d(() => e(X)(l()(s().title))), Be = d(() => e(X)(l()(s().subtitle))), oe = d(() => e(X)(l()(s().label))), fe = d(() => e(X)(l()(s().badgeText))), ke = d(() => o()(s().badgeImageGID)), ze = d(() => o()(s().mediaImageGID) || Ri);
    function he(xe) {
      m() && (xe.preventDefault(), xe.stopPropagation(), O()());
    }
    function de(xe) {
      var ue, $e;
      return ($e = e(U)[xe.id]) != null ? $e : (ue = e(z)[xe.id]) == null ? void 0 : ue[0];
    }
    Ca(() => {
      m() && B()({ dealBarId: s().id, preselected: !0 });
    }), Je(() => {
      m() && (na(e(Q)), na(e(ee)), na(e(Y)), na(e(K)), C(), en(() => {
        (function() {
          if (!s().bundleProducts.map(({ id: et }) => et).every((et) => e(Q)[et])) return;
          const xe = [];
          for (const et of s().bundleProducts) {
            const je = e(Q)[et.id];
            je && xe.push({ id: et.id, variant: je.variant, product: je.product, quantity: 1 });
          }
          if (xe.length === 0) return;
          const ue = e($) + e(ee).reduce((et, je) => et + je.discountedPrice, 0), $e = e(Y).reduce((et, je) => je.showPrice ? et + je.fullPrice : et, 0) + e(K).reduce((et, je) => et + je.fullPrice * je.quantity, 0), ge = e(ae) + e(ee).reduce((et, je) => et + je.fullPrice, 0) + $e, Re = Gl(s(), e(Q), r().currencyRate, e(A), void 0), nt = g().sellingPlans.map((et) => ({ sellingPlanId: et.id, discountedPrice: Gl(s(), e(Q), r().currencyRate, e(A), et) }));
          E()({ bundleProducts: xe, freeGifts: [...e(Y), ...e(K)], upsells: e(ee), pricing: { discountedPrice: ue, fullPrice: ge, giftValue: $e, discountedPricePerItem: e($), fullPricePerItem: e(ae), discountedPriceWithoutSellingPlan: Re, discountedPricesForSellingPlans: nt } });
        })();
      }));
    });
    const be = d(() => s().showAsSoldOutEnabled && s().showAsSoldOut ? Ni(s().showAsSoldOut) : "");
    var we = { get dealBlock() {
      return i();
    }, set dealBlock(xe) {
      i(xe), _();
    }, get dealBar() {
      return s();
    }, set dealBar(xe) {
      s(xe), _();
    }, get product() {
      return g();
    }, set product(xe) {
      g(xe), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(xe = []) {
      h(xe), _();
    }, get complementaryProducts() {
      return p();
    }, set complementaryProducts(xe = []) {
      p(xe), _();
    }, get currentVariantId() {
      return v();
    }, set currentVariantId(xe) {
      v(xe), _();
    }, get componentId() {
      return b();
    }, set componentId(xe) {
      b(xe), _();
    }, get selectedDealBarIndex() {
      return y();
    }, set selectedDealBarIndex(xe) {
      y(xe), _();
    }, get selected() {
      return m();
    }, set selected(xe = !1) {
      m(xe), _();
    }, get sellingPlan() {
      return C();
    }, set sellingPlan(xe) {
      C(xe), _();
    }, get onProgressiveGiftsChange() {
      return P();
    }, set onProgressiveGiftsChange(xe) {
      P(xe), _();
    }, get onDealBarSelect() {
      return B();
    }, set onDealBarSelect(xe) {
      B(xe), _();
    }, get onDealBarDeselect() {
      return O();
    }, set onDealBarDeselect(xe) {
      O(xe), _();
    }, get onVariantSelect() {
      return I();
    }, set onVariantSelect(xe) {
      I(xe), _();
    }, get onVariantsChange() {
      return E();
    }, set onVariantsChange(xe) {
      E(xe), _();
    }, get onPersonalisationsChange() {
      return Z();
    }, set onPersonalisationsChange(xe) {
      Z(xe), _();
    }, get personalisationInitialValues() {
      return G();
    }, set personalisationInitialValues(xe = []) {
      G(xe), _();
    } }, Le = De(), Ce = _e(Le), Se = (xe) => {
      var ue = Ev();
      let $e;
      var ge = w(ue);
      Wr(ge), ge.__change = [Mv, B, s];
      var Re = F(ge, 2);
      let nt;
      var et = w(Re);
      {
        let We = d(() => e(fe) || void 0);
        Va(et, { get style() {
          return s().badgeStyle;
        }, get text() {
          return e(We);
        }, get imageUrl() {
          return e(ke);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      }
      var je = F(et, 2), dt = w(je);
      Et(dt, { element: "div", class: "kaching-bundles__bar-main", onclick: he, children: (We, wt) => {
        var tn = Gv(), mn = _e(tn), kn = (Ve) => {
          var Ue = zv();
          pe(() => Pe(Ue, "src", e(ze))), f(Ve, Ue);
        }, Ct = (Ve) => {
          f(Ve, Dv());
        };
        L(mn, (Ve) => {
          s().mediaImageGID ? Ve(kn) : Ve(Ct, !1);
        });
        var Wt = F(mn, 2), Jt = w(Wt), on = w(Jt), yn = w(on);
        Xe(yn, () => e(ve), (Ve) => {
          var Ue = $v();
          Ge(w(Ue), () => e(ve)), x(Ue), f(Ve, Ue);
        });
        var On = F(yn, 2), $n = (Ve) => {
          var Ue = De();
          Xe(_e(Ue), () => e(oe), (He) => {
            var ut = Av();
            Ge(w(ut), () => e(oe)), x(ut), f(He, ut);
          }), f(Ve, Ue);
        };
        L(On, (Ve) => {
          e(oe) && Ve($n);
        }), x(on);
        var me = F(on, 2), tt = (Ve) => {
          var Ue = De();
          Xe(_e(Ue), () => e(Be), (He) => {
            var ut = Vv();
            Ge(w(ut), () => e(Be)), x(ut), f(He, ut);
          }), f(Ve, Ue);
        };
        L(me, (Ve) => {
          e(Be) && Ve(tt);
        }), x(Jt);
        var pt = F(Jt, 2), le = w(pt), Oe = (Ve) => {
          var Ue = Tv(), He = _e(Ue);
          Xe(He, () => e($), (_t) => {
            Dr(_t, { get amount() {
              return e($);
            }, showPricesPerItem: !1, get unitLabel() {
              return i().unitLabel;
            } });
          });
          var ut = F(He, 2), xt = (_t) => {
            var Mt = De();
            Xe(_e(Mt), () => e(N), (Gt) => {
              var Ot = qv();
              Ge(w(Ot), () => a()(e(N))), x(Ot), pe((Ht) => Pe(Ot, "data-a11y-label", Ht), [() => l()("system.original_price")]), f(Gt, Ot);
            }), f(_t, Mt);
          };
          L(ut, (_t) => {
            e(ne) && _t(xt);
          }), f(Ve, Ue);
        };
        L(le, (Ve) => {
          e(T) && Ve(Oe);
        }), x(pt), x(Wt), f(We, tn);
      }, $$slots: { default: !0 } });
      var at = F(dt, 2), ot = (We) => {
        ua(We, { get highlights() {
          return s().highlights;
        }, get isSelected() {
          return m();
        }, get replaceLiquid() {
          return e(X);
        } });
      };
      L(at, (We) => {
        s().highlights && We(ot);
      });
      var rt = F(at, 2), ft = (We) => {
        var wt = jv();
        let tn;
        Zt(wt, 23, () => s().bundleProducts, (mn) => mn.id, (mn, kn, Ct) => {
          var Wt = Lv(), Jt = _e(Wt), on = (me) => {
            {
              let tt = d(() => de(e(kn))), pt = d(() => {
                var le;
                return (le = e(te)) == null ? void 0 : le[e(kn).id];
              });
              ad(me, { get bundleProduct() {
                return e(kn);
              }, get product() {
                return e(tt);
              }, get swapProducts() {
                return e(z)[e(kn).id];
              }, get dealBlock() {
                return i();
              }, get dealBar() {
                return s();
              }, get dealBarSelected() {
                return m();
              }, get currentVariantId() {
                return v();
              }, get mainVariantId() {
                return e(ie);
              }, get pricing() {
                return e(pt);
              }, onSwap: (le) => (function(Oe, Ve) {
                e(U)[Oe] = Ve;
              })(e(kn).id, le), onChange: (le) => (function(Oe, Ve) {
                const { variant: Ue, product: He } = Ve;
                e(Q)[Oe] = { variant: Ue, product: He }, m() && s().bundleProducts.map(({ id: ut }) => ut).every((ut) => e(Q)[ut]) && Oe === s().bundleProducts[0].id && I()({ variantId: Ue.id });
              })(e(kn).id, le) });
            }
          }, yn = (me) => {
            var tt = De(), pt = _e(tt), le = (Oe) => {
              f(Oe, Ov());
            };
            L(pt, (Oe) => {
              r().preview && Oe(le);
            }, !0), f(me, tt);
          };
          L(Jt, (me) => {
            e(kn).productGID ? me(on) : me(yn, !1);
          });
          var On = F(Jt, 2), $n = (me) => {
            var tt = Fv(), pt = F(w(tt), 2);
            id(w(pt)), x(pt), ta(2), x(tt), f(me, tt);
          };
          L(On, (me) => {
            e(Ct) < s().bundleProducts.length - 1 && me($n);
          }), f(mn, Wt);
        }), x(wt), pe((mn) => tn = At(wt, 1, "kaching-bundles__mix-and-match-products", null, tn, mn), [() => ({ "kaching-bundles__mix-and-match-products--hidden": e(M) })]), f(We, wt);
      };
      L(rt, (We) => {
        e(T) && We(ft);
      });
      var Tt = F(rt, 2), $t = (We) => {
        {
          let wt = d(() => e(ie) ? [e(ie)] : []);
          qa(We, { get product() {
            return g();
          }, get productPersonalisation() {
            return s().productPersonalisation;
          }, get selectedVariantIds() {
            return e(wt);
          }, quantity: 1, get addPersonalisationModal() {
            return i().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return Z();
          }, get initialValues() {
            return G();
          } });
        }
      };
      L(Tt, (We) => {
        m() && s().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && We($t);
      }), x(je);
      var Me = F(je, 2);
      {
        let We = d(() => s().upsells || []);
        oi(Me, { get dealBlock() {
          return i();
        }, get upsells() {
          return e(We);
        }, get otherProducts() {
          return h();
        }, get complementaryProducts() {
          return p();
        }, get dealBarSelected() {
          return m();
        }, get dealSellingPlan() {
          return C();
        }, sets: 1, onChange: (wt) => {
          re(ee, wt, !0);
        } });
      }
      var Ze = F(Me, 2);
      {
        let We = d(() => ({ ...s(), dealBarType: ht.Bundle, quantitySelector: !1, bundleProducts: s().bundleProducts.map((wt) => ({ ...wt, quantity: 1, variantGIDs: null, defaultVariantGID: null, mediaImageGID: null, discountType: "default", discountValue: 0 })) }));
        di(Ze, { get selectedDealBarIndex() {
          return y();
        }, get onChange() {
          return P();
        }, get dealBlock() {
          return i();
        }, get dealBar() {
          return e(We);
        }, get otherProducts() {
          return h();
        }, get selected() {
          return m();
        }, get progressiveGifts() {
          return i().progressiveGifts;
        } });
      }
      var bt = F(Ze, 2);
      {
        let We = d(() => s().freeGifts || []);
        si(bt, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(We);
        }, get freeGiftsSummary() {
          return s().freeGiftsSummary;
        }, get otherProducts() {
          return h();
        }, get dealBarSelected() {
          return m();
        }, get sellingPlan() {
          return C();
        }, sets: 1, onChange: (wt) => {
          re(Y, wt, !0);
        } });
      }
      var ct = F(bt, 2);
      {
        let We = d(() => s().multipleGiftsSelectors || []);
        ui(ct, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(We);
        }, get sellingPlan() {
          return C();
        }, get otherProducts() {
          return h();
        }, onChange: (wt) => {
          re(K, wt, !0);
        } });
      }
      x(Re);
      var vt = F(Re, 2), yt = (We) => {
        ci(We, { get showAsSoldOut() {
          return s().showAsSoldOut;
        }, get replaceLiquid() {
          return e(X);
        } });
      };
      L(vt, (We) => {
        s().showAsSoldOutEnabled && s().showAsSoldOut && We(yt);
      }), x(ue), pe((We, wt) => {
        var tn;
        $e = At(ue, 1, "kaching-bundles__bar", null, $e, We), Pe(ue, "data-deal-bar-id", s().id), Nt(ue, e(be)), Pe(ge, "name", `kaching-bundles-deal-${(tn = b()) != null ? tn : ""}`), Ia(ge, s().id), Pe(ge, "id", e(q)), qi(ge, m()), ge.disabled = s().showAsSoldOutEnabled, Pe(Re, "for", e(q)), nt = At(Re, 1, "kaching-bundles__bar-container", null, nt, wt);
      }, [() => ({ "kaching-bundles__bar--selected": m(), "kaching-bundles__bar--disabled": !e(R) && r().preview }), () => ({ "kaching-bundles__bar-container--sold-out": s().showAsSoldOutEnabled })]), f(xe, ue);
    };
    L(Ce, (xe) => {
      (e(R) || r().preview) && xe(Se);
    }), f(n, Le);
    var Qe = Ke(we);
    return c(), Qe;
  }
  Dn(["change"]), Ne(ld, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Rv = En('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function sd(n, t) {
    Ye(t, !0);
    let r = k(t, "class", 7);
    var a = { get class() {
      return r();
    }, set class(o) {
      r(o), _();
    } }, l = Rv();
    return pe(() => At(l, 0, Di(r()))), f(n, l), Ke(a);
  }
  Ne(sd, { class: {} }, [], [], !0);
  const eo = Ur({}), to = Ur(!1);
  function Ui(n) {
    to.set(n);
  }
  function Ll(n, t) {
    eo.update((r) => ({ ...r, [n]: t }));
  }
  const Qv = (n) => {
    const { collectionBreaks: t, colors: r, cornerRadius: a } = n;
    return t ? dn({ "kaching-collection-breaks-product-photo-size": t.productPhotoSize + "px", "kaching-collection-breaks-button-color": t.buttonColor && Ee(t.buttonColor), "kaching-collection-breaks-product-title-color": Ee(r.title), "kaching-collection-breaks-image-border-radius": (a || 0) / 2 + "px" }) : "";
  };
  function Nv(n, t) {
    n.target === n.currentTarget && re(t, !1);
  }
  var Wv = V('<img class="kaching-bundles__collection-product__image" alt=""/>'), Uv = V('<span class="kaching-bundles__collection-product__title"> </span>'), Hv = V("<!> <!>", 1), Zv = V('<img alt=""/>'), Jv = V('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!></div></div> <!></div>'), Yv = V('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), Kv = V('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), Xv = V('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function no(n, t) {
    Ye(t, !0);
    const r = () => Ie(b, "$config", a), [a, l] = kt(), o = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), c = k(t, "mainProduct", 7, null), i = k(t, "products", 7), s = k(t, "selectedProductVariant", 7, null), g = k(t, "onChange", 7), h = k(t, "onRemove", 7), p = Dt(), v = An(), b = fn();
    let y = Te(!1);
    const m = d(() => o().collectionBreaks), C = d(() => {
      var Y;
      return ((Y = s()) == null ? void 0 : Y.product) || c();
    }), P = d(() => {
      var Y, K;
      return ((Y = s()) == null ? void 0 : Y.variant) || ((K = e(C)) == null ? void 0 : K.variants[0]) || null;
    }), B = d(() => Ie(v, "$getMediaImageUrl", a)(e(m).mediaImageGID)), O = d(() => Ie(p, "$translate", a)(e(m).buttonText)), I = d(() => e(m).requireItemSelectionAlert), E = d(() => e(m).requireItemSelectionEnabled), Z = d(() => r().preview && r().previewAlerts || Ie(to, "$requireSelectionError", a)), G = d(() => {
      var Y, K;
      return (Y = e(C)) != null && Y.url ? `${e(C).url}?variant=${(K = e(P)) == null ? void 0 : K.id}` : void 0;
    });
    function ce(Y) {
      re(y, !1), g()(Y);
    }
    function H() {
      var Y;
      (Y = h()) == null || Y();
    }
    function W(Y) {
      const K = e(C).variants.find((ee) => ee.id === Y);
      K && g()({ product: e(C), variant: K });
    }
    var J = { get dealBlock() {
      return o();
    }, set dealBlock(Y) {
      o(Y), _();
    }, get dealBar() {
      return u();
    }, set dealBar(Y) {
      u(Y), _();
    }, get mainProduct() {
      return c();
    }, set mainProduct(Y = null) {
      c(Y), _();
    }, get products() {
      return i();
    }, set products(Y) {
      i(Y), _();
    }, get selectedProductVariant() {
      return s();
    }, set selectedProductVariant(Y = null) {
      s(Y), _();
    }, get onChange() {
      return g();
    }, set onChange(Y) {
      g(Y), _();
    }, get onRemove() {
      return h();
    }, set onRemove(Y) {
      h(Y), _();
    } }, Q = De(), U = _e(Q), z = (Y) => {
      var K = Jv(), ee = w(K), q = w(ee);
      {
        let $ = d(() => c() ? void 0 : e(G));
        Rn(q, { get url() {
          return e($);
        }, class: "kaching-bundles__collection-product__link", children: (ne, te) => {
          var ie = Wv();
          pe(() => Pe(ie, "src", e(P).image || e(C).image)), f(ne, ie);
        }, $$slots: { default: !0 } });
      }
      var S = F(q, 2), T = w(S), M = ($) => {
        {
          let ne = d(() => c() ? void 0 : e(G));
          Rn($, { get url() {
            return e(ne);
          }, class: "kaching-bundles__collection-product__link", children: (te, ie) => {
            var X = Uv(), ve = w(X, !0);
            x(X), pe(() => mt(ve, e(C).title)), f(te, X);
          }, $$slots: { default: !0 } });
        }
      };
      L(T, ($) => {
        e(m).showProductName && $(M);
      });
      var R = F(T, 2), ae = ($) => {
        var ne = Hv(), te = _e(ne);
        Hr(te, { get product() {
          return e(C);
        } });
        var ie = F(te, 2);
        {
          let X = d(() => {
            var ve;
            return (ve = e(P)) == null ? void 0 : ve.id;
          });
          Gn(ie, { get product() {
            return e(C);
          }, get selectedVariantId() {
            return e(X);
          }, onChange: W });
        }
        f($, ne);
      };
      L(R, ($) => {
        e(C).variants.length > 1 && $(ae);
      }), Jr(F(R, 2), { get dealBlock() {
        return o();
      }, get variant() {
        return e(P);
      } }), x(S), x(ee);
      var N = F(ee, 2), A = ($) => {
        Et($, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: H, children: (ne, te) => {
          var ie = Zv();
          pe(() => Pe(ie, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), f(ne, ie);
        }, $$slots: { default: !0 } });
      };
      L(N, ($) => {
        c() || $(A);
      }), x(K), f(Y, K);
    }, D = (Y) => {
      var K = Xv();
      let ee;
      var q = w(K), S = w(q);
      Et(S, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        re(y, !0);
      }, children: (N, A) => {
        var $ = De(), ne = _e($), te = (X) => {
          var ve = De(), Be = _e(ve), oe = (fe) => {
            var ke = Yv();
            pe(() => Pe(ke, "src", e(B))), f(fe, ke);
          };
          L(Be, (fe) => {
            e(B) && fe(oe);
          }), f(X, ve);
        }, ie = (X) => {
          sd(X, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        L(ne, (X) => {
          e(m).mediaImageGID ? X(te) : X(ie, !1);
        }), f(N, $);
      }, $$slots: { default: !0 } });
      var T = F(S, 2), M = (N) => {
        Et(N, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          re(y, !0);
        }, children: (A, $) => {
          ta();
          var ne = Tn();
          pe(() => mt(ne, e(O))), f(A, ne);
        }, $$slots: { default: !0 } });
      };
      L(T, (N) => {
        e(O) && N(M);
      }), x(q);
      var R = F(q, 2), ae = (N) => {
        Qi(N, { target: "body", children: (A, $) => {
          var ne = Kv(), te = w(ne);
          te.__click = [Nv, y];
          var ie = w(te);
          Es(w(ie), { get dealBlock() {
            return o();
          }, get dealBar() {
            return u();
          }, get products() {
            return i();
          }, onChoose: ce, onClose: () => {
            re(y, !1);
          } }), x(ie), x(te), x(ne), pe((X) => Nt(te, X), [() => (function(X) {
            return dn({ "kaching-choose-product-overlay-color": Ee(X.chooseProductModal.overlayColor) });
          })(o())]), f(A, ne);
        }, $$slots: { default: !0 } });
      };
      L(R, (N) => {
        e(y) && N(ae);
      }), x(K), pe((N) => ee = At(K, 1, "kaching-bundles__collection-product", null, ee, N), [() => ({ "kaching-bundles__collection-product--require-selection": e(Z) && e(E) && e(I) })]), f(Y, K);
    };
    L(U, (Y) => {
      e(C) && e(P) ? Y(z) : Y(D, !1);
    }), f(n, Q);
    var j = Ke(J);
    return l(), j;
  }
  function e_(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Dn(["click"]), Ne(no, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  var t_ = V('<img class="kaching-bundles__bar-image" alt=""/>'), n_ = V('<div class="kaching-bundles__bar-radio"></div>'), r_ = V('<span class="kaching-bundles__bar-title"><!></span>'), a_ = V('<span class="kaching-bundles__bar-label"><!></span>'), i_ = V('<div class="kaching-bundles__bar-subtitle"><!></div>'), l_ = V('<div class="kaching-bundles__bar-full-price"><!></div>'), s_ = V('<div class="kaching-bundles__bar-price"><!></div>'), o_ = V('<div class="kaching-bundles__bar-full-price"><!></div>'), c_ = V('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), u_ = V('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), d_ = V('<div class="kaching-bundles__bar-full-price"><!></div>'), g_ = V("<!> <!>", 1), h_ = V('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), p_ = V('<div class="kaching-bundles__bar-selling-plan"><!></div>'), f_ = V('<div class="kaching-bundles__bar-collection-products"></div>'), b_ = V('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function od(n, t) {
    Ye(t, !0);
    const r = () => Ie(z, "$config", c), a = () => Ie(eo, "$chosenCollectionBreaksProducts", c), l = () => Ie(Q, "$formatPrice", c), o = () => Ie(J, "$translate", c), u = () => Ie(U, "$getMediaImageUrl", c), [c, i] = kt();
    let s = k(t, "dealBlock", 7), g = k(t, "dealBar", 7), h = k(t, "product", 7), p = k(t, "collectionBreaksProducts", 23, () => []), v = k(t, "otherProducts", 23, () => []), b = k(t, "selectedDealBarIndex", 7, null), y = k(t, "complementaryProducts", 23, () => []), m = k(t, "customQuantity", 7, void 0), C = k(t, "currentVariantId", 7, void 0), P = k(t, "componentId", 7), B = k(t, "selected", 7, !1), O = k(t, "globalSellingPlan", 7, void 0), I = k(t, "onDealBarSelect", 7), E = k(t, "onDealBarDeselect", 7), Z = k(t, "onVariantSelect", 7), G = k(t, "onVariantsChange", 7), ce = k(t, "onPersonalisationsChange", 7), H = k(t, "personalisationInitialValues", 23, () => []), W = k(t, "onProgressiveGiftsChange", 7);
    const J = Dt(), Q = sn(), U = An(), z = fn();
    let D = Te(lt([])), j = Te(lt([])), Y = Te(lt([]));
    const K = new Pb(), ee = d(() => {
      var le, Oe;
      return (Oe = (le = s().collectionBreaks) == null ? void 0 : le.autoFillNotChosenItems) != null && Oe;
    }), q = d(() => s().priceRounding ? { perItem: s().showPricesPerItem, precision: s().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), S = d(() => {
      var le, Oe;
      return s() && ((Oe = (le = s().defaultVariantsV2) == null ? void 0 : le.find((Ve) => Rt(Ve.productGID) === h().id && Ve.dealBarId === g().id)) == null ? void 0 : Oe.variantGIDs) || [];
    });
    let T = d(() => ae(g())), M = Te(lt(ae(g())));
    ar(() => {
      re(M, e(T), !0);
    });
    const R = d(() => m() || e(M));
    function ae(le) {
      return le.dealBarType === ht.Bxgy ? le.buyQuantity + le.getQuantity : Number(le.quantity);
    }
    Je(() => {
      C() && en(() => {
        (function(le, Oe) {
          if (Object.keys(a()).length === 0 && le[0]) {
            const Ue = Rt(le[0]), He = h().variants.find((ut) => ut.id == Ue);
            if (He) return void Ll(0, { product: h(), variant: He });
          }
          const Ve = h().variants.find((Ue) => Ue.id == Oe);
          if (Ve) return void Ll(0, { product: h(), variant: Ve });
          Object.keys(a()).length === 0 && h().variants[0] && Ll(0, { product: h(), variant: h().variants[0] });
        })(e(S), C());
      });
    }), Je(() => {
      B() || K.clear();
    });
    const N = d(() => p().length === 0 || p().some((le) => le.id === h().id)), A = d(() => {
      const le = Object.fromEntries(Object.entries(a()).filter(([Ve]) => Number(Ve) < e(R)));
      if (!B() || !e(ee)) return le;
      const Oe = { ...le };
      for (let Ve = 1; Ve < e(R); Ve++) Oe[Ve] || K.has(Ve) || (e(N) && le[0] ? Oe[Ve] = { product: h(), variant: le[0].variant } : le[1] && (Oe[Ve] = { product: le[1].product, variant: le[1].variant }));
      return Oe;
    }), $ = d(() => B() ? Object.values(e(A)).map((le) => ({ variant: le.variant, quantity: 1 })) : []), ne = d(() => (function({ selectedProductVariants: le, mainProductIsInCollection: Oe, collectionBreaksProducts: Ve, dealBlock: Ue, quantity: He }) {
      var ut;
      const xt = le.map((Ht) => ({ quantity: 1, variant: Ht.variant }));
      if (xt.length === 0 || xt.length >= He || (ut = Ue.collectionBreaks) != null && ut.showChosenProductsPriceOnly) return xt;
      const _t = He - xt.length;
      if (Oe) {
        const Ht = Array.from({ length: _t }, () => xt[0]);
        return [...xt, ...Ht];
      }
      const Mt = Ve.flatMap((Ht) => Ht.variants).filter((Ht) => Ht.availableForSale);
      if (Mt.length === 0) return xt;
      const Gt = Mt.reduce((Ht, bn) => bn.price < Ht.price ? bn : Ht, Mt[0]), Ot = Array.from({ length: _t }, () => ({ quantity: 1, variant: Gt }));
      return [...xt, ...Ot];
    })({ selectedProductVariants: Object.values(e(A)), mainProductIsInCollection: e(N), collectionBreaksProducts: p(), dealBlock: s(), quantity: e(R) }));
    let te = Te(void 0);
    const ie = d(() => ji(h(), e(ne).map((le) => le.variant))), X = d(() => {
      var le, Oe;
      return (g().sellingPlanEnabled || s().subscriptionsEnabled && ((le = s().subscriptions) == null ? void 0 : le.layout) === "link" && ((Oe = s().subscriptions) == null ? void 0 : Oe.subscribeByDefault)) && (!s().subscriptionsEnabled || !!O());
    }), ve = d(() => e(X) ? Os(g(), e(ie), e(te)) : void 0), Be = d(() => Fs(e(ve), O(), e(ie), h().requiresSellingPlan)), oe = d(() => new Set(h().variants.map((le) => le.id))), fe = d(() => Object.values(e(A)).filter((le) => e(oe).has(le.variant.id))), ke = d(() => (function(le, Oe, Ve) {
      return Ve.map(({ variant: He, quantity: ut }) => {
        let xt = He.price;
        const _t = le.useProductCompareAtPrice || (Oe.dealBarType === void 0 || Oe.dealBarType === ht.QuantityBreak) && Oe.discountType === "default";
        return He.compareAtPrice && _t && (xt = Math.max(xt, He.compareAtPrice)), xt * ut;
      }).reduce((He, ut) => He + ut, 0);
    })(s(), g(), e(ne))), ze = d(() => Ei(e(ke), e(D), e(j))), he = d(() => Math.ceil(e(ke) / e(ne).length)), de = d(() => Rs(e(R) === 1, e(ze), e(he))), be = d(() => s() && ue(e(ne), e(Be))), we = d(() => gn({ priceFormatter: l(), product: h(), selectedVariants: e($), dealBar: g(), totalFullPrice: e(ke), totalCompareAtPrice: e(ze), totalDiscountedPrice: e(be), quantity: e(R), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: cr(e(ne)), sellingPlan: e(Be) })), Le = d(() => e(we)(o()(g().title))), Ce = d(() => e(we)(o()(g().subtitle))), Se = d(() => e(we)(o()(g().label))), Qe = d(() => e(we)(o()(g().badgeText))), xe = d(() => u()(g().badgeImageGID));
    function ue(le, Oe) {
      switch (g().dealBarType) {
        case void 0:
        case ht.QuantityBreak:
          return ku(g(), le, r().currencyRate, e(q), Oe, r().featureFlags.percentage_cents_rounding_workaround);
        case ht.Bxgy:
          return yu(g(), le, r().currencyRate, e(q), Oe);
      }
    }
    const $e = d(() => Math.ceil(e(be) / e(ne).length)), ge = d(() => e(ze) > e(be)), Re = d(() => `${g().id}_${P()}`);
    Ca(() => {
      B() && I()({ dealBarId: g().id, dealBarQuantity: ae(g()), preselected: !0 });
    });
    const nt = d(() => u()(g().mediaImageGID) || Ri);
    Je(() => {
      var le;
      B() && Object.keys(e(A)).length > 0 && (e(Y), e(D), e(j), e(Be), (le = s().collectionBreaks) == null || le.requireItemSelectionEnabled, en(() => {
        (function() {
          var Oe, Ve;
          const Ue = Object.values(e(A)).map((Yt) => ({ variant: Yt.variant, product: Yt.product, quantity: 1 })), He = e(be) + e(Y).reduce((Yt, nn) => Yt + nn.discountedPrice, 0), ut = e(D).reduce((Yt, nn) => nn.showPrice ? Yt + nn.fullPrice : Yt, 0) + e(j).reduce((Yt, nn) => Yt + nn.fullPrice * nn.quantity, 0), xt = e(ke) + e(Y).reduce((Yt, nn) => Yt + nn.fullPrice, 0) + ut, _t = ue(e(ne), void 0), Mt = h().sellingPlans.map((Yt) => ({ sellingPlanId: Yt.id, discountedPrice: ue(e(ne), Yt) })), Gt = (Ve = (Oe = s().collectionBreaks) == null ? void 0 : Oe.requireItemSelectionEnabled) != null && Ve, Ot = Ue.length, Ht = !Gt || Ot >= e(R), bn = Gt ? Math.max(0, e(R) - Ot) : 0;
          G()({ variants: Ue, freeGifts: [...e(D), ...e(j)], upsells: e(Y), dealBarSellingPlan: e(ve), pricing: { discountedPrice: He, fullPrice: xt, giftValue: ut, discountedPricePerItem: e($e), fullPricePerItem: e(he), discountedPriceWithoutSellingPlan: _t, discountedPricesForSellingPlans: Mt }, validation: { requiresItemSelection: Gt, allItemsSelected: Ht, missingItemsCount: bn } });
        })();
      }));
    });
    const et = d(() => g().showAsSoldOutEnabled && g().showAsSoldOut ? Ni(g().showAsSoldOut) : ""), je = d(() => [Qv(s()), e(et)].filter(Boolean).join(";"));
    function dt(le, Oe) {
      le === 0 && Z()({ variantId: Oe.variant.id }), Ll(le, Oe), Ui(!1), e(ee) && K.delete(le);
    }
    function at(le) {
      (function(Oe) {
        eo.update((Ve) => {
          const { [Oe]: Ue, ...He } = Ve;
          return He;
        });
      })(le), e(ee) && K.add(le);
    }
    var ot = { get dealBlock() {
      return s();
    }, set dealBlock(le) {
      s(le), _();
    }, get dealBar() {
      return g();
    }, set dealBar(le) {
      g(le), _();
    }, get product() {
      return h();
    }, set product(le) {
      h(le), _();
    }, get collectionBreaksProducts() {
      return p();
    }, set collectionBreaksProducts(le = []) {
      p(le), _();
    }, get otherProducts() {
      return v();
    }, set otherProducts(le = []) {
      v(le), _();
    }, get selectedDealBarIndex() {
      return b();
    }, set selectedDealBarIndex(le = null) {
      b(le), _();
    }, get complementaryProducts() {
      return y();
    }, set complementaryProducts(le = []) {
      y(le), _();
    }, get customQuantity() {
      return m();
    }, set customQuantity(le = void 0) {
      m(le), _();
    }, get currentVariantId() {
      return C();
    }, set currentVariantId(le = void 0) {
      C(le), _();
    }, get componentId() {
      return P();
    }, set componentId(le) {
      P(le), _();
    }, get selected() {
      return B();
    }, set selected(le = !1) {
      B(le), _();
    }, get globalSellingPlan() {
      return O();
    }, set globalSellingPlan(le = void 0) {
      O(le), _();
    }, get onDealBarSelect() {
      return I();
    }, set onDealBarSelect(le) {
      I(le), _();
    }, get onDealBarDeselect() {
      return E();
    }, set onDealBarDeselect(le) {
      E(le), _();
    }, get onVariantSelect() {
      return Z();
    }, set onVariantSelect(le) {
      Z(le), _();
    }, get onVariantsChange() {
      return G();
    }, set onVariantsChange(le) {
      G(le), _();
    }, get onPersonalisationsChange() {
      return ce();
    }, set onPersonalisationsChange(le) {
      ce(le), _();
    }, get personalisationInitialValues() {
      return H();
    }, set personalisationInitialValues(le = []) {
      H(le), _();
    }, get onProgressiveGiftsChange() {
      return W();
    }, set onProgressiveGiftsChange(le) {
      W(le), _();
    } }, rt = b_();
    let ft;
    var Tt = w(rt);
    Wr(Tt), Tt.__change = [e_, I, g, ae];
    var $t = F(Tt, 2);
    let Me;
    var Ze = w($t);
    {
      let le = d(() => e(Qe) || void 0);
      Va(Ze, { get style() {
        return g().badgeStyle;
      }, get text() {
        return e(le);
      }, get imageUrl() {
        return e(xe);
      }, get blockLayout() {
        return s().blockLayout;
      } });
    }
    var bt = F(Ze, 2), ct = w(bt);
    Et(ct, { element: "div", class: "kaching-bundles__bar-main", onclick: function(le) {
      B() && (le.preventDefault(), le.stopPropagation(), E()());
    }, children: (le, Oe) => {
      var Ve = h_(), Ue = _e(Ve), He = (st) => {
        var St = t_();
        pe(() => Pe(St, "src", e(nt))), f(st, St);
      }, ut = (st) => {
        f(st, n_());
      };
      L(Ue, (st) => {
        g().mediaImageGID ? st(He) : st(ut, !1);
      });
      var xt = F(Ue, 2), _t = w(xt), Mt = w(_t), Gt = w(Mt);
      Xe(Gt, () => e(Le), (st) => {
        var St = r_();
        Ge(w(St), () => e(Le)), x(St), f(st, St);
      });
      var Ot = F(Gt, 2), Ht = (st) => {
        var St = De();
        Xe(_e(St), () => e(Se), (zt) => {
          var Vt = a_();
          Ge(w(Vt), () => e(Se)), x(Vt), f(zt, Vt);
        }), f(st, St);
      };
      L(Ot, (st) => {
        e(Se) && st(Ht);
      }), x(Mt);
      var bn = F(Mt, 2), Yt = (st) => {
        var St = De();
        Xe(_e(St), () => e(Ce), (zt) => {
          var Vt = i_();
          Ge(w(Vt), () => e(Ce)), x(Vt), f(zt, Vt);
        }), f(st, St);
      };
      L(bn, (st) => {
        e(Ce) && st(Yt);
      }), x(_t);
      var nn = F(_t, 2), Hn = w(nn), xn = (st) => {
        var St = u_(), zt = _e(St), Vt = w(zt);
        Xe(Vt, () => e($e), (Lt) => {
          Dr(Lt, { get amount() {
            return e($e);
          }, get showPricesPerItem() {
            return s().showPricesPerItem;
          }, get unitLabel() {
            return s().unitLabel;
          } });
        });
        var Fn = F(Vt, 2), rn = (Lt) => {
          var cn = De();
          Xe(_e(cn), () => e(de), (hn) => {
            var un = l_();
            Ge(w(un), () => l()(e(de))), x(un), pe((se) => Pe(un, "data-a11y-label", se), [() => o()("system.original_price")]), f(hn, un);
          }), f(Lt, cn);
        };
        L(Fn, (Lt) => {
          e(ge) && Lt(rn);
        }), x(zt);
        var Pn = F(zt, 2), Sn = (Lt) => {
          var cn = c_(), hn = w(cn);
          Xe(hn, () => e(be), (Ae) => {
            var qe = s_();
            Ge(w(qe), () => l()(e(be))), x(qe), pe((Fe) => Pe(qe, "data-a11y-label", Fe), [() => o()("system.price")]), f(Ae, qe);
          });
          var un = F(hn, 2), se = (Ae) => {
            var qe = De();
            Xe(_e(qe), () => e(ze), (Fe) => {
              var it = o_();
              Ge(w(it), () => l()(e(ze))), x(it), pe((Ut) => Pe(it, "data-a11y-label", Ut), [() => o()("system.original_price")]), f(Fe, it);
            }), f(Ae, qe);
          };
          L(un, (Ae) => {
            e(ge) && Ae(se);
          }), x(cn), f(Lt, cn);
        };
        L(Pn, (Lt) => {
          e(R) > 1 && Lt(Sn);
        }), f(st, St);
      }, wn = (st) => {
        var St = g_(), zt = _e(St);
        Xe(zt, () => e(be), (rn) => {
          {
            let Pn = d(() => s().showPricesPerItem ? e($e) : e(be));
            Dr(rn, { get amount() {
              return e(Pn);
            }, get showPricesPerItem() {
              return s().showPricesPerItem;
            }, get unitLabel() {
              return s().unitLabel;
            } });
          }
        });
        var Vt = F(zt, 2), Fn = (rn) => {
          var Pn = De();
          Xe(_e(Pn), () => s().showPricesPerItem ? e(de) : e(ze), (Sn) => {
            var Lt = d_();
            Ge(w(Lt), () => l()(s().showPricesPerItem ? e(de) : e(ze))), x(Lt), pe((cn) => Pe(Lt, "data-a11y-label", cn), [() => o()("system.original_price")]), f(Sn, Lt);
          }), f(rn, Pn);
        };
        L(Vt, (rn) => {
          e(ge) && rn(Fn);
        }), f(st, St);
      };
      L(Hn, (st) => {
        s().showBothPrices ? st(xn) : st(wn, !1);
      }), x(nn), x(xt), f(le, Ve);
    }, $$slots: { default: !0 } });
    var vt = F(ct, 2), yt = (le) => {
      ua(le, { get highlights() {
        return g().highlights;
      }, get isSelected() {
        return B();
      }, get replaceLiquid() {
        return e(we);
      } });
    };
    L(vt, (le) => {
      g().highlights && le(yt);
    });
    var We = F(vt, 2), wt = (le) => {
      var Oe = p_(), Ve = w(Oe);
      {
        let Ue = d(() => e(ve) || e(ie)[0]);
        ca(Ve, { get sellingPlans() {
          return e(ie);
        }, get selectedSellingPlan() {
          return e(Ue);
        }, onChange: (He) => {
          re(te, He, !0);
        } });
      }
      x(Oe), f(le, Oe);
    };
    L(We, (le) => {
      B() && e(X) && !g().sellingPlanGid && e(ie).length > 1 && le(wt);
    });
    var tn = F(We, 2), mn = (le) => {
      var Oe = f_();
      Zt(Oe, 21, () => ({ length: e(R) }), Nr, (Ve, Ue, He) => {
        var ut = De(), xt = _e(ut), _t = (Gt) => {
          {
            let Ot = d(() => e(A)[He] || null);
            no(Gt, { get dealBlock() {
              return s();
            }, get dealBar() {
              return g();
            }, get mainProduct() {
              return h();
            }, products: [], get selectedProductVariant() {
              return e(Ot);
            }, onChange: (Ht) => dt(He, Ht) });
          }
        }, Mt = (Gt) => {
          {
            let Ot = d(() => e(A)[He] || null);
            no(Gt, { get dealBlock() {
              return s();
            }, get dealBar() {
              return g();
            }, get products() {
              return p();
            }, get selectedProductVariant() {
              return e(Ot);
            }, onChange: (Ht) => dt(He, Ht), onRemove: () => at(He) });
          }
        };
        L(xt, (Gt) => {
          He === 0 ? Gt(_t) : Gt(Mt, !1);
        }), f(Ve, ut);
      }), x(Oe), f(le, Oe);
    };
    L(tn, (le) => {
      B() && le(mn);
    });
    var kn = F(tn, 2), Ct = (le) => {
      {
        let Oe = d(() => ae(g()));
        Wi(le, { get value() {
          return e(M);
        }, get min() {
          return e(Oe);
        }, onChange: (Ve) => re(M, Ve, !0) });
      }
    };
    L(kn, (le) => {
      B() && g().dealBarType === ht.QuantityBreak && g().quantitySelector && le(Ct);
    });
    var Wt = F(kn, 2), Jt = (le) => {
      {
        let Oe = d(() => e(fe).map((Ve) => Ve.variant.id));
        qa(le, { get product() {
          return h();
        }, get productPersonalisation() {
          return g().productPersonalisation;
        }, get selectedVariantIds() {
          return e(Oe);
        }, get quantity() {
          return e(fe).length;
        }, get addPersonalisationModal() {
          return s().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return ce();
        }, get initialValues() {
          return H();
        } });
      }
    };
    L(Wt, (le) => {
      B() && g().productPersonalisation && (s().blockLayout === "vertical" || s().blockLayout === "plain") && le(Jt);
    }), x(bt);
    var on = F(bt, 2);
    {
      let le = d(() => g().upsells || []);
      oi(on, { get dealBlock() {
        return s();
      }, get upsells() {
        return e(le);
      }, get otherProducts() {
        return v();
      }, get complementaryProducts() {
        return y();
      }, get dealBarSelected() {
        return B();
      }, get dealSellingPlan() {
        return e(Be);
      }, onChange: (Oe) => {
        re(Y, Oe, !0);
      } });
    }
    var yn = F(on, 2);
    di(yn, { get selectedDealBarIndex() {
      return b();
    }, get onChange() {
      return W();
    }, get dealBlock() {
      return s();
    }, get dealBar() {
      return g();
    }, get otherProducts() {
      return v();
    }, get selected() {
      return B();
    }, get progressiveGifts() {
      return s().progressiveGifts;
    } });
    var On = F(yn, 2);
    {
      let le = d(() => g().freeGifts || []);
      si(On, { get dealBlock() {
        return s();
      }, get freeGifts() {
        return e(le);
      }, get freeGiftsSummary() {
        return g().freeGiftsSummary;
      }, get otherProducts() {
        return v();
      }, get dealBarSelected() {
        return B();
      }, get sellingPlan() {
        return e(Be);
      }, onChange: (Oe) => {
        re(D, Oe, !0);
      } });
    }
    var $n = F(On, 2);
    {
      let le = d(() => g().multipleGiftsSelectors || []);
      ui($n, { get dealBlock() {
        return s();
      }, get multipleGiftsSelectors() {
        return e(le);
      }, get sellingPlan() {
        return e(Be);
      }, get otherProducts() {
        return v();
      }, onChange: (Oe) => {
        re(j, Oe, !0);
      } });
    }
    x($t);
    var me = F($t, 2), tt = (le) => {
      ci(le, { get showAsSoldOut() {
        return g().showAsSoldOut;
      }, get replaceLiquid() {
        return e(we);
      } });
    };
    L(me, (le) => {
      g().showAsSoldOutEnabled && g().showAsSoldOut && le(tt);
    }), x(rt), pe((le, Oe) => {
      var Ve;
      ft = At(rt, 1, "kaching-bundles__bar", null, ft, le), Pe(rt, "data-deal-bar-id", g().id), Nt(rt, e(je)), Pe(Tt, "name", `kaching-bundles-deal-${(Ve = P()) != null ? Ve : ""}`), Ia(Tt, g().id), Pe(Tt, "id", e(Re)), qi(Tt, B()), Tt.disabled = g().showAsSoldOutEnabled, Pe($t, "for", e(Re)), Me = At($t, 1, "kaching-bundles__bar-container", null, Me, Oe);
    }, [() => ({ "kaching-bundles__bar--selected": B() }), () => ({ "kaching-bundles__bar-container--sold-out": g().showAsSoldOutEnabled })]), f(n, rt);
    var pt = Ke(ot);
    return i(), pt;
  }
  Dn(["change"]), Ne(od, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  var ro = {};
  (function n(t, r, a, l) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), u = typeof Path2D == "function" && typeof DOMMatrix == "function";
    function c() {
    }
    function i(z) {
      var D = r.exports.Promise, j = D !== void 0 ? D : t.Promise;
      return typeof j == "function" ? new j(z) : (z(c, c), null);
    }
    var s, g, h, p, v, b, y = /* @__PURE__ */ (function(z, D) {
      return { transform: function(j) {
        if (z) return j;
        if (D.has(j)) return D.get(j);
        var Y = new OffscreenCanvas(j.width, j.height);
        return Y.getContext("2d").drawImage(j, 0, 0), D.set(j, Y), Y;
      }, clear: function() {
        D.clear();
      } };
    })((function() {
      if (!t.OffscreenCanvas) return !1;
      try {
        var z = new OffscreenCanvas(1, 1), D = z.getContext("2d");
        D.fillRect(0, 0, 1, 1);
        var j = z.transferToImageBitmap();
        D.createPattern(j, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })(), /* @__PURE__ */ new Map()), m = (h = Math.floor(1e3 / 60), p = {}, v = 0, typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (s = function(z) {
      var D = Math.random();
      return p[D] = requestAnimationFrame(function j(Y) {
        v === Y || v + h - 1 < Y ? (v = Y, delete p[D], z()) : p[D] = requestAnimationFrame(j);
      }), D;
    }, g = function(z) {
      p[z] && cancelAnimationFrame(p[z]);
    }) : (s = function(z) {
      return setTimeout(z, h);
    }, g = function(z) {
      return clearTimeout(z);
    }), { frame: s, cancel: g }), C = /* @__PURE__ */ (function() {
      var z, D, j = {};
      return function() {
        if (z) return z;
        if (!a && o) {
          var Y = ["var CONFETTI, SIZE = {}, module = {};", "(" + n.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            z = new Worker(URL.createObjectURL(new Blob([Y])));
          } catch (K) {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", K), null;
          }
          (function(K) {
            function ee(q, S) {
              K.postMessage({ options: q || {}, callback: S });
            }
            K.init = function(q) {
              var S = q.transferControlToOffscreen();
              K.postMessage({ canvas: S }, [S]);
            }, K.fire = function(q, S, T) {
              if (D) return ee(q, null), D;
              var M = Math.random().toString(36).slice(2);
              return D = i(function(R) {
                function ae(N) {
                  N.data.callback === M && (delete j[M], K.removeEventListener("message", ae), D = null, y.clear(), T(), R());
                }
                K.addEventListener("message", ae), ee(q, M), j[M] = ae.bind(null, { data: { callback: M } });
              });
            }, K.reset = function() {
              for (var q in K.postMessage({ reset: !0 }), j) j[q](), delete j[q];
            };
          })(z);
        }
        return z;
      };
    })(), P = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
    function B(z, D, j) {
      return (function(Y, K) {
        return K ? K(Y) : Y;
      })(z && z[D] != null ? z[D] : P[D], j);
    }
    function O(z) {
      return z < 0 ? 0 : Math.floor(z);
    }
    function I(z, D) {
      return Math.floor(Math.random() * (D - z)) + z;
    }
    function E(z) {
      return parseInt(z, 16);
    }
    function Z(z) {
      return z.map(G);
    }
    function G(z) {
      var D = String(z).replace(/[^0-9a-f]/gi, "");
      return D.length < 6 && (D = D[0] + D[0] + D[1] + D[1] + D[2] + D[2]), { r: E(D.substring(0, 2)), g: E(D.substring(2, 4)), b: E(D.substring(4, 6)) };
    }
    function ce(z) {
      z.width = document.documentElement.clientWidth, z.height = document.documentElement.clientHeight;
    }
    function H(z) {
      var D = z.getBoundingClientRect();
      z.width = D.width, z.height = D.height;
    }
    function W(z) {
      var D = z.angle * (Math.PI / 180), j = z.spread * (Math.PI / 180);
      return { x: z.x, y: z.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05), velocity: 0.5 * z.startVelocity + Math.random() * z.startVelocity, angle2D: -D + (0.5 * j - Math.random() * j), tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI, color: z.color, shape: z.shape, tick: 0, totalTicks: z.ticks, decay: z.decay, drift: z.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * z.gravity, ovalScalar: 0.6, scalar: z.scalar, flat: z.flat };
    }
    function J(z, D) {
      D.x += Math.cos(D.angle2D) * D.velocity + D.drift, D.y += Math.sin(D.angle2D) * D.velocity + D.gravity, D.velocity *= D.decay, D.flat ? (D.wobble = 0, D.wobbleX = D.x + 10 * D.scalar, D.wobbleY = D.y + 10 * D.scalar, D.tiltSin = 0, D.tiltCos = 0, D.random = 1) : (D.wobble += D.wobbleSpeed, D.wobbleX = D.x + 10 * D.scalar * Math.cos(D.wobble), D.wobbleY = D.y + 10 * D.scalar * Math.sin(D.wobble), D.tiltAngle += 0.1, D.tiltSin = Math.sin(D.tiltAngle), D.tiltCos = Math.cos(D.tiltAngle), D.random = Math.random() + 2);
      var j = D.tick++ / D.totalTicks, Y = D.x + D.random * D.tiltCos, K = D.y + D.random * D.tiltSin, ee = D.wobbleX + D.random * D.tiltCos, q = D.wobbleY + D.random * D.tiltSin;
      if (z.fillStyle = "rgba(" + D.color.r + ", " + D.color.g + ", " + D.color.b + ", " + (1 - j) + ")", z.beginPath(), u && D.shape.type === "path" && typeof D.shape.path == "string" && Array.isArray(D.shape.matrix)) z.fill((function(oe, fe, ke, ze, he, de, be) {
        var we = new Path2D(oe), Le = new Path2D();
        Le.addPath(we, new DOMMatrix(fe));
        var Ce = new Path2D();
        return Ce.addPath(Le, new DOMMatrix([Math.cos(be) * he, Math.sin(be) * he, -Math.sin(be) * de, Math.cos(be) * de, ke, ze])), Ce;
      })(D.shape.path, D.shape.matrix, D.x, D.y, 0.1 * Math.abs(ee - Y), 0.1 * Math.abs(q - K), Math.PI / 10 * D.wobble));
      else if (D.shape.type === "bitmap") {
        var S = Math.PI / 10 * D.wobble, T = 0.1 * Math.abs(ee - Y), M = 0.1 * Math.abs(q - K), R = D.shape.bitmap.width * D.scalar, ae = D.shape.bitmap.height * D.scalar, N = new DOMMatrix([Math.cos(S) * T, Math.sin(S) * T, -Math.sin(S) * M, Math.cos(S) * M, D.x, D.y]);
        N.multiplySelf(new DOMMatrix(D.shape.matrix));
        var A = z.createPattern(y.transform(D.shape.bitmap), "no-repeat");
        A.setTransform(N), z.globalAlpha = 1 - j, z.fillStyle = A, z.fillRect(D.x - R / 2, D.y - ae / 2, R, ae), z.globalAlpha = 1;
      } else if (D.shape === "circle") z.ellipse ? z.ellipse(D.x, D.y, Math.abs(ee - Y) * D.ovalScalar, Math.abs(q - K) * D.ovalScalar, Math.PI / 10 * D.wobble, 0, 2 * Math.PI) : (function(oe, fe, ke, ze, he, de, be, we, Le) {
        oe.save(), oe.translate(fe, ke), oe.rotate(de), oe.scale(ze, he), oe.arc(0, 0, 1, be, we, Le), oe.restore();
      })(z, D.x, D.y, Math.abs(ee - Y) * D.ovalScalar, Math.abs(q - K) * D.ovalScalar, Math.PI / 10 * D.wobble, 0, 2 * Math.PI);
      else if (D.shape === "star") for (var $ = Math.PI / 2 * 3, ne = 4 * D.scalar, te = 8 * D.scalar, ie = D.x, X = D.y, ve = 5, Be = Math.PI / ve; ve--; ) ie = D.x + Math.cos($) * te, X = D.y + Math.sin($) * te, z.lineTo(ie, X), $ += Be, ie = D.x + Math.cos($) * ne, X = D.y + Math.sin($) * ne, z.lineTo(ie, X), $ += Be;
      else z.moveTo(Math.floor(D.x), Math.floor(D.y)), z.lineTo(Math.floor(D.wobbleX), Math.floor(K)), z.lineTo(Math.floor(ee), Math.floor(q)), z.lineTo(Math.floor(Y), Math.floor(D.wobbleY));
      return z.closePath(), z.fill(), D.tick < D.totalTicks;
    }
    function Q(z, D) {
      var j, Y = !z, K = !!B(D || {}, "resize"), ee = !1, q = B(D, "disableForReducedMotion", Boolean), S = o && B(D || {}, "useWorker") ? C() : null, T = Y ? ce : H, M = !(!z || !S) && !!z.__confetti_initialized, R = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches;
      function ae(A, $, ne) {
        for (var te = B(A, "particleCount", O), ie = B(A, "angle", Number), X = B(A, "spread", Number), ve = B(A, "startVelocity", Number), Be = B(A, "decay", Number), oe = B(A, "gravity", Number), fe = B(A, "drift", Number), ke = B(A, "colors", Z), ze = B(A, "ticks", Number), he = B(A, "shapes"), de = B(A, "scalar"), be = !!B(A, "flat"), we = (function(xe) {
          var ue = B(xe, "origin", Object);
          return ue.x = B(ue, "x", Number), ue.y = B(ue, "y", Number), ue;
        })(A), Le = te, Ce = [], Se = z.width * we.x, Qe = z.height * we.y; Le--; ) Ce.push(W({ x: Se, y: Qe, angle: ie, spread: X, startVelocity: ve, color: ke[Le % ke.length], shape: he[I(0, he.length)], ticks: ze, decay: Be, gravity: oe, drift: fe, scalar: de, flat: be }));
        return j ? j.addFettis(Ce) : (j = (function(xe, ue, $e, ge, Re) {
          var nt, et, je = ue.slice(), dt = xe.getContext("2d"), at = i(function(ot) {
            function rt() {
              nt = et = null, dt.clearRect(0, 0, ge.width, ge.height), y.clear(), Re(), ot();
            }
            nt = m.frame(function ft() {
              !a || ge.width === l.width && ge.height === l.height || (ge.width = xe.width = l.width, ge.height = xe.height = l.height), ge.width || ge.height || ($e(xe), ge.width = xe.width, ge.height = xe.height), dt.clearRect(0, 0, ge.width, ge.height), (je = je.filter(function(Tt) {
                return J(dt, Tt);
              })).length ? nt = m.frame(ft) : rt();
            }), et = rt;
          });
          return { addFettis: function(ot) {
            return je = je.concat(ot), at;
          }, canvas: xe, promise: at, reset: function() {
            nt && m.cancel(nt), et && et();
          } };
        })(z, Ce, T, $, ne), j.promise);
      }
      function N(A) {
        var $ = q || B(A, "disableForReducedMotion", Boolean), ne = B(A, "zIndex", Number);
        if ($ && R) return i(function(ve) {
          ve();
        });
        Y && j ? z = j.canvas : Y && !z && (z = (function(ve) {
          var Be = document.createElement("canvas");
          return Be.style.position = "fixed", Be.style.top = "0px", Be.style.left = "0px", Be.style.pointerEvents = "none", Be.style.zIndex = ve, Be;
        })(ne), document.body.appendChild(z)), K && !M && T(z);
        var te = { width: z.width, height: z.height };
        function ie() {
          if (S) {
            var ve = { getBoundingClientRect: function() {
              if (!Y) return z.getBoundingClientRect();
            } };
            return T(ve), void S.postMessage({ resize: { width: ve.width, height: ve.height } });
          }
          te.width = te.height = null;
        }
        function X() {
          j = null, K && (ee = !1, t.removeEventListener("resize", ie)), Y && z && (document.body.contains(z) && document.body.removeChild(z), z = null, M = !1);
        }
        return S && !M && S.init(z), M = !0, S && (z.__confetti_initialized = !0), K && !ee && (ee = !0, t.addEventListener("resize", ie, !1)), S ? S.fire(A, te, X) : ae(A, te, X);
      }
      return N.reset = function() {
        S && S.reset(), j && j.reset();
      }, N;
    }
    function U() {
      return b || (b = Q(null, { useWorker: !0, resize: !0 })), b;
    }
    r.exports = function() {
      return U().apply(this, arguments);
    }, r.exports.reset = function() {
      U().reset();
    }, r.exports.create = Q, r.exports.shapeFromPath = function(z) {
      if (!u) throw new Error("path confetti are not supported in this browser");
      var D, j;
      typeof z == "string" ? D = z : (D = z.path, j = z.matrix);
      var Y = new Path2D(D), K = document.createElement("canvas").getContext("2d");
      if (!j) {
        for (var ee, q, S = 1e3, T = S, M = S, R = 0, ae = 0, N = 0; N < S; N += 2) for (var A = 0; A < S; A += 2) K.isPointInPath(Y, N, A, "nonzero") && (T = Math.min(T, N), M = Math.min(M, A), R = Math.max(R, N), ae = Math.max(ae, A));
        ee = R - T, q = ae - M;
        var $ = Math.min(10 / ee, 10 / q);
        j = [$, 0, 0, $, -Math.round(ee / 2 + T) * $, -Math.round(q / 2 + M) * $];
      }
      return { type: "path", path: D, matrix: j };
    }, r.exports.shapeFromText = function(z) {
      var D, j = 1, Y = "#000000", K = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof z == "string" ? D = z : (D = z.text, j = "scalar" in z ? z.scalar : j, K = "fontFamily" in z ? z.fontFamily : K, Y = "color" in z ? z.color : Y);
      var ee = 10 * j, q = ee + "px " + K, S = new OffscreenCanvas(ee, ee), T = S.getContext("2d");
      T.font = q;
      var M = T.measureText(D), R = Math.ceil(M.actualBoundingBoxRight + M.actualBoundingBoxLeft), ae = Math.ceil(M.actualBoundingBoxAscent + M.actualBoundingBoxDescent), N = M.actualBoundingBoxLeft + 2, A = M.actualBoundingBoxAscent + 2;
      R += 4, ae += 4, (T = (S = new OffscreenCanvas(R, ae)).getContext("2d")).font = q, T.fillStyle = Y, T.fillText(D, N, A);
      var $ = 1 / j;
      return { type: "bitmap", bitmap: S.transferToImageBitmap(), matrix: [$, 0, 0, $, -R * $ / 2, -ae * $ / 2] };
    };
  })(/* @__PURE__ */ (function() {
    return typeof window != "undefined" ? window : typeof self != "undefined" ? self : this || {};
  })(), ro, !1);
  const v_ = ro.exports;
  ro.exports.create;
  var __ = En('<svg viewBox="0 0 361 163" fill="none" aria-hidden="true"><path class="kaching-bundles__scratch-off-hint-path" d="M22 113.859C23.9107 84.035 22.7293 20.8901 54.8299 45.9835C94.9555 77.3502 81.1193 164.847 101.209 103.575C108.48 64.2518 127.202 -4.91471 143.923 33.0046C164.824 80.4037 155.535 144.223 184.564 113.859C213.593 83.495 160.179 15.685 201.982 45.9835C243.784 76.2821 263.524 183.445 278.619 122.651C293.714 61.8562 268.168 7.24414 303.004 33.0046C337.839 58.765 330.872 64.2534 339 92.7687" stroke="white" stroke-opacity="0.7" stroke-width="44" stroke-linecap="round"></path></svg>');
  function cd(n, t) {
    Ye(t, !0);
    let r = k(t, "hidden", 7);
    var a = { get hidden() {
      return r();
    }, set hidden(u) {
      r(u), _();
    } }, l = __();
    let o;
    return pe((u) => o = At(l, 0, "kaching-bundles__scratch-off-hint", null, o, u), [() => ({ "kaching-bundles__scratch-off-hint--hidden": r() })]), f(n, l), Ke(a);
  }
  function m_(n, t) {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), t());
  }
  Ne(cd, { hidden: {} }, [], [], !0);
  var k_ = V('<canvas role="button" tabindex="0"></canvas> <!> <div aria-hidden="true"> </div>', 1), y_ = V("<div><!> <!></div>");
  function ud(n, t) {
    Ye(t, !0);
    const r = () => Ie(s, "$config", a), [a, l] = kt(), o = 317 / 361;
    let u = k(t, "settings", 7), c = k(t, "onReveal", 7), i = k(t, "children", 7);
    const s = fn(), g = Dt();
    let h = d(() => Ie(g, "$translate", a)(u().title)), p = Te(lt(r().preview && !r().previewScratchOff)), v = Te(!1), b = Te(void 0), y = Te(!1), m = d(() => dn({ "scratch-off-title-color": Ee(u().titleColor), "scratch-off-title-size": `${u().titleSize}px` })), C = !1, P = null, B = null, O = 22, I = null, E = Te(!1), Z = Te(!1);
    const G = new Image();
    G.src = "https://bundles-assets.kachingappz.app/widget/scratch-off-background-v2.webp", I = G, G.complete ? re(E, !0) : (G.addEventListener("load", () => {
      re(E, !0);
    }, { once: !0 }), G.addEventListener("error", () => {
      re(Z, !0);
    }, { once: !0 }));
    let ce = d(() => e(E) || e(Z));
    function H() {
      if (!e(b)) return;
      const R = e(b).getBoundingClientRect();
      if (R.width === 0 || R.height === 0) return;
      const ae = window.devicePixelRatio || 1;
      e(b).width = Math.floor(R.width * ae), e(b).height = Math.floor(R.height * ae);
      const N = e(b).getContext("2d");
      if (!N) return;
      N.scale(ae, ae), O = 44 * Math.min((R.width - 10) / 361, (R.height - 10) / 163, o) / 2, N.fillStyle = Ee(u().backgroundColor), N.fillRect(0, 0, R.width, R.height), e(E) && I && (N.globalAlpha = 0.6, N.drawImage(I, 0, 0, R.width, R.height), N.globalAlpha = 1), N.globalCompositeOperation = "destination-out";
    }
    function W(R) {
      if (!e(b)) return null;
      const ae = e(b).getBoundingClientRect();
      return { x: R.clientX - ae.left, y: R.clientY - ae.top };
    }
    function J(R) {
      var ae;
      e(p) || e(v) || (C = !0, re(y, !0), B === null && (B = setTimeout(D, 1500)), (ae = e(b)) == null || ae.setPointerCapture(R.pointerId), P = W(R), (function(N) {
        if (!e(b) || !N) return;
        const A = e(b).getContext("2d");
        A && (A.beginPath(), A.arc(N.x, N.y, O, 0, 2 * Math.PI), A.fill());
      })(P));
    }
    function Q(R) {
      if (!C || e(p) || e(v)) return;
      const ae = W(R);
      ae && P && ((function(N, A) {
        if (!e(b)) return;
        const $ = e(b).getContext("2d");
        if (!$) return;
        const ne = A.x - N.x, te = A.y - N.y, ie = Math.hypot(ne, te), X = Math.max(1, Math.ceil(ie / 4));
        for (let ve = 0; ve <= X; ve++) {
          const Be = ve / X;
          $.beginPath(), $.arc(N.x + ne * Be, N.y + te * Be, O, 0, 2 * Math.PI), $.fill();
        }
      })(P, ae), P = ae);
    }
    function U(R) {
      var ae;
      C = !1, (ae = e(b)) == null || ae.releasePointerCapture(R.pointerId), P = null, D();
    }
    function z() {
      B !== null && (clearTimeout(B), B = null);
    }
    function D() {
      var R;
      e(p) || e(v) || (z(), re(v, !0), (function() {
        if (!e(b)) return;
        const ae = e(b).getBoundingClientRect();
        v_({ particleCount: 120, spread: 70, startVelocity: 45, origin: { x: (ae.left + ae.width / 2) / window.innerWidth, y: (ae.top + ae.height / 2) / window.innerHeight } });
      })(), (R = c()) == null || R(), setTimeout(() => {
        re(p, !0), re(v, !1);
      }, 300));
    }
    Je(() => {
      if (e(ce)) return;
      const R = setTimeout(() => {
        re(Z, !0);
      }, 5e3);
      return () => clearTimeout(R);
    }), Je(() => () => z()), Je(() => {
      if (e(p) || e(v) || !e(b)) return;
      H();
      const R = new ResizeObserver(() => {
        e(p) || e(v) || H();
      });
      return R.observe(e(b)), () => R.disconnect();
    });
    let j = JSON.stringify(u());
    Je(() => {
      const R = JSON.stringify(u());
      R !== j && (j = R, r().preview && r().previewScratchOff && (re(p, !1), re(v, !1), re(y, !1), z()));
    });
    var Y = { get settings() {
      return u();
    }, set settings(R) {
      u(R), _();
    }, get onReveal() {
      return c();
    }, set onReveal(R) {
      c(R), _();
    }, get children() {
      return i();
    }, set children(R) {
      i(R), _();
    } }, K = y_();
    let ee;
    var q = w(K);
    ms(q, i);
    var S = F(q, 2), T = (R) => {
      var ae = k_(), N = _e(ae);
      let A;
      N.__pointerdown = J, N.__pointermove = Q, N.__pointerup = U, N.__keydown = [m_, D], xl(N, (X) => re(b, X), () => e(b));
      var $ = F(N, 2);
      {
        let X = d(() => e(y) || e(v));
        cd($, { get hidden() {
          return e(X);
        } });
      }
      var ne = F($, 2);
      let te;
      var ie = w(ne, !0);
      x(ne), pe((X, ve) => {
        A = At(N, 1, "kaching-bundles__scratch-off-canvas", null, A, X), Pe(N, "aria-label", e(h)), te = At(ne, 1, "kaching-bundles__scratch-off-title", null, te, ve), mt(ie, e(h));
      }, [() => ({ "kaching-bundles__scratch-off-canvas--revealing": e(v) }), () => ({ "kaching-bundles__scratch-off-title--hidden": e(y) || e(v) })]), bc("pointercancel", N, U), f(R, ae);
    };
    L(S, (R) => {
      e(p) || R(T);
    }), x(K), pe((R) => {
      ee = At(K, 1, "kaching-bundles__scratch-off", null, ee, R), Nt(K, e(m));
    }, [() => ({ "kaching-bundles__scratch-off--unscratched": !e(p), "kaching-bundles__scratch-off--revealing": e(v), "kaching-bundles__scratch-off--loading": !e(p) && !e(ce) })]), f(n, K);
    var M = Ke(Y);
    return l(), M;
  }
  Dn(["pointerdown", "pointermove", "pointerup", "keydown"]), Ne(ud, { settings: {}, onReveal: {}, children: {} }, [], [], !0);
  var x_ = V('<div class="kaching-bundles__bar-price"><!></div>'), w_ = V('<div class="kaching-bundles__bar-full-price"><!></div>'), P_ = V('<div class="kaching-bundles__bar-pricing"><!> <!></div>');
  function jl(n, t) {
    Ye(t, !0);
    const r = () => Ie(i, "$translate", l), a = () => Ie(s, "$formatPrice", l), [l, o] = kt(), u = k(t, "discountedPrice", 7), c = k(t, "fullPrice", 7), i = Dt(), s = sn();
    var g = { get discountedPrice() {
      return u();
    }, set discountedPrice(m) {
      u(m), _();
    }, get fullPrice() {
      return c();
    }, set fullPrice(m) {
      c(m), _();
    } }, h = P_(), p = w(h);
    Xe(p, u, (m) => {
      var C = x_();
      Ge(w(C), () => a()(u())), x(C), pe((P) => Pe(C, "data-a11y-label", P), [() => r()("system.price")]), f(m, C);
    });
    var v = F(p, 2), b = (m) => {
      var C = De();
      Xe(_e(C), c, (P) => {
        var B = w_();
        Ge(w(B), () => a()(c())), x(B), pe((O) => Pe(B, "data-a11y-label", O), [() => r()("system.original_price")]), f(P, B);
      }), f(m, C);
    };
    L(v, (m) => {
      c() > u() && m(b);
    }), x(h), f(n, h);
    var y = Ke(g);
    return o(), y;
  }
  Ne(jl, { discountedPrice: {}, fullPrice: {} }, [], [], !0);
  const Ta = Ur(null), ao = (n) => dn({ "kaching-subscriptions-title-color": Ee(n.titleColor), "kaching-subscriptions-subtitle-color": Ee(n.subtitleColor), "kaching-subscriptions-title-font-size": n.titleSize + "px", "kaching-subscriptions-subtitle-font-size": n.subtitleSize + "px" });
  var S_ = V('<div class="kaching-bundles__bar-radio"></div>'), B_ = V('<div class="kaching-bundles__subscriptions__title"><!></div>'), C_ = V('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), I_ = V('<div class="kaching-bundles__bar-variants"><!></div>'), M_ = V('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), z_ = V('<div class="kaching-bundles__bar-radio"></div>'), D_ = V('<div class="kaching-bundles__subscriptions__title"><!></div>'), $_ = V('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), A_ = V('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div></div></div>'), V_ = V("<div></div>");
  function dd(n, t) {
    Ye(t, !0);
    const r = () => Ie(Ta, "$selectedDealBarStore", o), a = () => Ie(v, "$formatPrice", o), l = () => Ie(p, "$translate", o), [o, u] = kt(), c = k(t, "subscriptions", 7), i = k(t, "sellingPlans", 7), s = k(t, "selectedSellingPlan", 7), g = k(t, "hideSellingPlanSelector", 7, !1), h = k(t, "onChange", 7), p = Dt(), v = sn();
    let b = Te(lt(c().subscribeByDefault || s() ? "subscribe" : "one-time")), y = Te(lt(s() || i()[0])), m = Te(!1), C = d(() => c().subscribeByDefault), P = d(() => e(C) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const B = d(() => ao(c())), O = d(() => {
      var j, Y;
      const K = (Y = (j = r()) == null ? void 0 : j.dealBar) == null ? void 0 : Y.sellingPlanGid;
      if (K) return i().find((ee) => ee.id === Rt(K));
    }), I = d(() => {
      var j;
      return (j = e(O)) != null ? j : e(y);
    }), E = d(() => {
      var j, Y, K, ee, q;
      return (q = (ee = (Y = (j = r()) == null ? void 0 : j.pricing.discountedPricesForSellingPlans.find((S) => {
        var T;
        return S.sellingPlanId === ((T = e(I)) == null ? void 0 : T.id);
      })) == null ? void 0 : Y.discountedPrice) != null ? ee : (K = r()) == null ? void 0 : K.pricing.discountedPrice) != null ? q : 0;
    }), Z = d(() => {
      var j, Y;
      return (Y = (j = r()) == null ? void 0 : j.pricing.discountedPriceWithoutSellingPlan) != null ? Y : 0;
    }), G = d(() => {
      var j, Y;
      return (Y = (j = r()) == null ? void 0 : j.pricing.fullPrice) != null ? Y : 0;
    }), ce = d(() => {
      var j, Y, K;
      return gn({ priceFormatter: a(), product: (j = r()) == null ? void 0 : j.product, totalFullPrice: e(G), totalDiscountedPrice: e(E), quantity: (K = (Y = r()) == null ? void 0 : Y.quantity) != null ? K : 1, sellingPlan: e(I), unitQuantity: null });
    }), H = d(() => {
      var j, Y, K;
      return gn({ priceFormatter: a(), product: (j = r()) == null ? void 0 : j.product, totalFullPrice: e(G), totalDiscountedPrice: e(Z), quantity: (K = (Y = r()) == null ? void 0 : Y.quantity) != null ? K : 1, unitQuantity: null });
    });
    function W(j) {
      re(m, !0), re(b, j, !0), h()(j === "subscribe" ? e(y) : void 0);
    }
    function J(j) {
      re(y, j, !0), e(b) === "subscribe" && h()(j);
    }
    Ca(() => {
      e(b) === "subscribe" && h()(e(y));
    }), Je(() => {
      if (s()) return re(y, s(), !0), void re(b, "subscribe");
      if (i().length === 0) return void re(b, "one-time");
      i().some((j) => {
        var Y;
        return j.id === ((Y = e(y)) == null ? void 0 : Y.id);
      }) || re(y, i()[0], !0), e(m) || re(b, e(C) ? "subscribe" : "one-time", !0), h()(e(b) === "subscribe" ? e(y) : void 0);
    });
    var Q = { get subscriptions() {
      return c();
    }, set subscriptions(j) {
      c(j), _();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(j) {
      i(j), _();
    }, get selectedSellingPlan() {
      return s();
    }, set selectedSellingPlan(j) {
      s(j), _();
    }, get hideSellingPlanSelector() {
      return g();
    }, set hideSellingPlanSelector(j = !1) {
      g(j), _();
    }, get onChange() {
      return h();
    }, set onChange(j) {
      h(j), _();
    } }, U = V_();
    let z;
    Zt(U, 20, () => e(P), (j) => j, (j, Y) => {
      var K = De(), ee = _e(K), q = (T) => {
        {
          let M = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(b) === "subscribe" && "kaching-bundles__bar--selected"]);
          Et(T, { element: "div", get class() {
            return e(M);
          }, onclick: () => W("subscribe"), children: (R, ae) => {
            var N = M_(), A = w(N), $ = w(A), ne = w($), te = (Ce) => {
              f(Ce, S_());
            };
            L(ne, (Ce) => {
              c().layout === "vertical" && Ce(te);
            });
            var ie = F(ne, 2), X = w(ie), ve = w(X), Be = w(ve), oe = (Ce) => {
              var Se = B_();
              Ge(w(Se), () => e(ce)(l()(c().subscribeTitle))), x(Se), f(Ce, Se);
            };
            L(Be, (Ce) => {
              c().subscribeTitle && Ce(oe);
            }), x(ve);
            var fe = F(ve, 2), ke = (Ce) => {
              var Se = C_();
              Ge(w(Se), () => e(ce)(l()(c().subscribeSubtitle))), x(Se), f(Ce, Se);
            };
            L(fe, (Ce) => {
              c().subscribeSubtitle && Ce(ke);
            }), x(X);
            var ze = F(X, 2), he = (Ce) => {
              jl(Ce, { get discountedPrice() {
                return e(E);
              }, get fullPrice() {
                return e(G);
              } });
            };
            L(ze, (Ce) => {
              c().showPrices && r() && Ce(he);
            }), x(ie), x($);
            var de = F($, 2), be = (Ce) => {
              {
                let Se = d(() => e(b) === "subscribe");
                ua(Ce, { get highlights() {
                  return c().highlights;
                }, get isSelected() {
                  return e(Se);
                }, get replaceLiquid() {
                  return e(ce);
                } });
              }
            };
            L(de, (Ce) => {
              c().highlights && Ce(be);
            });
            var we = F(de, 2), Le = (Ce) => {
              var Se = I_();
              ca(w(Se), { get sellingPlans() {
                return i();
              }, get selectedSellingPlan() {
                return e(y);
              }, onChange: J }), x(Se), f(Ce, Se);
            };
            L(we, (Ce) => {
              e(b) === "subscribe" && i().length > 1 && e(y) && !g() && Ce(Le);
            }), x(A), x(N), f(R, N);
          }, $$slots: { default: !0 } });
        }
      }, S = (T) => {
        {
          let M = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(b) === "one-time" && "kaching-bundles__bar--selected"]);
          Et(T, { element: "div", get class() {
            return e(M);
          }, onclick: () => W("one-time"), children: (R, ae) => {
            var N = A_(), A = w(N), $ = w(A), ne = w($), te = (de) => {
              f(de, z_());
            };
            L(ne, (de) => {
              c().layout === "vertical" && de(te);
            });
            var ie = F(ne, 2), X = w(ie), ve = w(X), Be = w(ve), oe = (de) => {
              var be = D_();
              Ge(w(be), () => e(H)(l()(c().oneTimeTitle))), x(be), f(de, be);
            };
            L(Be, (de) => {
              c().oneTimeTitle && de(oe);
            }), x(ve);
            var fe = F(ve, 2), ke = (de) => {
              var be = $_();
              Ge(w(be), () => e(H)(l()(c().oneTimeSubtitle))), x(be), f(de, be);
            };
            L(fe, (de) => {
              c().oneTimeSubtitle && de(ke);
            }), x(X);
            var ze = F(X, 2), he = (de) => {
              jl(de, { get discountedPrice() {
                return e(Z);
              }, get fullPrice() {
                return e(G);
              } });
            };
            L(ze, (de) => {
              c().showPrices && r() && de(he);
            }), x(ie), x($), x(A), x(N), f(R, N);
          }, $$slots: { default: !0 } });
        }
      };
      L(ee, (T) => {
        Y === "subscribe" ? T(q) : T(S, !1);
      }), f(j, K);
    }), x(U), pe((j) => {
      z = At(U, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, z, j), Nt(U, e(B));
    }, [() => ({ "kaching-bundles__bars--horizontal": c().layout === "horizontal" })]), f(n, U);
    var D = Ke(Q);
    return u(), D;
  }
  Ne(dd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var q_ = V('<div class="kaching-bundles__subscriptions__title"><!></div>'), T_ = V('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), G_ = V('<div class="kaching-bundles__bar-variants"><!></div>'), O_ = V('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), F_ = V('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function gd(n, t) {
    Ye(t, !0);
    const r = () => Ie(Ta, "$selectedDealBarStore", l), a = () => Ie(h, "$translate", l), [l, o] = kt(), u = k(t, "subscriptions", 7), c = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), s = k(t, "hideSellingPlanSelector", 7, !1), g = k(t, "onChange", 7), h = Dt(), p = sn();
    let v = Te(lt(u().subscribeByDefault || !!i())), b = Te(lt(i() || c()[0])), y = Te(!1);
    const m = d(() => ao(u())), C = d(() => {
      var W, J;
      const Q = (J = (W = r()) == null ? void 0 : W.dealBar) == null ? void 0 : J.sellingPlanGid;
      if (Q) return c().find((U) => U.id === Rt(Q));
    }), P = d(() => {
      var W;
      return (W = e(C)) != null ? W : e(b);
    }), B = d(() => {
      var W, J, Q, U, z;
      return (z = (U = (J = (W = r()) == null ? void 0 : W.pricing.discountedPricesForSellingPlans.find((D) => {
        var j;
        return D.sellingPlanId === ((j = e(P)) == null ? void 0 : j.id);
      })) == null ? void 0 : J.discountedPrice) != null ? U : (Q = r()) == null ? void 0 : Q.pricing.discountedPrice) != null ? z : 0;
    }), O = d(() => {
      var W, J;
      return (J = (W = r()) == null ? void 0 : W.pricing.fullPrice) != null ? J : 0;
    }), I = d(() => {
      var W, J, Q;
      return gn({ priceFormatter: Ie(p, "$formatPrice", l), product: (W = r()) == null ? void 0 : W.product, totalFullPrice: e(O), totalDiscountedPrice: e(B), quantity: (Q = (J = r()) == null ? void 0 : J.quantity) != null ? Q : 1, sellingPlan: e(P), unitQuantity: null });
    });
    function E(W) {
      re(b, W, !0), g()(W);
    }
    Je(() => {
      if (i()) return re(b, i(), !0), void re(v, !0);
      if (c().length === 0) return void re(v, !1);
      e(b) && c().some((W) => W.id === e(b).id) || re(b, c()[0], !0), e(y) || re(v, u().subscribeByDefault, !0), g()(e(v) ? e(b) : void 0);
    }), Ca(() => {
      e(v) && g()(e(b));
    });
    var Z = { get subscriptions() {
      return u();
    }, set subscriptions(W) {
      u(W), _();
    }, get sellingPlans() {
      return c();
    }, set sellingPlans(W) {
      c(W), _();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(W) {
      i(W), _();
    }, get hideSellingPlanSelector() {
      return s();
    }, set hideSellingPlanSelector(W = !1) {
      s(W), _();
    }, get onChange() {
      return g();
    }, set onChange(W) {
      g(W), _();
    } }, G = F_(), ce = w(G);
    {
      let W = d(() => ["kaching-bundles__bar", c().length === 0 && "kaching-bundles__bar--disabled"]);
      Et(ce, { element: "div", get class() {
        return e(W);
      }, role: "checkbox", get "aria-checked"() {
        return e(v);
      }, onclick: function() {
        re(y, !0), re(v, !e(v)), g()(e(v) ? e(b) : void 0);
      }, children: (J, Q) => {
        var U = O_(), z = w(U), D = w(z), j = w(D), Y = w(j), K = (X) => {
          Ol(X);
        };
        L(Y, (X) => {
          e(v) && X(K);
        }), x(j);
        var ee = F(j, 2), q = w(ee), S = w(q), T = w(S), M = (X) => {
          var ve = q_();
          Ge(w(ve), () => e(I)(a()(u().subscribeTitle))), x(ve), f(X, ve);
        };
        L(T, (X) => {
          u().subscribeTitle && X(M);
        }), x(S);
        var R = F(S, 2), ae = (X) => {
          var ve = T_();
          Ge(w(ve), () => e(I)(a()(u().subscribeSubtitle))), x(ve), f(X, ve);
        };
        L(R, (X) => {
          u().subscribeSubtitle && X(ae);
        }), x(q);
        var N = F(q, 2), A = (X) => {
          jl(X, { get discountedPrice() {
            return e(B);
          }, get fullPrice() {
            return e(O);
          } });
        };
        L(N, (X) => {
          u().showPrices && r() && X(A);
        }), x(ee), x(D);
        var $ = F(D, 2), ne = (X) => {
          ua(X, { get highlights() {
            return u().highlights;
          }, get isSelected() {
            return e(v);
          }, get replaceLiquid() {
            return e(I);
          } });
        };
        L($, (X) => {
          u().highlights && X(ne);
        });
        var te = F($, 2), ie = (X) => {
          var ve = G_();
          ca(w(ve), { get sellingPlans() {
            return c();
          }, get selectedSellingPlan() {
            return e(b);
          }, onChange: E }), x(ve), f(X, ve);
        };
        L(te, (X) => {
          e(v) && c().length > 1 && e(b) && !s() && X(ie);
        }), x(z), x(U), f(J, U);
      }, $$slots: { default: !0 } });
    }
    x(G), pe(() => Nt(G, e(m))), f(n, G);
    var H = Ke(Z);
    return o(), H;
  }
  function L_(n, t, r, a) {
    t()(r().subscribeByDefault ? void 0 : e(a));
  }
  Ne(gd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var j_ = V('<div class="kaching-bundles__subscriptions kaching-bundles__subscriptions--link"><button type="button" class="kaching-bundles__subscriptions__link"><!><!></button></div>');
  function hd(n, t) {
    Ye(t, !0);
    const r = () => Ie(Ta, "$selectedDealBarStore", l), a = () => Ie(p, "$formatPrice", l), [l, o] = kt(), u = k(t, "subscriptions", 7), c = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), s = k(t, "onChange", 7), g = k(t, "onRequestAddToCart", 7), h = Dt(), p = sn(), v = d(() => ao(u())), b = d(() => {
      var Q, U;
      const z = (U = (Q = r()) == null ? void 0 : Q.dealBar) == null ? void 0 : U.sellingPlanGid;
      if (z) return c().find((D) => D.id === Rt(z));
    }), y = d(() => {
      var Q, U;
      return (U = (Q = e(b)) != null ? Q : i()) != null ? U : c()[0];
    }), m = d(() => {
      var Q, U, z, D, j;
      return (j = (D = (U = (Q = r()) == null ? void 0 : Q.pricing.discountedPricesForSellingPlans.find((Y) => {
        var K;
        return Y.sellingPlanId === ((K = e(y)) == null ? void 0 : K.id);
      })) == null ? void 0 : U.discountedPrice) != null ? D : (z = r()) == null ? void 0 : z.pricing.discountedPrice) != null ? j : 0;
    }), C = d(() => {
      var Q, U;
      return (U = (Q = r()) == null ? void 0 : Q.pricing.discountedPriceWithoutSellingPlan) != null ? U : 0;
    }), P = d(() => {
      var Q, U;
      return (U = (Q = r()) == null ? void 0 : Q.pricing.fullPrice) != null ? U : 0;
    }), B = d(() => {
      var Q, U, z;
      return gn({ priceFormatter: a(), product: (Q = r()) == null ? void 0 : Q.product, totalFullPrice: e(P), totalDiscountedPrice: u().subscribeByDefault ? e(C) : e(m), quantity: (z = (U = r()) == null ? void 0 : U.quantity) != null ? z : 1, sellingPlan: u().subscribeByDefault ? void 0 : e(y), unitQuantity: null });
    }), O = d(() => u().subscribeByDefault ? e(C) : e(m)), I = d(() => {
      const Q = u().subscribeByDefault ? u().oneTimeTitle : u().subscribeTitle;
      return Q ? e(B)(Ie(h, "$translate", l)(Q)) : "";
    });
    let E, Z = !1;
    Je(() => {
      const Q = c().length !== 0 && u().subscribeByDefault ? e(y) : void 0;
      Z && (Q == null ? void 0 : Q.id) === E || (E = Q == null ? void 0 : Q.id, Z = !0, s()(Q));
    });
    var G = { get subscriptions() {
      return u();
    }, set subscriptions(Q) {
      u(Q), _();
    }, get sellingPlans() {
      return c();
    }, set sellingPlans(Q) {
      c(Q), _();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(Q) {
      i(Q), _();
    }, get onChange() {
      return s();
    }, set onChange(Q) {
      s(Q), _();
    }, get onRequestAddToCart() {
      return g();
    }, set onRequestAddToCart(Q) {
      g(Q), _();
    } }, ce = De(), H = _e(ce), W = (Q) => {
      var U = j_(), z = w(U);
      z.__click = [L_, g, u, y];
      var D = w(z);
      Ge(D, () => e(I));
      var j = F(D), Y = (K) => {
        var ee = Tn();
        pe((q) => mt(ee, q), [() => " • " + a()(e(O))]), f(K, ee);
      };
      L(j, (K) => {
        u().showPrices && r() && K(Y);
      }), x(z), x(U), pe(() => Nt(U, e(v))), f(Q, U);
    };
    L(H, (Q) => {
      c().length > 0 && e(I) && Q(W);
    }), f(n, ce);
    var J = Ke(G);
    return o(), J;
  }
  Dn(["click"]), Ne(hd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var E_ = V('<div class="kaching-bundles__block-title"><!></div>'), R_ = V("<!> <!>", 1);
  function io(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "subscriptions", 7), o = k(t, "sellingPlans", 7), u = k(t, "selectedSellingPlan", 7), c = k(t, "hideSellingPlanSelector", 7, !1), i = k(t, "onChange", 7), s = k(t, "onRequestAddToCart", 7), g = Dt(), h = d(() => l().title ? Ie(g, "$translate", r)(l().title) : "");
    var p = { get subscriptions() {
      return l();
    }, set subscriptions(O) {
      l(O), _();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(O) {
      o(O), _();
    }, get selectedSellingPlan() {
      return u();
    }, set selectedSellingPlan(O) {
      u(O), _();
    }, get hideSellingPlanSelector() {
      return c();
    }, set hideSellingPlanSelector(O = !1) {
      c(O), _();
    }, get onChange() {
      return i();
    }, set onChange(O) {
      i(O), _();
    }, get onRequestAddToCart() {
      return s();
    }, set onRequestAddToCart(O) {
      s(O), _();
    } }, v = R_(), b = _e(v), y = (O) => {
      var I = E_();
      Ge(w(I), () => e(h)), x(I), f(O, I);
    };
    L(b, (O) => {
      e(h) && O(y);
    });
    var m = F(b, 2), C = (O) => {
      gd(O, { get subscriptions() {
        return l();
      }, get sellingPlans() {
        return o();
      }, get selectedSellingPlan() {
        return u();
      }, get hideSellingPlanSelector() {
        return c();
      }, get onChange() {
        return i();
      } });
    }, P = (O) => {
      var I = De(), E = _e(I), Z = (ce) => {
        hd(ce, { get subscriptions() {
          return l();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return u();
        }, get onChange() {
          return i();
        }, get onRequestAddToCart() {
          return s();
        } });
      }, G = (ce) => {
        dd(ce, { get subscriptions() {
          return l();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return u();
        }, get hideSellingPlanSelector() {
          return c();
        }, get onChange() {
          return i();
        } });
      };
      L(E, (ce) => {
        l().layout === "link" ? ce(Z) : ce(G, !1);
      }, !0), f(O, I);
    };
    L(m, (O) => {
      l().layout === "checkbox" ? O(C) : O(P, !1);
    }), f(n, v);
    var B = Ke(p);
    return a(), B;
  }
  Ne(io, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var Q_ = En('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function pd(n) {
    f(n, Q_());
  }
  Ne(pd, {}, [], [], !0);
  var N_ = V('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), W_ = V('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), U_ = V('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), H_ = V('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), Z_ = V('<div class="kaching-bundles__progressive-gifts__gift__content"><div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div> <div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div> <!></div>'), J_ = V('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), Y_ = V('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), K_ = V('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), X_ = V('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), e0 = V('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), t0 = V('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function fd(n, t) {
    Ye(t, !0);
    const r = () => Ie(m, "$config", o), a = () => Ie(v, "$translate", o), l = () => Ie(y, "$getMediaImageUrl", o), [o, u] = kt(), c = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), s = k(t, "product", 7), g = k(t, "selectedDealBarIndex", 7), h = k(t, "onChange", 7), p = k(t, "onUnlock", 7), v = Dt(), b = sn(), y = An(), m = fn(), C = d(() => i().differentVariantsEnabled), P = d(() => {
      var S;
      return s() ? i().variantGIDs ? i().variantGIDs.map(Rt) : (S = s()) == null ? void 0 : S.variants.map((T) => T.id) : null;
    }), B = d(() => {
      if (s()) return { ...s(), variants: s().variants.filter((S) => (r().preview || S.availableForSale) && (!e(P) || e(P).includes(S.id))) };
    });
    let O = Te(lt([]));
    const I = d(() => (function(S, T, M) {
      return S.length > 0 ? S : T != null && T.availableForSale && T.variants.length > 0 ? Array.from({ length: M }, () => T.variants[0].id) : [];
    })(e(O), e(B), i().quantity)), E = d(() => s() && e(I).length > 0 ? e(I).map((S) => s().variants.find((T) => T.id === S)).filter((S) => S !== void 0) : []), Z = d(() => {
      var S;
      return gn({ priceFormatter: Ie(b, "$formatPrice", o), product: s(), totalFullPrice: ((S = e(E)) == null ? void 0 : S.reduce((T, M) => {
        var R;
        return T + ((R = M == null ? void 0 : M.price) != null ? R : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: cr(e(E).map((T) => ({ variant: T, quantity: 1 }))) });
    }), G = d(() => e(Z)(a()(i().title))), ce = d(() => e(Z)(a()(i().lockedTitle))), H = d(() => e(Z)(a()(i().label))), W = d(() => e(Z)(a()(i().labelCrossedOut))), J = d(() => g() === null || i().unlockAtBar > g() + 1), Q = d(() => {
      var S, T, M;
      return i().giftType === "shipping" ? Ns : ((T = (S = e(E)) == null ? void 0 : S[0]) == null ? void 0 : T.image) || ((M = s()) == null ? void 0 : M.image);
    }), U = d(() => i().mediaImageGID ? l()(i().mediaImageGID) : e(Q)), z = d(() => !c().inheritStyle && c().style && l()(c().style.lockedMediaImageGID));
    Je(() => {
      if (s() && e(E) && !e(J)) {
        const S = Object.values(e(E).reduce((T, M) => (T[M.id] ? T[M.id].quantity += 1 : T[M.id] = { variant: M, quantity: 1 }, T), {}));
        en(() => h()({ product: s(), variants: S }));
      } else en(() => h()(void 0));
    }), ar(() => {
      i().productGID;
    }), Je(() => {
      e(J) && e(U) && (new Image().src = e(U));
    });
    const D = d(() => !(i().giftType !== "product" || !s() || s().availableForSale && s().variants.filter((S) => S.availableForSale && (!e(P) || e(P).includes(S.id))).length !== 0));
    var j = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(S) {
      c(S), _();
    }, get gift() {
      return i();
    }, set gift(S) {
      i(S), _();
    }, get product() {
      return s();
    }, set product(S) {
      s(S), _();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(S) {
      g(S), _();
    }, get onChange() {
      return h();
    }, set onChange(S) {
      h(S), _();
    }, get onUnlock() {
      return p();
    }, set onUnlock(S) {
      p(S), _();
    } }, Y = De(), K = _e(Y), ee = (S) => {
      var T = De(), M = _e(T), R = (ae) => {
        var N = De(), A = _e(N), $ = (te) => {
          Et(te, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", get onclick() {
            return p();
          }, children: (ie, X) => {
            var ve = Z_(), Be = w(ve), oe = w(Be), fe = (be) => {
              var we = N_();
              pe(() => Pe(we, "src", e(z))), f(be, we);
            }, ke = (be) => {
              pd(be);
            };
            L(oe, (be) => {
              e(z) ? be(fe) : be(ke, !1);
            }), x(Be);
            var ze = F(Be, 2);
            Ge(w(ze), () => e(ce)), x(ze);
            var he = F(ze, 2), de = (be) => {
              var we = H_(), Le = w(we), Ce = (xe) => {
                var ue = W_();
                Ge(w(ue), () => e(H)), x(ue), f(xe, ue);
              };
              L(Le, (xe) => {
                e(H) && xe(Ce);
              });
              var Se = F(Le, 2), Qe = (xe) => {
                var ue = U_();
                Ge(w(ue), () => e(W)), x(ue), f(xe, ue);
              };
              L(Se, (xe) => {
                e(W) && xe(Qe);
              }), x(we), f(be, we);
            };
            L(he, (be) => {
              (e(H) || e(W)) && c().showLockedGiftLabels && be(de);
            }), x(ve), f(ie, ve);
          }, $$slots: { default: !0 } });
        }, ne = (te) => {
          var ie = t0();
          let X;
          var ve = w(ie), Be = w(ve), oe = (Ce) => {
            var Se = J_(), Qe = w(Se);
            x(Se), pe(() => {
              var xe, ue;
              Pe(Qe, "src", e(U)), Pe(Qe, "alt", (ue = (xe = s()) == null ? void 0 : xe.title) != null ? ue : "");
            }), f(Ce, Se);
          };
          L(Be, (Ce) => {
            e(U) && Ce(oe);
          });
          var fe = F(Be, 2), ke = w(fe), ze = w(ke), he = (Ce) => {
            var Se = Y_();
            Ge(w(Se), () => e(G)), x(Se), f(Ce, Se);
          };
          L(ze, (Ce) => {
            e(G) && Ce(he);
          });
          var de = F(ze, 2), be = (Ce) => {
            var Se = e0(), Qe = w(Se), xe = (ge) => {
              var Re = K_();
              Ge(w(Re), () => e(H)), x(Re), f(ge, Re);
            };
            L(Qe, (ge) => {
              e(H) && ge(xe);
            });
            var ue = F(Qe, 2), $e = (ge) => {
              var Re = X_();
              Ge(w(Re), () => e(W)), x(Re), f(ge, Re);
            };
            L(ue, (ge) => {
              e(W) && ge($e);
            }), x(Se), f(Ce, Se);
          };
          L(de, (Ce) => {
            (e(H) || e(W)) && Ce(be);
          }), x(ke);
          var we = F(ke, 2), Le = (Ce) => {
            var Se = De();
            Zt(_e(Se), 17, () => ({ length: e(C) ? i().quantity : 1 }), Nr, (Qe, xe, ue) => {
              var $e = De(), ge = _e($e), Re = (nt) => {
                {
                  let et = d(() => e(C) ? ue + 1 : void 0);
                  Gn(nt, { get product() {
                    return e(B);
                  }, get selectedVariantId() {
                    return e(I)[ue];
                  }, get number() {
                    return e(et);
                  }, forceDropdown: !0, onChange: (je) => (function(dt, at) {
                    e(C) ? re(O, [...e(I).slice(0, at), dt, ...e(I).slice(at + 1)], !0) : re(O, Array.from({ length: i().quantity }, () => dt), !0);
                  })(je, ue) });
                }
              };
              L(ge, (nt) => {
                e(I)[ue] !== void 0 && nt(Re);
              }), f(Qe, $e);
            }), f(Ce, Se);
          };
          L(we, (Ce) => {
            e(B) && e(B).variants.length > 1 && e(I).length > 0 && Ce(Le);
          }), x(fe), x(ve), x(ie), pe((Ce) => X = At(ie, 1, "kaching-bundles__progressive-gifts__gift", null, X, Ce), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(D) })]), f(te, ie);
        };
        L(A, (te) => {
          e(J) ? te($) : te(ne, !1);
        }), f(ae, N);
      };
      L(M, (ae) => {
        var N;
        (s() && ((N = e(E)) != null && N.length || r().preview && e(D)) || i().giftType === "shipping") && ae(R);
      }), f(S, T);
    };
    L(K, (S) => {
      e(J) && c().hideLockedGifts || S(ee);
    }), f(n, Y);
    var q = Ke(j);
    return u(), q;
  }
  Ne(fd, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, onChange: {}, onUnlock: {} }, [], [], !0);
  var n0 = V('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), r0 = V('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), a0 = V('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function bd(n, t) {
    Ye(t, !0);
    const r = () => Ie(v, "$config", l), a = () => Ie(p, "$translate", l), [l, o] = kt(), u = k(t, "progressiveGifts", 7), c = k(t, "dealBlock", 7), i = k(t, "otherProducts", 7), s = k(t, "selectedDealBarIndex", 7), g = k(t, "onChange", 7), h = k(t, "onUnlock", 7), p = Dt(), v = fn();
    let b = Te(lt({}));
    const y = d(() => ((W) => {
      const { progressiveGifts: J, colors: Q, fonts: U } = W, z = (J == null ? void 0 : J.inheritStyle) || !(J != null && J.style);
      return dn({ "kaching-bundles-progressive-gifts-title-color": Ee(J.titleColor), "kaching-bundles-progressive-gifts-title-alignment": J.titleAlignment, "kaching-bundles-progressive-gifts-title-size": J.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": er(J.titleStyle), "kaching-bundles-progressive-gifts-title-style": tr(J.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": Ee(J.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": J.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": J.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": er(J.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": tr(J.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": z ? void 0 : J.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (z ? W.cornerRadius : J.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": Ee(z ? Q.progressiveGiftsLabelBackground || Q.labelBackground : J.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": Ee(z ? Q.label : J.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (z ? U.label.size : J.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": Ee(z ? Q.selectedBackground : J.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": Ee(z ? Q.border : J.style.borderColor), "kaching-bundles-progressive-gifts-text-color": Ee(z ? Q.title : J.style.textColor), "kaching-bundles-progressive-gifts-text-size": z ? void 0 : J.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": Ee(z ? Q.background : J.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": Ee(z ? { ...Q.border, alpha: 0.3 * Q.border.alpha } : J.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": z ? void 0 : Ee(J.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": z ? void 0 : J.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": z ? void 0 : Ee(J.style.lockedIconColor) });
    })(c())), m = d(() => u().gifts.flatMap((W) => {
      const J = W.giftType === "product" && W.productGID ? i().find((U) => U.id === Rt(W.productGID)) : void 0;
      if (!r().preview && W.giftType === "product" && !(J != null && J.availableForSale)) return [];
      const Q = J && !r().preview ? or(J) : J;
      return { gift: W, product: Q };
    }));
    var C = { get progressiveGifts() {
      return u();
    }, set progressiveGifts(W) {
      u(W), _();
    }, get dealBlock() {
      return c();
    }, set dealBlock(W) {
      c(W), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(W) {
      i(W), _();
    }, get selectedDealBarIndex() {
      return s();
    }, set selectedDealBarIndex(W) {
      s(W), _();
    }, get onChange() {
      return g();
    }, set onChange(W) {
      g(W), _();
    }, get onUnlock() {
      return h();
    }, set onUnlock(W) {
      h(W), _();
    } }, P = a0(), B = w(P), O = w(B), I = (W) => {
      var J = n0();
      Ge(w(J), () => a()(u().title)), x(J), f(W, J);
    };
    L(O, (W) => {
      u().title && W(I);
    });
    var E = F(O, 2), Z = (W) => {
      var J = r0();
      Ge(w(J), () => a()(u().subtitle)), x(J), f(W, J);
    };
    L(E, (W) => {
      u().subtitle && W(Z);
    }), x(B);
    var G = F(B, 2);
    let ce;
    Zt(G, 21, () => e(m), ({ gift: W, product: J }) => W.id, (W, J) => {
      let Q = () => e(J).gift;
      fd(W, { get progressiveGifts() {
        return u();
      }, get gift() {
        return Q();
      }, get product() {
        return e(J).product;
      }, get selectedDealBarIndex() {
        return s();
      }, onChange: (U) => (function(z, D) {
        D ? e(b)[z] = D : delete e(b)[z];
        const j = Object.entries(e(b)).map(([Y, K]) => ({ id: Y, variants: K.variants, product: K.product }));
        g()(j);
      })(Q().id, U), onUnlock: () => h()(Q().unlockAtBar - 1) });
    }), x(G), x(P), pe((W) => {
      Nt(P, e(y)), ce = At(G, 1, "kaching-bundles__progressive-gifts__gifts", null, ce, W);
    }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": u().layout === "vertical" })]), f(n, P);
    var H = Ke(C);
    return o(), H;
  }
  Ne(bd, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, onChange: {}, onUnlock: {} }, [], [], !0);
  var i0 = V('<span class="kaching-bundles__bar-title"><!></span>'), l0 = V('<div class="kaching-bundles__bar-subtitle"><!></div>'), s0 = V('<div class="kaching-bundles__bar-price"><!></div>'), o0 = V('<div class="kaching-bundles__bar-full-price"><!></div>'), c0 = V('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), u0 = V('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!> <!></div>'), d0 = V('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!></div>'), g0 = V('<div><div class="kaching-bundles__bar-container"><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div></div></div>');
  function vd(n, t) {
    Ye(t, !0);
    const r = () => Ie(m, "$config", u), a = () => Ie(b, "$formatPrice", u), l = () => Ie(N, "$translate", u), o = () => Ie(y, "$getMediaImageUrl", u), [u, c] = kt(), i = k(t, "checkboxUpsell", 7), s = k(t, "product", 7), g = k(t, "dealBlock", 7), h = k(t, "dealSellingPlan", 7), p = k(t, "dealBarQuantity", 7), v = k(t, "onChange", 7), b = sn(), y = An(), m = fn();
    let C = Te(!1), P = Te(1), B = Te(lt({})), O = Te(void 0);
    const I = d(() => {
      var ue;
      return (ue = i().preselected) != null && ue;
    }), E = d(() => {
      var ue;
      return e(C) || !((ue = i().showProductOptionsOnlyWhenSelected) == null || ue);
    });
    Je(() => {
      re(C, e(I), !0);
    }), Je(() => {
      i().matchQuantityWithDealBar && re(P, p(), !0);
    });
    const Z = d(() => !!i().variantGIDs), G = d(() => {
      var ue, $e;
      return e(Z) && s() ? s().variants.filter((ge) => i().variantGIDs.some((Re) => Rt(Re) === ge.id)) : ($e = (ue = s()) == null ? void 0 : ue.variants) != null ? $e : [];
    }), ce = d(() => e(P) > 1 && e(G).length > 1), H = d(() => (function(ue, $e) {
      if (ue.variantGIDs)
        return ue.variantGIDs.length === 0 ? void 0 : Rt(ue.variantGIDs[0]);
      if ($e != null && $e.availableForSale && $e.variants.length > 0) return $e.variants[0].id;
    })(i(), s())), W = d(() => {
      if (e(H) === void 0) return [];
      const ue = [];
      for (let $e = 0; $e < e(P); $e++) {
        const ge = e(B)[$e];
        ge !== void 0 ? ue.push(ge) : ue.push(e(H));
      }
      return ue;
    }), J = d(() => (function(ue, $e) {
      if (!$e) return [];
      const ge = {};
      for (const Re of ue) {
        const nt = ge[Re];
        if (nt) {
          nt.quantity += 1;
          continue;
        }
        const et = $e.variants.find((je) => je.id === Re);
        et && (ge[Re] = { variant: et, quantity: 1 });
      }
      return Object.values(ge);
    })(e(W), s())), Q = d(() => {
      var ue;
      return (ue = e(J)[0]) == null ? void 0 : ue.variant;
    }), U = d(() => {
      var ue;
      return (ue = i().subscriptionEnabled) == null || ue;
    }), z = d(() => {
      var ue;
      return (ue = i().subscriptionType) != null ? ue : "deal";
    }), D = d(() => e(U) && e(z) === "always" && s() && e(Q) ? ji(s(), [e(Q)]) : []), j = d(() => e(D).find((ue) => ue.id === e(O)) || e(D)[0]);
    Je(() => {
      var ue;
      e(D).some(($e) => {
        var ge;
        return $e.id === ((ge = h()) == null ? void 0 : ge.id);
      }) && re(O, (ue = h()) == null ? void 0 : ue.id, !0);
    });
    const Y = d(() => {
      if (s() && e(Q) && e(U))
        return e(z) === "deal" ? h() ? Qn(s(), e(Q), h()) : void 0 : e(j);
    }), K = d(() => g().priceRounding ? { perItem: g().showPricesPerItem, precision: g().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    function ee(ue) {
      return Zr({ discountType: i().discountType, discountValue: i().discountValue, discountQuantity: 1, variantQuantities: e(J), currencyRate: r().currencyRate, priceRounding: e(K), sellingPlan: ue });
    }
    let q = d(() => ee(e(Y))), S = d(() => e(J).reduce((ue, { variant: $e, quantity: ge }) => ue + Math.max($e.price, $e.compareAtPrice || 0) * ge, 0));
    const T = d(() => s() && e(Q) ? Qn(s(), e(Q), void 0) : void 0), M = d(() => e(U) && e(z) === "always" ? e(q) : ee(e(T))), R = d(() => !s() || !e(Q) ? [] : ji(s(), [e(Q)]).map((ue) => {
      let $e;
      return $e = e(U) ? e(z) === "always" ? e(j) : ue : e(T), { sellingPlanId: ue.id, discountedPrice: ee($e) };
    })), ae = d(() => gn({ priceFormatter: a(), product: s(), totalFullPrice: e(S), totalDiscountedPrice: e(q), quantity: e(P), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: cr(e(J)), sellingPlan: e(Y) })), N = Dt();
    let A = d(() => e(ae)(l()(i().title))), $ = d(() => e(ae)(l()(i().subtitle))), ne = d(() => e(S) && e(S) > e(q));
    const te = d(() => o()(i().mediaImageGID)), ie = d(() => e(ae)(l()(i().badgeText || ""))), X = d(() => {
      var ue;
      return o()((ue = i().badgeImageGID) != null ? ue : null);
    });
    function ve(ue, $e) {
      re(B, { ...e(B), [ue]: $e }, !0);
    }
    Je(() => {
      if (s() && e(J).length > 0 && e(C)) {
        const ue = e(Y);
        en(() => v()({ product: s(), variants: e(J), sellingPlan: ue, pricing: { discountedPrice: e(q), fullPrice: e(S), discountedPriceWithoutSellingPlan: e(M), discountedPricesForSellingPlans: e(R) } }));
      } else en(() => v()(void 0));
    });
    var Be = { get checkboxUpsell() {
      return i();
    }, set checkboxUpsell(ue) {
      i(ue), _();
    }, get product() {
      return s();
    }, set product(ue) {
      s(ue), _();
    }, get dealBlock() {
      return g();
    }, set dealBlock(ue) {
      g(ue), _();
    }, get dealSellingPlan() {
      return h();
    }, set dealSellingPlan(ue) {
      h(ue), _();
    }, get dealBarQuantity() {
      return p();
    }, set dealBarQuantity(ue) {
      p(ue), _();
    }, get onChange() {
      return v();
    }, set onChange(ue) {
      v(ue), _();
    } }, oe = g0();
    let fe;
    var ke = w(oe), ze = w(ke);
    {
      let ue = d(() => e(ie) || void 0);
      Va(ze, { get style() {
        return i().badgeStyle;
      }, get text() {
        return e(ue);
      }, get imageUrl() {
        return e(X);
      }, blockLayout: "vertical" });
    }
    var he = F(ze, 2), de = w(he);
    Et(de, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
      return e(C);
    }, onclick: function() {
      re(C, !e(C));
    }, children: (ue, $e) => {
      var ge = c0(), Re = _e(ge);
      let nt;
      var et = w(Re), je = (ct) => {
        Ol(ct);
      };
      L(et, (ct) => {
        e(C) && ct(je);
      }), x(Re);
      var dt = F(Re, 2), at = F(dt, 2), ot = w(at), rt = w(ot);
      Xe(w(rt), () => e(A), (ct) => {
        var vt = i0();
        Ge(w(vt), () => e(A)), x(vt), f(ct, vt);
      }), x(rt);
      var ft = F(rt, 2), Tt = (ct) => {
        var vt = De();
        Xe(_e(vt), () => e($), (yt) => {
          var We = l0();
          Ge(w(We), () => e($)), x(We), f(yt, We);
        }), f(ct, vt);
      };
      L(ft, (ct) => {
        e($) && ct(Tt);
      }), x(ot), x(at);
      var $t = F(at, 2), Me = w($t);
      Xe(Me, () => e(q), (ct) => {
        var vt = s0();
        Ge(w(vt), () => a()(e(q))), x(vt), pe((yt) => Pe(vt, "data-a11y-label", yt), [() => l()("system.price")]), f(ct, vt);
      });
      var Ze = F(Me, 2), bt = (ct) => {
        var vt = De();
        Xe(_e(vt), () => e(S), (yt) => {
          var We = o0();
          Ge(w(We), () => a()(e(S))), x(We), pe((wt) => Pe(We, "data-a11y-label", wt), [() => l()("system.original_price")]), f(yt, We);
        }), f(ct, vt);
      };
      L(Ze, (ct) => {
        e(ne) && ct(bt);
      }), x($t), pe((ct) => {
        var vt, yt, We;
        nt = At(Re, 1, "kaching-bundles__checkbox-upsells__checkbox", null, nt, ct), Pe(dt, "src", e(te) || ((vt = e(Q)) == null ? void 0 : vt.image) || ((yt = s()) == null ? void 0 : yt.image)), Pe(dt, "alt", (We = s()) == null ? void 0 : We.title);
      }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(C) })]), f(ue, ge);
    }, $$slots: { default: !0 } });
    var be = F(de, 2), we = (ue) => {
      var $e = u0(), ge = w($e);
      {
        let je = d(() => ({ ...s(), variants: e(G) }));
        Hr(ge, { get product() {
          return e(je);
        } });
      }
      var Re = F(ge, 2), nt = (je) => {
        var dt = De();
        Zt(_e(dt), 17, () => ({ length: e(P) }), Nr, (at, ot, rt) => {
          {
            let ft = d(() => ({ ...s(), variants: e(G) })), Tt = d(() => e(P) > 1 ? rt + 1 : void 0);
            Gn(at, { get product() {
              return e(ft);
            }, get selectedVariantId() {
              return e(W)[rt];
            }, get number() {
              return e(Tt);
            }, onChange: ($t) => ve(rt, $t) });
          }
        }), f(je, dt);
      }, et = (je) => {
        {
          let dt = d(() => ({ ...s(), variants: e(G) }));
          Gn(je, { get product() {
            return e(dt);
          }, get selectedVariantId() {
            return e(W)[0];
          }, onChange: (at) => ve(0, at) });
        }
      };
      L(Re, (je) => {
        e(ce) ? je(nt) : je(et, !1);
      }), x($e), f(ue, $e);
    };
    L(be, (ue) => {
      e(E) && e(G).length > 1 && e(W).length > 0 && ue(we);
    });
    var Le = F(be, 2), Ce = (ue) => {
      var $e = d0();
      ca(w($e), { get sellingPlans() {
        return e(D);
      }, get selectedSellingPlan() {
        return e(j);
      }, onChange: (ge) => re(O, ge.id, !0) }), x($e), f(ue, $e);
    };
    L(Le, (ue) => {
      e(E) && e(D).length > 1 && e(j) && ue(Ce);
    });
    var Se = F(Le, 2), Qe = (ue) => {
      Wi(ue, { get value() {
        return e(P);
      }, min: 1, onChange: ($e) => re(P, $e, !0) });
    };
    L(Se, (ue) => {
      e(E) && i().quantitySelector && ue(Qe);
    }), x(he), x(ke), x(oe), pe((ue) => fe = At(oe, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, fe, ue), [() => {
      var ue;
      return { "kaching-bundles__bar--selected": e(C), "kaching-bundles__bar--disabled": r().preview && !((ue = s()) != null && ue.availableForSale) };
    }]), f(n, oe);
    var xe = Ke(Be);
    return c(), xe;
  }
  Ne(vd, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var h0 = V('<div class="kaching-bundles__block-title"><!></div>'), p0 = V('<div class="kaching-bundles__checkbox-upsells"><!> <div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function _d(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "checkboxUpsells", 7), o = k(t, "dealBlock", 7), u = k(t, "otherProducts", 7), c = k(t, "complementaryProducts", 7), i = k(t, "dealSellingPlan", 7), s = k(t, "dealBarQuantity", 7), g = k(t, "onChange", 7), h = fn(), p = Dt(), v = d(() => l().title ? Ie(p, "$translate", r)(l().title) : "");
    let b = Te(lt({}));
    const y = d(() => c().map(or)), m = Math.floor(1e3 * Math.random()), C = d(() => l().upsells.flatMap((G, ce) => {
      if (G.productSource === "complementary") {
        const J = e(y)[(ce + m) % (e(y).length || 1)];
        return J ? { upsell: G, product: J } : [];
      }
      const H = G.productGID ? u().find((J) => J.id === Rt(G.productGID)) : void 0;
      if (!Ie(h, "$config", r).preview && !(H != null && H.availableForSale)) return [];
      const W = H && or(H);
      return { upsell: G, product: W };
    }));
    var P = { get checkboxUpsells() {
      return l();
    }, set checkboxUpsells(G) {
      l(G), _();
    }, get dealBlock() {
      return o();
    }, set dealBlock(G) {
      o(G), _();
    }, get otherProducts() {
      return u();
    }, set otherProducts(G) {
      u(G), _();
    }, get complementaryProducts() {
      return c();
    }, set complementaryProducts(G) {
      c(G), _();
    }, get dealSellingPlan() {
      return i();
    }, set dealSellingPlan(G) {
      i(G), _();
    }, get dealBarQuantity() {
      return s();
    }, set dealBarQuantity(G) {
      s(G), _();
    }, get onChange() {
      return g();
    }, set onChange(G) {
      g(G), _();
    } }, B = p0(), O = w(B), I = (G) => {
      var ce = h0();
      Ge(w(ce), () => e(v)), x(ce), f(G, ce);
    };
    L(O, (G) => {
      e(v) && G(I);
    });
    var E = F(O, 2);
    Zt(E, 21, () => e(C), ({ upsell: G, product: ce }) => G.id, (G, ce) => {
      let H = () => e(ce).upsell;
      vd(G, { get checkboxUpsell() {
        return H();
      }, get product() {
        return e(ce).product;
      }, get dealBlock() {
        return o();
      }, get dealSellingPlan() {
        return i();
      }, get dealBarQuantity() {
        return s();
      }, onChange: (W) => (function(J, Q) {
        var U;
        Q ? e(b)[J] = Q : delete e(b)[J];
        const z = Object.entries(e(b)).flatMap(([q, S]) => S.variants.map(({ variant: T, quantity: M }) => ({ id: q, variant: T, product: S.product, quantity: M, sellingPlan: S.sellingPlan })));
        let D = 0, j = 0, Y = 0;
        const K = /* @__PURE__ */ new Map();
        for (const q of Object.values(e(b))) {
          D += q.pricing.discountedPrice, j += q.pricing.fullPrice, Y += q.pricing.discountedPriceWithoutSellingPlan;
          for (const S of q.pricing.discountedPricesForSellingPlans) K.set(S.sellingPlanId, ((U = K.get(S.sellingPlanId)) != null ? U : 0) + S.discountedPrice);
        }
        const ee = Array.from(K, ([q, S]) => ({ sellingPlanId: q, discountedPrice: S }));
        g()(z, { discountedPrice: D, fullPrice: j, discountedPriceWithoutSellingPlan: Y, discountedPricesForSellingPlans: ee });
      })(H().id, W) });
    }), x(E), x(B), f(n, B);
    var Z = Ke(P);
    return a(), Z;
  }
  Ne(_d, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var f0 = V('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function md(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "timer", 7), o = Dt(), u = d(() => ((I) => {
      const { textColor: E, backgroundColor: Z, titleAlignment: G, titleStyle: ce, titleSize: H } = I;
      return dn({ "kaching-bundles-timer-background-color": Ee(Z), "kaching-bundles-timer-text-color": Ee(E), "kaching-bundles-timer-title-alignment": G, "kaching-bundles-timer-title-font-weight": ce ? er(ce) : null, "kaching-bundles-timer-title-font-style": ce ? tr(ce) : null, "kaching-bundles-timer-title-size": H ? H + "px" : null });
    })(l()));
    function c() {
      const I = new Zs(), E = new Zs(I);
      return E.setHours(24, 0, 0, 0), Math.floor((E.getTime() - I.getTime()) / 1e3);
    }
    function i() {
      if (!l().endTimestamp) return 0;
      const I = new Zs();
      return Math.max(0, Math.floor((l().endTimestamp - I.getTime()) / 1e3));
    }
    function s() {
      return l().type === "midnight" ? c() : l().type === "custom" ? i() : 60 * l().minutes;
    }
    let g = Te(lt(s())), h = d(() => l().type !== "custom" || e(g) > 0);
    Je(() => {
      re(g, s(), !0);
    }), Je(() => {
      const I = window.setInterval(() => {
        l().type === "midnight" ? re(g, c(), !0) : l().type === "custom" ? re(g, i(), !0) : re(g, e(g) <= 1 ? s() : e(g) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(I);
    });
    const p = d(() => Ie(o, "$translate", r)(l().title)), v = d(() => (function(I) {
      const E = Math.floor(I / 86400), Z = Math.floor(I % 86400 / 3600), G = Math.floor(I % 3600 / 60), ce = I % 60, H = (W) => W.toString().padStart(2, "0");
      return l().type === "custom" && E > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(E)} ${H(Z)}:${H(G)}:${H(ce)}` : Z > 0 ? `${H(Z)}:${H(G)}:${H(ce)}` : `${H(G)}:${H(ce)}`;
    })(e(g))), b = d(() => e(p).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let y = Te(void 0);
    Je(() => {
      !e(y) || !e(b) || e(y).querySelectorAll(".kaching-bundles__timer-value").forEach((I) => {
        I.textContent = ` ${e(v)} `;
      });
    });
    var m = { get timer() {
      return l();
    }, set timer(I) {
      l(I), _();
    } }, C = De(), P = _e(C), B = (I) => {
      var E = f0(), Z = w(E);
      Ge(w(Z), () => e(b)), x(Z), xl(Z, (G) => re(y, G), () => e(y)), x(E), pe(() => Nt(E, e(u))), f(I, E);
    };
    L(P, (I) => {
      e(h) && I(B);
    }), f(n, C);
    var O = Ke(m);
    return a(), O;
  }
  function kd(n, t) {
    Ye(t, !0);
    const r = k(t, "dealBlockId", 7), a = k(t, "shopCustomStyles", 7), l = k(t, "customStyles", 7), o = d(() => {
      const g = [a(), l()].filter((h) => h == null ? void 0 : h.trim()).join(`
`);
      return g ? `
      <style id="kaching-bundles-custom-styles-${r()}">
        kaching-bundles-block[deal-block-id="${r()}"] {
          ${g}
        }
      </style>
    ` : "";
    });
    var u = { get dealBlockId() {
      return r();
    }, set dealBlockId(g) {
      r(g), _();
    }, get shopCustomStyles() {
      return a();
    }, set shopCustomStyles(g) {
      a(g), _();
    }, get customStyles() {
      return l();
    }, set customStyles(g) {
      l(g), _();
    } }, c = De(), i = _e(c), s = (g) => {
      var h = De();
      Ge(_e(h), () => e(o)), f(g, h);
    };
    return L(i, (g) => {
      e(o) && g(s);
    }), f(n, c), Ke(u);
  }
  Ne(md, { timer: {} }, [], [], !0), Ne(kd, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  function b0(n, t = 4) {
    const r = (function(a) {
      let l = 2166136261;
      for (let o = 0; o < a.length; o++) l ^= a.charCodeAt(o), l = Math.imul(l, 16777619) >>> 0;
      return l >>> 0;
    })(n);
    return (function(a, l) {
      let o = "";
      for (let u = 0; u < l; u++) o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[a % 62] + o, a = Math.floor(a / 62);
      return o;
    })(r, t);
  }
  function yd(n) {
    var t, r, a, l, o;
    const { dealBlock: u, product: c, selectedDealBarId: i, selectedVariantQuantities: s, selectedBundleProducts: g, selectedCollectionBreaksProducts: h, selectedFreeGifts: p, selectedProgressiveGifts: v, selectedCheckboxUpsells: b, selectedUpsells: y, selectedPersonalisations: m, selectedSellingPlan: C, dealBarSellingPlan: P, nativeBundleProductIds: B } = n, O = (function($) {
      var ne;
      const { product: te, selectedVariantQuantities: ie, selectedBundleProducts: X, selectedCollectionBreaksProducts: ve, selectedFreeGifts: Be, selectedProgressiveGifts: oe, selectedCheckboxUpsells: fe, selectedUpsells: ke, selectedSellingPlan: ze, dealBarSellingPlan: he, selectedDealBarId: de, dealBlock: be, bundleNonce: we } = $, Le = X.length > 0 || ve.length > 0 || Be.length > 0 || oe.length > 0 || ke.length > 0, Ce = Be.length > 0 || oe.length > 0 || ke.length > 0, Se = ((ne = be.dealBars.find((ue) => ue.id === de)) == null ? void 0 : ne.dealBarType) === "mix-and-match", Qe = Ce || Se, xe = JSON.stringify([Le ? ie.map(({ variant: ue, quantity: $e }) => ({ variantId: ue.id, quantity: $e })) : te.id, X.map(({ id: ue, variant: $e, quantity: ge }) => ({ id: ue, variantId: $e.id, quantity: ge })), ve.map(({ variant: ue, quantity: $e }) => ({ variantId: ue.id, quantity: $e })), Be.map(({ id: ue, variant: $e, quantity: ge }) => ({ id: ue, variantId: $e.id, quantity: ge })), oe.map(({ id: ue, variants: $e }) => $e.map((ge) => ({ id: ue, variantId: ge.variant.id, quantity: ge.quantity })).flat()).flat(), fe.map(({ id: ue, variant: $e }) => ({ id: ue, variantId: $e.id })), ke.map(({ id: ue, variant: $e, quantity: ge }) => ({ id: ue, variantId: $e.id, quantity: ge })), ze == null ? void 0 : ze.id, he == null ? void 0 : he.id, de, ...Qe ? [we] : []]);
      return b0(xe);
    })(n), I = u.dealBars.find(($) => $.id === i);
    let E = !1;
    I && (!I.dealBarType || I.dealBarType === ht.QuantityBreak || I.dealBarType === ht.Bxgy) && u.dealBars.filter(($) => !$.dealBarType || $.dealBarType === ht.QuantityBreak || $.dealBarType === ht.Bxgy).filter(($) => wd($) === wd(I) && $.id !== i).length > 0 && (E = !0);
    const Z = P != null ? P : C, G = (I == null ? void 0 : I.dealBarType) === ht.Bxgy, ce = s.some(({ variant: $ }) => $.sellingPlans.length > 0), H = G && (ce || n.splitBxgy), W = u.dealBars.some(($) => ($.freeGifts || []).filter((ne) => ne.productGID).length > 0), J = !(!u.progressiveGiftsEnabled || !u.progressiveGifts) && u.progressiveGifts.gifts.some(($) => $.giftType === "product"), Q = u.dealBars.some(($) => ($.upsells || []).length > 0), U = u.nanoId || u.id, z = u.abTestVariantNumber ? Vs(u.abTestVariantNumber) : void 0, D = (I == null ? void 0 : I.dealBarType) === ht.Sku || (I == null ? void 0 : I.dealBarType) === ht.Bundle || (I == null ? void 0 : I.dealBarType) === ht.MixAndMatch || E || H, j = { deal: U, main: !0 };
    u.marketId && (j.market = u.marketId), u.versionId && (j.v = u.versionId), D ? (j.id = O, j.bar = i) : (G || p.length > 0 || v.length > 0 || b.length > 0 || y.length > 0 || h.length > 0 || m.length > 0 || W || J || Q) && (j.id = O), !j.bar && i && (j.bid = i), z && (j.ab = z);
    const Y = { id: O, deal: U, bar: i };
    u.versionId && (Y.v = u.versionId), z && (Y.ab = z);
    const K = [];
    let ee = s, q = [];
    if (H && h.length === 0) {
      const { buy: $, get: ne } = Sd(s, I.getQuantity);
      ee = $, q = ne;
    }
    for (const { variant: $, quantity: ne } of ee) {
      const te = { ...j }, ie = Qn(c, $, Z);
      ie != null && ie.priceAdjustment && I && Pd(I) && (te.sellingPlan = { id: ie.id, priceAdjustment: ie.priceAdjustment });
      const X = { id: $.id, quantity: ne, properties: { __kaching_bundles: JSON.stringify(te) } };
      ie && (X.selling_plan = ie.id), K.push(X);
    }
    const S = ee.length > 0 && !xd(c, B) && (I == null ? void 0 : I.dealBarType) !== ht.MixAndMatch ? ee[0].variant.id : void 0;
    for (const { variant: $, quantity: ne } of q) {
      const te = { ...Y, main: !0, bxgy: !0 }, ie = Qn(c, $, Z);
      ie != null && ie.priceAdjustment && (I == null ? void 0 : I.dealBarType) === ht.Bxgy && I.getDiscountType === "specific" && (te.sellingPlan = { id: ie.id, priceAdjustment: ie.priceAdjustment });
      const X = { id: $.id, quantity: ne, properties: { __kaching_bundles: JSON.stringify(te) } };
      gi(X, S, c, B), ie && (X.selling_plan = ie.id), K.push(X);
    }
    for (const $ of g) {
      const ne = { ...Y, bundleProduct: $.id }, te = Qn($.product, $.variant, Z);
      te != null && te.priceAdjustment && (I == null ? void 0 : I.dealBarType) === ht.Bundle && ((t = I == null ? void 0 : I.bundleProducts.find((X) => X.id === $.id)) == null ? void 0 : t.discountType) === "specific" && (ne.sellingPlan = { id: te.id, priceAdjustment: te.priceAdjustment });
      const ie = { id: $.variant.id, quantity: $.quantity, properties: { __kaching_bundles: JSON.stringify(ne) } };
      gi(ie, S, $.product, B), te && (ie.selling_plan = te.id), K.push(ie);
    }
    let T = h, M = [];
    if (H && h.length > 0) {
      const { buy: $, get: ne } = Sd(h, I.getQuantity);
      T = $, M = ne;
    }
    const R = ((r = u.collectionBreaks) == null ? void 0 : r.visibility) === "deal-products";
    for (const $ of T) {
      if (R) {
        const X = K.find((ve) => ve.id === $.variant.id);
        if (X) {
          X.quantity += $.quantity;
          continue;
        }
      }
      const ne = { ...Y, collectionBreaksProduct: !0 };
      D || delete ne.bar;
      const te = Qn($.product, $.variant, Z);
      te != null && te.priceAdjustment && I && Pd(I) && (ne.sellingPlan = { id: te.id, priceAdjustment: te.priceAdjustment });
      const ie = { id: $.variant.id, quantity: $.quantity, properties: { __kaching_bundles: JSON.stringify(ne) } };
      te && (ie.selling_plan = te.id), K.push(ie);
    }
    for (const $ of M) {
      const ne = { ...Y, collectionBreaksProduct: !0 };
      D || delete ne.bar, ne.bxgy = !0;
      const te = Qn($.product, $.variant, Z);
      te != null && te.priceAdjustment && (I == null ? void 0 : I.dealBarType) === ht.Bxgy && I.getDiscountType === "specific" && (ne.sellingPlan = { id: te.id, priceAdjustment: te.priceAdjustment });
      const ie = { id: $.variant.id, quantity: $.quantity, properties: { __kaching_bundles: JSON.stringify(ne) } };
      te && (ie.selling_plan = te.id), K.push(ie);
    }
    for (const $ of p) {
      if ($.applyOnlyForSubscriptions && !Z) continue;
      const ne = { ...Y, gift: $.id };
      delete ne.bar;
      const te = { id: $.variant.id, quantity: $.quantity, properties: { __kaching_bundles: JSON.stringify(ne) } };
      gi(te, S, $.product, B);
      const ie = Qn($.product, $.variant, Z);
      ie && (te.selling_plan = ie.id), K.push(te);
    }
    for (const $ of v) {
      const ne = { ...Y, gift: $.id };
      delete ne.bar;
      for (const te of $.variants) {
        const ie = { id: te.variant.id, quantity: te.quantity, properties: { __kaching_bundles: JSON.stringify(ne) } };
        gi(ie, S, $.product, B);
        const X = Qn($.product, te.variant, Z);
        X && (ie.selling_plan = X.id), K.push(ie);
      }
    }
    for (const $ of b) {
      const ne = { ...Y, checkboxUpsell: $.id };
      delete ne.bar;
      const te = $.sellingPlan, ie = (a = u.checkboxUpsells) == null ? void 0 : a.upsells.find((ve) => ve.id === $.id);
      te != null && te.priceAdjustment && (ie == null ? void 0 : ie.discountType) === "specific" && (ne.sellingPlan = { id: te.id, priceAdjustment: te.priceAdjustment });
      const X = { id: $.variant.id, quantity: $.quantity, properties: { __kaching_bundles: JSON.stringify(ne) } };
      gi(X, S, $.product, B), te && (X.selling_plan = te.id), K.push(X);
    }
    for (const $ of y) {
      const ne = { ...Y, upsell: $.id };
      delete ne.bar;
      const te = $.sellingPlan;
      te != null && te.priceAdjustment && ((o = (l = I == null ? void 0 : I.upsells) == null ? void 0 : l.find((X) => X.id === $.id)) == null ? void 0 : o.discountType) === "specific" && (ne.sellingPlan = { id: te.id, priceAdjustment: te.priceAdjustment });
      const ie = { id: $.variant.id, quantity: $.quantity, properties: { __kaching_bundles: JSON.stringify(ne) } };
      gi(ie, S, $.product, B), te && (ie.selling_plan = te.id), K.push(ie);
    }
    const ae = [];
    for (const { variant: $, quantity: ne } of ee) for (let te = 0; te < ne; te++) ae.push($.id);
    for (const $ of m) {
      const ne = { ...Y, personalisation: $.id };
      delete ne.bar;
      const te = { id: $.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(ne), [$.valueLabel]: $.text } }, ie = ae[$.productIndex];
      ie && (te.parent_id = ie), K.push(te);
    }
    const N = K.filter(($) => !$.parent_id), A = K.filter(($) => $.parent_id);
    return [...N.reverse(), ...A];
  }
  function xd(n, t) {
    return t.includes(n.id) || n.isNativeBundle === !0;
  }
  function gi(n, t, r, a) {
    t && t !== n.id && (xd(r, a) || (n.parent_id = t));
  }
  function wd(n) {
    switch (n.dealBarType) {
      case void 0:
      case ht.QuantityBreak:
        return Number(n.quantity);
      case ht.Bxgy:
        return Number(n.buyQuantity) + Number(n.getQuantity);
      case ht.Bundle:
        return n.bundleProducts[0].quantity;
      case ht.MixAndMatch:
      case ht.Sku:
        return 1;
    }
  }
  function Pd(n) {
    switch (n.dealBarType) {
      case void 0:
      case ht.QuantityBreak:
        return n.discountType === "specific";
      case ht.Bundle:
        return n.bundleProducts[0].discountType === "specific";
      case ht.Bxgy:
        return n.buyDiscountType === "specific";
      case ht.MixAndMatch:
        return n.discountType === "specific";
      case ht.Sku:
        return !1;
    }
  }
  function Sd(n, t) {
    const r = [...n].sort((u, c) => u.variant.price - c.variant.price), a = [], l = [];
    let o = t;
    for (const u of r) {
      const c = Math.min(o, u.quantity), i = u.quantity - c;
      c > 0 && l.push({ ...u, quantity: c }), i > 0 && a.push({ ...u, quantity: i }), o -= c;
    }
    return { buy: a, get: l };
  }
  function v0(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  var _0 = V('<img class="kaching-bundles__bar-image" alt=""/>'), m0 = V('<div class="kaching-bundles__bar-radio"></div>'), k0 = V('<span class="kaching-bundles__bar-title"><!></span>'), y0 = V('<span class="kaching-bundles__bar-label"><!></span>'), x0 = V('<div class="kaching-bundles__bar-subtitle"><!></div>'), w0 = V('<div class="kaching-bundles__bar-full-price"><!></div>'), P0 = V('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), S0 = V('<div class="kaching-bundles__bar-selling-plan"><!></div>'), B0 = V('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), C0 = V('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function Bd(n, t) {
    Ye(t, !0);
    const r = () => Ie(E, "$formatPrice", o), a = () => Ie(I, "$translate", o), l = () => Ie(Z, "$getMediaImageUrl", o), [o, u] = kt();
    let c = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), s = k(t, "otherProducts", 23, () => []), g = k(t, "complementaryProducts", 23, () => []), h = k(t, "selectedDealBarIndex", 7, null), p = k(t, "componentId", 7), v = k(t, "selected", 7, !1), b = k(t, "globalSellingPlan", 7, void 0), y = k(t, "onProgressiveGiftsChange", 7), m = k(t, "onDealBarSelect", 7), C = k(t, "onDealBarDeselect", 7), P = k(t, "onVariantsChange", 7), B = k(t, "onPersonalisationsChange", 7), O = k(t, "personalisationInitialValues", 23, () => []);
    const I = Dt(), E = sn(), Z = An();
    let G = Te(lt([])), ce = Te(lt([])), H = Te(lt([])), W = !1;
    const J = d(() => i().productGID ? s().find((Me) => Me.id === Rt(i().productGID)) : void 0);
    let Q = Te(void 0);
    const U = d(() => (function(Me, Ze, bt) {
      if (Me !== void 0 && bt && bt.variants.some((ct) => ct.id === Me))
        return Me;
      if (Ze.variantGID) return Rt(Ze.variantGID);
      if (bt && bt.variants.length > 0) return bt.variants[0].id;
    })(e(Q), i(), e(J))), z = d(() => e(U) && e(J) ? e(J).variants.find((Me) => Me.id === e(U)) : void 0), D = d(() => e(z) ? [{ variant: e(z), quantity: 1 }] : []);
    let j = Te(void 0);
    const Y = d(() => e(J) && e(z) ? ji(e(J), [e(z)]) : []), K = d(() => {
      var Me, Ze;
      return (i().sellingPlanEnabled || c().subscriptionsEnabled && ((Me = c().subscriptions) == null ? void 0 : Me.layout) === "link" && ((Ze = c().subscriptions) == null ? void 0 : Ze.subscribeByDefault)) && (!c().subscriptionsEnabled || !!b());
    }), ee = d(() => e(K) ? Os(i(), e(Y), e(j)) : void 0), q = d(() => {
      var Me;
      return (Me = e(ee)) != null ? Me : e(J) && e(z) ? Qn(e(J), e(z), b()) : void 0;
    }), S = d(() => e(z) ? Li(e(z), e(q)) : 0), T = d(() => e(z) ? (function(Me, Ze) {
      return Me.useProductCompareAtPrice && Ze.compareAtPrice ? Math.max(Ze.price, Ze.compareAtPrice) : Ze.price;
    })(c(), e(z)) : 0), M = d(() => Ei(e(T), e(G), e(ce))), R = d(() => e(M) > e(S)), ae = d(() => gn({ priceFormatter: r(), product: e(J), dealBar: i(), totalFullPrice: e(T), totalCompareAtPrice: e(M), totalDiscountedPrice: e(S), quantity: 1, unitQuantity: cr(e(D)), sellingPlan: e(q) })), N = d(() => e(ae)(a()(i().title))), A = d(() => e(ae)(a()(i().subtitle))), $ = d(() => e(ae)(a()(i().label))), ne = d(() => e(ae)(a()(i().badgeText))), te = d(() => l()(i().badgeImageGID)), ie = d(() => `${i().id}_${p()}`), X = d(() => l()(i().mediaImageGID) || Ri), ve = fn(), Be = d(() => e(J) && e(J).variants.length > 1 && !i().variantGID && v()), oe = d(() => e(J) && Ie(ve, "$config", o).featureFlags.variant_images && new Set(e(J).variants.map((Me) => Me.image).filter((Me) => Me)).size > 1), fe = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? Ni(i().showAsSoldOut) : "");
    function ke(Me) {
      re(Q, Me, !0);
    }
    Je(() => {
      !v() || !e(z) && e(J) || (e(G), e(H), e(ce), e(U), e(q), en(() => {
        W || (W = !0, m()({ dealBarId: i().id, preselected: !0 })), (function() {
          const Me = e(S) + e(H).reduce((We, wt) => We + wt.discountedPrice, 0), Ze = e(G).reduce((We, wt) => wt.showPrice ? We + wt.fullPrice : We, 0) + e(ce).reduce((We, wt) => We + wt.fullPrice * wt.quantity, 0), bt = e(T) + e(H).reduce((We, wt) => We + wt.fullPrice, 0) + Ze, ct = e(z) ? e(z).price : 0, vt = e(z) ? e(z).sellingPlans.map((We) => ({ sellingPlanId: We.id, discountedPrice: We.price })) : [], yt = { discountedPrice: Me, fullPrice: bt, giftValue: Ze, discountedPricePerItem: e(S), fullPricePerItem: e(T), discountedPriceWithoutSellingPlan: ct, discountedPricesForSellingPlans: vt };
          P()({ variants: e(D), freeGifts: [...e(G), ...e(ce)], upsells: e(H), dealBarSellingPlan: e(ee), pricing: yt, product: e(J) });
        })();
      }));
    });
    var ze = { get dealBlock() {
      return c();
    }, set dealBlock(Me) {
      c(Me), _();
    }, get dealBar() {
      return i();
    }, set dealBar(Me) {
      i(Me), _();
    }, get otherProducts() {
      return s();
    }, set otherProducts(Me = []) {
      s(Me), _();
    }, get complementaryProducts() {
      return g();
    }, set complementaryProducts(Me = []) {
      g(Me), _();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(Me = null) {
      h(Me), _();
    }, get componentId() {
      return p();
    }, set componentId(Me) {
      p(Me), _();
    }, get selected() {
      return v();
    }, set selected(Me = !1) {
      v(Me), _();
    }, get globalSellingPlan() {
      return b();
    }, set globalSellingPlan(Me = void 0) {
      b(Me), _();
    }, get onProgressiveGiftsChange() {
      return y();
    }, set onProgressiveGiftsChange(Me) {
      y(Me), _();
    }, get onDealBarSelect() {
      return m();
    }, set onDealBarSelect(Me) {
      m(Me), _();
    }, get onDealBarDeselect() {
      return C();
    }, set onDealBarDeselect(Me) {
      C(Me), _();
    }, get onVariantsChange() {
      return P();
    }, set onVariantsChange(Me) {
      P(Me), _();
    }, get onPersonalisationsChange() {
      return B();
    }, set onPersonalisationsChange(Me) {
      B(Me), _();
    }, get personalisationInitialValues() {
      return O();
    }, set personalisationInitialValues(Me = []) {
      O(Me), _();
    } }, he = C0();
    let de;
    var be = w(he);
    Wr(be), be.__change = [v0, m, i];
    var we = F(be, 2);
    let Le;
    var Ce = w(we);
    {
      let Me = d(() => e(ne) || void 0);
      Va(Ce, { get style() {
        return i().badgeStyle;
      }, get text() {
        return e(Me);
      }, get imageUrl() {
        return e(te);
      }, get blockLayout() {
        return c().blockLayout;
      } });
    }
    var Se = F(Ce, 2), Qe = w(Se);
    Et(Qe, { element: "div", class: "kaching-bundles__bar-main", onclick: function(Me) {
      v() && (Me.preventDefault(), Me.stopPropagation(), C()());
    }, children: (Me, Ze) => {
      var bt = P0(), ct = _e(bt), vt = (le) => {
        var Oe = _0();
        pe(() => Pe(Oe, "src", e(X))), f(le, Oe);
      }, yt = (le) => {
        f(le, m0());
      };
      L(ct, (le) => {
        i().mediaImageGID ? le(vt) : le(yt, !1);
      });
      var We = F(ct, 2), wt = w(We), tn = w(wt), mn = w(tn);
      Xe(mn, () => e(N), (le) => {
        var Oe = k0();
        Ge(w(Oe), () => e(N)), x(Oe), f(le, Oe);
      });
      var kn = F(mn, 2), Ct = (le) => {
        var Oe = De();
        Xe(_e(Oe), () => e($), (Ve) => {
          var Ue = y0();
          Ge(w(Ue), () => e($)), x(Ue), f(Ve, Ue);
        }), f(le, Oe);
      };
      L(kn, (le) => {
        e($) && le(Ct);
      }), x(tn);
      var Wt = F(tn, 2), Jt = w(Wt), on = (le) => {
        var Oe = De();
        Xe(_e(Oe), () => e(A), (Ve) => {
          var Ue = x0();
          Ge(w(Ue), () => e(A)), x(Ue), f(Ve, Ue);
        }), f(le, Oe);
      };
      L(Jt, (le) => {
        e(A) && le(on);
      });
      var yn = F(Jt, 2), On = (le) => {
        Jr(le, { get dealBlock() {
          return c();
        }, get variant() {
          return e(z);
        } });
      };
      L(yn, (le) => {
        e(Be) || le(On);
      }), x(Wt), x(wt);
      var $n = F(wt, 2), me = w($n);
      Xe(me, () => e(S), (le) => {
        Dr(le, { get amount() {
          return e(S);
        }, get showPricesPerItem() {
          return c().showPricesPerItem;
        }, get unitLabel() {
          return c().unitLabel;
        } });
      });
      var tt = F(me, 2), pt = (le) => {
        var Oe = De();
        Xe(_e(Oe), () => e(M), (Ve) => {
          var Ue = w0();
          Ge(w(Ue), () => r()(e(M))), x(Ue), pe((He) => Pe(Ue, "data-a11y-label", He), [() => a()("system.original_price")]), f(Ve, Ue);
        }), f(le, Oe);
      };
      L(tt, (le) => {
        e(R) && le(pt);
      }), x($n), x(We), f(Me, bt);
    }, $$slots: { default: !0 } });
    var xe = F(Qe, 2), ue = (Me) => {
      ua(Me, { get highlights() {
        return i().highlights;
      }, get isSelected() {
        return v();
      }, get replaceLiquid() {
        return e(ae);
      } });
    };
    L(xe, (Me) => {
      i().highlights && Me(ue);
    });
    var $e = F(xe, 2), ge = (Me) => {
      var Ze = S0(), bt = w(Ze);
      {
        let ct = d(() => e(ee) || e(Y)[0]);
        ca(bt, { get sellingPlans() {
          return e(Y);
        }, get selectedSellingPlan() {
          return e(ct);
        }, onChange: (vt) => {
          re(j, vt, !0);
        } });
      }
      x(Ze), f(Me, Ze);
    };
    L($e, (Me) => {
      v() && e(K) && !i().sellingPlanGid && e(Y).length > 1 && Me(ge);
    });
    var Re = F($e, 2), nt = (Me) => {
      var Ze = B0(), bt = w(Ze);
      Hr(bt, { get product() {
        return e(J);
      } });
      var ct = F(bt, 2), vt = w(ct);
      {
        let yt = d(() => e(U) || 0);
        Gn(vt, { get product() {
          return e(J);
        }, get selectedVariantId() {
          return e(yt);
        }, get showImage() {
          return e(oe);
        }, onChange: ke });
      }
      Jr(F(vt, 2), { get dealBlock() {
        return c();
      }, get variant() {
        return e(z);
      } }), x(ct), x(Ze), f(Me, Ze);
    };
    L(Re, (Me) => {
      e(Be) && e(J) && Me(nt);
    });
    var et = F(Re, 2), je = (Me) => {
      {
        let Ze = d(() => [e(U)]);
        qa(Me, { get productPersonalisation() {
          return i().productPersonalisation;
        }, get product() {
          return e(J);
        }, get selectedVariantIds() {
          return e(Ze);
        }, quantity: 1, get addPersonalisationModal() {
          return c().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return B();
        }, get initialValues() {
          return O();
        } });
      }
    };
    L(et, (Me) => {
      v() && i().productPersonalisation && e(J) && e(U) && (c().blockLayout === "vertical" || c().blockLayout === "plain") && Me(je);
    }), x(Se);
    var dt = F(Se, 2);
    {
      let Me = d(() => i().upsells || []);
      oi(dt, { get dealBlock() {
        return c();
      }, get upsells() {
        return e(Me);
      }, get otherProducts() {
        return s();
      }, get complementaryProducts() {
        return g();
      }, get dealBarSelected() {
        return v();
      }, get dealSellingPlan() {
        return e(q);
      }, onChange: (Ze) => {
        re(H, Ze, !0);
      } });
    }
    var at = F(dt, 2);
    di(at, { get selectedDealBarIndex() {
      return h();
    }, get onChange() {
      return y();
    }, get dealBlock() {
      return c();
    }, get dealBar() {
      return i();
    }, get selected() {
      return v();
    }, get otherProducts() {
      return s();
    }, get progressiveGifts() {
      return c().progressiveGifts;
    } });
    var ot = F(at, 2);
    {
      let Me = d(() => i().freeGifts || []);
      si(ot, { get dealBlock() {
        return c();
      }, get freeGifts() {
        return e(Me);
      }, get freeGiftsSummary() {
        return i().freeGiftsSummary;
      }, get otherProducts() {
        return s();
      }, get dealBarSelected() {
        return v();
      }, get sellingPlan() {
        return e(q);
      }, onChange: (Ze) => {
        re(G, Ze, !0);
      } });
    }
    var rt = F(ot, 2);
    {
      let Me = d(() => i().multipleGiftsSelectors || []);
      ui(rt, { get dealBlock() {
        return c();
      }, get multipleGiftsSelectors() {
        return e(Me);
      }, get sellingPlan() {
        return e(q);
      }, get otherProducts() {
        return s();
      }, onChange: (Ze) => {
        re(ce, Ze, !0);
      } });
    }
    x(we);
    var ft = F(we, 2), Tt = (Me) => {
      ci(Me, { get showAsSoldOut() {
        return i().showAsSoldOut;
      }, get replaceLiquid() {
        return e(ae);
      } });
    };
    L(ft, (Me) => {
      i().showAsSoldOutEnabled && i().showAsSoldOut && Me(Tt);
    }), x(he), pe((Me, Ze) => {
      var bt;
      de = At(he, 1, "kaching-bundles__bar", null, de, Me), Pe(he, "data-deal-bar-id", i().id), Nt(he, e(fe)), Pe(be, "name", `kaching-bundles-deal-${(bt = p()) != null ? bt : ""}`), Ia(be, i().id), Pe(be, "id", e(ie)), qi(be, v()), be.disabled = i().showAsSoldOutEnabled, Pe(we, "for", e(ie)), Le = At(we, 1, "kaching-bundles__bar-container", null, Le, Ze);
    }, [() => ({ "kaching-bundles__bar--selected": v() }), () => ({ "kaching-bundles__bar-container--sold-out": i().showAsSoldOutEnabled })]), f(n, he);
    var $t = Ke(ze);
    return u(), $t;
  }
  Dn(["change"]), Ne(Bd, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var I0 = V('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function Cd(n, t) {
    Ye(t, !0);
    const r = () => Ie(i, "$config", a), [a, l] = kt();
    let o = k(t, "collectionBreaks", 7), u = k(t, "hasItemsToSelect", 7);
    const c = Dt(), i = fn(), s = d(() => {
      var C;
      return (C = o()) == null ? void 0 : C.requireItemSelectionAlert;
    }), g = d(() => r().preview && r().previewAlerts || Ie(to, "$requireSelectionError", a)), h = d(() => {
      var C;
      return e(g) && ((C = o()) == null ? void 0 : C.requireItemSelectionEnabled) && e(s) && u();
    });
    var p = { get collectionBreaks() {
      return o();
    }, set collectionBreaks(C) {
      o(C), _();
    }, get hasItemsToSelect() {
      return u();
    }, set hasItemsToSelect(C) {
      u(C), _();
    } }, v = De(), b = _e(v), y = (C) => {
      var P = I0(), B = F(w(P));
      x(P), pe((O) => mt(B, ` ${O != null ? O : ""}`), [() => Ie(c, "$translate", a)(e(s).text)]), f(C, P);
    };
    L(b, (C) => {
      e(h) && e(s) && C(y);
    }), f(n, v);
    var m = Ke(p);
    return l(), m;
  }
  Ne(Cd, { collectionBreaks: {}, hasItemsToSelect: {} }, [], [], !0);
  var M0 = V('<span class="kaching-bundles-savings-summary__icon"><img alt=""/></span>'), z0 = V('<span class="kaching-bundles-savings-summary__icon"><!></span>'), D0 = V('<div class="kaching-bundles-savings-summary"><!> <span class="kaching-bundles-savings-summary__title"><!></span></div>');
  function Id(n, t) {
    Ye(t, !0);
    const [r, a] = kt(), l = k(t, "savingsSummary", 7), o = k(t, "totalFullPrice", 7), u = k(t, "totalDiscountedPrice", 7), c = k(t, "quantity", 7), i = k(t, "product", 7), s = sn(), g = Dt(), h = An(), p = d(() => ((H) => dn({ "kaching-bundles-savings-summary-background-color": Ee(H.backgroundColor), "kaching-bundles-savings-summary-text-color": Ee(H.textColor), "kaching-bundles-savings-summary-value-color": Ee(H.valueColor), "kaching-bundles-savings-summary-icon-color": Ee(H.iconColor), "kaching-bundles-savings-summary-border-color": Ee(H.borderColor), "kaching-bundles-savings-summary-alignment": { start: "flex-start", center: "center", end: "flex-end" }[H.titleAlignment], "kaching-bundles-savings-summary-border-width": H.borderWidth + "px", "kaching-bundles-savings-summary-border-radius": H.borderRadius + "px", "kaching-bundles-savings-summary-title-font-size": H.titleFont.size + "px", "kaching-bundles-savings-summary-title-font-style": tr(H.titleFont.style), "kaching-bundles-savings-summary-title-font-weight": er(H.titleFont.style) }))(l())), v = d(() => l().iconType), b = d(() => Uu[e(v)]), y = d(() => e(v) === "custom" ? Ie(h, "$getMediaImageUrl", r)(l().customIconGID) : void 0), m = d(() => gn({ priceFormatter: Ie(s, "$formatPrice", r), product: i(), totalFullPrice: o(), totalDiscountedPrice: u(), quantity: c(), unitQuantity: null })), C = d(() => ((H) => H.replace(vu, '<span class="kaching-bundles-savings-summary__value">$&</span>'))(Ie(g, "$translate", r)(l().title))), P = d(() => e(m)(e(C)));
    var B = { get savingsSummary() {
      return l();
    }, set savingsSummary(H) {
      l(H), _();
    }, get totalFullPrice() {
      return o();
    }, set totalFullPrice(H) {
      o(H), _();
    }, get totalDiscountedPrice() {
      return u();
    }, set totalDiscountedPrice(H) {
      u(H), _();
    }, get quantity() {
      return c();
    }, set quantity(H) {
      c(H), _();
    }, get product() {
      return i();
    }, set product(H) {
      i(H), _();
    } }, O = D0(), I = w(O), E = (H) => {
      var W = M0(), J = w(W);
      x(W), pe(() => Pe(J, "src", e(y))), f(H, W);
    }, Z = (H) => {
      var W = De(), J = _e(W), Q = (U) => {
        var z = z0();
        xc(w(z), () => e(b), (D, j) => {
          j(D, {});
        }), x(z), f(U, z);
      };
      L(J, (U) => {
        e(b) && U(Q);
      }, !0), f(H, W);
    };
    L(I, (H) => {
      e(v) === "custom" && e(y) ? H(E) : H(Z, !1);
    });
    var G = F(I, 2);
    Ge(w(G), () => e(P)), x(G), x(O), pe(() => Nt(O, e(p))), f(n, O);
    var ce = Ke(B);
    return a(), ce;
  }
  Ne(Id, { savingsSummary: {}, totalFullPrice: {}, totalDiscountedPrice: {}, quantity: {}, product: {} }, [], [], !0);
  var $0 = V('<div class="kaching-bundles__block-title"><!></div>'), A0 = V("<!> <!>", 1), V0 = V('<div class="kaching-bundles__out-of-stock"><!></div>'), q0 = V('<div class="kaching-bundles"><div><!> <!> <div></div> <!> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function Md(n, t) {
    var r, a, l, o, u, c;
    Ye(t, !0);
    const i = () => Ie(j, "$formatPrice", g), s = () => Ie(K, "$translate", g), [g, h] = kt();
    let p = k(t, "component", 7), v = k(t, "config", 7), b = k(t, "translations", 23, () => ({})), y = k(t, "dealBlock", 7), m = k(t, "product", 7), C = k(t, "currentVariantId", 7), P = k(t, "sellingPlanId", 15), B = k(t, "selectedDealBarId", 15), O = k(t, "quantity", 15), I = k(t, "mediaImages", 23, () => []), E = k(t, "otherProducts", 23, () => []), Z = k(t, "collectionBreaksProducts", 23, () => []), G = k(t, "complementaryProducts", 23, () => []), ce = k(t, "nativeBundleProductIds", 23, () => []), H = k(t, "compact", 7, !1), W = k(t, "variantBadges", 23, () => []);
    const J = d(() => y().hideUnavailableOptions ? or(m()) : m()), Q = d(() => y().hideUnavailableOptions ? E().map(or) : E()), U = d(() => y().hideUnavailableOptions ? G().map(or) : G()), z = d(() => y().hideUnavailableOptions ? Z().map(or) : Z()), { setConfig: D } = Aa(v()), { formatPrice: j, setMoneyFormat: Y } = ii(v().moneyFormat, (r = y()) == null ? void 0 : r.showPricesWithoutDecimals), { translate: K, setTranslations: ee } = $a(b()), { setMediaImages: q } = Fi(I()), { setVariantBadges: S } = Au(W()), { setSwatchSettings: T } = Ti({ swatchOptions: ((a = y()) == null ? void 0 : a.swatchOptions) || [], swatchSize: (l = y()) == null ? void 0 : l.swatchSize, swatchShape: (o = y()) == null ? void 0 : o.swatchShape, showSelectedSwatchName: (c = (u = y()) == null ? void 0 : u.showSelectedSwatchName) != null && c });
    let M = Te(lt(Math.random()));
    function R() {
      return { dealBlock: y(), product: e(bt), selectedDealBarId: B(), selectedVariantQuantities: e($), selectedBundleProducts: e(ne), selectedCollectionBreaksProducts: e(te), selectedFreeGifts: e(ie), selectedProgressiveGifts: e(X), selectedCheckboxUpsells: e(ve), selectedUpsells: e(Be), selectedPersonalisations: e(oe), selectedSellingPlan: e(vt), dealBarSellingPlan: e(ke), nativeBundleProductIds: ce(), bundleNonce: e(M), splitBxgy: v().featureFlags.split_bxgy_items };
    }
    function ae() {
      return yd(R());
    }
    Ca(() => {
      sr(p(), "kaching-bundles-block-loaded", { component: p() }, !1);
    }), Je(() => {
      D(v());
    }), Je(() => {
      Y(v().moneyFormat, !!y().showPricesWithoutDecimals);
    }), Je(() => {
      ee(b());
    }), Je(() => {
      q(I());
    }), Je(() => {
      S(W());
    }), Je(() => {
      var se;
      T({ swatchOptions: y().swatchOptions || [], swatchSize: y().swatchSize, swatchShape: y().swatchShape, showSelectedSwatchName: (se = y().showSelectedSwatchName) != null && se });
    });
    let N = 0;
    Je(() => {
      N === 0 && ce().length > 0 && Ze({ pricing: e(we) }), N = ce().length;
    });
    let A = Math.random().toString(16).slice(2), $ = Te(lt([])), ne = Te(lt([])), te = Te(lt([])), ie = Te(lt([])), X = Te(lt([])), ve = Te(lt([])), Be = Te(lt([])), oe = Te(lt([])), fe = new Sb(), ke = Te(void 0), ze = Te(lt({ discountedPrice: 0, fullPrice: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] })), he = Te(void 0), de = Te(!1), be = Te(lt({ requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0 })), we = Te(lt({ discountedPrice: 0, fullPrice: 0, giftValue: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    Je(() => {
      C() && !B() && (e(vt), en(() => {
        (function() {
          const se = m().variants.find((it) => it.id === C());
          if (!se) return;
          re($, [{ variant: se, quantity: 1 }], !0);
          let Ae = se.price;
          if (e(vt)) {
            const it = se.sellingPlans.find((Ut) => Ut.id === e(vt).id);
            it && (Ae = it.price);
          }
          const qe = se.compareAtPrice && se.compareAtPrice > se.price ? se.compareAtPrice : se.price, Fe = m().sellingPlans.map((it) => ({ sellingPlanId: it.id, discountedPrice: Li(se, it) }));
          re(we, { discountedPrice: Ae, fullPrice: qe, giftValue: 0, discountedPricePerItem: Ae, fullPricePerItem: qe, discountedPriceWithoutSellingPlan: se.price, discountedPricesForSellingPlans: Fe }, !0), Ze({ pricing: e(we) });
        })();
      }));
    });
    let Le = d(() => nu(y())), Ce = d(() => s()(y().blockTitle));
    const Se = y().preselectedDealBarId ? y().dealBars.find((se) => se.id === y().preselectedDealBarId) : void 0;
    function Qe(se) {
      return !se.dealBarType || se.dealBarType === ht.QuantityBreak || se.dealBarType === ht.Bxgy;
    }
    function xe(se) {
      switch (se.dealBarType) {
        case void 0:
        case ht.QuantityBreak:
          return Number(se.quantity);
        case ht.Bxgy:
          return Number(se.buyQuantity) + Number(se.getQuantity);
        case ht.Bundle:
          return se.bundleProducts[0].quantity;
        case ht.MixAndMatch:
        case ht.Sku:
          return 1;
      }
    }
    function ue(se) {
      var Ae, qe;
      B() !== se && (B() && fe.set(B(), e(oe)), re(oe, (Ae = fe.get(se)) != null ? Ae : [], !0), ((qe = y().progressiveGifts) == null ? void 0 : qe.layout) === "deal-bar" && re(X, [], !0)), B(se);
    }
    function $e(se) {
      const { dealBarId: Ae, dealBarQuantity: qe, preselected: Fe } = se;
      ue(Ae), Ui(!1), v().keepQuantityInput && qe && O(qe), sr(p(), "deal-bar-selected", { dealBarId: Ae, preselected: Fe });
    }
    function ge(se) {
      const Ae = y().dealBars[se];
      Ae && ue(Ae.id);
    }
    function Re() {
      v().ignoreDeselect || (B(void 0), re(ie, [], !0), re(X, [], !0), re(Be, [], !0), re(ne, [], !0), re(te, [], !0), re(oe, [], !0), fe.clear(), re(ke, void 0), Ui(!1), sr(p(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function nt(se) {
      const { variantId: Ae } = se;
      sr(p(), "variant-selected", { variantId: Ae });
    }
    function et(se) {
      const { bundleProducts: Ae, freeGifts: qe, upsells: Fe, pricing: it } = se, Ut = [{ variant: Ae[0].variant, quantity: Ae[0].quantity }];
      re($, Ut, !0), re(ne, Ae.slice(1), !0), re(ie, qe, !0), re(Be, Fe, !0), re(te, [], !0), re(ke, void 0), re(he, void 0), re(we, it, !0), re(de, Me(e($)), !0), Ze({ pricing: it });
    }
    function je(se) {
      const { variants: Ae, freeGifts: qe, upsells: Fe, pricing: it, validation: Ut } = se;
      re(be, Ut, !0);
      const Bn = [{ variant: Ae[0].variant, quantity: Ae[0].quantity }], ur = Ae.slice(1);
      re($, Bn, !0), re(ie, qe, !0), re(Be, Fe, !0), re(ne, [], !0), re(te, ur, !0), re(ke, se.dealBarSellingPlan, !0), re(he, void 0), re(we, it, !0), re(de, Me(e($)), !0), Ze({ pricing: it });
    }
    function dt(se) {
      const { variants: Ae, freeGifts: qe, upsells: Fe, pricing: it } = se;
      re($, Ae, !0), re(ie, qe, !0), re(Be, Fe, !0), re(ne, [], !0), re(te, [], !0), re(ke, se.dealBarSellingPlan, !0), re(he, void 0), re(we, it, !0), re(de, Me(e($)), !0), Ze({ pricing: it });
    }
    function at(se) {
      var Ae;
      const { variants: qe, freeGifts: Fe, upsells: it, pricing: Ut, product: Bn } = se;
      re($, qe, !0), re(ie, Fe, !0), re(Be, it, !0), re(ne, [], !0), re(te, [], !0), re(ke, se.dealBarSellingPlan, !0), ((Ae = e(he)) == null ? void 0 : Ae.id) !== (Bn == null ? void 0 : Bn.id) && re(he, Bn, !0), re(we, Ut, !0), re(de, Me(e($)), !0), Ze({ pricing: Ut });
    }
    function ot(se) {
      P(se == null ? void 0 : se.id);
    }
    function rt(se) {
      sr(p(), "add-to-cart-requested", { items: yd({ ...R(), selectedSellingPlan: se, dealBarSellingPlan: void 0 }) });
    }
    function ft(se) {
      re(X, se, !0), Ze({ pricing: e(we) });
    }
    function Tt(se, Ae) {
      re(ve, se, !0), re(ze, Ae, !0), Ze({ pricing: e(we) });
    }
    function $t(se) {
      re(oe, se, !0), Ze({ pricing: e(we) });
    }
    function Me(se) {
      return se.some(({ variant: Ae, quantity: qe }) => !!Ae && !!Ae.inventoryManagement && Ae.inventoryPolicy === "deny" && Ae.inventoryQuantity !== null && qe > Ae.inventoryQuantity);
    }
    function Ze({ pricing: se }) {
      const Ae = e($).map(({ variant: Qt, quantity: Xt }) => ({ variantId: Qt.id, quantity: Xt })), qe = e(ie).map(({ id: Qt, variant: Xt, quantity: Nn }) => ({ id: Qt, variantId: Xt.id, quantity: Nn })), Fe = e(Be).map(({ id: Qt, variant: Xt, quantity: Nn }) => ({ id: Qt, variantId: Xt.id, quantity: Nn })), it = e(ne).map(({ id: Qt, variant: Xt, quantity: Nn }) => ({ id: Qt, variantId: Xt.id, quantity: Nn })), Ut = se.discountedPrice + e(ze).discountedPrice, Bn = se.fullPrice + e(ze).fullPrice, ur = { discountedPrice: Ut, fullPrice: Bn, discountedPriceWithoutSellingPlan: se.discountedPriceWithoutSellingPlan + e(ze).discountedPriceWithoutSellingPlan, discountedPricesForSellingPlans: se.discountedPricesForSellingPlans.map((Qt) => {
        var Xt, Nn;
        const da = (Nn = (Xt = e(ze).discountedPricesForSellingPlans.find((xr) => xr.sellingPlanId === Qt.sellingPlanId)) == null ? void 0 : Xt.discountedPrice) != null ? Nn : e(ze).discountedPriceWithoutSellingPlan;
        return { sellingPlanId: Qt.sellingPlanId, discountedPrice: Qt.discountedPrice + da };
      }) };
      B() && e(me) ? Ta.set({ id: B(), dealBar: e(me), product: e(bt), quantity: e($).reduce((Qt, { quantity: Xt }) => Qt + Xt, 0), pricing: ur }) : Ta.set({ id: null, dealBar: null, product: e(bt), quantity: 1, pricing: ur }), sr(p(), "variants-changed", { variantIdQuantities: Ae, freeGifts: qe, upsells: Fe, bundleProducts: it, pricing: { discountedPrice: { amount: Ut, formatted: i()(Ut) }, fullPrice: { amount: Bn, formatted: i()(Bn) }, discountedPricePerItem: { amount: se.discountedPricePerItem, formatted: i()(se.discountedPricePerItem) }, fullPricePerItem: { amount: se.fullPricePerItem, formatted: i()(se.fullPricePerItem) } }, formattedPrice: i()(se.discountedPrice), validation: e(be) }), sr(p(), "items-changed", {});
    }
    Se != null && Se.hideBehindScratchOff && y().scratchOffEnabled && (v().preview ? v().previewScratchOff : m().availableForSale) || B(B() || y().preselectedDealBarId || void 0), Je(() => {
      O() && y() && en(() => {
        if (!B()) return;
        const se = y().dealBars.find((Ae) => Ae.id === B());
        se && Qe(se) && xe(se) !== O() && (function(Ae, qe) {
          if (!B()) return;
          const Fe = Ae.dealBars.slice().sort((Ut, Bn) => xe(Ut) - xe(Bn));
          let it = Fe[0];
          for (const Ut of Fe) if (Qe(Ut)) {
            if (xe(Ut) > qe) break;
            it = Ut;
          }
          it.id !== B() && (ue(it.id), sr(p(), "deal-bar-selected", { dealBarId: it.id, preselected: !1 }));
        })(y(), O());
      });
    });
    const bt = d(() => e(he) || m()), ct = d(() => {
      const se = e($).map(({ variant: Ae }) => Ae);
      return e(bt).sellingPlans.filter((Ae) => se.some((qe) => qe.sellingPlans.some((Fe) => Fe.id === Ae.id)));
    }), vt = d(() => e(ct).find((se) => se.id === P())), yt = d(() => P() ? e(bt).sellingPlans.find((se) => se.id === P()) : void 0), We = d(() => Fs(e(ke), e(yt), e(ct), e(bt).requiresSellingPlan)), wt = d(() => e(we).giftValue + e(X).reduce((se, Ae) => se + Ae.variants.reduce((qe, { variant: Fe, quantity: it }) => qe + Fe.price * it, 0), 0)), tn = d(() => {
      var se, Ae;
      return (Ae = (se = y().savingsSummary) == null ? void 0 : se.includeGiftValue) != null && Ae;
    }), mn = d(() => ((se, Ae, qe, Fe) => {
      const it = se.fullPrice - se.giftValue + Ae.fullPrice + (Fe ? qe : 0), Ut = se.discountedPrice + Ae.discountedPrice;
      return { fullPrice: it, discountedPrice: Ut, saved: it - Ut };
    })(e(we), e(ze), e(wt), e(tn))), kn = d(() => {
      var se;
      return ((Ae, qe) => Ae + qe.reduce((Fe, { quantity: it }) => Fe + it, 0))(((se = Ie(Ta, "$selectedDealBarStore", g)) == null ? void 0 : se.quantity) || 1, e(ve));
    });
    let Ct = d(() => y().subscriptionsEnabled && y().subscriptions && (e(ct).length > 0 || v().preview)), Wt = d(() => {
      var se, Ae;
      return e(Ct) && ((se = y().subscriptions) == null ? void 0 : se.showPrices) && ((Ae = y().subscriptions) == null ? void 0 : Ae.hideDealBarPrices);
    }), Jt = d(() => B() ? y().dealBars.findIndex((se) => se.id === B()) : null);
    const on = d(() => y().scratchOffEnabled ? y().scratchOff : null), yn = d(() => (y().blockLayout === "vertical" || y().blockLayout === "plain") && (v().preview || m().availableForSale)), On = d(() => y().dealBars.reduce((se, Ae) => {
      const qe = e(on) && e(yn) && Ae.hideBehindScratchOff, Fe = se[se.length - 1];
      return qe && (Fe == null ? void 0 : Fe.type) === "scratch" ? Fe.bars.push(Ae) : qe ? se.push({ type: "scratch", key: Ae.id, bars: [Ae] }) : se.push({ type: "visible", key: Ae.id, bar: Ae }), se;
    }, [])), $n = d(() => e($).reduce((se, { quantity: Ae }) => se + Ae, 0) || 1), me = d(() => B() ? y().dealBars.find((se) => se.id === B()) : void 0), tt = d(() => {
      var se, Ae;
      return !!((se = e(me)) != null && se.sellingPlanEnabled) && !!((Ae = e(me)) != null && Ae.sellingPlanGid);
    }), pt = d(() => {
      var se;
      return ((se = e(me)) == null ? void 0 : se.productPersonalisation) && (y().blockLayout === "horizontal" || y().blockLayout === "grid");
    }), le = d(() => e(me) ? e(me).dealBarType === void 0 || e(me).dealBarType === ht.QuantityBreak ? O() || Number(e(me).quantity) || 1 : e(me).dealBarType === ht.Bxgy ? O() || e(me).buyQuantity + e(me).getQuantity : e(me).dealBarType === ht.Bundle ? 1 : O() || 1 : O() || 1), Oe = d(() => e($).flatMap(({ variant: se, quantity: Ae }) => Array(Ae).fill(se.id))), Ve = d(() => {
      if (e(oe).length === 0) return [];
      const se = e(oe).reduce((qe, Fe) => Math.max(qe, Fe.productIndex), -1), Ae = Array.from({ length: se + 1 }, () => "");
      for (const qe of e(oe)) Ae[qe.productIndex] = qe.text;
      return Ae;
    });
    var Ue = { rotateBundleNonce: function() {
      re(M, Math.random(), !0);
    }, selectedVariants: function() {
      return ae().map((se) => ({ variantId: se.id, quantity: se.quantity, properties: se.properties }));
    }, items: ae, pricing: function() {
      const se = e(we).discountedPrice + e(ze).discountedPrice, Ae = e(we).fullPrice + e(ze).fullPrice;
      return { discountedPrice: { amount: se / 100, formatted: i()(se) }, fullPrice: { amount: Ae / 100, formatted: i()(Ae) }, discountedPricePerItem: { amount: e(we).discountedPricePerItem / 100, formatted: i()(e(we).discountedPricePerItem) }, fullPricePerItem: { amount: e(we).fullPricePerItem / 100, formatted: i()(e(we).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: (e(we).discountedPriceWithoutSellingPlan + e(ze).discountedPriceWithoutSellingPlan) / 100, formatted: i()(e(we).discountedPriceWithoutSellingPlan + e(ze).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(we).discountedPricesForSellingPlans.map((qe) => {
        var Fe, it;
        const Ut = (it = (Fe = e(ze).discountedPricesForSellingPlans.find((ur) => ur.sellingPlanId === qe.sellingPlanId)) == null ? void 0 : Fe.discountedPrice) != null ? it : e(ze).discountedPriceWithoutSellingPlan, Bn = qe.discountedPrice + Ut;
        return { sellingPlanId: qe.sellingPlanId, amount: Bn / 100, formatted: i()(Bn) };
      }) };
    }, deal: function() {
      return { subscriptionsEnabled: y().subscriptionsEnabled || y().dealBars.some((se) => se.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: se, allItemsSelected: Ae } = e(be);
      return !se || Ae;
    }, validateItemSelection: function() {
      var se, Ae;
      const { requiresItemSelection: qe, allItemsSelected: Fe } = e(be);
      return qe && !Fe ? (Ui(!0), { valid: !1, message: ((Ae = (se = y().collectionBreaks) == null ? void 0 : se.requireItemSelectionAlert) == null ? void 0 : Ae.text) || null }) : (Ui(!1), { valid: !0, message: null });
    }, get component() {
      return p();
    }, set component(se) {
      p(se), _();
    }, get config() {
      return v();
    }, set config(se) {
      v(se), _();
    }, get translations() {
      return b();
    }, set translations(se = {}) {
      b(se), _();
    }, get dealBlock() {
      return y();
    }, set dealBlock(se) {
      y(se), _();
    }, get product() {
      return m();
    }, set product(se) {
      m(se), _();
    }, get currentVariantId() {
      return C();
    }, set currentVariantId(se) {
      C(se), _();
    }, get sellingPlanId() {
      return P();
    }, set sellingPlanId(se) {
      P(se), _();
    }, get selectedDealBarId() {
      return B();
    }, set selectedDealBarId(se) {
      B(se), _();
    }, get quantity() {
      return O();
    }, set quantity(se) {
      O(se), _();
    }, get mediaImages() {
      return I();
    }, set mediaImages(se = []) {
      I(se), _();
    }, get otherProducts() {
      return E();
    }, set otherProducts(se = []) {
      E(se), _();
    }, get collectionBreaksProducts() {
      return Z();
    }, set collectionBreaksProducts(se = []) {
      Z(se), _();
    }, get complementaryProducts() {
      return G();
    }, set complementaryProducts(se = []) {
      G(se), _();
    }, get nativeBundleProductIds() {
      return ce();
    }, set nativeBundleProductIds(se = []) {
      ce(se), _();
    }, get compact() {
      return H();
    }, set compact(se = !1) {
      H(se), _();
    }, get variantBadges() {
      return W();
    }, set variantBadges(se = []) {
      W(se), _();
    } }, He = q0(), ut = _e(He), xt = w(ut);
    let _t;
    {
      const se = (qe, Fe = Fr) => {
        var it = De(), Ut = _e(it), Bn = (Qt) => {
          {
            let Xt = d(() => Fe().id === B()), Nn = d(() => Fe().id === B() ? e(Ve) : []);
            ld(Qt, { get selectedDealBarIndex() {
              return e(Jt);
            }, get dealBlock() {
              return y();
            }, get dealBar() {
              return Fe();
            }, get product() {
              return e(J);
            }, get otherProducts() {
              return e(Q);
            }, get complementaryProducts() {
              return e(U);
            }, get selected() {
              return e(Xt);
            }, get currentVariantId() {
              return C();
            }, get componentId() {
              return A;
            }, get sellingPlan() {
              return e(yt);
            }, onProgressiveGiftsChange: ft, onDealBarSelect: $e, onDealBarDeselect: Re, onVariantSelect: nt, onVariantsChange: et, onPersonalisationsChange: $t, get personalisationInitialValues() {
              return e(Nn);
            } });
          }
        }, ur = (Qt) => {
          var Xt = De(), Nn = _e(Xt), da = (ga) => {
            {
              let El = d(() => Fe().id === B()), lo = d(() => Fe().id === B() ? e(Ve) : []);
              td(ga, { get selectedDealBarIndex() {
                return e(Jt);
              }, get dealBlock() {
                return y();
              }, get dealBar() {
                return Fe();
              }, get product() {
                return e(J);
              }, get otherProducts() {
                return e(Q);
              }, get complementaryProducts() {
                return e(U);
              }, get selected() {
                return e(El);
              }, get currentVariantId() {
                return C();
              }, get componentId() {
                return A;
              }, get sellingPlan() {
                return e(yt);
              }, onProgressiveGiftsChange: ft, onDealBarSelect: $e, onDealBarDeselect: Re, onVariantSelect: nt, onVariantsChange: et, onPersonalisationsChange: $t, get personalisationInitialValues() {
                return e(lo);
              } });
            }
          }, xr = (ga) => {
            var El = De(), lo = _e(El), tm = (hi) => {
              {
                let Rl = d(() => Fe().id === B()), so = d(() => Fe().id === B() ? e(Ve) : []);
                Bd(hi, { get dealBlock() {
                  return y();
                }, get dealBar() {
                  return Fe();
                }, get selectedDealBarIndex() {
                  return e(Jt);
                }, get otherProducts() {
                  return e(Q);
                }, get complementaryProducts() {
                  return e(U);
                }, get componentId() {
                  return A;
                }, get selected() {
                  return e(Rl);
                }, get globalSellingPlan() {
                  return e(yt);
                }, onProgressiveGiftsChange: ft, onDealBarSelect: $e, onDealBarDeselect: Re, onVariantsChange: at, onPersonalisationsChange: $t, get personalisationInitialValues() {
                  return e(so);
                } });
              }
            }, nm = (hi) => {
              var Rl = De(), so = _e(Rl), rm = (pi) => {
                {
                  let oo = d(() => Fe().id === B() ? O() && Number(O()) : void 0), co = d(() => Fe().id === B()), uo = d(() => Fe().id === B() ? e(Ve) : []);
                  od(pi, { get dealBlock() {
                    return y();
                  }, get dealBar() {
                    return Fe();
                  }, get selectedDealBarIndex() {
                    return e(Jt);
                  }, get product() {
                    return e(J);
                  }, get collectionBreaksProducts() {
                    return e(z);
                  }, get otherProducts() {
                    return e(Q);
                  }, get complementaryProducts() {
                    return e(U);
                  }, get customQuantity() {
                    return e(oo);
                  }, get selected() {
                    return e(co);
                  }, onProgressiveGiftsChange: ft, get currentVariantId() {
                    return C();
                  }, get componentId() {
                    return A;
                  }, get globalSellingPlan() {
                    return e(yt);
                  }, onDealBarSelect: $e, onDealBarDeselect: Re, onVariantSelect: nt, onVariantsChange: je, onPersonalisationsChange: $t, get personalisationInitialValues() {
                    return e(uo);
                  } });
                }
              }, am = (pi) => {
                {
                  let oo = d(() => Fe().id === B() ? O() && Number(O()) : void 0), co = d(() => Fe().id === B()), uo = d(() => Fe().id === B() ? e(Ve) : []);
                  Hs(pi, { get selectedDealBarIndex() {
                    return e(Jt);
                  }, get dealBlock() {
                    return y();
                  }, get dealBar() {
                    return Fe();
                  }, get product() {
                    return e(J);
                  }, get otherProducts() {
                    return e(Q);
                  }, get complementaryProducts() {
                    return e(U);
                  }, get customQuantity() {
                    return e(oo);
                  }, get selected() {
                    return e(co);
                  }, get currentVariantId() {
                    return C();
                  }, get componentId() {
                    return A;
                  }, get globalSellingPlan() {
                    return e(yt);
                  }, onProgressiveGiftsChange: ft, onDealBarSelect: $e, onDealBarDeselect: Re, onVariantSelect: nt, onVariantsChange: dt, onPersonalisationsChange: $t, get personalisationInitialValues() {
                    return e(uo);
                  } });
                }
              };
              L(so, (pi) => {
                !y().collectionBreaksEnabled || !y().collectionBreaks || Fe().dealBarType && Fe().dealBarType !== ht.QuantityBreak && Fe().dealBarType !== ht.Bxgy ? pi(am, !1) : pi(rm);
              }, !0), f(hi, Rl);
            };
            L(lo, (hi) => {
              Fe().dealBarType === ht.Sku ? hi(tm) : hi(nm, !1);
            }, !0), f(ga, El);
          };
          L(Nn, (ga) => {
            Fe().dealBarType === ht.Bundle ? ga(da) : ga(xr, !1);
          }, !0), f(Qt, Xt);
        };
        L(Ut, (Qt) => {
          Fe().dealBarType === ht.MixAndMatch ? Qt(Bn) : Qt(ur, !1);
        }), f(qe, it);
      };
      var Mt = w(xt), Gt = (qe) => {
        var Fe = A0(), it = _e(Fe), Ut = (Qt) => {
          var Xt = $0();
          Ge(w(Xt), () => e(Ce)), x(Xt), f(Qt, Xt);
        };
        L(it, (Qt) => {
          e(Ce) && Qt(Ut);
        });
        var Bn = F(it, 2), ur = (Qt) => {
          md(Qt, { get timer() {
            return y().timer;
          } });
        };
        L(Bn, (Qt) => {
          y().timerEnabled && y().timer && Qt(ur);
        }), f(qe, Fe);
      };
      L(Mt, (qe) => {
        H() || qe(Gt);
      });
      var Ot = F(Mt, 2), Ht = (qe) => {
        io(qe, { get subscriptions() {
          return y().subscriptions;
        }, get sellingPlans() {
          return e(ct);
        }, get selectedSellingPlan() {
          return e(vt);
        }, get hideSellingPlanSelector() {
          return e(tt);
        }, onChange: ot, onRequestAddToCart: rt });
      };
      L(Ot, (qe) => {
        var Fe;
        e(Ct) && ((Fe = y().subscriptions) == null ? void 0 : Fe.position) === "above" && qe(Ht);
      });
      var bn = F(Ot, 2);
      let Ae;
      Zt(bn, 21, () => e(On), (qe) => qe.key, (qe, Fe) => {
        var it = De(), Ut = _e(it), Bn = (Qt) => {
          ud(Qt, { get settings() {
            return e(on);
          }, onReveal: () => {
            return Xt = e(Fe).bars, void (!B() && Se && Xt.includes(Se) && $e({ dealBarId: Se.id, dealBarQuantity: xe(Se), preselected: !0 }));
            var Xt;
          }, children: (Xt, Nn) => {
            var da = De();
            Zt(_e(da), 17, () => e(Fe).bars, (xr) => xr.id, (xr, ga) => {
              se(xr, () => e(ga));
            }), f(Xt, da);
          }, $$slots: { default: !0 } });
        }, ur = (Qt) => {
          var Xt = De(), Nn = _e(Xt), da = (xr) => {
            se(xr, () => e(Fe).bar);
          };
          L(Nn, (xr) => {
            e(Fe).type === "visible" && xr(da);
          }, !0), f(Qt, Xt);
        };
        L(Ut, (Qt) => {
          e(Fe).type === "scratch" && e(on) ? Qt(Bn) : Qt(ur, !1);
        }), f(qe, it);
      }), x(bn);
      var Yt = F(bn, 2), nn = (qe) => {
        qa(qe, { get product() {
          return e(bt);
        }, get productPersonalisation() {
          return e(me).productPersonalisation;
        }, get selectedVariantIds() {
          return e(Oe);
        }, get quantity() {
          return e(le);
        }, get addPersonalisationModal() {
          return y().addPersonalisationModal;
        }, onPersonalisationsChange: $t, get initialValues() {
          return e(Ve);
        } });
      };
      L(Yt, (qe) => {
        var Fe;
        e(pt) && ((Fe = e(me)) != null && Fe.productPersonalisation) && qe(nn);
      });
      var Hn = F(Yt, 2), xn = (qe) => {
        io(qe, { get subscriptions() {
          return y().subscriptions;
        }, get sellingPlans() {
          return e(ct);
        }, get selectedSellingPlan() {
          return e(vt);
        }, get hideSellingPlanSelector() {
          return e(tt);
        }, onChange: ot, onRequestAddToCart: rt });
      };
      L(Hn, (qe) => {
        var Fe;
        e(Ct) && ((Fe = y().subscriptions) == null ? void 0 : Fe.position) === "below" && qe(xn);
      });
      var wn = F(Hn, 2), st = (qe) => {
        var Fe = V0();
        Ge(w(Fe), () => s()("system.out_of_stock")), x(Fe), f(qe, Fe);
      };
      L(wn, (qe) => {
        e(de) && (e($).length > 1 || e($)[0].quantity > 1) && qe(st);
      });
      var St = F(wn, 2), zt = (qe) => {
        _d(qe, { get checkboxUpsells() {
          return y().checkboxUpsells;
        }, get dealBlock() {
          return y();
        }, get otherProducts() {
          return e(Q);
        }, get complementaryProducts() {
          return e(U);
        }, get dealSellingPlan() {
          return e(We);
        }, get dealBarQuantity() {
          return e($n);
        }, onChange: Tt });
      };
      L(St, (qe) => {
        !H() && y().checkboxUpsellsEnabled && y().checkboxUpsells && qe(zt);
      });
      var Vt = F(St, 2), Fn = (qe) => {
        bd(qe, { get progressiveGifts() {
          return y().progressiveGifts;
        }, get dealBlock() {
          return y();
        }, get otherProducts() {
          return e(Q);
        }, get selectedDealBarIndex() {
          return e(Jt);
        }, onChange: ft, onUnlock: ge });
      };
      L(Vt, (qe) => {
        y().progressiveGiftsEnabled && y().progressiveGifts && y().progressiveGifts.layout !== "deal-bar" && qe(Fn);
      });
      var rn = F(Vt, 2), Pn = (qe) => {
        {
          let Fe = d(() => e(be).missingItemsCount > 0);
          Cd(qe, { get collectionBreaks() {
            return y().collectionBreaks;
          }, get hasItemsToSelect() {
            return e(Fe);
          } });
        }
      };
      L(rn, (qe) => {
        y().collectionBreaksEnabled && qe(Pn);
      });
      var Sn = F(rn, 2), Lt = (qe) => {
        Id(qe, { get savingsSummary() {
          return y().savingsSummary;
        }, get totalFullPrice() {
          return e(mn).fullPrice;
        }, get totalDiscountedPrice() {
          return e(mn).discountedPrice;
        }, get quantity() {
          return e(kn);
        }, get product() {
          return e(bt);
        } });
      };
      L(Sn, (qe) => {
        var Fe, it;
        !H() && y().savingsSummaryEnabled && y().savingsSummary && (Fe = e(mn).saved, it = y().savingsSummary.hideWhenZeroSavings, Fe > 0 || !it) && qe(Lt);
      }), x(xt), pe((qe, Fe, it) => Ae = At(bn, 1, "kaching-bundles__bars", null, Ae, it), [() => ({ "kaching-bundles__block--horizontal": y().blockLayout === "horizontal", "kaching-bundles__block--grid": y().blockLayout === "grid", "kaching-bundles__block--plain": y().blockLayout === "plain" }), () => y().abTestVariantNumber ? Vs(y().abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": y().blockLayout === "horizontal", "kaching-bundles__bars--grid": y().blockLayout === "grid", "kaching-bundles__bars--plain": y().blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(Wt) })]);
    }
    x(ut);
    var cn = F(ut, 2), hn = (se) => {
      kd(se, { get shopCustomStyles() {
        return v().shopCustomStyles;
      }, get customStyles() {
        return y().customStyles;
      }, get dealBlockId() {
        return y().id;
      } });
    };
    L(cn, (se) => {
      y().customStylesEnabled && se(hn);
    }), pe((se, Ae, qe) => {
      var Fe;
      _t = At(xt, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, _t, se), Pe(xt, "data-deal-block-id", y().id), Pe(xt, "data-ab-test-variant-id", y().abTestVariantId), Pe(xt, "data-ab-test-variant", Ae), Pe(xt, "data-selling-plan-id", (Fe = e(We)) == null ? void 0 : Fe.id), Nt(xt, e(Le));
    }, [() => ({ "kaching-bundles__block--horizontal": y().blockLayout === "horizontal", "kaching-bundles__block--grid": y().blockLayout === "grid", "kaching-bundles__block--plain": y().blockLayout === "plain" }), () => y().abTestVariantNumber ? Vs(y().abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": y().blockLayout === "horizontal", "kaching-bundles__bars--grid": y().blockLayout === "grid", "kaching-bundles__bars--plain": y().blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(Wt) })]), f(n, He);
    var un = Ke(Ue);
    return h(), un;
  }
  customElements.define("kaching-bundles-block", Ne(Md, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, variantBadges: { attribute: "variant-badges", type: "Array" }, component: {} }, [], ["rotateBundleNonce", "selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (n) => class extends n {
    constructor() {
      super(), vn(this, "component"), this.component = this, this.innerHTML && (sr(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
    }
  }));
  var T0 = V('<div class="kaching-bundles"><!></div>');
  function zd(n, t) {
    var r;
    Ye(t, !0);
    const a = k(t, "config", 7), l = k(t, "dealBlock", 7), o = k(t, "products", 23, () => []), u = k(t, "mediaImages", 7), c = k(t, "translations", 7), { setConfig: i } = Aa(a()), { setMoneyFormat: s } = ii(a().moneyFormat), { setTranslations: g } = $a(c()), { setMediaImages: h } = Fi(u()), { setSwatchSettings: p } = Ti({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (r = l().showSelectedSwatchName) != null && r });
    Je(() => {
      i(a());
    }), Je(() => {
      s(a().moneyFormat, !!l().showPricesWithoutDecimals);
    }), Je(() => {
      g(c());
    }), Je(() => {
      h(u());
    }), Je(() => {
      var P;
      p({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (P = l().showSelectedSwatchName) != null && P });
    });
    const v = d(() => l().dealBars.find((P) => P.dealBarType === ht.MixAndMatch));
    var b = { get config() {
      return a();
    }, set config(P) {
      a(P), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(P) {
      l(P), _();
    }, get products() {
      return o();
    }, set products(P = []) {
      o(P), _();
    }, get mediaImages() {
      return u();
    }, set mediaImages(P) {
      u(P), _();
    }, get translations() {
      return c();
    }, set translations(P) {
      c(P), _();
    } }, y = T0(), m = w(y), C = (P) => {
      Xs(P, { get dealBlock() {
        return l();
      }, get dealBar() {
        return e(v);
      }, get products() {
        return o();
      }, onChoose: () => {
      } });
    };
    return L(m, (P) => {
      e(v) && P(C);
    }), x(y), f(n, y), Ke(b);
  }
  customElements.define("kaching-bundles-mix-and-match-choose-product", Ne(zd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), vn(this, "component"), this.component = this;
    }
  }));
  var G0 = V('<div class="kaching-bundles"><!></div>');
  function Dd(n, t) {
    Ye(t, !0);
    const r = k(t, "config", 7), a = k(t, "product", 7), l = k(t, "translations", 7), o = k(t, "addPersonalisationModal", 7), { setConfig: u } = Aa(r()), { setTranslations: c } = $a(l());
    Je(() => {
      u(r()), c(l());
    });
    const i = d(() => {
      var h, p;
      return (p = (h = a()) == null ? void 0 : h.variants) != null && p[0] ? [{ variant: a().variants[0], index: 0 }, { variant: a().variants[0], index: 1 }] : [];
    });
    var s = { get config() {
      return r();
    }, set config(h) {
      r(h), _();
    }, get product() {
      return a();
    }, set product(h) {
      a(h), _();
    }, get translations() {
      return l();
    }, set translations(h) {
      l(h), _();
    }, get addPersonalisationModal() {
      return o();
    }, set addPersonalisationModal(h) {
      o(h), _();
    } }, g = G0();
    return Us(w(g), { get product() {
      return a();
    }, get selectedVariants() {
      return e(i);
    }, get addPersonalisationModal() {
      return o();
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), x(g), f(n, g), Ke(s);
  }
  customElements.define("kaching-bundles-personalisation-modal", Ne(Dd, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), vn(this, "component"), this.component = this;
    }
  }));
  function O0(n, t) {
    t().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var F0 = V('<img class="kaching-bundles-sticky-atc__image"/>'), L0 = V('<button class="kaching-bundles-sticky-atc__button"><!></button>'), j0 = V('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function $d(n, t) {
    var r;
    Ye(t, !0);
    const a = () => Ie(Ta, "$selectedDealBarStore", o), l = () => Ie(b, "$translate", o), [o, u] = kt(), c = k(t, "component", 7), i = k(t, "config", 7), s = k(t, "stickyAtc", 7), g = k(t, "translations", 7), h = k(t, "product", 7), p = k(t, "dealBlock", 7), { setConfig: v } = Aa(i()), { translate: b, setTranslations: y } = $a(g()), { formatPrice: m, setMoneyFormat: C } = ii(i().moneyFormat, (r = p()) == null ? void 0 : r.showPricesWithoutDecimals);
    Je(() => {
      v(i());
    }), Je(() => {
      var ee;
      C(i().moneyFormat, !!((ee = p()) != null && ee.showPricesWithoutDecimals));
    }), Je(() => {
      y(g());
    });
    const P = d(() => ((ee) => {
      const q = { "kaching-bundles-sticky-atc-background-color": Ee(ee.backgroundColor), "kaching-bundles-sticky-atc-title-color": Ee(ee.titleColor), "kaching-bundles-sticky-atc-button-color": Ee(ee.buttonColor), "kaching-bundles-sticky-atc-button-text-color": Ee(ee.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": ee.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": ee.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": tr(ee.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": er(ee.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": tr(ee.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": er(ee.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": ee.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": ee.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": ee.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": ee.buttonCornerRadius + "px" };
      if (ee.sameSizeOnMobile || !ee.mobile) return dn(q);
      const S = ee.mobile;
      return dn({ ...q, "kaching-bundles-sticky-atc-image-display": ee.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-image-display-mobile": S.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-title-font-size-mobile": S.titleFontSize + "px", "kaching-bundles-sticky-atc-button-font-size-mobile": S.buttonFontSize + "px", "kaching-bundles-sticky-atc-product-photo-size-mobile": S.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding-mobile": S.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius-mobile": S.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius-mobile": S.buttonCornerRadius + "px" });
    })(s())), B = d(() => {
      var ee;
      return ((ee = a()) == null ? void 0 : ee.pricing.fullPrice) || h().variants[0].compareAtPrice || h().variants[0].price;
    }), O = d(() => {
      var ee;
      return ((ee = a()) == null ? void 0 : ee.pricing.discountedPrice) || h().variants[0].price;
    }), I = d(() => {
      var ee;
      return ((ee = a()) == null ? void 0 : ee.quantity) || 1;
    }), E = d(() => gn({ priceFormatter: Ie(m, "$formatPrice", o), product: h(), totalFullPrice: e(B), totalDiscountedPrice: e(O), quantity: e(I), unitQuantity: null })), Z = d(() => e(E)(l()(s().title))), G = new Mb("(width < 750px)"), ce = d(() => (G.current && !s().sameSizeOnMobile && s().mobile ? s().mobile.productPhotoSize : s().productPhotoSize) > 0);
    var H = { get component() {
      return c();
    }, set component(ee) {
      c(ee), _();
    }, get config() {
      return i();
    }, set config(ee) {
      i(ee), _();
    }, get stickyAtc() {
      return s();
    }, set stickyAtc(ee) {
      s(ee), _();
    }, get translations() {
      return g();
    }, set translations(ee) {
      g(ee), _();
    }, get product() {
      return h();
    }, set product(ee) {
      h(ee), _();
    }, get dealBlock() {
      return p();
    }, set dealBlock(ee) {
      p(ee), _();
    } }, W = j0(), J = w(W), Q = w(J), U = w(Q), z = (ee) => {
      var q = F0();
      pe(() => {
        Pe(q, "src", h().image), Pe(q, "alt", h().title);
      }), f(ee, q);
    };
    L(U, (ee) => {
      e(ce) && ee(z);
    });
    var D = F(U, 2);
    Ge(w(D), () => e(Z)), x(D), x(Q);
    var j = F(Q, 2), Y = (ee) => {
      var q = L0();
      q.__click = [O0, c], Ge(w(q), () => l()(s().buttonText)), x(q), f(ee, q);
    };
    L(j, (ee) => {
      s().buttonText && ee(Y);
    }), x(J), x(W), pe(() => Nt(J, e(P))), f(n, W);
    var K = Ke(H);
    return u(), K;
  }
  Dn(["click"]), customElements.define("kaching-bundles-sticky-atc", Ne($d, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), vn(this, "component"), this.component = this;
    }
  }));
  const E0 = wu, R0 = mu, Q0 = Md, N0 = zd, W0 = Dd, U0 = $d, H0 = Hu.element, Z0 = E0.element, J0 = R0.element, Y0 = Q0.element, K0 = N0.element, X0 = W0.element, em = U0.element;
  return jt.ChooseMultipleGifts = J0, jt.ChooseProduct = Z0, jt.DealBar = H0, jt.DealBlock = Y0, jt.MixAndMatchChooseProduct = K0, jt.PersonalisationModal = X0, jt.StickyAtc = em, Object.defineProperty(jt, Symbol.toStringTag, { value: "Module" }), jt;
})({});
