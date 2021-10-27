import styled from "styled-components";
import { IoSearch } from 'react-icons/io5'

const StyledSelectBar = styled.select`
    background-color: #e7ffff;
    border-radius: 5px;
    width: 100px;
    font-size: 15px;
`

export function SearchBar({coins, handleSelect}) {
    if (coins){
        console.log(coins)
    }

    return (
        <>
        <IoSearch/>
        <StyledSelectBar name="news-query" onChange={handleSelect}>
            {coins && coins?.data?.coins?.map(coin => <option value={parseString(coin.name)}>{coin.name}</option>)}
        </StyledSelectBar>
        </>
    )
}

//utility functions 
const parseString = (string) => {
    return string.replace(" ", "-")
}