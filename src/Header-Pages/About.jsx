import "./about.css"
import team from "../images/team.jpg"
import mission from "../images/mission.jpg"

export default function About(){


    return(
        <main className='about-main'>
            <section className="about-us">
            <img src={team} alt="Picture of the team" />
            <section className="about-text">
                <h1>Small team.</h1>
                <h2>Big hearts.</h2>
                <p>Our team is a group of passionate professionals dedicated to building a
                    seamless and enjoyable eCommerce experience for every customer. 
                    We combine expertise in technology, design, marketing, and customer
                    support to create a platform that is both user-friendly and reliable.
                    Each member brings unique skills and a shared commitment to quality,
                    innovation, and customer satisfaction. From carefully curating products to 
                    ensuring smooth order processing and responsive support, we work together to make o
                    nline shopping simple, secure, and enjoyable. Our goal is to continuously improve 
                    and adapt, so we can meet the evolving needs of our customers and deliver the best 
                    possible service every time.</p>
            </section>
            </section>
            <section className="description-about">
                <h3>
                    At Sneakers, our team is driven by a shared passion for sneaker culture and delivering the best possible shopping experience for our customers. We bring together experts in footwear curation, customer service, design, and logistics to ensure every pair we offer meets high standards of style, comfort, and authenticity. From sourcing the latest releases to carefully packing each order, we focus on every detail that matters to sneaker lovers. Our goal is to make it easy and exciting to find the perfect pair, while building a community that values quality, trust, and streetwear culture.
                </h3>
                <section className="description-benefits">
                    <div className="benefits-plus">
                        <h2>30+</h2>
                        <p>Winning Awards</p>
                    </div>
                    <div className="benefits-plus">
                        <h2>100+</h2>
                        <p>Team Members</p>
                    </div>
                    <div className="benefits-plus">
                        <h2>50k+</h2>
                        <p>Satisfied Clients</p>
                    </div>
                    <div className="benefits-plus">
                        <h2>5k+</h2>
                        <p>Client Reviews</p>
                    </div>
                </section>
            </section>
            <section className="our-mission">
                <section className="mission-text">
                    <h2>Our Mission</h2>
                    <p>At Sneakers, our mission is to connect people with the
                        sneakers they love by offering a curated selection of authentic,
                        high-quality footwear from the world’s most trusted brands.
                        We aim to make sneaker shopping simple, accessible, and exciting,
                        whether you’re chasing the latest drops or timeless classics.
                        Beyond products, we strive to build a community rooted in style,
                        self-expression, and trust, where every customer feels confident
                        in every step they take.</p>
                </section>
                <img src={mission} alt="Picture of a Sneakers Shop" />
            </section>

        </main>

    )
}

