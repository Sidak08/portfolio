import SectionView from ".././section/section";
import { motion, useScroll } from "framer-motion";

// export default function DesktopAboutMe({ active, setActive }) {
//   return (
//     <SectionView
//       id="about_me"
//       setActiveSection={setActive}
//       children={<div className="w-full h-screen bg-[#0A0F13]"></div>}
//     ></SectionView>
//   );
// }

export default function DesktopAboutMe({ active, setActive }) {
  return (
    <motion.div
      whileInView={() => {
        console.log(9, "about me");
      }}
    >
      <div className="w-full h-screen bg-[#0A0F13]"></div>
    </motion.div>
  );
}
