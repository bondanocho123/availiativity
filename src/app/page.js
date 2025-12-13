import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero />
      <HowItWorks />
      <Footer />
    </>
    
  );
}
