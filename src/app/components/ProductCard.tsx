import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

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
    </div>
    
  );
};

export default ProductCard;