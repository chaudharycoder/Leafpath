import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img
            className="h-20  w-24 "
            src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/30-Alumni-Logos-to-Make-an-Authoritative-Network/alumni-by-stranger-designcrowd.png" // Add your logo path here
            alt="Leafpath"
          />
          <h1 className="ml-5 font-serif text-2xl font-bold text-blue-900">Leafpath</h1>
        </div>
        
        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 text-lg">
          <NavLink to="/" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
            Home
          </NavLink>
          <NavLink to="/directory" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
            Alumni Directory
          </NavLink>
          <NavLink to="/job_portal" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
            Job Portal
          </NavLink>
          <NavLink to="/success" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
            Success Stories
          </NavLink>
          <NavLink to="/donation" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
            Donations
          </NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
            Contact
          </NavLink>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none focus:text-indigo-500">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar