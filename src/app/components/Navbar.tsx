import Link from 'next/link';
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full border-b-2 border-gray-300 bg-white py-4 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">Hekto</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 font-medium text-gray-800">
          <select
            className="text-sm font-normal text-pink-400 hover:text-black"
            name="Home"
            id="Home"
          >
            <option value="Home">Home</option>
          </select>
          <Link className="text-sm font-normal hover:text-black" href="#">
            Pages
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="#">
            Products
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="#">
            Blog
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="#">
            Shop
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="#">
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
            {/* Avoid Nested Buttons */}
            <Button className="p-4 bg-pink-400 hover:bg-pink-500">
              <span className="flex items-center justify-center">
                <FaSearch size={26} className="text-white bg-pink-500" />
              </span>
            </Button>
          </div>
        </div>

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
      <Link className="text-sm font-normal hover:text-black" href="#">
        Pages
      </Link>
      <Link className="text-sm font-normal hover:text-black" href="#">
        Products
      </Link>
      <Link className="text-sm font-normal hover:text-black" href="#">
        Blog
      </Link>
      <Link className="text-sm font-normal hover:text-black" href="#">
        Shop
      </Link>
      <Link className="text-sm font-normal hover:text-black" href="#">
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

export default Navbar;
