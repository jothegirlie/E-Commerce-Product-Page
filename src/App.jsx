import React from 'react'

import Women from "./Women"
import About from './Header-Pages/About.jsx'
import Contact from './Header-Pages/Contact.jsx'
import Shoes from "./Shoes/Shoes.jsx"
import WishList from "./Header/WishList.jsx"
import Home from './Header-Pages/Home.jsx'
import Men from './Men.jsx'
import Checkout from "./Header/Checkout.jsx"
import AuthLayout from "./Header/AuthLayout.jsx"
import Pay from "./Checkout/Pay.jsx"
import Privacy from './Privacy.jsx'
import Terms from './Terms.jsx'
import SneakersClub from "./SneakersClub.jsx"


import MainLayout from './Header/MainLayout.jsx'

import LogIn from './Registration/LogIn.jsx'
import SignUp from './Registration/SignUp.jsx'
import MyAccount from './Header/MyAccount.jsx'


import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App(){


  return(
  
     
     <BrowserRouter>
     

        <Routes>
      
          <Route path="" element ={<MainLayout/>} >

          <Route path="/" element={<Home/>} />
          <Route path="/wishlist" element ={<WishList />} />
          <Route path="/myaccount" element={<MyAccount/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/sneakersClub" element={<SneakersClub/>} />


          <Route path="/checkout" element = {<Checkout/>} />
          <Route path="/checkout/payment" element = {<Pay/>} />
         

          <Route path="/men" element={<Men/>} />
          <Route path="/men/:id" element ={<Shoes/>} />
          <Route path="/women" element={<Women/>}/> 
          <Route path="/women/:id" element ={<Shoes/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />

          </Route>

          <Route path="" element ={<AuthLayout/>} >
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          </Route>

        </Routes>
     
     </BrowserRouter>


    
  )
}



