import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 70px repeat(7, 100px) 70px;
    grid-gap: 7px;
    @media screen and (max-width: 720px){
        display: flex;
        flex-direction: column;
        position: relative;
        top: 80px;
    }
`

export const Stats = styled.div`
grid-row: 1 / 2;
grid-column: 1 / 13;
    & ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        margin-top: 10px;
        @media screen and (max-width: 720px) {
                margin-top: 0;
                flex-wrap: wrap;
            }
        & li {
            @media screen and (max-width: 720px) {
                font-size: 0.8em;
                margin: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        & li span {
            font-weight: bolder;
            font-size: 1.3em;
            @media screen and (max-width: 720px) {
                font-size: 1em;
            }
        }
    }
`
///


export const Header = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@600&display=swap');
    grid-row: 2 / 5;
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
    justify-content: center;
    padding: 40px;
    overflow: hidden;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(143,255,157,1) 33%, rgba(0,173,171,1) 100%);   
    font-family: 'Prompt';
    text-align: right;
    @media screen and (max-width: 720px){
            align-items: center;
            text-align: center;
        }
    & h2{
        color: black;
        font-size: 20px;
        @media screen and (min-width: 920px){
            font-size: 35px;
        }
        @media screen and (min-width: 720px){
            font-size: 30px;
        }
    }
    & h5{
        color: #444;
        font-size: 14px;
        @media screen and (min-width: 920px){
            font-size: 20px;
            line-break: normal;
        }
    }
`
export const SignUpBtn = styled.button`
    text-decoration: none;
    color: white;
    background-color: #00adab;
    border-radius: 4px;
    padding: 5px 40px;
    transition: all 0.2s;
    margin: 15px 0;
    font-size: 1.3em;

    &:hover{
        opacity: 0.9
    }
`

///

export const SimplifiedCoins = styled.div`
    background-color: #EEE;
    grid-row: 5 / 10;
    grid-column: 6 / 13;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;

    & .coins-container {
        flex-grow: 1;
        background-color: #EEE;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        border-radius: 4px;
        text-align: center;
        overflow: hidden;
    }

    & h2 {
        margin: 10px;
    }
`
export const CryptoCard = styled.div`
    flex-grow: 1;
    display: flex;    
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    margin: 7px;
    min-width: 180px;
    min-height: 200px; 
    background-color: white;
    transition: transform 300ms, box-shadow 300ms;
    cursor: pointer;
    border-radius: 4px;
    & p {
        font-size: 14px;  
    }
    &:hover{
        transform: scale(1.07);
        box-shadow: 1px 1px 7px black;
    }
`


export const SimplifiedNews = styled.div`
    background-color: #EEE;
    grid-row: 5 / 10;
    grid-column: 1 / 6;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    color: BLACK;
    text-align: center;
    font-size: 14px;
    & h2 {
        margin: 10px;
    }
    & table {
        height: 100%;
        background-color: white;
    }
    & tr td {
        padding: 5px;
        border: 1px solid rgba(0,0,0,0.1);
    }
    & ul li {
        list-style: none;
    }
`
