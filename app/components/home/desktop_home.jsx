"use client";
import Image from "next/image";
import styles from "./desktop_home.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DarkVeil from ".././reactBits/dark-veil";
import ProfileCard from ".././reactBits/profile-card";

const filledText = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

const outlineText = localFont({
  src: "../.././fonts/saiba-45.woff2",
  display: "swap",
});

export default function DesktopHome({ active, setActive }) {
  const glitch = useGlitch();

  return (
    <section id="home" className="relative">
      <motion.div
        whileInView={() => {
          if (active !== "home") {
            setActive((pre) => "home");
          }
        }}
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>
      <DarkVeil
        className="w-full h-screen"
        hueShift={0}
        speed={2}
        scanlineFrequency={4.5}
        warpAmount={2.9}
        scanlineIntensity={0.36}
      >
        <div className="flex items-center justify-center w-full h-screen mb-[200px] bg-transparent relative z-10">
          <div className="flex items-center justify-evenly w-full bg-transparent">
            {/* <div ref={glitch.ref}>
              <Image src="/home-profile.png" height={412} width={413} />
            </div>*/}
            <ProfileCard
              name="Javi A. Torres"
              title="Software Engineer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/path/to/avatar.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
            <div className="bg-transparent">
              <div
                className={`${styles.myName} ${outlineText.className}`}
                style={{
                  color: "#fb39be",
                }}
              >
                My Name{" "}
              </div>
              <div
                className={`${filledText.className} ${styles.isSidak} mt-9 ml-32`}
                style={{
                  color: "#72dcff",
                }}
              >
                Is SidaK
              </div>
            </div>
          </div>
        </div>
      </DarkVeil>
    </section>
  );
}
