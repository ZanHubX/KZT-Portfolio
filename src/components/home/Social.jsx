import React from 'react'
import {motion} from 'framer-motion'


const Social = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 1,
      }}
      className="home__social"
    >
      <a
        href="https://www.behance.net/kaungthaw6"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-behance"></i>
      </a>
      <a
        href="https://github.com/ZanHubX"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>
      <a
        href="https://linktr.ee/kaungzanthaw"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-link-h"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/kaung-zan-thaw-056b4a256/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
    </motion.div>
  );
}

export default Social