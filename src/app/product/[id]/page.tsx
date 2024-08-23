"use client";

import ErrorCard from "@/app/components/ErrorCard/ErrorCard";
import Loader from "@/app/components/Loader/Loader";
import ProductDetailCard from "@/app/components/ProductDetailCard/ProductDetailCard";
import ShoppingMenu from "@/app/features/ShoppingMenu/ShoppingMenu";
import { Product } from "@/app/lib/types";
import {
  addItemToBasket,
  getBasket,
} from "@/redux/features/basket/store/basket";
import { useGetProductByIdQuery } from "@/redux/features/products/services/products";
import { useAppDispatch } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const productId = params.id;

  const dispatch = useAppDispatch();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);

  const basket = useSelector(getBasket);
  const basketProductIds = new Set(
    basket.productList.map((product) => product.id)
  );

  const handleAddItemToBasket = (product: Product) => {
    const isProductInBasket = basket.productList.some(
      (item) => item.id === product.id
    );
    if (!isProductInBasket) {
      dispatch(addItemToBasket({ ...product, pcs: "1" }));
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorCard />;
  }
  if (product) {
    return (
      <div className="flex w-full h-full justify-center py-0">
        <div
          className={`flex flex-col w-11/12 gap-4 py-4 lg:grid lg:grid-cols-12 gap-x-4`}
        >
          <div className="flex flex-col h-fit order-3 lg:order-2 lg:col-span-9 2xl:col-span-10 bg-white shadow-lg">
            <ProductDetailCard
              product={product}
              addToCard={(product) => handleAddItemToBasket(product)}
              isExist={basketProductIds.has(product.id)}
              isLoading={isLoading}
            />
          </div>
          <ShoppingMenu />
        </div>
      </div>
    );
  }
};

export default ProductDetail;
