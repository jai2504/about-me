import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Typing from "./Typing";
export const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <img
        src="https://jai2504.github.io/images/favicon.png"
        alt="My Image"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Jai <span className="text-green">Narayan</span>
      </h3>
      <p className="px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-100">
        <Typing />
      </p>
      <a
        href="/Jai Narayan CV.pdf"
        className="flex items-center justify-center px-1 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-100"
        download="Jai Narauan Resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* //Social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="https://github.com/jai2504">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/jai-narayan-7051b41a8/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-100"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Panipat,Haryana,India</span>
        </div>
        <p className="my-2">rahejajai123@gmail.com</p>
        <p className="my-2">+91-9588572192</p>
      </div>
      {/*Email Button*/}
      <button
        className="w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:rahejajai123@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-1 py-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};
