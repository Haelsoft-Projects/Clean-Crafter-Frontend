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
export default function Home() {
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
        <Book />
        <Footer />
      </div>
    </>
  );
}
