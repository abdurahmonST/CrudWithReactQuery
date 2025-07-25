import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductType {    
    id: number;
    title: string;
    price: number;
    description: string;
    category: string
    image: string;
    rating: {
        rate: number;
        count: number
    }
}   

export const fakeStoreApi = createApi({
    reducerPath: "fakeStoreApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com'}),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductType[], void>({
            query: () => "products",
        }),
    }),
})

export const { useGetProductsQuery } = fakeStoreApi;