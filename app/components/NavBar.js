"use client";
import React from 'react'
import Link from 'next/link'
export default function NavBar() {
  return (
    <div>
              <nav className="flex justify-between items-center">
            <Link href="#" className="font-bold text-xl text-indigo-600">My Site</Link>
            <div>
                <Link href="/" className="text-gray-600 hover:text-gray-900 mx-4">Home</Link>
                <Link href="/products" className="text-gray-600 hover:text-gray-900 mx-4">Nos Produits</Link>
                <Link href="/" className="text-gray-600 hover:text-gray-900 mx-4">Contact</Link>
                <Link href="/" className="text-gray-600 hover:text-gray-900 mx-4">Blog</Link>
            </div>
        </nav>
        
            </div>
  )
}
