"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Email,
  Phone,
  Address,
  ExternalLink,
  Github,
  Linkedin,
  Devpost,
} from "./svg";
import Link from "next/link";

export default function DesktopContact({ active, setActive }) {
  return (
    <section id="contact" className="relative">
      <motion.div
        whileInView={() => {
          if (active !== "contact") {
            setActive((pre) => "contact");
          }
        }}
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>

      <div className="w-full h-screen bg-[#0A0F13] flex flex-col items-center justify-evenly">
        <h1 className={styles.hollowText}>Contact Me</h1>
        <div className="max-w-[1200px] w-[80%] min-h-[500px] rounded-xl bg-[#0A1920] flex flex-col items-start justify-evenly">
          <Text
            text="SidakSingh318@gmail.com"
            link="mailto:sidaksingh318@gmail.com"
            Icon={Email}
          />
          <Text text="+1 (647) 405-7022" link={"#"} Icon={Phone} />
          <Text text="Brampton, Ontario Canada" link={"#"} Icon={Address} />
          <Text text="Sidak.works" link={"#"} Icon={ExternalLink} />
          <Text text="github.com/Sidak08" link={"#"} Icon={Github} />
          <Text
            text="linkedin.com/in/sidak-singh-9812a42a3/"
            link={"#"}
            Icon={Linkedin}
          />
          <Text text="devpost.com/sidaksingh318" link={"#"} Icon={Devpost} />
        </div>
      </div>
    </section>
  );
}

const Text = ({ text, link, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconColor, setIconColor] = useState("#fff");

  useEffect(() => {
    let timeout;
    if (isHovered) {
      timeout = setTimeout(() => {
        setIconColor("#8CEFBA");
      }, 300); // Delay of 300ms
    } else {
      timeout = setTimeout(() => {
        setIconColor("#fff");
      }, 300); // Delay of 300ms
    }

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount or state change
  }, [isHovered]);

  return (
    <Link href={link}>
      <div
        className="flex items-start ml-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon color={iconColor} />

        <h1
          className={` ml-6 text-white text-[1.3rem] font-normal font-['Saira'] ${
            link ? "underline" : ""
          } ${isHovered ? "text-[#8CEFBA]" : ""}`}
          style={{
            transition:
              "color 0.3s ease-in-out, text-decoration 0.3s ease-in-out",
            lineHeight: "1.5", // Increase line spacing
            letterSpacing: "0.1em",
          }}
        >
          {text}
        </h1>
      </div>
    </Link>
  );
};
