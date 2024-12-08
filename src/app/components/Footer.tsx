import { Button } from '@/components/ui/button';

import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 bg-blue-100">
      {/* Grid System */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {/* 1st Part */}
        <div>
          <h1 className="text-[25px] text-black font-semibold mb-4">Hekto</h1>
          <div className="flex items-center overflow-hidden">
            <input
              type="text"
              className="px-2 py-2 border border-gray-500 text-sm text-gray-600 outline-none bg-white rounded"
              placeholder="Enter Email Address"
            />
            <Button asChild className="px-4 rounded py-2 bg-pink-500 hover:bg-pink-400">
  <span>Sign Up</span>
</Button>

          </div>
          <div className="pt-5 text-gray-600">
            <p>
              Contact Info
              <br />
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>

        {/* 2nd Part */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Categories</h1>
          <ul className="space-y-2">
            <li>Laptop & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* 3rd Part */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Customer Care</h1>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* 4th Part */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Pages</h1>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 items-center w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">©Webecy - All Rights Reserved</p>
        
      </div>
    </footer>
  );
};

export default Footer;
