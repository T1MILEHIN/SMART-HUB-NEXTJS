"use client";
import React from 'react'
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { ScreenContext } from "../context/screenContext";
import { auth, UserButton } from "@clerk/nextjs";

const link_variant = {
    initial: {
        opacity: 0,
        x: '-500px',
    },
    final: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring', duration: 1, delay: 0.2,
        }
    },
    hover: {
        scale: 1.2,
        transition: {
            type: 'spring', duration: 0.5,
        }
    }
}

const nav_variant = {
    initial: {
        x: '-100vh'
    },
    final: {
        x: 0,
        transition: {
            staggerChilderen: 2,
            when: "beforeChildren",
        }
    }
}

const DesktopNavLinks = () => {
    const {FullScreen} = useContext(ScreenContext)
    const [toggle, setToggle] = useState(false)
    const toggleHamBurger = () => {
        setToggle(prev => !prev)
    }
    return (
        <>
            <motion.nav variants={nav_variant} animate={toggle && !FullScreen ? "initial" : !FullScreen ? "final" : ""} className="lg:static absolute max-w-full top-[60px] right-0 left-0 duration-300 lg:shadow-none">
                <motion.ul variants={nav_variant} animate={toggle && !FullScreen ? "initial" : "final"} className="font-medium bg-white lg:bg-transparent py-2 flex flex-col items-center justify-center lg:flex-row lg:space-x-10 shadow-xl md:shadow-none">
                    <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Home</motion.p></Link>
                    <Link href={'/about'}><motion.p variants={link_variant} whileHover="hover">About</motion.p></Link>
                    <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Products</motion.p></Link>
                    <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Contact</motion.p></Link>
                    {/* {userId ?
                        <div className="">
                            <UserButton afterSignOutUrl="/sign-in" />
                        </div>
                        :
                        <div className="flex gap-5 items-center">
                            <Link href="/sign-in">
                                <button className="hidden lg:block bg-white hover:text-black transition-all duration-300 text-black p-3 font-bold rounded-md">LOGIN</button>
                            </Link>
                            <Link href="/sign-up">
                                <button className="hidden lg:block bg-white hover:text-black transition-all duration-300 text-black p-3 font-bold rounded-md">SIGN UP</button>
                            </Link>
                        </div>} */}
                </motion.ul>
            </motion.nav>

        </>
    )
}

export default DesktopNavLinks;