import React from "react";

import {heartContext} from "./Heart"

export default function ToggleOn({children,id}){

    const {favorites} = React.useContext(heartContext)

    return favorites.includes(id)? children : null


}