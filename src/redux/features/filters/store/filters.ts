import { SortMethod } from "@/app/lib/types";
import { RootState } from "@/redux/store";
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
    setSelectedBrands: (state, action) => {
      if (state.selectedBrands.includes(action.payload)) {
        state.selectedBrands = state.selectedBrands.filter(
          (brand) => brand !== action.payload
        );
        state.selectedModels = state.selectedModels.filter(
          (model) => !state.modelsByBrand[action.payload].includes(model)
        );
        return;
      }
      state.selectedBrands.push(action.payload);
    },
    setModels: (state, action) => {
      state.models = action.payload;
    },
    setModelsByBrand: (state, action) => {
      state.modelsByBrand = action.payload;
    },
    setModelsBySelectedBrands: (state, action) => {
      state.modelsBySelectedBrands = action.payload;
    },
    setSelectedModels: (state, action) => {
      if (state.selectedModels.includes(action.payload)) {
        state.selectedModels = state.selectedModels.filter(
          (model) => model !== action.payload
        );
        return;
      }
      state.selectedModels.push(action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previousPage: (state) => {
      state.currentPage -= 1;
    },
    setSortMethod: (state, action) => {
      state.sortMethod = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  resetFiltersState,
  setBrands,
  setSelectedBrands,
  setModels,
  setModelsByBrand,
  setSelectedModels,
  setModelsBySelectedBrands,
  setCurrentPage,
  nextPage,
  previousPage,
  setSortMethod,
  setSearchTerm,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const getFilters = (state: RootState) => state.filters;
