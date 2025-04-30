"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Utensils } from "lucide-react";
import { delay } from "../utils/delay";
import { useDispatch, useSelector } from "react-redux";
import { setTransparent } from "../store/slices/homeSlice";
import styles from "./home.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transparent = useSelector((state) => state.transparent.value);

  async function handleClick() {
    dispatch(setTransparent(true));
    await delay(500);
    navigate("/browse");
    dispatch(setTransparent(false));
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={
        transparent
          ? `${styles["home-content"]} transparent`
          : styles["home-content"]
      }
    >
      <div className={styles["home-container"]}>
        <motion.div
          className={styles["home-icon-container"]}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <Utensils size={64} className={styles["home-icon"]} />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles["home-title"]}
        >
          Welcome to Infinite Recipes!
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles["home-description"]}
        >
          Browse the <span className={styles.highlight}>infinite</span> amounts
          of recipes based on the ingredients that you{" "}
          <span className={styles["highlight-underline"]}>own</span>!
        </motion.p>

        <motion.button
          onClick={handleClick}
          className={styles["home-button"]}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started{" "}
          <ChevronRight size={24} className={styles["button-icon"]} />
        </motion.button>
      </div>
    </motion.main>
  );
}
