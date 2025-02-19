import { getMyCraft} from '@/app/lib/data';
import NavUser from "@/app/ui/navUser";
// Asegúrate de importar tu componente de navegación

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [crafts] = await Promise.all([
        getMyCraft(id),
      ]);
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <NavUser />
      {/* Sección de Productos */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            My Products
          </h1>

          {/* Grid para mostrar los crafts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {crafts.map((craft, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={craft.img}
        alt={craft.craft_name}
        className="rounded-lg object-cover w-full h-64 transform hover:scale-105 transition-transform duration-300"
      />
      <h2 className="text-2xl font-bold text-gray-900 mt-4">
        {craft.craft_name}
      </h2>
      <p className="text-gray-600 mt-2">{craft.description}</p>
      <p className="text-gray-800 mt-2 font-semibold">
        Category: {craft.category}
      </p>
      <p className="text-gray-800 mt-2 font-semibold">
        Price: ${craft.price}
      </p>
      <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
        View Details
      </button>
    </div>
  ))}
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
