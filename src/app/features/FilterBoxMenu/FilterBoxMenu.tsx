import React from "react";
import { SortMethod } from "@/app/lib/types";
import RadioButtonGroup from "./components/RadioButtonGroup/RadioButtonGroup";
import CheckboxGroupWithSearch from "./components/CheckBoxGroupWithSearch/CheckBoxGroupWithSearch";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import { SORT_METHODS } from "@/app/lib/constants";

const FilterBoxMenu = () => {
  const filters = {brands:["opel","volkswagen","mercedes","audi"],
    modelsBySelectedBrands:[ "Astra", "A3", "A5", "A6" ],
    selectedBrands:["volkswagen"],
    selectedModels:["A3"],
    sortMethod:{
      sortBy: "createdAt",
      order: "asc",
    }
  } ;
  const brandList = filters.brands;
  const modelsBySelectedBrands = filters.modelsBySelectedBrands;
  const selectedBrands = filters.selectedBrands;
  const selectedModels = filters.selectedModels;
  const sortMethod = filters.sortMethod;

  const handleSortMethod = (value: SortMethod) => {
  };

  const handleSelectedBrandsChange = (value: string) => {
  };

  const handleSelectedModelsChange = (value: string) => {
  };

  const handleResetAllFilters = () => {
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
        selectedValue={{
          sortBy: "createdAt",
          order: "asc",
        }}
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
