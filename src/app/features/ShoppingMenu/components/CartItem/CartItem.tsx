import { ExtendedProduct } from "@/app/lib/types";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CartItemProps {
  product: ExtendedProduct;
  increment: (product: ExtendedProduct) => void;
  decrement: (product: ExtendedProduct) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  increment,
  decrement,
}) => {
  return (
    <div className="flex gap-x-0 px-2 py-2 h-12 sm:items-center border-b">
      <div className="flex flex-col w-full h-10 overflow-hidden justify-center">
        <h2 className="truncate">{product.name}</h2>
        <h2 className="text-eterationBlue">{product.price}₺</h2>
      </div>
      <div className="flex h-full w-36">
        <button
          className="flex h-full w-full rounded-l-md text-xs text-gray-500 bg-gray-100 items-center justify-center"
          onClick={() => decrement(product)}
        >
          <FaMinus />
        </button>
        <input
          className="w-full text-center text-balance text-white font-semibold bg-eterationBlue"
          disabled
          value={product.pcs}
        />
        <button
          className="flex h-full w-full rounded-r-md text-xs text-gray-500 bg-gray-100 items-center justify-center"
          onClick={() => increment(product)}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
