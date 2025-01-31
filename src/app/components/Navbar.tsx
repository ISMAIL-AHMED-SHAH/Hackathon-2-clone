"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar"; // ✅ Import the SearchBar component

const Navbar = () => {
  return (
    <div className="w-full border-b-2 border-gray-300 bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link href="/" passHref>
          <h1 className="text-2xl font-bold text-black cursor-pointer">Hekto</h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 font-medium text-gray-800">
          <Link href="/" className="text-sm font-normal text-pink-400 hover:text-black">
            Home
          </Link>
          <DropdownMenu />
          <Link className="text-sm font-normal hover:text-black" href="/products">
            Products
          </Link>
          <Link className="text-sm font-normal hover:text-black" href="/checkout">
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


        <div className="hidden md:flex">
          <SearchBar /> 
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger>
            <Button variant="outline" size="icon" className="block md:hidden rounded-xl">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Hekto</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6">
              <Link className="text-sm font-normal hover:text-black" href="/products">
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
              {/* Mobile Search Bar */}
              <SearchBar />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
