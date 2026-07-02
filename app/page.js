
import Link from 'next/link';
import React from 'react'
import NavBar from './components/NavBar';

export default function page() {
  return (
    <div><div className="bg-gray-100 font-sans">
    <div className="container mx-auto px-4 py-8">      
       <NavBar />
        <div className="flex flex-col justify-center items-center my-16">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">Welcome to My Site</h1>
            <p className="text-2xl text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl mt-8 py-4 px-8 rounded-lg">Get Started</button>
        </div>
    </div>
</div></div>
  )
}
