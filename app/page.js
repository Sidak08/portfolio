"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import DesktopHome from "./components/home/desktop_home";
import DesktopAboutMe from "./components/about_me/desktop_about_me";
import Navbar from "./components/navbar/navbar";
import SideScroll from "./components/test/sideScroll";
import DesktopProjects from "./components/projects/desktop_projects";
import DesktopResume from "./components/resume/desktop_resume";
import DesktopContact from "./components/contact_me/desktop_contact";
import MobileHome from "./components/home/mobile_home";
import "./globals.css";

export default function Home() {
  const [active, setActive] = useState("home");

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  {
    isMounted && !isMobile ? <CharityBanner /> : <></>;
  }

  return (
    <main className="w-full noScroll relative">
      <Navbar active={active} setActive={setActive} />
      {isMounted && !isMobile ? (
        <DesktopHome active={active} setActive={setActive} />
      ) : (
        <></>
      )}
      {isMounted && !isMobile ? (
        <DesktopAboutMe active={active} setActive={setActive} />
      ) : (
        <></>
      )}
      {isMounted && !isMobile ? (
        <DesktopProjects active={active} setActive={setActive} />
      ) : (
        <></>
      )}
      {isMounted && !isMobile ? (
        <DesktopResume active={active} setActive={setActive} />
      ) : (
        <></>
      )}
      {isMounted && !isMobile ? (
        <DesktopContact active={active} setActive={setActive} />
      ) : (
        <></>
      )}
      {isMounted && isMobile ? (
        <MobileHome active={active} setActive={setActive} />
      ) : (
        <></>
      )}
    </main>
  );
}
