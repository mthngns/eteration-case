import React from "react";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import RadioButtonGroup from "./components/RadioButtonGroup/RadioButtonGroup";
import CheckboxGroupWithSearch from "./components/CheckBoxGroupWithSearch/CheckBoxGroupWithSearch";
import { SortMethod } from "@/app/lib/types";
import { useSelector } from "react-redux";
import { SORT_METHODS } from "@/app/lib/constants";
import { useAppDispatch } from "@/redux/store";
import {
  getFilters,
  resetFiltersState,
  setSelectedBrands,
  setSelectedModels,
  setSortMethod,
} from "@/redux/features/filters/store/filters";

const FilterBoxMenu = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector(getFilters);
  const brandList = filters.brands;
  const modelsBySelectedBrands = filters.modelsBySelectedBrands;
  const selectedBrands = filters.selectedBrands;
  const selectedModels = filters.selectedModels;
  const sortMethod = filters.sortMethod;

  const handleSortMethod = (value: SortMethod) => {
    dispatch(setSortMethod(value));
  };

  const handleSelectedBrandsChange = (value: string) => {
    dispatch(setSelectedBrands(value));
  };

  const handleSelectedModelsChange = (value: string) => {
    dispatch(setSelectedModels(value));
  };

  const handleResetAllFilters = () => {
    dispatch(resetFiltersState());
  };

  return (
    <div className="justify-start flex overflow-scroll gap-4 sm:w-full sm:flex-nowrap lg:order-1 lg:flex-col lg:col-span-2 2xl:col-span-2">
      <CustomButton
        className="flex w-fit bg-gray-200 text-xs h-fit p-2 text-start"
        title="Reset-All-Filters"
        buttonText={"Reset"}
        onClick={handleResetAllFilters}
      />
      <RadioButtonGroup
        title="Sort By"
        options={SORT_METHODS}
        selectedValue={sortMethod}
        onChange={handleSortMethod}
      />
      <CheckboxGroupWithSearch
        title="Brands"
        options={brandList}
        selectedValues={selectedBrands}
        onChange={(value) => handleSelectedBrandsChange(value)}
      />
      <CheckboxGroupWithSearch
        title="Model"
        options={modelsBySelectedBrands}
        selectedValues={selectedModels}
        onChange={(value) => handleSelectedModelsChange(value)}
      />
    </div>
  );
};

export default FilterBoxMenu;
