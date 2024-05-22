"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import { ScreenContext } from "../context/screenContext";
import { UserButton } from "@clerk/nextjs";

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
    return (
        <>
            <nav className="lg:static max-w-full">
                <ul className="text-white gap-10 font-medium py-2 flex items-center justify-center lg:flex-row">
                    <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Home</motion.p></Link>
                    <Link href={'/about'}><motion.p variants={link_variant} whileHover="hover">About</motion.p></Link>
                    <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Products</motion.p></Link>
                    <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Contact</motion.p></Link>
                </ul>
            </nav>
        </>
    )
}

export default DesktopNavLinks;