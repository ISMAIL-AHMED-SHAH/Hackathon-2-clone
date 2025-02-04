// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { Product } from "@/types/products"; // ✅ Import Product type
// import { client } from "@/sanity/lib/client";
// import ProductCard from "../components/ProductCard";

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query");
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     if (!query) return;

//     const fetchProducts = async () => {
//         if (!query) return;
      
//         setLoading(true);
//         try {
//             const results: Product[] = await client.fetch(
//                 `*[_type == "product" && name match $query] {
//                   _id,
//                   name,
//                   price,
//                   discountPrice,
//                   stockLevel,
//                   "image": image.asset->, // Fetch the image asset
//                   "slug": slug.current,
//                   category,
//                   description,
//                   rating {
//                     rate,
//                     count
//                   }
//                 }`,
//                 { query: `${query}*` }
//               );
//           setProducts(results);
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         }
//         setLoading(false);
//       };
      
      

//     fetchProducts();
//   }, [query]);

//   return (
//     <div className="container mx-auto px-6 py-8">
//       <h2 className="text-2xl font-bold mb-6">Search Results for "{query}"</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : products.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchPage;
