// import "./styles.css";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPos(scrollYProgress.get());
      // console.log(7, scrollYProgress.get());
    }, 10);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [scrollYProgress]);

  return (
    <section>
      <div ref={ref}>
        <h1>{scrollYProgress.get()}</h1>
      </div>
    </section>
  );
}

export default function Scroll() {
  return (
    <>
      <Item />
    </>
  );
}
