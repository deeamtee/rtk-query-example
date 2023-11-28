import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AddCardApiArg, AddCardApiResponse, DeleteCardApiArg, DeleteCardApiResponse, FindCardByIdApiArg, FindCardByIdApiResponse, FindCardsApiArg, FindCardsApiResponse } from './cards.types'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (build) => ({
    findCards: build.query<FindCardsApiResponse, FindCardsApiArg>({
      query: () => ({ url: `/cards` }),
    }),
    addCard: build.mutation<AddCardApiResponse, AddCardApiArg>({
      query: (queryArg) => ({
        url: `/cards`,
        method: "POST",
        body: queryArg.newCard,
      }),
    }),
    findCardById: build.query<FindCardByIdApiResponse, FindCardByIdApiArg>({
      query: (queryArg) => ({ url: `/cards/${queryArg.id}` }),
    }),
    deleteCard: build.mutation<DeleteCardApiResponse, DeleteCardApiArg>({
      query: (queryArg) => ({ url: `/cards/${queryArg.id}`, method: "DELETE" }),
    }),
  }),
})

export const { useFindCardByIdQuery, useFindCardsQuery, useAddCardMutation, useDeleteCardMutation } = cardsApi