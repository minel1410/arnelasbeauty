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
              In Google Maps öffnen
            </a>
            <br />
            <a href={appleMapsLink} target="_blank" rel="noopener noreferrer">
              In Apple Maps öffnen
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
          <h1 className="text-4xl font-medium">Kontaktieren Sie uns</h1>
          <div className="w-1/4 h-1 bg-Pink mt-2"></div>
        </div>
        <p className="text-[#a3a3a3] lg:w-2/3 mt-4">
          Haben Sie noch Fragen? Nutzen Sie das untenstehende Kontaktformular,
          um mit uns in Kontakt mit uns aufzunehmen. Wir werden Ihnen so schnell
          wie möglich antworten!
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
        <p>Ihr Name</p>
        <input
          placeholder="Vorname Nachname"
          type="text"
          name="text"
          className="input border-2 px-4 py-2 rounded-3xl bg-[#F4F4F4]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Ihre Telefonnummer</p>
        <input
          placeholder="+112233445566"
          type="text"
          name="text"
          className="input border-2 px-4 py-2 rounded-3xl bg-[#F4F4F4]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Ihre E-mail</p>
        <input
          placeholder="vorname@beispiel.com"
          type="text"
          name="text"
          className="input border-2 px-4 py-2 rounded-3xl bg-[#F4F4F4]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Ihre Nachricht</p>
        <textarea
          rows={5}
          maxLength={500}
          className="input border-2 px-4 py-2 rounded-3xl bg-[#F4F4F4] resize-none"
        />
      </div>

      <a
        href="#_"
        class="w-1/2 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#a3a3a3] rounded-full shadow-md group"
      >
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#a3a3a3] group-hover:translate-x-0 ease">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-[#a3a3a3] transition-all duration-300 transform group-hover:translate-x-full ease">
          Nachricht senden
        </span>
        <span class="relative invisible">Nachricht senden</span>
      </a>
    </div>
  );
};
