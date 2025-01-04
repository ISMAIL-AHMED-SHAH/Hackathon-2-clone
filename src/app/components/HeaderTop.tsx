import Link from 'next/link';
import React from 'react';
import { BsTelephoneForward } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { LuShoppingCart } from 'react-icons/lu';

const HeaderTop = () => {
  return (
    <div className="w-full p-4 px-24 bg-purple-700 text-white hidden md:flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Email */}
        <Link
          href="mailto:mhhasanul@gmail.com"
          className="flex items-center gap-2 hover:text-gray-200"
        >
          <FaRegEnvelope />
          <span>mhhasanul@gmail.com</span>
        </Link>
        {/* Phone */}
        <Link
          href="tel:1234567890"
          className="flex items-center gap-2 hover:text-gray-200"
        >
          <BsTelephoneForward />
          <span>(12345)67890</span>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Language Selector */}
        <select
          className="text-white text-[16px] bg-transparent outline-none py-2 hover:bg-purple-600"
          name="language"
          id="language"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        {/* Currency Selector */}
        <select
          className="text-white text-[16px] bg-transparent outline-none py-2 hover:bg-purple-600"
          name="currency"
          id="currency"
        >
          <option value="USD $">USD</option>
          <option value="EUR €">EUR</option>
          <option value="PKR Rs">PKR</option>
        </select>
        {/* Login */}
        <Link href="/login" className="flex items-center gap-2 hover:text-gray-200">
          <span>Login</span>
          
          <FiUser size={26} className="cursor-pointer"/>
        </Link>
        {/* Wishlist */}
        <Link href="/wishlist" className="flex items-center gap-2 hover:text-gray-200">
          <span>Wishlist</span>
          <IoIosHeartEmpty size={26} className="cursor-pointer"/>
        </Link>
        {/* Cart */}
        <Link href="/cart" className="flex items-center hover:text-gray-200">
          <LuShoppingCart size={26} className="cursor-pointer"/>
        </Link>
      </div>
    </div>
  );
};

export default HeaderTop;
