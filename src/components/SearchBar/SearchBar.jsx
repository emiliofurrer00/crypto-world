import styled from "styled-components";

const StyledSelectBar = styled.select`
    background-color:rgba(0, 173, 171, 1);
    color: white;
    border-radius: 5px;
    width: 200px;
    font-size: 15px;
    margin: 5px;
`

export function SearchBar({coins, handleSelect}) {
    if (coins){
        console.log(coins)
    }

    return (
        <>
        <StyledSelectBar name="news-query" onChange={handleSelect}>
            {coins && coins?.data?.coins?.map((coin, index) => <option key={index} value={parseString(coin.name)}>{coin.name}</option>)}
        </StyledSelectBar>
        </>
    )
}

//utility functions 
const parseString = (string) => {
    return string.replace(" ", "-")
}