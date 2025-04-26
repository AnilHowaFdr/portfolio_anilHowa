import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-14 border-t-4 border-t-primary dark:bg-gray-950 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <ul className="flex items-center justify-center gap-3 text-white">
          <li>
            <Link
              to="/about"
              className="px-2 duration-300 text-base font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-2 lg:hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="px-2 duration-300 text-base font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-2 lg:hover:text-primary"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="px-2 duration-300 text-base font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-2 lg:hover:text-primary"
            >
              Portfolio
            </Link>
          </li>
        </ul>
        <ul className="py-10 flex items-center justify-center dark:text-white text-2xl lg:text-4xl gap-6 text-secondary">
          <li>
            <Link to="https://www.linkedin.com/in/anil-howa-profile1/">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/AnilHowaFdr">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/anil.hawa.7/">
              <FaFacebookSquare />
            </Link>
          </li>
        </ul>
        <p className="text-center font-semibold text-base dark:text-white text-secondary">
          Copyright© ANIL HOWA, 2024 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
