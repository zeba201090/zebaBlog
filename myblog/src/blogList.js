
import React from 'react';
import Link from 'anchor-link';

const blogs = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    content: "Welcome to the world of React Hooks! If you're new to React or looking to level up your skills, you're in the right place. React Hooks are a set of functions that let you use state and other React features in functional components. In this guide, we'll explore why React Hooks exist, how they work, and how they can supercharge your React development",
    date: '2024-01-06',
  },
  {
    id: 4,
    title: 'Asynchronous JavaScript: Promises, Async/Await',
    content: "Welcome to the world of asynchronous JavaScript! In this guide, we'll explore how to handle tasks that don't follow the usual order. Get ready to learn about Promises, Async/Await, and other essential concepts that make your code efficient and responsive."
    ,
    date: '2024-01-05',
  },
  
  
  {
    id: 5,
    title: "Introduction to GraphQL and its Advantages Over REST",
    content: "GraphQL is a modern and efficient way to fetch data. It allows clients to request only what they need, cutting down on excess data. With a clear structure and real-time updates, it's a user-friendly alternative to traditional REST APIs.",
    date: '2024-01-05',
  },
  {
    id: 2,
    title: 'Building a RESTful API with Node.js',
    content: 'Upcoming',
    date: '2024-01-05',
  },

  // Add more blogs as needed
];

const BlogList = () => {
  return (
    <div className="container my-8 mt-11 py-5 bg-white p-4 w-4/5 mx-auto rounded-md">
      <h1 className="text-3xl font-bold mb-4  ">Latest Blogs</h1>
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (

          <div key={blog.id} className="bg-cyan-50 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{blog.date}</p>
            <p className="text-gray-800 text-md">{blog.content}</p>
            <Link to={`/zebaBlog/${blog.id}`} >Read More </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
