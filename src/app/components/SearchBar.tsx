"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const router = useRouter();

  // Fetch suggestions from Sanity
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const results: { name: string }[] = await client.fetch(
          `*[_type == "product" && name match $query] {
            name
          }`,
          { query: `${searchTerm}*` }
        );
        setSuggestions(results.map((result) => result.name));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSearch}
        className="flex items-center border border-gray-700 rounded-md space-x-2"
      >
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} 
          placeholder="Search products..."
          className="px-2 py-1 text-sm text-gray-700 outline-none"
        />
        <Button type="submit" className="p-4 bg-pink-400 hover:bg-pink-500">
          <FaSearch size={20} className="text-white" />
        </Button>
      </form>

      {/* Suggestions Dropdown */}
      {isFocused && suggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-50">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => {
                setSearchTerm(suggestion);
                router.push(`/search?query=${encodeURIComponent(suggestion)}`);
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;