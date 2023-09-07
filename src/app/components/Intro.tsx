// pages/index.js
"use client";
import React, { useState } from 'react';

export default function Intro() {
  const [tasks, setTasks] = useState([]);

  // Add, edit, and delete task functions will go here

  return (
    <div className="container mx-auto p-8 text-justify relative">
  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent text-center  bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
    Welcome to Task Tracker
  </h1>
  <p className="text-lg text-center  mb-6">
    Stay organized and productive with our task tracking app. Manage your tasks efficiently and never miss a deadline.
  </p>
  
</div>


  );
}
