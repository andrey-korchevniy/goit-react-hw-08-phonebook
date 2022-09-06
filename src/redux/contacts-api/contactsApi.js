import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants/constants';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['TagContact'],
  endpoints: builder => ({
    // get all contacts
    getContactsApi: builder.query({
      query: () => `/contacts`,
      providesTags: ['TagContact'],
      keepUnusedDataFor: 2,
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
  useGetContactsApiQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
