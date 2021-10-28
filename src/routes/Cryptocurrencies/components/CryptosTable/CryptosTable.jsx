import React from 'react'
import styled from 'styled-components'
//Components
import { Crypto24Change } from '../../../../components/Crypto24Change/Crypto24Change'
//
import millify from 'millify'

const Table = styled.table`
    background-color: white;
    grid-column: 1 / 13;
    grid-row: 1 / 9;
    border-bottom: 1px solid gray;
    & tr {
        transition: transform 0.2s, background-color 0.2s;
        &:hover{
            transform: scale(1.01);
            background-color: rgba(0, 173, 171, 0.2);
        }
    }
    & tr td {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        cursor: pointer;
    }
    @media screen and (max-width: 720px){
        font-size: 12px;
    }
`

function CryptosTable({coins}) {
    return (
        <Table>
            <thead>
                <th>#</th>
                <th>Crypto</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
            </thead>
            <tbody>
                {coins && coins.map(coin => {
                    return(
                        <tr>
                            <td>{coin.rank}</td>
                            <td><img style={{width: 20, display: 'inline-block'}}src={coin.iconUrl}/><strong>{coin.name}</strong></td>
                            <td>${millify(coin.price, {precision: 2})}</td>
                            <td><Crypto24Change coinChange={coin.change} isPositive={coin.change > 0}></Crypto24Change></td>
                            <td>${millify(coin.marketCap, {precision: 2})}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default CryptosTable
