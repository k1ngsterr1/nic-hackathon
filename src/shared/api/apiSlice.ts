import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './_BASE'
import { buildUrl } from './common';

export const apiSlice = createApi({ 
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => `/api/v1/get-product-by-id/${id}`,
      providesTags: ["Product"],
    }),
    getProducts: builder.query({
      query: (params) => buildUrl('/api/v1/get-product-by-id', params),
      providesTags: ["Product"],
    })
  })
})

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;