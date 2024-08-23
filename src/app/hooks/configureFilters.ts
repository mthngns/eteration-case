import { LIMIT } from "../lib/constants";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { matchingModelsByBrand } from "../utils/matchingModelsByBrand";
import { useGetAllProductListQuery } from "@/redux/features/products/services/products";
import {
  getFilters,
  setBrands,
  setCurrentPage,
  setModels,
  setModelsByBrand,
  setModelsBySelectedBrands,
  setSelectedModels,
} from "@/redux/features/filters/store/filters";

export const useConfigureFilters = ({ pageCount }: { pageCount: number }) => {
  const dispatch = useAppDispatch();
  const { data: allProducts, error: configureError } =
    useGetAllProductListQuery();
  const filters = useSelector(getFilters);
  const {
    selectedBrands,
    selectedModels,
    currentPage,
    sortMethod,
    models,
    modelsByBrand,
    modelsBySelectedBrands,
    searchTerm,
  } = filters;

  const [totalPages, setTotalPages] = useState(pageCount);

  // Initializes and updates filter options (brands, models, and models-by-brand)
  useEffect(() => {
    if (allProducts) {
      const brands = Array.from(
        new Set(allProducts.map((product) => product.brand))
      );
      const modelList = Array.from(
        new Set(allProducts.map((product) => product.model))
      );
      const modelsByBrand = matchingModelsByBrand(allProducts);
      dispatch(setBrands(brands));
      dispatch(setModels(modelList));
      dispatch(setModelsByBrand(modelsByBrand));
      const isFiltering =
        !!selectedBrands.length ||
        !!selectedModels.length ||
        !!searchTerm.length;
      const shouldSetFirstPage = pageCount < currentPage;

      if (isFiltering) {
        shouldSetFirstPage && dispatch(setCurrentPage(1));
        setTotalPages(pageCount);
        return;
      }
      allProducts && setTotalPages(Math.ceil(allProducts?.length / LIMIT));
    }
  }, [
    allProducts,
    currentPage,
    dispatch,
    pageCount,
    selectedBrands,
    selectedModels,
    searchTerm,
  ]);

  // Updates the list of models available for selected brands and sets it in the store.
  // If no brands are selected, sets all available models.
  useEffect(() => {
    if (selectedBrands.length === 0) {
      dispatch(setModelsBySelectedBrands(models));
      return;
    }
    const modelsBySelectedBrands = new Set<string>();
    selectedBrands.forEach((brand) => {
      const models = modelsByBrand[brand];
      if (models) {
        models.forEach((model) => modelsBySelectedBrands.add(model));
      }
    });
    dispatch(setModelsBySelectedBrands(Array.from(modelsBySelectedBrands)));
  }, [dispatch, models, modelsByBrand, selectedBrands]);

  // Ensures that selected models are updated based on the current list of models available for the selected brands.
  useEffect(() => {
    selectedModels.forEach((model) => {
      if (!modelsBySelectedBrands.includes(model)) {
        dispatch(setSelectedModels(model));
      }
    });
  }, [dispatch, modelsBySelectedBrands, selectedModels]);

  return {
    selectedBrands,
    selectedModels,
    currentPage,
    totalPages,
    sortMethod,
    searchTerm,
    configureError,
  };
};
