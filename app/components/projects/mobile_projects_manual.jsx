"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

/**
 * MobileProjectsManual Component
 *
 * A responsive mobile project showcase component that displays an interactive
 * list of projects with expandable cards. Each card can be manually controlled
 * and includes smooth animations for opening/closing states.
 *
 * Features:
 * - Expandable project cards with detailed information
 * - Smooth animations for card transitions
 * - Technology stack icons with staggered animations
 * - External links for demos, GitHub repos, and live sites
 * - Manual control system for programmatic card expansion
 * - Scroll-based active index tracking
 * - Auto-scroll to center active card when index changes
 *
 * @param {Object} props - Component props
 * @param {boolean} props.active - Whether the component is currently active
 * @param {Function} props.setActive - Function to set the active state
 */
const MobileProjectsManual = ({ active, setActive }) => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================

  /** Currently expanded card ID (null if none expanded) */
  const [expandedCard, setExpandedCard] = useState(null);

  /** Animation state to prevent rapid interactions */
  const [isAnimating, setIsAnimating] = useState(false);

  /** Card ID that is pending closure (for animation timing) */
  const [pendingClose, setPendingClose] = useState(null);

  /** Currently active card index based on scroll position */
  const [activeIndex, setActiveIndex] = useState(null);

  /** Flag to prevent activeIndex changes during scrolling or animations */
  const [isScrollingOrAnimating, setIsScrollingOrAnimating] = useState(false);

  /** Debounce timer for scroll end detection */
  const scrollDebounceTimer = useRef(null);

  /** Stability timer to prevent rapid activeIndex changes */
  const activeIndexStabilityTimer = useRef(null);

  /** Set to track which cards have been scrolled to and opened */
  const scrolledToCards = useRef(new Set());

  /** Refs array to store references to all project cards */
  const cardRefs = useRef([]);

  /** Container ref for scroll calculations */
  const containerRef = useRef(null);

  // ============================================================================
  // TECHNOLOGY ICONS CONFIGURATION
  // ============================================================================

  /**
   * Icon mapping object for technology stack visualization
   * Maps technology names to their respective logo file paths
   */
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

  // ============================================================================
  // PROJECTS DATA CONFIGURATION
  // ============================================================================

  /**
   * Complete projects dataset containing all project information
   * Each project includes:
   * - id: Unique identifier for the project
   * - title: Project display name
   * - description: Detailed project description
   * - image: Main project screenshot/image
   * - icons: Array of technology icons used
   * - links: Array of external links (demo, GitHub, live site)
   * - color: Primary accent color for the project theme
   */
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
  // SCROLL TO CENTER FUNCTIONALITY
  // ============================================================================

  /**
   * Scrolls to position a specific card at the top of the viewport
   * Uses smooth scrolling with proper offset calculations
   *
   * @param {number} index - Index of the card to center
   */
  const scrollToCard = (index) => {
    if (!cardRefs.current[index]) return;

    // Set scrolling flag to prevent activeIndex changes
    setIsScrollingOrAnimating(true);

    const card = cardRefs.current[index];

    // Get viewport height and card position
    const viewportHeight = window.innerHeight;
    const cardRect = card.getBoundingClientRect();

    // Calculate card position relative to the page
    const cardTop = cardRect.top + window.scrollY;
    const cardHeight = cardRect.height;

    // Calculate scroll position to scroll to top of card
    const targetScrollTop = cardTop;

    // Smooth scroll to the calculated position
    window.scrollTo({
      top: targetScrollTop + 200,
      behavior: "smooth",
    });

    // Clear any existing debounce timer
    if (scrollDebounceTimer.current) {
      clearTimeout(scrollDebounceTimer.current);
    }

    // Set a debounced timer to clear the scrolling flag
    scrollDebounceTimer.current = setTimeout(() => {
      setIsScrollingOrAnimating(false);
    }, 1200);

    console.log(`Scrolling to top of card ${index}:`, {
      cardTop: cardRect.top,
      cardHeight,
      viewportHeight,
      currentScrollY: window.scrollY,
      targetScrollTop,
    });
  };

  // ============================================================================
  // MANUAL CONTROL FUNCTION
  // ============================================================================

  /**
   * Handles manual control of card expansion/collapse with smooth animations
   *
   * This function provides programmatic control over which project card is expanded.
   * It includes proper animation timing to ensure smooth transitions and prevents
   * rapid interactions that could cause animation conflicts.
   *
   * @param {number|null} cardId - The ID of the card to expand, or null to close all cards
   * @param {boolean} isManual - Whether this is a manual user interaction (default: false)
   *
   * Animation Flow:
   * - Opening: Sets animation state → expands card → completes after 600ms
   * - Closing: Sets animation state → triggers exit animations → closes after 900ms
   *
   * Usage Examples:
   *
   * 1. Open a specific card:
   *    handleCardExpansion(1); // Opens RSVP System project
   *    handleCardExpansion(3, true); // Opens Ios-status-bar project manually
   *
   * 2. Close all cards:
   *    handleCardExpansion(null);
   *
   * 3. Toggle functionality:
   *    handleCardExpansion(expandedCard === 1 ? null : 1, true);
   *
   * 4. Integration with scroll events:
   *    const scrollY = window.scrollY;
   *    const cardIndex = Math.floor(scrollY / 200);
   *    handleCardExpansion(cardIndex + 1);
   *
   * 5. Intersection Observer integration:
   *    useEffect(() => {
   *      const observer = new IntersectionObserver((entries) => {
   *        entries.forEach((entry) => {
   *          if (entry.isIntersecting) {
   *            const cardId = parseInt(entry.target.dataset.cardId);
   *            handleCardExpansion(cardId);
   *          }
   *        });
   *      });
   *      // Observe card elements...
   *    }, []);
   */
  const handleCardExpansion = (cardId, isManual = false) => {
    // Prevent rapid clicking during animations to avoid state conflicts
    if (isAnimating && !isManual) return;

    if (cardId === null) {
      // Closing sequence: Start exit animations for all elements
      console.log(
        "Starting close animation for card:",
        expandedCard,
        "- icons will slide left/right with rotation",
      );
      setIsAnimating(true);
      setIsScrollingOrAnimating(true);
      setPendingClose(expandedCard);

      // Extended timeout to allow all exit animations to complete
      // Icons slide out with staggered timing, links fade out, then card collapses
      setTimeout(() => {
        console.log(
          "Completing close animation - all elements should have slid away",
        );
        setExpandedCard(null);
        setPendingClose(null);
        setIsAnimating(false);
        // Keep scrolling flag active a bit longer to prevent immediate reactivation
        setTimeout(() => {
          setIsScrollingOrAnimating(false);
        }, 200);
        // Remove the closed card from scrolled cards set to allow reopening
        if (expandedCard) {
          scrolledToCards.current.delete(expandedCard);
          console.log(
            `Card ${expandedCard} removed from scrolled cards. Can be scrolled to again.`,
          );
        }
      }, 900);
    } else {
      // Opening sequence: Expand card then animate elements in
      console.log(
        "Starting open animation for card:",
        cardId,
        "- icons will slide in from center",
      );
      setIsAnimating(true);
      setIsScrollingOrAnimating(true);
      setExpandedCard(cardId);

      // Shorter timeout as elements animate in after card expansion
      setTimeout(() => {
        console.log("Completing open animation for card:", cardId);
        setIsAnimating(false);
        // Keep scrolling flag active longer to prevent interference during settling
        setTimeout(() => {
          setIsScrollingOrAnimating(false);
        }, 400);
      }, 600);
    }

    // TODO: Add custom logic here for additional functionality
    // Examples:
    // - Analytics tracking: analytics.track('card_expanded', { cardId });
    // - URL hash updates: window.location.hash = cardId ? `project-${cardId}` : '';
    // - State persistence: localStorage.setItem('expandedCard', cardId);
  };

  // ============================================================================
  // EFFECTS AND EVENT HANDLERS
  // ============================================================================

  /**
   * Effect to handle activeIndex changes and trigger card expansion with auto-scroll
   * This creates a connection between scroll-based detection and card expansion
   * Auto-scrolls only on initial load, then allows free scrolling
   * Includes debouncing to prevent rapid changes
   */
  useEffect(() => {
    if (activeIndex !== null && !isScrollingOrAnimating && !isAnimating) {
      // Clear any existing stability timer
      if (activeIndexStabilityTimer.current) {
        clearTimeout(activeIndexStabilityTimer.current);
      }

      // Add a small delay to ensure stable selection
      activeIndexStabilityTimer.current = setTimeout(() => {
        console.log("Active index changed to:", activeIndex);

        const cardId = projects[activeIndex]?.id;

        // Only auto-scroll and expand if this card hasn't been scrolled to before
        // OR if it was previously expanded but is now collapsed (allowing reopening)
        if (
          cardId &&
          (!scrolledToCards.current.has(cardId) || expandedCard !== cardId)
        ) {
          // Mark this card as having been scrolled to
          scrolledToCards.current.add(cardId);
          console.log(
            `Scrolling to card ${cardId}. Scrolled cards:`,
            Array.from(scrolledToCards.current),
          );

          // Scroll to center the active card
          scrollToCard(activeIndex);

          // Expand the card
          handleCardExpansion(cardId, false); // Auto expansion
        } else {
          console.log(
            `Skipping scroll to card ${cardId} - already scrolled to. Current expanded: ${expandedCard}`,
          );
        }
      }, 300); // Small delay for stability
    }

    return () => {
      if (activeIndexStabilityTimer.current) {
        clearTimeout(activeIndexStabilityTimer.current);
      }
    };
  }, [activeIndex, isScrollingOrAnimating, isAnimating]);

  /**
   * Effect to initialize card refs array and set up global scroll detection
   * Ensures we have refs for all project cards
   */
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, projects.length);

    // Global scroll event listener for better scroll end detection
    const handleGlobalScroll = () => {
      // Clear any existing timer
      if (scrollDebounceTimer.current) {
        clearTimeout(scrollDebounceTimer.current);
      }

      // Set a debounced timer to clear scrolling flag when scroll ends
      scrollDebounceTimer.current = setTimeout(() => {
        setIsScrollingOrAnimating(false);
      }, 200);
    };

    window.addEventListener("scroll", handleGlobalScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
      if (scrollDebounceTimer.current) {
        clearTimeout(scrollDebounceTimer.current);
      }
      if (activeIndexStabilityTimer.current) {
        clearTimeout(activeIndexStabilityTimer.current);
      }
    };
  }, [projects.length]);

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#0f1419] py-8 px-4"
    >
      <div className="max-w-md mx-auto space-y-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            project={project}
            index={index}
            expandedCard={expandedCard}
            onExpand={handleCardExpansion}
            isAnimating={isAnimating}
            pendingClose={pendingClose}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isScrollingOrAnimating={isScrollingOrAnimating}
            scrolledToCards={scrolledToCards}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * ProjectCard Component
 *
 * Individual project card component that handles its own animations and interactions.
 * Features expandable content with smooth transitions, technology stack display,
 * and external links.
 *
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 * @param {number} props.index - Card index in the list
 * @param {number|null} props.expandedCard - Currently expanded card ID
 * @param {Function} props.onExpand - Function to handle card expansion
 * @param {boolean} props.isAnimating - Whether animations are in progress
 * @param {number|null} props.pendingClose - Card ID pending closure
 * @param {number|null} props.activeIndex - Currently active card index
 * @param {Function} props.setActiveIndex - Function to set active index
 * @param {boolean} props.isScrollingOrAnimating - Whether scrolling or animations are in progress
 */
const ProjectCard = React.forwardRef(
  (
    {
      project,
      index,
      expandedCard,
      onExpand,
      isAnimating,
      pendingClose,
      activeIndex,
      setActiveIndex,
      isScrollingOrAnimating,
      scrolledToCards,
    },
    ref,
  ) => {
    // ============================================================================
    // COMPONENT STATE
    // ============================================================================

    /** Whether this card is currently expanded */
    const isExpanded = expandedCard === project.id;

    /** Whether this card is in the process of closing */
    const isClosing = pendingClose === project.id;

    /** Current scroll position for this card */
    const [scrollPos, setScrollPos] = useState(0);

    // ============================================================================
    // EVENT HANDLERS
    // ============================================================================

    /**
     * Handles card click events for manual toggle functionality
     * Works with the scrolled cards tracking system
     */
    const handleCardClick = () => {
      // Allow manual interactions with minimal blocking
      if (isClosing) {
        console.log("Click blocked - card is closing");
        return;
      }

      // Toggle card state: close if expanded, open if collapsed
      if (isExpanded) {
        console.log("Requesting manual close for card:", project.id);
        onExpand(null, true); // Manual interaction
      } else {
        console.log("Requesting manual open for card:", project.id);
        onExpand(project.id, true); // Manual interaction
      }
    };

    // ============================================================================
    // ANIMATION VARIANTS
    // ============================================================================

    /**
     * Card container animation variants
     * Controls the overall card height during expand/collapse
     */
    const cardVariants = {
      collapsed: {
        height: "120px",
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: isClosing ? 0.4 : 0, // Allow element animations to complete first
        },
      },
      expanded: {
        height: "auto",
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };

    /**
     * Content area animation variants
     * Controls the expanded content visibility and position
     */
    const contentVariants = {
      collapsed: {
        opacity: 0,
        y: 20,
        transition: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: isClosing ? 0.5 : 0, // Delay to let child elements animate out
        },
      },
      expanded: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2, // Wait for card expansion to start
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };

    // ============================================================================
    // SCROLL DETECTION SETUP
    // ============================================================================

    /** Internal ref for scroll detection on this card */
    const internalRef = useRef(null);

    /** Scroll progress for this card using Framer Motion's useScroll */
    const { scrollYProgress } = useScroll({
      target: internalRef,
      offset: ["start center", "end center"],
    });

    /** Container height for scroll calculations */
    const [containerHeight, setContainerHeight] = useState(0);

    /**
     * Effect to handle scroll-based active index detection
     * Updates the active index when this card comes into view
     */
    useEffect(() => {
      // Set initial container height
      if (internalRef.current) {
        setContainerHeight(internalRef.current.offsetHeight);
      }

      // Use throttled scroll detection with better performance
      let lastCheckTime = 0;
      let stableCount = 0; // Counter for stable position detection
      let lastCenteredIndex = null; // Track last centered card to prevent flicker
      const throttleDelay = 150; // Optimized throttle delay
      const stabilityThreshold = 2; // Require 2 stable checks before updating

      const checkCardPosition = () => {
        const now = Date.now();
        if (now - lastCheckTime < throttleDelay) return;
        lastCheckTime = now;

        const currentScrollPos = scrollYProgress.get();
        setScrollPos(currentScrollPos);

        // Enhanced conditions to prevent unwanted activeIndex changes
        if (
          internalRef.current &&
          !isAnimating &&
          !isExpanded &&
          !isClosing &&
          !pendingClose
        ) {
          const rect = internalRef.current.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const cardCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(viewportCenter - cardCenter);

          // More strict centering requirements
          const threshold = Math.min(rect.height * 0.25, 50); // Even smaller threshold

          // Check if card is centered and stable
          const isCentered =
            distanceFromCenter < threshold &&
            rect.top < viewportCenter + 25 && // Optimized buffer
            rect.bottom > viewportCenter - 25 &&
            activeIndex !== index;

          if (isCentered && lastCenteredIndex === index) {
            stableCount++;
            // Only update after multiple stable checks of the same card
            if (stableCount >= stabilityThreshold) {
              setActiveIndex(index);
              stableCount = 0;
              lastCenteredIndex = null;
            }
          } else if (isCentered) {
            lastCenteredIndex = index;
            stableCount = 1; // Start counting for this card
          } else {
            stableCount = 0;
            lastCenteredIndex = null; // Reset if not centered
          }
        } else {
          stableCount = 0;
          lastCenteredIndex = null; // Reset during animations
        }
      };

      const intervalId = setInterval(checkCardPosition, throttleDelay);

      return () => clearInterval(intervalId);
    }, [
      scrollYProgress,
      index,
      setActiveIndex,
      isAnimating,
      isExpanded,
      isClosing,
      activeIndex,
      pendingClose,
    ]);

    /**
     * Combined ref handler to support both forwarded ref and internal ref
     */
    const setRefs = (element) => {
      internalRef.current = element;
      if (ref) {
        if (typeof ref === "function") {
          ref(element);
        } else {
          ref.current = element;
        }
      }
    };

    // ============================================================================
    // COMPONENT RENDER
    // ============================================================================

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
          // Dynamic shadow and border based on expansion state
          boxShadow: isExpanded
            ? `0 20px 40px ${project.color}20, 0 0 0 1px ${project.color}30`
            : "0 4px 12px rgba(0,0,0,0.3)",
          borderColor: isExpanded
            ? `${project.color}60`
            : "rgba(31, 41, 55, 0.5)",
        }}
        key={index}
        ref={setRefs}
      >
        {/* Accent border - colored top border for visual hierarchy */}
        <div
          className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
          style={{ backgroundColor: project.color }}
        />

        {/* ========================================================================
          COLLAPSED STATE CONTENT
          Always visible - shows basic project info in compact form
      ======================================================================== */}
        <div className="p-4 flex items-center space-x-4 h-[120px]">
          {/* Project thumbnail image */}
          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Basic project information */}
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
            {/* Active indicator */}
            {activeIndex === index && !isExpanded && (
              <div
                className="mt-1 w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: project.color }}
              ></div>
            )}
          </div>
        </div>

        {/* ========================================================================
          EXPANDED STATE CONTENT
          Only visible when card is expanded - shows detailed information
      ======================================================================== */}
        <motion.div
          className="px-4 pb-6"
          variants={contentVariants}
          animate={isExpanded && !isClosing ? "expanded" : "collapsed"}
        >
          {(isExpanded || isClosing) && (
            <>
              {/* Full-size project image */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 -mt-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Complete project description */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technology stack with animated icons */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-sm">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.icons.map((icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={
                        isExpanded && !isClosing
                          ? {
                              // Enter animation: slide in from center with stagger
                              opacity: 1,
                              scale: 1,
                              x: 0,
                              y: 0,
                              rotate: 0,
                              transition: {
                                delay: iconIndex * 0.08 + 0.3, // Staggered entrance
                                duration: 0.3,
                                ease: [0.25, 0.46, 0.45, 0.94],
                              },
                            }
                          : {
                              // Exit animation: slide out alternating directions with rotation
                              opacity: 0,
                              scale: 0.7,
                              x: iconIndex % 2 === 0 ? -60 : 60, // Alternate left/right
                              y: 15,
                              rotate: iconIndex % 2 === 0 ? -45 : 45, // Rotate while sliding
                              transition: {
                                delay: isClosing
                                  ? (project.icons.length - iconIndex - 1) *
                                    0.06 // Reverse stagger
                                  : 0,
                                duration: 0.4,
                                ease: [0.25, 0.46, 0.45, 0.94],
                              },
                            }
                      }
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

              {/* External links with animations */}
              <div className="space-y-3">
                {project.links.map((link, linkIndex) => {
                  // Only render available links
                  if (link.aval) {
                    return (
                      <motion.a
                        key={linkIndex}
                        href={link.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isExpanded && !isClosing
                            ? {
                                // Enter animation: slide in from left with stagger
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                transition: {
                                  delay: linkIndex * 0.1 + 0.4, // Staggered after icons
                                  duration: 0.3,
                                  ease: [0.25, 0.46, 0.45, 0.94],
                                },
                              }
                            : {
                                // Exit animation: slide out alternating directions
                                opacity: 0,
                                x: linkIndex % 2 === 0 ? -80 : 80,
                                scale: 0.9,
                                transition: {
                                  delay: isClosing
                                    ? (project.links.filter((l) => l.aval)
                                        .length -
                                        linkIndex -
                                        1) *
                                      0.08 // Reverse stagger
                                    : 0,
                                  duration: 0.35,
                                  ease: [0.25, 0.46, 0.45, 0.94],
                                },
                              }
                        }
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
                        {/* External link icon */}
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
  },
);

// Set display name for debugging
ProjectCard.displayName = "ProjectCard";

// ============================================================================
// COMPONENT EXPORTS
// ============================================================================

export default MobileProjectsManual;
