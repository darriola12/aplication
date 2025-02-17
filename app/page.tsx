import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main
      className="flex min-h-screen flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2018/03/16/00/11/wicker-3229896_1280.jpg')",
      }}
    >
      {/* Header Section */}
      {/* <div className="flex items-center justify-between p-6">
        <AcmeLogo />
        <Link
          href="/signup"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div> */}

      {/* Welcome Message Section */}
      <div className="flex-1 p-6">
        <div
          className="flex flex-col items-center justify-center text-center p-8 mb-10 rounded-lg"
          style={{
            backgroundImage: "url('')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Welcome to Handcrafted Haven
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white">
            Where every creation tells a story of passion, creativity, and dedication.
            Explore our curated selection of unique, handcrafted items designed to bring
            warmth and beauty into your life.
          </p>
        </div>

        {/* Card Section */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-lg bg-white bg-opacity-90 p-8 shadow-lg transition-transform hover:scale-105">
            <p className="text-lg italic text-gray-700">
              "Waar creativiteit tot leven komt"
            </p>
            <p className="mt-4 text-gray-600">
              Discover the beauty of handcrafted art, made with love and creativity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg bg-white bg-opacity-90 p-8 shadow-lg transition-transform hover:scale-105">
            <p className="text-lg italic text-gray-700">
              "Hecho para Ti, No lo dudes"
            </p>
            <p className="mt-4 text-gray-600">
              Each piece is crafted uniquely for you, with passion and dedication.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg bg-white bg-opacity-90 p-8 shadow-lg transition-transform hover:scale-105">
            <p className="text-lg italic text-gray-700">
              "Where Art Meets Heart"
            </p>
            <p className="mt-4 text-gray-600">
              Experience the fusion of artistry and emotion in every creation.
            </p>
          </div>
        </div>

        {/* Explore Button Section */}
        <div className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-block rounded-lg bg-blue-500 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-400"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* Meet Our Artists Section (NOT part of the background) */}
      <div className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Meet Our Artists
        </h2>

        {/* Artists Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Artist 1 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://media.istockphoto.com/id/536010979/photo/artist.jpg?s=612x612&w=0&k=20&c=aGyajXa8PwTkMTsS393vKp6u2Qk7iC0jCjxOW5djz8M=" // Replace with actual image path
                alt="Sarah Johnson"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
            <p className="text-gray-600">Born: 1985</p>
            <p className="text-gray-700">Specialty: Handcrafted Pottery</p>
          </div>

          {/* Artist 2 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="/path-to-michael-lee.jpg" // Replace with actual image path
                alt="Michael Lee"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Michael Lee</h3>
            <p className="text-gray-600">Born: 1990</p>
            <p className="text-gray-700">Specialty: Woodworking & Carving</p>
          </div>

          {/* Artist 3 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="/path-to-elena-martinez.jpg" // Replace with actual image path
                alt="Elena Martínez"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Elena Martínez</h3>
            <p className="text-gray-600">Born: 1982</p>
            <p className="text-gray-700">Specialty: Textile Art & Embroidery</p>
          </div>

          {/* Artist 4 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="/path-to-david-wong.jpg" // Replace with actual image path
                alt="David Wong"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">David Wong</h3>
            <p className="text-gray-600">Born: 1988</p>
            <p className="text-gray-700">Specialty: Metal Sculpting</p>
          </div>
        </div>
      </div>
    </main>
  );
}