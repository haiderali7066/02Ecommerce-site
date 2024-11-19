import React from "react"
export default function MobileAccessoriesPromo() {
  const benefits = [
    { title: "Choose teaching", description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
    { title: "24/7 available", description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
    { title: "Whiteboard", description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
    { title: "Afterable price", description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Open a Mobile Accessories Store Online
          </h1>
          <p className="text-xl mb-6">
            Best Tips to Start an Online Business
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/img/12.png"
            alt="Mobile accessories including headphones, chargers, and cases"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-blue-100 rounded-lg p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: '870', label: 'Shops' },
            { value: '20,000+', label: 'Users' },
            { value: '260', label: 'Subscribes' },
            { value: '73,990', label: 'Active' },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-red-500 mb-2">Why choose us</h2>
      <h1 className="text-3xl font-bold text-center mb-8">Benefits of online buying service with us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <img src="/img/15.png" alt="Person using tablet" className="w-60 h-auto mb-4 rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-red-500 mb-2">Customer your product us</h3>
          <h2 className="text-2xl font-bold mb-4">Personilized profeissional online buying on your schedule</h2>
          <p className="mb-4">s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
            Get started
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-8">
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <img src="/img/14.png" alt="Product 1" className="w-full h-auto rounded-lg" />
            <img src="/img/6.png" alt="Product 2" className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-red-500 mb-2">Customer your product us</h3>
          <h2 className="text-2xl font-bold mb-4">Personilized profeissional online buying on your schedule</h2>
          <p className="mb-4">s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
            Get started
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}