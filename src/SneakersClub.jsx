import React from "react";
 
export default function SneakersClub() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="bg-black text-white py-20 px-6 sm:px-12 text-center">
        <span className="inline-block text-orange-500 font-semibold tracking-widest text-xs uppercase mb-3">
          Membership
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl mx-auto">
          Join the Sneakers Club
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Simply become a member and start enjoying the benefits before you
          shop. It's free, it's fast, and your first pair is on us.
        </p>
        <button className="mt-8 bg-orange-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-orange-400 transition-colors">
          Become a Member
        </button>
      </div>
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">
          Member Benefits
        </h2>
 
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="border border-black rounded-2xl p-6 hover:bg-black hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full bg-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Early Access</h3>
            <p className="text-sm opacity-80">
              Shop new drops 24 hours before everyone else. First come, first
              laced.
            </p>
          </div>
 
          <div className="border border-black rounded-2xl p-6 hover:bg-black hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full bg-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Member Discounts</h3>
            <p className="text-sm opacity-80">
              Get 10% off every order, all year round, no code needed.
            </p>
          </div>
 
          <div className="border border-black rounded-2xl p-6 hover:bg-black hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full bg-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Free Shipping</h3>
            <p className="text-sm opacity-80">
              Every order ships free, no minimum spend required.
            </p>
          </div>
 
          <div className="border border-black rounded-2xl p-6 hover:bg-black hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full bg-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Birthday Reward</h3>
            <p className="text-sm opacity-80">
              A surprise discount lands in your inbox every year on your
              birthday.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-orange-500 text-black py-14 px-6 sm:px-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to join?</h2>
        <p className="mb-6">Sign up in under a minute, no credit card needed.</p>
        <button className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Become a Member
        </button>
      </div>
    </div>
  );
}