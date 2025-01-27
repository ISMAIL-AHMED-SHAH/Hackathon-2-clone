import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Link, StarIcon } from "lucide-react";
import { relatedProductsQuery } from "@/sanity/lib/quries";


interface Props {
    params : Promise<{slug: string}>;
}

async function fetchProduct(slug: string): Promise<Product> {
    return client.fetch(  groq `*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        price,
        discountPrice,
        image,
        category,
        description,
        slug,
        rating {
                rate,
                count
            }
        }`, {slug});
    }

    async function fetchRelatedProducts(category: string, slug: string) {
        return client.fetch(relatedProductsQuery, { category, slug });
      }
      
    
    export default async function ProductPage({ params }: Props) {
        const { slug } = await params;
        const product = await fetchProduct(slug);
        const relatedProducts = await fetchRelatedProducts(product.category, slug);
      
        const numStars = Math.round(product.rating?.rate || 0);
        const starArray = Array(numStars).fill(0);
      
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="aspect-square w-full h-96 md:h-auto md:w-full">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-md shadow-md"
                  />
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
                <p className="text-lg font-sans">{product.description}</p>
                <p className="text-lg font-sans">Category : {product.category}</p>
              </div>
            </div>
      
            {/* Related Products Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-black">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {relatedProducts.map((relatedProduct:Product) => (
                  <div
                    key={relatedProduct._id}
                    className="flex flex-col items-center border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Image
                      src={urlFor(relatedProduct.image).url()}
                      alt={relatedProduct.name}
                      width={150}
                      height={150}
                      className="object-contain w-full h-48"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">
                      {relatedProduct.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      ${relatedProduct.price}
                    </p>
                    <Link
                      href={`/product/${relatedProduct.slug.current}`}
                      className="mt-4 inline-block bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                      View Product
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
      