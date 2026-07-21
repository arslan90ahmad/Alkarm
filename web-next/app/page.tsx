import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CEO from "@/components/sections/CEO";
import Services from "@/components/sections/Services";
import TourCta from "@/components/sections/TourCta";
import Project from "@/components/sections/Project";
import AlNoorOrchard from "@/components/sections/AlNoorOrchard";
import Blocks from "@/components/sections/Blocks";
import Payment from "@/components/sections/Payment";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <About />
      <CEO />
      <Services />
      <TourCta />
      <Project />
      <AlNoorOrchard />
      <Blocks />
      <Payment />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
