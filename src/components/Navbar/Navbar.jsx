import React, { useState } from "react";
import { Link } from "react-router-dom";

//Style
import './navbar.css'

//Icons
import { FaBars } from "react-icons/fa";
import { ImCross } from 'react-icons/im';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className="navbar-container">
                <h1>Mundo cripto</h1>
                <div className="menu-button" onClick={()=>setIsOpen(!isOpen)}>
                    {isOpen ? <ImCross/> : <FaBars />}
                </div>
                <div className="navbar sidebar">
                    <ul>

                    </ul>
                </div>
            </div>
        </nav>
    )
} 

