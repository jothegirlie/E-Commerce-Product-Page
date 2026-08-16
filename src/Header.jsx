import logo from "/images/logo.svg"
import profile from "/images/image-avatar.png"
import React from "react"
import "./header.css"
import Cart from "./Cart/Cart"
import CartDropdown from "./Cart/CartDropdown"
import CartButton from "./Cart/CartButton"

import {NavLink } from "react-router-dom"

export default function Header(props){
const [isActive, setIsActive] = React.useState(false)


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
             <Cart>
                <CartButton> 
                    <i className="fa-solid fa-cart-shopping"></i> 
                </CartButton>
                <CartDropdown>
                    <h1>hi</h1>
                </CartDropdown>
            </Cart>
            <Cart>
                <CartButton> 
                    <i className="heart fa-regular fa-heart"></i>
                </CartButton>
                <CartDropdown>
                    <h1>hi</h1>
                </CartDropdown>
            </Cart>

            <img src={profile} alt="" className="profilePic" />
    
        </nav>
</header>



    )
}