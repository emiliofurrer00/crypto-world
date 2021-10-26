import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;    
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 100px);
`

export const SearchSection = styled.div`
    display: flex;
    justify-content: center;
    background-color: royalblue;
    grid-row: 1 / 2;
    grid-column: 1 / 13;
`

export const SearchBar = styled.select`
    background-color: red;
    border-radius: 5px;
`