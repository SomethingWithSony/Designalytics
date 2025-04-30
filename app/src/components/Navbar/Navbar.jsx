import "./navbar.scss"
import React from "react"
import NavItem from "../NavItem/NavItem";


import Exit from "../../assets/mobile-exit.svg";


function Navbar({ isOpen, onClose }) {
    return (
        <aside className={isOpen ? 'toggle-menu' : ''}>
            <img src={Exit} alt="Exit mobile menu" class="exit hide-tablet" onClick={(e) => {
            e.preventDefault();
            onClose();
            }}/> 
            <nav>
                <ul>
                    <NavItem item="home" />
                    <NavItem item="messages" />
                    <NavItem item="account" />
                    <NavItem item="support" />
                </ul>

                
            </nav>
        </aside>
    );
}

export default Navbar;