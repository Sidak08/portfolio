"use client";
import styles from "./desktop_about_me.module.css";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Sarpanch } from "next/font/google";

const sarpanch = Sarpanch({ subsets: ["latin"], weight: "400" });

function Box({ text, img }) {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text]);

  return (
    <div className="px-2">
      <div
        className={`${styles.box}  flex justify-evenly items-center bg-[#0c2029] rounded-[6px] h-14 ${sarpanch.className} `}
        style={{
          minWidth: `calc(${textWidth}px + 40px + 60px)`, // Text width + image width + padding
        }}
      >
        <h3
          ref={textRef}
          className={`text-white text-3xl font-normal ${sarpanch.className}`}
        >
          {text}
        </h3>
        <img src={img} alt={text} height={30} className="ml-3" />
      </div>
    </div>
  );
}

function ParallaxTextOne({ baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Magic wrapping for the length of the text
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change the direction of the scroll once we switch scrolling directions
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  // The number of times to repeat the child text should be dynamically calculated
  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <Box text="Javascript" img="/logos/js.png" />
        <Box text="Javascript" img="/logos/js.png" />
        <Box text="Typescript" img="/logos/ts.png" />
        <Box text="Python" img="/logos/python.png" />
        <Box text="MongoDB" img="/logos/mongoDb.png" />
        <Box text="SQL" img="/logos/mySQL.png" />
        <Box text="Tensor-flow" img="/logos/tensorflow.png" />
        <Box text="Next JS" img="/logos/nextJs.png" />
        <Box text="React" img="/logos/react.png" />
        <Box text="Javascript" img="/logos/js.png" />
        <Box text="Typescript" img="/logos/ts.png" />
        <Box text="Python" img="/logos/python.png" />
        <Box text="MongoDB" img="/logos/mongoDb.png" />
        <Box text="SQL" img="/logos/mySQL.png" />
        <Box text="Tensor-flow" img="/logos/tensorflow.png" />
        <Box text="Next JS" img="/logos/nextJs.png" />
        <Box text="React" img="/logos/react.png" />
      </motion.div>
    </div>
  );
}

function ParallaxTextTwo({ baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Magic wrapping for the length of the text
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change the direction of the scroll once we switch scrolling directions
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  // The number of times to repeat the child text should be dynamically calculated
  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <Box text="Javascript" img="/logos/js.png" />
        <Box text="Javascript" img="/logos/js.png" />
        <Box text="Typescript" img="/logos/ts.png" />
        <Box text="Python" img="/logos/python.png" />
        <Box text="MongoDB" img="/logos/mongoDb.png" />
        <Box text="SQL" img="/logos/mySQL.png" />
        <Box text="Tensor-flow" img="/logos/tensorflow.png" />
        <Box text="Next JS" img="/logos/nextJs.png" />
        <Box text="React" img="/logos/react.png" />
        <Box text="Javascript" img="/logos/js.png" />
        <Box text="Typescript" img="/logos/ts.png" />
        <Box text="Python" img="/logos/python.png" />
        <Box text="MongoDB" img="/logos/mongoDb.png" />
        <Box text="SQL" img="/logos/mySQL.png" />
        <Box text="Tensor-flow" img="/logos/tensorflow.png" />
        <Box text="Next JS" img="/logos/nextJs.png" />
        <Box text="React" img="/logos/react.png" />
      </motion.div>
    </div>
  );
}

export default function SkillScroll() {
  return (
    <section className="w-full">
      <ParallaxTextOne baseVelocity={-5} />
      <ParallaxTextOne baseVelocity={5}>Scroll velocity</ParallaxTextOne>
      <Box text="Javascript" img="/logos/js.png" />
    </section>
  );
}
