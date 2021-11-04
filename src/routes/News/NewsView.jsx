import React, {useEffect, useState} from 'react'

//Components
import { MainContainer, SearchSection, NewsSection, NewsContainer } from './NewsElements'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { News } from '../../components/News/News'
import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

//API's hooks
import { useGetNewsQuery } from '../../services/newsApi'
import { useGetCryptosQuery } from '../../services/cryptoApi'

//Media


const SearchIcon = styled(IoSearch)`
    position: absolute;
    width: 75px;
    height: 75px;
    right: 20px;
    opacity: 0.4;
    @media screen and (max-width: 720px){
        width: 50px;
        height: 50px;
    }
`


function NewsView() {
    const [newsQuery, setNewsQuery] = useState("bitcoin");

    const { data: news, isFetching: isGetNewsQueryFetching } = useGetNewsQuery(newsQuery);
    const { data: coins, isFetching: isGetCryptosQueryFetching } = useGetCryptosQuery(50);
    

    const handleSelectChange = (e) => {
        console.log(e.target.value)
        setNewsQuery(e.target.value)
    }

    useEffect(() => {
        if (!isGetNewsQueryFetching){
            console.log(news)
        }
    }, [isGetNewsQueryFetching, news])


    return (
        <MainContainer>
            <SearchSection>
                <h4>Search news by cryptocurrency</h4>
                <SearchBar 
                    coins={isGetCryptosQueryFetching ? null : coins} 
                    handleSelect={handleSelectChange}
                />
                <SearchIcon />
            </SearchSection>
            <NewsSection>
                {!isGetNewsQueryFetching && news?.value.map((noticia, index)=> <News key={index} news={noticia}></News>)}
            </NewsSection>
        </MainContainer>
    )
}

export default NewsView
