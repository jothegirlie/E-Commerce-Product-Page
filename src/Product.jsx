import "./product.css"
import React from "react"


export default function Product ({selectedShoe,setCartItems, setShoeSize}){
    
    const[selectedSize, setSelectedSize]= React.useState(null);


return(
<main className="product-main">
<img src={selectedShoe.image} alt="" />
<section className="product-description">
    <h1>{selectedShoe.name}</h1>
    <h4>{selectedShoe.company}</h4>
    <p>{selectedShoe.desc}</p>
    <h3>SIZES:</h3>
    <section className="size-options">
        {selectedShoe.sizes.map(size => (
            <h3 key={size} onClick={()=>setSelectedSize(size)}
            className={selectedSize===size? "active-size": ""}>{size}</h3>
        ))}
    </section>
    <h3>{selectedShoe.price.toFixed(2)}$</h3>
    <button onClick={()=>
        {if(selectedSize) 
        {setCartItems(prev => [...prev, {...selectedShoe, size:selectedSize}])}}}>Add to Cart</button>
</section>

</main>
)
}