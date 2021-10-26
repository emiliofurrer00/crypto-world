import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const headers = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '238c0c483dmshb7e242596476834p192dcajsn65239b867053'
};
const newsBaseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({url, headers})

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: newsBaseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (searchTerm = "crypto") => createRequest(`/search?q=${searchTerm}`)
        })
    })
})

export const { useGetNewsQuery } = newsApi;