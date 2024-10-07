"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"; 

export default function Reviews() {
  return (
    <div className="w-full h-[80vh] bg-[url('/reviewBackground.png')] bg-stretch bg-no-repeat bg-center bg-opacity-65 flex flex-col items-center justify-center">
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
        className=""
      >
        <SingleReview />
        <SingleReview />
        <SingleReview />
      </Carousel>
    </div>
  );
}

const SingleReview = ({
    imgUrl,
    name,
    content
}) => {
    return (
      <div className="px-[2%] h-[60vh] w-full flex items-center justify-center">
        <div className="w-full lg:w-1/3 py-32 flex flex-col justify-center gap-12 h-full">
          <div>
            <Image
              src="/imageProfile.png"
              width={100000000000}
              height={100000000000}
            ></Image>
            <p className="text-2xl">Mary Matthews</p>
            <p className="text-gray-500 text-lg">Client</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className="text-[#F0C2B3] w-16 h-16"
            />
            <p className="text-lg">
              I did some search online for a place to get my nails done, and
              shortly afterward I came across Blameless. Since my first visit, I
              have always left their salon fully satisfied. Their team is highly
              qualified and knows how to treat my nails the best way.
            </p>
            
          </div>
        </div>
      </div>
    );
}
