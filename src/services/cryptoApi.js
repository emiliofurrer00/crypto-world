import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '238c0c483dmshb7e242596476834p192dcajsn65239b867053'
};

const cryptoBaseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: cryptoBaseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (limit = 10) => createRequest(`/coins?limit=${limit}`)
        }),
        getStats: builder.query({
            query: () => createRequest('/stats')
        }),
        getExchanges: builder.query({
            query: (parameter = "") => createRequest(`/exchanges${parameter}`)
        })
    })
})



export const { useGetCryptosQuery, useGetStatsQuery, useGetExchangesQuery } = cryptoApi


/*var options = {
    method: 'GET',
    url: '',
    params: {q: '<REQUIRED>', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': '238c0c483dmshb7e242596476834p192dcajsn65239b867053'
    }
  };*/