"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";

const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; 
  const debouncedQuery = useDebounce(query, 500);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!debouncedQuery) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const results: Product[] = await client.fetch(
          `*[_type == "product" && name match $query + "*"] {
            _id,
            name,
            price,
            discountPrice,
            stockLevel,
            "imageUrl": image.asset->url,  
            "slug": slug.current,
            category,
            description,
            rating {
              rate,
              count
            }
          }`,
          { query: debouncedQuery }
        );
        setProducts(results);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [debouncedQuery]);

  const handleAddToCart = (product: Product) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Search Results for &quot;{query}&quot;</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-300 h-48 w-full rounded-md"></div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="text-gray-500">No products match your search. Try different keywords.</p>
          <Image src="/no-results.png" alt="No results" width={400} height={400} className="mx-auto mt-4" />
        </div>
      )}
    </div>
  );
};

export default SearchPageContent;
