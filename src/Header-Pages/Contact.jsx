import "./contact.css"


export default function Contact(){



    return(
        <main className="contact">
            <section className="contact-form">
                <h1>Contact Us</h1>
                <p>Please feel free to contact us and we will get back to you as soon as we can.</p>
                <form action="">
                    <input type="text" name="" id="" placeholder="Name" />
                    <input type="text" name="" id="" placeholder="Email" />
                    <input type="text" name="" id="" placeholder="Message" />
                    <button>Submit</button>
                </form>
            </section>
            <section className="visit-us">
                <h3>Visit Us</h3>
                <p>263 HomeBush Road</p>
                <p>Str South 2136</p>
                <h3>Talk to Us</h3>
                <p>+61 426 843 923</p>
                <p>sneakers@hr.com</p>
                <section className="social-media-icons-contact">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-tiktok"></i>
                </section>
            </section> 
        </main>
    )
}