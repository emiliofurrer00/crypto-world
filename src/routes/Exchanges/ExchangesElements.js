import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    padding: 10px;
    & table {
        width: 100%;
    }
    @media screen and (max-width: 720px) {
        position: relative;
        top: 70px;
    }
`