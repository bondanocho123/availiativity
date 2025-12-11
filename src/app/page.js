import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <HowItWorks />
      <Footer />
    </>
    
  );
}
