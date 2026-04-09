"use client";

import React from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold hover:text-gray-400"
            >
              ✕
            </button>
          </div>
          <h2 className="text-2xl font-semibold mt-2 w-20 h-20 rounded-full">
            Menu
          </h2>
          <ul className="mt-8 space-y-5 text-lg">
            <li>
              <a
                href="#"
                className="block hover:bg-gray-800 px-3 py-2 rounded-lg transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block hover:bg-gray-800 px-3 py-2 rounded-lg transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block hover:bg-gray-800 px-3 py-2 rounded-lg transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block hover:bg-gray-800 px-3 py-2 rounded-lg transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
