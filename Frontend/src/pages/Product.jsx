import React, { useState } from 'react';
import { Star, Heart, Share, Truck, RotateCcw, ShieldCheck, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from "react-router";


const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('3.0 oz');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const productImages = [
    'https://i5.walmartimages.com/seo/Versace-Bright-Crystal-Eau-De-Toilette-Spray-Perfume-for-Women-3-Fluid-Ounces_58eb84dd-2389-4e2c-8674-dcd595f2d810.570d4945e8556483d1c4210b38bb5487.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    'https://i5.walmartimages.com/asr/9febe9d6-64fa-444b-9411-c7808f9925f3.fa1b2dec022a98c5961111eed1c54f1a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    'https://i5.walmartimages.com/asr/f041d470-5531-42cf-b553-9723c2fa488d_1.616e8dbc5e081ab9eeed15b4d612d8ed.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    'https://i5.walmartimages.com/asr/80d3aed5-9db3-4255-a224-18ec75cc51d0.acb8ea658e3683188b16bb526c71515e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
];

  const sizeOptions = [
    { size: '1.0 oz', price: 35.99, originalPrice: 45.99 },
    { size: '3.0 oz', price: 68.99, originalPrice: 89.99 },
    { size: '6.7 oz', price: 98.99, originalPrice: 129.99 }
  ];

  const currentPrice = sizeOptions.find(option => option.size === selectedSize);

  const reviews = [
    {
      rating: 5,
      title: "Love this fragrance!",
      text: "Versace Bright Crystal has been a longtime favorite of mine. It's light, fresh, and feminine, with a beautiful blend of pomegranate, peony, and a hint of musk.",
      author: "Sarah M.",
      date: "2 weeks ago",
      verified: true
    },
    {
      rating: 4,
      title: "Great everyday scent",
      text: "Perfect for everyday wear or a special occasion. I always get compliments when I wear it. Definitely a must-have in my collection.",
      author: "Jennifer L.",
      date: "1 month ago",
      verified: true
    },
    {
      rating: 5,
      title: "Authentic and well packaged",
      text: "Arrived quickly and well packaged. The fragrance is authentic and long-lasting. Great value for the price.",
      author: "Michelle R.",
      date: "3 weeks ago",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-28">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square">
              <img
                src={productImages[selectedImage]}
                alt="Versace Bright Crystal Perfume"
                className="w-full h-full object-contain p-5"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {[1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-16 h-16 bg-gray-50 rounded border-2 ${
                    selectedImage === index - 1 ? 'border-blue-600' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index-1)}
                >
                  <img
                    src={productImages[index-1]}
                    alt={`Product view ${index}`}
                    className="w-full h-full object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Versace Bright Crystal Eau de Toilette, Perfume for Women
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">(4.8)</span>
                </div>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                  512 reviews
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Brand: Versace</p>
            </div>

            {/* Price */}
            <div className="border-b pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-3xl font-semibold text-gray-900">
                  ${currentPrice?.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${currentPrice?.originalPrice}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  Save ${(currentPrice?.originalPrice - currentPrice?.price).toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Price when purchased online
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizeOptions.map((option) => (
                  <button
                    key={option.size}
                    className={`p-3 border-2 rounded text-center ${
                      selectedSize === option.size
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedSize(option.size)}
                  >
                    <div className="font-medium">{option.size}</div>
                    <div className="text-sm text-gray-600">${option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Qty</h3>
              <div className="flex items-center border border-gray-300 rounded w-32">
                <button
                  className="p-2 hover:bg-gray-50"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="flex-1 text-center py-2 border-0 focus:outline-none"
                />
                <button
                  className="p-2 hover:bg-gray-50"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
             <Link to="/product/cart"><button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Add to cart
              </button></Link>
              <button
                className={`w-full py-3 px-6 rounded-full font-medium border-2 transition-colors ${
                  isWishlisted
                    ? 'border-red-600 text-red-600 bg-red-50'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`w-5 h-5 inline mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                {isWishlisted ? 'Added to list' : 'Add to list'}
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Free shipping, arrives by Thu, Jun 27</div>
                  <div className="text-sm text-gray-600">Ships from and sold by Walmart.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Free 90-day returns</div>
                  <div className="text-sm text-gray-600">Details</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Walmart Protection Plan</div>
                  <div className="text-sm text-gray-600">Available for this item</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details & Reviews */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About this item</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Bright Crystal by Versace is a floral fruity fragrance for women</li>
                <li>• Top notes: Pomegranate, Yuzu, Water Notes</li>
                <li>• Middle notes: Peony, Magnolia, Lotus</li>
                <li>• Base notes: Plant Amber, Musk, Mahogany</li>
                <li>• Perfect for everyday wear and special occasions</li>
                <li>• Long-lasting fragrance with moderate sillage</li>
                <li>• Comes in elegant crystal-inspired bottle design</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Product specifications</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Brand</div>
                  <div className="text-gray-600">Versace</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Fragrance Type</div>
                  <div className="text-gray-600">Eau de Toilette</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Gender</div>
                  <div className="text-gray-600">Women</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Scent</div>
                  <div className="text-gray-600">Floral Fruity</div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer reviews</h2>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{review.title}</h4>
                  <p className="text-sm text-gray-700 mb-2">{review.text}</p>
                  <div className="text-xs text-gray-500">
                    {review.author} • {review.date}
                  </div>
                </div>
              ))}
              <button className="text-blue-600 text-sm hover:underline">
                See all 512 reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;