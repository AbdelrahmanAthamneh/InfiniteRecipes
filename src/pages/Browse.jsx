"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Check, X } from "lucide-react";
import { INGREDIENTS } from "../constants/ingredients";
import {
  addIngredient,
  deleteIngredient,
  resetIngredients,
} from "../store/slices/browseSlice";
import { Link } from "react-router-dom";
import styles from "./browse.module.css";

export default function BrowsePage() {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector((state) => state.browse);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [noAnimationIds, setNoAnimationIds] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(resetIngredients());
  }, [dispatch]);

  function handleClick(ingredient) {
    const newSelectedIds = new Set(selectedIds);
    const newNoAnimationIds = new Set(noAnimationIds);

    if (selectedIds.has(ingredient.id)) {
      newSelectedIds.delete(ingredient.id);
      newNoAnimationIds.add(ingredient.id);
      dispatch(deleteIngredient({ id: ingredient.id }));
    } else {
      newSelectedIds.add(ingredient.id);
      newNoAnimationIds.delete(ingredient.id);
      dispatch(addIngredient(ingredient));
    }

    setSelectedIds(newSelectedIds);
    setNoAnimationIds(newNoAnimationIds);
  }

  const filteredIngredients = INGREDIENTS.filter((ingredient) =>
    ingredient.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.main
      className={styles["browse-content"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles["browse-header"]}>
        <motion.h1
          className={styles["browse-title"]}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose your ingredients
        </motion.h1>

        <motion.div
          className={styles["search-container"]}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Search size={20} className={styles["search-icon"]} />
          <input
            type="text"
            placeholder="Search ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles["search-input"]}
          />
          {searchTerm && (
            <button
              className={styles["clear-search"]}
              onClick={() => setSearchTerm("")}
            >
              <X size={16} />
            </button>
          )}
        </motion.div>
      </div>

      <motion.div
        className={styles["browse-stats"]}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className={styles["stats-container"]}>
          <Filter size={18} />
          <p>
            Selected:{" "}
            <span className={styles["selected-count"]}>
              {selectedIngredients.length}
            </span>
          </p>
        </div>

        {selectedIngredients.length > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Link to="recipes">
              <motion.button
                className={styles["submit-button"]}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Recipes
                <Check size={18} />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>

      <motion.ul
        className={styles["ingredients-grid"]}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.02,
            },
          },
        }}
      >
        <AnimatePresence>
          {filteredIngredients.map((ingredient) => (
            <motion.li
              key={ingredient.id}
              layout
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
              className={
                selectedIds.has(ingredient.id)
                  ? `${styles["ingredient-item"]} ${styles.selected}`
                  : styles["ingredient-item"]
              }
              onClick={() => handleClick(ingredient)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles["ingredient-image-container"]}>
                <img
                  src={ingredient.image || "/placeholder.svg"}
                  alt={ingredient.ingredient}
                />
              </div>
              <span className={styles["ingredient-name"]}>
                {ingredient.ingredient}
              </span>

              {selectedIds.has(ingredient.id) && (
                <motion.div
                  className={styles["selected-indicator"]}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <Check size={16} />
                </motion.div>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </motion.main>
  );
}
