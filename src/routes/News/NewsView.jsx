import React, {useEffect, useState} from 'react'

//Components
import { MainContainer, SearchSection, NewsSection, NewsContainer } from './NewsElements'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { News } from '../../components/News/News'

//API's hooks
import { useGetNewsQuery } from '../../services/newsApi'
import { useGetCryptosQuery } from '../../services/cryptoApi'

//Media
import linus from './linus.jpg'


function NewsView() {
    const [newsQuery, setNewsQuery] = useState("bitcoin");

    const { data: news, isFetching: isGetNewsQueryFetching } = useGetNewsQuery(newsQuery);
    const { data: coins, isFetching: isGetCryptosQueryFetching } = useGetCryptosQuery();
    //
    

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
                <SearchBar 
                    coins={isGetCryptosQueryFetching ? null : coins} 
                    handleSelect={handleSelectChange}
                />
            </SearchSection>
            <NewsSection>
                {!isGetNewsQueryFetching && news?.value.map(noticia => <News news={noticia}></News>)}
            </NewsSection>
        </MainContainer>
    )
}

export default NewsView
