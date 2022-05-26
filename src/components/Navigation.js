import { useState } from "react";
// import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import logo from "../img/dnzLogoClaro128.webp";

export default function Navigation() {

    return (
        <>
            <h1 className="h1">
                <a href="#headline" title="Dani Sanz" className="h1__a">.dnz</a>
            </h1>
            <nav className="nav">
                <ul className="nav__ul">
                    <li className="nav__li"><a href="#works" className="nav__a" title="works">works</a></li>
                    <li className="nav__li"><a href="#bio" className="nav__a" title="bio">about</a></li>
                    <li className="nav__li"><a href="#contact" className="nav__a" title="contact">contact</a></li>
                </ul>
            </nav>
        </>
    )
} 