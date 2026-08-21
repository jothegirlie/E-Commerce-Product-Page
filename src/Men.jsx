import "./men.css"
import React from "react";
import Heart from "./HeartComponent/Heart"

import ProductPageNav from "./ProductPageNav/ProductPageNav"
import Products from "./Products/Products"



export default function Men(){




    return(
        
       
        <main className="gender-main">
        <ProductPageNav categories={["Sneakers", "Slides", "Boots", "Mocassins"]}
        />
        <Products gender={"male"}></Products>
        </main>
      
    )
}