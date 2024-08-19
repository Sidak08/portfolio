"use client";
import Image from "next/image";
import styles from "./desktop_home.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const myFont = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

export default function DesktopHome({ active, setActive }) {
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

      <div className="w-full h-screen bg-[#0A0F13]">
        <div className="flex items-center justify-center w-full h-screen mb-[200px]">
          <div className="flex items-center justify-evenly w-full">
            <div ref={glitch.ref}>
              <Image src="/home-profile.png" height={412} width={413} />
            </div>
            <div className="">
              <div className={`${styles.myName}`}>My Name </div>
              <div
                className={`${myFont.className} ${styles.isSidak} mt-9 ml-32`}
              >
                Is SidaK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
