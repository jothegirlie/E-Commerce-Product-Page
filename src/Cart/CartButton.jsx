import React from "react"

import {CartContext} from "./Cart"

export default function CartButton({children}){


    const {toggle} = React.useContext(CartContext)
    
    return (
        <div onClick={toggle}>
            {children}
        </div>
    )

    
}