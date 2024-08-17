"use client";
import Image from "next/image";
import DesktopHome from "./components/home/desktop_home";
import DesktopAboutMe from "./components/about_me/desktop_about_me";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("home");
  return (
    <main className="w-full noScroll">
      <Navbar active={active} setActive={setActive} />
      <DesktopHome active={active} setActive={setActive} />
      <div className="h-screen w-full"></div>
      <DesktopAboutMe active={active} setActive={setActive} />
    </main>
  );
}
