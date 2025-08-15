"use client";
import { Contact, Home, Projects, Resume, User } from "./icons";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useScroll } from "framer-motion";

export default function Navbar({ active, setActive, hideTmp }) {
  // hideTmp prop controls whether About Me section is hidden based on TMP environment variable
  // const [active, setActive] = useState("home");
  const router = useRouter();
  // const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(1, active);
  }, [active]);

  // Redirect from aboutMe if TMP environment variable is enabled and user tries to navigate there
  useEffect(() => {
    if (hideTmp && active === "aboutMe") {
      setActive("home");
      router.push("/#home");
    }
  }, [hideTmp, active, setActive, router]);

  return (
    <div
      className={`w-[85%] max-w-[320px] sm:w-[400px] h-[50px] ${styles.navBarBox} fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-evenly z-10`}
    >
      <button
        onClick={() => {
          setActive("home");
          router.push("/#home");
        }}
      >
        <Home visible={active === "home" ? "animate" : "hidden"} />
      </button>
      {/* Only render About Me button if TMP environment variable is not enabled */}
      {!hideTmp && (
        <button
          onClick={() => {
            setActive("aboutMe");
            router.push("/#about_me");
          }}
        >
          <User visible={active === "aboutMe" ? "animate" : "hidden"} />
        </button>
      )}
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
