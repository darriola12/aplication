import Image from 'next/image';
import {getCraftspecific, getComments} from 'app/lib/data';
import CommentForm from '@/app/ui/commentForm';
import { get } from 'http';



export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [craftData] = await Promise.all([
           getCraftspecific(id), getComments(id)
          ]);
    const [commentsdata] = await Promise.all([
      getComments(id)
     ]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Imagen grande */}
                {/* <div className="w-full md:w-1/2">
                    <Image 
                        src= {craftData.img}
                        alt={craftData.craft_name} 
                        width={500} 
                        height={500} 
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div> */}
                {/* Detalles del producto */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800">{craftData.craft_name}</h2>
                    <p className="text-gray-600 mt-2">{craftData.description}</p>
                    <p className="text-gray-800 font-semibold mt-2">Category: {craftData.category}</p>
                    <p className="text-green-600 text-2xl font-bold mt-4">${craftData.price}</p>
                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-lg font-semibold text-gray-700">Seller Information</h3>
                        <p className="text-gray-600">{craftData.name} {craftData.last_name}</p>
                        <p className="text-gray-600">{craftData.email}</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">Comments</h3>
                    <ul className="space-y-2 mt-4">
                        {commentsdata.map((comment, index) => (
                            <li key={index} className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-800">{comment.comment}</p>
                            </li>
                        ))}
                        
                    </ul>
                </div>

                
            </div>
        </div>
    );
}