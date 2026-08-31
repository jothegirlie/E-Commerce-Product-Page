import React from "react";


export default function Terms(){

    return(
        <div className="min-h-screen bg-white text-black">

      <div className="bg-black text-white py-16 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-orange-500 font-semibold tracking-widest text-xs uppercase mb-3">
            sneakers
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-300">Last updated: August 29, 2026</p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-6 sm:px-12 pt-12 pb-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          By browsing or buying from Sole Store, you agree to the terms
          below. Read them so there are no surprises at checkout.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 sm:px-12 pb-16">
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">01</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Using Our Site</h2>
              <p className="text-gray-700 leading-relaxed">
                You must be at least 18 years old, or have a parent or
                guardian's permission, to place an order. You agree to give
                accurate info at checkout and to use the site only for
                lawful purposes.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">02</span>
            <div>
              <h2 className="text-xl font-bold mb-2">
                Orders & Pricing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All prices are shown in your local currency and may change
                without notice. We reserve the right to cancel any order due
                to stock issues, pricing errors, or suspected fraud.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">03</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Shipping</h2>
              <p className="text-gray-700 leading-relaxed">
                Delivery times are estimates, not guarantees. Once your order
                leaves our warehouse, it's covered by the carrier's own
                terms — we'll help sort out any issues along the way.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">04</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Returns & Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                Unworn shoes in original packaging can be returned within 30
                days of delivery for a full refund. Worn or damaged returns
                may be refused or refunded partially.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">05</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All logos, images, and content on this site belong to Sole
                Store or our partners. You may not copy or reuse them
                without our written permission.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">06</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                We're not liable for indirect or incidental damages arising
                from the use of our site or products, to the extent
                permitted by law.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">07</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Changes to These Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these terms from time to time. Continued use
                of the site after changes means you accept the new terms.
              </p>
            </div>
          </div>
 
          <div className="py-8 flex items-start gap-4">
            <span className="text-orange-500 font-bold text-sm mt-1">08</span>
            <div>
              <h2 className="text-xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about these terms? Email us at
                support@yourshoestore.com and we'll get back to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    )
}