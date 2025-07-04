import React from "react";

const ChooseUs = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Why Choose Us
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        We specialize in providing top-notch human resources solutions to help
        companies achieve their goals. Here’s why we stand out:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Qualified Talent
          </h3>
          <p className="text-gray-600">
            We connect you with highly skilled and experienced professionals
            tailored to your business needs.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Customized Solutions
          </h3>
          <p className="text-gray-600">
            Our HR services are designed to meet the unique requirements of your
            company, ensuring the perfect fit.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Time Efficiency
          </h3>
          <p className="text-gray-600">
            Save time and resources by letting us handle the recruitment and
            onboarding process for you.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Cost-Effective
          </h3>
          <p className="text-gray-600">
            We provide affordable HR solutions without compromising on quality,
            helping you stay within budget.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Industry Expertise
          </h3>
          <p className="text-gray-600">
            With years of experience, we understand the challenges of various
            industries and provide tailored solutions.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            24/7 Support
          </h3>
          <p className="text-gray-600">
            Our dedicated team is available around the clock to address your HR
            needs and concerns.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ChooseUs;
