"use client";
import Image from "next/image";
import styles from "./desktop_home.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const myFont = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

export default function DesktopHome({ active, setActive }) {
  const glitch = useGlitch();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(10, scrollYProgress.get());
    }, 10);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [scrollYProgress]);

  return (
    <section id="home" setActiveSection={setActive}>
      <div ref={ref}>
        <div className="w-full h-screen bg-[#0A0F13]">
          <div className="flex items-center justify-center w-full h-screen mb-[200px]">
            <div className="flex items-center justify-evenly w-full">
              <div ref={glitch.ref}>
                <Image src="/home-profile.png" height={412} width={413} />
              </div>
              <div className="">
                <div className={`${styles.myName}`}>My Name </div>
                <div
                  className={`${myFont.className} ${styles.isSidak} mt-9 ml-32`}
                >
                  Is SidaK
                </div>
              </div>
            </div>
            <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
