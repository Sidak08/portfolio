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

const outlineText = localFont({
  src: "../.././fonts/saiba-45.woff2",
  display: "swap",
});

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
        <h1 className={`${outlineText.className} ${styles.hollowText}`}>
          Contact Me
        </h1>
        <div className="max-w-[1200px] w-[80%] min-h-[500px] rounded-xl bg-[#0A1920] flex flex-col items-start justify-evenly relative">
          <Text
            text="SidakSingh318@gmail.com"
            link="mailto:sidaksingh318@gmail.com"
            Icon={Email}
          />
          <Text
            text="+1 (647) 405-7022"
            link={"tel:+16474057022"}
            Icon={Phone}
          />
          <Text
            text="Brampton, Ontario Canada"
            link={"https://maps.app.goo.gl/8xGw1R14q4oMu2Ds7"}
            Icon={Address}
          />
          <Text
            text="Sidak.works"
            link={"https://sidak.works/"}
            Icon={ExternalLink}
          />
          <Text
            text="github.com/Sidak08"
            link={"https://github.com/Sidak08"}
            Icon={Github}
          />
          <Text
            text="linkedin.com/in/sidak-singh-9812a42a3/"
            link={"https://linkedin.com/in/sidak-singh-9812a42a3/"}
            Icon={Linkedin}
          />
          <Text
            text="devpost.com/sidaksingh318"
            link={"https://devpost.com/sidaksingh318"}
            Icon={Devpost}
          />
          <Image
            src={"/contact.png"}
            width={600}
            height={650}
            className="absolute bottom-0 right-[-150px]"
          />
        </div>
      </div>
    </section>
  );
}

const Text = ({ text, link, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconColor, setIconColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#fff");

  useEffect(() => {
    let iconTimeout, textTimeout;

    if (isHovered) {
      iconTimeout = setTimeout(() => {
        setIconColor("#8CEFBA");
      }, 300); // Delay of 300ms for icon

      textTimeout = setTimeout(() => {
        setTextColor("#8CEFBA");
      }, 300); // Delay of 300ms for text
    } else {
      iconTimeout = setTimeout(() => {
        setIconColor("#fff");
      }, 300); // Delay of 300ms for icon

      textTimeout = setTimeout(() => {
        setTextColor("#fff");
      }, 300); // Delay of 300ms for text
    }

    return () => {
      clearTimeout(iconTimeout);
      clearTimeout(textTimeout);
    }; // Cleanup timeouts on component unmount or state change
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
          className={`ml-6 text-[1.3rem] font-normal font-['Saira'] ${
            link ? "underline" : ""
          }`}
          style={{
            color: textColor,
            transition:
              "color 0.3s ease-in-out, text-decoration 0.3s ease-in-out",
            lineHeight: "1.5", // Increase line spacing
            letterSpacing: "0.1em", // Increase character spacing
          }}
        >
          {text}
        </h1>
      </div>
    </Link>
  );
};
