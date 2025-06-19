import { Link } from "react-router";
export default function Home(){
    const leftitems = [
    {
      title: "Lilo & Stitch toys & more",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-6cc7/k2-_2d80e262-68a6-4789-88ba-a9f42a493f43.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70",
      button: "Shop now",
    },
    {
      title: "Save big on hundreds of pet picks!",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-b4d1/k2-_802aff86-68d5-4e35-96e4-328a02b662ff.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70",
      button: "Shop now",
    },
  ];

   const middleitems = [
    {
      title: "Lilo & Stitch toys & more",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-b209/k2-_33a17ec9-05ca-4c10-988b-865632513f91.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70",
      button: "Shop now",
    },
    {
      title: "Save big on hundreds of pet picks!",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-65cb/k2-_d767184f-0a11-4400-ad0f-c09df8397b2d.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70",
      button: "Shop now",
    },
  ];
  
  
   const rightitems = [
    {
      title: "Lilo & Stitch toys & more",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-ee5d/k2-_b0fe9231-d082-4e2b-8f3f-40c93fc75c57.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70",
      button: "Shop now",
    },
    {
      title: "Save big on hundreds of pet picks!",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-3e30/k2-_c153707d-b4ee-4bf5-bdc9-f18a7b5a2c4d.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70",
      button: "Shop now",
    },
    
  ];

   const products = [
    {
      image: "https://i5.walmartimages.com/seo/Mainstays-by-Becky-G-Alejandra-14-5-Artificial-Lemon-Tree-in-White-Ceramic-Vase_8632886c-878e-407f-aff6-323e27ed85bd.6b4de062e69d2ff746a42b225f0f4343.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$9.98",
      title: "Mainstays by Becky G & Alejandra 14.5\" Artificial...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Mainstays-by-Becky-G-Alejandra-Bamboo-Melamine-Dinner-Bowl-Lemon-Green_fce85b54-041f-45de-a455-27e081cff6fc.f5b4e30e0a9a5755e9ed5ffb1fd0eb28.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$2.76",
      title: "Mainstays by Becky G & Alejandra Bamboo...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Becky-G-Lily-Green-Cabana-Stripe-Oblong-Pillow-14-x-20_bc18431b-3249-4126-8752-db284c03f315.f0e344162de160c3edcbece7cc451c05.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$4.98",
      title: "Mainstays by Becky G & Alejandra 8\" Artificial...",
    },
  ];

  const productshoes = [
    {
      image: "https://i5.walmartimages.com/seo/Ecetana-Flat-Sandals-for-Women-Soft-Leather-Sandals-Slides-for-Women-Summer-Shoes_b1ab9b1d-2d20-418f-bed2-a1346c1f0caa.a5259ae4eccef8f107dd60fb37c7884a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$9.98",
      title: "Mainstays by Becky G & Alejandra 14.5\" Artificial...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Ecetana-Men-s-Sport-Sandals-Outdoor-Hiking-Sandals-Athletic-Walking-Casual-Water-Shoes_8ab2a334-9139-4d92-ad38-0a7213ed4712.af50a1771b0abcf138c4e8c226207623.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$2.76",
      title: "Mainstays by Becky G & Alejandra Bamboo...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Madden-NYC-Women-s-Kite-Strappy-Sandals-Sizes-6-11_3ee9ebb5-b370-4a03-9971-43fd70b45356.08b3ade4ad05629ab095923a17500611.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$4.98",
      title: "Mainstays by Becky G & Alejandra 8\" Artificial...",
    },
  ]
  
  const categories = [
    {
      title: "Grocery",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-d59a/k2-_3c62c186-8ec0-4541-9e7c-24efaa163e9f.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
    {
      title: "Home",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-6665/k2-_ddcfae2e-c70f-43f6-b234-71fcba59bdac.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
    {
      title: "Patio & Garden",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-68c6/k2-_c36c35d7-7a6f-4108-86ec-4451a17ec151.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
    {
      title: "Fashion",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-e6a0/k2-_c07e4bfc-6a34-4d51-9167-c6f84f45aa95.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
    {
      title: "Tech",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-3669/k2-_4646f61b-a14a-42d3-ba04-befefa24d967.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
    {
      title: "Baby",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-3d34/k2-_e39033d8-6523-4ee6-9cc3-67c2baf667d5.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
    {
      title: "Toys",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-bc93/k2-_5c8044b6-cd62-4615-86fa-8b20acb71786.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
    {
      title: "Health & wellness",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-33d9/k2-_d07759dd-36d5-4f1e-822b-de3b43b3583f.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
    {
      title: "Personal Care",
      image: "https://i5.walmartimages.com/dfw/4ff9c6c9-1222/k2-_8202a2b0-4157-4602-a0c9-9bcee5a5f589.v1.png?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    },
  ];

  const Flashdeals = [
    {
      image: "https://i5.walmartimages.com/seo/Ecetana-Flat-Sandals-for-Women-Soft-Leather-Sandals-Slides-for-Women-Summer-Shoes_b1ab9b1d-2d20-418f-bed2-a1346c1f0caa.a5259ae4eccef8f107dd60fb37c7884a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$9.98",
      title: "Mainstays by Becky G & Alejandra 14.5\" Artificial...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Ecetana-Men-s-Sport-Sandals-Outdoor-Hiking-Sandals-Athletic-Walking-Casual-Water-Shoes_8ab2a334-9139-4d92-ad38-0a7213ed4712.af50a1771b0abcf138c4e8c226207623.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$2.76",
      title: "Mainstays by Becky G & Alejandra Bamboo...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Madden-NYC-Women-s-Kite-Strappy-Sandals-Sizes-6-11_3ee9ebb5-b370-4a03-9971-43fd70b45356.08b3ade4ad05629ab095923a17500611.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$4.98",
      title: "Mainstays by Becky G & Alejandra 8\" Artificial...",
    },
     {
      image: "https://i5.walmartimages.com/seo/Madden-NYC-Women-s-Kite-Strappy-Sandals-Sizes-6-11_3ee9ebb5-b370-4a03-9971-43fd70b45356.08b3ade4ad05629ab095923a17500611.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$4.98",
      title: "Mainstays by Becky G & Alejandra 8\" Artificial...",
    },
     {
      image: "https://i5.walmartimages.com/seo/Madden-NYC-Women-s-Kite-Strappy-Sandals-Sizes-6-11_3ee9ebb5-b370-4a03-9971-43fd70b45356.08b3ade4ad05629ab095923a17500611.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$4.98",
      title: "Mainstays by Becky G & Alejandra 8\" Artificial...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Ecetana-Men-s-Sport-Sandals-Outdoor-Hiking-Sandals-Athletic-Walking-Casual-Water-Shoes_8ab2a334-9139-4d92-ad38-0a7213ed4712.af50a1771b0abcf138c4e8c226207623.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$2.76",
      title: "Mainstays by Becky G & Alejandra Bamboo...",
    },
  ]

  const Populardeals = [
    {
      image: "https://i5.walmartimages.com/seo/Ecetana-Flat-Sandals-for-Women-Soft-Leather-Sandals-Slides-for-Women-Summer-Shoes_b1ab9b1d-2d20-418f-bed2-a1346c1f0caa.a5259ae4eccef8f107dd60fb37c7884a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$9.98",
      title: "Mainstays by Becky G & Alejandra 14.5\" Artificial...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Ecetana-Men-s-Sport-Sandals-Outdoor-Hiking-Sandals-Athletic-Walking-Casual-Water-Shoes_8ab2a334-9139-4d92-ad38-0a7213ed4712.af50a1771b0abcf138c4e8c226207623.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$2.76",
      title: "Mainstays by Becky G & Alejandra Bamboo...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Madden-NYC-Women-s-Kite-Strappy-Sandals-Sizes-6-11_3ee9ebb5-b370-4a03-9971-43fd70b45356.08b3ade4ad05629ab095923a17500611.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$4.98",
      title: "Mainstays by Becky G & Alejandra 8\" Artificial...",
    },
     {
      image: "https://i5.walmartimages.com/seo/Madden-NYC-Women-s-Kite-Strappy-Sandals-Sizes-6-11_3ee9ebb5-b370-4a03-9971-43fd70b45356.08b3ade4ad05629ab095923a17500611.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$4.98",
      title: "Mainstays by Becky G & Alejandra 8\" Artificial...",
    },
     {
      image: "https://i5.walmartimages.com/seo/Madden-NYC-Women-s-Kite-Strappy-Sandals-Sizes-6-11_3ee9ebb5-b370-4a03-9971-43fd70b45356.08b3ade4ad05629ab095923a17500611.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$4.98",
      title: "Mainstays by Becky G & Alejandra 8\" Artificial...",
    },
    {
      image: "https://i5.walmartimages.com/seo/Ecetana-Men-s-Sport-Sandals-Outdoor-Hiking-Sandals-Athletic-Walking-Casual-Water-Shoes_8ab2a334-9139-4d92-ad38-0a7213ed4712.af50a1771b0abcf138c4e8c226207623.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price: "$2.76",
      title: "Mainstays by Becky G & Alejandra Bamboo...",
    },
  ]

    return(
        <div>
           {/* Hero Section  */}
         <div className="grid grid-cols-[1fr_1.5fr_1fr] gap-4 p-4 pt-30 bg-white ">
            {/* 1st column */}
            <div>
      {leftitems.map((item, idx) => (
        <div
          key={idx}
          className="relative mb-2 rounded-xl overflow-hidden shadow-md hover:scale-[1.01] transition "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white max-w-[75%]">
            <h3 className="text-lg font-semibold whitespace-pre-line">
              {item.title}
            </h3>
            <Link to="/product"><button className="mt-2 px-4 py-1 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-100 text-sm">
              {item.button}
            </button></Link>
          </div>
        </div>
      ))}
      </div>
      {/* middle column */}
      <div>
        {middleitems.map((item, idx) => (
        <div
          key={idx}
          className="relative rounded-xl mb-7 overflow-hidden shadow-md hover:scale-[1.01] transition w-f"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute top-30 left-4 text-white max-w-[75%]">
            <h3 className="text-2xl font-semibold whitespace-pre-line">
              {item.title}
            </h3>
            <Link to="/product"><button className="mt-2 px-4 py-1 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-100 text-sm">
              {item.button}
            </button></Link>
          </div>
        </div>
      ))}
      </div>
      {/* Last Column */}
      <div>
        {rightitems.map((item, idx) => (
        <div
          key={idx}
          className="relative mb-2 rounded-xl overflow-hidden shadow-md hover:scale-[1.01] transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white max-w-[75%]">
            <h3 className="text-lg font-semibold whitespace-pre-line">
              {item.title}
            </h3>
            <Link to="/product"><button className="mt-2 px-4 py-1 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-100 text-sm">
              {item.button}
            </button></Link>
          </div>
        </div>
      ))}
      </div>
    </div>

      {/* Options section home decor */}
    
      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl">
      {/* Left Promo Image + Text */}
      <div className="w-full md:w-1/2 bg-[#f5f5f5] rounded-xl overflow-hidden relative">
        <img
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-8f53/k2-_7bc8f213-210b-4445-85e2-b36013330a52.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
          alt="Mainstays Promo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 text-left text-white bg-gradient-to-r from-black/60 via-black/30 to-transparent">
          <p className="text-sm mb-1">A new home collection</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            Mainstays by Becky G & Alejandra
          </h2>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-full w-fit hover:bg-gray-100 transition">
            Shop now
          </button>
          <p className="mt-2 text-sm">From <span className="text-lg font-bold">$6</span></p>
        </div>
      </div>

      {/* Right Product Slider Section */}
      <div className="w-full md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">From Becky G & Alejandra</h3>
            <p className="text-sm text-gray-500">A new home collab by Mainstays.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">
            View all
          </a>
        </div>

        {/* Product cards */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {products.map((product, idx) => (
            <div key={idx} className="min-w-[140px]">
              <img src={product.image} alt={product.title} className="w-full h- rounded-lg mb-2" />
              <p className="font-semibold text-sm">{product.price}</p>
              <p className="text-xs text-gray-600 leading-tight">{product.title}</p>
              <button className="mt-2 text-xs border border-black px-3 py-1 rounded-full hover:bg-gray-100">
                Options
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


    {/* Footwear Collections */}
          
        <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl">
      {/* Left Promo Image + Text */}
       <div className="w-full md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">From Becky G & Alejandra</h3>
            <p className="text-sm text-gray-500">A new home collab by Mainstays.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">
            View all
          </a>
        </div>

        {/* Product cards */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {productshoes.map((product, idx) => (
            <div key={idx} className="min-w-[140px]">
              <img src={product.image} alt={product.title} className="w-full h- rounded-lg mb-2" />
              <p className="font-semibold text-sm">{product.price}</p>
              <p className="text-xs text-gray-600 leading-tight">{product.title}</p>
              <button className="mt-2 text-xs border border-black px-3 py-1 rounded-full hover:bg-gray-100">
                Options
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Right Product Slider Section */}

      <div className="w-full md:w-1/2 bg-[#f5f5f5] rounded-xl overflow-hidden relative">
        <img
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-d7fd/k2-_7f203710-e606-4dc1-9339-5250a0529d1c.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
          alt="Mainstays Promo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 text-left text-white bg-gradient-to-r from-black/60 via-black/30 to-transparent">
          <p className="text-sm mb-1">Reebok, No Boundaries & more</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            Sandals for the fam
          </h2>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-full w-fit hover:bg-gray-100 transition">
            Shop now
          </button>
          <p className="mt-2 text-sm">From <span className="text-lg font-bold">$6</span></p>
        </div>
      </div>

     
    </div>

    {/* Categories Sections-Get it all right here */}
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Get it all right here</h2>
        <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">View all</a>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[80px]">
            <img
              src={cat.image}
              alt={cat.title}
              className="w-40 h-40 object-cover rounded-2xl  mb-2"
            />
            <p className="text-xs text-center font-medium text-gray-800">{cat.title}</p>
          </div>
        ))}

        {/* Right Arrow */}
        <div className="flex items-center justify-center min-w-[80px]">
          <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    {/* Flash Deals */}

    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Flash Deals</h2>
        <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">View all</a>
      </div>
    
    <div className="w-full ">
        <div className="flex justify-between items-center mb-4">
        </div>

        {/* Product cards */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {Flashdeals.map((product, idx) => (
            <div key={idx} className="min-w-[140px]">
              <img src={product.image} alt={product.title} className="w-full h- rounded-lg mb-2" />
              <p className="font-semibold text-sm">{product.price}</p>
              <p className="text-xs text-gray-600 leading-tight">{product.title}</p>
              <button className="mt-2 text-xs border border-black px-3 py-1 rounded-full hover:bg-gray-100">
                Options
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>

    {/* Popular in vehicle parts & accessories */}
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Popular in vehicle parts & accessories</h2>
        <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">View all</a>
      </div>
    
    <div className="w-full ">
        <div className="flex justify-between items-center mb-4">
        </div>

        {/* Product cards */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {Populardeals.map((product, idx) => (
            <div key={idx} className="min-w-[140px]">
              <img src={product.image} alt={product.title} className="w-full h- rounded-lg mb-2" />
              <p className="font-semibold text-sm">{product.price}</p>
              <p className="text-xs text-gray-600 leading-tight">{product.title}</p>
              <button className="mt-2 text-xs border border-black px-3 py-1 rounded-full hover:bg-gray-100">
                Options
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>

    </div>

    )
}