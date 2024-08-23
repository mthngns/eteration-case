import React from "react";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";
import CustomButton from "../CustomButton/CustomButton";
import { Product } from "@/app/lib/types";

interface ProductDetailCardProps {
  product: Product;
  addToCard: (product: Product) => void;
  isExist: boolean;
  isLoading: boolean;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({
  product,
  addToCard,
  isExist,
  isLoading,
}) => {
  return (
    <div className="gap-x-8 md:flex p-4">
      <div className="relative w-full p-0" style={{ aspectRatio: "4/3" }}>
        <ImageWithLoader
          src={product.image}
          alt={product.name}
          className="w-full object-contain"
          width={200}
          height={200}
          priority={true}
          isLoading={isLoading}
        />
      </div>
      <div className="flex flex-col w-full gap-y-4 h-full mt-4 md:mt-0">
        <h1 className="text-2xl">{product.name}</h1>
        <p className="text-2xl pb-8 text-eterationBlue">{product.price}₺</p>
        {!isExist ? (
          <CustomButton
            onClick={() => addToCard(product)}
            buttonText={"Add to Cart"}
          />
        ) : (
          <p className="self-center text-eterationBlue py-1 border w-full text-center">
            Already in the basket!
          </p>
        )}
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
