import React from "react";
import Social from "./Social";
import Data from "./Data";
import './home.css'
import ScrollDown from "./ScrollDown";
import { motion } from "framer-motion";

const Home = ({ isDarkMode }) => {
  return (
    <section
      className={`home section w-full h-screen flex items-center justify-center ${
        isDarkMode ? "dark" : ""
      }`}
      id="home"
    >
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            className="home__img"
          ></motion.div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
