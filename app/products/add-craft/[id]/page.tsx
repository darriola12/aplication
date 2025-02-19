

import { Button } from '@/app/ui/button';
import { createCraft } from '@/app/lib/action';
import NavUser from "@/app/ui/navUser";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <div>
    <NavUser />
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Crear un nuevo Craft
        </h2>

        <form
          action={createCraft}
          className="space-y-6"
        >
          <div className="form-group hidden">
            <label htmlFor="hiddenField" className="block text-gray-700 font-medium">Campo Oculto:</label>
            <input
              type="text"
              id="hiddenField"
              name="user_id"
              readOnly={true}
              value={id}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="craft_name" className="block text-gray-700 font-medium">Nombre del Craft:</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="block text-gray-700 font-medium">Descripción:</label>
            <textarea
              id="description"
              name="description"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category" className="block text-gray-700 font-medium">Categoría:</label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price" className="block text-gray-700 font-medium">Precio:</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="img" className="block text-gray-700 font-medium">URL de la Imagen:</label>
            <input
              type="url"
              id="img"
              name="img"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              Crear Craft
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
