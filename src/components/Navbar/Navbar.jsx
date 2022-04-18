import React from 'react';
import './Navbar.css';
import { RiGithubLine } from "react-icons/ri";
import { FaDev } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar">
            <p>Snake Online</p>
            <div className='logo-con'>
                <FaDev className="logo" onClick={()=>window.open("https://dev.to/anomic30")}/>
                <RiGithubLine className="logo" onClick={()=>window.open("https://github.com/anomic30")}/>
            </div>
        </div>
    )
}

export default Navbar