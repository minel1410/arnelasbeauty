import Image from "next/image";

export default function MeetMe() {
    return (
      <div className="w-full px-4 lg:px-44 flex flex-col gap-24 items-center justify-center py-24">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <div className="w-1/2 h-0.5 bg-Pink my-2"></div>
          <h2 className="text-md text-gray-500">
            ​Seit über 15 Jahren beschäftige ich mich mit dem Thema Beauty und
            dem damit verbundenen Wohlbefinden. Aus diesem Grund hab ich meine
            Leidenschaft zum Beruf gemacht.
            <br /> Um mein Wissen im Kosmetikbereich zu erweitern, habe ich über
            25 verschiedene Fachseminare besucht. Unter anderem habe ich die
            Urkunde zur Staatlich geprüfte Fachkosmetikerin.
            <br /> Um meinen Qualitätsansprüchen gerecht zu werden, besuche ich
            regelmäßig weiterhin Seminare. <br />
            In meinem Beauty Studio in Rastatt können Sie in einer gemütlichen
            und persönlichen Atmosphäre entspannen. ​ Ihre Beautyspezialistin
            Fatma Türküncü
          </h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <img
            className="rounded-full"
            /* height="350" width="350" */ src="/aboutme.jpg"
          />
          <div>
            <p className="text-xl">Ann Nelson</p>
            <p className="text-center text-gray-500">Founder</p>
          </div>
          <div className="w-1/3 h-0.5 bg-Pink"></div>
          <p>contact@arnelasbeauty.com</p>
        </div>
      </div>
    );
}