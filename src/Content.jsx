
import React from "react"
export default function Content(props){


    
   
    return(
<section className="Content">
<h4>SNEAKER COMPANY</h4>
<h1>{props.name}</h1>

<p>These low-profile sneakers are your perfect casual wear companion.
Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
</p>

<div className="Price">
    <h1>${props.price}.00</h1>
    <button>50%</button>
</div>

<h5>$250.00</h5>


<div className="CartOptions">
    <div className="addItem">
        <button onClick={()=> props.setCount(prev=> (prev>0? prev-1 : 0))}>-</button>
        <h3>{props.count}</h3>
        <button onClick={()=> props.setCount(prev=> (prev+1))}>+</button>
    </div>

    <button className="AddToCart" onClick={() => props.setAddCart(true)}  >

<h1>+</h1>
<h1>Add to cart</h1>
</button>
</div>




</section>


    )
}