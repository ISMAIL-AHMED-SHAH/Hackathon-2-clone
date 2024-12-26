import Link from 'next/link';
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Search } from 'lucide-react';
import DropdownMenu from './DropdownMenu';


const Navbar = () => {
  return (
    <div className="w-full border-b-2 border-gray-300 bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link href="/" passHref>
          <h1 className="text-2xl font-bold text-black cursor-pointer">
            Hekto
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 font-medium text-gray-800">
          <Link href="/" passHref>
            <select
              className="text-sm font-normal text-pink-400 hover:text-black"
              name="Home"
              id="Home"
            >
              <option value="Home">Home</option>
            </select>
          </Link>
          <div>
            <DropdownMenu />
          </div>
          <Link className="text-sm font-normal hover:text-black" href="/pages/demoproducts">
            Products
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/pages/shippinginfo">
            Shipping Info
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/blog">
            Blog
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/shop">
            Shop
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/contact">
            Contact
          </Link>
        </div>

        {/* Right Section: SearchBar + Icons */}
        <div className="hidden md:flex items-center border border-gray-700 rounded-md space-x-4 mr-0">
          {/* Search Bar */}
          <div className="flex items-center overflow-hidden hover:border-gray-800">
            <input
              type="text"
              className="px-2 py-1 text-sm text-gray-700 outline-none"
            />
            
            <Button className="p-4 bg-pink-400 hover:bg-pink-500">
              <span className="flex items-center justify-center">
                <FaSearch size={26} className="text-white bg-pink-500" />
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger>
            <Button variant={"outline"} size={"icon"} className="block md:hidden rounded-xl">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Hekto</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6">
            <Link className="text-sm font-normal hover:text-black" href="/pages/demoproducts">
            Products
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/pages/shippinginfo">
            Shipping Info
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/blog">
            Blog
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/shop">
            Shop
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/contact">
            Contact
          </Link>
            </div>
            <div className="mt-4">
              <div className="relative">
                <input
                  placeholder="Search Products"
                  className="bg-[#F5F5F5] rounded"
                />
                <Search className="absolute right-2 top-2" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar