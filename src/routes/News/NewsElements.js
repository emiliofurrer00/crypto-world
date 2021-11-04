import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;    
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 80px repeat(7, 100px);
    @media screen and (max-width: 720px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        top: 70px;
    }
`

export const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.3);
    grid-row: 1 / 2;
    grid-column: 1 / 13;
`

export const NewsSection = styled.div`
    grid-row: 2 / 9;
    grid-column: 1 / 13;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`