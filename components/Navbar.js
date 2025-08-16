"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Minx-URL
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            <Link href="/help" className="hover:text-blue-200">Help</Link>
            <Link href="/about" className="hover:text-blue-200">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4">
          <Link href="/" className="block py-2 hover:text-blue-200">Home</Link>
          <Link href="/help" className="block py-2 hover:text-blue-200">Help</Link>
          <Link href="/about" className="block py-2 hover:text-blue-200">About</Link>
        </div>
      )}
    </nav>
  );
}
