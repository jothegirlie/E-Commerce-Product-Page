import React from "react"
import "./cart.css"

const CartContext = React.createContext()

export default function Cart({children}){

    const [on, setOn] = React.useState(false)

    function toggle(){
        setOn(prev => !prev)
    }


    return(
        <CartContext.Provider value={{toggle,on}}>
            {children}
        </CartContext.Provider>
       
    )
}

export {CartContext}
//  <Cart>
//  <CartDropdown>
// <ToggleOn>
//  <ToggleOff>
//  <CartDropdown>
// </Cart>