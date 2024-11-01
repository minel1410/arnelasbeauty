"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetMe() {
    return (
      <div className="w-full px-4 lg:px-44 flex flex-col md:flex-row gap-24 justify-between py-24">
        <div className="w-full flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl poppins-bold"
          >
            Über mich
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "50%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-1/2 h-0.5 bg-Pink my-2"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-allema text-5xl md:text-6xl py-4 pt-12"
          >
            Hi, ich bin Arnela
          </motion.p>

          {[
            "Staatlich geprüfte Fachkosmetikerin",
            "Schon seit über 10 Jahren beschäftige ich mich intensiv mit den Themen Schönheit, Hautpflege und Wohlbefinden. Die Leidenschaft für diese Bereiche hat mich inspiriert, meine berufliche Laufbahn der Kosmetik zu widmen, um meinen Kundinnen und Kunden die bestmögliche Pflege und Beratung bieten zu können.",
            "Um mein Wissen und meine Fähigkeiten ständig zu erweitern, habe ich zahlreiche Fachseminare besucht, darunter über 20 spezialisierte Schulungen und die Ausbildung zur Staatlich geprüften Fachkosmetikerin. Diese kontinuierliche Weiterbildung ermöglicht es mir, auf dem neuesten Stand der Entwicklungen in der Kosmetikbranche zu bleiben und Ihnen die besten Behandlungen und Produkte anzubieten.",
            "In meinem Beauty Studio „Beauty Studio by Arnela“ in Sarajevo erwarten Sie nicht nur professionelle Behandlungen, sondern auch eine Atmosphäre, in der Sie sich rundum wohlfühlen können. Mein Ziel ist es, Ihnen Momente der Entspannung und des Wohlbefindens zu schenken, die den stressigen Alltag vergessen lassen und Ihnen frische Energie verleihen..",
            "Ihre Zufriedenheit und Ihr Vertrauen liegen mir besonders am Herzen. Daher investiere ich fortlaufend in meine Ausbildung und in hochwertige Produkte, um Ihnen stets eine erstklassige Behandlung zu bieten.",
            "hre Beautyspezialistin",
            "Arnela",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="text-lg text-gray-500 text-justify poppins-medium mt-2"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-5">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="rounded-full"
            src="/aboutme.jpg"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <p className="text-xl poppins-semibold">Arnela Prses</p>
            <p className="text-center text-gray-500 poppins-medium">Gründer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "33%" }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="w-1/3 h-0.5 bg-Pink poppins-medium"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            contact@arnelasbeauty.com
          </motion.p>
        </div>
      </div>
    );
}