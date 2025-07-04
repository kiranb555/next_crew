"use client";
import { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
// import Team from "./components/team/Team";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import ContactForm from "./components/contactForm/ContactForm";
import ChooseUs from "./components/chooseUs";
import FloatingScrollToTopButton from "./components/FloatingScrollToTopButton";

export default function Home() {
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
    <div className="grid">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Banner />
        <Services />
        <Testimonial />
        {/* <Team /> */}
        <ContactForm />
        <ChooseUs />
      </main>
      <FloatingScrollToTopButton visible={showScrollToTop} onClick={scrollToTop} />
    </div>
  );
}
