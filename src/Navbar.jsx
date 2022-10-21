import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="div_left">
                 <div className="logo">in</div>
                <input type="search" placeholder="🔍  Search..." className="search_bar" />
                </div>
                <div className="div_right">
                    <ul>
                        <li><NavLink className="NavBarLink" to="/">Home</NavLink></li>
                        <li><NavLink className="NavBarLink" to="/">Network</NavLink></li>
                        <li><NavLink className="NavBarLink" to="/">Messaging</NavLink></li>
                        <li><NavLink className="NavBarLink" to="/">About</NavLink></li>
                        <li><NavLink className="NavBarLink" to="/">Notification</NavLink></li>

                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;