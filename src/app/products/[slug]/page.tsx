'use client'


import React from 'react'; // Import React to use React.use()
import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { relatedProductsQuery } from "@/sanity/lib/quries";
import classNames from "classnames";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

interface Props {
  params: { slug: string };
}

async function fetchProduct(slug: string): Promise<Product | null> {
  try {
    return client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        price,
        discountPrice,
        stockLevel,
        image,
        stock,
        category,
        description,
        slug,
        rating {
          rate,
          count
        }
      }`,
      { slug: slug || "" }
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

async function fetchRelatedProducts(category: string, slug: string) {
  try {
    return client.fetch(relatedProductsQuery, { category, slug });
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}

export default function ProductPage({ params }: Props) {
  const { slug } = params; // Unwrap params directly

  const [product, setProduct] = React.useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    // Fetch product and related products
    const fetchData = async () => {
      const productData = await fetchProduct(slug);
      setProduct(productData);

      if (productData) {
        const relatedProductsData = await fetchRelatedProducts(productData.category, slug);
        setRelatedProducts(relatedProductsData);
      }
    };

    fetchData();
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600">Product Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          The product you are looking for does not exist or may have been removed.
        </p>
        <Link href="/" className="mt-6 inline-block text-blue-600 underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  const numStars = Math.round(product.rating?.rate || 0);
  const starArray = Array(numStars).fill(0);

  // Determine stock status
  const stockLevel = product.stockLevel ?? 0;
  const stockStatus =
    stockLevel > 10
      ? "In Stock"
      : stockLevel > 0
      ? "Low Stock"
      : "Out of Stock";

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });

    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square w-full h-96 md:h-auto md:w-full">
          {product.image ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name || "Product Image"}
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
              <p className="text-gray-500">No Image Available</p>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center gap-8">
          <div>
            <h1 className="lg:text-3xl text-2xl font-bold text-black">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center space-x-2">
              {starArray.map((_, index) => (
                <StarIcon
                  key={index}
                  size={20}
                  fill="yellow"
                  className="text-yellow-600"
                />
              ))}
              <p className="text-base text-gray-700 font-semibold">
                ({product.rating?.count || 0} Reviews)
              </p>
            </div>
            <span className="w-1/4 h-[1.6px] bg-gray-500 rounded-lg block mt-4 opacity-20 mb-4"></span>
          </div>

          <p className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
            {product.price ? `$${product.price}` : "Price not available"}
          </p>
          <p className="text-lg font-sans">
            {product.description || "No description available."}
          </p>
          <p className="text-lg font-sans">Category: {product.category || "N/A"}</p>
          {/* Stock Level */}
          <p
            className={classNames("text-lg font-semibold", {
              "text-green-600": stockStatus === "In Stock",
              "text-orange-600": stockStatus === "Low Stock",
              "text-red-600": stockStatus === "Out of Stock",
            })}
          >
            Stock Level: {stockStatus} ({stockLevel} units)
          </p>
          <div>
            <Button
              className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-100 transition-transform duration-200 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-black">Related Products</h2>
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {relatedProducts.map((relatedProduct: Product) => (
              <div
                key={relatedProduct._id}
                className="flex flex-col items-center border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {relatedProduct.image ? (
                  <Image
                    src={urlFor(relatedProduct.image).url()}
                    alt={relatedProduct.name || "Related Product"}
                    width={150}
                    height={150}
                    className="object-contain w-full h-48"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center">
                    <p className="text-gray-500">No Image</p>
                  </div>
                )}
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {relatedProduct.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  ${relatedProduct.price}
                </p>
                <Link
                  href={`/products/${relatedProduct.slug.current}`}
                  className="mt-4 inline-block bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-gray-600">No related products found.</p>
        )}
      </div>
    </div>
  );
}