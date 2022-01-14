import * as React from "react";

import { motion } from "framer-motion";

const Home = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <motion.h1
        initial={{ scale: 0, rotateY: -360, opacity: 1, x: 0, y: 0 }}
        animate={{
          scale: [0, 1, 1, 1],
          rotateY: [-360, 0, 0, 0],
          x: [0, 0, 5, 5],
          y: [0, 0, 5, 5, 5],
          opacity: [1, 1, 1, 1],
        }}
        transition={{
          duration: 3,
          times: [0, 0.3, 0.6, 1],
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "100%",
          margin: 0,
          fontFamily: "Aladin",
          color: "#61385e",
          fontSize: 288,
          textAlign: "center",
        }}
      >
        A
      </motion.h1>
      <motion.h1
        initial={{ scale: 0, rotateY: -360, opacity: 1, x: 0, y: 0 }}
        animate={{
          scale: [0, 1, 1, 1],
          rotateY: [-360, 0, 0, 0],
          x: [0, 0, -5, -5],
          y: [0, 0, -5, -5],
          opacity: [1, 1, 1, 1],
        }}
        transition={{
          duration: 3,
          times: [0, 0.3, 0.6, 1],
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "100%",
          margin: 0,
          fontFamily: "Aladin",
          color: "#00eaf0",
          fontSize: 288,
          textAlign: "center",
        }}
      >
        A
      </motion.h1>
    </motion.div>
  );
};

export default Home;
