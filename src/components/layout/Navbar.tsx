"use client"
import "./cont.css";

import Link from "next/link"

const navLinks = [
    { name: "Home", href: "/"},
    { name: "Start", href: "/test"},
    { name: "About", href: "/"},
]

export const Navbar = () => {
    return (
        <div className="py-5 bg-neutral-950 text-white">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="text-xl"><Link href="/">PURITY</Link></div>
                    <nav className="hidden md:flex gap-6 text-black/60 items-center text-xl">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href}
                            className="text-white">{link.name}</Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}