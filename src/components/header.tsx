import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-retro-gray py-4 w-full fixed z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl ">H.YASSIR</div>
        <ul className="flex space-x-4">
          <li className="hover:text-retro-red">
            <Link href="#about-me">About me</Link>
          </li>
          <li className="hover:text-retro-red">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-retro-red">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;