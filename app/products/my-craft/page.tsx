import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  return (
    <main
      className="flex min-h-screen flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2018/03/16/00/11/wicker-3229896_1280.jpg')",
      }}
    >
      {/* Main Cart Content */}
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
            Your Shopping Cart
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white">
            Review the items you’ve added. Make adjustments before proceeding to checkout.
          </p>
        </div>

        {/* Cart Items Section */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Cart Item 1 */}
          <div className="rounded-lg bg-white bg-opacity-90 p-8 shadow-lg transition-transform hover:scale-105">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://via.placeholder.com/300"
                alt="Handcrafted Vase"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Handcrafted Vase</h3>
            <p className="text-gray-600">Quantity: 1</p>
            <p className="mt-4 text-gray-600">$45.00</p>
          </div>

          {/* Cart Item 2 */}
          <div className="rounded-lg bg-white bg-opacity-90 p-8 shadow-lg transition-transform hover:scale-105">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://via.placeholder.com/300"
                alt="Artisanal Mug"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Artisanal Mug</h3>
            <p className="text-gray-600">Quantity: 2</p>
            <p className="mt-4 text-gray-600">$30.00</p>
          </div>

          {/* Cart Item 3 */}
          <div className="rounded-lg bg-white bg-opacity-90 p-8 shadow-lg transition-transform hover:scale-105">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://via.placeholder.com/300"
                alt="Wooden Sculpture"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Wooden Sculpture</h3>
            <p className="text-gray-600">Quantity: 1</p>
            <p className="mt-4 text-gray-600">$85.00</p>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/checkout"
            className="inline-block rounded-lg bg-green-500 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-green-400"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Recommended for You
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Product 1 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://via.placeholder.com/300"
                alt="Ceramic Plate"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Ceramic Plate</h3>
            <p className="text-gray-600">$25.00</p>
          </div>

          {/* Product 2 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://via.placeholder.com/300"
                alt="Handmade Bowl"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Handmade Bowl</h3>
            <p className="text-gray-600">$35.00</p>
          </div>

          {/* Product 3 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://via.placeholder.com/300"
                alt="Decorative Candle"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Decorative Candle</h3>
            <p className="text-gray-600">$15.00</p>
          </div>

          {/* Product 4 */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://via.placeholder.com/300"
                alt="Woven Basket"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Woven Basket</h3>
            <p className="text-gray-600">$40.00</p>
          </div>
        </div>
      </div>
    </main>
  );
}
