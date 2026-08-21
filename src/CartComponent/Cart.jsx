import React from "react";

const cartContext = React.createContext();

export default function Cart({children}){

    const [cartItems, setCartItems] = React.useState([])


    return(
        <cartContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </cartContext.Provider>
    )
    
}