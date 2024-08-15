"use client";
import { Contact, Home, Projects, Resume, User } from "./icons";
import styles from "./navbar.module.css";
import { useState } from "react";

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
        <Home color={active === "home" ? "#FF88D7" : "#fff"} />
      </button>
      <button
        onClick={() => {
          setActive("user");
        }}
      >
        <User color={active === "user" ? "#7DCDFD" : "#fff"} />
      </button>
      <button
        onClick={() => {
          setActive("projects");
        }}
      >
        <Projects color={active === "projects" ? "#ED256C" : "#fff"} />
      </button>
      <button
        onClick={() => {
          setActive("resume");
        }}
      >
        <Resume color={active === "resume" ? "#A396F9" : "#fff"} />
      </button>
      <button
        onClick={() => {
          setActive("contact");
        }}
      >
        <Contact color={active === "contact" ? "#8CEFBA" : "#fff"} />
      </button>
    </div>
  );
}
