import React from 'react'
import { useState } from 'react';

const Contact = () => {
      // State to store form data
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // You can add functionality to send the form data to a server or API here
      };
    
      return (
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <p className="text-center text-gray-600 mb-6">
              Have any doubts or need help regarding our services? Feel free to reach out.
            </p>
    
            {/* Contact Form */}
            <form className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
    
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
    
              {/* Message Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="border border-gray-300 rounded-lg w-full px-4 py-2 h-32 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
    
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };
    


export default Contact