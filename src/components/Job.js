import React from 'react'

const Job = () => {
  return (
        <div className="container mx-auto px-4 py-8">
          {/* Search Bar and Job Posting Section */}
          <div className="flex justify-between items-center mb-6">
            {/* Search Bar */}
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search jobs..."
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              />
              <div className="absolute top-0 right-0 p-2">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-lg">
                  🔍
                </button>
              </div>
            </div>
    
            {/* Job Posting Input */}
            <input
              type="text"
              placeholder="Post a job..."
              className="border border-gray-300 px-4 py-2 rounded-lg w-1/3 mx-2"
            />
    
            {/* Post Button */}
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600">
              Post Job
            </button>
          </div>
    
          {/* Job Post Section */}
          <div className="space-y-6 mb-8">
            {/* Job Post */}
            <div className="border rounded-lg p-6 bg-white shadow-lg flex items-start">
              {/* Profile Photo */}
              <img
                src="/path-to-profile-image.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                {/* Name, Company, and Position */}
                <p className="font-bold text-lg">John Doe</p>
                <p className="text-gray-500 text-sm">Software Engineer, XYZ Company</p>
                {/* Job Post Content */}
                <p className="mt-2 text-gray-700">
                  We are hiring for a Senior Full Stack Developer. Must have 5+ years of experience in JavaScript and React...
                </p>
              </div>
            </div>
    
            {/* Add more job posts as needed */}
            <div className="border rounded-lg p-6 bg-white shadow-lg flex items-start">
              <img
                src="/path-to-profile-image.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-lg">Jane Smith</p>
                <p className="text-gray-500 text-sm">HR Manager, ABC Corp</p>
                <p className="mt-2 text-gray-700">
                  Looking for a Marketing Specialist with expertise in digital marketing and SEO...
                </p>
              </div>
            </div>
          </div>
    
          {/* List of Companies */}
          <h2 className="text-2xl font-bold mb-4">List of Companies Hiring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Company Card */}
            <div className="border rounded-lg p-6 bg-white shadow-lg">
              <p className="font-bold text-lg">XYZ Company</p>
              <p className="text-gray-500 mb-2">Software Engineer</p>
              <p className="text-gray-700 mb-4">
                Requirement: 5+ years experience in JavaScript, React, Node.js...
              </p>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
                Apply Now
              </button>
            </div>
    
            {/* More Company Cards */}
            <div className="border rounded-lg p-6 bg-white shadow-lg">
              <p className="font-bold text-lg">ABC Corp</p>
              <p className="text-gray-500 mb-2">Marketing Specialist</p>
              <p className="text-gray-700 mb-4">
                Requirement: Expertise in digital marketing, SEO, Google Ads...
              </p>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
                Apply Now
              </button>
            </div>
    
            {/* Add more company cards as needed */}
          </div>
        </div>
      );
    };
    


export default Job