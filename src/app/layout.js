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
  title: "Beauty Studio by Arnela | Augenbrauen- und Wimperndienste in Rastatt",
  description:
    "Das Beauty Studio by Arnela bietet professionelle Augenbrauenformung, Wimpernverlängerungen und Schönheitspflege in Rastatt. Besuchen Sie uns für hochwertige, persönliche Schönheitspflege.",
  keywords:
    "Beauty Studio, Arnela, Rastatt, Augenbrauenformung, Wimpernverlängerungen, Schönheitspflege, Make-up, Kosmetikstudio, Schönheitspflege, professionelle Schönheitstests",
  author: "Minel Salihagić",
  robots: "index, follow",
  openGraph: {
    title:
      "Beauty Studio by Arnela | Augenbrauen- und Wimperndienste in Rastatt",
    description:
      "Hochwertige Augenbrauenformung, Wimpernverlängerungen und persönliche Schönheitspflege im Beauty Studio by Arnela in Rastatt. Verbessern Sie Ihre natürliche Schönheit.",
    url: "https://beautystudiobyarnela.com",
    type: "website",
    locale: "de_DE",
    site_name: "Beauty Studio by Arnela",
    images: [
      {
        url: "https://beautystudiobyarnela.com/hero-image.jpg", // Aktualisieren Sie mit der tatsächlichen Bild-URL
        width: 1200,
        height: 630,
        alt: "Beauty Studio by Arnela Augenbrauen- und Wimperndienste",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Beauty Studio by Arnela | Augenbrauen- und Wimperndienste in Rastatt",
    description:
      "Professionelle Augenbrauenformung, Wimpernverlängerungen und Schönheitspflege im Beauty Studio Arnela in Rastatt.",
    images: ["https://beautystudiobyarnela.com/hero-image.jpg"], // Aktualisieren Sie mit der tatsächlichen Bild-URL
    site: "@arnelasbeautystudio",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph Meta-Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />

        {/* Twitter Meta-Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        {/* Strukturierte Daten */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Beauty Studio by Arnela",
            description: metadata.description,
            image: metadata.openGraph.images[0].url,
            url: metadata.openGraph.url,
            telephone: "+49 123 4567890", // Update with actual phone number
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ritterstraße 28",
              addressLocality: "Rastatt",
              postalCode: "76437",
              addressCountry: "DE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "48.858844",
              longitude: "8.209342",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Montag",
                  "Dienstag",
                  "Mittwoch",
                  "Donnerstag",
                  "Freitag",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Samstag", "Sonntag"],
                opens: "09:00",
                closes: "18:00",
              },
            ],
          })}
        </script>
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
