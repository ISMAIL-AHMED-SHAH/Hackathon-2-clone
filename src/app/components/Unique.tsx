import React from "react";

const Unique: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Lower Section */}
      <section className="bg-[#F2F0FF] h-auto md:h-[579px]">
        <div className="relative flex flex-wrap md:flex-nowrap items-center gap-10 px-6 py-10 md:py-16">
          {/* Product Image */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <img
              src="/sofa.png"
              alt="Product"
              className="rounded-lg shadow-md w-full max-w-md md:max-w-lg object-contain"
            />
            {/* Overlay for small screens */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:hidden bg-gradient-to-t from-black/60 to-transparent rounded-lg">
              <h3 className=" text-[#3F509E] text-lg font-bold mb-4">
                Unique Features Of Latest & Trending Products
              </h3>
              <ul className="text-white text-sm space-y-2 list-disc pl-5">
                <li>
                  All frames constructed with hardwood solids and laminates.
                </li>
                <li>
                  Reinforced with double wood dowels, glue, screws, nails at
                  corner blocks, and machine nails.
                </li>
                <li>Arms, backs, and seats are structurally reinforced.</li>
              </ul>
              <div className="mt-6">
                <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
                  Add To Cart
                </button>
                <p className="mt-2 text-sm text-white">
                  B&B Italian Sofa - $32.00
                </p>
              </div>
            </div>
          </div>

          {/* Text Section for medium and larger screens */}
          <div className="flex-1 hidden md:block">
          <h2 className="text-[#3F509E] text-3xl font-bold mb-6">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="space-y-4 mb-8">

            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">
                All frames constructed with hardwood solids and laminates.
              </p>
            </li>


            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#3F509E] flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">
                Reinforced with double wood dowels, glue, screw-nails, corner
                blocks, and machine nails.
              </p>
            </li>

 
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">
                Arms, backs, and seats are structurally reinforced.
              </p>
            </li>
          </ul>
            <div className="mt-8">
              <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
                Add To Cart
              </button>
              <p className="mt-2 text-sm text-gray-500">
                B&B Italian Sofa - $32.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unique;
