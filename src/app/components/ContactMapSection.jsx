"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dinamički uvozimo React Leaflet komponente
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  {
    ssr: false,
  }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const MapComponent = () => {
  const [isClient, setIsClient] = useState(false);
  const [customIcon, setCustomIcon] = useState(null);
  const position = [48.85236818604603, 8.208922576356274];

  useEffect(() => {
    setIsClient(true); // Obezbedi da se kod izvršava na klijentu
    if (typeof window !== "undefined") {
      // Uvjeti da je Leaflet dostupan na klijentskoj strani
      const L = require("leaflet"); // Uvezi Leaflet unutar useEffect
      const icon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });
      setCustomIcon(icon);
    }
  }, []);

  if (!isClient || !customIcon) {
    return null; // Dok Leaflet nije učitan, ne prikazuj mapu
  }

  const googleMapsLink = `https://www.google.com/maps/place/Beauty+Studio+by+Arnela/@48.8522372,8.2086796,108m/data=!3m1!1e3!4m12!1m5!3m4!2zNDjCsDUxJzA4LjUiTiA4wrAxMiczMi4xIkU!8m2!3d48.8523682!4d8.2089226!3m5!1s0x47971dc4fdce920d:0x67d7fd931004b1ab!8m2!3d48.8523686!4d8.2089251!16s%2Fg%2F11fsmgmrhk?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D`;
  const appleMapsLink = `https://beta.maps.apple.com/?address=Ritterstra%C3%9Fe+28%2C+76437+Rastatt%2C+Germany&ll=48.8524206%2C8.208873&q=Ritterstra%C3%9Fe+28`;

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              Otvori u Google Maps
            </a>
            <br />
            <a href={appleMapsLink} target="_blank" rel="noopener noreferrer">
              Otvori u Apple Maps
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default function ContactMapSection() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 z-0 h-[80vh] md:h-auto">
        <MapComponent />
      </div>
      <div className="bg-[#F4F4F4] w-full md:w-1/2 px-4 md:px-16 py-12 flex flex-col justify-center">
        <div>
          <h1 className="text-4xl font-medium">Get in Touch</h1>
          <div className="w-1/4 h-1 bg-Pink mt-2"></div>
        </div>
        <p className="text-[#a3a3a3] lg:w-2/3 mt-4">
          Have any questions? Feel free to use the contact form below to get in
          touch with us. We will answer you as soon as possible!
        </p>
        <div className="w-full lg:w-2/3 mt-10">
          <FormComp />
        </div>
      </div>
    </div>
  );
}

const FormComp = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p>Your name</p>
        <input
          placeholder="John Doe"
          className="border-2 px-4 py-2 rounded-3xl bg-[#F4F4F4]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Your phone number</p>
        <input
          placeholder="John Doe"
          className="border-2 px-4 py-2 rounded-3xl bg-[#F4F4F4]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Your email</p>
        <input
          placeholder="John Doe"
          className="border-2 px-4 py-2 rounded-3xl bg-[#F4F4F4]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Your message</p>
        <textarea
          placeholder="John Doe"
          rows={5}
          maxLength={500}
          className="border-2 px-4 py-2 rounded-3xl bg-[#F4F4F4] resize-none"
        />
      </div>

      <button className="px-4 py-2 rounded-3xl bg-Pink w-2/3 mt-4">
        SEND MESSAGE
      </button>
    </div>
  );
};
