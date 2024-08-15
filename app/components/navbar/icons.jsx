import { motion } from "framer-motion";

function Contact({ width = 24, height = 24, color = "#fff" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
      ></path>
    </svg>
  );
}

function Home({ color = "#FF88D7", visible }) {
  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "fff",
      strokeWidth: 2,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#FF88D7",
      strokeWidth: 2,
    },
  };

  return (
    <div className="container">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        className="item"
        height={25}
        width={25}
      >
        <motion.path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity={1}
          pathLength={1}
          fill="rgba(255, 255, 255, 0)"
          stroke="#fff"
        />
        <motion.path
          d="M9 22V12h6v10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity={1}
          pathLength={1}
          fill="rgba(255, 255, 255, 0)"
          stroke="#fff"
        />
        <motion.path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          transition={{
            default: { duration: 1, ease: "easeIn" },
          }}
        />
        <motion.path
          d="M9 22V12h6v10"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          transition={{
            default: { duration: 1, ease: "easeIn" },
          }}
        />
      </motion.svg>
    </div>
  );
}

function Projects({ width = 24, height = 24, color = "#fff" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"
      ></path>
    </svg>
  );
}

function Resume({ width = 24, height = 24, color = "#F1F1F1" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
      ></path>
    </svg>
  );
}

function User({ width = 24, height = 24, color = "#fff" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
      ></path>
    </svg>
  );
}

export { Contact, Home, Projects, Resume, User };
