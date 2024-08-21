"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function DesktopContact({ active, setActive }) {
  return (
    <section id="home" className="relative">
      <motion.div
        whileInView={() => {
          if (active !== "home") {
            setActive((pre) => "home");
          }
        }}
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>

      <div className="w-full h-screen bg-[#0A0F13] flex flex-col items-center justify-evenly">
        <h1 className={styles.hollowText}>Contact Me</h1>
        <div className="max-w-[1000px] w-[80%] min-h-[410px] rounded-xl bg-[#0A1920}"></div>
      </div>
    </section>
  );
}
