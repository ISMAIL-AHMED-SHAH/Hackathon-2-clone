import { Button } from "@/components/ui/button";
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
    <section className="py-20 bg-white"> {/* Increased top and bottom padding */}
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
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
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
              className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 relative"
              style={{ minHeight: "300px" }} // Ensures consistent card height
            >
              {/* Product Image */}
              <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={productImages[index % productImages.length]}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 font-semibold mb-2">
                {product.name}
              </h3>
              <div className="text-gray-500">
                <span className="text-red-500 line-through mr-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span>${product.price.toFixed(2)}</span>
              </div>

              {/* Sale Badge */}
              {product.sale && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </div>
              )}

              {/* Hover Icons */}
              <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  ❤️
                </Button>
                <Button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  🛒
                </Button>
                <Button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  🔍
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
