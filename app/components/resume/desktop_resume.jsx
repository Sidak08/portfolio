"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Sarpanch } from "next/font/google";
import styles from "./resume.module.css";
import localFont from "next/font/local";
import Image from "next/image";

export default function DesktopResume({ active, setActive }) {
  return (
    <section id="resume" className="relative">
      <motion.div
        whileInView={() => {
          if (active !== "resume") {
            setActive((pre) => "resume");
          }
        }}
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>

      <div className="w-full bg-[#0A0F13] flex items-center justify-evenly pt-20 pb-20">
        <h1
          className={`${styles.resume} w-[127px] text-[#a396f9] text-[200px] font-normal font-['SAIBA-45']`}
        >
          R e s u m e
        </h1>
        <Image src="/resume.png" width={800} height={1200} />
      </div>
    </section>
  );
}
