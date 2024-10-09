"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"; 

export default function Reviews() {
  return (
    <div className="w-full bg-[url('/reviewBackground.png')] bg-stretch bg-no-repeat bg-center bg-opacity-65 flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl font-semibold">Reviews</h1>
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
        className="w-full"
      >
        <SingleReview
          img="D"
          name="Dejana"
          content="Für mich ist dieses Studio das beste, wenn es um die Augen geht.
              Super sauber, hygienisch und freundlich. Es erfüllt vollkommen die
              Wünsche seiner Kunden. Es ist immer eine Freude für mich!"
        />
        <SingleReview
          img="A"
          name="Andre Szabo"
          content="Der Salon ist schön, sauber und das Personal ist angenehm. Ich verlasse ihn immer zufrieden."
        />
        <SingleReview img="P" name="P Jung" content="👍👍" />
        <SingleReview
          img="A"
          name="Amela"
          content="Genauigkeit, Sauberkeit, Qualität, Professionalität und Wert sind die Grundpfeiler unseres Services."
        />
      </Carousel>
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

