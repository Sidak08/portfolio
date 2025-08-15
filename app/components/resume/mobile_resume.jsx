"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Sarpanch } from "next/font/google";
import styles from "./resume.module.css";
import localFont from "next/font/local";
import Image from "next/image";

const outlineText = localFont({
  src: "../.././fonts/saiba-45.woff2",
  display: "swap",
});

export default function MobileResume({ active, setActive }) {
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

      <div className="w-full bg-[#0A0F13] flex flex-col items-center justify-evenly pt-20 pb-20 px-4">
        <h1
          className={`${outlineText.className} ${styles.resumeMobile} text-[#a396f9] font-normal mb-5 text-center px-2`}
        >
          Resume
        </h1>
        <img src="/mobile_resume.png" className="w-[90%] max-w-[400px]" />
      </div>
    </section>
  );
}
