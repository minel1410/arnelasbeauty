
"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

export default function Footer() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-4 py-10 pt-32 lg:px-44 flex flex-col gap-7 md:flex-row md:items-baseline"
      >
        {/* About Us Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold">Über uns</h1>
          <motion.div className="h-1 w-1/4 md:w-1/2 bg-Pink"></motion.div>
          <p className="text-md text-[#a3a3a3]">
            Beauty Studio by Arnela ist seit 2015 Ihr Ansprechpartner für ein
            breites Spektrum an Dienstleistungen in den Bereichen Augenbrauen,
            Wimpern und Make-up.
          </p>
        </motion.div>

        {/* Working Hours Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold">Arbeitszeiten</h1>
          <motion.div className="h-1 w-1/4 md:w-1/2 bg-Pink"></motion.div>
          <div className="text-[#a3a3a3] text-md">
            <p className="text-[#a3a3a3] poppins-medium">
              Mon-Fre: 09:00 – 18:00
            </p>
            <p className="text-[#a3a3a3] poppins-medium">
              Sam-Son: 09:00 – 18:00
            </p>
          </div>
        </motion.div>

        {/* Navigation Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold">Navigation</h1>
          <motion.div className="h-1 w-1/4 md:w-1/2 bg-Pink"></motion.div>
          <div className="text-[#a3a3a3] text-md flex flex-col poppins-medium">
            <Link
              href="#home"
              className="text-md hover:text-white transition-all"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-md hover:text-white transition-all"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="text-md hover:text-white transition-all"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-md hover:text-white transition-all"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold">Kontakt</h1>
          <motion.div className="h-1 w-1/4 md:w-1/2 bg-Pink"></motion.div>
          <div className="flex flex-col gap-4">
            <div className="flex w-full gap-5">
              <FeatherIcon
                icon="map-pin"
                strokeWidth={3}
                className="w-8 h-8 text-Pink"
              />
              <p className="text-[#a3a3a3] poppins-medium">
                Ritterstraße 28, 76437 Rastatt, Deutschland
              </p>
            </div>
            <div className="flex w-full gap-5">
              <FeatherIcon
                icon="phone"
                strokeWidth={3}
                className="w-6 h-6 text-Pink"
              />
              <p className="text-[#a3a3a3] poppins-medium">+1 (234) 567–8901</p>
            </div>
            <div className="flex w-full gap-5">
              <FeatherIcon
                icon="mail"
                strokeWidth={3}
                className="w-6 h-6 text-Pink"
              />
              <p className="text-[#a3a3a3] poppins-medium">
                contact@arnelasbeauty.com
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Logo and Social Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="py-5 w-full bg-[#F6F6F6] flex flex-col items-center md:items-end gap-3 md:flex-row md:justify-between md:px-4 lg:px-44"
      >
        <div className="flex flex-col">
          <p className="text-6xl font-allema text-black">Beauty Studio</p>
          <div className="flex w-full items-center justify-center gap-4">
            <p className="text-3xl font-aerotis text-black">by Arnela</p>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <p className="text-sm text-[#a3a3a3] poppins-medium">© 2024 by</p>
          <Link
            href="https://minelsalihagic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-[#a3a3a3] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.5px] after:bg-Pink after:transition-all after:duration-300 hover:after:w-full"
          >
            Minel Salihagić
          </Link>
        </div>
        <div className="flex gap-2">
          <motion.div whileHover={{ y: -3 }} className="text-[#A3A3A3] w-5 h-5">
            <FeatherIcon
              icon="instagram"
              className="hover:text-[#606060] hover:cursor-pointer transition-all"
            />
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="text-[#A3A3A3] w-5 h-5">
            <FeatherIcon icon="facebook" />
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="text-[#A3A3A3] w-5 h-5">
            <FeatherIcon icon="linkedin" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
