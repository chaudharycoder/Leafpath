import React from 'react';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';



const Herosection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://img.freepik.com/free-vector/graduates-wearing-medical-masks_23-2148571395.jpg?w=1060&t=st=1726671783~exp=1726672383~hmac=f78b6aa8f7eab82dbca64fe0b263300d617503b04515d4aa28d635c422369da3',
   'https://img.freepik.com/free-vector/collection-graduates-wearing-medical-masks_23-2148572899.jpg?w=1060&t=st=1726671882~exp=1726672482~hmac=0b99c3744ef41d53397a063895e5b36a6d417cf7260f4ffa721892990c414a6b',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Slider Image"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl font-bold mb-4">Connecting Alumni with Opportunities and Mentorship</h1>
        <div className="flex space-x-4">
          <NavLink to='/register' className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">
            Register Now
          </NavLink>
          <NavLink to='/job_portal' className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg">
            Explore Jobs
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
