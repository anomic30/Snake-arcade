import React from 'react';
import './Navbar.css';
import { RiGithubLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className="navbar">
            <p>Snake Online</p>
            <a href="https://github.com/anomic30"><RiGithubLine className="logo"/></a>
        </div>
    )
}

export default Navbar