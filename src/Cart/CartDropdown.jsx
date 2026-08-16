import React, { Children } from "react"


import {CartContext} from "./Cart"

export default function CartDropdown({children}){
    
    const{on} = React.useContext(CartContext)

    return on? 
     <div className="cart">
        {children}
     </div> :null
}