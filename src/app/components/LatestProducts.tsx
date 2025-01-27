import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const LatestProducts: React.FC = () => {
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const productImages = [
    "/prod1.png",
    "/prod2.png",
    "/prod3.png",
    "/prod4.png",
    "/prod5.png",
    "/prod6.png",
  ];

  const products = Array(6).fill({
    name: "Comfort Handy Craft",
    price: 42.0,
    originalPrice: 65.0,
    sale: true,
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
          Latest Products
        </h2>

        {/* Categories */}
        <div className="flex justify-center space-x-6 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              className={`bg-white text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500 hover:bg-blue-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 relative"
            >
              {/* Product Image */}
              <div className="w-full h-56">
                <Image
                  src={productImages[index % productImages.length]}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full"
                  width={365}
                  height={306}
                />
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-gray-800 font-semibold text-sm mb-1">
                  {product.name}
                </h3>
                <div className="text-gray-500 text-sm">
                  <span className="text-red-500 line-through mr-2">
                    ${product.originalPrice}
                  </span>
                  <span>${product.price}</span>
                </div>
              </div>

              {/* Sale Badge */}
              {product.sale && (
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
