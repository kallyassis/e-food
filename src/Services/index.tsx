import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Food } from "../Pages/Home";

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
  }),
});

export const { useGetRestaurantFoodQuery, useGetRestaurantByIDQuery } = api;

export default api;
