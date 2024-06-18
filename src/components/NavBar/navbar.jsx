import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
// import { IoIosContacts } from "react-icons/io";
import {Link} from 'react-scroll'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem" to="">Home</Link>
                <Link className="desktopMenuListItem" to="">About</Link>
                <Link className="desktopMenuListItem" to="">Projects</Link>
                <Link className="desktopMenuListItem" to="">Certifications</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>
        </nav>
    </div>
  )
}