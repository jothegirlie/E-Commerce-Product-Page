import React from "react";

import {heartContext} from "./Heart"

export default function ToggleButton({children, id}){

    const {addFav} = React.useContext(heartContext)

    return (
    <div onClick={() => addFav(id)}>
        {children}
    </div>
    )
}