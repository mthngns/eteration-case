import React from "react";

import { Product } from "@/app/lib/types";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Checkout from "./components/Checkout/Checkout";

const ShoppingMenu = () => {
  const basket = {
    productList: [
      {
        createdAt: "2023-07-17T07:21:02.529Z",
        name: "Bentley Focus",
        image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        price: "51.00",
        description:
          "Quasi adipisci sint veniam delectus. Illum laboriosam minima dignissimos natus earum facere consequuntur eius vero. Itaque facilis at tempore ipsa. Accusamus nihil fugit velit possimus expedita error porro aliquid. Optio magni mollitia veritatis repudiandae tenetur nemo. Id consectetur fuga ipsam quidem voluptatibus sed magni dolore.\nFacilis commodi dolores sapiente delectus nihil ex a perferendis. Totam deserunt assumenda inventore. Incidunt nesciunt adipisci natus porro deleniti nisi incidunt laudantium soluta. Nostrum optio ab facilis quisquam.\nSoluta laudantium ipsa ut accusantium possimus rem. Illo voluptatibus culpa incidunt repudiandae placeat animi. Delectus id in animi incidunt autem. Ipsum provident beatae nisi cumque nulla iure.",
        model: "CTS",
        id: "1",
        pcs: "1",
        brand: "Bentley",
      },
    ],
    basketAmount: "51.00",
  };
  const productListInBasket = basket.productList;
  const basketAmount = basket.basketAmount;

  const handleProductQuantity = (
    type: "increment" | "decrement",
    product: Product
  ) => {
    if (type === "increment") {
    } else {
    }
  };

  const handleCheckout = () => {};

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
