import React from "react";

import {heartContext} from "./Heart"

export default function ToggleOn({ children,id }) {

    const {favorites} = React.useContext(heartContext)

    return favorites.some(favorites => favorites.id === id) ?
    children : null
}