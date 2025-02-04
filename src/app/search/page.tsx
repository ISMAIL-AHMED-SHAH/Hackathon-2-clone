"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import ProductCard from "../components/ProductCard";
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);



  useEffect(() => {
    if (!query) return;

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
          { query } 
        );
        setProducts(results);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [query]);

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
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchPage;