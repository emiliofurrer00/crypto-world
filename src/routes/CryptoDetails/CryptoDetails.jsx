import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ReactHtmlParser from 'react-html-parser'
import millify from 'millify';

//API hooks
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi';

//Components
import { DescriptionContainer, MainContainer, HeaderContainer, LineChartContainer, CryptoStatsContainer } from './CryptoDetailsElements';
import LineChart from '../../components/LineChart/LineChart';
import CryptoStats from './CryptoStats';

function CryptoDetails() {
    let { id } = useParams();
    const { data, isFetching: isGetCryptoDetailsQueryFetching } = useGetCryptoDetailsQuery(id);

    const [timeFrame, setTimeFrame] = useState("7d");
    const { data: coinHistory, isFetching: isGetCryptoHistoryFetching} = useGetCryptoHistoryQuery({coinId: id, timeFrame});

    const timeFrameOptions = [
        "7d", "24h", "30d", "1y"
    ]

    const handleOptionChange = (e) => {
        setTimeFrame(e.target.value)
    }

    if (isGetCryptoDetailsQueryFetching){
        return <h1>Loading...</h1>
    }

    const { coin } = data.data;

    return (
        <MainContainer>
            <HeaderContainer>   
            <h1>{coin.name} ({coin.slug})</h1>
            <div>
                <img alt="" style={{width: 20, display: 'inline-block', marginRight: 10}}src={coin.iconUrl}/>
                <span>{coin.symbol}</span>
            </div>
            </HeaderContainer>
            <LineChartContainer>
                <LineChart 
                    coinHistory={coinHistory} 
                    currentPrice={millify(coin.price)} 
                    coinName={coin.name}
                    timeFrameOptions={timeFrameOptions}
                    handleOptionChange={handleOptionChange}
                />
            </LineChartContainer>
            <CryptoStatsContainer>
                <CryptoStats coin={coin} />
            </CryptoStatsContainer>
            <DescriptionContainer>
                {ReactHtmlParser(coin.description)}
            </DescriptionContainer>


        </MainContainer>
    )
}

export default CryptoDetails
