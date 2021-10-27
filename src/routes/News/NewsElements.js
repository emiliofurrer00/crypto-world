import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;    
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 100px);
    @media screen and (max-width: 720px){
        display: flex;
        flex-direction: column;
        position: relative;
        top: 80px;
    }
`

export const SearchSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: honeydew;
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