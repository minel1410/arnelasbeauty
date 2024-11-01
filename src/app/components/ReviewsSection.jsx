"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"; 
import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <div className="w-full bg-[url('/reviewBackground.png')] bg-stretch bg-no-repeat bg-center bg-opacity-65 flex flex-col items-center justify-center py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold poppins-bold"
      >
        Reviews
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full"
      >
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators
          autoPlay
          infiniteLoop
          stopOnHover
          swipeable
          useKeyboardArrows
        >
          {[
            {
              img: "D",
              name: "Dejana",
              content: "Für mich ist dieses Studio das beste...",
            },
            {
              img: "A",
              name: "Andre Szabo",
              content: "Der Salon ist schön, sauber und...",
            },
            { img: "P", name: "P Jung", content: "👍👍" },
            {
              img: "A",
              name: "Amela",
              content: "Genauigkeit, Sauberkeit, Qualität...",
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <SingleReview
                img={review.img}
                name={review.name}
                content={review.content}
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}

const SingleReview = ({
    img,
    name,
    content
}) => {
    return (
      <div className="px-[2%] w-full flex items-center justify-center">
        <div className="w-full lg:w-1/3 py-32 flex flex-col justify-center gap-12 h-full">
          <div>
            <div className="w-full flex justify-center">
              <div className="w-16 h-16 rounded-full p-4 bg-orange-500 flex items-center justify-center text-white text-4xl font-semibold">
                {img}
              </div>
            </div>
            <p className="text-2xl mt-5">{name}</p>
            <p className="text-gray-500 text-lg">Kunde</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className="text-[#F0C2B3] w-16 h-16"
            />
            <p className="text-xl">{content}</p>
          </div>
        </div>
      </div>
    );
}

