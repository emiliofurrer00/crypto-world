import styled from "styled-components";

const StyledNews = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-color: azure;
    min-width: 350px;
    max-width: 45%;
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
const Image = styled.img`
    display: inline-block;
    width: 100px;
    height: 100px;
`
const NewsTitle = styled.h4`
    display: inline;
    padding-left: 10px;
    font-size: 1.05em;
`

const NewsHeader = styled.div`
    display: flex;
    align-items: flex-start;
`
const NewsFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 12px;
`


export const News = ({news}) => {
    return (
        <StyledNews>
            <NewsHeader>
                <Image src={news?.image?.thumbnail?.contentUrl}/>
                <NewsTitle>{news.name}</NewsTitle> 
            </NewsHeader>
            <p>{news.description}</p>
            <NewsFooter>
                <span>{formatTime(news.datePublished)}</span>
                <span>{news.provider[0].name}</span>
            </NewsFooter>
        </StyledNews>
    )
}

const formatTime = (rawDate) => {
    const date = new Date(`${rawDate}`);
    return date.toTimeString().split(" ")[0];

}