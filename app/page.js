"use client";
import Image from "next/image";
import DesktopHome from "./components/home/desktop_home";
import DesktopAboutMe from "./components/about_me/desktop_about_me";
import Navbar from "./components/navbar/navbar";
import SideScroll from "./components/test/sideScroll";
import Projects from "./components/projects/projects";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [active, setActive] = useState("home");
  return (
    <main className="w-full noScroll relative">
      <Navbar active={active} setActive={setActive} />
      <DesktopHome active={active} setActive={setActive} />
      <DesktopAboutMe active={active} setActive={setActive} />
      <Projects active={active} setActive={setActive} />
    </main>
  );
}
