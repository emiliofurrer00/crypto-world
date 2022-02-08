import React from 'react'
//Components
import { MainContainer } from './CryptocurrenciesElements'
import CryptosTable from './components/CryptosTable/CryptosTable'
//API's hooks
import { useGetCryptosQuery } from '../../services/cryptoApi'


function Cryptocurrencies() {
    const {data: coins, isFetching } = useGetCryptosQuery();
    if (isFetching){
        return <h1>Loading...</h1>
    }
    return (
        <MainContainer>
            <CryptosTable coins={coins} />
        </MainContainer>
    )
}

export default Cryptocurrencies
