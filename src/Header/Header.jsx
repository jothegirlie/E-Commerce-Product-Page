import logo from "/images/logo.svg"
import profile from "/images/image-avatar.png"
import React from "react"
import "./header.css"



import { heartContext } from "../HeartComponent/Heart";


import {NavLink, Link } from "react-router-dom"

export default function Header(){

    const {total} = React.useContext(heartContext)
    return(
    <header>
        <nav className="leftNav">
            <h1>sneakers</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/men">Men</NavLink>
            <NavLink to="/women">Women</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </nav>
        <nav className="rightNav">
            <i className="fa-solid fa-cart-shopping"></i> 
            <div className="total-wish">
            <NavLink to="/wishlist">
                  <i className="heart fa-regular fa-heart"></i>
            </NavLink>
            <h4>{total}</h4>
            </div>
            <img src={profile} alt="" className="profilePic" />  
        </nav>
</header>
    )
}