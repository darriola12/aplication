"use client"; // Marcar este archivo como un componente de cliente

import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-black via-black/90 to-black/40 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-xl font-bold">Handcrafted Haven</div>

        {/* Menú Hamburguesa */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Enlaces de Navegación */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full sm:static sm:flex sm:space-x-4 sm:w-auto transition-all duration-300 ease-in-out`}
        >
          <li className="border-b border-gray-700 sm:border-none">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-700 sm:hover:bg-transparent sm:hover:underline">
              Home
            </Link>
          </li>
          <li className="border-b border-gray-700 sm:border-none">
            <Link href="/sellers" className="block px-4 py-2 hover:bg-gray-700 sm:hover:bg-transparent sm:hover:underline">
              Sellers
            </Link>
          </li>
          <li className="border-b border-gray-700 sm:border-none">
            <Link href="/products" className="block px-4 py-2 hover:bg-gray-700 sm:hover:bg-transparent sm:hover:underline">
              Products
            </Link>
          </li>
          <li className="border-b border-gray-700 sm:border-none">
            <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-700 sm:hover:bg-transparent sm:hover:underline">
              About Us
            </Link>
          </li>
        </ul>

        {/* Icono de Login */}
        <Link href="/login" className="flex items-center space-x-2">
          <UserIcon className="w-6 h-6 text-white cursor-pointer" />
          <span className="hidden sm:block">Login</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
