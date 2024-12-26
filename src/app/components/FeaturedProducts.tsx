import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/chair13.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/image 1.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/image 1169.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/image 3.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300 group"
              style={{ width: "270px", height: "361px" }}
            >
              {/* Hover circle effect */}
              <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>

              {/* Product image */}
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain"
                  width={178}
                  height={178}
                />
              </div>

              {/* Product details */}
              <div className="mt-4 text-center z-10 relative">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>

              {/* View Details Button */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center z-10">
                <Button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md hover:bg-purple-500 hover:text-white transition">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
