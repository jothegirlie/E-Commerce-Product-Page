import React from "react";
import PriceFilter from "./PriceFilter";
import "../men.css"
import "./prdnav.css"

import Size from "./Size";
import Brand from "./Brand"
import Color from "./Color"
import Categories from "./Categories";

export default function ProductPageNav({categories}){

    const[isMobile, setIsMobile] = React.useState(window.innerWidth);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(()=>{
            const handleResize = () => {
                setIsMobile(window.innerWidth)
            }
             window.addEventListener("resize", handleResize);
    
             return  ()=> {
                 window.removeEventListener("resize", handleResize);
             }
        }, []);


    return(
        isMobile > 1200 ? (
        <nav className="shoe-navi">
            <div className="filter">
                <i class="fa-solid fa-sliders"></i>   
                <h2>Filters</h2>
            </div>
            <p>CATEGORIES</p>
            <Categories categories={["Sneakers", "Slides", "Boots", "Mocassins"]}/>
            <br></br>
            <p>PRICE</p>
                 <PriceFilter />    
            <br></br>
            <p>SIZE</p>
            <Size sizes={[39,40,41,42,43,44,45]}/>
            <br></br>
            <p>BRAND</p>
            <Brand brands={["Nike", "Adidas","Vans", "Converse"]} />
            <br />
            <p>COLOR</p>
            <Color colors={[
                { color: "Black", hex: "#000000" },
                { color: "White", hex: "#FFFFFF" },
                { color: "Gray", hex: "#808080" },
                { color: "Red", hex: "#FF0000" },
                { color: "Blue", hex: "#0000FF" },
                { color: "Green", hex: "#008000" },
                { color: "Brown", hex: "#8B4513" },
                { color: "Beige", hex: "#F5F5DC" },
  ]}
/>
            

        </nav>
    ): (
        <nav className="shoe-navi">
        <div className="filter" onClick={()=>setIsOpen(prev=> !prev)}>
                <i class="fa-solid fa-sliders"></i>   
                <h2>Filters</h2>
               {isOpen?  <i class="fa-solid fa-caret-up"></i> :
               <i class="fa-solid fa-caret-down"></i> }
        </div>
        {isOpen &&
        <div className="filter-dropdown">
        <p>CATEGORIES</p>
            <Categories categories={["Sneakers", "Slides", "Boots", "Mocassins"]}/>
            <br></br>
            <p>PRICE</p>
                 <PriceFilter />    
            <br></br>
            <p>SIZE</p>
            <Size sizes={[39,40,41,42,43,44,45]}/>
            <br></br>
            <p>BRAND</p>
            <Brand brands={["Nike", "Adidas","Vans", "Converse"]} />
            <br />
            <p>COLOR</p>
            <Color colors={[
                { color: "Black", hex: "#000000" },
                { color: "White", hex: "#FFFFFF" },
                { color: "Gray", hex: "#808080" },
                { color: "Red", hex: "#FF0000" },
                { color: "Blue", hex: "#0000FF" },
                { color: "Green", hex: "#008000" },
                { color: "Brown", hex: "#8B4513" },
                { color: "Beige", hex: "#F5F5DC" },
  ]}
/>
</div>}
        </nav>

    )) 
}