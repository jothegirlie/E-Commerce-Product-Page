import "./sign-up.css"

export default function SignUp(){

    return(
        <main className="sign-up-main">
            <section className="sign-up-form">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                <h2>Sign Up Here</h2>
                <p>Register and enjoy the benefits of being a Sneakery Member!</p>
                <form action="">
                    <input type="text" name="" id="" placeholder="First Name"/>
                    <input type="text" name="" id="" placeholder="Last Name"/>
                    <input type="password" name="" id=""  placeholder="Enter a password"/>
                    <input type="password" name="" id="" placeholder="Re-enter a password" />
                    <button>Register</button>
                </form>
                <p>Or Sign Up With</p>
                <section className='sign-up-methods'>
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-facebook"></i>
                </section>
            </section>



        </main>

    )
}