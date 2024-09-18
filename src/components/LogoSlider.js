const LogoSlider = () => {
    const companies = [
      'https://1000logos.net/wp-content/uploads/2021/12/Byjus-Logo-tumb.png',
      'https://1000logos.net/wp-content/uploads/2019/06/Cisco-logo.jpg',
      'https://1000logos.net/wp-content/uploads/2017/02/IBM-logo-tumb.jpg',
      'https://1000logos.net/wp-content/uploads/2019/06/Amazon-Logo.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/768px-Tata_Consultancy_Services_Logo.svg.png?20210617123944',
      'https://1000logos.net/wp-content/uploads/2021/09/ServiceNow-Logo-768x483.png',
      'https://1000logos.net/wp-content/uploads/2019/06/Google-Logo.jpg',
       'https://1000logos.net/wp-content/uploads/2020/04/Wipro-Logo-tumb.jpg',
       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/768px-Accenture.svg.png',

       'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-700x394.png',
      // Add more logos as needed
    ];
  
    return (
      <div className="bg-white py-8">
        <div className="container mx-auto overflow-hidden">
          <h2 className="text-2xl font-bold text-center mb-6">Our Partner Companies</h2>
          <div className="flex animate-marquee space-x-8">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company}
                alt="Company Logo"
                className="w-32 h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default LogoSlider;
  