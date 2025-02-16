"use client"; // Mark this file as a client-side component

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      {/* <nav className="bg-white shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Handcrafted Haven</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            </li>
            <li>
              <Link href="/sellers" className="text-gray-700 hover:text-gray-900">Sellers</Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
            </li>
          </ul>
        </div>
      </nav> */}

      {/* About Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Story Behind Handcrafted Haven</h2>
              <p className="text-gray-600 leading-relaxed">
              In a small town filled with passionate artisans and craft lovers, there was a gap—talented creators struggled to share their handmade treasures with the world. Many spent hours perfecting their work, only to find it difficult to reach the right audience.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
              That’s when Handcrafted Haven was born—a place where artistry meets opportunity. 
              Built with a deep appreciation for craftsmanship, our platform connects skilled artisans
               with people who value unique, handcrafted goods. Whether it’s handwoven textiles, custom pottery, or 
               intricately designed jewelry, we bring these creations to the forefront, 
              ensuring they find a home where they are truly cherished.
              </p>
            </div>

            {/* Image Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <img
                src="https://cdn.pixabay.com/photo/2020/02/10/18/07/crafts-4837223_960_720.jpg"
                alt="About Us"
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <img
                src="https://cdn.pixabay.com/photo/2018/03/15/15/27/the-figurine-3228555_1280.jpg"
                alt="About Us"
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
              Handcrafted Haven began with a simple idea—giving artisans a place to share their passion with the world. 
              Inspired by the beauty of handmade craftsmanship, we created a space where creators and buyers connect through unique, one-of-a-kind pieces.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
              More than just a marketplace, it’s a home for creativity, authenticity, and timeless craftsmanship. 
              Welcome to Handcrafted Haven—where every creation tells a story.
              </p>
            </div>
          </div>
        </div>
      </div>











      

      {/* Footer */}
      <footer className="bg-white shadow-md py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Handcrafted Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
