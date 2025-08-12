"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MobileProjectsManual = ({ active, setActive }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingClose, setPendingClose] = useState(null);

  // Icons from desktop projects
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

  // Projects data from desktop projects (complete dataset)
  const projects = [
    {
      id: 1,
      title: "RSVP System",
      description:
        "This is my largest project by far (15k lines and 78 files). It is a complete reservation management system. The PWA lets you create a dynamic layout for your restaurant; mapping out each chair and table. After that, each of them can be reserved for individual guests from our dashboard or dynamic link which is generated for every restaurant and can be sent out to the guests for them to choose at their convenience. It includes many other features that are too much to list here but can be seen in the demo video.",
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
      ],
      color: "#cf2f97",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "This is my portfolio website kinda Déjà vu seeing the project while being inside the project. Well, I don't know if this text is even making it on there; I am writing this for the future, so who knows? But in this project, I discuss about myself and how I love attending hackathons. These hackathons are the reason I was interested in learning programming and have guided most of my experience. I also talk a bit about my high school experience; currently a grade 11.",
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
          text: "Visit Site",
        },
      ],
      color: "#ED256C",
    },
    {
      id: 3,
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
          text: "NPM Package",
        },
      ],
      color: "#C763F4",
    },
    {
      id: 4,
      title: "Ai-que-cards",
      description:
        "This is one of the hardest projects I have attempted not because contents of the project but because it was made at GDSC Hacks under 24 hours with no sleep. The project itself is a simple masterpiece. To begin it takes in an audio recording (lecture). This audio recording is converted to text and sent to Gemini. Then Gemini is instructed to generate cue cards from the prompt. This process is repeated as a fail-safe just in case Gemini does not return JSON as an answer. Now this is the cool part the question and answer can be interacted with hand gestures. The software uses Media Pipe to detect when certain gestures are being made so closing your fist shows the answer while swiping mid-air should take you to the next question.",
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
          text: "Visit Site",
        },
      ],
      color: "#A396F9",
    },
    {
      id: 5,
      title: "Boom-Box.ai",
      description:
        "Boombox.ai is another one of my hackathon projects. This was also a difficult project for the worst reason. UFT hacks 2023 theme was retro; you can imagine how many ideas you can have with that. But we still persevered through and got this in the end. The entire UI is one massive interactive boom box. So hitting the play and pause button or adjusting the volume sliders is the correct way of interacting with it. But there is a good reason why it is called an AI. It can analyze your face guess your mood and generate a playlist which is connected to your Spotify account so you can play pause and use it from any sort of device.",
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
          text: "Visit Site",
        },
      ],
      color: "#75D8FF",
    },
    {
      id: 6,
      title: "UNI-Sign",
      description:
        "UniSign was inspired by a World War I documentary where we saw how those deafened by explosions struggled to communicate. This motivated us to create a solution to bridge that gap. Our research revealed a lack of tools translating sign language into other languages, leading us to develop UniSign. It uses a RandomForestClassifier with frontend technologies like Next.js, React, and Tailwind. Users capture an image of a hand sign, which the backend processes to predict the corresponding letter. The prediction is then translated into a chosen language using the Google Translate API and displayed, enabling accessible, real-time communication.",
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
          text: "Visit Site",
        },
      ],
      color: "#CF2F97",
    },
    {
      id: 7,
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
          text: "Visit Site",
        },
      ],
      color: "#ED256C",
    },
    {
      id: 8,
      title: "Ecoquest",
      description:
        "Our project was inspired by the realization that society often overlooks the importance of collective action in addressing environmental and social issues. A pivotal moment occurred during a beach meeting where a staff member said, 'One person's actions might not make a difference, but when many people act together, they can create a huge impact.' This idea motivated us to develop a platform that empowers users to contribute to positive change by engaging in sustainable practices aligned with the 17 UN Sustainable Development Goals. Through our app, users can complete tasks, verified by AI, that promote sustainability and earn rewards, knowing their collective efforts can make a significant difference.",
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
          text: "Visit Site",
        },
      ],
      color: "#C763F4",
    },
    {
      id: 9,
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
          text: "Visit Site",
        },
      ],
      color: "#A396F9",
    },
    {
      id: 10,
      title: "Blot",
      description:
        "I created a plotting device that generates a unique flower design just for you, chosen from over 80 million possible variations. Initially intended as a Mother's Day gift, the project became a personal challenge and a return to coding after a two-month break due to school and exams. Building it was a mostly enjoyable experience, though I relied heavily on trial and error and console logs before discovering the documentation for the blot library. Crafting circles was particularly tricky, but it allowed me to refresh my trigonometry skills. Overall, it was a fun and rewarding project, reigniting my passion for coding.",
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
          text: "Visit Site",
        },
      ],
      color: "#75D8FF",
    },
  ];

  // ============================================================================
  // MANUAL CONTROL FUNCTION - IMPLEMENT YOUR LOGIC HERE
  // ============================================================================

  /**
   * Function to manually control which card is expanded
   *
   * @param {number|null} cardId - The ID of the card to expand, or null to close all cards
   *
   * Usage Examples:
   *
   * 1. Open a specific card:
   *    handleCardExpansion(1); // Opens card with ID 1 (RSVP System)
   *    handleCardExpansion(3); // Opens card with ID 3 (Ios-status-bar)
   *
   * 2. Close all cards:
   *    handleCardExpansion(null);
   *
   * 3. Toggle a card (if you want to implement toggle logic):
   *    handleCardExpansion(expandedCard === 1 ? null : 1);
   *
   * 4. Use with your own logic:
   *    // Example: Open card based on scroll position
   *    const scrollY = window.scrollY;
   *    const cardIndex = Math.floor(scrollY / 200);
   *    handleCardExpansion(cardIndex + 1);
   *
   *    // Example: Open card based on intersection observer
   *    useEffect(() => {
   *      const observer = new IntersectionObserver((entries) => {
   *        entries.forEach((entry) => {
   *          if (entry.isIntersecting) {
   *            const cardId = parseInt(entry.target.dataset.cardId);
   *            handleCardExpansion(cardId);
   *          }
   *        });
   *      });
   *      // Observe your cards...
   *    }, []);
   */
  const handleCardExpansion = (cardId) => {
    // Prevent rapid clicking during animations
    if (isAnimating) return;

    if (cardId === null) {
      // Start closing animation
      console.log(
        "Starting close animation for card:",
        expandedCard,
        "- icons will slide left/right with rotation",
      );
      setIsAnimating(true);
      setPendingClose(expandedCard);
      // Delay the actual state change to allow exit animations
      setTimeout(() => {
        console.log(
          "Completing close animation - all elements should have slid away",
        );
        setExpandedCard(null);
        setPendingClose(null);
        setIsAnimating(false);
      }, 700); // Reduced from 800ms to 700ms for better coordination
    } else {
      // Opening animation
      console.log(
        "Starting open animation for card:",
        cardId,
        "- icons will slide in from center",
      );
      setIsAnimating(true);
      setExpandedCard(cardId);
      setTimeout(() => {
        console.log("Completing open animation for card:", cardId);
        setIsAnimating(false);
      }, 600);
    }

    // TODO: Implement your custom logic here
    // This is where you can add:
    // - Scroll-based detection
    // - Time-based animations
    // - User interaction patterns
    // - Analytics tracking
    // - Custom business logic

    // Example of additional logic you might want to add:
    // console.log(`Card ${cardId} is now ${cardId ? 'open' : 'closed'}`);

    // Example: Call analytics
    // analytics.track('card_expanded', { cardId, projectTitle: projects.find(p => p.id === cardId)?.title });

    // Example: Set URL hash
    // if (cardId) {
    //   window.location.hash = `project-${cardId}`;
    // } else {
    //   window.location.hash = '';
    // }
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================

  return (
    <div className="w-full min-h-screen bg-[#0f1419] py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            expandedCard={expandedCard}
            onExpand={handleCardExpansion}
            isAnimating={isAnimating}
            pendingClose={pendingClose}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
  expandedCard,
  onExpand,
  isAnimating,
  pendingClose,
}) => {
  const isExpanded = expandedCard === project.id;
  const isClosing = pendingClose === project.id;

  // Click handler for manual toggle
  const handleCardClick = () => {
    // Prevent clicking during animations or when closing
    if (isAnimating || isClosing) {
      console.log(
        "Click blocked - isAnimating:",
        isAnimating,
        "isClosing:",
        isClosing,
      );
      return;
    }

    if (isExpanded) {
      console.log("Requesting close for card:", project.id);
      onExpand(null); // Close the card
    } else {
      console.log("Requesting open for card:", project.id);
      onExpand(project.id); // Open the card
    }
  };

  const cardVariants = {
    collapsed: {
      height: "120px",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: isClosing ? 0.3 : 0, // Reduced delay for smoother closing
      },
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0, // No delay for closing
      },
    },
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const techIconVariants = {
    collapsed: (iconIndex) => ({
      opacity: 0,
      scale: 0.7,
      x: iconIndex % 2 === 0 ? -60 : 60, // Alternate left/right
      y: 15,
      rotate: iconIndex % 2 === 0 ? -45 : 45, // Rotate as they exit
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
    expanded: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const linkVariants = {
    collapsed: (linkIndex) => ({
      opacity: 0,
      x: linkIndex % 2 === 0 ? -80 : 80, // Alternate left/right with more distance
      scale: 0.85,
      y: 10,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
    expanded: {
      opacity: 1,
      x: 0,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className={`relative bg-[#0a1920] rounded-2xl overflow-hidden shadow-lg border ${
        isAnimating || isClosing ? "cursor-wait" : "cursor-pointer"
      }`}
      variants={cardVariants}
      animate={isExpanded || isClosing ? "expanded" : "collapsed"}
      onClick={handleCardClick}
      data-card-id={project.id} // For potential use in intersection observers
      style={{
        boxShadow: isExpanded
          ? `0 20px 40px ${project.color}20, 0 0 0 1px ${project.color}30`
          : "0 4px 12px rgba(0,0,0,0.3)",
        borderColor: isExpanded
          ? `${project.color}60`
          : "rgba(31, 41, 55, 0.5)",
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
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className="text-lg font-bold truncate mb-1"
            style={{ color: project.color }}
          >
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-tight">
            <span className="line-clamp-2">
              {project.description.substring(0, 80)}...
            </span>
          </p>
        </div>
      </div>

      {/* Expanded state content */}
      <motion.div
        className="px-4 pb-6"
        variants={contentVariants}
        animate={isExpanded && !isClosing ? "expanded" : "collapsed"}
      >
        {(isExpanded || isClosing) && (
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
              <h4 className="text-white font-semibold mb-3 text-sm">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.icons.map((icon, iconIndex) => (
                  <motion.div
                    key={iconIndex}
                    custom={iconIndex}
                    variants={techIconVariants}
                    animate={
                      isExpanded && !isClosing ? "expanded" : "collapsed"
                    }
                    transition={{
                      delay:
                        isExpanded && !isClosing
                          ? iconIndex * 0.08 + 0.3
                          : (project.icons.length - iconIndex - 1) * 0.05,
                      duration: isClosing ? 0.25 : 0.4,
                    }}
                    className="bg-[#1a2634] p-2 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-110"
                  >
                    <img
                      src={icon}
                      alt="Technology"
                      className="w-6 h-6 object-contain"
                    />
                  </motion.div>
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
                      href={link.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={linkIndex}
                      variants={linkVariants}
                      animate={
                        isExpanded && !isClosing ? "expanded" : "collapsed"
                      }
                      transition={{
                        delay:
                          isExpanded && !isClosing
                            ? linkIndex * 0.1 + 0.4
                            : (project.links.filter((l) => l.aval).length -
                                linkIndex -
                                1) *
                              0.06,
                        duration: isClosing ? 0.25 : 0.3,
                      }}
                      className="flex items-center justify-between p-3 bg-[#1a2634] rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()} // Prevent card click when clicking links
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

export default MobileProjectsManual;
