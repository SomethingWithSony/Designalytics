import React from "react";

import Button from '../Button/Button'
import logo from '../../assets/logo.png';

import person from '../../assets/jane.jpg';

import './header.scss'

function Header () {
    return (
        <header>
            <a href="#" className="logo">
                <img src={logo} alt="Logo" />
            </a>

            <div className="header-right">
                <nav>
                    <div className="user">
                        <img src={person} alt="Profile Picture" />
                        <a href="#">Jane Doe</a>
                    </div>

                    {/* <Button item="Signout" url="#" className="hide-mobile"  /> */}
                    <a href="#" className="menu hide-tablet">
                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5625 11C27.5625 10.2751 26.9749 9.6875 26.25 9.6875H1.75C1.02513 9.6875 0.4375 10.2751 0.4375 11C0.4375 11.7249 1.02513 12.3125 1.75 12.3125H26.25C26.9749 12.3125 27.5625 11.7249 27.5625 11Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5625 2.25C27.5625 1.52513 26.9749 0.9375 26.25 0.9375H1.75C1.02513 0.9375 0.4375 1.52513 0.4375 2.25C0.4375 2.97487 1.02513 3.5625 1.75 3.5625H26.25C26.9749 3.5625 27.5625 2.97487 27.5625 2.25Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5625 19.75C27.5625 19.0251 26.9749 18.4375 26.25 18.4375H1.75C1.02513 18.4375 0.4375 19.0251 0.4375 19.75C0.4375 20.4749 1.02513 21.0625 1.75 21.0625H26.25C26.9749 21.0625 27.5625 20.4749 27.5625 19.75Z" fill="white"/>
                        </svg>
                    </a>

                </nav>
            </div>
        </header>
    )
}

export default Header;