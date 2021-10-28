import React from 'react'
import styled from 'styled-components'
//Icons
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

const Value = styled.p`
    color: ${props => props.isPositive ? "green" : "red"};
`

export function Crypto24Change({isPositive, coinChange}) {
    return (
        <>
            <Value isPositive={isPositive}>{isPositive ? <AiFillCaretUp /> : <AiFillCaretDown />}{coinChange}%</Value>
        </>
    )
}

