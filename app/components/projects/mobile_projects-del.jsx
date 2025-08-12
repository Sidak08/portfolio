"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import useCenterDetection from "./useCenterDetection";
import styles from "./mobile_projects.module.css";

const MobileProjects = ({ active, setActive }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const containerRef = useRef(null);

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
      id: 1,
      title: "RSVP System",
      description:
        "This is my largest project by far (15k lines and 78 files). It is a complete reservation management system. The PWA lets you create a dynamic layout for your restaurant; mapping out each chair and table. After that, each of them can be reserved for individual guests from our dashboard or dynamic link which is generated for every restaurant and can be sent out to the guests for them to choose at their convenience.",
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
          link: "https://youtube.com/demo",
          text: "Demo",
        },
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "https://github.com/project",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "https://bestseat.study",
          text: "Visit Site",
        },
      ],
      color: "#cf2f97",
    },
    {
      id: 2,
      title: "AI Que Cards",
      description:
        "An innovative AI-powered question and answer card system that helps users learn and study more effectively. Features smart card generation, spaced repetition, and personalized learning paths.",
      image: "/project_images/ai-que-cards.png",
      icons: [
        icons.react,
        icons.nodeJs,
        icons.chatGpt,
        icons.tailwind,
        icons.js,
        icons.git,
      ],
      links: [
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "https://github.com/ai-que-cards",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "https://ai-que-cards.com",
          text: "Visit Site",
        },
      ],
      color: "#4ade80",
    },
    {
      id: 3,
      title: "EcoQuest",
      description:
        "An environmental awareness game platform that gamifies sustainability actions. Users complete eco-friendly challenges, track their environmental impact, and compete with friends to build better habits.",
      image: "/project_images/eco-quest.png",
      icons: [
        icons.nextJs,
        icons.react,
        icons.mongoDb,
        icons.tailwind,
        icons.vercel,
        icons.git,
      ],
      links: [
        {
          aval: true,
          type: "github",
          icons: "/project_logos/github.png",
          link: "https://github.com/ecoquest-project",
          text: "Github",
        },
        {
          aval: true,
          type: "website",
          icons: "/project_logos/external_link.png",
          link: "https://ecoquest-demo.com",
          text: "Visit Site",
        },
      ],
      color: "#10b981",
    },
  ];

  return (
    <div
      className={`w-full min-h-screen bg-[#0f1419] py-8 px-4 ${styles.mobileProjectsContainer}`}
    >
      <div className="max-w-md mx-auto space-y-6" ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, expandedCard, setExpandedCard }) => {
  const [cardRef, isInCenter] = useCenterDetection(0.7);
  const isExpanded = expandedCard === project.id;

  useEffect(() => {
    if (isInCenter && !isExpanded) {
      setExpandedCard(project.id);
    }
  }, [isInCenter, project.id, setExpandedCard, isExpanded]);

  const cardVariants = {
    collapsed: {
      height: "120px",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const imageVariants = {
    collapsed: {
      scale: 0.8,
      opacity: 0.7,
      transition: {
        duration: 0.4,
      },
    },
    expanded: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${styles.glassEffect} rounded-2xl overflow-hidden shadow-lg ${styles.projectCard} ${styles.cardExpanding} ${isInCenter ? styles.cardGlow + " " + styles.pulseCenter : ""}`}
      variants={cardVariants}
      animate={isExpanded ? "expanded" : "collapsed"}
      style={{
        "--accent-color": project.color,
        "--accent-rgb": project.color
          .replace("#", "")
          .match(/.{2}/g)
          .map((x) => parseInt(x, 16))
          .join(","),
        boxShadow: isExpanded
          ? `0 20px 40px ${project.color}20, 0 0 0 1px ${project.color}30`
          : "0 4px 12px rgba(0,0,0,0.3)",
        border: isInCenter
          ? `1px solid ${project.color}60`
          : "1px solid rgba(31, 41, 55, 0.5)",
      }}
    >
      {/* Accent border */}
      <div
        className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
        style={{ backgroundColor: project.color }}
      />

      {/* Collapsed state content */}
      <div className="p-4 flex items-center space-x-4 h-[120px]">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
          <motion.div
            variants={imageVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg font-bold truncate mb-1 ${styles.projectTitle} ${isExpanded ? styles.gradientText : ""}`}
            style={{ color: project.color }}
          >
            {project.title}
          </h3>
          <p
            className={`text-gray-400 text-sm ${styles.lineClamp2} ${styles.projectDescription}`}
          >
            {project.description.substring(0, 80)}...
          </p>
        </div>
      </div>

      {/* Expanded state content */}
      <motion.div
        className="px-4 pb-6"
        variants={contentVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        {isExpanded && (
          <>
            {/* Full image */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 -mt-2">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies used */}
            <div className="mb-6">
              <div
                className={`${styles.textReveal} ${isExpanded ? styles.textRevealActive : ""}`}
              >
                <h4
                  className={`text-white font-semibold mb-3 text-sm ${styles.textRevealInner}`}
                >
                  Technologies Used:
                </h4>
              </div>
              <div
                className={`${styles.techIcons} ${isExpanded ? styles.techIconsAnimate : ""}`}
              >
                {project.icons.map((icon, iconIndex) => (
                  <div
                    key={iconIndex}
                    className={`${styles.techIcon} bg-[#1a2634] p-2 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-110`}
                  >
                    <img
                      src={icon}
                      alt="Technology"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              {project.links.map((link, linkIndex) => {
                if (link.aval) {
                  return (
                    <motion.a
                      key={linkIndex}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-3 bg-[#1a2634] rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group ${styles.projectLink}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        boxShadow: `0 0 0 1px ${project.color}20`,
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={link.icons}
                          alt={link.type}
                          className="w-5 h-5"
                        />
                        <span className="text-white font-medium text-sm">
                          {link.text}
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  );
                }
                return null;
              })}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MobileProjects;
