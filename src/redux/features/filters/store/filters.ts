import { RootState } from "@/redux/store";
import { SortMethod } from "@/app/lib/types";
import { createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  brands: string[];
  models: string[];
  modelsByBrand: { [key: string]: string[] };
  modelsBySelectedBrands: string[];
  selectedBrands: string[];
  selectedModels: string[];
  currentPage: number;
  sortMethod: SortMethod;
  searchTerm: string;
}

const initialState: FiltersState = {
  brands: [],
  models: [],
  modelsByBrand: {},
  modelsBySelectedBrands: [],
  selectedBrands: [],
  selectedModels: [],
  currentPage: 1,
  sortMethod: {
    sortBy: "createdAt",
    order: "desc",
  },
  searchTerm: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    resetFiltersState: (state) => {
      state.selectedBrands = [];
      state.selectedModels = [];
      state.sortMethod = initialState.sortMethod;
      state.searchTerm = initialState.searchTerm;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
  },
});

export const { resetFiltersState, setBrands } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const getFilters = (state: RootState) => state.filters;
