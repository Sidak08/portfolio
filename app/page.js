import Image from "next/image";
import DesktopHome from "./components/home/desktop_home";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className="w-full h-[100vh]">
      <Navbar />
      <DesktopHome />
    </main>
  );
}
