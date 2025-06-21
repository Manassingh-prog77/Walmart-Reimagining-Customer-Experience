import React, { useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(true);
  
  const pricePerItem = 39.56;
  const originalPrice = 82.00;
  const pricePerOz = 23.27;
  
  const subtotal = quantity * pricePerItem;
  const estimatedTotal = subtotal; // Taxes calculated at checkout

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-28  min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Section */}
        <div className="lg:col-span-2">
          {/* Added to cart notification */}
          {showAddedMessage && (
            <div className="flex items-center gap-2 mb-6 text-green-600 font-medium">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              Added to cart!
            </div>
          )}

          {/* Product Details */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img 
                  src="https://i5.walmartimages.com/seo/Versace-Bright-Crystal-Eau-De-Toilette-Perfume-for-Women_70f22541-8572-416b-bfb2-db0edbaa04f1.2a69055d3f34458aefdec9318354a791.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" 
                  alt="Versace Bright Crystal Eau De Toilette" 
                  className="w-32 h-32 object-contain rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow">
                <h2 className="text-xl font-medium text-gray-900 mb-1">
                  Versace Bright Crystal Eau De Toilette, Perfume for Women
                </h2>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-semibold text-green-600">
                    Now ${pricePerItem.toFixed(2)} ea
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  ${pricePerOz.toFixed(2)}/fl oz
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-blue-600 rounded-full">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 text-white hover:bg-blue-700 rounded-full transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-3 text-white font-medium min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 text-white hover:bg-blue-700 rounded-full transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm sticky mt-12">
            {/* View Cart Button */}
            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium text-lg mb-6 hover:bg-blue-700 transition-colors">
              View cart ({quantity})
            </button>

            {/* Order Summary */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Subtotal</span>
                <span className="text-gray-900 font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Taxes</span>
                <span className="text-gray-600">Calculated at checkout</span>
              </div>
              
              <hr className="border-gray-200" />
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Estimated total</span>
                <span className="text-xl font-bold text-gray-900">${estimatedTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}