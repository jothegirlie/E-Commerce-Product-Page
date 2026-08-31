import React from "react";


import { Link } from "react-router-dom";

import {loggedInContext} from "../Registration/LoggedIn"

export default function LogIn() {

   const [email,setEmail] = React.useState("");
   const [password, setPassword] = React.useState("");

   

   const {setIsLoggedIn} = React.useContext(loggedInContext)
   const {setUser} = React.useContext(loggedInContext)
   

   const handleSubmit = async (e) => {
      e.preventDefault()
      
      const response = await fetch("http://localhost:5000/api/auth/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email: email,
            password: password,
         }),
      });

      const data = await response.json();

      if(response.status!==200){
         alert(data.error);
         return;
      }else{
      setIsLoggedIn(true);
      setUser({name: data.user.name, email : data.user.email})
      setEmail("");
      setPassword("");
      console.log(data.user.name)
      
   
   }


      console.log("STATUS:", response.status);
      console.log("LOGIN RESPONE",  data)

   }


  return (
   <main className="flex flex-col items-center justify-center py-4 px-4 md:px-8 lg:min-h-screen">
   <div className="grid items-center gap-16 max-w-lg lg:grid-cols-2 lg:max-w-6xl">
      <div>
         <h2 className="text-4xl font-bold text-slate-900 !leading-tight lg:text-5xl dark:text-slate-50">
            Welcome back!
         </h2>
         <p className="text-base mt-6 text-slate-600 leading-relaxed dark:text-slate-400">
          Sign in to continue shopping and manage your account.</p>

         <div className="text-sm mt-6 text-slate-900 lg:mt-12 dark:text-slate-50">Don't have an account 
            <Link to="/signup" 
            className="!text-orange-500 font-medium hover:underline ml-1 dark:text-orange-500">
                  Register here</Link>
         </div>
      </div>

      <div className="max-w-md lg:ml-auto w-full">
         <h1 className="text-slate-900 text-3xl font-bold mb-10 dark:text-slate-50">
            Sign in
         </h1>

         <form className="space-y-6"
         onSubmit={handleSubmit}>
            <div>
               <label for="email"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
               <input type="email" id="email" name="email" value={email} placeholder="john@readymadeui.com" required
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full 
                  outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 
                  focus:outline-orange-500 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" 
                  onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
               <label for="password"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
               <input type="password" id="password" name="password" 
               value={password} placeholder="•••••••••••••" required
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full 
                  outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 
                  focus:outline-orange-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" 
                  onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <div className="flex items-start flex-wrap gap-2">
               <label className="flex items-center group has-[input:checked]:text-slate-900">
                  <input id="remember" name="remember" type="checkbox" className="sr-only" />
          
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 
                  outline-slate-300 dark:outline-neutral-700
                              bg-white dark:bg-neutral-800
                              group-has-[input:checked]:bg-orange-500
                              group-has-[input:checked]:outline-orange-500
                              group-focus-within:outline-2
                              group-focus-within:outline-orange-500" aria-hidden="true">
              
                     <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" 
                     viewBox="0 0 12 10"
                        fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 5l3 3 7-7" />
                     </svg>
                  </span>
                  <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                     Remember me
                  </span>
               </label>

               <a href="#"
                  className="ml-auto text-sm font-medium !text-orange-500 dark:text-orange-500 
                  hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded">
                  Forgot password?
               </a>
            </div>
            <button type="submit"
               className="w-full py-2 px-3.5 text-sm rounded-md
                font-semibold cursor-pointer text-white border 
                bg-orange-500 hover:bg-black-700 text-white
               transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
               Sign in</button>
         </form>

         <div className="my-8 flex items-center gap-4">
            <hr className="w-full border-slate-300 dark:border-neutral-700" />
            <p className="text-sm text-slate-700 text-center dark:text-slate-300">or</p>
            <hr className="w-full border-slate-300 dark:border-neutral-700" />
         </div>

         <div>
            <div 
               className="w-full flex items-center justify-center 
               gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold !text-orange-500 
               border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none 
               focus-visible:ring-2 focus-visible:ring-orange-500 dark:text-slate-50 
               dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700">
               <i class="fa-brands fa-google"></i>
               Sign in with Google
            </div>
         </div>
      </div>
   </div>
</main>
  )
}