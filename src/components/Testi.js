import { useState } from 'react';

const Testi = () => {
  const testimonials = [
    {
      name: "John Doe",
      img:'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
      position: "Software Engineer",
      company: "Tech Corp",
      review: "This platform helped me find great job opportunities and connect with mentors."
    },
    {
      name: "Jane Smith",
      img:'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      position: "Product Manager",
      company: "Innovate Inc",
      review: "I was able to get career guidance from alumni, which really boosted my confidence."
    },
    {
      name: "Karti ponsan",
      img:'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      position: "Senior Manager",
      company: "Innovate Inc",
      review: "I was able to get career guidance from alumni, which really boosted my confidence."
    },

    {
      name: "Smith",
      img:'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D',
      position: "Product Developer",
      company: "Innovate Inc",
      review: "I was able to get career guidance from alumni, which really boosted my confidence."
    },
    // Add more testimonials here
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="flex items-center justify-center">
          <button onClick={prevTestimonial} className="px-4">&#8249;</button>
          <div className="mx-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg mb-4">"{testimonials[current].review}"</p>
              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <img
                    src={testimonials[current].img}
                    alt={testimonials[current].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonials[current].name}</h3>
                  <p className="text-gray-600">{testimonials[current].position} at {testimonials[current].company}</p>
                </div>
              </div>
            </div>
          </div>
          <button onClick={nextTestimonial} className="px-4">&#8250;</button>
        </div>
      </div>
    </div>
  );
};

export default Testi;
