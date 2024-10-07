import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import FAB from "./components/FAB";
import ContactMapSection from "./components/ContactMapSection";
import Pricing from "./components/PricingSection";
import Reviews from "./components/ReviewsSection";
import MeetMe from "./components/MeetMe";
import Services from "./components/Services";

export const metadata = {
  title: "Beauty Studio by Arnela Rastatt",
  description: "Development",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <div className="flex bg-Navy">
          <div className="pt-24">{children}</div>
          <FAB></FAB>
        </div>
        <Services/>
        <MeetMe/>
        <Reviews/>
        <Pricing/>
        <ContactMapSection />
        <Footer></Footer>
      </body>
    </html>
  );
};

export default RootLayout;
