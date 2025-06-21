import { ChevronDown, Grid2X2 } from "lucide-react";

export default function Categories() {
  const categories = [
    "Get it Fast",
    "My Items",
    "Pharmacy Delivery",
    "Dinner Solutions",
    "4th of July",
    "Trending",
    "Swim Shop",
    "New Arrivals",
    "Walmart+",
  ];

  return (
    <div className="bg-blue-50 border-b border-gray-200 text-sm text-blue-900 px-4   w-full fixed top-20 z-50">
      <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-2">
        {/* Departments */}
        <div className="flex items-center gap-1 font-semibold cursor-pointer hover:underline">
          <Grid2X2 className="w-4 h-4" />
          <span>Departments</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        {/* Services */}
        <div className="flex items-center gap-1 font-semibold cursor-pointer hover:underline">
          <Grid2X2 className="w-4 h-4" />
          <span>Services</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        {/* Divider */}
        <div className="text-gray-400">|</div>

        {/* Category Items */}
        {categories.map((item, idx) => (
          <span
            key={idx}
            className="cursor-pointer hover:underline text-blue-900 whitespace-nowrap"
          >
            {item}
          </span>
        ))}

        {/* More Dropdown */}
        <div className="flex items-center gap-1 font-semibold cursor-pointer hover:underline">
          <span>More</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
