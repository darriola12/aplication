'use client';
import { useSession } from 'next-auth/react';  



export default function NavUser(){
    const { data: session, status } = useSession();



    return (
        <div className="bg-white shadow-md py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold"> My Handcrafted App</h1>
                </div>
                <div className="space-x-4">
                    <a href="/products/add-craft" className="text-gray-600 hover:text-gray-900">Add Craft</a>
                    <a href="/products/my-craft" className="text-gray-600 hover:text-gray-900">My Craft </a>
                    <a href="/products/my-profile/" className="text-gray-600 hover:text-gray-900">My Profile</a>
                </div>
            </div>
        </div>
    );
}