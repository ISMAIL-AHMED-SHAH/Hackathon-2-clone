'use client';

import { useRouter } from 'next/navigation';


const DropdownMenu = () => {
  const router = useRouter();

  const handleNavigation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      router.push(selectedValue); // Navigate to the selected page
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Direct Link */}


      {/* Dropdown */}
      <select
        className="text-sm bg-transparent outline-none"
        onChange={handleNavigation}
      >
        <option value="">Pages</option>
        <option value="/contact">Contact</option>
        <option value="/about">About</option>
        <option value="/faq">FAQ</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
