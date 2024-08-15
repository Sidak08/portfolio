import Image from "next/image";
import DesktopHome from "./components/home/desktop_home";
import DesktopAboutMe from "./components/about_me/desktop_about_me";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className="w-full h-[100vh]">
      <Navbar />
      <DesktopHome />
      <DesktopAboutMe />
    </main>
  );
}
