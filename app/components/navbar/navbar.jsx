"use client";
import { Contact, Home, Projects, Resume, User } from "./icons";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useScroll } from "framer-motion";

export default function Navbar({ active, setActive }) {
  // const [active, setActive] = useState("home");
  const router = useRouter();
  // const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div
      className={`w-[400px] h-[50px] ${styles.navBarBox} absolute bottom-10 flex items-center justify-evenly`}
    >
      <button
        onClick={() => {
          setActive("home");
          router.push("/#home");
        }}
      >
        <Home visible={active === "home" ? "animate" : "hidden"} />
      </button>
      <button
        onClick={() => {
          setActive("user");
          router.push("/#about_me");
        }}
      >
        <User visible={active === "user" ? "animate" : "hidden"} />
      </button>
      <button
        onClick={() => {
          setActive("projects");
          router.push("/#projects");
        }}
      >
        <Projects visible={active === "projects" ? "animate" : "hidden"} />
      </button>
      <button
        onClick={() => {
          setActive("resume");
          router.push("/#resume");
        }}
      >
        <Resume visible={active === "resume" ? "animate" : "hidden"} />
      </button>
      <button
        onClick={() => {
          setActive("contact");
          router.push("/#contact");
        }}
      >
        <Contact visible={active === "contact" ? "animate" : "hidden"} />
      </button>
    </div>
  );
}
