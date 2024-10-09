import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import FAB from "./components/FAB";
import ContactMapSection from "./components/ContactMapSection";
import Pricing from "./components/PricingSection";
import Reviews from "./components/ReviewsSection";
import MeetMe from "./components/MeetMe";
import Services from "./components/Services";
import Hero from "./components/Hero";

export const metadata = {
  title: "Beauty Studio by Arnela Rastatt",
  description: "Development",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
          <div className="">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
