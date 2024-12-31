import Image from "next/image";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
};


const initialCartProducts: CartItem[] = [
  {
    id: 1,
    name: "Ut diam",
    price: 30,
    quantity: 2,
    color: "Red",
    size: "M",
    image: "/cart1.png",
  },
  {
    id: 2,
    name: "faucibus posuere",
    price: 45,
    quantity: 1,
    color: "Blue",
    size: "L",
    image: "/cart2.png",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    price: 60,
    quantity: 1,
    color: "Green",
    size: "S",
    image: "/cart3.png",
  },
  {
    id: 4,
    name: "Elit massa dia",
    price: 50,
    quantity: 2,
    color: "Yellow",
    size: "M",
    image: "/cart4.png",
  },
  {
    id: 5,
    name: "Proin pharetra",
    price: 35,
    quantity: 3,
    color: "Black",
    size: "L",
    image: "/cart5.png",
  },
];

export default function ShoppingCart() {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        <p className="text-gray-500 text-sm mb-10">
          Home &gt; Pages &gt; <span className="text-pink-600">Shopping Cart</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow rounded-lg">
                <thead>
                  <tr>
                    <th className="text-left p-4 font-bold text-gray-700">Product</th>
                    <th className="text-left p-4 font-bold text-gray-700">Price</th>
                    <th className="text-left p-4 font-bold text-gray-700">Quantity</th>
                    <th className="text-left p-4 font-bold text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {initialCartProducts.map((product) => (
                    <tr key={product.id} className="border-t">
                      <td className="p-4">
                        <div className="flex items-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={83}
                            height={87}
                            className="w-12 h-12 rounded-md mr-4"
                          />
                          <div>
                            <p className="text-gray-800 font-medium">{product.name}</p>
                            <p className="text-gray-500 text-sm">Color: {product.color}</p>
                            <p className="text-gray-500 text-sm">Size: {product.size}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">${product.price.toFixed(2)}</td>
                      <td className="p-4">
                        <input
                          type="number"
                          className="w-16 border rounded-md p-2"
                          defaultValue={product.quantity}
                        />
                      </td>
                      <td className="p-4">${(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-6">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-md">
                Update Cart
              </button>
              <button className="bg-pink-500 text-white py-2 px-4 rounded-md">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div>
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Totals</h2>
              <p className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal:</span> <span>${initialCartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
              </p>
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md">
                Proceed To Checkout
              </button>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Calculate Shipping</h2>
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full border rounded-md p-2 mb-4"
                />
                <input
                  type="text"
                  placeholder="Mirpur Dhaka - 1200"
                  className="w-full border rounded-md p-2 mb-4"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border rounded-md p-2 mb-4"
                />
                <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-md">
                  Calculate Shipping
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
