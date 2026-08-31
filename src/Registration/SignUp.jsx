import React from "react";

import { Link } from "react-router-dom";

import {loggedInContext} from "../Registration/LoggedIn"

export default function SignUp() {

   const [name, setName] = React.useState("");
   const [email, setEmail] = React.useState("")
   const [confirmPassword, setConfirmPassword] = React.useState("")

   const {setIsLoggedIn} = React.useContext(loggedInContext)

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (password != confirmPassword) {
         alert("Passwords do not match");
         return;
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            fullname:name,
            email: email,
            password: password,
         }),
      });

      const data = await response.json();

      if(response.status!==201){
         alert(data.error);
         return;
      }
      
      setName("")
      setEmail("")
      setPassword("")
      setIsLoggedIn(true);
      alert("Welcome!")
      
   
      console.log(data);
   };


   return (
      <main class="bg-gray-50 flex items-center md:h-screen p-4 md:p-8 dark:bg-neutral-900">
         <div class="w-full max-w-3xl max-md:max-w-md mx-auto">
            <div
               class="grid gap-x-8 gap-y-12 w-full p-6 shadow-sm rounded-lg overflow-hidden 
               bg-white border border-slate-300 md:grid-cols-2 sm:p-8 dark:bg-neutral-800 
               dark:border-neutral-700">
               <div>
                  <div class="mb-10">
                     <h2 class="text-slate-900 text-2xl font-bold dark:text-slate-50">Quick Access</h2>
                  </div>
                  <div class="flex flex-col gap-4 w-max">
                     <div
                        class="inline-flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm 
                        rounded-md font-semibold !text-orange-500 border border-slate-300 bg-white hover:
                        bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
                        dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                        <i class="fa-brands fa-google"></i>Sign up with Google</div>
                     <div
                        class="inline-flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm
                         rounded-md font-semibold !text-orange-500 border border-slate-300 bg-white 
                         hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
                         dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                        <i class="fa-brands fa-apple"></i>Sign up with Apple
                     </div>
                     <div
                        class="inline-flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm 
                        rounded-md font-semibold !text-orange-500 border border-slate-300 bg-white 
                        hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
                        dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                        <i class="fa-brands fa-facebook"></i>
                        Sign up with Facebook</div>
                  </div>
               </div>

               <div>
                  <div class="mb-10">
                     <h1 class="text-slate-900 text-2xl font-bold dark:text-slate-50">Create an account
                     </h1>
                  </div>
                  <form  onSubmit={handleSubmit} class="space-y-6">
                     <div>
                        <label for="name"
                           class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50
                           ">Full Name</label>
                        <input type="text" id="name" name="name" value={name} placeholder="John Doe" required
                           class="px-3 py-2.5 text-sm text-slate-900 rounded-md 
                           bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 
                           focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 
                           dark:bg-neutral-700 
                           dark:outline-neutral-600" onChange={(e) => setName(e.target.value)} />
                     </div>
                     <div>
                        <label for="email"
                           class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50
                           ">Email</label>
                        <input type="email" id="email" name="email" placeholder="john@readymadeui.com" 
                        required value={email}
                           class="px-3 py-2.5 text-sm text-slate-900 rounded-md 
                           bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 
                           focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 
                           dark:outline-neutral-600" onChange={(e) => setEmail(e.target.value)} />
                     </div>
                     <div>
                        <label for="password"
                           class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                        <input type="password" id="password" value={password}
                           name="password" placeholder="••••••••" required
                           class="px-3 py-2.5 text-sm text-slate-900 rounded-md 
                           bg-white w-full outline-1 -outline-offset-1 outline-slate-300 
                           focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 
                           dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
                           onChange={(e) => setPassword(e.target.value)} />
                     </div>
                     <div>
                        <label for="confirm-password"
                           class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">
                           Confirm
                           password</label>
                        <input type="password" id="confirm-password" value={confirmPassword}
                           name="confirm-password" placeholder="••••••••" required
                           class="px-3 py-2.5 text-sm text-slate-900 rounded-md 
                           bg-white w-full outline-1 -outline-offset-1 outline-slate-300 
                           focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 
                           dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
                           onChange={(e) => setConfirmPassword(e.target.value)} />
                     </div>

                     <div class="flex items-start flex-wrap gap-2">
                        <label class="flex items-center group has-[input:checked]:text-slate-900">
                           <input id="tmc" name="tmc" type="checkbox" class="sr-only" />

                           <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-600
                              bg-white dark:bg-neutral-700
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600" aria-hidden="true">

                              <svg class="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                                 viewBox="0 0 12 10" fill="none" stroke="currentColor" stroke-width="2">
                                 <path d="M1 5l3 3 7-7" />
                              </svg>
                           </span>
                           <span class="ml-3 text-sm text-slate-700 dark:text-slate-300">
                              I accept the
                           </span>
                        </label>

                        <a href="#"
                           class="ml-1 text-sm font-medium !text-orange-500 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                           Terms and Conditions
                        </a>
                     </div>

                     <button type="submit"
                        class="w-full py-2 px-3.5 text-sm rounded-md 
                        font-semibold cursor-pointer tracking-wide text-white border
                         border-blue-600 bg-orange-500 hover:bg-blue-700 transition-all 
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                        Create an account</button>
                  </form>

                  <div class="mt-6 text-slate-900 text-sm text-center dark:text-slate-50">Already have an account?
                     <Link to="/login"
                        class="!text-orange-500 hover:underline ml-1 font-medium 
                     dark:text-blue-500 focus:outline-none focus-visible:ring-2 
                     focus-visible:ring-orange-500 rounded">
                        Login here
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </main>

   )
}