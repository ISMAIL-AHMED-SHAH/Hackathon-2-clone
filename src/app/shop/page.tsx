import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import WishlistButton from "@/app/components/WishlistButton"
import AddToCartButton from "@/app/components/AddToCartButton";
import { AiOutlineEye } from "react-icons/ai";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  image: string;
}

const ShopList = async () => {
  const query = `*[_type == 'product']{
    _id,
    name,
    category,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    "image": image.asset->url,
  }`;

  const products: Product[] = await client.fetch(query);

  return (
    <div className="font-sans text-[#151875]">
      {/* Header Section */}
      <div className="py-28 px-8">
        <h1 className="text-4xl font-bold">Shop List</h1>
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <p>Pages</p>
          <p className="text-[#FB2E86]">Shopping List</p>
        </div>
      </div>

      {/* Filter and Sorting Section */}
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
        <div>
          <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-sm font-medium text-gray-700">
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#FB2E86]">
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="p-8">
        <div className="space-y-6">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="lg:w-1/3 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                </div>

                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-lg font-bold">${product.price}</span>
                </div>
                <p className="mt-2 text-gray-600">{product.description}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-4">
                  <WishlistButton product={product} />
                  <AddToCartButton product={product} />
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                    <AiOutlineEye size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopList;
