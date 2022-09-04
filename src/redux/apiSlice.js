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
    // get all contacts
    getMockApi: builder.query({
      query: () => `/contacts`,
      providesTags: ['TagContact'],
    }),
    // create a new contact
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['TagContact'],
    }),
    // delete contact
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TagContact'],
    }),
  }),
});

export const {
  useGetMockApiQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = mockApi;
