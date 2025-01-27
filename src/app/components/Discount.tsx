import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const DiscountItem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-10 px-6">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-[#3F509E] text-4xl font-bold text-center mb-8">Discount Item</h2>
          <div className="text-center mb-6">
            <div className="flex justify-center items-center space-x-3 text-sm text-gray-500">
              <span className="relative text-pink-400 cursor-pointer">
                <span className="underline">Wood Chair</span> <span>•</span>
                {/* Dot for the first span */}
                
              </span>
              <span className="underline cursor-pointer">Plastic Chair</span>
              <span className="underline cursor-pointer">Sofa Collection</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            20% Discount Of All Products
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Material expose like metals</li>
            <li>Simple neutral colours</li>
            <li>Clear lines and geometric figures</li>
            <li>Material expose like metals</li>
          </ul>
          <Button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
            Shop Now
          </Button>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <Image
            src="/chair.png"
            alt="Chair"
            className="rounded-full shadow-md w-full max-w-sm mx-auto bg-pink-100"
            width={699}
            height={597}
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
