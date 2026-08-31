import React from "react";

const cartContext = React.createContext();

export default function Cart({children}){

    const [cartItems, setCartItems] = React.useState([])

    const totalCart = cartItems.length
    const totalPrice = cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity),
    0);
    

    console.log(cartItems)
    return(
        <cartContext.Provider value={{cartItems,setCartItems, totalCart, totalPrice}}>
            {children}
        </cartContext.Provider>
    )
    
}

export {cartContext}