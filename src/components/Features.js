import React from "react";

const Features = () => {
    const features = [
      {
        title: "Job Matching Portal",
        description: "AI-powered job recommendations and verified alumni-only job postings.",
        image: "https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?t=st=1726672271~exp=1726675871~hmac=d8a6f8a8ce68bb0f253e1c49f31af1843d6f71ade38949ebcbb8b58d2f04ad01&w=740"
      },
      {
        title: "Success Stories",
        description: "Interactive success stories with user engagement metrics.",
        image: "https://img.freepik.com/free-vector/businessman-jumps-graph-columns-way-success-positive-thinking-success-achievement-self-confidence-concept-white-background_335657-2029.jpg?t=st=1726672081~exp=1726675681~hmac=08aa7d8d0b8bef57fd1c149df28ff53987ab13247aaa078f91d1d862a2a8f179&w=1060"
      },
      {
        title: "Mentorship Program",
        description: "Connect students with experienced alumni for career guidance.",
        image: "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?t=st=1726672825~exp=1726676425~hmac=7056db176cffb53e3d25ce49601391375e5ab1087aca8fe3fb9f7d4d6ae8a53d&w=1060"
      },
      {
        title: "Secure Donations",
        description: "Blockchain-backed donations and impact tracking.",
        image: "https://img.freepik.com/free-vector/indian-digital-rupee-symbol-background-strong-position-financial-market-concept_1017-53787.jpg?t=st=1726672565~exp=1726676165~hmac=aacf23a3dd8ff7a1e310a9dc74b1e4b6042266858e4b9d06940bd90920f0ce77&w=826"
      }
    ];
  
    return (
      <div className="container mx-auto px-32 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={feature.image} alt={feature.title} className="w-20 h-20 object-contain" />
              <div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Features;
  