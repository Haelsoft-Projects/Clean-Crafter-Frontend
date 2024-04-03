"use client"

import About from "@/components/LandingPage/About";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";
import Achievements from "@/components/LandingPage/Achivements";
import Reasons from "@/components/LandingPage/Reasons";
import HowitWorks from "@/components/LandingPage/HowitWorks";
import Services from "@/components/LandingPage/Services";
import Faqs from "@/components/LandingPage/Faqs";
import Reviews from "@/components/LandingPage/Reviews";
import Book from "@/components/LandingPage/Book";
import Footer from "@/components/LandingPage/Footer";

import { useEffect } from "react";
import NewsLetter from "@/components/common/NewsLetter";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem("email")
  }
  }, [])
  
  return (
    <>

      <div className="">
        <Navbar />
        <Hero />
        <About />
        <HowitWorks />
        <Achievements />
        <Reasons />
        <Services />
        <Reviews />
        <Faqs />
  
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}
