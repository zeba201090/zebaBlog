import React from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  console.log("hello");
  console.log("ID from URL:", id);
  const blogData = [
    {
      id: 1,
      title: "Mastering React Hooks: A Comprehensive Guide for Beginners",
      date: "2024-01-06",
      content: [
        {
          id: 1,
          header: "Introduction",
          body: "Welcome to the world of React Hooks! If you're new to React or looking to level up your skills, you're in the right place. React Hooks are a set of functions that let you use state and other React features in functional components. In this guide, we'll explore why React Hooks exist, how they work, and how they can supercharge your React development.",
        },

        {
          id: 2,
          header: "The Need for React Hooks",
          body: "Traditionally, in class components, managing state and lifecycle methods could be a bit overwhelming. React Hooks were introduced to simplify component logic, making it more readable and easier to maintain. They allow functional components to do everything class components can do, and more!",
        },
        {
          id: 3,
          header:
            "Overview of useState, useEffect, useContext, and Custom Hooks",
          subsections: [
            {
              id: 1,
              header: "The useState Hook",
              body: "This hook enables you to add state to your functional components. It's like having a memory for your component, where it can remember and update information."

            },
            {
              id: 2,
              header: "The useEffect Hook",
              body: "With this hook, you can perform side effects in your components, such as fetching data, subscribing to external events, or updating the DOM after it renders",
            },

            {
              id: 3,
              header: "The useContext Hook",
              body:  "This hook lets you subscribe to React context without introducing nesting. It's handy for sharing values like themes or authentication status throughout your app.",
            },

            {
              id: 4,
              header: "Custom Hooks",
              body: "You can create your own hooks! Custom Hooks are a powerful way to reuse component logic across different parts of your application. We'll explore how to create and use them effectively.",
            }
            
          ],
        },
        {
          "id": 4,
          "header": "Best Practices and Common Pitfalls",
          "subsections": [
            {
              "id": 1,
              "header": "Use Hooks at the Top Level",
              "body": "Always use hooks at the top level of your functional components, not inside loops, conditions, or nested functions."
            },
            {
              "id": 2,
              "header": "Dependency Arrays in useEffect",
              "body": "Be mindful of the dependency array in useEffect to prevent unnecessary re-renders and side effects."
            },
            {
              "id": 3,
              "header": "Clean-Up Functions",
              "body": "Utilize clean-up functions in useEffect to avoid memory leaks and unexpected behavior."
            }
          ]
        },
        {
          "id": 5,
          "header": "Conclusion",
          "body": "Congratulations! You've just scratched the surface of React Hooks. As you continue your React journey, mastering these hooks will empower you to build more elegant and efficient React applications. Happy coding!"
        }
        
      ],
    },
    {
      id: 4,
      title: "Understanding Asynchronous JavaScript: Promises, Async/Await",
      date: "2024-02-01",
      content: [
        {
          id: 1,
          header: "Introduction",
          body: "Welcome to the world of asynchronous JavaScript! In this guide, we'll explore how to handle tasks that don't follow the usual order. Get ready to learn about Promises, Async/Await, and other essential concepts that make your code efficient and responsive."
        },
        {
          id: 2,
          header: "Promises and Callbacks",
          body: "Promises in JavaScript provide a structured approach to handle asynchronous tasks. They represent ongoing operations, have clear states (pending, fulfilled, rejected), support chaining for success and error handling, and enable non-blocking behavior, allowing the program to continue execution while waiting for tasks to complete. Callbacks are like promises made to do something once a task is done. However, when dealing with many tasks, callbacks can make your code messy. We'll look into the limitations of callbacks and the challenges they bring to keeping your code clean.",
        },
        {id:8 ,
        header: "Promises and Its States",
        
          subsections: [
            
              {id: 1,
              header: "Pending",
              body: "The initial state of a promise. It represents an ongoing operation that hasn't been fulfilled or rejected yet."
              },
              {id: 2,
              header: "Fulfilled",
              body: "The state of a promise when it's resolved. It represents a successful operation."
              },
              {id: 3,
              header: "Rejected",
              body: "The state of a promise when it's not resolved. It represents a failed operation."
              },
            ],},
            
        
        { id: 3,
          header: "When to Use Promises",
          body: "Use Promises when dealing with asynchronous operations, such as fetching data from an API, reading files, or performing other non-blocking tasks.Promises are especially useful when you want to avoid callback hell (nested callbacks) and create a more structured and readable asynchronous code. Promises are suitable for scenarios where you need to perform tasks concurrently or sequentially while maintaining clear error-handling mechanisms."
            },
        {

          id: 4,
          header : "Common Problems with Callbacks",
          subsections: [ {
            id:1,
            header: "Callback Hell",
            body: "Callback hell is a common problem with asynchronous code. It happens when you have many nested callbacks within callbacks, making your code messy and hard to read. Promises help you avoid callback hell by providing a more structured approach to asynchronous code."
          },
          {
            id:2,
            header: "Uncaught Errors",
            body: "Errors in callbacks are hard to catch. They can lead to unexpected behavior and even crash your application. Promises provide a clear error-handling mechanism, allowing you to catch and handle errors effectively."
          },
          {
            id:3,
            header: "Limited Error Handling",
            body: "Callbacks don't provide a clear way to handle errors. They can be difficult to debug and maintain. Promises, on the other hand, provide a structured approach to error handling, making your code more readable and maintainable."
          },
          {
            id:4,
            header: "Limited Control",
            body: "Callbacks don't provide much control over asynchronous tasks. They can't be canceled or paused. Promises, on the other hand, provide more control over asynchronous tasks, allowing you to cancel or pause them."
          },
          {
            id:5,
            header: "Limited Support for Concurrency",
            body: "Callbacks don't provide a clear way to handle concurrency. They can't be used to perform multiple tasks concurrently. Promises, on the other hand, provide a clear way to handle concurrency, allowing you to perform multiple tasks concurrently."
          },
          


          ],
        },
        {
          id: 5,
          
          header: "Async/Await ",
          body: "`async` and `await` are features in JavaScript used for handling asynchronous code in a more readable and synchronous-like manner. They are often considered an improvement over working directly with Promises.",
          subsections: [{
            id: 1,
            header: "The async Keyword",
            body: "The `async` keyword is used to define an asynchronous function. It returns a Promise, allowing you to use `then()` and `catch()` for handling success and error cases. The `async` keyword can be used with both function declarations and arrow functions."
          },
          {
            id: 2,
            header: "The await Keyword",
            body: "The `await` keyword is used to wait for a Promise to resolve or reject. It can only be used inside an `async` function. It makes asynchronous code look and behave more like synchronous code, which is easier to read and maintain."
          },
          {
            id: 3,
            header: "Error Handling",
            body: "When using `async` and `await`, you can use `try/catch` to handle errors. This makes error handling easier and more readable than using `then()` and `catch()`."
          },
          {
            id: 4,
            header: "Chaining Promises",
            body: "You can chain Promises with `async` and `await`. This allows you to perform multiple asynchronous tasks sequentially, making your code more readable and maintainable."
          },
          {
            id: 5,
            header: "Async/Await vs. Promises",
            body: "Async/Await is an improvement over working directly with Promises. It makes asynchronous code look and behave more like synchronous code, which is easier to read and maintain."
          },
          {
            id: 6,
            header: "Async/Await vs. Callbacks",
            body: "Async/Await is an improvement over working directly with callbacks. It makes asynchronous code look and behave more like synchronous code, which is easier to read and maintain."
          }
          ],
        },
        {
          id: 5,
          header: "Error handling in asynchronous code",
          body: "Errors happen, but don't worry! Discover how to handle errors gracefully in asynchronous JavaScript. Whether dealing with Promises or Async/Await, we'll guide you through best practices to catch and manage errors effectively."
        },
        {
          id: 6,
          header: "Chaining asynchronous operations",
          body: "Asynchronous tasks often need to work together. Learn how to chain these tasks using Promises and Async/Await. It's like coordinating different steps to create a smooth flow in your code."
        },
        {
          id: 7,
          header: "Best practices",
          body: "Explore the best ways to work with asynchronous JavaScript. From improving performance to avoiding common mistakes, we'll cover practices that will make your code strong, easy to maintain, and efficient."
        },
        {
          id: 8,
          header: "Conclusion",
          body: "Congratulations! You've successfully explored the world of asynchronous JavaScript. By understanding Promises, Async/Await, and best practices, you're now ready to write code that is both responsive and strong. Happy coding!"
        }
      ]
    },
    {
      id: 5,
      title: "Introduction to GraphQL and its Advantages Over REST",
      date: "2024-02-15",
      content: [
        {
          id: 1,
          header: "Introduction",
          body: "GraphQL is a modern API technology by Facebook, simplifying data fetching. With a single endpoint, it lets clients request exactly what they need, reducing data excess. Its hierarchical structure and real-time updates make it flexible and developer-friendly, providing a more efficient alternative to traditional REST APIs. In this guide, we'll get into the fundamentals of GraphQL and explore why it's gaining popularity as a modern alternative to traditional RESTful APIs."
        },
        {
          id: 2,
          header: "Overview of RESTful APIs",
          body: "Before we dive into GraphQL, let's briefly revisit RESTful APIs. While REST has been a reliable choice, it comes with challenges like over-fetching and under-fetching of data. These challenges set the stage for the emergence of GraphQL."
        },
        {
          id: 3,
          header: "What is GraphQL and why use it?",
          body: "GraphQL is a query language for APIs, offering a more efficient and flexible way to request and deliver data between clients and servers. Unlike REST, where clients have limited control over data retrieval, GraphQL empowers clients to request exactly what they need, reducing data traffic and enhancing performance."
        },
        {
          id: 4,
          header: "GraphQL queries, mutations, and subscriptions",
          body: "GraphQL introduces a structured way of querying data, performing mutations to update data, and implementing subscriptions for real-time updates. The syntax of GraphQL queries is concise, allowing clients to request only the fields they require, making data retrieval more efficient and tailored to specific needs."
        },
        {
          id: 5,
          header: "Differences between GraphQL and REST",
          body: "One key difference is how data is requested. In REST, clients often receive fixed data structures, leading to over-fetching or under-fetching. GraphQL, on the other hand, enables clients to define the shape and structure of the response, reducing unnecessary data and improving efficiency."
        },
        {
          id: 6,
          header: "Benefits of GraphQL over REST",
          body: "GraphQL offers several advantages. It eliminates over-fetching and under-fetching issues, as clients can request precisely the data they need. With a single endpoint, GraphQL simplifies the API structure and provides a cohesive development experience. Additionally, GraphQL supports real-time updates through subscriptions, enhancing user interactivity."
        },
        {
          id: 7,
          header: "When to use GraphQL",
          body: "Consider using GraphQL when you need a more flexible and tailored approach to data communication. It excels in scenarios where clients require specific data, want to reduce data traffic, or need real-time updates. GraphQL is particularly beneficial for applications with complex data requirements and diverse client needs."
        },
        {
          id: 8,
          header: "Conclusion",
          body: "Congratulations! You've been introduced to the world of GraphQL and explored its advantages over REST. By adopting GraphQL, you empower your applications with a more flexible, efficient, and tailored approach to data communication. Whether reducing data traffic or enabling real-time updates, GraphQL offers a versatile solution. Happy exploring!"
        }
      ]
    },
    {
      id: 2,
      title: "Building a RESTful API with Node.js",
      date: "2024-01-05",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },


  ];
  const blog = blogData.find((post) => post.id === parseInt(id));
  console.log("Selected Blog:", blog);

  return (
    <div className="container mx-auto  bg-white rounded-md p-6 h-auto text-left w-11/12 mt-5 justify-normal">
      <h1 className="text-5xl font-bold w-full mb-4 bg-gray-100 p-4 rounded-s">{blog.title}</h1>
      <p className="text-gray-600 text-m  bg-gray-100 p-2 w-52 rounded-md">Published on: {blog.date}</p>

      {blog.content.map((section, index) => (
        <section key={index} className="mb-6 my-6">


          <h2 className="text-3xl underline font-bold mb-4">{section.header}</h2>

          {section.subsections && section.subsections.length > 0 ? (
            <div className="ml-4 mx-20">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">
                    {subsection.header}
                  </h3>
                  <p className="text-black text-xl">{subsection.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-800 text-xl">{section.body}</p>
          )}
         
        </section>
      ))}
      
    </div>
  );
};

export default Blog;
