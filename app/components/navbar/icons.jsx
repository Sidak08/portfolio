import { motion } from "framer-motion";

function Contact({ visible }) {
  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#fff",
      strokeWidth: 2,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#9AE797",
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
          d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity={1}
          pathLength={1}
          fill="rgba(255, 255, 255, 0)"
          stroke="#fff"
        />
        <motion.path
          d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          fill="rgba(255, 255, 255, 0)"
          transition={{
            default: { duration: 1, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </div>
  );
}

function Home({ visible }) {
  // stroke: "#FF88D7",
  // d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
  // d="M9 22V12h6v10"
  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "fff",
      strokeWidth: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#FF88D7",
      // strokeWidth: 2,
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
          d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
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
          d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          strokeWidth={2}
          transition={{
            default: { duration: 1, ease: "easeInOut" },
          }}
        />
        <motion.path
          d="M9 22V12h6v10"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          strokeWidth={2}
          transition={{
            default: { duration: 1, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </div>
  );
}

function Projects({ visible }) {
  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#fff",
      strokeWidth: 2,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#ED256C",
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
          d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity={1}
          pathLength={1}
          fill="rgba(255, 255, 255, 0)"
          stroke="#fff"
        />
        <motion.path
          d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          fill="rgba(255, 255, 255, 0)"
          transition={{
            default: { duration: 1, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </div>
  );
}

function Resume({ visible }) {
  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "fff",
      strokeWidth: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#A396F9",
      // strokeWidth: 2,
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
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity={1}
          pathLength={1}
          fill="rgba(255, 255, 255, 0)"
          stroke="#fff"
        />
        <motion.path
          d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity={1}
          pathLength={1}
          fill="rgba(255, 255, 255, 0)"
          stroke="#fff"
        />
        <motion.path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          strokeWidth={2}
          transition={{
            default: { duration: 1, ease: "easeInOut" },
          }}
        />
        <motion.path
          d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          strokeWidth={2}
          transition={{
            default: { duration: 1, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </div>
  );
}

function User({ visible }) {
  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#fff",
      strokeWidth: 2,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)",
      stroke: "#7DCDFD",
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
          d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity={1}
          pathLength={1}
          fill="rgba(255, 255, 255, 0)"
          stroke="#fff"
        />
        <motion.path
          d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
          variants={icon}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="visible"
          animate={visible}
          fill="rgba(255, 255, 255, 0)"
          transition={{
            default: { duration: 1, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </div>
  );
}

export { Contact, Home, Projects, Resume, User };
