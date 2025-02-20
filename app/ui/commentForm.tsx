'use client';
import { useState } from 'react';
import { createComment } from '../lib/action';

interface CommentFormProps {
  id: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ id }) => {
  const [comment, setComment] = useState('');

  return (
    <form action={createComment} className="w-full md:w-1/2 mt-6">
      <input type="hidden" name="id" id="text" value={id} />

      <div className="mb-4">
        <label htmlFor="comment" className="block text-lg font-semibold text-gray-700 mb-2">
          Leave a comment or a punctuation
        </label>
        <input
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)} // Actualiza el estado del comentario
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your comment here"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </form>
  );
};

export default CommentForm;
