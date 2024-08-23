import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";
import { Product } from "@/app/lib/types";
import { useRouter } from "next/navigation";

interface ProductGalleryCardProps {
  product: Product;
  addToCard: (product: Product) => void;
  isExist: boolean;
  isLoading: boolean;
}

const ProductGalleryCard: React.FC<ProductGalleryCardProps> = ({
  product,
  addToCard,
  isExist,
  isLoading,
}) => {
  const router = useRouter();

  return (
    <li className="flex flex-col h-full justify-between w-full p-2 border gap-y-3 text-sm bg-white">
      <button
        className="flex flex-col space-y-2 h-full"
        onClick={() => router.push("/product/" + product.id)}
      >
        <div
          className="relative w-full bg-emeral-400 p-0"
          style={{ aspectRatio: "4/3" }}
        >
          <ImageWithLoader
            src={product.image}
            alt={product.name}
            fill={true}
            priority={true}
            isLoading={isLoading}
          />
        </div>
        <h2 className="text-eterationBlue">{product.price} ₺</h2>
        <h2>{product.name}</h2>
        <p className="text-gray-500 text-xs">
          {product.brand} / {product.model}
        </p>
      </button>
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
    </li>
  );
};

export default ProductGalleryCard;
