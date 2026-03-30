import smallImg from "/images/image-product-1-thumbnail.jpg"

import del from "/images/icon-delete.svg"

export default function Cart(props){

let num= props.price;
let quantity=props.count
let total=num*quantity

    return(
        <nav className="cartDiv">
<nav className="CartNav">
<h1>Cart</h1>
</nav>

{props.addCart ?
<>
<section class="cartContent">
    <img src={smallImg} alt="" />
    
    <div className="product">
<h3>{props.name}</h3>
<h3>{props.price} x {props.count} <span>${total}.00</span></h3>
</div>

<img src={del} alt="" id="del" onClick={()=> props.setAddCart(false)} />
</section>



<button id="checkOut">Checkout</button>
</> : <p>Your cart is empty.</p>
}

</nav>
    )

}