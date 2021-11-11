import React from 'react'
import styled from 'styled-components'
import { Link as rawLink } from 'react-router-dom'
//Components
import { Crypto24Change } from '../../../../components/Crypto24Change/Crypto24Change'
//
import millify from 'millify'


export const Table = styled.table`
    table-layout: fixed;
    background-color: white;
    border-collapse: collapse;
    grid-column: 1 / 13;
    grid-row: 1 / 9;
    border-bottom: 1px solid gray;
    text-align: left;
    & thead {
        background-color: #e8e8e8;
    }    
    & tr:nth-child(2n+1){
        background-color: #fbfbfb;
    }
    & tr {
        transition: transform 0.2s, background-color 0.2s;
        &:hover{
            transform: scale(1.01);
            background-color: rgba(0, 173, 171, 0.2);
        }
    }


    & tr td, th {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        cursor: pointer;
    }
    th {
        cursor: default;
    }
    @media screen and (max-width: 720px){
        font-size: 12px;
        flex-grow: 1;
    }
`
const Link = styled(rawLink)`
    text-decoration: none;
    color: black;
`


function CryptosTable({coins}) {
    return (
        <Table>
            <thead>
                <th>Rank</th>
                <th>Coin Name</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
            </thead>
            <tbody>
                {coins && coins.map(coin => {
                    return(
                        <tr>
                            <td>{coin.rank}</td>
                            <td>
                                <Link to={`/cryptocurrencies/${coin.rank}`}>
                                    <img alt="" style={{width: 20, display: 'inline-block', marginRight: 10}}src={coin.iconUrl}/>
                                    <strong>{coin.name}</strong>
                                </Link>   
                            </td> 
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
