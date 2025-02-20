import postgres from 'postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
  UserInfo,
  Craft 
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getComments(id: string) {
  try { 
    const commentsdata = await sql<UserInfo[]>`
      SELECT comment, id
      FROM comments
      WHERE user_collection_id = ${id}
    `;

    return commentsdata;  // Devolver directamente el arreglo de comentarios
  } catch (error) {   
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comments.');
  }
}


export async function getUserInfo(id: string) {
  try {
    const userdata = await sql<UserInfo[]>`
      SELECT
        id,
        name,
        email,
        last_name, 
        favorite_artists
      FROM users
      WHERE id = ${id}
    `;

    return userdata[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user info.');
  }
}


export async function getCraftRandom() {
  try {
    // Ejecutar la consulta SQL para obtener crafts aleatorios
    const craftData = await sql<Craft[]>`
      SELECT 
        user_collection.craft_name, 
        user_collection.description, 
        user_collection.category, 
        user_collection.price, 
        user_collection.img,
        user_collection.id,
        users.name, 
        users.last_name, 
        users.email
      FROM user_collection
      LEFT JOIN users ON users.id = user_collection.user_id
      ORDER BY RANDOM()
      LIMIT 25;
    `;

    // Mapear los resultados para devolverlos en el formato deseado
    const crafts = craftData.map((craft) => ({
      craft_name: craft.craft_name,
      description: craft.description,
      category: craft.category,
      price: craft.price,
      img: craft.img,
      id: craft.id,
      user: {
        name: craft.name,
        last_name: craft.last_name,
        email: craft.email,
      },
    }));

    return crafts;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch random crafts.');
  }
}

export async function fetchSellerInfo(sellerId: string) {
  try {
    const sellerData = await sql<{ name: string; email: string }[]>`
      SELECT
        name,
        email
      FROM sellers
      WHERE id = ${sellerId}
    `;

    if (sellerData.length === 0) {
      throw new Error("Seller not found");
    }

    return sellerData[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch seller information.");
  }
}

export async function getCraftspecific(id:string) {
  try {
    // Ejecutar la consulta SQL para obtener crafts aleatorios
    const craftData = await sql<Craft[]>`
      SELECT 
        user_collection.craft_name, 
        user_collection.description, 
        user_collection.category, 
        user_collection.price, 
        user_collection.img,
        users.name, 
        users.last_name, 
        users.email
      FROM user_collection
      LEFT JOIN users ON users.id = user_collection.user_id
      WHERE user_collection.id = ${id}
    `;
    

    return craftData[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch random crafts.');
  } 
}

export async function getMyCraft(id: string) {
  try {
    // Ejecutar la consulta SQL para obtener crafts aleatorios
    const craftData = await sql<Craft[]>`
      SELECT 
        user_collection.craft_name, 
        user_collection.description, 
        user_collection.category, 
        user_collection.price, 
        user_collection.img,
        user_collection.id
      FROM user_collection
      WHERE user_id = ${id}
      
    `;

    // Mapear los resultados para devolverlos en el formato deseado
    const crafts = craftData.map((craft) => ({
      craft_name: craft.craft_name,
      description: craft.description,
      category: craft.category,
      price: craft.price,
      img: craft.img,
      id: craft.id,
    }));

    return crafts;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch random crafts.');
  }
}