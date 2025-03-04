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

const CraftSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(), 
  category: z.string(),
  price: z.number(),
  img: z.string(),
  user_id: z.string(),
});

const CommentSchema = z.object({
  id: z.string(), 
  comment: z.string(),
});


 
const CreateUser =  UserSchema.omit({ id: true });
const CreateCraft = CraftSchema.omit({ id: true });

export async function createComment(formData: FormData) {
  const { id, comment } = CommentSchema.parse({ 
    id: formData.get('id'),
    comment: formData.get('comment'),
  });
  await sql`
    INSERT INTO comments (comment, user_collection_id)
    VALUES (${comment}, ${id})
  `;
  revalidatePath(`/products/view-details/${id}`);
  redirect(`/products/view-details/${id}`);  
}

export async function createCraft(formData: FormData) {
  const { name, description, category, price, img,user_id} = CreateCraft.parse({ 
    name: formData.get('name'),
    description: formData.get('description'),
    category: formData.get('category'),
    price: Number(formData.get('price')),
    img: formData.get('img'),
    user_id: formData.get('user_id'),
  });
   
  await sql`
    INSERT INTO user_collection (craft_name, description, category, price, img, user_id)
    VALUES (${name}, ${description}, ${category}, ${price}, ${img}, ${user_id})
  `;

  revalidatePath('/products');
  redirect('/products');
}


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

