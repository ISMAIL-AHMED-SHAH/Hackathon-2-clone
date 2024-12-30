import Image from "next/image";
import Link from "next/link";

export default function OrderCompleted() {
  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Header */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Order Completed</h1>
          <p className="text-gray-500">
            Home <span className="text-gray-400">. Pages .</span>{" "}
            <span className="text-pink-500">Order Completed</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 text-center px-4">
        <div className="flex flex-col items-center relative">
          {/* Images Section */}
          <div className="relative w-full">
            {/* Clock Image (Top Left) - Hidden on Mobile */}
            <div className="absolute top-0 left-16 md:left-64 transform -translate-x-12 hidden sm:block">
              <Image
                src="/clock1.png"
                alt="Clock Icon"
                width={94}
                height={94}
                className="rounded-full"
              />
            </div>

            {/* Tick Mark Image (Center) */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-12">
              <Image
                src="/tick.png"
                alt="Tick Icon"
                width={46}
                height={37}
              />
            </div>

            {/* Notebook Image (Bottom Right) - Hidden on Mobile */}
            <div className="absolute top-[194px] right-[219px] md:right-[219px] transform translate-x-12 hidden sm:block">
              <Image
                src="/notebook.png"
                alt="Notebook Icon"
                width={70}
                height={70}
              />
            </div>
          </div>

          {/* Text Section */}
          <h2 className="text-3xl font-bold text-gray-900 mt-24">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-lg">
            Thank you for your order! Your order is being processed and will be
            completed within 3to6 hours. You will receive an email confirmation
            once your order is ready.
          </p>

          {/* Button */}
          <Link
            href="/shop"
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-sm mt-6"
          >
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full py-12">
        <div className="max-w-screen-xl mx-auto flex justify-center px-4">
          <Image
            src="/image1174.png"
            alt="Logos"
            width={800}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
