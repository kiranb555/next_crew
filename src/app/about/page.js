"use client";
import { useState, useEffect } from "react";
import FloatingScrollToTopButton from "../components/FloatingScrollToTopButton";

export default function About() {
      const [showScrollToTop, setShowScrollToTop] = useState(false);
    
      // Track scroll position
      useEffect(() => {
        const handleScroll = () => {
          setShowScrollToTop(window.scrollY > 300); // Show button after scrolling 300px
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      // Scroll to top function
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
    <>
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center drop-shadow">
        About <span className="text-gray-800">Next Crew</span>
      </h1>
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <p className="text-lg text-gray-700 mb-4 text-center">
          <span className="font-semibold text-indigo-700">Next Crew</span> is dedicated to empowering businesses with expert Human Resource solutions tailored to their unique needs. With years of industry experience, our team specializes in recruitment, payroll management, staffing, and HR consulting services. We believe that people are the foundation of every successful organization, and our mission is to help you build, manage, and nurture a workforce that drives your business forward.
        </p>
        <p className="text-gray-700 mb-4 text-center">
          Our commitment to <span className="font-semibold text-indigo-700">excellence, integrity, and personalized service</span> ensures that our clients receive the highest quality support at every stage of their growth. Whether you are a startup or an established enterprise, Next Crew is your trusted partner for all your HR and manpower requirements.
        </p>
      </div>
      <div className="bg-indigo-50 rounded-xl shadow p-6 mb-8">
        <p className="text-gray-700 mb-4">
          At <span className="font-semibold text-indigo-700">Next Crew</span>, we believe that people are the driving force behind every successful business. Our mission is to empower organizations by providing comprehensive, reliable, and innovative Human Resource solutions that enable them to focus on what they do best—growing their business.
        </p>
        <p className="text-gray-700 mb-4">
          Founded by a team of HR professionals with decades of combined experience, Next Crew has become a trusted partner for companies seeking to optimize their workforce. We understand that every organization is unique, which is why we offer tailored services designed to meet the specific needs and challenges of each client.
        </p>
        <p className="text-gray-700 mb-4">
          Our expertise spans the entire HR spectrum, from recruitment and staffing to payroll management, HR consulting, and training & development. We leverage the latest industry best practices and technology to deliver efficient, scalable, and cost-effective solutions. Our commitment to integrity, transparency, and excellence ensures that our clients receive the highest level of service at every stage of their journey.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mt-8 mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>
            <span className="font-semibold text-gray-800">Recruitment Services:</span> We help you find and attract top talent that aligns with your company’s culture and goals.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Temporary &amp; Permanent Staffing:</span> Flexible staffing solutions to meet both short-term project needs and long-term organizational growth.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Payroll Management:</span> Hassle-free payroll processing to ensure your employees are paid accurately and on time.
          </li>
          <li>
            <span className="font-semibold text-gray-800">HR Consulting:</span> Expert guidance to streamline your HR processes, ensure compliance, and boost organizational efficiency.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Training &amp; Development:</span> Customized programs to enhance the skills and productivity of your workforce.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mt-8 mb-4">Why Choose Next Crew?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>Personalized solutions tailored to your business needs</li>
          <li>Experienced and dedicated HR professionals</li>
          <li>Commitment to confidentiality, integrity, and excellence</li>
          <li>Cutting-edge technology and industry best practices</li>
          <li>End-to-end support for all your HR and manpower requirements</li>
        </ul>
      </div>
      <div className="bg-indigo-100 rounded-xl shadow p-6">
        <p className="text-gray-700 mb-4 text-center">
          At Next Crew, we are passionate about helping businesses unlock their full potential by building strong, motivated, and high-performing teams. Whether you are a startup or an established enterprise, we are here to support your growth every step of the way.
        </p>
        <p className="text-indigo-800 text-center font-semibold">
          Partner with Next Crew and experience the difference that expert HR solutions can make for your business.
        </p>
      </div>
    </section>
    <FloatingScrollToTopButton visible={showScrollToTop} onClick={scrollToTop} />
    </>
  );
}