"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar.jsx";
import HamburgerIcon from "./HamburgerIcon";
import Link from "next/link";
import Logo from "./Logo.jsx";

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(currentScrollY);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setSidebarActive(!sidebarActive);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed h-24 z-30 bg-transparent px-4 lg:px-48 text-black flex items-center justify-between top-0 w-full transition-all duration-300 ease-in-out ${
          show
            ? lastScrollY > 100
              ? "shadow-xl backdrop-blur-md bg-transparent h-20"
              : ""
            : "-translate-y-full"
        }`}
      >
        <ul className="w-full justify-between items-center hidden md:flex">
          <motion.li
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="group relative text-2xl font-semibold text-white/50 hover:text-white hover:cursor-pointer transition-all"
          >
            <Link className="relative poppins-semibold" href="#home">
              Home
              <span
                className="poppins-semibold
        block h-0.5 bg-white absolute left-0 bottom-0 
        w-0 transition-all duration-300 ease-out group-hover:w-full
      "
              ></span>
            </Link>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="group relative text-2xl font-semibold text-white/50 hover:text-white hover:cursor-pointer transition-all"
          >
            <Link className="relative poppins-semibold" href="#services">
              Services
              <span
                className="
        block h-0.5 bg-white absolute left-0 bottom-0 
        w-0 transition-all duration-300 ease-out group-hover:w-full
      "
              ></span>
            </Link>
          </motion.li>

          <motion.div
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.35 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Logo isScrolled={lastScrollY < 100}></Logo>
          </motion.div>

          < 
          motion.li
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          className="group relative text-2xl font-semibold text-white/50 hover:text-white hover:cursor-pointer transition-all">
            <Link className="relative poppins-semibold" href="#pricing">
              Pricing
              <span
                className="
        block h-0.5 bg-white absolute left-0 bottom-0 
        w-0 transition-all duration-300 ease-out group-hover:w-full
      "
              ></span>
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0 }}
            viewport={{ once: true, amount: 0.1 }} className="group relative text-2xl font-semibold text-white/50 hover:text-white hover:cursor-pointer transition-all">
            <Link className="relative poppins-semibold" href="#contact">
              Contact
              <span
                className="
        block h-0.5 bg-white absolute left-0 bottom-0 
        w-0 transition-all duration-300 ease-out group-hover:w-full
      "
              ></span>
            </Link>
          </motion.li>
        </ul>

        {/* Hamburger Icon for Mobile Navigation */}
        <motion.div
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}className="md:hidden">
          <Logo isScrolled={lastScrollY < 100}></Logo>
        </motion.div>
        <HamburgerIcon
          active={sidebarActive}
          onclick={() => setSidebarActive(!sidebarActive)}
          onKeyDown={handleKeyDown}
          tabIndex={0} // Make it focusable
          aria-label="Toggle sidebar menu"
          role="button"
        />

        {/* Sidebar for Mobile */}
        <Sidebar active={sidebarActive} />
      </nav>
    </>
  );
};

export { Navbar };
