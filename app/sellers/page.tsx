// app/sellers/page.js
import { fetchUsers } from 'app/lib/sellerInfo';

export default async function SellersPage() {
  // Fetch the user data from the database
  const users = await fetchUsers();

  return (
    <main className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Sellers
      </h2>
      
      {/* Display user cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {users.map((user) => (
          <div key={user.id} className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              {user.name} {user.last_name}
            </h3>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
