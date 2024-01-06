import './App.css';
import './section1'
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState } from "react";



function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-cyan-200 dark:bg-cyan-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="http://localhost:3000/#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Zeba's Blog</span>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-cyan-500 rounded-lg md:hidden hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:focus:ring-cyan-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? "" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-cyan-100 rounded-lg bg-cyan-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-cyan-800 md:dark:bg-cyan-900 dark:border-cyan-700">
            <li>
              <AnchorLink href="#home" className="block py-2 pl-3 pr-4 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:p-0 dark:text-white md:dark:text-cyan-500" aria-current="page">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" className="block py-2 pl-3 pr-4 text-cyan-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skills" className="block py-2 pl-3 pr-4 text-cyan-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#certificate" className="block py-2 pl-3 pr-4 text-cyan-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Achievements</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#projects" className="block py-2 pl-3 pr-4 text-cyan-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</AnchorLink>
            </li>
            <li>
              <AnchorLink href="contact" className="block py-2 pl-3 pr-4 text-cyan-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover-bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
