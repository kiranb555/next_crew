import React from 'react';
import {
  UserIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        What We Offer
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        We provide comprehensive Human Resource solutions and manpower services to help businesses achieve their goals. Explore our offerings below:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <UserIcon className="text-indigo-600 w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Recruitment Services</h3>
          <p className="text-gray-600">
            We help you find the right talent for your organization, ensuring a perfect match for your business needs.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <UsersIcon className="text-indigo-600 w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Temporary Staffing</h3>
          <p className="text-gray-600">
            Flexible staffing solutions to meet your short-term or project-based manpower requirements.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <ClipboardDocumentListIcon className="text-indigo-600 w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">HR Consulting</h3>
          <p className="text-gray-600">
            Expert HR consulting services to streamline your HR processes and improve organizational efficiency.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <CurrencyDollarIcon className="text-indigo-600 w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Payroll Management</h3>
          <p className="text-gray-600">
            Hassle-free payroll management services to ensure accurate and timely salary processing.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <AcademicCapIcon className="text-indigo-600 w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Training & Development</h3>
          <p className="text-gray-600">
            Customized training programs to enhance the skills and productivity of your workforce.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <BriefcaseIcon className="text-indigo-600 w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Permanent Staffing</h3>
          <p className="text-gray-600">
            End-to-end permanent staffing solutions to build a strong and reliable team for your organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;