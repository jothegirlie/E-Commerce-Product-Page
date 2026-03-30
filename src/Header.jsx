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
<img src={logo} alt="" />
<h3>Collections</h3>
<h3>Men</h3>
<h3>Women</h3>
<h3>About</h3>
<h3>Contact</h3>
</nav>

<nav className="rightNav">
<img src={cart} alt="" onClick={() => setIsActive(prev=> !prev)} className="cartIcon"/>

<img src={profile} alt="" className="profilePic" />
</nav>

{isActive && <Cart count={props.count}  
 price={125.00}
    name={"Fall Limited Edition Sneakers"}
    addCart={props.addCart}  setAddCart={props.setAddCart}
/>}

</header>



    )
}