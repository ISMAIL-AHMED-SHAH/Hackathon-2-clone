'use client'


import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; 

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const fetchProducts = async () => {
        const query = `*[_type == "product" && category == $category]`;
        const data = await client.fetch(query, { category });
        setProducts(data);
      };

      fetchProducts();
    }
  }, [category]);

  if (!category) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Products in {category}</h1>
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product: any) => (
            <div key={product._id} className="p-4 border rounded shadow">
              <img
                src={product.image.asset.url}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-md font-bold mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
