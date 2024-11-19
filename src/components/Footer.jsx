import React from 'react'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-blue-100 text-black py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Careers</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Use Cases</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
            
              <li><Link to="#" className="hover:text-gray-300">Blog</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Documentation</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Community</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
            
              <li><Link to="#" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Cookie Policy</Link></li>
              <li><Link to="#" className="hover:text-gray-300">GDPR</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
            
              <li><Link to="#" className="hover:text-gray-300">Twitter</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Facebook</Link></li>
              <li><Link to="#" className="hover:text-gray-300">LinkedIn</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}