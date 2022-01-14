import * as React from "react";

import { motion } from "framer-motion";

const Divider = (): JSX.Element => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{
        scaleX: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      style={{ height: 4, background: "#ffffff11" }}
    />
  );
};

export default Divider;
