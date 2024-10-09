"use client"

import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";


const Card = ({image, head, desc, b_price, t_price}) => {

  return (
    <div className="card1 w-full h-80 lg:h-1/2 rounded-2xl hover:cursor-default">
      <div className="w-full h-full flex flex-col justify-center">
        <img src={image} className="w-28 h-28 mb-8 text-pink-600" />
        <h3>{head} </h3>
        <p class="small pb-5">{desc}</p>
        <p className="text-white">{b_price}€ - {t_price}€</p>
      </div>
      <div class="go-corner" href="#">
        <div class="go-arrow">→</div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-Pink flex flex-col lg:flex-row lg:gap-8 px-4 lg:px-48 py-16 border"
    >
      <div className="w-full lg:w-5/12 flex flex-col justify-center gap-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl lg:w-5/6 font-semibold">
          Unsere Dienstleistungen
        </h1>
        <p className="lg:w-5/6 text-lg">
          Wir bieten eine Vielzahl an Dienstleistungen, um Ihre natürliche
          Schönheit zu betonen. Mit hochwertigen Produkten und den neuesten
          Techniken erzielen wir optimale Ergebnisse. Egal ob perfekt geformte
          Augenbrauen, lange und voluminöse Wimpern oder luxuriöses Make-up –
          unsere Dienstleistungen werden Ihre Wünsche erfüllen und Sie erfrischt
          und schön fühlen lassen.
        </p>
        <a
          href="#contact"
          class="w-1/2 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#a0867d] rounded-full shadow-md group"
        >
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#a0867d] group-hover:translate-x-0 ease">
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
          <span class="absolute flex items-center justify-center w-full h-full text-[#a0867d] transition-all duration-300 transform group-hover:translate-x-full ease">
            Book an appointment
          </span>
          <span class="relative invisible">Book an appointment</span>
        </a>
      </div>

      <div className="w-full lg:w-6/12 flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 mt-4 lg:mt-0">
        <div className="flex flex-col gap-8">
          <Card
            image="/eyelashes.png"
            head="Wimpernverlängerung"
            desc="Verlängern Sie Ihre Wimpern für einen volleren und längeren Look. Wählen Sie einen natürlichen oder dramatischen Stil."
            b_price={80}
            t_price={150}
          />
          <Card
            image="/lashes_fill.png"
            head="Wimpern Auffüllen"
            desc="Halten Sie Ihre Wimpern frisch. Auffüllservice nach 3 oder 4 Wochen."
            b_price={40}
            t_price={70}
          />
          <Card
            image="/combination.png"
            head="Microblading"
            desc="Manuelle Gestaltung der Augenbrauen für ein natürliches Aussehen. Lang anhaltende Ergebnisse."
            b_price={200}
            t_price={400}
          />
          <Card
            image="/microblading.png"
            head="Puder Augenbrauen"
            desc=" Für einen sanften und natürlichen Augenbrauenlook. Perfekte Schattierung"
            b_price={200}
            t_price={350}
          />
        </div>
        <div className="flex flex-col gap-8">
          <Card
            image="/makeup.png"
            head="Make-up"
            desc="Perfektes Make-up für jeden Anlass. Von einem natürlichen bis zu einem abendlichen Look."
            b_price={50}
            t_price={100}
          />
          <Card
            image="/eyebrow.png"
            head="Kombination Microblading/Powderbrows"
            desc="Das Beste aus beiden Welten! Präzise Gestaltung mit natürlicher Schattierung."
            b_price={300}
            t_price={500}
          />
          <Card
            image="/aditional.png"
            head="Zusätzliche Dienstleistungen"
            desc="Umfasst Brow-Lifting und Wimpernlifting für einen zusätzlichen Akzent auf den Augen."
            b_price={50}
            t_price={100}
          />
        </div>
      </div>
    </section>
  );


    
}

{/* <div className="w-full bg-[#EDF1F1] h-auto md:h-[60vh] flex flex-col md:flex-row">
  <div className="w-full h-full md:w-1/2 grid grid-cols-1 md:grid-cols-2">
    <div className="border grid grid-rows-2">
      <div className="border p-4">
        <div className="flex flex-col gap-3 items-center justify-center h-full lg:px-8">
          <img
            src="/microblading.png"
            className="w-32 h-32 p-2 bg-Pink rounded-full"
          />
          <p className="text-xl font-medium">Manicure</p>
          <p className="text-center text-gray-500">
            Our manicure treatments stimulate nail growth and soften dry, dull
            skin.
          </p>
        </div>
      </div>
      <div className="border p-4">
        <div className="flex flex-col gap-3 items-center justify-center h-full lg:px-8">
          <img
            src="/microblading.png"
            className="w-32 h-32 p-2 bg-Pink rounded-full"
          />
          <p className="text-xl font-medium">Manicure</p>
          <p className="text-center text-gray-500">
            Our manicure treatments stimulate nail growth and soften dry, dull
            skin.
          </p>
        </div>
      </div>
    </div>
    <div className="border grid grid-rows-2">
      <div className="border p-4">
        <div className="flex flex-col gap-3 items-center justify-center h-full lg:px-8">
          <img
            src="/microblading.png"
            className="w-32 h-32 p-2 bg-Pink rounded-full"
          />
          <p className="text-xl font-medium">Manicure</p>
          <p className="text-center text-gray-500">
            Our manicure treatments stimulate nail growth and soften dry, dull
            skin.
          </p>
        </div>
      </div>
      <div className="border p-4">
        <div className="flex flex-col gap-3 items-center justify-center h-full lg:px-8">
          <img
            src="/microblading.png"
            className="w-32 h-32 p-2 bg-Pink rounded-full"
          />
          <p className="text-xl font-medium">Manicure</p>
          <p className="text-center text-gray-500">
            Our manicure treatments stimulate nail growth and soften dry, dull
            skin.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full h-full md:w-1/2 bg-[url('/eyebrows.jfif')] bg-cover bg-center bg-no-repeat"></div>
</div> */};