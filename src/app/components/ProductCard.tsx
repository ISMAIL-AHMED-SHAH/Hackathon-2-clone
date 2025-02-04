import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const handleAddToCart = (e: React.MouseEvent, product : Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500
    });
    addToCart(product);
  };

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      {product.image && (
        <Image
          src={urlFor(product.image).url()} 
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      )}
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-700">Price: ${product.price}</p>
      {product.discountPrice && (
        <p className="text-red-500">Discount: ${product.discountPrice}</p>
      )}
      <div className="p-4 mt-auto">
      <Button className='mt-4 bg-blue-800 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg' 
      onClick={(e) => handleAddToCart(e, product)}>Add To Cart</Button>
                </div>
    </div>
  );
};

export default ProductCard;

