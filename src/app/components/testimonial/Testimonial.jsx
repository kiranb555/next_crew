import React from "react";

const Testimonial = () => {
  return (
    <div className="py-16 my-8 mx-auto">
      <div className="px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
          Testimonials
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 animate-fade-in">
          Hear what our clients say about our exceptional HR services and manpower solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          <div className="bg-white shadow-md rounded-lg p-8 animate-slide-up">
            <p className="text-lg font-medium italic text-gray-700 mb-4">
              "The recruitment services provided by your team were outstanding! We found the perfect candidates for our organization."
            </p>
            <p className="text-gray-600">Sarah Johnson, HR Manager, Company A</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 animate-slide-up">
            <p className="text-lg font-medium italic text-gray-700 mb-4">
              "Your HR services have streamlined our processes and saved us so much time. Highly recommended!"
            </p>
            <p className="text-gray-600">Michael Brown, CEO, Company B</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 animate-slide-up">
            <p className="text-lg font-medium italic text-gray-700 mb-4">
              "The HR consulting services helped us improve our employee satisfaction and retention rates significantly."
            </p>
            <p className="text-gray-600">Emily Davis, Operations Head, Company C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
