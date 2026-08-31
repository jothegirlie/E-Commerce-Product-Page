import React from "react";


export default function Pay(){


    return(
<section class="mt-6 px-4 md:px-8" aria-labelledby="payment-heading">
   <div class="max-w-xl mx-auto">
      <div class="rounded-xl shadow-xs border border-slate-300 overflow-hidden">
         <div class="bg-black p-6">
            <h2 id="payment-heading" 
            class="text-xl font-semibold text-white">Complete Your Payment</h2>
            <p class="text-sm text-slate-100 mt-2">Fast, secure payment processing</p>
         </div>

         <div class="p-4 md:p-6">
            <ul role="tablist" aria-label="Payment method"
               class="flex w-full font-medium text-sm text-slate-600 
               rounded-md border border-slate-300 divide-x divide-slate-300">

               <li class="w-full">
                  <button role="tab" id="cardTab" aria-selected="true" aria-controls="cardContent" tabindex="0"
                     class="tab w-full h-full py-2 px-3.5 text-slate-900 bg-slate-100 rounded-l-[5px] cursor-pointer transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Credit Card
                  </button>
               </li>

               <li class="w-full">
                  <button role="tab" id="paypalTab" aria-selected="false" aria-controls="paypalContent" tabindex="-1"
                     class="tab w-full h-full py-2 px-3.5 cursor-pointer transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     PayPal
                  </button>
               </li>

               <li class="w-full">
                  <button role="tab" id="bankTab" aria-selected="false" aria-controls="bankContent" tabindex="-1"
                     class="tab w-full h-full py-2 px-3.5 cursor-pointer transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Bank Transfer
                  </button>
               </li>
            </ul>
            <div id="cardContent" role="tabpanel" aria-labelledby="cardTab" tabindex="0"
               class="tab-content max-w-2xl block mt-8">

               <form class="space-y-4">
                  <div>
                     <label for="card-number"
                        class="mb-2 text-slate-900 font-medium text-sm inline-block">Card
                        Number</label>
                     <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required
                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                  </div>
                  <div>
                     <label for="name-on-card"
                        class="mb-2 text-slate-900 font-medium text-sm inline-block">Name
                        on card</label>
                     <input type="text" id="name-on-card" name="name-on-card" placeholder="John Doe" required
                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                  </div>

                  <div class="grid grid-cols-2 gap-4 mb-6">
                     <div>
                        <label for="expiry-date"
                           class="mb-2 text-slate-900 font-medium text-sm inline-block">Expiry
                           Date</label>
                        <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required
                           class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                     </div>
                     <div>
                        <label for="cvv"
                           class="mb-2 text-slate-900 font-medium text-sm inline-block">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="123" required
                           class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                     </div>
                  </div>

                  <div>
                     <label class="inline-flex items-center group has-[input:checked]:text-slate-900">
                        <input id="billing-address" name="billing-address" type="checkbox" required class="sr-only"
                           checked />
                        <span
                           class="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                           aria-hidden="true">

                           <svg class="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                              viewBox="0 0 12 10" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M1 5l3 3 7-7" />
                           </svg>
                        </span>
                        <span class="ml-3 text-sm text-slate-700">
                           Billing address is the same as shipping address
                        </span>
                     </label>
                  </div>

                  <div class="flex flex-col space-y-4">
                     <button type="submit"
                        class="w-full px-3.5 py-2 text-white text-sm 
                        font-semibold rounded-md cursor-pointer bg-black hover:bg-blue-700 
                        border border-blue-600 focus:outline-none focus-visible:ring-2 
                        focus-visible:ring-blue-500">
                        Pay $49.99
                     </button>
                     <div class="flex items-center justify-center text-slate-500 text-sm">
                        <span>Secure payment powered by Stripe</span>
                     </div>
                  </div>
               </form>
            </div>
            <div id="paypalContent" role="tabpanel" aria-labelledby="paypalTab" tabindex="0"
               class="tab-content max-w-2xl hidden mt-8">
               <button type="submit" class="w-full px-3.5 py-2 text-sm font-semibold rounded-md cursor-pointer bg-[#ffc439] hover:bg-[#f5b800] border border-[#ffc439] text-[#003087] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003087] inline-flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-[#003087]"
                     aria-hidden="true">
                     <path
                        d="M7.5 20.5h2.1c.5 0 .9-.3 1-.8l.5-3.2c.1-.5.5-.8 1-.8h1.3c2.6 0 4.6-1.1 5.2-4.3.3-1.3.1-2.3-.5-3-.7-.8-1.9-1.2-3.5-1.2H9.4c-.5 0-.9.3-1 .8L6.3 19.7c-.1.4.2.8.7.8z" />
                  </svg>
                  Pay with PayPal ($49.99)
               </button>
            </div>
            <div id="bankContent" role="tabpanel" aria-labelledby="bankTab" tabindex="0"
               class="tab-content max-w-2xl hidden mt-8">

               <section aria-labelledby="bank-heading">
                  <h2 id="bank-heading" class="text-base font-semibold text-slate-900">
                     Bank Transfer Details
                  </h2>

                  <p class="text-sm text-slate-500 mt-2">
                     Please use the following details to complete your payment. Your order will be processed once the
                     payment is received.
                  </p>

                  <dl class="mt-6 space-y-4">

                     <div class="flex justify-between gap-4 text-sm text-slate-500">
                        <dt>Account Name</dt>
                        <dd class="text-slate-900 font-medium">ABC Pvt Ltd</dd>
                     </div>

                     <div class="flex justify-between gap-4 text-sm text-slate-500">
                        <dt>Bank Name</dt>
                        <dd class="text-slate-900 font-medium">ABC Bank</dd>
                     </div>

                     <div class="flex justify-between gap-4 text-sm text-slate-500">
                        <dt>Account Number</dt>
                        <dd class="text-slate-900 font-medium">XXXX XXXX 8561</dd>
                     </div>

                     <div class="flex justify-between gap-4 text-sm text-slate-500">
                        <dt>IFSC Code</dt>
                        <dd class="text-slate-900 font-medium">ABC0005618</dd>
                     </div>

                  </dl>

                  <p class="text-xs text-slate-500 mt-6">
                     Note: Please include your Order ID as a reference in the transfer.
                  </p>
               </section>
            </div>

         </div>
      </div>
   </div>
</section>
    )
}