import { api } from "@/redux/api";
import { END_POINTS } from "@/app/lib/end-points";
import { Product, SortMethod } from "@/app/lib/types";

interface ProductsResponse {
  products: Product[];
  totalPageCount: number;
}

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProductList: builder.query<Product[], void>({
      query: () => `/${END_POINTS.products}`,
    }),

    getProductListByFilters: builder.query<
      ProductsResponse,
      {
        page: number;
        limit: number;
        sortMethod: SortMethod;
        filterMethod: {
          brands: string[];
          models: string[];
          searchTerm: string;
        };
      }
    >({
      query: () => `/${END_POINTS.products}`,
    }),

    getProductById: builder.query<Product, string>({
      query: (id) => `/${END_POINTS.products}/${id}`,
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetProductListByFiltersQuery,
  useGetProductByIdQuery,
  useGetAllProductListQuery,
} = productsApi;
