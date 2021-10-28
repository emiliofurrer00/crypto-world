import React, { useEffect, useRef } from 'react'

//Components
import { MainContainer, Header, SimplifiedCoins, SimplifiedNews, StyledTable, CryptoCard, Stats, SignUpBtn} from './HomeElements'
import { Crypto24Change } from '../../components/Crypto24Change/Crypto24Change'

import millify from 'millify';

//icons
import { SiBitcoinsv, SiMarketo } from 'react-icons/si'
import { BsCurrencyExchange } from 'react-icons/bs'
import { RiBitCoinLine } from 'react-icons/ri'
import { BiCoinStack } from 'react-icons/bi'

import { useGetCryptosQuery, useGetStatsQuery, useGetExchangesQuery } from '../../services/cryptoApi'


function Home() {
    const { data, isFetching: isCryptosQueryFetching } = useGetCryptosQuery();

    const { data: stats, isFetching: isStatsQueryFetching } = useGetStatsQuery();

    const { data: exchanges, isFetching: isExchangesQueryFetching } = useGetExchangesQuery('?limit=10');
    
    setTimeout(()=>{
        console.log(data);
        console.log(stats);
        console.log(exchanges);
    }, 3000)
    
    //isStatsQueryFetching ? "" : Object.values(stats?.data);
    

    if (isCryptosQueryFetching || isStatsQueryFetching || isExchangesQueryFetching){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <MainContainer>
                <Stats>
                    {!isStatsQueryFetching && stats &&
                    <ul>
                        <li colSpan={3}> Total Coins: <br/><span><SiBitcoinsv />{stats?.data['totalCoins']}</span></li>
                        <li colSpan={3}> Total Markets: <br/><span><SiMarketo />{stats?.data['totalMarkets']}</span></li>
                        <li colSpan={3}> Total Exchanges: <br/><span><BsCurrencyExchange />{stats?.data['totalExchanges']}</span></li>
                        <li colSpan={3}> Total Market Cap: <br/><span><SiBitcoinsv />{millify(stats?.data['totalMarketCap'])}</span></li>
                        <li colSpan={3}> Total 24h Volume: <br/><span><SiBitcoinsv />{millify(stats?.data['total24hVolume'])}</span></li>
                    </ul>}
                </Stats>
                <Header>
                    <RiBitCoinLine style={{position: 'absolute', width: 230, height: 230, opacity: 0.2, right: '2%', top: '26%', color: 'white'}} />
                    <BiCoinStack style={{position: 'absolute', width: 180, height: 180, opacity: 0.2, right: '13%', top: '40%', color: 'white'}}/>
                    <h2>Stay up-to-date and step-up your game</h2>
                    <h5>Get the cringiest stats and information about the crypto world with this sussy webapp</h5>
                    <SignUpBtn>Sign up</SignUpBtn>
                </Header>
                <SimplifiedNews>
                    <h2>Exchanges</h2>
                    {!isExchangesQueryFetching &&
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Volume</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {exchanges?.data?.exchanges.map(exchange => {
                                    return(
                                        <tr>
                                            <td>#{exchange.rank}</td>
                                            <td><img style={{width: 20, height: 20, display: 'inline-block', marginRight: 10}} src={exchange.iconUrl}/>{exchange.name}</td>
                                            <td>${millify(exchange.volume, {precision: 5})}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </SimplifiedNews>
                <SimplifiedCoins>
                    <h2>Top cryptocurrencies</h2>
                    <div className="coins-container">
                    {data?.data?.coins.map(coin => {
                        return (
                            <CryptoCard>
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <strong>#{coin.rank}</strong><img style={{width: 40, display: 'inline-block'}}src={coin.iconUrl}/><span><i>{coin.symbol}</i></span>
                                </div>
                                <h3>{coin.name}</h3>
                                <p>Price: ${millify(coin.price, {precision: 2})}</p>
                                <Crypto24Change isPositive={coin.change > 0} coinChange={coin.change} />
                            </CryptoCard>
                        )
                    })}
                    </div>
                </SimplifiedCoins>
            </MainContainer>  
        </>
    )
}

export default Home
