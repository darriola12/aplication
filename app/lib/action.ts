'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
 


 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 

const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    favorteArtist: z.string(),

});
 
const CreateUser =  UserSchema.omit({ id: true });



export async function createUser(formData: FormData) {
  const { name, lastName, email, password, favorteArtist } = CreateUser.parse({
    name: formData.get('name'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
    favorteArtist: formData.get('favorite_artists'),
  });

  const hashedPassword = await bcrypt.hash(password, 10);  // 10 es el número de salt rounds

  await sql`
    INSERT INTO users (name, last_name, email, password, favorite_artists)
    VALUES (${name}, ${lastName}, ${email}, ${hashedPassword}, ${favorteArtist})
  `;

  revalidatePath('/signup');
  redirect('/login');
}


 

 

 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

