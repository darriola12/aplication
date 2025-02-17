import postgres from 'postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
  UserInfo
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


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


