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
        className={`fixed h-24 z-30 bg-white px-4 md:px-8 lg:px-48 text-black flex items-center justify-between top-0 w-full transition-all duration-300 ease-in-out ${
          show
            ? lastScrollY > 100
              ? "shadow-xl backdrop-blur-md h-20"
              : ""
            : "-translate-y-full"
        }`}
      >
        <div className="w-full justify-between items-center hidden md:flex">
          <p>Home</p>
          <p>About</p>
          <div><Logo></Logo></div>

          <p>TEST</p>
          <p>TEST</p>
        </div>

        {/* Hamburger Icon for Mobile Navigation */}
        <Logo></Logo>
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
