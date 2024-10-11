import React from "react";
import "./home.css";
import { motion } from "framer-motion";

const Data = () => {
  return (
    <div className="home__data">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1,
        }}
        className="home__title"
      >
        Kaung Zan Thaw
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.1,
        }}
        className="text-lg font-bold"
      >
        (Eric Wang)
      </motion.p>
      <br />
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
        className="home__subtitle"
      >
        Frontend Developer
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
        className="home__description"
      >
        I'm a Software Developer with a passion for Latest Technologies.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
        href="#contact"
        className="button button-flex"
      >
        Say Hello
      </motion.a>
    </div>
  );
};

export default Data;
