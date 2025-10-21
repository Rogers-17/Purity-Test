"use client"

import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <Link  href="/" className="font-bold text-lg">Schedule Vessle</Link>
        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/test">Start Test</Link>
            <Link href="/about">About</Link>
        </div>
        </nav>
    );
}