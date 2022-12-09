import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <nav className="header-container">
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <Link to='/'><img src="	https://www.gighub.kr/images/icon/logo.png" alt="logo" /></Link>
                    <ul>
                        <li><Link className="header-nav-item" to='/movie'>Movie</Link></li>
                        <li><Link className="header-nav-item" to="/tv">TV</Link></li>
                        <li><Link className="header-nav-item" to="/person">Person</Link></li>
                    </ul>
                </div>
                <div className="header-left-wrap"></div>
            </div>
        </nav>
    )
}