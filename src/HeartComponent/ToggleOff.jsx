import React from "react";

import {heartContext} from "./Heart"

export default function ToggleOff({ children, id }) {

   const {favorites} = React.useContext(heartContext)
   
       return favorites.some(favorites => favorites.id === id) ?
       null : children
}