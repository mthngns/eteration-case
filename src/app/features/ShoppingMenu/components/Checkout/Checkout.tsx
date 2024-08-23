import React, { useEffect, useState } from "react";
import IconButton from "@/app/components/IconButton/IconButton";
import { FaAngleDown } from "react-icons/fa";

interface CheckoutProps {
  title: string;
  totalPrice: string;
  onClick: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ title, totalPrice, onClick }) => {
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
      {isMenuOpen && (
        <div className="flex flex-col border shadow-md h-20 p-2 justify-between sm:text-xs ">
          <div className="flex gap-x-2">
            <h2>Total Price:</h2>
            <p className="text-eterationBlue font-semibold">{totalPrice}₺</p>
          </div>
          <button
            className="flex items-center justify-center px-4 py-2 rounded-sm text-white bg-eterationBlue active:bg-eterationBlueActive"
            onClick={onClick}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
