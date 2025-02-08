'use client';

import { Product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems } from '../actions/actions';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import Swal from 'sweetalert2';

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    state: false,
    zipCode: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem('appliedDiscount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.stockLevel;
  }, 0);

  const total = subTotal - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: formValues.firstName.trim() === '',
      lastName: formValues.lastName.trim() === '',
      email: formValues.email.trim() === '',
      phone: formValues.phone.trim() === '',
      address: formValues.address.trim() === '',
      city: formValues.city.trim() === '',
      state: formValues.state.trim() === '',
      zipCode: formValues.zipCode.trim() === '',
    };

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    console.log("Form Values:", formValues); // Debugging: Check form values
    // if (!validateForm()) {
    //   Swal.fire('Error!', 'Please fill in all required fields', 'error');
    //   return;
    // }

    // Show SweetAlert confirmation
    Swal.fire({
      title: 'Processing your order...',
      text: 'Please wait while we process your order',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const orderData = {
          _type: 'order',
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          phone: formValues.phone,
          address: formValues.address,
          city: formValues.city,
          state: formValues.state,
          zipCode: formValues.zipCode,
          cartItems: cartItems.map((item) => ({ _type: 'reference', _ref: item._id })),
          total: total,
          discount: discount,
          orderDate: new Date().toISOString(),
        };

        console.log("Order Data:", orderData); // Debugging: Check order data

        // try {
          const response = await client.create(orderData);
          console.log("Order Created:", response); // Debugging: Check API response
          localStorage.removeItem('appliedDiscount');
          localStorage.removeItem('cart'); // Clear the cart after successful order creation
          Swal.fire('Order Placed!', 'Your order has been placed successfully', 'success');
        }
        //  catch (error) {
        //   console.error("Error creating order:", error); // Debugging: Log the error
        //   Swal.fire('Error!', 'Failed to place the order. Please try again.', 'error');
        // }
      }
    // }
    );
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap md:px-16 px-6 py-8 gap-8">
      {/* Left Section: Form */}
      <div className="flex-1 bg-lightBlue p-6 md:p-12 rounded-lg shadow-md">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-navy text-[24px] font-bold">Hekto Demo</h3>
          <p className="text-navy mt-2">
            <Link href="/cart" className="text-blue-600 hover:underline">
              Cart
            </Link>{' '}
            / Information / Shipping / Payment
          </p>
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
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
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
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                className={`w-full border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-tertiary text-[14px] mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                className={`w-full border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-tertiary text-[14px] mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              className={`w-full border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
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
                name="city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`w-full border ${formErrors.city ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-tertiary text-[14px] mb-1">Postal Code</label>
              <input
                type="text"
                name="zipCode"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className={`w-full border ${formErrors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                placeholder="Postal Code"
              />
            </div>
          </div>
          <Button
            onClick={handlePlaceOrder}
            className="bg-pink-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-pink-600"
          >
            Continue Shipping
          </Button>
        </div>
      </div>

      {/* Right Section: Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-navy text-[18px] font-semibold mb-4">Order Summary</h4>
        {/* List of Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover rounded-lg"
                  />
                )}
                <div>
                  <h6 className="text-[14px] text-navy">{item.name}</h6>
                  <p className="text-[12px] text-tertiary">Quantity: {item.stockLevel}</p>
                </div>
              </div>
              <p className="text-[14px] text-navy">${(item.price * item.stockLevel).toFixed(2)}</p>
            </div>
          ))}
        </div>
        {/* Totals */}
        <div className="border-t border-gray-300 mt-6 pt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-[14px] text-navy">Subtotal:</p>
            <p className="text-[14px] text-navy">${subTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] text-navy">Discount:</p>
            <p className="text-[14px] text-navy">${discount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] text-navy">Total:</p>
            <p className="text-[14px] text-navy font-bold">${total.toFixed(2)}</p>
          </div>
        </div>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md mt-6 w-full hover:bg-green-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;