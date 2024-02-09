import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Achievements from "@/components/Achivements";
import Reasons from "@/components/Reasons";
import HowitWorks from "@/components/HowitWorks";
import Services from "@/components/Services";
import MarketPlace from "@/components/MarketPlace";
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
        <MarketPlace />

    </div>
    </>
  );
}

