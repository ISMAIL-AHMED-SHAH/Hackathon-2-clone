// import { client } from "@/sanity/lib/client";
// import { Product } from "../../../types/products";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";


// interface Props {
//     params : Promise<{slug: string}>;
// }

// async function fetchProduct(slug: string): Promise<Product> {
//     return client.fetch(  groq `*[_type == "product" && slug.current == $slug][0]{
//         _id,
//         name,
//         _type,
//         price,
//         image,
//         description,
//         slug
//         }`, {slug});
//     }
    
//     export default async function ProductPage({params}: Props) {
//         const { slug } = await params;
//         const product = await fetchProduct(slug);
//        return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="aspect-square w-full h-96 md:h-auto md:w-full">
//                     {product.image && (
//                         <Image
//                             src={urlFor(product.image).url()}
//                             alt={product.name}
//                             width={300}
//                             height={300}
//                             className="w-full h-full object-cover rounded-md shadow-md"
//                         />
//                     )}
//                 </div>
//                 <div className="flex flex-col justify-center gap-8">
//                     <h1 className="text-3xl font-semibold">
//                         {product.name}
//                     </h1>
//                     <p className="text-lg font-sans">
//                         {product.price ? $${product.price} : "Price not available"}
//                     </p>
//                     <p className="text-lg font-sans">
//                         {product.description}
//                     </p>
//                 </div>

//             </div>

//         </div>
//         );
// }