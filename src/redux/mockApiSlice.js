import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants/constants';

export const mockApi = createApi({
  reducerPath: 'mockApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['TagContact'],
  endpoints: builder => ({
    getMockApi: builder.query({
      query: () => `/contacts`,
      providesTags: ['TagContact'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['TagContact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TagContact'],
    }),
    toTrashContact: builder.mutation({
      query: data => ({
        url: `/contacts/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['TagContact'],
    }),
  }),
});

export const {
  useGetMockApiQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useToTrashContactMutation,
} = mockApi;
