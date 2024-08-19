// import SectionView from ".././section/section";
"use client";
import { motion, useScroll } from "framer-motion";
import SkillScroll from "./skillScroll";
import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

export default function DesktopAboutMe({ active, setActive }) {
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

      if (progress > 0.2 && !startTypewriter) {
        setStartTypewriter(true); // Trigger typewriter animation
      }
    }, 10);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [scrollYProgress, startTypewriter]);

  return (
    <section id="about_me" className="relative">
      <motion.div
        whileInView={() => {
          if (active !== "aboutMe") {
            setActive((pre) => "aboutMe");
          }
        }}
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>
      <div className="w-full h-screen bg-[#0A0F13] ">
        <SkillScroll />
        <div className="flex items-center justify-evenly">
          <div
            ref={ref}
            className={`rounded-[12px] bg-[#0A1920] w-[50%] h-[430px] mt-12 transition-shadow duration-500 ease-in-out ${
              scrollPos > 0.2
                ? "shadow-[25px_25px_0_0_#7DCDFD] hover:shadow-[25px_25px_0_0_#7DFDF4]"
                : ""
            }`}
          >
            {startTypewriter && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello World!")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })

                    .start();
                }}
              />
            )}
          </div>
          <div className="w-[40%] h-[430px]"></div>
        </div>
      </div>
    </section>
  );
}
