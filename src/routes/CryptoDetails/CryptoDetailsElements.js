import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    text-align: right;
    background-color: #EEE;;
    padding: 10px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 80px repeat(5, 1fr);
    grid-gap: 10px;
    @media screen and (max-width: 720px){
        display: flex;
        flex-direction: column;
        position: relative;
        top: 70px;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 4 / 10;
    grid-row: 1 / 2;
    justify-content: center;
    align-items: center;
`


export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 2 / 12;
    grid-row: 4 / 7;
    padding: 10px;
    & h3 {
        margin: 25px 0 15px 0;
    }
`

export const LineChartContainer = styled.div`
    grid-column: 1 / 13;
    grid-row: 2 / 3;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CryptoStatsContainer = styled.div`
    grid-column: 1 / 13;
    grid-row: 3;
`