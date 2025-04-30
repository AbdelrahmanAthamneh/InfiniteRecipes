"use client";

import { Link, useNavigate } from "react-router-dom";
import { Menu, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setTransparent } from "../store/slices/homeSlice";
import { delay } from "../utils/delay";
import styles from "./mainheader.module.css";

export default function MainHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleClick() {
    dispatch(setTransparent(true));
    await delay(500);
    navigate("/browse");
    dispatch(setTransparent(false));
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={styles.header}
    >
      <nav className={styles["main-navigation"]}>
        <motion.div
          className={styles["logo-container"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <ChefHat size={32} className={styles["logo-icon"]} />
            <span className={styles["logo-text"]}>Infinite Recipes</span>
          </Link>
        </motion.div>
        <motion.ul className={styles["navigation-items"]}>
          <motion.li
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles["nav-item"]}
          >
            <Menu size={18} className={styles["menu-icon"]} />
            <span>Browse Recipes</span>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  );
}
