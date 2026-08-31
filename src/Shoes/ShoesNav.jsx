import React from "react";

import "./Shoes.css"


export default function ShoesNav({shoe}){

    const [active, setActive] = React.useState("productInfo")


    return (
        <section className="shoes-nav">
            <nav>
                <h3 onClick={()=>setActive("productInfo")} 
                className={active==="productInfo" ? "active" : ""}>Product Information</h3>
                <h3 onClick={()=>setActive("deliveryInfo")}
                className={active==="deliveryInfo" ? "active" : ""}>Delivery & Returns</h3>
            </nav>
            {active ==="productInfo" &&
            <>
            <p><span id="desc">BRAND: </span> {shoe.brand}</p>
            <p><span id="desc">COLOR: </span> {shoe.color}</p>
            <p><span id="desc">TYPE: </span> {shoe.type}</p>
            </>
            }
            {active ==="deliveryInfo" &&
            <>
            <p><span id="desc">Delivery</span> times vary. Estimated delivery is 3 bussines days.</p>
            <p><span id="desc">Returns:</span> are accepted within 30 days of delivery, 
            provided the item is unused, in its original condition,
            and includes all original packaging and tags.</p>
            </>
            }


        </section>
    )
}