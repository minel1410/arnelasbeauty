"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
      <section id="home" className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/banner_video.mp4" type="video/mp4" />
          {/* Optionally, provide a fallback */}
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 bg-black/80 h-full flex items-center px-4 lg:px-48">
          {/* Your overlay content goes here */}
          <div className="w-full md:w-3/4">
            <motion.h4
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
              className="font-sf-mono text-gray-500 text-md md:text-xl"
            >
              Willkommen bei
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.795 }}
              viewport={{ once: true, amount: 0.1 }}
              className="
          font-calibre text-white text-4xl font-extrabold mt-4
          md:text-7xl
          "
            >
              Beauty Studio by Arnela
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.835 }}
              viewport={{ once: true, amount: 0.1 }}
              className="
          italic mt-4 text-[#aca8a8] font-bold text-3xl
          md:text-5xl

          "
            >
              Ihre Schönheit, unsere Leidenschaft.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.955 }}
              viewport={{ once: true, amount: 0.1 }}
              className="
          font-calibre text-Slate text-lg mt-5
          sm:text-lg md:text-xl xl:w-5/6"
            >
              In unserem Studio steht Ihre natürliche Schönheit im Mittelpunkt.
              Wir sind spezialisiert auf Augenbrauen-Styling,
              Wimpernverlängerungen und Schönheitsbehandlungen, die Ihren
              individuellen Stil unterstreichen.
            </motion.p>
          </div>
        </div>
      </section>
    );
}

