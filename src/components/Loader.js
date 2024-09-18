import { useState, useEffect } from 'react';

const Loader = () => {
  const [users, setUsers] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [jobs, setJobs] = useState(0);

  // Simulate real-time data
  useEffect(() => {
    const increment = setInterval(() => {
      setUsers((prev) => {
        if (prev < 500) {
          return prev + 5;
        } else {
      
          return '2000+';
        }
      });
      setAlumni((prev) => (prev < 500 ? prev + 5 : '1000+'));
      setJobs((prev) => (prev < 500 ? prev + 5 : '1000+'));
    }, 20);

    return () => clearInterval(increment);
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Platform Stats</h2>
        <div className="flex justify-center space-x-16">
          <div>
            <h3 className="text-4xl font-bold">{users}</h3>
            <p className="text-gray-600">Registered Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">{alumni}</h3>
            <p className="text-gray-600">Alumni Mentors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">{jobs}</h3>
            <p className="text-gray-600">Jobs Filled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
