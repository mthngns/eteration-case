"use client";

import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import NotFound from "../components/NotFound/NotFound";
import ErrorCard from "../components/ErrorCard/ErrorCard";
import Pagination from "../components/Pagination/Pagination";
import ShoppingMenu from "../features/ShoppingMenu/ShoppingMenu";
import FilterBoxMenu from "../features/FilterBoxMenu/FilterBoxMenu";
import ProductGallery from "@/app/components/ProductGallery/ProductGallery";
import ProductListLayout from "./productListLayout";
import { LIMIT } from "../lib/constants";
import { Product } from "../lib/types";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";
import { useConfigureFilters } from "../hooks/configureFilters";
import { useGetProductListByFiltersQuery } from "@/redux/features/products/services/products";
import {
  addItemToBasket,
  getBasket,
} from "@/redux/features/basket/store/basket";
import {
  nextPage,
  previousPage,
  setCurrentPage,
} from "@/redux/features/filters/store/filters";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const [pageCount, setPageCount] = useState(0);

  const {
    selectedBrands,
    selectedModels,
    currentPage,
    sortMethod,
    totalPages,
    searchTerm,
    configureError,
  } = useConfigureFilters({ pageCount });

  const {
    data,
    refetch,
    isLoading,
    error: filterError,
    isFetching,
  } = useGetProductListByFiltersQuery({
    page: currentPage,
    limit: LIMIT,
    sortMethod: sortMethod,
    filterMethod: {
      brands: selectedBrands,
      models: selectedModels,
      searchTerm: searchTerm,
    },
  });

  const basket = useSelector(getBasket);

  useEffect(() => {
    if (data) {
      setPageCount(data.totalPageCount);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [
    refetch,
    sortMethod,
    selectedBrands,
    selectedModels,
    currentPage,
    searchTerm,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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

  if (configureError) {
    return <ErrorCard />;
  }

  return (
    <ProductListLayout>
      <FilterBoxMenu />
      <div className="flex flex-col pb-4 order-3 lg:order-2 lg:col-span-7 2xl:col-span-8">
        {!data || data?.products?.length === 0 || filterError ? (
          <NotFound />
        ) : (
          <>
            <ProductGallery
              addToCard={(product) => handleAddItemToBasket(product)}
              isLoading={isFetching}
              className="grid grid-cols-2 w-full gap-4 justify-between sm:grid sm:grid-cols-3 sm:gap-4 xl:grid xl:grid-cols-4 "
              products={data.products}
              productListInBasket={basket.productList}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              next={() => dispatch(nextPage())}
              previous={() => dispatch(previousPage())}
              onPageChange={(page) => dispatch(setCurrentPage(page))}
            />
          </>
        )}
      </div>
      <ShoppingMenu />
    </ProductListLayout>
  );
};

export default ProductList;
