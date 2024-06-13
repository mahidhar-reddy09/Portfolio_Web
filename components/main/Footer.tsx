"use client";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  const handleEmailClick = () => {
    const email = "MAHIDHAR001@e.ntu.edu.sg";
    navigator.clipboard.writeText(email);
    alert("Email address copied!");
  };

  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-6 ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-center justify-around flex-wrap z-50">
          <MdMarkEmailRead
            onClick={handleEmailClick}
            className="cursor-pointer text-3xl z-50"
          />
          <a
            href="https://github.com/mahidhar-reddy09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl cursor-pointer z-50"
          >
            <RxGithubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/mahidhar-reddy-69103a298/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl cursor-pointer z-50"
          >
            <RxLinkedinLogo />
          </a>
        </div>
        <div className="mb-5 text-lg text-center mt-10">
          Thank you for Visiting!
        </div>
      </div>
    </div>
  );
};

export default Footer;