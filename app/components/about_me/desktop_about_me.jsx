import SectionView from ".././section/section";
import { motion, useScroll } from "framer-motion";

export default function DesktopAboutMe({ active, setActive }) {
  return (
    <motion.div
      whileInView={() => {
        setActive("aboutMe");
        console.log("aboutMe");
      }}
    >
      <section id="about_me">
        <div className="w-full h-screen bg-[#0A0F13]"></div>
      </section>
    </motion.div>
  );
}
