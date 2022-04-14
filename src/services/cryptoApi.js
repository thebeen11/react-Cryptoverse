import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "0558395c17mshac1b01f1f41ef58p1f8084jsnb9e84bc0ea7f",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails: builder.query({
      query: (coinID) => createRequest(`/coin/${coinID}`),
    }),
    getCryptosHistory: builder.query({
        query: ({coinID, timePeriod}) => createRequest(`coin/${coinID}/history?timeperiod=${timePeriod}`),
      }),
  }),
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistoryQuery } = cryptoApi;
