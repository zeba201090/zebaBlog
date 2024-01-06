import React from "react";
import BlogList from './blogList.js';
import Blog from './blog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Section1() {
  return (
    <section id= 'home' className="relative min-h-screen md:w-full bg-gradient-to-t from-cyan-800 via-cyan-700 to-cyan-200 text-center flex flex-col   items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full   animate-pulse">
        {Array.from({ length: 110 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full  "
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: Math.random() * 5 + 5 + "s",
              animationDelay: Math.random() + "s",
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10  px-8 p-5 mb-11 h-auto   ">
      <Router>
        <Routes>
          <Route path="/" element={<BlogList/>} > </Route>
          <Route path="/:id" element={<Blog/>}> </Route>

        </Routes>
        </Router>
      </div>
   
    </section>
  );
}

export default Section1;
