import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {
  setSelectedBrands,
  setSelectedModels,
} from "@/redux/features/filters/store/filters";
import { SORT_METHODS } from "@/app/lib/constants";
import FilterBoxMenu from "@/app/features/FilterBoxMenu/FilterBoxMenu";

const mockStore = configureStore([]);

describe("FilterBoxMenu Component", () => {
  let store: ReturnType<typeof mockStore>;
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    store = mockStore({
      filters: {
        brands: ["Brand A", "Brand B", "Brand C"],
        modelsBySelectedBrands: ["Model X", "Model Y"],
        selectedBrands: ["Brand A"],
        selectedModels: ["Model X"],
        sortMethod: SORT_METHODS["New to old"],
      },
    });
    store.dispatch = dispatchMock;
  });

  const renderWithProvider = (component: React.ReactElement) =>
    render(<Provider store={store}>{component}</Provider>);

  test("dispatches setSelectedBrands when a brand is selected", () => {
    renderWithProvider(<FilterBoxMenu />);

    fireEvent.click(screen.getByLabelText("Brand B"));

    expect(dispatchMock).toHaveBeenCalledWith(setSelectedBrands("Brand B"));
  });

  test("dispatches setSelectedModels when a model is selected", () => {
    renderWithProvider(<FilterBoxMenu />);

    fireEvent.click(screen.getByLabelText("Model Y"));

    expect(dispatchMock).toHaveBeenCalledWith(setSelectedModels("Model Y"));
  });
});
