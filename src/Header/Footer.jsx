import React from "react";

import "./header.css"

import { Link } from "react-router-dom";


export default function Footer(){


    return(
        <footer>
            <section className='footer-sections info'>
                <h1>sneakers</h1>
                <h4>Sneakers brings you stylish, high-quality footwear 
                    designed for every step. Discover the latest sneakers, 
                    timeless classics, and everyday favorites made to keep you 
                    comfortable and looking fresh.</h4>
            </section>
            <section className='footer-sections'>
                <h3>Contact Us</h3>
        
                <h4>Call + 44 20 3901 4352</h4>
                <h4>Email Us</h4>
                <h4>Find Store</h4>
            </section>
            <section className='footer-sections'>
                <h3>Customer Experience</h3>
    
                <Link to="/login">Log in</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms and Conditions</Link>
            </section>
            <section className='footer-sections info'>
                <h3>Newsletter</h3>

                <h4>Sign up for latest news and insights from sneakers</h4>
                <input type="email" name="" id="" placeholder="Enter your email adress" />
                <button>Subscribe</button>

            </section>
        </footer>


    )
}