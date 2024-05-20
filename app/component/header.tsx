"use client"
import { useState, useContext } from "react";
import { UserButton } from "@clerk/nextjs";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { ScreenContext } from "../context/screenContext";
import { auth, SignOutButton} from "@clerk/nextjs";

const link_variant = {
    normal: {
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
        scale: 1.3,
        transition: {
            type: 'spring', duration: 1,
        }
    }
}

const nav_variant = {
    normal: {
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

const Header = () => {
    const { userId } = auth()
    const { FullScreen } = useContext(ScreenContext)
    const [toggle, setToggle] = useState(false)
    const toggleHamBurger = () => {
        setToggle(prev => !prev)
    }
    return (
        <header className={`bg-blue-600 z-20 flex justify-between items-center py-3 md:px-10 px-3 lg:text-white sticky top-0`}>
            <div>
                <h1 className="text-white text-3xl font-medium">SMART HUB</h1>
            </div>
            <motion.nav variants={nav_variant} animate={toggle && FullScreen ? "normal" : "final"} className="lg:static absolute max-w-full top-[60px] right-0 left-0 duration-300 lg:shadow-none">
                <motion.ul variants={nav_variant} animate={toggle && FullScreen ? "normal" : "final"} className="font-bold bg-white lg:bg-transparent py-3 leading-10 flex flex-col items-center justify-center lg:flex-row lg:space-x-10 shadow-xl md:shadow-none">
                    <Link href={'/'}><motion.p variants={link_variant} animate={toggle && FullScreen ? "normal" : "final"} whileHover="hover">Home</motion.p></Link>
                    <Link href={'/about'}><motion.p variants={link_variant} animate={toggle && FullScreen ? "normal" : "final"} whileHover="hover">About</motion.p></Link>
                    <Link href={'/products/all'}><motion.p variants={link_variant} animate={toggle && FullScreen ? "normal" : "final"} whileHover="hover">Products</motion.p></Link>
                    <Link href={'/contact'}><motion.p variants={link_variant} animate={toggle && FullScreen ? "normal" : "final"} whileHover="hover">Contact</motion.p></Link>
                    <button className="lg:hidden bg-purple-300 hover:bg-transparent hover:text-purple-300 transition-all duration-300 text-black px-3 font-bold rounded-md">WELCOME</button>
                </motion.ul>
            </motion.nav>
            <div>
                {userId ?
                    <div className="flex gap-5 items-center">
                        <Link href="/dashboard">
                            <p>Dashboard</p>
                        </Link>
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
                    </div>}
                <FaBars onClick={() => toggleHamBurger()} className="text-white lg:hidden text-3xl" />
            </div>
        </header>
    )
}

export default Header;