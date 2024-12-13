import React from 'react';

const ShippingInfo = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap md:px-16 px-6 py-8 gap-8">
      {/* Left Section: Form */}
      <div className="flex-1 bg-lightBlue p-6 md:p-12 rounded-lg shadow-md">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-navy text-[24px] font-bold">Hekto Demo</h3>
          <p className="text-navy mt-2">Cart / Information / Shipping / Payment</p>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h4 className="text-navy text-[18px] font-semibold">Contact Information</h4>
            <div className="text-[14px]">
              <span className="text-tertiary mr-2">Already have an account?</span>
              <span className="text-blue-600 underline cursor-pointer">Log in</span>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-tertiary text-[14px] mb-1">Email or mobile phone number</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your email or phone number"
            />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input type="checkbox" id="updates" className="w-4 h-4" />
            <label htmlFor="updates" className="text-[14px] text-tertiary">
              Keep me up to date on news and exclusive offers
            </label>
          </div>
        </div>

        {/* Shipping Address */}
        <div>
          <h4 className="text-navy text-[18px] font-semibold mb-4">Shipping Address</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-tertiary text-[14px] mb-1">First Name (optional)</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-tertiary text-[14px] mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-tertiary text-[14px] mb-1">Address</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Street address or PO Box"
            />
          </div>
          <div className="mt-4">
            <label className="block text-tertiary text-[14px] mb-1">
              Apartment, suite, etc. (optional)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Apartment, suite, etc."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-tertiary text-[14px] mb-1">City</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-tertiary text-[14px] mb-1">Postal Code</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Postal Code"
              />
            </div>
          </div>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-pink-600">
            Continue Shipping
          </button>
        </div>
      </div>

      {/* Right Section: Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-navy text-[18px] font-semibold mb-4">Order Summary</h4>
        {/* List of Items */}
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                <div>
                  <h6 className="text-[14px] text-navy">Item Name</h6>
                  <p className="text-[12px] text-tertiary">Color: Brown | Size: XL</p>
                </div>
              </div>
              <p className="text-[14px] text-navy">$32.00</p>
            </div>
          ))}
        </div>
        {/* Totals */}
        <div className="border-t border-gray-300 mt-6 pt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-[14px] text-navy">Subtotal:</p>
            <p className="text-[14px] text-navy">$219.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] text-navy">Total:</p>
            <p className="text-[14px] text-navy font-bold">$325.00</p>
          </div>
        </div>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md mt-6 w-full hover:bg-green-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShippingInfo;
