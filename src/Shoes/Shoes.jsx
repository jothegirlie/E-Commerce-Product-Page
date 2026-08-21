import React from "react";

import { useParams } from "react-router-dom";
import "./Shoes.css"

import { Link } from "react-router-dom";
import ShoesNav from "./ShoesNav";


export default function Shoes(){

    const {id} =useParams();
    const [shoe,setShoe] = React.useState({
        sizes: []
    })
    const [activeSize, setActiveSize] = React.useState(null)

    React.useEffect(() =>{
        fetch(`http://localhost:5000/api/products`)
        .then((res)=>res.json())
        .then((res) =>{
            res.map((product) =>{
                if(product.id===Number(id)){
                    setShoe(product)
                }
        })
        })
    },[id])

    
// useParams gets the dynamic value from the URL. :id (not query values!)

    return (
    <section className="shoe-section">
        <div className="shoe left">
            <div className="links-back">
                <Link to="../">Home</Link>
                <p>{">"}</p>
                { shoe.gender ==="male" ?
                <Link to="../Men">Men</Link> :
                <Link to="../Women">Women</Link> 
                }
                <p>{">"}</p>
                <p id="name">{shoe.name}</p>
            </div>
             <img src={shoe.image} alt="" />
        </div>
        <div className="shoe">
            <div className="shoe-header">
                <div>
                    <h2>{shoe.company}</h2>
                    <h3>{shoe.name}</h3>
                </div>
                <h3>{shoe.price}$</h3>
            </div>
            <p>Select a size:</p>
            <div className="shoe-sizes">
            {shoe.sizes.map((size)=>(
                <h5 onClick={()=> setActiveSize(size)}
                className={activeSize===size ? "activeSize" : ""}>{size}</h5>
            ))}
            </div>
            <button>Add to Cart</button>
            <ShoesNav shoe={shoe}/>
        </div>

    </section>
    )
}