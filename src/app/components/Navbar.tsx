"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
