
import "./home.css"
import nikey from "../images/nikey.jpg"
import nikelogo from "../images/nikelogo.jpg"
import adidaslogo from "../images/adidas.jpg"
import levislogo from "../images/levis.png"
import vanslogo from "../images/vans.jpg"
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"

import { Link } from "react-router-dom"
import LogIn from "../Registration/LogIn"

export default function Home({ setPage }) {


    return (<>
        <main className='home-main'>

            <section className='hero'>
                <div className='hero-context'>
                    <h1>The journey beginns with the
                        perfect pair.
                    </h1>
                    <Link to="/login" className="log-in-button">
                        <button>Log In</button>
                    </Link>
                </div>
                    <img src={nikey} alt="Black Nike Shoes" />
            </section>

            <section className='top-brands'>
                <h2>Top Brands</h2>
                <p>Discover premium footwear from the world’s most trusted brands.
                    From everyday comfort to performance
                    and street style, explore top-quality shoes designed
                    to match every step of your lifestyle.</p>
                <div className='logos'>
                    <img src={nikelogo} alt="Nike Logo" />
                    <img src={adidaslogo} alt="Adidas Logo" />
                    <img src={levislogo} alt="Levi's Logo" />
                    <img src={vanslogo} alt="Vans Logo" />
                </div>

                {/* Carousel: */}
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={c1} class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={c2} class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={c3} class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Carousel: */}


            </section>

            <section className="social-media">
                <h2>STEP INTO THE COMMUNITY</h2>
                <p>Join thousands of sneaker lovers sharing their style
                    every day. Tag us and get featured—your next outfit
                    could inspire someone else.</p>
                <section className="social-media-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </section>
            </section>

            <section className='description'>
                <section className="description-text">
                    <h3>FROM OUR ROOTS TO THE STREETS OF THE WORLD</h3>
                    <h2>WE ARE SNEAKERS</h2>
                    <p>We are more than a sneaker store — we are a global
                        community built around style, culture, and movement.</p>
                    <p>We connect people from different backgrounds, subcultures, and cities through a shared
                        passion for sneakers and streetwear. Every pair we drop is part of a bigger story — one
                        that starts with expression and ends in the streets.</p>
                    <p>Since our beginning, we’ve been committed to bringing premium and limited footwear to those who
                        seek something different. Pieces that stand out. Pieces that mean something.</p>
                    <p>Our vision goes beyond fashion. We support creativity, authenticity, and the communities that
                        shape today’s culture — from local creatives to global movements.</p>
                    <p>This is not just footwear. This is identity, energy, and lifestyle.</p>
                </section>
            </section>

            <section className='benefit'>
                <h2>YOU'RE PAYING TOO MUCH</h2>
                <p>Simply become a member of <Link to="/sneakersClub">Sneakers Club</Link> and start
                    enjoying the benefits before you shop.</p>
                <section className="benefits-options">
                    <div className='left-options'>
                        <div className='option'>
                            <i class="fa-solid fa-money-bill-1-wave"></i>
                            <p>A $8.00 voucher for signing up</p>
                        </div>
                        <div className='option'>
                            <i class="fa-solid fa-gift"></i>
                            <p>A birthday present</p>
                        </div>
                        <div className='option'>
                            <i class="fa-regular fa-envelope-open"></i>
                            <p>An Exclusive Newsletter</p>
                        </div>
                    </div>
                    <div className='right-options'>
                        <div className='option'>
                            <i class="fa-solid fa-percent"></i>
                            <p>Get 5% back on every order</p>
                        </div>
                        <div className='option'>
                            <i class="fa-solid fa-shoe-prints"></i>
                            <p>2x the chance to win in raffles</p>
                        </div>
                        <div className='option'>
                            <i class="fa-regular fa-heart"></i>
                            <p>Your own wishlist</p>
                        </div>
                    </div>
                </section>
                <button>GET THE BENEFITS</button>
            </section>

        </main>
    </>
    )
}