"use client";
import Image from "next/image";
import styles from "./desktop_home.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";

const myFont = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

export default function DesktopHome() {
  const glitch = useGlitch();

  return (
    <section className="w-full h-screen bg-[#0A0F13]">
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex items-center justify-evenly w-full">
          <div ref={glitch.ref}>
            <Image src="/home-profile.png" height={412} width={413} />
          </div>
          <div className="">
            <div className={`${styles.myName}`}>My Name </div>
            <div className={`${myFont.className} ${styles.isSidak} mt-9 ml-32`}>
              Is SidaK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
