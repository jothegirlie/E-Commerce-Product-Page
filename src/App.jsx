import React from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import Modal from './Modal'
import Content from './Content'

import images from "./images"

export default function App(){

 const [count, setCount]=React.useState(0);
 const [addCart, setAddCart]=React.useState(false);

   const [isActive, setIsActive]=React.useState(images[0].src);


  return(
    <>
    <Header count={count} addCart={addCart} image={isActive} setAddCart={setAddCart}/>
    <main>   
  
        <Modal images={images} isActive={isActive} setIsActive={setIsActive}/>


    <Content count={count} setCount={setCount} price={125}
    name={"Fall Limited Edition Sneakers"} addCart={addCart} setAddCart={setAddCart}/>

    </main>
   
    </>
  )
}