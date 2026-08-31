"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Sarpanch } from "next/font/google";
import styles from "./projects.module.css";
import { icons, projects } from "./projectsData";
import localFont from "next/font/local";
import Image from "next/image";

const filledText = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

const outlineText = localFont({
  src: "../.././fonts/saiba-45.woff2",
  display: "swap",
});

const sarpanch = Sarpanch({ subsets: ["latin"], weight: "400" });

const renderEmphasis = (text) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );

export default function DesktopProjects({ active, setActive }) {
  return (
    <section id="projects" className={`relative ${sarpanch.className} `}>
      <motion.div
        whileInView={() => {
          if (active !== "projects") {
            setActive((pre) => "projects");
          }
        }}
        className="absolute top-[10%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>
      <div className="w-full min-h-screen bg-[#0A0F13] flex flex-col items-center justify-evenly">
        <div className="w-full h-[50px] mb-20 pt-24">
          <h1 className={`${outlineText.className} ${styles.hollowText} ml-20`}>
            Projects
          </h1>
        </div>
        {projects.map((project, index) =>
          Project({ info: project, key: index }),
        )}
      </div>
    </section>
  );
}

const Project = ({ info, key }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const [scrollPos, setScrollPos] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    // Get the height of the container once the component mounts
    if (ref.current) {
      setContainerHeight(ref.current.offsetHeight);
    }

    const intervalId = setInterval(() => {
      setScrollPos(scrollYProgress.get());
    }, 10);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [scrollYProgress]);

  return (
    <div
      className="w-[95%] max-w-[1600px] flex items-start justify-around my-10 min-h-[470px] h-auto"
      key={key}
    >
      <div
        className="min-w-[12px] rounded-xl -mr-[2px]"
        style={{
          height: `${Math.min(containerHeight * scrollPos * 1.4, containerHeight - containerHeight * 0.1)}px`, // Multiply the container height by 0.5 as an example
          backgroundColor: info.color,
        }}
      />
      <div className="w-full">
        <div
          className="h-[12px] rounded-l-xl -ml-[4px] rounded-r-xl -mb-[2px]"
          style={{
            width: `${Math.min(scrollPos * 140, 98)}%`,
            backgroundColor: info.color,
          }}
        />
        <div
          ref={ref}
          className="py-8 px-8 bg-[#0a1920] rounded-xl w-full min-h-[500px] flex flex-col items-center justify-evenly"
        >
          <div
            className={`w-full px-4 ml-12 mb-6 text-[3.125rem] leading-[normal] ${filledText.className}`}
            style={{ color: info.color }}
          >
            <h5>{info.title}</h5>
          </div>
          <div className="flex items-start justify-evenly px-4 gap-12 w-full">
            <div className="flex-shrink-0">
              <Image
                src={info.image}
                width={500}
                height={350}
                alt={info.title}
              />
            </div>
            <div className="flex-1 max-w-[600px] pr-6">
              <ul
                className={`list-disc space-y-3 pl-6 text-white text-[1.375rem] leading-[1.8] ${sarpanch.className} break-words`}
              >
                {info.description.map((point) => (
                  <li key={point}>{renderEmphasis(point)}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between px-8 w-full mt-8 min-h-[60px]">
            <div
              className={`flex items-center justify-evenly`}
              style={{ minWidth: `${info.icons.length * 70}px` }}
            >
              {info.icons.map((icon, index) => (
                <img src={icon} className="h-[35px]" key={index} />
              ))}
            </div>
            <div className="flex items-center justify-end w-[50%] space-x-8 pr-4">
              {info.links.map((link, index) => {
                if (link.aval) {
                  return (
                    <a
                      href={link.link}
                      key={index}
                      className="flex items-end whitespace-nowrap"
                    >
                      <img src={link.icons} className="h-[30px] mr-5" />
                      <h3 className="text-white text-[25px] font-normal underline">
                        {link.text}
                      </h3>
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
