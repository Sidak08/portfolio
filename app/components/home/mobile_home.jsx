"use client";
import Image from "next/image";
import styles from "./desktop_home.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const filledText = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

const outlineText = localFont({
  src: "../.././fonts/saiba-45.woff2",
  display: "swap",
});

export default function MobileHome({ active, setActive }) {
  const glitch = useGlitch();

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

      <div className="w-full h-screen bg-[#0A0F13] flex flex-col items-center justify-center">
        <div
          ref={glitch.ref}
          className="w-[80%] flex items-center justify-center ml-[10%]"
        >
          <img src="/home-profile.png" className="w-full" />
        </div>
        <div className="w-full flex flex-col items-center justify-evenly">
          <div className="mt-14 flex flex-col items-center justify-evenly">
            <div className={`${styles.myNameMobile} ${outlineText.className}`}>
              My Name
            </div>
            <div className={`${filledText.className} ${styles.isSidakMobile} `}>
              Is SidaK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
