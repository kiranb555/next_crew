"use client";
import React from "react";
import { scrollToSection } from "../../../utils/scrollToSection";
import { PhoneIcon, EnvelopeIcon, ChevronDownIcon } from "@heroicons/react/20/solid"; // Import ChevronDownIcon
import constants from "../../../constants";

const { phone, email } = constants.contact; // Assuming email is defined in constants

const Banner = () => {
  return (
    <section className="bg-gradient-to-b from-teal-300 to-blue-500 lg:grid lg:h-[calc(100vh-80px)] lg:place-content-center pt-8 pb-8 lg:pt-16 lg:pb-16">
      <div className="mx-auto w-screen max-w-screen-auto">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Empower Your Workforce with
            <strong className="text-indigo-600"> Expert HR Solutions</strong>
          </h1>

          <p className="mt-4 mb-6 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            We specialize in providing tailored Human Resource services and manpower solutions to help businesses thrive. From recruitment to payroll management, we’ve got you covered.
          </p>

          {/* Call Icon and Phone Number */}
          <div className="flex items-center justify-center mt-4">
            <PhoneIcon className="text-grey-900 w-6 h-6 mr-2 animate-ping" />
            <a
              href={`tel:${phone}`}
              className="text-2xl font-medium text-gray-900 hover:underline"
            >
              {phone}
            </a>
          </div>

          {/* Buttons Section */}
          <div className="mt-6 flex justify-center gap-4 sm:mt-8">
            <button
              onClick={() => scrollToSection("contact-section")}
              className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 cursor-pointer"
            >
              Contact Us
              <ChevronDownIcon className="w-5 h-5 ml-2 animate-bounce" /> {/* Added bounce animation */}
            </button>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 cursor-pointer"
            >
              Write Us
            <EnvelopeIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
