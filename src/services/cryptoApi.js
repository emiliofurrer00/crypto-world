import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': '238c0c483dmshb7e242596476834p192dcajsn65239b867053'
}

const cryptoBaseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url) => ({url, headers})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: cryptoBaseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest(`/coins/markets?vs_currency=usd`)
        }),
        getStats: builder.query({
            query: () => createRequest('/stats')
        }),
        getExchanges: builder.query({
            query: (parameter = "") => createRequest(`/exchanges${parameter}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timeFrame}) => createRequest(`/coin/${coinId}/history/${timeFrame}`)
        }),
    })
})



export const { useGetCryptosQuery, useGetStatsQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi
