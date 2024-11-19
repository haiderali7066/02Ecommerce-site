import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavItem = ({ title, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 text-gray-800 hover:text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {items.length > 0 && isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className=" rounded-br-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">Your logo</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" ><NavItem title="Home" items={['Item 1', 'Item 2']} /></Link>
              <NavItem title="Electronics" items={['Computers', 'Phones', 'Tablets']} />
              <Link to="/contact" ><NavItem title="Contacts" items={['Email', 'Phone', 'Address']} /></Link>
             <Link to="/about" ><NavItem title="About" items={['Company', 'Team', 'Careers']} /></Link>
              <Link
                to="/Signin"
                className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}