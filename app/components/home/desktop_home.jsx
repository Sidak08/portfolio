"use client";
import Image from "next/image";
import styles from "./desktop_home.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DarkVeil from ".././reactBits/dark-veil";
import ProfileCard from ".././reactBits/profile-card";
import TextType from ".././reactBits/text-type";
import DecryptedText from ".././reactBits/decrypt";

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

  const innerOpacity = 0.3;
  const behindOpacity = 1;

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
              name="Sidak Singh"
              title="Software Engineer"
              handle="Sidak08"
              status="Always Online"
              contactText="Contact Me"
              avatarUrl="/home-profile.png"
              //miniAvatarUrl={"/next.svg"}
              //iconUrl="/home-profile.png"
              grainUrl={"/grain.png"}
              innerGradient={` "linear-gradient(135deg, rgba(255, 0, 64, 0.3) 0%, rgba(251, 57, 190, 0.3) 25%, rgba(139, 92, 246, 0.3) 50%, rgba(59, 130, 246, 0.3) 75%, rgba(114, 220, 255, 0.3) 100%)"`}
              behindGradient={`linear-gradient(135deg, rgba(255, 0, 64, ${behindOpacity}) 0%, rgba(251, 57, 190, ${behindOpacity}) 25%, rgba(139, 92, 246, ${behindOpacity}) 50%, rgba(59, 130, 246, ${behindOpacity}) 75%, rgba(114, 220, 255, ${behindOpacity}) 100%)`}
              showBehindGradient={true}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
              hover
            />
            <div className="bg-transparent">
              <div
                className={`${styles.myName} ${outlineText.className} `}
                style={{
                  color: "#fb39be",
                }}
              >
                <TextType
                  text={["My Name is"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter=""
                />
              </div>
              <div
                className={`${filledText.className} ${styles.isSidak} mt-9 ml-32`}
                style={{
                  color: "#72dcff",
                }}
              >
                <DecryptedText
                  text="   Is Sidak"
                  animateOn="view"
                  revealDirection="center"
                  speed={100}
                  maxIterations={20}
                />
              </div>
            </div>
          </div>
        </div>
      </DarkVeil>
    </section>
  );
}
