
import "./globals.css";
import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MeetMe from "./components/MeetMe";
import Reviews from "./components/ReviewsSection";
import Pricing from "./components/PricingSection";
import ContactMapSection from "./components/ContactMapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services/>
      <MeetMe />
      <Reviews />
      <Pricing />
      <ContactMapSection />
      <Footer />
    </>
  );
}
