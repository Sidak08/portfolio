// import SectionView from ".././section/section";
"use client";
import { motion, useScroll } from "framer-motion";
import SkillScroll from "./mobileSkillScroll";
import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { Sarpanch } from "next/font/google";
import SplineView from "./spline";
import PixelCard from ".././reactBits/pixel-card";

const sarpanch = Sarpanch({ subsets: ["latin"], weight: "400" });

export default function MobileAboutMe({ active, setActive }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const [scrollPos, setScrollPos] = useState(0);
  const [startTypewriter, setStartTypewriter] = useState(false);
  const [animate, setAnimate] = useState("appear");

  useEffect(() => {
    let animationId;
    let startTime;
    const cycleDuration = 3500; // Total cycle time
    const easeDuration = 600; // Time for ease in/out

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % cycleDuration) / cycleDuration;

      if (progress < 0.1) {
        // Easy in phase (first 10% of cycle)
        const easeProgress = easeInOutCubic(progress / 0.1);
        setAnimate(easeProgress > 0.5 ? "appear" : "disappear");
      } else if (progress > 0.9) {
        // Easy out phase (last 10% of cycle)
        const easeProgress = easeInOutCubic((progress - 0.9) / 0.1);
        setAnimate(easeProgress > 0.5 ? "disappear" : "appear");
      } else {
        // Stable phase
        setAnimate("appear");
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    const intervalId = setInterval(() => {
      const progress = scrollYProgress.get();
      setScrollPos(progress);

      if (progress > 0.2 && !startTypewriter) {
        setStartTypewriter(true); // Trigger typewriter animation
      }
    }, 10);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [scrollYProgress, startTypewriter]);

  return (
    <section id="about_me" className={`relative ${sarpanch.className}`}>
      <motion.div
        whileInView={() => {
          if (active !== "aboutMe") {
            setActive((pre) => "aboutMe");
          }
        }}
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>
      <div className="w-full h-screen bg-[#0A0F13] flex flex-col items-center justify-evenly px-4">
        <SkillScroll />
        <div className="flex flex-col items-center justify-center w-full space-y-6">
          <PixelCard
            noFocus={true}
            animate={animate}
            colors={"#0c0c6e,#0A1920,#7DCDFD,#00c1ff"}
          >
            <h1 className="z-50">hello</h1>
          </PixelCard>

          <div className="w-[280px] h-[280px]">
            <SplineView />
          </div>
        </div>
      </div>
    </section>
  );
}
