import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
    return <nav className="navbar">
        <Link to="/">
            <img className="navbar-logo" src="https://i.pinimg.com/736x/1a/60/04/1a6004a4a8decf0e4ad8eb7f123569af.jpg" alt=""/>
        </Link>
        <div className="navbar-elements">
            <div>About</div>
            <div>Contacts</div>
            <div>Developers</div>
            <div className="navbar-login-btn">Login</div>
        </div>
    </nav>
}

export default Navbar