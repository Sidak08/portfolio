"use client";
import Image from "next/image";
import styles from "./desktop_home.module.css";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const myFont = localFont({
  src: "../.././fonts/cyber-reg-font.woff2",
  display: "swap",
});

// function DesktopHome({ active, setActive }) {
//   const glitch = useGlitch();
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log(10, scrollYProgress.get());
//     }, 10);

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, [scrollYProgress]);

//   return (
//     <section id="home">
//       <div ref={ref}>
//         <div className="w-full h-screen bg-[#0A0F13]">
//           <div className="flex items-center justify-center w-full h-screen mb-[200px]">
//             <div className="flex items-center justify-evenly w-full">
//               <div ref={glitch.ref}>
//                 <Image src="/home-profile.png" height={412} width={413} />
//               </div>
//               <div className="">
//                 <div className={`${styles.myName}`}>My Name </div>
//                 <div
//                   className={`${myFont.className} ${styles.isSidak} mt-9 ml-32`}
//                 >
//                   Is SidaK
//                 </div>
//               </div>
//             </div>
//             <h1>{scrollYProgress.get()}</h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function Item() {
  const glitch = useGlitch();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(10, scrollYProgress.get());
      setScrollPos(scrollYProgress.get());
      // console.log(7, scrollYProgress.get());
    }, 10);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [scrollYProgress]);

  return (
    <section id="home">
      <div ref={ref}>
        <div className="h-screen"></div>
        <h1>{scrollYProgress.get()}</h1>
      </div>
    </section>
  );
}

export default function DesktopHome() {
  return (
    <>
      <Item />
    </>
  );
}
