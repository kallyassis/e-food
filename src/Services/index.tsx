import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ebac.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurantFood: builder.query<Food[], void>({
      query: () => "restaurantes",
    }),
    getRestaurantByID: builder.query<Food, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetRestaurantFoodQuery,
  useGetRestaurantByIDQuery,
  usePurchaseMutation,
} = api;

export default api;
