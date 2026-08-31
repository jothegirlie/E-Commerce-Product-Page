import React from "react";

export default function Privacy(){

    return(
        <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-black text-white py-16 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-orange-500 font-semibold tracking-widest text-xs uppercase mb-3">
            sneakers
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-gray-300">Last updated: August 29, 2026</p>
        </div>
      </div>
 
      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 sm:px-12 pt-12 pb-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Your privacy matters to us as much as a good pair of laces. This
          page explains what information we collect when you shop with us,
          why we collect it, and how you stay in control of it.
        </p>
      </section>
 
      {/* Sections */}
      <section className="max-w-3xl mx-auto px-6 sm:px-12 pb-16">
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">01</span>
            <div>
              <h2 className="text-xl font-bold mb-2">
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When you shop with us, we collect the details you give us at
                checkout — name, email, shipping address, and payment info —
                plus basic browsing data like pages viewed and shoes you've
                eyed up but not yet bought.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">02</span>
            <div>
              <h2 className="text-xl font-bold mb-2">How We Use It</h2>
              <p className="text-gray-700 leading-relaxed">
                We use your info to process orders, ship your kicks, send
                order updates, and (only if you opt in) let you know about
                new drops and restocks. We don't sell your data to anyone.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">03</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies to keep your cart intact between visits,
                remember your size preferences, and understand which shoes
                people actually click on. You can disable cookies in your
                browser at any time.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">04</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Third Parties</h2>
              <p className="text-gray-700 leading-relaxed">
                We share only what's needed with payment processors and
                shipping carriers to get your order to your door. These
                partners are bound to use your data solely for that purpose.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">05</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You can request a copy of your data, ask us to correct it, or
                have it deleted at any time. Just reach out and we'll sort it
                within 30 days.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">06</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about this policy? Email us at
                privacy@yourshoestore.com and we'll get back to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    )
}