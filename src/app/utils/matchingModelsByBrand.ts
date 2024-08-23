import { Product, ModelsByBrand } from "../lib/types";

export function matchingModelsByBrand(products: Product[]): ModelsByBrand {
  const modelsByBrand: ModelsByBrand = {};
  products.forEach((product) => {
    const { brand, model } = product;
    if (!modelsByBrand[brand]) {
      modelsByBrand[brand] = [];
    }
    if (!modelsByBrand[brand].includes(model)) {
      modelsByBrand[brand].push(model);
    }
  });
  return modelsByBrand;
}
