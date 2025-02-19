
import { getUserInfo} from '@/app/lib/data';
import NavUser from '@/app/ui/navUser';

 
export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [userdata] = await Promise.all([
        getUserInfo(id),
      ]);
  
  return (
    <div>
        <NavUser />
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg space-y-6">
    <h1 className="text-2xl font-semibold text-center text-gray-700">My Profile</h1>

    <div className="space-y-6">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-medium text-gray-600">Name</label>
        <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
          {userdata.name}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="last_name" className="text-lg font-medium text-gray-600">Last Name</label>
        <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
          {userdata.last_name}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-medium text-gray-600">Email</label>
        <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
          {userdata.email}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="favorite_artist" className="text-lg font-medium text-gray-600">Favorite Artist</label>
        <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
          {userdata.favorite_artists}
        </div>
      </div>
    </div>
  </div>
</main>

    </div>

  );
}