import React from 'react'
import Header from './Header'
import Home from './Home'
import Men from './Men.jsx'
import Women from "./Women"
import Product from './Product'
import About from './About'
import Contact from './Contact'
import SignUp from './Sing-up'

import images from "./images"



import {BrowserRouter, Routes, Route} from "react-router-dom"

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
  
     
     <BrowserRouter>
     
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/men" element={<Men/>} />
          <Route path="/women" element={<Women/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
     
     
     </BrowserRouter>


    
  )
}

