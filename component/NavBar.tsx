"use client";
import React, { useState } from "react";

import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="text-lg font-bold">My App</h1>

      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col gap-1 md:hidden"
      >
        <span className="w-6 h-0.5 bg-white"></span>

        <span className="w-6 h-0.5 bg-white"></span>

        <span className="w-6 h-0.5 bg-white"></span>
      </button>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li>Home</li>
        <li>About</li>

        <li>Services</li>

        <li>Contact</li>
      </ul>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};
export default Navbar;
