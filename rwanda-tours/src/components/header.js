import React from "react";
import "./header.css";
import logo from "../assets/images/logo#1.png"
const Header = () => {
    return (
        <div className="header-div">
            <div className="logo">
                <img src={logo}></img>
                <div className="Navbar">
                    <a href="/home">Home</a>
                    <a href="/signup">Sign up</a>
                    <a href="/signin">Sign in</a>
                    <a href="/aboutus">About us</a>
                    <a href="/contactus">Contact us</a>
                    <a href="/gallery">Gallery</a>
                </div>
            </div>
            <div>

            </div>





        </div>

    )


}
export default Header;