import React from 'react'
//Components
import { Table } from '../Cryptocurrencies/components/CryptosTable/CryptosTable';
import { MainContainer } from './ExchangesElements';
import ExchangeTableRow from './ExchangeTableRow';
//API hooks
import { useGetExchangesQuery } from '../../services/cryptoApi'


function Exchanges() {
    const { data, isFetching } = useGetExchangesQuery();

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    return (
        <MainContainer>
            <Table>
            <colgroup>
                <col style={{width:"25%"}}/>
                <col style={{width:"80%"}}/>
                <col style={{width:"40%"}}/>
                <col style={{width:"40%"}}/>
                <col style={{width:"40%"}}/>
            </colgroup>  
            <thead>
                <th>Rank</th>
                <th>Exchange</th>
                <th>24h Volume</th>
                <th># Markets</th>
                <th>Market Share</th>
            </thead>
            <tbody>
                {data && data?.map((exchange, index) => <ExchangeTableRow exchange={exchange} rank={index+1}/>)}
            </tbody>
        </Table>
        </MainContainer>
    )
}

export default Exchanges
