import React, { useEffect, useState } from "react";
import { ExtendedProduct } from "@/app/lib/types";
import CartItem from "../CartItem/CartItem";
import IconButton from "@/app/components/IconButton/IconButton";
import { FaAngleDown } from "react-icons/fa";

interface ShoppingCartProps {
  title: string;
  products: ExtendedProduct[];
  increment: (product: ExtendedProduct) => void;
  decrement: (product: ExtendedProduct) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  title,
  products,
  increment,
  decrement,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleSortByToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col w-full gap-y-2 text-xs">
      <IconButton
        className={`flex items-center w-full justify-between gap-x-1 bg-gray-200 p-2 active:bg-gray-300`}
        iconPosition="right"
        icon={
          <FaAngleDown
            className={`${
              isMenuOpen && "rotate-180"
            } transition duration-300 ease-in-out`}
            size={16}
          />
        }
        title={title}
        onClick={handleSortByToggle}
      />
      {isMenuOpen && products.length > 0 && (
        <div className="flex flex-col h-full border shadow-md max-h-96 overflow-scroll sm:max-h-60 sm:overflow-scroll lg:h-fit lg:max-h-96">
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              increment={() => increment(product)}
              decrement={() => decrement(product)}
            />
          ))}
        </div>
      )}
      {isMenuOpen && products.length === 0 && (
        <div className="flex p-2 flex-col h-full border shadow-md max-h-96 overflow-scroll h-20 sm:overflow-scroll lg:h-fit lg:max-h-96">
          <h2>There is no product in your basket</h2>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
