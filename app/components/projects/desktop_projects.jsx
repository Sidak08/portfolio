"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Sarpanch } from "next/font/google";
const sarpanch = Sarpanch({ subsets: ["latin"], weight: "400" });
import styles from "./projects.module.css";

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
      <div className="w-full min-h-screen bg-[#0A0F13] flex flex-col items-center justify-between">
        <div className="w-full h-[50px]">
          <h1 className={`${styles.hollowText} ml-20`}>Projects</h1>
        </div>
      </div>
    </section>
  );
}

const Project = ({ title, description, image, icons, links }) => {};
