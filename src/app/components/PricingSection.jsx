"use client"

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="w-full py-16 px-4 lg:px-44">
      <div className="w-full flex flex-col items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-medium poppins-bold"
        >
          Preisgestaltung
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/4 h-1 bg-Pink origin-left"
        />
      </div>

      <div className="w-full flex flex-col md:flex-row md:gap-12 poppins-medium">
        <div className="w-full md:w-1/2">
          {[
            {
              service: "Wimpernverlängerung",
              price: "€60.00",
              description: "1:1 Technik (Mascara Look)",
            },
            {
              service: "Wimpernverlängerung",
              price: "€85.00",
              description: "2-3D (Natürlicher Look)",
            },
            {
              service: "Wimpernverlängerung",
              price: "€95.00",
              description: "4-6D (Mittelvolumen)",
            },
            {
              service: "Wimpernverlängerung",
              price: "€115.00",
              description: "Mega Volumen",
            },
            {
              service: "Wimpern Auffüllen",
              price: "€40.00 - €60.00",
              description: "Auffüllen innerhalb von 3 Wochen",
            },
            {
              service: "Wimpern Auffüllen",
              price: "€50.00 - €70.00",
              description: "Auffüllen innerhalb von 4 Wochen",
            },
            {
              service: "Make-up",
              price: "€49.00",
              description: "Tages-Make-up (inkl. Wimpern)",
            },
            {
              service: "Make-up",
              price: "€79.00",
              description: "Abend-Make-up (inkl. Wimpern)",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="w-full border-b-2 py-4 flex flex-col gap-2"
            >
              <div className="w-full flex justify-between items-end">
                <p className="text-xl">{item.service}</p>
                <p className="text-xl">{item.price}</p>
              </div>
              <p className="text-sm text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          {[
            {
              service: "Microblading",
              price: "€299.00",
              description: "Manuelles Zeichnen der Härchen",
            },
            {
              service: "Microblading",
              price: "€149.00 - €299.00",
              description: "Auffrischung (bis zu 12 Monate)",
            },
            {
              service: "Puder Augenbrauen (Powder Brows)",
              price: "€349.00",
              description: "Manuelles Schattieren/Ombre",
            },
            {
              service: "Microblading",
              price: "€159.00",
              description: "Auffrischung (bis zu 12 Monate)",
            },
            {
              service: "Kombination Microblading/Powderbrows",
              price: "€399.00",
              description:
                "Perfekte Kombination aus Präzision und weichen Farbverläufen",
            },
            {
              service: "Kombination Microblading/Powderbrows",
              price: "€199.00",
              description: "Auffrischung (bis zu 12 Monate)",
            },
            {
              service: "Zusätzliche Dienstleistungen",
              price: "€49.00",
              description: "Brow Lifting",
            },
            {
              service: "Zusätzliche Dienstleistungen",
              price: "€49.00",
              description: "Wimpernlifting",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index + 8) * 0.1 }}
              className="w-full border-b-2 py-4 flex flex-col gap-2"
            >
              <div className="w-full flex justify-between items-end">
                <p className="text-xl">{item.service}</p>
                <p className="text-xl">{item.price}</p>
              </div>
              <p className="text-sm text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
