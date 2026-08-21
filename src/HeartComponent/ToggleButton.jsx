import React from "react";

import {heartContext} from "./Heart"

export default function ToggleButton({ children, onClick }) {

    return (
        <div onClick={onClick}>
            {children}
        </div>
    )

    
}