import Link from "next/link";

export default function Logo({isScrolled}){


    if(isScrolled) {
      return (
        <Link href="#" className="hover:cursor-pointer">
          <div className="flex flex-col pt-[20px] lg:pt-[40px]">
            <p className="text-4xl sm:text-5xl md:text-6xl font-allema text-white">
              Beauty Studio
            </p>
            <div className="flex w-full items-center justify-center gap-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-aerotis text-white">
                by Arnela
              </p>
            </div>
          </div>
        </Link>
      );
    } else {
      return (
        <></>
      );
    }
}