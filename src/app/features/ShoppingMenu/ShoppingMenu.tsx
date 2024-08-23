import React from "react";

import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  decrementProductQuantity,
  getBasket,
  incrementProductQuantity,
  resetBasketState,
} from "@/redux/features/basket/store/basket";
import { Product } from "@/app/lib/types";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Checkout from "./components/Checkout/Checkout";

const ShoppingMenu = () => {
  const dispatch = useAppDispatch();
  const basket = useSelector(getBasket);
  const productListInBasket = basket.productList;
  const basketAmount = basket.basketAmount;

  const handleProductQuantity = (
    type: "increment" | "decrement",
    product: Product
  ) => {
    if (type === "increment") {
      dispatch(incrementProductQuantity(product.id));
    } else {
      dispatch(decrementProductQuantity(product.id));
    }
  };

  const handleCheckout = () => {
    dispatch(resetBasketState());
  };

  return (
    <div className="justify-start flex overflow-scroll sm:w-full sm:flex-nowrap gap-4 order-1 lg:justify-start lg:flex-col lg:order-3 lg:col-span-3 2xl:col-span-2">
      <ShoppingCart
        title="Cart"
        products={productListInBasket}
        increment={(product) => {
          handleProductQuantity("increment", product);
        }}
        decrement={(product) => {
          handleProductQuantity("decrement", product);
        }}
      />
      <Checkout
        title="Checkout"
        totalPrice={basketAmount}
        onClick={() => handleCheckout()}
      />
    </div>
  );
};

export default ShoppingMenu;
