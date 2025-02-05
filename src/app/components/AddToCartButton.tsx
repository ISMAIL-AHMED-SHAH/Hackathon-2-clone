"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Swal from "sweetalert2";

interface Product {
  id: string;
  name: string;
  price: number;
}

const AddToCartButton = ({ product }: { product: Product }) => {
  const addToCart = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.name} added to Cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addToCart();
      }}
      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
    >
      <AiOutlineShoppingCart size={24} />
    </button>
  );
};

export default AddToCartButton;
