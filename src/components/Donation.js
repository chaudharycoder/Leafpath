
import React, { useState } from 'react';
const Donation = () =>{
      const [isSearchExpanded, setIsSearchExpanded] = useState(false);
      const [searchTerm, setSearchTerm] = useState('');
    
      const toggleSearch = () => {
        setIsSearchExpanded(!isSearchExpanded);
      };
    
      const projects = [
        {
          title: 'Clean Water Initiative',
          description: 'Providing clean water to remote villages. This project focuses on...',
        },
        {
          title: 'Tech for Education',
          description: 'Empowering students with technology in underprivileged areas...',
        },
        {
          title: 'Health and Wellness',
          description: 'Improving access to healthcare and promoting wellness...',
        },
        // Add more projects as needed
      ];
    
      return (
        <div className="container mx-auto py-12">
          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className={`transition-all ${isSearchExpanded ? 'w-full md:w-2/3 lg:w-1/2' : 'w-12'} bg-gray-100 rounded-full flex items-center px-4`}>
              <input
                type="text"
                className={`bg-transparent focus:outline-none transition-all ${isSearchExpanded ? 'w-full' : 'w-0'}`}
                placeholder="Search for projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={toggleSearch} className="text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
    
          {/* Projects List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <button className="text-blue-500 hover:text-blue-700">Read more</button>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
                    Be a part of this project
                  </button>
                </div>
              </div>
            ))};
            </div>
            </div>
      )
}
 


export default Donation;