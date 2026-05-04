import logo from "/images/logo.svg"
import cart from "/images/icon-cart.svg"
import profile from "/images/image-avatar.png"
import React from "react"
import Cart from "./Cart"


export default function Header(props){
const [isActive, setIsActive] = React.useState(false)


    return(
<header>
<nav className="leftNav">
<h1>sneakers</h1>
<h3 onClick={()=> props.setPage("home")}>Home</h3>
<h3 onClick={()=> props.setPage("men")}>Men</h3>
<h3 onClick={() => props.setPage("women")}>Women</h3>
<h3 onClick={() => props.setPage("about")}>About</h3>
<h3 onClick={() => props.setPage("contact")}>Contact</h3>
</nav>

<nav className="rightNav">
<img src={cart} alt="" onClick={() => setIsActive(prev=> !prev)} className="cartIcon"/>

<img src={profile} alt="" className="profilePic" />
</nav>

{isActive && <Cart cartItems={props.cartItems} removeFromCart={props.removeFromCart}/>}

</header>



    )
}