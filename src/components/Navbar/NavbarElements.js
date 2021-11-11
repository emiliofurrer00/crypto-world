import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    background: #181818;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    z-index: 10;
    position: sticky;
    top: 0px;
    width: 100%;
    @media screen and (max-width: 720px){
        position: fixed;
        width: 100%;
    }
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s;
    margin: 0 10px;
    opacity: 0.;
    font-size: 14px;

    & .nav-logo {
        margin-left: -20px
    }

    & .icon {
        width: 25px;
        height: 25px;
    }
    &:active {
        color: #15cdfc
    }
    &:hover {
        color: rgba(50,185,190, 1);
    }
    
    @media screen and (max-width: 720px){
        transform: scale(0.9);
        display: flex;
        justify-content: center;
    }
`
export const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 720px){
        opacity: 0.95;
        display: flex;
        background-color: #222225;
        font-size: 1.3rem;
        flex-direction: column;
        align-items: center;
        position: fixed;
        width: 100%;
        top: 70px;
        bottom: 0;
        left: -100%;
        z-index: 10;
        transition: all 0.5s;
        transform: ${props => props.isVisible ? 'translateX(+100%)' : ''}
    }
`

export const Bars = styled.div`
    color: white;
    display: none;

    @media screen and (max-width: 720px){
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 1.8rem;
        cursor: pointer;
        transform: translate(-100%, 40%);
        z-index: 11;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 720px){
        display: none;
    }
`


export const NavBtnLink = styled(Link)`
    text-decoration: none;
    color: white;
    background-color: #00adab;
    border-radius: 4px;
    padding: 5px 25px;
    transition: all 0.2s;

    &:hover{
        opacity: 0.9
    }
`

export const Logo = styled.img`
    width: 35px;
`