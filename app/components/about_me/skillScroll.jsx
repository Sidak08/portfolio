"use client";
import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { Sarpanch } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import styles from "./desktop_about_me.module.css";

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

function ParallaxTextOne({ baseVelocity = 100, speed }) {
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
  const x = useTransform(baseX, (v) => {
    const amplitude = 10; // Half the range of your oscillation
    const midpoint = -30; // Midpoint of the range (-20 and -40)
    const frequency = speed; // Adjust this to slow down the oscillation
    return `${midpoint + amplitude * Math.sin(v * frequency)}%`;
  });

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

function ParallaxTextTwo({ baseVelocity = 100, speed }) {
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
  const x = useTransform(baseX, (v) => {
    const amplitude = 10; // Half the range of your oscillation
    const midpoint = -30; // Midpoint of the range (-20 and -40)
    const frequency = speed; // Adjust this to slow down the oscillation
    return `${midpoint + amplitude * Math.sin(v * frequency)}%`;
  });

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
        <Box text="React Native" img="/logos/react.png" />
        <Box text="React Native" img="/logos/react.png" />
        <Box text="Expo" img="/logos/expo.png" />
        <Box text="Tailwind" img="/logos/tailwind.png" />
        <Box text="Node Js" img="/logos/nodeJs.png" />
        <Box text="Material Ui" img="/logos/materialUi.png" />
        <Box text="Auth0" img="/logos/auth0.png" />
        <Box text="Stripe" img="/logos/stripe.png" />
        <Box text="Media Pipe" img="/logos/mediaPipe.png" />
        <Box text="React Native" img="/logos/react.png" />
        <Box text="Expo" img="/logos/expo.png" />
        <Box text="Tailwind" img="/logos/tailwind.png" />
        <Box text="Node Js" img="/logos/nodeJs.png" />
        <Box text="Material Ui" img="/logos/materialUi.png" />
        <Box text="Auth0" img="/logos/auth0.png" />
        <Box text="Stripe" img="/logos/stripe.png" />
        <Box text="Media Pipe" img="/logos/mediaPipe.png" />
        <Box text="React Native" img="/logos/react.png" />
      </motion.div>
    </div>
  );
}

function ParallaxTextThree({ baseVelocity = 100, speed }) {
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
  const x = useTransform(baseX, (v) => {
    const amplitude = 10; // Half the range of your oscillation
    const midpoint = -30; // Midpoint of the range (-20 and -40)
    const frequency = speed; // Adjust this to slow down the oscillation
    return `${midpoint + amplitude * Math.sin(v * frequency)}%`;
  });

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
    // console.log(baseX.get());
  });

  // The number of times to repeat the child text should be dynamically calculated
  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <Box text="Three Js" img="/logos/threeJs.png" />
        <Box text="Three Js" img="/logos/threeJs.png" />
        <Box text="Puppeteer" img="/logos/puppeteer.png" />
        <Box text="Insomnia" img="/logos/insomnia.png" />
        <Box text="Git" img="/logos/git.png" />
        <Box text="NPM" img="/logos/npm.png" />
        <Box text="AWS" img="/logos/aws.png" />
        <Box text="Vercel" img="/logos/vercel.png" />
        <Box text="Amplify" img="/logos/amplify.png" />
        <Box text="Three Js" img="/logos/threeJs.png" />
        <Box text="Puppeteer" img="/logos/puppeteer.png" />
        <Box text="Insomnia" img="/logos/insomnia.png" />
        <Box text="Git" img="/logos/git.png" />
        <Box text="NPM" img="/logos/npm.png" />
        <Box text="AWS" img="/logos/aws.png" />
        <Box text="Vercel" img="/logos/vercel.png" />
        <Box text="Amplify" img="/logos/amplify.png" />
        <Box text="Three Js" img="/logos/threeJs.png" />
      </motion.div>
    </div>
  );
}

export default function SkillScroll() {
  const speed = 0.15;

  return (
    <section className="w-full">
      <ParallaxTextOne baseVelocity={-5} speed={speed} />
      <ParallaxTextTwo baseVelocity={5} speed={speed} />
      <ParallaxTextThree baseVelocity={-5} speed={speed} />
    </section>
  );
}
