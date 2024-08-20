"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Sarpanch } from "next/font/google";
const sarpanch = Sarpanch({ subsets: ["latin"], weight: "400" });
import styles from "./projects.module.css";

export default function Projects({ active, setActive }) {
  return (
    <section id="projects" className={`relative ${sarpanch.className}`}>
      <motion.div
        whileInView={() => {
          if (active !== "projects") {
            setActive((pre) => "projects");
          }
        }}
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>
      <div className="w-full min-h-screen bg-[#0A0F13] flex flex-col items-center justify-between">
        <div className="w-full h-[50px]">
          <h1 className={`${styles.hollowText} ml-20`}>Projects</h1>
        </div>
      </div>
    </section>
  );
}
