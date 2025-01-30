import React from "react";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"),{ssr:false});
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import { Contact } from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Faq />
      <Contact />
      <Footer /> 
    </div>
  );
}



