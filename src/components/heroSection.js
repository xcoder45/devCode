import Image from "next/image";
import Client1 from "../images/clients/google.svg";
import Client2 from "../images/clients/google-cloud.svg";
import Client3 from "../images/clients/microsoft.svg";
import Client4 from "../images/clients/netflix.svg";
import Client5 from "../images/clients/ge.svg";
import Client6 from "../images/clients/airbnb.svg";

export default function HeroSection() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-violet-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-violet-400 to-violet-300 dark:to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <slot />
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Your Daily Dose of Data Structures.
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Your daily fix of coding challenges and insights into Data
              Structures and Algorithms. Level up your coding skills with our
              curated challenges and expert explanations. Join us on a journey
              of growth and mastery in the world of algorithms
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative font-sans text-lg font-bold	 pl-6 pr-6 pb-3 pt-3 rounded-lg bg-violet-50 text-violet-600">
                  Get Started
                </span>
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Personalized Learning Paths
                </h6>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Accessible Anytime, Anywhere
                </h6>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Engaging Community
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 ">
              <Image
                src={Client1}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 ">
              <Image
                src={Client2}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 ">
              <Image
                src={Client3}
                className="h-9 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 ">
              <Image
                src={Client4}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 ">
              <Image
                src={Client5}
                className="h-8 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 ">
              <Image
                src={Client6}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
