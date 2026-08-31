import React from "react"
import "./header.css"

import {loggedInContext} from "../Registration/LoggedIn"
import { heartContext } from "../HeartComponent/Heart";
import { cartContext } from "../CartComponent/Cart"


import {NavLink , Link} from "react-router-dom"

export default function Header(){
    
    const [isMobile, setIsMobile] = React.useState(window.innerWidth);
    const {total} = React.useContext(heartContext)
    const {totalCart} = React.useContext(cartContext)
    const {loggedIn} = React.useContext(loggedInContext)
    const [openBurgerMenu, setOpenBurgerMenu] = React.useState(false);
    

    const{setIsLoggedIn} = React.useContext(loggedInContext)
    const {user} = React.useContext(loggedInContext)

    const [dropdown, setDropdown] =React.useState(false);



    React.useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth)
        }
         window.addEventListener("resize", handleResize);

         return  ()=> {
             window.removeEventListener("resize", handleResize);
         }
    }, [] )

    return(
        isMobile > 1200 ? (
            <>
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
              <div className="profile-wrapper" 
              onMouseOver={() => setDropdown(true)}
              onMouseLeave={()=> setDropdown(false)}>
                <i className="fa-regular fa-user"></i>
                {dropdown && 
                <div className="dropdown" on>
                    {!loggedIn ? (
                        <>
                    <h4>I have an account</h4>
                    <Link to="/login"><button>Log in</button></Link>
                    <hr />
                    <h4>I don't have an account</h4>
                   <Link to="/signup"><button id="register">Create an Account</button></Link> 
                   </>
                    ) : (
                        <>
                        <h4>Hello, {user.name}</h4>
                        <hr />
                        <Link to="/myaccount">My Account</Link>
                        <p>Orders</p>
                        <hr />
                        <div className="log-out">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <p onClick={()=> setIsLoggedIn(false)}>Log Out</p>
                        </div>
                        </>
                    ) 
                }
                </div>}
              </div>
            <div className="total-wish"> 
                <NavLink to="/checkout">
                  <i className="fa-solid fa-cart-shopping"></i> 
                </NavLink>
                <h4>{totalCart}</h4>
            </div>
            <div className="total-wish">
                <NavLink to="/wishlist">
                  <i className="heart fa-regular fa-heart"></i>
                </NavLink>
            <h4>{total}</h4>
            </div>
        </nav>
</header> 
</>) :
(  <>
        <header>
            <nav className="leftNav">
                <i class="fa-solid fa-bars" onClick={() => setOpenBurgerMenu(prev => !prev)}></i>
                <h1>sneakers</h1>
            </nav>
            <nav className="rightNav">
              <div className="profile-wrapper" 
              onMouseOver={() => setDropdown(true)}
              onMouseLeave={()=> setDropdown(false)}>
                <i className="fa-regular fa-user"></i>
                {dropdown && 
                <div className="dropdown" on>
                    {!loggedIn ? (
                        <>
                    <h4>I have an account</h4>
                    <Link to="/login"><button>Log in</button></Link>
                    <hr />
                    <h4>I don't have an account</h4>
                   <Link to="/signup"><button id="register">Create an Account</button></Link> 
                   </>
                    ) : (
                        <>
                        <h4>Hello, {user.name}</h4>
                        <hr />
                        <Link to="/myaccount">My Account</Link>
                        <p>Orders</p>
                        <hr />
                        <div className="log-out">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <p onClick={()=> setIsLoggedIn(false)}>Log Out</p>
                        </div>
                        </>
                    ) 
                }
                </div>}
              </div>
            <div className="total-wish"> 
                <NavLink to="/checkout">
                  <i className="fa-solid fa-cart-shopping"></i> 
                </NavLink>
                <h4>{totalCart}</h4>
            </div>
            <div className="total-wish">
                <NavLink to="/wishlist">
                  <i className="heart fa-regular fa-heart"></i>
                </NavLink>
            <h4>{total}</h4>
            </div>
        </nav>
    </header>
    {openBurgerMenu && (
        <div className="burger-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/men">Men</NavLink>
            <NavLink to="/women">Women</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </div>
    )}
    </>
)



    )
}