"use client"
import { useState } from "react";
import "./cont.css";
import Image from "next/image";
import menuIcon from '@/assets/menu_icon.svg'
import crossIcon from '@/assets/cross_icon.svg'

import Link from "next/link"

const navLinks = [
    { name: "Home", href: "/"},
    { name: "Start", href: "/test"},
    { name: "About", href: "/about"},
]

export const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);


    return (
        <section className="border-b-white border-b py-5 bg-neutral-950 text-white">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-yellow-300"><Link href="/">STARZ.</Link></div>
                    <nav className="hidden md:flex gap-6 text-black/60 items-center text-xl">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href}
                            className="text-white">{link.name}</Link>
                        ))}
                    </nav>
                    <Image src={menuIcon} alt="menuIcon"
                    className="md:hidden w-7 cursor-pointer"
                    onClick={() => setShowMobileMenu(true)}/>
                </div>
                <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white
                    transition-all text-black`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <Image src={crossIcon} onClick={() => setShowMobileMenu(false)} className='w-6' alt='icon'/>
                </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-bold'>
                        <Link onClick={() => setShowMobileMenu(false)} href="/" className='px-4 py-2 rounded-full inline-block'>HOME</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/about" className='px-4 py-2 rounded-full inline-block'>ABOUT</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/test" className='px-4 py-2 rounded-full inline-block'>START</Link>
                    </ul>
            </div>
            </div>
        </section>
    );
}