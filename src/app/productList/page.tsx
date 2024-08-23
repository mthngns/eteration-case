'use client'

import React from "react";
import ProductListLayout from "./productListLayout";
import { Product } from "../lib/types";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import FilterBoxMenu from "../features/FilterBoxMenu/FilterBoxMenu";
import ShoppingMenu from "../features/ShoppingMenu/ShoppingMenu";

const ProductList = () => {
  const data = {
    products: [
      {
        createdAt: "2023-07-17T07:21:02.529Z",
        name: "Bentley Focus",
        image: "https://loremflickr.com/640/480/food",
        price: "51.00",
        description:
          "Quasi adipisci sint veniam delectus. Illum laboriosam minima dignissimos natus earum facere consequuntur eius vero. Itaque facilis at tempore ipsa. Accusamus nihil fugit velit possimus expedita error porro aliquid. Optio magni mollitia veritatis repudiandae tenetur nemo. Id consectetur fuga ipsam quidem voluptatibus sed magni dolore.\nFacilis commodi dolores sapiente delectus nihil ex a perferendis. Totam deserunt assumenda inventore. Incidunt nesciunt adipisci natus porro deleniti nisi incidunt laudantium soluta. Nostrum optio ab facilis quisquam.\nSoluta laudantium ipsa ut accusantium possimus rem. Illo voluptatibus culpa incidunt repudiandae placeat animi. Delectus id in animi incidunt autem. Ipsum provident beatae nisi cumque nulla iure.",
        model: "CTS",
        brand: "Lamborghini",
        id: "1",
      },
      {
        createdAt: "2023-07-17T02:49:46.692Z",
        name: "Aston Martin Durango",
        image: "https://loremflickr.com/640/480/food",
        price: "374.00",
        description:
          "Odio et voluptates velit omnis incidunt dolor. Illo sint quisquam tenetur dolore nemo molestiae. Dolorum odio dicta placeat. Commodi rerum molestias quibusdam labore. Odio libero doloribus. Architecto repellendus aperiam nulla at at voluptatibus ipsum.\nFugit expedita a quo totam quaerat amet eveniet laboriosam. Ad assumenda atque porro neque iusto. Inventore repudiandae esse non sit veritatis ab reprehenderit quas. Sit qui natus exercitationem quis commodi vero.\nIure reiciendis quas corrupti incidunt repellat voluptatem esse eveniet. Aliquid illo cum doloremque similique. Blanditiis corporis repellendus cumque totam quod iusto dolorum. Incidunt a eos eum voluptas tempora voluptas reiciendis autem.",
        model: "Roadster",
        brand: "Smart",
        id: "2",
      },
      {
        createdAt: "2023-07-16T08:46:46.400Z",
        name: "Ford XC90",
        image: "https://loremflickr.com/640/480/city",
        price: "735.00",
        description:
          "Minima quas corrupti delectus. Pariatur itaque at. Voluptate expedita unde excepturi dolores quasi quis. Delectus occaecati quaerat iusto nihil reiciendis voluptatem excepturi illum.\nVoluptatem qui ullam quas commodi ullam. Incidunt atque excepturi eveniet id consectetur maxime quia suscipit minima. Dicta excepturi molestiae dolore neque. Repellat minus sit inventore amet delectus omnis. Corrupti dolorem quam occaecati quisquam.\nVoluptatibus dolore quos dolorem nemo iste ipsa totam quisquam odio. Eveniet enim animi adipisci iusto sit eveniet. Provident soluta maxime voluptatum accusamus consectetur nostrum sequi atque. Sunt doloribus quibusdam quia maxime vero ad accusantium. Esse animi velit velit aliquid itaque voluptatem.",
        model: "Taurus",
        brand: "Ferrari",
        id: "3",
      },
    ],
  };
  const basket = {
    productList: [
      {
        createdAt: "2023-07-17T07:21:02.529Z",
        name: "Bentley Focus",
        image: "https://loremflickr.com/640/480/food",
        price: "51.00",
        description:
          "Quasi adipisci sint veniam delectus. Illum laboriosam minima dignissimos natus earum facere consequuntur eius vero. Itaque facilis at tempore ipsa. Accusamus nihil fugit velit possimus expedita error porro aliquid. Optio magni mollitia veritatis repudiandae tenetur nemo. Id consectetur fuga ipsam quidem voluptatibus sed magni dolore.\nFacilis commodi dolores sapiente delectus nihil ex a perferendis. Totam deserunt assumenda inventore. Incidunt nesciunt adipisci natus porro deleniti nisi incidunt laudantium soluta. Nostrum optio ab facilis quisquam.\nSoluta laudantium ipsa ut accusantium possimus rem. Illo voluptatibus culpa incidunt repudiandae placeat animi. Delectus id in animi incidunt autem. Ipsum provident beatae nisi cumque nulla iure.",
        model: "CTS",
        brand: "Lamborghini",
        id: "1",
        pcs: "1",
      },
    ],
  };
  const isFetching = false;

  const handleAddItemToBasket = (product: Product) => {
    console.log(product)
  };
  return (
    <ProductListLayout>
      <FilterBoxMenu />

    <div className="flex flex-col pb-4 order-3 lg:order-2 lg:col-span-7 2xl:col-span-8">

      <ProductGallery
        addToCard={(product) => handleAddItemToBasket(product)}
        isLoading={isFetching}
        className="grid grid-cols-2 w-full gap-4 justify-between sm:grid sm:grid-cols-3 sm:gap-4 xl:grid xl:grid-cols-4 "
        products={data.products}
        productListInBasket={basket.productList}
      />
    </div>
      <ShoppingMenu/>
    </ProductListLayout>
  );
};

export default ProductList;
