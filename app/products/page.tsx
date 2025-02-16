import NavUser from "@/app/ui/navUser";


export default function Products(){

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
            <NavUser />
          {/* Products Section */}
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
                Our Products
              </h1>
    
              {/* First Row: Two Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/03/15/15/27/the-figurine-3228555_960_720.jpg"
                    alt="Product 1"
                    className="rounded-lg object-cover w-full h-64 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mt-4">Product 1</h2>
                  <p className="text-gray-600 mt-2">High-quality handcrafted item.</p>
                  <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://media.istockphoto.com/id/525211311/photo/chinese-mural-painting-art.jpg?s=2048x2048&w=is&k=20&c=t1oBufqyrbm1t89H8OxyQpksjF9YkbgPBO_SxgnfPEw="
                    alt="Product 2"
                    className="rounded-lg object-cover w-full h-64 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mt-4">Product 2</h2>
                  <p className="text-gray-600 mt-2">Elegant and unique craftsmanship.</p>
                  <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
    
              {/* Second Row: Two Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/10/23/03/24/one-piece-2880071_960_720.jpg"
                    alt="Product 3"
                    className="rounded-lg object-cover w-full h-64 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mt-4">Product 3</h2>
                  <p className="text-gray-600 mt-2">Handmade with care and detail.</p>
                  <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/11/17/14/40/street-art-8394476_960_720.jpg"
                    alt="Product 4"
                    className="rounded-lg object-cover w-full h-64 transform hover:scale-105 transition-transform duration-300"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mt-4">Product 4</h2>
                  <p className="text-gray-600 mt-2">A blend of art and tradition.</p>
                  <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
    
              {/* Third Row: Full-Width Image */}
              <div className="mb-12">
                <img
                  src="https://cdn.pixabay.com/photo/2023/03/30/19/10/street-art-7888561_960_720.jpg"
                  alt="Featured Product"
                  className="rounded-lg object-cover w-full h-96 transform hover:scale-105 transition-transform duration-300"
                />
              </div>
    
              {/* Fourth Row: Short Text for Three Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900">Quality Assurance</h3>
                  <p className="text-gray-600 mt-2">Each item is handcrafted with precision and care.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900">Sustainable Materials</h3>
                  <p className="text-gray-600 mt-2">Our products are made from eco-friendly materials.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900">Unique Designs</h3>
                  <p className="text-gray-600 mt-2">Each product is a one-of-a-kind piece.</p>
                </div>
              </div>
            </div>
          </div>
    
          {/* Footer */}
          <footer className="bg-white shadow-md py-6 mt-16">
            <div className="max-w-7xl mx-auto text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} Handcrafted Haven. All rights reserved.</p>
            </div>
          </footer>
        </div>
      );
}