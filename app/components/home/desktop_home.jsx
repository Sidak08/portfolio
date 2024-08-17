"use client";
import Image from "next/image";
import styles from "./desktop_home.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import SectionView from ".././section/section";

const myFont = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

export default function DesktopHome({ active, setActive }) {
  const glitch = useGlitch();

  return (
    <SectionView
      // className="w-full h-screen bg-[#0A0F13]"
      id="home"
      setActiveSection={setActive}
      children={
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
          </div>
        </div>
      }
    ></SectionView>
  );
}
