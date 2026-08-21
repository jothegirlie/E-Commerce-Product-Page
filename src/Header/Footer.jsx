import React from "react";

import "./header.css"


export default function Footer(){


    return(
        <footer>
            <section className='footer-sections'>
                <h5>Contact Us</h5>
                <br />
                <h4>Call + 44 20 3901 4352</h4>
                <h4>Email Us</h4>
                <h4>Find Store</h4>
            </section>
            <section className='footer-sections'>
                <h5>Orders</h5>
                <br />
                <h4>Payment</h4>
                <h4>Shipping</h4>
                <h4>Returns</h4>
            </section>
            <section className='footer-sections'>
                <h5>Customer Experience</h5>
                <br />
                <h4>Login</h4>
                <h4>Size Guide</h4>
                <h4>Privacy</h4>
                <h4>Terms and Conditions</h4>
            </section>
        </footer>


    )
}