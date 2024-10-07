
import FeatherIcon from "feather-icons-react";


export default function Footer() {
    return (
      <div>
        <div className="px-4 py-10 pt-32 lg:px-44 flex flex-col gap-7 md:flex-row md:items-baseline">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">About Us</h1>
            <div className="h-1 w-1/4 md:w-1/2 bg-Pink"></div>
            <p className="text-md text-[#a3a3a3]">
              Blameless Nail Salon has been offering an extensive range of nail
              services and skin treatments since 1999.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Working Hours</h1>
            <div className="h-1 w-1/4 md:w-1/2 bg-Pink"></div>
            <div className="text-[#a3a3a3]">
              <p>Mon-Fri: 9 am – 6 pm</p>
              <p>Mon-Fri: 9 am – 6 pm</p>
              <p>Mon-Fri: 9 am – 6 pm</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Navigacija</h1>
            <div className="h-1 w-1/4 md:w-1/2 bg-Pink"></div>
            <div className="text-[#a3a3a3]">
              <p>Početna</p>
              <p>Početna</p>
              <p>Početna</p>
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
                <p className="text-[#a3a3a3]">
                  Washington, USA 6036 Richmond hwy., Alexandria, VA, 2230
                </p>
              </div>
              <div className="flex w-full gap-5">
                <FeatherIcon
                  icon="phone"
                  strokeWidth={3}
                  className="w-6 h-6 text-Pink"
                />
                <p className="text-[#a3a3a3]">+1 (234) 567–8901</p>
              </div>
              <div className="flex w-full gap-5">
                <FeatherIcon
                  icon="mail"
                  strokeWidth={3}
                  className="w-6 h-6 text-Pink"
                />
                <p className="text-[#a3a3a3]">
                  contact@arnelasbeauty.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 w-full bg-[#F6F6F6] flex flex-col items-center gap-2 md:flex-row md:justify-between md:px-4 lg:px-44">
          <p className="text-4xl font-black">LOGO</p>
          <p className="text-sm text-[#a3a3a3]">
            © 2020 All Rights Reserved Privacy Policy
          </p>
          <div className="flex gap-2">
            <FeatherIcon icon="instagram" className="text-[#A3A3A3] w-5 h-5" />
            <FeatherIcon icon="facebook" className="text-[#A3A3A3] w-5 h-5" />
            <FeatherIcon icon="linkedin" className="text-[#A3A3A3] w-5 h-5" />
          </div>
        </div>
      </div>
    );
}