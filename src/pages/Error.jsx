"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./error.module.css";

export default function ErrorPage() {
  return (
    <motion.main
      className={styles["error-content"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles["error-container"]}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          className={styles["error-icon-container"]}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          <AlertTriangle size={64} className={styles["error-icon"]} />
        </motion.div>

        <motion.h1
          className={styles["error-title"]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Oops! An Error Occurred
        </motion.h1>

        <motion.p
          className={styles["error-message"]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Looks like you've entered an unsupported route!
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="/">
            <motion.button
              className={styles["home-button"]}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={18} />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
