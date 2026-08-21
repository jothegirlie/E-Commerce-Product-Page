import React from "react";

import "./header.css"

import { heartContext } from "../HeartComponent/Heart";
import { Link } from "react-router-dom";

export default function WishList(){


    const {favorites} = React.useContext(heartContext)
    const {setFavorites} = React.useContext(heartContext)
    


    return(
        <>
        <div className="wishlist-header">
            <h3>WISHLIST</h3>
            <p>We all have things we want, and this is your personal wishlist.
             Why is it useful? You can save things here that you might want to buy later, 
             so they’re easy to find when you need them.</p>
        </div>
        <section className="wishlist-section">
            {
                favorites.length===0 &&
                <h2>Wishlist is currently empty!</h2>
            }
           { favorites.map((favorite)=>(
            <Link to={
                favorite.gender ==="male" ? `/men/${favorite.id}`:`/women/${favorite.id}`}
                 className="whislist-items">
                    <img src={favorite.image} alt="Wishlist Shoe Image" />
                    <p>{favorite.name}</p>
                    <h4>{favorite.price}$</h4>
                    <select name="size-selection" id="size-select"
                    onClick={(e)=>{
                        e.preventDefault()
                        e.stopPropagation()
                    }}>
                        <option value="">Select a size</option>
                    {favorite.sizes.map((size)=>(
                         <option value={size} key={size}>{size}</option>
                    )) 
                    }
                    </select>
                    <div className="wishlist-buttons">
                        <button onClick={(e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                        }}>Add to Cart</button>
                         <i className="fa-solid fa-heart-circle-minus"
                         onClick={(e)=> {
                            setFavorites(favorites.filter((fav)=> fav.id != favorite.id))
                            e.stopPropagation();
                            e.preventDefault();}}></i>
                    </div>    
                </Link>

            ))}
        </section>
          </>
    )
}