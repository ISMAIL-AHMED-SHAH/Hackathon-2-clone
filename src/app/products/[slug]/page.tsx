import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { StarIcon } from "lucide-react";


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
    
    export default async function ProductPage({ params }: Props) {
        const { slug } = await params;
        const product = await fetchProduct(slug);
    
        // Calculate the number of stars
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
                        <div className="col-span-4">
                            <h1 className="lg:text-3xl text-2xl font-bold text-black">
                                {product.name}
                            </h1>
    
                            {/* Rating Section */}
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
                        
                        {/* Divider */}
            <span className="w-1/4 h-[1.6px] bg-gray-500 rounded-lg block mt-4 opacity-20 mb-4"></span>
                        </div>
    
                        {/* Price and Description */}
                        <p className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
                            {product.price ? `$${product.price}` : "Price not available"}
                        </p>
                        <p className="text-lg font-sans">{product.description}</p>
                        <p className="text-lg font-sans">Category : {product.category}</p>
                    </div>
                </div>
            </div>
        );
    }
    