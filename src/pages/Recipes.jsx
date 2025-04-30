"use client";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, ChevronLeft, ChefHat } from "lucide-react";
import { RECIPES } from "../constants/recipes";
import { Link } from "react-router-dom";
import styles from "./Recipes.module.css";

export default function RecipesPage() {
  const selectedIngredients = useSelector((state) => state.browse);

  const includesSelectedIngredients = (
    recipeIngredients,
    selectedIngredients
  ) => {
    return recipeIngredients.some((ingredient) =>
      selectedIngredients.some((selected) => selected.ingredient === ingredient)
    );
  };

  const filteredRecipes = RECIPES.filter((recipe) =>
    includesSelectedIngredients(recipe.ingredients, selectedIngredients)
  );

  return (
    <motion.main
      className={styles["recipes-content"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles["recipes-header"]}>
        <Link to="/browse">
          <motion.button
            className={styles["back-button"]}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={18} />
            Back to ingredients
          </motion.button>
        </Link>

        <motion.h1
          className={styles["recipes-title"]}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your Recipes
        </motion.h1>

        <motion.p
          className={styles["recipes-subtitle"]}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Based on {selectedIngredients.length} selected ingredients
        </motion.p>
      </div>

      <AnimatePresence>
        {filteredRecipes.length > 0 ? (
          <motion.div
            className={styles["recipes-grid"]}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {filteredRecipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                className={styles["recipe-card"]}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className={styles["recipe-image-container"]}>
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    className={styles["recipe-image"]}
                  />
                </div>

                <div className={styles["recipe-content"]}>
                  <h3 className={styles["recipe-name"]}>{recipe.name}</h3>

                  <div className={styles["recipe-steps"]}>
                    <h4 className={styles["steps-title"]}>
                      <ChefHat size={14} />
                      Steps
                    </h4>
                    <ol className={styles["steps-list"]}>
                      {Object.values(recipe.steps).map((step, index) => (
                        <li key={index} className={styles["step-item"]}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className={styles["recipe-ingredients"]}>
                    <ul className={styles["ingredients-list"]}>
                      {recipe.ingredients.map((ingredient, index) => {
                        const isSelected = selectedIngredients.some(
                          (selected) => selected.ingredient === ingredient
                        );

                        return (
                          <li
                            key={index}
                            className={
                              isSelected
                                ? `${styles.ingredient} ${styles.selected}`
                                : styles.ingredient
                            }
                          >
                            {isSelected ? (
                              <Check
                                size={12}
                                className={styles["ingredient-icon"]}
                              />
                            ) : (
                              <AlertCircle
                                size={12}
                                className={`${styles["ingredient-icon"]} ${styles.missing}`}
                              />
                            )}
                            <span>{ingredient}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className={styles["no-recipes"]}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AlertCircle size={64} className={styles["no-recipes-icon"]} />
            <h2>No recipes found</h2>
            <p>
              No recipes match your selected ingredients. Try selecting
              different ingredients.
            </p>
            <Link to="/browse">
              <motion.button
                className={styles["back-to-browse"]}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Select more ingredients
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
