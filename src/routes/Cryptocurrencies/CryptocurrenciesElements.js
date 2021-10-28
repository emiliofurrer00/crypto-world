import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(12, 1fr);
    padding: 10px;
    @media screen and (max-width: 720px){
        display: flex;
        justify-content: center;
        position: relative;
        top: 70px;
    }
`