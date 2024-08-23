import React from "react";
import ProductGalleryCard from "../ProductGalleryCard/ProductGalleryCard";
import { ExtendedProduct, Product } from "@/app/lib/types";

interface ProductGalleryProps {
  products: Product[];
  addToCard: (product: Product) => void;
  className?: string;
  productListInBasket: ExtendedProduct[];
  isLoading: boolean;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  products,
  addToCard,
  className,
  productListInBasket,
  isLoading,
}) => {
  const basketProductIds = new Set(
    productListInBasket.map((product) => product.id)
  );

  return (
    <ul className={className}>
      {products.map((product) => (
        <ProductGalleryCard
          key={product.id}
          product={product}
          addToCard={() => addToCard(product)}
          isExist={basketProductIds.has(product.id)}
          isLoading={isLoading}
        />
      ))}
    </ul>
  );
};

export default ProductGallery;
