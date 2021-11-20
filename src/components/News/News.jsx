import moment from "moment";
import styled from "styled-components";

//media
import stockImage from './stockImage.png';

//Main container
const StyledNews = styled.a`
    text-decoration: none;
    color: black;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    min-width: 300px;
    max-width: 30%;
    max-height: 400px;
    padding: 15px;
    margin: 10px;
    transition: transform 0.4s, box-shadow 0.4s;
    @media screen and (max-width: 720px){
        max-width: 100%;
    }
    &:hover{
        transform: scale(1.01);
        box-shadow: 1px 1px 4px black;
    }
`
//Header
const NewsHeader = styled.div`
    display: flex;
    align-items: flex-start;
`
const Image = styled.img`
    display: inline-block;
    width: 85px;
    height: 85px;
`
const NewsTitle = styled.h4`
    display: inline;
    padding-left: 10px;
    font-size: 1.03em;
`
//Description
const NewsDescription = styled.p`
`

//Footer
const NewsFooter = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 10px;
`
const ProviderInfo = styled.div`
    display: flex;
    & img {
        width: 16px;
        margin-right: 5px;
    }
`


export const News = ({news}) => {
    return (
        <StyledNews href={news.url} rel="noreferrer" target="_blank">
            <NewsHeader>
                <Image src={news?.image?.thumbnail?.contentUrl}/>
                <NewsTitle>{news.name}</NewsTitle> 
            </NewsHeader>
            <NewsDescription>{news.description}</NewsDescription>
            <NewsFooter>
                <span>{moment(news.datePublished).startOf('ss').fromNow()}</span>
                <ProviderInfo>
                    <img alt="" src={news.provider[0]?.image?.thumbnail?.contentUrl || stockImage } />
                    <span>{news.provider[0].name}</span>
                </ProviderInfo>
            </NewsFooter>
            
        </StyledNews>
    )
}
//<a href={news.url} rel="noreferrer" target="_blank" style={{position: 'absolute', width: '90%', height: '90%'}} />
// const formatTime = (rawDate) => {
//     const date = new Date(`${rawDate}`);
//     return date.toTimeString().split(" ")[0];
// }