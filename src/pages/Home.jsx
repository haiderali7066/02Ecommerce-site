import React from "react";
import { Heart, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
// import Footer from '../components/Footer'

const Home = () => {
  const categories = [
    { name: "Iphone", image: "/img/9.png" },
    { name: "Speaker", image: "/img/12.png" },
    { name: "Tablet", image: "/img/15.png" },
    { name: "Laptop", image: "/img/5.png" },
    { name: "Headphone", image: "/img/8.png" },
  ];
  const products = [
    {
      id: 1,
      name: "LED 4k smart TV expo White/Gray/Black",
      price: 499,
      image: "/img/10.png",
    },
    {
      id: 2,
      name: "GM-2345 clossed back wireless Headphones",
      price: 99,
      image: "/img/11.png",
    },
    {
      id: 3,
      name: "GM-2345 clossed back wireless Headphones",
      price: 99,
      image: "/img/12.png",
    },
    {
      id: 4,
      name: "Laptop 4k smart TV expo White/Gray/Black",
      price: 599,
      image: "/img/13.png",
    },
    {
      id: 5,
      name: "Mobile phone accessories",
      price: 199,
      image: "/img/14.png",
    },
    {
      id: 6,
      name: "Accessories for mobile phone used USB",
      price: 149,
      image: "/img/6.png",
    },
    {
      id: 7,
      name: "GM-2345 clossed back Camera",
      price: 299,
      image: "/img/7.png",
    },
    {
      id: 8,
      name: "Mobile 4k smart TV expo White/Gray/Black",
      price: 399,
      image: "/img/3.png",
    },
  ];
  const products2 = [
    {
      id: 1,
      name: "iphone",
      description: "Headphones come with a variety of features.",
      price: 49,
      rating: 5.0,
      image: "/img/1fbe8131b5-removebg-preview.png",
    },
    {
      id: 2,
      name: "Speacker",
      description: "Headphones come with a variety of features.",
      price: 55,
      rating: 4.5,
      image: "/img/14.png",
    },
    {
      id: 3,
      name: "Port",
      description: "Headphones come with a variety of features.",
      price: 39,
      rating: 4.3,
      image: "/img/8.png",
    },
    {
      id: 4,
      name: "Camera",
      description: "Headphones come with a variety of features.",
      price: 69,
      rating: 4.8,
      image: "/img/17.png",
    },
  ];
  return (
    <div>
      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-blue-100 rounded-3xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8">
                <img
                  src="./img/1fbe8131b5-removebg-preview.png"
                  alt="Black and gold over-ear headphones"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <p className="text-red-500 font-semibold mb-2">
                  In the spotlight
                </p>
                <h2 className="text-4xl font-bold mb-4">
                  Your sound best for your life
                </h2>
                <p className="text-gray-600 mb-6">
                  These have large ear cups that encompass the ears, providing
                  good sound isolation and often better sound quality.
                </p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300">
                  Shop now →
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <span className="h-2 w-2 rounded-full bg-red-500 mx-1"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Feature's</h2>
          <div className="bg-blue-100 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-300 text-6xl font-bold transform -rotate-90">
                    HEADPHONES
                  </div>
                </div>
                <img
                  src="./img/2.png"
                  alt="Blue headphones"
                  width={400}
                  height={400}
                  className="w-full h-auto relative z-10"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">Amazing feature</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold">Touch Controls</h4>
                    <p className="text-sm text-gray-600">
                      Some headphones have touch-sensitive surfaces for
                      controlling playback.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Sound Quality</h4>
                    <p className="text-sm text-gray-600">
                      This includes considerations like bass response, clarity,
                      and overall audio fidelity.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Microphone</h4>
                    <p className="text-sm text-gray-600">
                      Built-in microphones enable hands-free calling and voice
                      commands.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* category */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-center text-2xl font-bold text-red-500 mb-2">
            Category
          </h1>
          <h2 className="text-center text-xl mb-6">
            Can we help you pick a headphone
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-auto h-52 mb-2"
                />
                <span className="text-sm">{category.name}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start">
                <img
                  src="/img/17.png"
                  alt="Camera"
                  className="w-auto h-52 mr-4"
                />
                <div>
                  <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full text-sm mb-2">
                    25% off
                  </span>
                  <h3 className="text-lg font-semibold mb-2">
                    Catch hotest Deals in Cameras category
                  </h3>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition duration-300">
                    Shop now →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start">
                <img
                  src="/img/15.png"
                  alt="Tablet"
                  className="w-auto h-52 mr-4"
                />
                <div>
                  <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full text-sm mb-2">
                    25% off
                  </span>
                  <h3 className="text-lg font-semibold mb-2">
                    Tablets smartphone and more
                  </h3>
                  <span className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-lg font-semibold">
                    $799
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Top rated product
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                    aria-label="Add to favorites"
                  >
                    <Heart className="w-5 h-5 text-gray-400" />
                  </button>
                  <span className="absolute top-2 left-2 bg-gray-100 text-xs font-semibold px-2 py-1 rounded">
                    Top rated
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
                  <p className="text-red-500 font-bold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">New arrival</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products2.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                      <span className="ml-1 text-sm font-semibold">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-lg font-bold">${product.price}</p>
                  </div>
                </div>
                <div className="p-4">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <span className="h-2 w-2 rounded-full bg-red-500 mx-1"></span>
            <span className="h-2 w-2 rounded-full bg-red-300 mx-1"></span>
            <span className="h-2 w-2 rounded-full bg-red-300 mx-1"></span>
            <span className="h-2 w-2 rounded-full bg-red-300 mx-1"></span>
          </div>
        </div>
        {/* airpod n watch */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-100 rounded-lg p-6 flex items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Awesome Airpods</h2>
                <p className="text-gray-600 mb-4">
                  These new large ear cups that encompass the ears, providing
                  good sound
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                  Shop now
                </button>
              </div>
              <div className="w-1/3">
                <img
                  src="/img/6.png"
                  alt="White Airpod"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="bg-blue-100 rounded-lg p-6 flex items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Smart Watches</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                  Shop now
                </button>
              </div>
              <div className="w-1/3">
                <img
                  src="/img/3.png"
                  alt="Smart Watch"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="bg-blue-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Tag className="w-6 h-6 mr-2" />
              <span className="font-semibold">
                10% off when playing debit card
              </span>
            </div>
            <button className="text-blue-600 hover:underline">
              Learn More
            </button>
          </div>
        </div>
        {/* promo */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-red-500 font-semibold text-3xl mb-2">Comment level</p>
              <h2 className="text-5xl font-bold mb-6">
                A new style in your Ear
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "User's", value: "4M+" },
                  { label: "Purchaser", value: "153k" },
                  { label: "Gallery", value: "53k" },
                  { label: "Feedback", value: "2M+" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 rounded-lg p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-red-500">
                      {stat.value}
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-red-500 w-3/4 h-3/4 absolute top-0 right-0 rounded-full"></div>
              <img
                src="/img/6.png"
                alt="Person wearing headphones"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>



        
      </div>
    </div>
  );
};

export default Home;
