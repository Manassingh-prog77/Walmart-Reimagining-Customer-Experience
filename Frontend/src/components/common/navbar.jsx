import { ShoppingCart, User2, Heart, ChevronDown, Search } from "lucide-react";
import Logo from "../../assets/Walmart-Logo.svg"
import Categories from "../categories";
import Location from "../../assets/Location.png";
export default function  Navbar(){

    return(
    <div className=" bg-[#0053e2] text-white flex items-center justify-between px-6  py-4  w-full top-0 fixed z-50">
      {/* Walmart logo (use any placeholder) */}
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold text-yellow-400">
            <img
            src={Logo}
            alt="image"
            className="h-10"/>
        </div>

        {/* Location Box */}
        <div className="bg-blue-900 rounded-full ml-4 px-3 py-2 flex items-center gap-5 text-sm cursor-pointer">
          <img
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
          alt="pickup"
            className="w-7 h-7"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold">Pickup or delivery?</span>
            <span className="text-xs text-gray-200">
              Patna, 801503 • Patna Bihar...
            </span>
          </div>
          <ChevronDown className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 mx-15 max-w-2xl">
        <input
          type="text"
          placeholder="Search everything at Walmart online and in store"
          className="w-full px-4 py-2 rounded-l-full text-black text-sm focus:outline-none bg-white"
        />
        <button className="bg-white px-4 py-2 rounded-r-full">
          <Search className="text-white bg-blue-900  rounded-full p-1" />
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <Heart className="w-5 h-5" />
          <span>My Items</span>
        </div>
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <User2 className="w-8 h-10" />
          <span>Account</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-blue-800 text-xs font-bold rounded-full px-1">
              0
            </div>
          </div>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  

    )
}