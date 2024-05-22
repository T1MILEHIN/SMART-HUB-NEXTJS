"use client";
import React from 'react'
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

const link_variant = {
  initial: {
    opacity: 0,
    y: '-50px',
  },
  final: {
    opacity: 1,
    y: 0,
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
    opacity: 0
  },
  final: {
    opacity: 1,
    transition: {
      staggerChilderen: 0.2,
      when: "beforeChildren",
    }
  }
}

const MobileNav = () => {
  const [toggle, setToggle] = useState(false)
  const toggleHamBurger = () => {
    setToggle(prev => !prev)
  }
  return (
    <>
      <motion.nav variants={nav_variant} animate={toggle ? "final" : "initial"} className={`absolute max-w-full top-0 right-0 left-0 bottom-0 duration-300 min-h-screen bg-white ${toggle && "bg-opacity-5 backdrop-blur-2xl"}`}>
        <motion.ul variants={nav_variant} animate={toggle ? "final" : "initial"} className="text-xl flex flex-col justify-between items-center min-h-screen py-28">
          <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Home</motion.p></Link>
          <Link href={'/about'}><motion.p variants={link_variant} whileHover="hover">About</motion.p></Link>
          <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Products</motion.p></Link>
          <Link href={'/'}><motion.p variants={link_variant} whileHover="hover">Contact</motion.p></Link>
        </motion.ul>
      </motion.nav>
      {toggle ? 
        <FaXmark onClick={() => toggleHamBurger()} className="text-white block lg:hidden text-3xl cursor-pointer relative z-[99999999]"/> 
        : 
        <FaBars onClick={() => toggleHamBurger()} className="text-white block lg:hidden text-3xl cursor-pointer relative z-[99999999]" />
      }
    </>
  )
}

export default MobileNav