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

export default function DesktopProjects({ active, setActive }) {
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
    mediaPipe: "/logos/mediaPipe.png",
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
        icons.nextJs,
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
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#cf2f97",
    },
    {
      title: "Portfolio",
      description:
        "This is my portfolio website kinda Déjà vu seeing the project while being inside the project. Well, I don't know if this text is even making it on there; I am writing this for the future, so who knows? But in this project, I discuss about myself and how I love attending hackathons. These hackathons are the reason I was interested in learning programming and have guided most of my experience. I also talk a bit about my high school experience; currently a grade 11. ",
      image: "/project_images/portfolio.png",
      icons: [
        icons.js,
        icons.nextJs,
        icons.tailwind,
        icons.react,
        icons.git,
        icons.npm,
        icons.vercel,
      ],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#ED256C",
    },
    {
      title: "Ios-status-bar",
      description:
        "IOS-Status-Bar is the first npm package I created. It all started like many projects—after spending 6.5 hours on Google, trying to figure out how to edit the status bar on an iPhone when using Expo. This part of the screen is usually restricted, but I discovered a few workarounds. None of the tutorials I found actually worked, but I managed to find an exploit that did. Initially, I thought about keeping it as a local package, but I decided to try something new and publish it. The result? The package has been downloaded over 1,000 times, helping many others solve the same issue.",
      image: "/project_images/ios-status-bar.png",
      icons: [icons.js, icons.react, icons.git, icons.npm, icons.expo],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#C763F4",
    },
    {
      title: "Ai-que-cards",
      description:
        "This is one of the hardest projects I have attempted not because contents of the project but because it was made at GDSC Hacks under 24 hours with no sleep. The project itself is a simple masterpiece. To begin it takes in an audio recording (lecture). This audio recording is converted to text and sent to Gemini. Then Gemini is instructed to generate cue cards from the prompt. This process is repeated as a fail-safe just in case Gemini does not return JSON as an answer. Now this is the cool part the question and answer can be interacted with hand gestures. The software uses Media Pipe to detect when certain gestures are being made so closing your fist shows the answer while swiping mid-air should take you to the next question. ",
      image: "/project_images/ai-que-cards.png",
      icons: [
        icons.js,
        icons.react,
        icons.git,
        icons.mediaPipe,
        icons.npm,
        icons.nextJs,
        icons.vercel,
        icons.expo,
      ],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#A396F9",
    },
    {
      title: "Boom-Box.ai",
      description:
        "Boombox.ai is another one of my hackathon projects. This was also a difficult project for the worst reason. UFT hacks 2023 theme was retro; you can imagine how many ideas you can have with that. But we still persevered through and got this in the end. The entire UI is one massive interactive boom box. So hitting the play and pause button or adjusting the volume sliders is the correct way of interacting with it. But there is a good reason why it is called an AI. It can analyze your face guess your mood and generate a playlist which is connected to your Spotify account so you can play pause and use it from any sort of device. ",
      image: "/project_images/boombox.png",
      icons: [
        icons.js,
        icons.react,
        icons.git,
        icons.mediaPipe,
        icons.nodeJs,
        icons.tensorflow,
        icons.npm,
      ],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#75D8FF",
    },
    {
      title: "UNI-Sign",
      description:
        "UniSign was inspired by a World War I documentary we watched in history class, where we saw how those deafened by explosions struggled to communicate. Moved by this, we sought to create a solution that could bridge this communication gap. Our research revealed a lack of tools that directly translate sign language into other languages, which motivated us to develop UniSign—a translator that converts sign language into multiple spoken languages. UniSign integrates machine learning, using a RandomForestClassifier, with frontend technologies like Next.js, React, and Tailwind. The process starts with the user capturing an image of a hand sign, which the backend processes to predict the corresponding letter in sign language. The prediction is then translated into a chosen language using the Google Translate API and displayed on the screen, making UniSign a powerful tool for accessible, real-time communication.",
      image: "/project_images/uni-sign.png",
      icons: [
        icons.js,
        icons.react,
        icons.git,
        icons.mediaPipe,
        icons.nodeJs,
        icons.tensorflow,
        icons.npm,
      ],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#CF2F97",
    },
    {
      title: "Predicturf",
      description:
        "Inspired by the natural link between crypto and betting, we created PredicTurf to offer a safe, reliable app that combines both. Users log in, link their Near wallet, and access a dashboard with match predictions powered by a custom machine-learning model, a leaderboard, and betting options. Unique features include custom betting amounts and NFT stickers generated by GPT-4, stored in an Adobe Express-linked wallet. Despite challenges like implementing Near's wallet and training the model, we expanded our skills in APIs and cloud services. We plan to improve by adding more betting options, enhancing the machine learning model, and fully developing the NFT wallet.",
      image: "/project_images/predicturf.png",
      icons: [
        icons.js,
        icons.react,
        icons.git,
        icons.tensorflow,
        icons.npm,
        icons.near,
        icons.chatGpt,
        icons.adobe,
      ],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#ED256C",
    },
    {
      title: "Ecoquest",
      description:
        "Our project was inspired by the realization that society often overlooks the importance of collective action in addressing environmental and social issues. A pivotal moment occurred during a beach meeting where a staff member said, “One person’s actions might not make a difference, but when many people act together, they can create a huge impact.” This idea motivated us to develop a platform that empowers users to contribute to positive change by engaging in sustainable practices aligned with the 17 UN Sustainable Development Goals. Through our app, users can complete tasks, verified by AI, that promote sustainability and earn rewards, knowing their collective efforts can make a significant difference.",
      image: "/project_images/eco-quest.png",
      icons: [
        icons.js,
        icons.react,
        icons.git,
        icons.npm,
        icons.tensorflow,
        icons.gemeni,
        icons.expo,
      ],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#C763F4",
    },
    {
      title: "Sprig",
      description:
        'Sprig is a custom console I built using a Raspberry Pi Pico, designed to host a simple yet challenging game focused on survival. In the game, you navigate by altering the direction of gravity—pressing "W" causes you to fall upwards, while "S" makes you fall downwards. The objective is to survive as long as possible by landing on moving platforms that prevent you from falling into the void. The game ends if you either fall into the void or collide with a block, making it a test of quick reflexes and timing.',
      image: "/project_images/sprig.png",
      icons: [icons.js, icons.git, icons.npm],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#A396F9",
    },
    {
      title: "Blot",
      description:
        "I created a plotting device that generates a unique flower design just for you, chosen from over 80 million possible variations. Initially intended as a Mother’s Day gift, the project became a personal challenge and a return to coding after a two-month break due to school and exams. Building it was a mostly enjoyable experience, though I relied heavily on trial and error and console logs before discovering the documentation for the blot library. Crafting circles was particularly tricky, but it allowed me to refresh my trigonometry skills. Overall, it was a fun and rewarding project, reigniting my passion for coding.",
      image: "/project_images/blot.png",
      icons: [icons.js, icons.git, icons.npm],
      links: [
        {
          aval: true,
          type: "video",
          icons: "/project_logos/youtube.png",
          link: "",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "",
          text: "bestseat.study",
        },
        {
          aval: false,
          type: "figma",
          icons: "/project_logos/figma",
          link: "",
          text: "figma",
        },
      ],
      color: "#75D8FF",
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
        className="absolute top-[10%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>
      <div className="w-full min-h-screen bg-[#0A0F13] flex flex-col items-center justify-evenly">
        <div className="w-full h-[50px] mb-20">
          <h1 className={`${styles.hollowText} ml-20`}>Projects</h1>
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
      className="w-[90%] max-w-[1500px] flex items-start justify-around my-10 min-h-[470px] h-auto"
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
          className="py-6 bg-[#0a1920] rounded-xl w-full min-h-[470px] flex flex-col items-center justify-evenly"
        >
          <div
            className={`w-full ml-16 mb-6 text-[3.125rem] leading-[normal] ${filledText.className}`}
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
          <div className="flex items-center justify-between mx-8 w-full mt-8">
            <div
              className={`flex items-center justify-evenly`}
              style={{ minWidth: `${info.icons.length * 70}px` }}
            >
              {info.icons.map((icon, index) => (
                <img src={icon} className="h-[35px]" key={index} />
              ))}
            </div>
            <div className="flex items-center justify-evenly w-[50%]">
              {info.links.map((link, index) => {
                if (link.aval) {
                  return (
                    <a href={link.link} key={index} className="flex items-end">
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
