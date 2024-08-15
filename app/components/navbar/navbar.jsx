"use client";
import { Contact, Home, Projects, Resume, User } from "./icons";
import styles from "./navbar.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <div
      className={`w-[400px] h-[50px] ${styles.navBarBox} absolute bottom-10 flex items-center justify-evenly`}
    >
      <button
        onClick={() => {
          setActive("home");
        }}
      >
        <Home visible={active === "home" ? "animate" : "hidden"} />
      </button>
      <button
        onClick={() => {
          setActive("user");
        }}
      >
        <User visible={active === "user" ? "animate" : "hidden"} />
      </button>
      <button
        onClick={() => {
          setActive("projects");
        }}
      >
        <Projects visible={active === "projects" ? "animate" : "hidden"} />
      </button>
      <button
        onClick={() => {
          setActive("resume");
        }}
      >
        <Resume visible={active === "resume" ? "animate" : "hidden"} />
      </button>
      <button
        onClick={() => {
          setActive("contact");
        }}
      >
        <Contact visible={active === "contact" ? "animate" : "hidden"} />
      </button>
    </div>
  );
}
