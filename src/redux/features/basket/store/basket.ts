import { ExtendedProduct } from "@/app/lib/types";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface BasketState {
  productList: ExtendedProduct[];
  basketAmount: string;
}

const initialState: BasketState = {
  productList: [],
  basketAmount: "0.00",
};

const calculateBasketAmount = (products: ExtendedProduct[]): string => {
  return products
    .reduce(
      (total, product) =>
        total + parseInt(product.price) * parseInt(product.pcs),
      0
    )
    .toFixed(2)
    .toString();
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    resetBasketState: () => initialState,
    addItemToBasket: (state, action) => {
      state.productList.push(action.payload);
      state.basketAmount = calculateBasketAmount(state.productList);
    },
    incrementProductQuantity: (state, action) => {},
    decrementProductQuantity: (state, action) => {},
  },
});

export const {
  resetBasketState,
  addItemToBasket,
  incrementProductQuantity,
  decrementProductQuantity,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

export const getBasket = (state: RootState) => state.basket;
