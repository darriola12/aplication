"use client";

import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-black via-black/90 to-black/40 text-white p-4 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold">Handcrafted Haven</div>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="/"
            className="px-4 py-2 hover:bg-gray-700 rounded transition-colors"
          >
            Home
          </Link>
          <Link
            href="/sellers"
            className="px-4 py-2 hover:bg-gray-700 rounded transition-colors"
          >
            Sellers
          </Link>
          <Link
            href="/products"
            className="px-4 py-2 hover:bg-gray-700 rounded transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about-us"
            className="px-4 py-2 hover:bg-gray-700 rounded transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/login"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition-colors"
          >
            <UserIcon className="w-6 h-6" />
            <span>Login</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-2">
          <ul className="flex flex-col space-y-1 bg-black/90 p-2 rounded">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sellers"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition-colors"
              >
                Sellers
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-gray-700 rounded transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition-colors"
              >
                <UserIcon className="w-6 h-6" />
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
