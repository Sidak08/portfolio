// import SectionView from ".././section/section";
"use client";
import { motion, useScroll } from "framer-motion";
import SkillScroll from "./mobileSkillScroll";
import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { Sarpanch } from "next/font/google";
import SplineView from "./spline";

const sarpanch = Sarpanch({ subsets: ["latin"], weight: "400" });

export default function MobileAboutMe({ active, setActive }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const [scrollPos, setScrollPos] = useState(0);
  const [startTypewriter, setStartTypewriter] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const progress = scrollYProgress.get();
      setScrollPos(progress);

      if (progress > 0.1 && !startTypewriter) {
        setStartTypewriter(true); // Trigger typewriter animation
      }
    }, 50);

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
      <div className="w-full min-h-screen bg-[#0A0F13] flex flex-col items-center justify-evenly pb-[30px]">
        <SkillScroll />
        <div className="flex items-center justify-evenly w-full mt-14">
          <div
            ref={ref}
            className={`min-h-[400px] max-w-[80%] px-8 py-2 leading-[1.7] text-xl flex items-center justify-center rounded-[12px] bg-[#0A1920] transition-shadow duration-500 ease-in-out ${
              scrollPos > 0.1
                ? "shadow-[25px_25px_0_0_#7DCDFD] hover:shadow-[25px_25px_0_0_#7DFDF4] -mt-[28px] -ml-[28px]"
                : "-mt-3 -mr-3"
            }`}
          >
            {startTypewriter && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Bonjour, I'm a Grade 11 high school student with a passion for programming. I love diving into code; exploring new technologies, and I am always eager to learn and improve my skills. Whether it's building web applications, experimenting with new frameworks, or debugging a machine learning algorithm, I find joy in every part of the process. In my free time, I enjoy working on personal and open-source projects. I also love attending hackathons and have won 2 so far. Furthermore, I also love many sports, such as badminton, soccer, and cricket.",
                    )
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .start();
                }}
                options={{
                  delay: 45, // Set typing speed to 30ms per character
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}