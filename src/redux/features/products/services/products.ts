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

    // This query has a complex structure due to the weak filtering and search capabilities of the API service used.
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
      query: ({ page, limit, sortMethod, filterMethod }) => {
        const sortQuery = `&sortBy=${sortMethod.sortBy}&order=${sortMethod.order}`;
        const brands = filterMethod.brands;
        const models = filterMethod.models;
        const searchTerm = filterMethod.searchTerm;

        const brandsQuery = brands.length ? `&brand=${brands.join("|")}` : "";
        const modelsQuery = models.length ? `&model=${models.join("|")}` : "";
        const searchQuery = searchTerm ? `&search=${searchTerm}` : "";

        const filterUri = `/${END_POINTS.products}/?${sortQuery}${brandsQuery}${modelsQuery}`;
        const unfilterUri = `/${END_POINTS.products}/?page=${page}&limit=${limit}${sortQuery}`;
        const searchUri = `/${END_POINTS.products}/?${searchQuery}${sortQuery}`;

        const isJustFiltering =
          (brands.length > 0 || models.length > 0) && searchTerm.length === 0;
        const isJustSearching =
          brands.length === 0 && models.length === 0 && searchTerm.length > 0;
        const isJustSearchByFilter =
          (brands.length > 0 || models.length > 0) && searchTerm.length > 0;

        return {
          url: isJustFiltering
            ? filterUri
            : isJustSearching
            ? searchUri
            : isJustSearchByFilter
            ? filterUri
            : unfilterUri,

          responseHandler: async (
            response: Response
          ): Promise<ProductsResponse> => {
            const data: Product[] = await response.json();
            let filteredProducts: Product[] = [];

            if (isJustSearchByFilter || isJustSearching) {
              filteredProducts = data.filter((product) =>
                Object.values(product).some((value) =>
                  value
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                )
              );
            } else {
              filteredProducts = data;
            }

            // Ensure that an empty list is returned if no products match the search criteria
            if (isJustSearching && filteredProducts.length === 0) {
              filteredProducts = [];
            }

            const maxPage = Math.ceil(filteredProducts.length / limit);

            const conditionalData =
              isJustFiltering || isJustSearching
                ? filteredProducts.slice((page - 1) * limit, page * limit)
                : filteredProducts;

            return {
              products: conditionalData,
              totalPageCount: maxPage,
            };
          },
        };
      },
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
