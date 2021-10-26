import React, { useState } from 'react'
import { NavLink, Bars, NavMenu, NavBtn, Nav, NavBtnLink, Logo } from './NavbarElements'
//icons
import { RiBitCoinLine } from 'react-icons/ri'
import { AiFillHome } from 'react-icons/ai'
import { IoNewspaper } from 'react-icons/io5'
import { BsCoin } from 'react-icons/bs'
import { SiMarketo } from 'react-icons/si'

function Navbar() {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const handleToggle = () => {
        setVisibleMenu(!visibleMenu)
    }

    return (
        <Nav>
            <NavLink to="/">
                <RiBitCoinLine className="nav-logo" style={{width: 70, height: 70}}/>
            </NavLink>
            <Bars onClick={handleToggle}/>
            <NavMenu isVisible={visibleMenu}> 
                <NavLink to="/" >
                    <AiFillHome className="icon" />
                    Home
                </NavLink>
                <NavLink to="/news" >
                    <IoNewspaper className="icon" />
                    News
                </NavLink>
                <NavLink to="/cryptocurrencies" >
                    <BsCoin className="icon" />
                    Cryptocurrencies
                </NavLink>
                <NavLink to="/exchanges" >
                    <SiMarketo className="icon" />
                    Exchanges
                </NavLink>
            </NavMenu >
            <NavBtn>
                <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
//<NavBtnLink to="/signin">Sign In</NavBtnLink>