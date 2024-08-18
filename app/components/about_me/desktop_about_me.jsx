// import SectionView from ".././section/section";
import { motion, useScroll } from "framer-motion";

export default function DesktopAboutMe({ active, setActive }) {
  return (
    <motion.div
      whileInView={() => {
        if (active !== "aboutMe") {
          setActive((pre) => "aboutMe");
        }
        // setActive((pre) => {
        //   return pre === "aboutMe" ? pre : "aboutMe";
        // });
        // console.log(active);
      }}
    >
      <section id="about_me">
        <div className="w-full h-[110vh] bg-[#0A0F13]"></div>
      </section>
    </motion.div>
  );
}
