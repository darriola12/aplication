"use client"; // Mark this file as a client-side component

import React from "react";
import Link from "next/link";

const SellersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      
      {/* Sellers Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Our Sellers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Seller Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1346661870/photo/baskets-traditional-handicraft-products.jpg?s=612x612&w=0&k=20&c=CNV8ONrT8EoZFMPpdkHNOPqk2vTbLitB9n9FfmsLA88="
                alt="Seller 1"
                className="rounded-lg object-cover w-full h-64"
              />
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                Artisan Woodworks
              </h2>
              <p className="text-gray-600 mt-2">
                Beautiful handcrafted wooden pieces with unique designs.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>

            {/* Seller Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/647483712/photo/semi-precious-stones-bracelet.webp?s=2048x2048&w=is&k=20&c=dFLyvbyXawCkqbvUKIzGmtTG-5V2BhKwdAbM_lYMHs0="
                alt="Seller 2"
                className="rounded-lg object-cover w-full h-64"
              />
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                Handmade Jewelry
              </h2>
              <p className="text-gray-600 mt-2">
                Stunning custom jewelry crafted with love and passion.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>

            {/* Seller Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2015/07/31/15/02/merry-christmas-869221_1280.jpg"
                alt="Seller 3"
                className="rounded-lg object-cover w-full h-64"
              />
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                Cozy Knits & Textiles
              </h2>
              <p className="text-gray-600 mt-2">
                Warm, handwoven scarves and blankets perfect for any season.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>

            {/* Seller Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/27/19/57/hands-1284033_1280.jpg"
                alt="Seller 4"
                className="rounded-lg object-cover w-full h-64"
              />
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                Elegant Pottery
              </h2>
              <p className="text-gray-600 mt-2">
                Handcrafted pottery with exquisite craftsmanship.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>

            {/* Seller Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/14/10/03/fashion-1979136_1280.jpg"
                alt="Seller 5"
                className="rounded-lg object-cover w-full h-64"
              />
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                Tailored Fashion
              </h2>
              <p className="text-gray-600 mt-2">
                Custom-designed clothing crafted with precision.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>

            {/* Seller Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2014/07/08/09/57/candle-386607_960_720.jpg"
                alt="Seller 6"
                className="rounded-lg object-cover w-full h-64"
              />
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                Scented Candles
              </h2>
              <p className="text-gray-600 mt-2">
                Hand-poured candles with delightful fragrances.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
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

export default SellersPage;
