import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4 md:px-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Get to Know Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Walmart</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Press Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Pickup & Delivery</a></li>
            <li><a href="#">Money Services</a></li>
            <li><a href="#">Pharmacy</a></li>
            <li><a href="#">Photo Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy & Security</a></li>
            <li><a href="#">CA Privacy Rights</a></li>
            <li><a href="#">Do Not Sell My Info</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="h-5 w-5" /></a>
            <a href="#"><Twitter className="h-5 w-5" /></a>
            <a href="#"><Instagram className="h-5 w-5" /></a>
            <a href="#"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} Walmart. All Rights Reserved.
      </div>
    </footer>
  );
}
