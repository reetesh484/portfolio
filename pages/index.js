/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import web1 from "../public/VS-Code.png";
import web2 from "../public/beats.png";
import web3 from "../public/analytics.png";
import web4 from "../public/creditcard.png";
import web5 from "../public/hostingsite.png";
import web6 from "../public/realestate.png";
import web7 from "../public/gaming.png";

import html from "../public/html5.svg";
import js from "../public/java-script.svg";
import angular from "../public/angular-logo.png";
import react from "../public/react.png";
import bootstrap from "../public/bootstrap.png";
import tailwind from "../public/tailwind-css.svg";
import css from "../public/css.png";
import git from "../public/git.png";

// import resume from '../public/resume.pdf'

import { useEffect, useState } from "react";

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
        <section className="min-h-screen ">
          <nav className="py-10 mb-4 flex justify-between">
            <h1 className=" text-xl font-burtons dark:text-white">
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
                  href="https://drive.google.com/file/d/1pMi74zT3j9CuAZBbtsYpU7ZyHvpjfpB2/view?usp=sharing"
                  download="ReeteshTiwariResume"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-6">
            <div className=" text-center px-10">
              <h2 className=" text-5xl  text-teal-600 dark:text-teal-400 font-medium md:text-6xl">
                Reetesh Tiwari{" "}
              </h2>
              <h3 className=" text-2xl py-2 dark:text-gray-200">
                Web Developer
              </h3>
              {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-lg mx-auto">
              Freelancer providing services for development needs.Join me down
              below and let's get cracking!{" "}
            </p> */}
            </div>
            <div className=" text-5xl  flex justify-center items-center  gap-16 py-3 text-gray-600 dark:text-white-600 dark:text-teal-500 social">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://in.linkedin.com/in/reeteshtiwari"
              >
                {" "}
                <AiFillLinkedin className="hover:text-teal-500 dark:hover:text-teal-400 " />{" "}
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/reetesh818"
              >
                <AiFillGithub className="hover:text-teal-500 dark:hover:text-teal-400 " />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://reeteshtiwari.hashnode.dev/"
              >
                <SiHashnode className="hover:text-teal-500 dark:hover:text-teal-400 " />
              </a>
            </div>
            <div className=" relative  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  mx-auto overflow-hidden md:h-96 md:w-96 ">
              <Image
                src={deved}
                alt="profile image"
                fill
                className=" object-cover"
              />
            </div>
          </div>
        </section>

        <section className=" mt-10 min-h-[100vh] flex flex-col justify-center items-center">
          <div>
            <h3 className=" text-5xl py-1 text-center dark:text-teal-200">
              Skills
            </h3>
          </div>
          <div className="flex flex-row justify-center gap-10 py-10 md:flex-row flex-wrap">
            <div className="group relative  text-center flex flex-col shadow-lg p-2 rounded-xl w-[150px] my-2 ">
              <Image
                src={html}
                alt=""
                className="m-auto min-w-full  h-full object-cover"
                title="HTML5"
              />
              <span className="md:hidden dark:text-white">HTML5</span>
              <span className="absolute sm:hidden md:block  transition-all duration-500 rounded-b-xl bg-gradient-to-b from-slate-400 to-teal-500 text-white w-full opacity-0 group-hover:opacity-100  left-0 bottom-0 p-2">
                HTML5
              </span>
            </div>
            <div className="group relative  text-center flex flex-col shadow-lg p-2 rounded-xl w-[150px] my-2 ">
              <Image
                src={css}
                alt=""
                className="m-auto min-w-full  h-full object-cover"
              />
              <span className="md:hidden dark:text-white">CSS3</span>
              <span className="absolute sm:hidden md:block  transition-all duration-500 rounded-b-xl bg-gradient-to-b from-slate-400 to-teal-500 text-white w-full opacity-0 group-hover:opacity-100  left-0 bottom-0 p-2">
                CSS3
              </span>
            </div>
            <div className="group relative  text-center flex flex-col shadow-lg p-2 rounded-xl w-[150px] my-2 ">
              <Image
                src={bootstrap}
                alt=""
                className="m-auto min-w-full  h-full object-cover"
              />
              <span className="md:hidden dark:text-white">Bootstrap</span>
              <span className="absolute sm:hidden md:block  transition-all duration-500 rounded-b-xl bg-gradient-to-b from-slate-400 to-teal-500 text-white w-full opacity-0 group-hover:opacity-100  left-0 bottom-0 p-2">
                Bootstrap
              </span>
            </div>
            <div className="group relative  text-center flex flex-col shadow-lg p-2 rounded-xl w-[150px] my-2 ">
              <Image
                src={tailwind}
                alt=""
                className="m-auto  min-w-full h-full object-cover"
              />
              <span className="md:hidden dark:text-white">TailwindCSS</span>
              <span className="absolute sm:hidden md:block  transition-all duration-500 rounded-b-xl bg-gradient-to-b from-slate-400 to-teal-500 text-white w-full opacity-0 group-hover:opacity-100  left-0 bottom-0 p-2">
                TailwindCSS
              </span>
            </div>
            <div className="group relative  text-center flex flex-col shadow-lg p-2 rounded-xl w-[150px] my-2 ">
              <Image
                src={js}
                alt=""
                className="m-auto min-w-full  h-full object-cover"
              />
              <span className="md:hidden dark:text-white">Javascript</span>
              <span className="absolute sm:hidden md:block  transition-all duration-500 rounded-b-xl bg-gradient-to-b from-slate-400 to-teal-500 text-white w-full opacity-0 group-hover:opacity-100  left-0 bottom-0 p-2">
                Javascript
              </span>
            </div>
            <div className="group relative  text-center flex flex-col shadow-lg p-2 rounded-xl w-[150px] my-2 ">
              <Image
                src={react}
                alt=""
                className="m-auto min-w-full  h-full object-cover"
              />
              <span className="md:hidden dark:text-white">React</span>
              <span className="absolute sm:hidden md:block  transition-all duration-500 rounded-b-xl bg-gradient-to-b from-slate-400 to-teal-500 text-white w-full opacity-0 group-hover:opacity-100  left-0 bottom-0 p-2">
                React
              </span>
            </div>
            <div className="group relative  text-center flex flex-col shadow-lg p-2 rounded-xl w-[150px] my-2 ">
              <Image
                src={angular}
                alt=""
                className="m-auto min-w-full  h-full object-cover"
              />
              <span className="md:hidden dark:text-white">Angular</span>
              <span className="absolute sm:hidden md:block  transition-all duration-500 rounded-b-xl bg-gradient-to-b from-slate-400 to-teal-500 text-white w-full opacity-0 group-hover:opacity-100  left-0 bottom-0 p-2">
                Angular
              </span>
            </div>
            <div className="group relative text-center flex flex-col shadow-lg p-2 w-[150px] rounded-xl my-2 ">
              <Image
                src={git}
                alt=""
                className="m-auto min-w-full h-full object-cover"
              />
              <span className="md:hidden dark:text-white">Git</span>
              <span className="absolute sm:hidden md:block  transition-all duration-500 rounded-b-xl bg-gradient-to-b from-slate-400 to-teal-500 text-white w-full opacity-0 group-hover:opacity-100  left-0 bottom-0 p-2">
                Git
              </span>
            </div>
          </div>
        </section>
        <section className="">
          <div>
            <h3 className="text-4xl text-center font-medium pt-8 pb-2 dark:text-teal-200">
              Projects I recently worked on
            </h3>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 project-animate flex-1  ">
              <a
                href="https://beats-site.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={web2}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </a>
            </div>
            <div className="basis-1/3 project-animate flex-1  ">
              <a
                href="https://data-analytics-landing-site.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={web3}
                  alt=""
                  className="rounded-lg object-cover  w-full h-full"
                />
              </a>
            </div>
            <div className="basis-1/3 project-animate flex-1">
              <a
                href="https://creditcard-landing-site.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={web4}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </a>
            </div>
            <div className="basis-1/3 project-animate flex-1  ">
              <a
                href="https://clone-vs-code.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={web1}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </a>
            </div>
            <div className="basis-1/3 project-animate flex-1">
              <a
                href="https://hostingsite-landing-page.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={web5}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </a>
            </div>
            <div className="basis-1/3 project-animate flex-1">
              <a
                href="https://estate-landing-page.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={web6}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </a>
            </div>
            <div className="basis-1/3 project-animate flex-1">
              <a
                href="https://gaming-site-landing-page.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  src={web7}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
        </section>
        <section className=" pt-5 pb-5 h-[100vh] flex flex-col justify-center items-center">
          <h3 className="text-3xl text-center dark:text-white">Contact Me</h3>
          <div className="container mx-auto ">
            <div className="flex justify-center px-6 mt-12 pb-4 ">
              <div className="w-full xl:w-3/4 lg:w-11/12 flex  bg-gradient-to-t from-slate-50 to-teal-500 dark:from-slate-600 dark:to-teal-600 ">
                <div
                  className="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover rounded-l-lg "
                  style={{ backgroundImage: `url(${deved.src})` }}
                ></div>
                <div className="w-full lg:w-1/2 bg-white py-4 px-2  shadow-teal-400 shadow-lg md:shadow-none lg:rounded-l-none dark:bg-slate-800">
                  <div className="px-4 pt-6 pb-6 mb-4 bg-white dark:bg-slate-800">
                    <div className="mb-6 text-center">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://in.linkedin.com/in/reeteshtiwari"
                      >
                        {" "}
                        <button
                          className="w-full px-4 flex justify-center items-center gap-2 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          <AiFillLinkedin />
                          Linkedin
                        </button>{" "}
                      </a>
                    </div>
                    <div className="mb-6 text-center">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:reeteshtiwari484@gmail.com"
                      >
                        {" "}
                        <button
                          className="w-full px-4 flex justify-center items-center py-2 gap-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          <AiFillMail />
                          Email
                        </button>
                      </a>
                    </div>
                    <div className="mb-6 text-center">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="tel:+917808456885"
                      >
                        {" "}
                        <button
                          className="w-full px-4 flex justify-center items-center py-2 gap-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          <AiFillPhone />
                          +917808456885
                        </button>{" "}
                      </a>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-4xl md:text-5xl  flex justify-center items-center gap-10 md:gap-16 py-3 text-gray-600 dark:text-white-600 dark:text-teal-500 social">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/being__a_l_i_v_e/"
                      >
                        {" "}
                        <AiFillInstagram className="hover:text-teal-500 dark:hover:text-teal-400 " />
                      </a>

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://in.linkedin.com/in/reeteshtiwari"
                      >
                        {" "}
                        <AiFillLinkedin className="hover:text-teal-500 dark:hover:text-teal-400 " />{" "}
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/reetesh484"
                      >
                        <AiFillGithub className="hover:text-teal-500 dark:hover:text-teal-400 " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
