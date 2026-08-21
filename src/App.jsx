import React from 'react'

import Women from "./Women"
import About from './Header-Pages/About.jsx'
import Contact from './Header-Pages/Contact.jsx'
import Shoes from "./Shoes/Shoes.jsx"
import Footer from './Header/Footer.jsx'
import WishList from "./Header/WishList.jsx"
import Header from "./Header/Header.jsx"
import Home from './Header-Pages/Home.jsx'
import Men from './Men.jsx'
import images from "./images"



import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App(){

const [count, setCount]=React.useState(0);
const [addCart, setAddCart]=React.useState(false);
const [isActive, setIsActive]=React.useState(images[0].src);
const [selectedShoe, setSelectedShoe]=React.useState(null);

const [page, setPage] = React.useState("home");

const[cartItems, setCartItems] = React.useState([]);



  return(
  
     
     <BrowserRouter>
     
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/wishlist" element ={<WishList />} />
          <Route path="/men" element={<Men/>} />
          <Route path="/men/:id" element ={<Shoes/>} />
          
          <Route path="/women" element={<Women/>}/> 
          <Route path="/women/:id" element ={<Shoes/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />

        
        </Routes>
      <Footer/>
     
     </BrowserRouter>


    
  )
}



