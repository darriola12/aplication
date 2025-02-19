// lib/db.js
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchUsers() {
  try {
    const users = await sql`
      SELECT id, name, last_name, email
      FROM users
      ORDER BY name ASC
    `;
    return users;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}
