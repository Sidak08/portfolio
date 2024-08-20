"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Sarpanch } from "next/font/google";
import styles from "./projects.module.css";
import localFont from "next/font/local";
import Image from "next/image";

const filledText = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

const sarpanch = Sarpanch({ subsets: ["latin"], weight: "400" });

export default function Projects({ active, setActive }) {
  const icons = {
    adobe: "/logos/adobe.png",
    amplify: "/logos/amplify.png",
    auth0: "/logos/auth0.png",
    aws: "/logos/aws.png",
    chatGpt: "/logos/chatGpt.png",
    expo: "/logos/expo.png",
    gemeni: "/logos/gemeni.png",
    git: "/logos/git.png",
    insomnia: "/logos/insomnia.png",
    js: "/logos/js.png",
    materialUi: "/logos/materialUi.png",
    mongoDb: "/logos/mongoDb.png",
    mySql: "/logos/mySql.png",
    near: "/logos/near.png",
    nextJs: "/logos/nextJs.png",
    nodeJs: "/logos/nodeJs.png",
    npm: "/logos/npm.png",
    puppeteer: "/logos/puppeteer.png",
    python: "/logos/python.png",
    react: "/logos/react.png",
    stripe: "/logos/stripe.png",
    tailwind: "/logos/tailwind.png",
    tensorflow: "/logos/tensorflow.png",
    threeJs: "/logos/threeJs.png",
    ts: "/logos/ts.png",
    vercel: "/logos/vercel.png",
  };
  const projects = [
    {
      title: "RSVP System",
      description:
        "This is my largest project by far (15k lines and 78 files). It is a complete reservation management system. The PWA lets you create a dynamic layout for your restaurant; mapping out each chair and table. After that, each of them can be reserved for individual guests from our dashboard or dynamic link which is generated for every restaurant and can be sent out to the guests for them to choose at their convenience. It includes many other features that are too much to list here but can be seen in the demo video. ",
      image: "/project_images/rsvp-sys.png",
      icons: [
        icons.js,
        icons.mongoDb,
        icons.next,
        icons.tailwind,
        icons.react,
        icons.stripe,
        icons.git,
        icons.npm,
        icons.insomnia,
        icons.vercel,
      ],
      links: [
        {
          aval: true,
          type: "video",
          icons: "./project_logos/youtube",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "./project_logos/github",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "./project_logos/external_link",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: true,
          type: "figma",
          icons: "./project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#cf2f97",
    },
  ];
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
      <div className="w-full min-h-screen bg-[#0A0F13] flex flex-col items-center justify-evenly">
        <div className="w-full h-[50px]">
          <h1 className={`${styles.hollowText} ml-20`}>Projects</h1>
        </div>
        <Project info={projects[0]} />
      </div>
    </section>
  );
}

const Project = ({ info }) => {
  console.log(`shadow-[-10px_-10px_2_0_${info.color}]`);
  // shadow-[-10px_-10px_2_0_${info.color}] shadow-[25px_25px_0_0_#7DCDFD] shadow-[-10px_-10px_2_0_#CF297]
  return (
    <div
      className={`shadow-[-10px_-10px_0_0_${info.color}]  bg-[#0a1920] rounded-xl w-[90%] min-h-[460px] flex flex-col items-center justify-evenly `}
    >
      <div
        className={`w-full ml-16 color-[${info.color}]  text-[3.125rem] leading-[normal] ${filledText.className}`}
        style={{ color: info.color }}
      >
        <h5>{info.title}</h5>
      </div>
      <div className="flex items-center justify-evenly">
        <Image src={info.image} width={500} height={350} alt={info.title} />
        <h4
          className={`w-[50%] text-white text-[1.375rem] leading-[1.8] ${sarpanch.className}`}
        >
          {info.description}
        </h4>
      </div>
    </div>
  );
};

import React from "react";