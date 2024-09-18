import React from 'react'

const Success = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar and Post Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Success Stories"
          className="border border-gray-300 px-4 py-2 rounded-lg w-1/2"
        />

        {/* Input Box for New Post */}
        <input
          type="text"
          placeholder="Share your success story..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-1/3 mx-2"
        />

        {/* Post Button */}
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600">
          Post
        </button>
      </div>

      {/* Success Stories Section */}
      <div className="space-y-6">
        {/* Each Success Story */}
        <div className="border rounded-lg p-6 bg-white shadow-lg">
          {/* Profile Section */}
          <div className="flex items-center mb-4">
            <img
              src="/path-to-profile-image.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-lg">John Doe</p>
              <p className="text-gray-500 text-sm">Software Engineer, XYZ Company</p>
            </div>
          </div>

          {/* Post Title */}
          <h2 className="text-2xl font-bold mb-2">From College Graduate to Senior Developer at XYZ</h2>
          {/* Story Content */}
          <p className="text-gray-700">
            I joined XYZ as a junior developer after graduation, and within 3 years, I climbed the ladder
            to become a senior developer...
          </p>
        </div>

        {/* Add more success stories as needed */}
        <div className="border rounded-lg p-6 bg-white shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="/path-to-profile-image.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-lg">Jane Smith</p>
              <p className="text-gray-500 text-sm">Marketing Manager, ABC Company</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2">How Networking Led Me to a Managerial Position</h2>
          <p className="text-gray-700">
            Through consistent networking and staying active in the alumni community, I was able to land a managerial position at ABC...
          </p>
        </div>
      </div>
    </div>
  );
};



export default Success