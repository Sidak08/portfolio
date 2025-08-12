"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { icons, projects } from "./projectsData";

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

  // Icons and projects data are now imported from shared projectsData.js file

  // ============================================================================
  // SCROLL TO CENTER FUNCTIONALITY
  // ============================================================================

  /**
   * Scrolls to position a specific card at the top of the viewport
   * Uses smooth scrolling with proper offset calculations
   *
   * @param {number} index - Index of the card to position at top
   */
  const scrollToCard = (index) => {
    console.log("🔥 scrollToCard called with index:", index);

    if (!cardRefs.current[index]) {
      console.log("❌ No card ref found for index:", index);
      return;
    }

    console.log("✅ Card ref found, proceeding with scroll");

    // Set scrolling flag to prevent activeIndex changes
    setIsScrollingOrAnimating(true);

    const card = cardRefs.current[index];

    // Get viewport height and card position
    const viewportHeight = window.innerHeight;
    const cardRect = card.getBoundingClientRect();

    // Calculate card position relative to the page
    const cardTop = cardRect.top + window.scrollY;
    const cardHeight = cardRect.height;

    console.log("📐 Scrolling measurements:", {
      cardTop: cardTop,
      targetScrollTop: cardTop - 20,
      currentScrollY: window.scrollY,
    });

    // Calculate scroll position to position card at top of viewport with 40px padding
    let targetScrollTop = cardTop - 20;

    console.log("🎯 Initial target scroll position:", targetScrollTop);

    // Safety checks for page boundaries
    const documentHeight = document.documentElement.scrollHeight;
    const maxScrollTop = documentHeight - viewportHeight;

    // Ensure we don't scroll to negative positions
    targetScrollTop = Math.max(0, targetScrollTop);

    // Ensure we don't scroll past the bottom of the page
    targetScrollTop = Math.min(maxScrollTop, targetScrollTop);

    console.log("⚖️ Final scroll target:", targetScrollTop);

    // For large cards that exceed viewport height, prioritize showing the top
    // with 40px margin rather than trying to fit the entire card
    console.log("📏 Card dimensions check:", {
      cardHeight: cardHeight,
      viewportHeight: viewportHeight,
      isCardLargerThanViewport: cardHeight > viewportHeight - 80, // Account for margins
    });

    // Only adjust position if we would scroll past document boundaries
    // Always prioritize showing the top of the card with proper margin

    console.log("🚀 EXECUTING SCROLL - window.scrollTo called with:", {
      top: targetScrollTop,
      behavior: "smooth",
      currentPosition: window.scrollY,
      willScrollBy: targetScrollTop - window.scrollY,
    });

    // Smooth scroll to the calculated position
    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });

    // Verify scroll was initiated
    setTimeout(() => {
      const scrollDiff = Math.abs(window.scrollY - targetScrollTop);
      console.log(
        `📊 Scroll ${scrollDiff < 50 ? "SUCCESS" : "FAILED"} - requested: ${targetScrollTop}, actual: ${window.scrollY}`,
      );
    }, 100);

    // Clear any existing debounce timer
    if (scrollDebounceTimer.current) {
      clearTimeout(scrollDebounceTimer.current);
    }

    // Set a debounced timer to clear the scrolling flag
    scrollDebounceTimer.current = setTimeout(() => {
      setIsScrollingOrAnimating(false);
      console.log("🏁 Scroll animation completed, flags cleared");
    }, 1200);

    console.log(
      `📋 Scroll summary: Card ${index} → position ${targetScrollTop} (${targetScrollTop - window.scrollY > 0 ? "down" : "up"} ${Math.abs(targetScrollTop - window.scrollY)}px)`,
    );
  };

  // ============================================================================
  // MANUAL CONTROL FUNCTION
  // ============================================================================

  /**
   * handleCardExpansion Function Documentation
   *
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
   * - Opening: Sets animation state → positions card at top → expands card → completes after 600ms
   * - Closing: Sets animation state → triggers exit animations → closes after 900ms
   *
   * Usage Examples:
   *
   * 1. Open a specific card:
   *    handleCardExpansion(1); // Positions at top and opens RSVP System project
   *    handleCardExpansion(3, true); // Positions at top and opens Ios-status-bar project manually
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
   *    handleCardExpansion(cardIndex + 1); // Positions card at top of viewport
   *
   * 5. Intersection Observer integration:
   *    useEffect(() => {
   *      const observer = new IntersectionObserver((entries) => {
   *        entries.forEach((entry) => {
   *          if (entry.isIntersecting) {
   *            const cardId = parseInt(entry.target.dataset.cardId);
   *            handleCardExpansion(cardId); // Positions at top and expands card
   *          }
   *        });
   *      });
   *      // Observe card elements...
   *    }, []);
   */
  const handleCardExpansion = (
    cardId,
    isManual = false,
    scrollToIndex = null,
  ) => {
    console.log("🎭 handleCardExpansion called:", {
      cardId: cardId,
      isManual: isManual,
      currentExpandedCard: expandedCard,
      isAnimating: isAnimating,
    });

    // Prevent rapid clicking during animations to avoid state conflicts
    if (isAnimating && !isManual) {
      console.log("⏸️ Blocking expansion - animation in progress");
      return;
    }

    if (cardId === null) {
      console.log("🔽 Starting CLOSE sequence for card:", expandedCard);
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
            `Card ${expandedCard} removed from scrolled cards. Can be positioned at top again.`,
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

        // If this was an auto-expansion with scroll request, trigger scroll now
        if (scrollToIndex !== null && !isManual) {
          console.log(
            "🚀 TRIGGERING POST-EXPANSION SCROLL to index:",
            scrollToIndex,
          );
          setTimeout(() => {
            scrollToCard(scrollToIndex);
          }, 100); // Small delay to ensure expansion is visually complete
        }

        // Keep scrolling flag active longer to prevent interference during settling
        setTimeout(
          () => {
            setIsScrollingOrAnimating(false);
          },
          scrollToIndex !== null ? 1600 : 400,
        ); // Longer delay if we're scrolling
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
   * Effect to handle activeIndex changes and trigger card expansion with auto-positioning
   * This creates a connection between scroll-based detection and card expansion
   * Auto-positions cards at top of viewport only on initial detection, then allows free scrolling
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
        console.log("🎯 Active index changed to:", activeIndex);

        const cardId = projects[activeIndex]?.id;
        console.log("📋 Card ID for active index:", cardId);

        // Only auto-scroll and expand if this card hasn't been scrolled to before
        // OR if it was previously expanded but is now collapsed (allowing reopening)
        const hasBeenScrolledTo = scrolledToCards.current.has(cardId);
        const isCurrentlyExpanded = expandedCard === cardId;

        console.log("🔍 Scroll decision factors:", {
          cardId: cardId,
          hasBeenScrolledTo: hasBeenScrolledTo,
          isCurrentlyExpanded: isCurrentlyExpanded,
          expandedCard: expandedCard,
          scrolledCardsSet: Array.from(scrolledToCards.current),
        });

        if (
          cardId &&
          (!scrolledToCards.current.has(cardId) || expandedCard !== cardId)
        ) {
          // Mark this card as having been scrolled to
          scrolledToCards.current.add(cardId);
          console.log(
            `🚀 TRIGGERING EXPANSION for card ${cardId}. Scroll will happen after expansion. Scrolled cards:`,
            Array.from(scrolledToCards.current),
          );

          // Expand the card first, scroll will be triggered after expansion completes
          console.log("📞 Calling handleCardExpansion with cardId:", cardId);
          handleCardExpansion(cardId, false, activeIndex); // Auto expansion with scroll index
        } else {
          console.log(
            `⏭️ Skipping top scroll to card ${cardId} - already scrolled to. Current expanded: ${expandedCard}`,
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
          const cardTop = rect.top;
          const cardBottom = rect.bottom;

          // Check if card is positioned at the center of the viewport (detection happens from center)
          // Note: Detection is from center, but when activated, card will scroll to top position
          const viewportHeight = window.innerHeight;
          const cardCenter = cardTop + (cardBottom - cardTop) / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = Math.abs(cardCenter - viewportCenter);

          // Reduced debug logging for position checks
          if (distanceFromCenter < 80) {
            console.log(
              `🔍 Card ${index} near center - distance: ${distanceFromCenter.toFixed(1)}px`,
            );
          }

          // Threshold for detecting if card is at target center position
          const threshold = 50; // 50px tolerance around the center

          // Check if card is at center position and stable (triggers scroll to top + expansion)
          const isAtTargetPosition =
            distanceFromCenter < threshold && // Card center is within 50px of viewport center
            cardTop >= -20 && // Card is not completely above viewport
            cardBottom <= viewportHeight + 20 && // Card is not completely below viewport
            cardBottom - cardTop > 60 && // Card has substantial content visible
            activeIndex !== index; // Not already active

          if (isAtTargetPosition) {
            console.log(`✅ Card ${index} IS AT TARGET POSITION!`, {
              distanceFromCenter: distanceFromCenter,
              threshold: threshold,
              cardTop: cardTop,
              cardBottom: cardBottom,
              viewportHeight: viewportHeight,
              activeIndex: activeIndex,
            });
          }

          if (isAtTargetPosition && lastCenteredIndex === index) {
            stableCount++;
            console.log(
              `🎯 Card ${index} stable count: ${stableCount}/${stabilityThreshold}`,
            );
            // Only update after multiple stable checks of the same card
            if (stableCount >= stabilityThreshold) {
              console.log(
                `🔥 SETTING ACTIVE INDEX to ${index} after ${stableCount} stable checks`,
              );
              setActiveIndex(index);
              stableCount = 0;
              lastCenteredIndex = null;
            }
          } else if (isAtTargetPosition) {
            console.log(
              `📍 Card ${index} detected at target position, starting stability count`,
            );
            lastCenteredIndex = index;
            stableCount = 1; // Start counting for this card
          } else {
            stableCount = 0;
            lastCenteredIndex = null; // Reset if not at target position
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
        <div
          className={`p-6 h-[120px] ${isExpanded ? "h-[90px] p-3 mb-2 -mt-1  flex flex-col justify-center" : "flex items-center space-x-4"}`}
        >
          {/* Project thumbnail image - hidden when expanded */}
          {!isExpanded && (
            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Basic project information */}
          <div className={`${isExpanded ? "w-full" : "flex-1 min-w-0"}`}>
            <h3
              className={`text-2xl font-bold mb-2 ${isExpanded ? "" : "truncate"}`}
              style={{ color: project.color }}
            >
              {project.title}
            </h3>
            {!isExpanded && (
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="line-clamp-2">
                  {project.description.substring(0, 80)}...
                </span>
              </p>
            )}
            {/* Active indicator */}
            {activeIndex === index && !isExpanded && (
              <div
                className="mt-2 w-2 h-2 rounded-full animate-pulse"
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
          className="px-6 pb-6"
          variants={contentVariants}
          animate={isExpanded && !isClosing ? "expanded" : "collapsed"}
        >
          {(isExpanded || isClosing) && (
            <>
              {/* Full-size project image */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 -mt-8">
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
