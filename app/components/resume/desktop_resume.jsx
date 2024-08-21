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

      <div className="w-full bg-[#0A0F13] flex items-center justify-evenly">
        <h1
          className={`${styles.resume}text-[#a396f9] text-[200px] font-normal font-['SAIBA-45']`}
        >
          Resume
        </h1>
      </div>
    </section>
  );
}
