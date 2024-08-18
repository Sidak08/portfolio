// import SectionView from ".././section/section";
import { motion, useScroll } from "framer-motion";

export default function DesktopAboutMe({ active, setActive }) {
  return (
    <section id="about_me" className="relative">
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
        className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-1 h-1"
      ></motion.div>
      <div className="w-full h-[110vh] bg-[#0A0F13]"></div>
    </section>
  );
}
