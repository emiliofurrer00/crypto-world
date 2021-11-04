import React, { useState } from 'react'
import { NavLink, Bars, NavMenu, NavBtn, Nav, NavBtnLink, Logo } from './NavbarElements'

//icons
import { RiBitCoinLine } from 'react-icons/ri'
import { AiFillHome } from 'react-icons/ai'
import { IoNewspaper } from 'react-icons/io5'
import { BsCoin } from 'react-icons/bs'
import { SiMarketo } from 'react-icons/si'
import { IoMdClose } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'

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
            <Bars onClick={handleToggle}>
                {visibleMenu ? <IoMdClose /> : <FaBars />}
            </Bars>
            <NavMenu isVisible={visibleMenu}> 
                <NavLink to="/" exact activeStyle={{color: '#00f4f0'}}>
                    <AiFillHome className="icon" />
                    Home
                </NavLink>
                <NavLink to="/news" activeStyle={{color: '#00f4f0'}} >
                    <IoNewspaper className="icon" />
                    News
                </NavLink>
                <NavLink to="/cryptocurrencies" activeStyle={{color: '#00f4f0'}} >
                    <BsCoin className="icon" />
                    Cryptocurrencies
                </NavLink>
                <NavLink to="/exchanges" activeStyle={{color: '#00f4f0'}}>
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