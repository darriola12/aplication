import { createUser } from '@/app/lib/action';
export default function SingUp(){

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Registro</h2>
        
          <form action={createUser} className="space-y-4">
            <div>
              <label className="block font-medium">Nombre</label>
              <input
                type="text"
                name="name"
                
                required
                className="w-full p-2 border rounded"
              />
            </div>
    
            <div>
              <label className="block font-medium">Apellido</label>
              <input
                type="text"
                name="lastName"
                
                required
                className="w-full p-2 border rounded"
              />
            </div>
    
            <div>
              <label className="block font-medium">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                
                required
                className="w-full p-2 border rounded"
              />
            </div>
    
            <div>
              <label className="block font-medium">Contraseña</label>
              <input
                type="password"
                name="password"
                
                required
                className="w-full p-2 border rounded"
              />
            </div>
    
            {/* <div>
              <label className="block font-medium">Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                
                required
                className="w-full p-2 border rounded"
              />
            </div> */}
    
            <div>
              <label className="block font-medium">Artistas Favoritos</label>
              <input
                type="text"
                name="favorite_artists"
                
                placeholder="Ej: Coldplay, The Beatles, Queen"
                className="w-full p-2 border rounded"
              />
              <small className="text-gray-500">Separe los artistas con comas</small>
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Registrarse
            </button>
          </form>
        </div>


        )}
