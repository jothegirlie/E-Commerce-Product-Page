import React from 'react'
import Header from './Header'
import Home from './Home'
import Men from './Men'
import Women from "./Women"
import Product from './Product'
import About from './About'
import Contact from './Contact'
import SignUp from './Sing-up'

import images from "./images"

export default function App(){

const [count, setCount]=React.useState(0);
const [addCart, setAddCart]=React.useState(false);
const [isActive, setIsActive]=React.useState(images[0].src);
const [selectedShoe, setSelectedShoe]=React.useState(null);

const [page, setPage] = React.useState("home");

const[cartItems, setCartItems] = React.useState([]);

const removeFromCart = (index) =>{
  setCartItems(prev => prev.filter((item,position) => position !== index))
}

  return(
     <>
    <Header count={count} addCart={addCart} image={isActive} setAddCart={setAddCart}
    setPage={setPage} cartItems={cartItems} removeFromCart={removeFromCart}/>
    <main>   
       {page==="home" && <Home setPage={setPage}/>}
       {page==="men" && <Men setSelectedShoe={setSelectedShoe} setPage={setPage} />}
       {page==="women" && <Women setSelectedShoe={setSelectedShoe} setPage={setPage}/>}
       {page ==="product" &&  <Product selectedShoe={selectedShoe} setCartItems={setCartItems} 
       cartItems={cartItems}/>}
       {page==="about" && <About/>}
       {page==="contact" && <Contact/>}
       {page==="signUp" && <SignUp/>}
  </main>

    </>
  )
}