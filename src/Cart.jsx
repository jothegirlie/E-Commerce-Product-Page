import "./cart.css"

export default function Cart({cartItems, removeFromCart}){

    return(
        <section className='cart'>
            {cartItems.map((shoe,index) => (
            <section key={index} className="cart-dropdown">
            <img src={shoe.image} alt="in cart shoes" />
            <section className="cart-dropdown-text">
            <h3>{shoe.name}</h3>
            <h3>{shoe.company}</h3>
            <p>{shoe.price.toFixed(2)}$</p>
            <h3>{shoe.size}</h3>
            </section>
            <i className="fa-regular fa-trash-can"
            onClick={()=> removeFromCart(index)}></i>
            </section>
            )
            )}
        </section>
    )
}