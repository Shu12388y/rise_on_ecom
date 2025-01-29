import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import { Contact } from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
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
