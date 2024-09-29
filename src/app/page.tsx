import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import Portfolio from "@/components/Porfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
  
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}
