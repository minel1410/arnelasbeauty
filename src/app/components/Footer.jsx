
import FeatherIcon from "feather-icons-react";
import Logo from "./Logo";
import Link from "next/link";


export default function Footer() {
    return (
      <div>
        <div className="px-4 py-10 pt-32 lg:px-44 flex flex-col gap-7 md:flex-row md:items-baseline">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Über uns</h1>
            <div className="h-1 w-1/4 md:w-1/2 bg-Pink"></div>
            <p className="text-md text-[#a3a3a3]">
              Beauty Studio by Arnela ist seit 2015 Ihr Ansprechpartner für ein
              breites Spektrum an Dienstleistungen in den Bereichen Augenbrauen,
              Wimpern und Make-up.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Working Hours</h1>
            <div className="h-1 w-1/4 md:w-1/2 bg-Pink"></div>
            <div className="text-[#a3a3a3] text-md">
              <p className="text-[#a3a3a3] poppins-medium">
                Mon-Fre: 09:00 – 18:00
              </p>
              <p className="text-[#a3a3a3] poppins-medium">
                Sam-Son: 09:00 – 18:00
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Navigacija</h1>
            <div className="h-1 w-1/4 md:w-1/2 bg-Pink"></div>
            <div className="text-[#a3a3a3] text-md flex flex-col poppins-medium">
              <Link
                href="#home"
                className="text-md hover:text-white transition-all"
              >
                Home
              </Link>
              <Link
                href="#home"
                className="text-md hover:text-white transition-all"
              >
                Home
              </Link>
              <Link
                href="#home"
                className="text-md hover:text-white transition-all"
              >
                Home
              </Link>
              <Link
                href="#home"
                className="text-md hover:text-white transition-all"
              >
                Home
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Contact</h1>
            <div className="h-1 w-1/4 md:w-1/2 bg-Pink"></div>
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
                <p className="text-[#a3a3a3] poppins-medium">
                  +1 (234) 567–8901
                </p>
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
          </div>
        </div>

        <div className="py-5 w-full bg-[#F6F6F6] flex flex-col items-center lg:items-end gap-3 md:flex-row md:justify-between md:px-4 lg:px-44">
          {/* <p className="text-4xl font-black">LOGO</p> */}
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
            <div>
              <FeatherIcon
                icon="instagram"
                className="text-[#A3A3A3] w-5 h-5 hover:-translate-y-3 hover:text-[#606060] hover:cursor-pointer transition-all"
              />
            </div>
            <FeatherIcon icon="facebook" className="text-[#A3A3A3] w-5 h-5" />
            <FeatherIcon icon="linkedin" className="text-[#A3A3A3] w-5 h-5" />
          </div>
        </div>
      </div>
    );
}