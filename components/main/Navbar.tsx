"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flex flex-row items-center justify-between px-5 md:px-10">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/LetterM.png"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] text-gray-300 hidden sm:block">
            Mahidhar Portfolio
          </span>
        </a>

        <div className="flex-grow flex lg:justify-center sm:justify-center md:justify-end ml-4 sm:ml-0">
          <div className="flex items-center justify-between w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-[10px] py-[5px] sm:px-[20px] sm:py-[10px] rounded-full text-gray-200 text-sm sm:text-base">
            <a href="#about-me" className="cursor-pointer px-2 sm:px-3">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer px-2 sm:px-3">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer px-2 sm:px-3">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer px-2 sm:px-3">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={45}
                height={45}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
