import { createUser } from '@/app/lib/action';

export default function SingUp() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/10/02/07/40/ink-6674441_1280.jpg)' }} // Replace with your background image URL
    >
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      
        <form action={createUser} className="space-y-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded"
            />
          </div>
  
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              className="w-full p-2 border rounded"
            />
          </div>
  
          <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
  
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full p-2 border rounded"
            />
          </div>
  
          {/* Uncomment if needed */}
          {/* <div>
            <label className="block font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="w-full p-2 border rounded"
            />
          </div> */}
  
          <div>
            <label className="block font-medium">Favorite Artists</label>
            <input
              type="text"
              name="favorite_artists"
              placeholder="E.g.: Coldplay, The Beatles, Queen"
              className="w-full p-2 border rounded"
            />
            <small className="text-gray-500">Separate artists with commas</small>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
