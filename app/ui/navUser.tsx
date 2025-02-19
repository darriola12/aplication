import { signOut } from '@/auth';



export default function NavUser() {
    return (
      <div className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-xl font-bold">My Handcrafted App</h1>
          <div className="flex items-center space-x-6">
            <a href="/products/add-craft" className="text-gray-600 hover:text-gray-900">Add Craft</a>
            <a href="/products/my-craft" className="text-gray-600 hover:text-gray-900">My Craft</a>
            <a href="/products/my-profile/" className="text-gray-600 hover:text-gray-900">My Profile</a>
            <form
              action={async () => {
                'use server';
                await signOut({ redirectTo: '/' });
              }}
            >
              <button className="text-gray-600 hover:text-gray-900" type="submit">Sign Out</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
