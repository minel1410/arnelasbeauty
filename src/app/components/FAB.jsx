"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViber } from "@fortawesome/free-brands-svg-icons"; 
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons"; 

export default function FAB() {
  const [isCircle, setIsCircle] = useState(true);

  return (
    <motion.div
      style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)" }}
      className="z-50 fixed left-2 bottom-2 p-4 bg-white flex items-center justify-center cursor-pointer"
      animate={{
        borderRadius: isCircle ? "50%" : "10%", // Okruglo -> Četvrtasto
        width: isCircle ? 80 : 300, // Širina se menja
        height: isCircle ? 80 : 300, // Visina se menja
      }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsCircle(!isCircle)} // Klik za promenu oblika
    >
      {isCircle ? (
        <FeatherIcon
          icon="phone"
          fill="#a3a3a3"
          strokeWidth={0}
          className="w-12 h-12"
        />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full flex flex-col gap-5 items-center"
        >
          <Image
            width="100"
            height="100"
            className="rounded-full"
            src="/fab_img.webp"
          ></Image>
          <div className="w-full flex flex-col items-center">
            <p className="text-lg font-medium">Arnela Mujezinovic</p>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-3/4 h-1 bg-Pink rounded-lg"></div>
          </div>
          <div className="w-full flex justify-around">
            <FontAwesomeIcon
              icon={faSquareWhatsapp}
              className="text-Pink w-8 h-8"
            />

            <FontAwesomeIcon icon={faViber} className="text-Pink w-8 h-8" />

            <FontAwesomeIcon
              icon={faSquarePhone}
              className="text-Pink w-8 h-8"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
