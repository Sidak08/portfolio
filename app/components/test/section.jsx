import React from "react";
import { useInView } from "framer-motion";

export default function SectionView({
  id,
  setActiveSection,
  children,
  className,
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      // console.log(5, id);
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <section
      id={id}
      ref={ref}
      // style={{ padding: "100px 0", minHeight: "100vh" }}
      className={className}
    >
      {children}
    </section>
  );
}
