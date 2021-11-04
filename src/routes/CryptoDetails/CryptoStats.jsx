import styled from "styled-components";
import React from 'react'

//Icons
import { BiMedal } from 'react-icons/bi'
import { MdPriceChange } from 'react-icons/md'

const CryptoStatsContainer = styled.ul`
    background-color: honeydew;
    display: flex;
    flex-direction: column;
`

function CryptoStats({coin}) {
    const { volume, marketCap, price, circulatingSupply, totalSupply, firstSeen, listedAt, change, rank } = coin;
    return (
        <CryptoStatsContainer>
            <li>Rank: <BiMedal />{rank}</li>
            <li>Price: <MdPriceChange /> {price}</li>
            <li>Volume: {volume}</li>
            <li>Market Cap: {marketCap}</li>
            <li>Circulating Supply: {circulatingSupply}</li>
        </CryptoStatsContainer>
    )
}

export default CryptoStats
