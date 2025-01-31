'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import { latestproducts } from "@/sanity/lib/quries";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2025-01-15",
});

type Product = {
  _id: string;
  name: string;
  price: string;
  description: string;
  originalPrice: string;
  discountPrice: string;
  sale: boolean;
  image: { asset: { url: string } };
};

const LatestProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

  // Fetch data from Sanity on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(latestproducts);
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 relative"
            >
              {/* Product Image */}
              <div className="w-full h-56">
                {product.image?.asset?.url ? (
                  <Image
                    src={product.image.asset.url}
                    alt={`Product ${index + 1}`}
                    className="object-contain w-full h-full"
                    width={178}
                    height={178}
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-gray-800 font-semibold text-sm mb-1">
                  {product.name}
                </h3>
                <div className="text-gray-500 text-sm">
                  <span className="text-red-500 line-through mr-2">
                    ${product.price}
                  </span>
                  <span>${product.discountPrice}</span>
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
