"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
/* import FeatherIcon from "feather-icons-react";
 */
const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const Sidebar = ({ active }) => {
  // Use useEffect to handle scroll locking when the sidebar is active
  useEffect(() => {
    if (active) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "";
    }

    // Clean up by enabling scroll when the component is unmounted or when `active` changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <motion.aside
        className={`absolute top-0 left-0 w-full z-20 h-screen flex md:hidden ${
          active ? "opacity-100" : "opacity-0"
        }`}
        initial={{ x: "-100%", opacity: 0 }}
        animate={active ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.3,
        }}
        aria-hidden={!active} // Hides the sidebar from screen readers when inactive
      >
        <div className="w-1/4 sm:w-1/2 bg-Pink/30 backdrop-blur-md"></div>
        <nav className="w-3/4 sm:w-1/2 bg-Pink z-30 h-full flex justify-center items-center">
          <ul className="w-full flex flex-col gap-3">
            <li className="w-full flex justify-center h-24"></li>
            <li>
              <Link
                href="#aboutme"
                aria-label="About me section"
                className="w-full p-3 flex flex-col items-center justify-center group"
              >
                <p className="font-sf-mono text-Green text-lg">01.</p>
                <p className="font-calibre text-Slate text-2xl group-hover:text-Green transition-all">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                aria-label="Projects section"
                className="w-full p-3 flex flex-col items-center justify-center group"
              >
                <p className="font-sf-mono text-Green text-lg">02.</p>
                <p className="font-calibre text-Slate text-2xl group-hover:text-Green transition-all">
                  Projects
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                aria-label="Contact section"
                className="w-full p-3 flex flex-col items-center justify-center group"
              >
                <p className="font-sf-mono text-Green text-lg">03.</p>
                <p className="font-calibre text-Slate text-2xl group-hover:text-Green transition-all">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-24 flex justify-around w-2/3 sm:w-1/2">
            {/* External links for social profiles */}
            <Link
              href="https://github.com/minel1410"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
            >
              {/* <FeatherIcon icon="github" strokeWidth="2" /> */}
            </Link>
            <Link
              href="https://instagram.com/minel.salihagic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
            >
              {/* <FeatherIcon icon="instagram" strokeWidth="2" /> */}
            </Link>
            <Link
              href="https://linkedin.com/in/minel-salihagi%C4%87-9ba401300/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
            >
              {/* <FeatherIcon icon="linkedin" strokeWidth="2" /> */}
            </Link>
            <Link
              href="mailto:minelsalihagic@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Me"
              className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
            >
              {/* <FeatherIcon icon="mail" strokeWidth="2" /> */}
            </Link>
          </div>
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
