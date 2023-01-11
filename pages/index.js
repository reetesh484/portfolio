/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Reetesh Tiwari - Portfolio</title>
        <meta name="description" content="Portfolio of Reetesh Tiwari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-4 flex justify-between">
            <h1 className=" text-xl md:text-2xl lg:text-3xl font-burtons dark:text-white">
              Reetesh T.
            </h1>
            <ul className=" flex items-center gap-5">
              <li>
                {" "}
                {darkMode ? (
                  <BsSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl text-yellow-300 "
                  />
                ) : (
                  <BsMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                )}{" "}
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center px-10">
            <h2 className=" text-5xl  text-teal-600 dark:text-teal-400 font-medium md:text-6xl">
              Reetesh Tiwari{" "}
            </h2>
            <h3 className=" text-2xl py-2 dark:text-gray-200">Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-lg mx-auto">
              Freelancer providing services for development needs.Join me down
              below and let's get cracking!{" "}
            </p>
          </div>
          <div className=" text-5xl  flex justify-center gap-16 py-3 text-gray-600 dark:text-white-600 dark:text-teal-300">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className=" relative  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  mx-auto overflow-hidden md:h-96 md:w-96 ">
            <Image
              src={deved}
              alt="profile image"
              fill
              className=" object-cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className=" text-3xl py-1 dark:text-teal-200">Projects</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelancer developer, I've
              done remote work for many companies.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={design}
                width={100}
                height={100}
                alt=""
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-500 dark:text-white-500 py-1">
                Photoshop
              </p>
              <p className=" text-gray-500 dark:text-white-500 py-1">
                Illustrator
              </p>
              <p className=" text-gray-500 dark:text-white-500 py-1">Figma</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
              <Image
                src={code}
                width={100}
                height={100}
                alt=""
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-500 dark:text-white-500 py-1">
                Photoshop
              </p>
              <p className=" text-gray-500 dark:text-white-500 py-1">
                Illustrator
              </p>
              <p className=" text-gray-500 dark:text-white-500 py-1">Figma</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt=""
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-500 dark:text-white-500 py-1">
                Photoshop
              </p>
              <p className=" text-gray-500 dark:text-white-500 py-1">
                Illustrator
              </p>
              <p className=" text-gray-500 dark:text-white-500 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-xl font-medium pt-8 pb-2 dark:text-teal-200">
              Projects I recently worked on
            </h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}