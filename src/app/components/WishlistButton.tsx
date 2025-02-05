"use client";

import { AiOutlineHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const WishlistButton = ({ product }: { product: Product }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.name} added to Wishlist`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addToWishlist(product);
      }}
      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
    >
      <AiOutlineHeart size={24} />
    </button>
  );
};

export default WishlistButton;
