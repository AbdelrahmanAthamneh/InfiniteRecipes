import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INGREDIENTS } from "../constants/ingredients";
import {
  addIngredient,
  deleteIngredient,
  resetIngredients,
} from "../store/slices/browseSlice";
import classes from "./browse.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BrowsePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetIngredients());
  }, []);
  const selectedIngredients = useSelector((state) => state.browse);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [noAnimationIds, setNoAnimationIds] = useState(new Set());

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

  return (
    <main className={classes["browse-content"]}>
      <h1>Choose your ingredients!</h1>
      <div>
        <p>Total Picked: {selectedIngredients.length}</p>
        {selectedIngredients.length > 0 && (
          <Link to="recipes">
            <button className={classes.submit}>Submit</button>
          </Link>
        )}
      </div>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.025,
            },
          },
        }}
        className={classes.ingredients}
      >
        {INGREDIENTS.map((ingredient) => (
          <motion.li
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            key={ingredient.id}
            className={
              selectedIds.has(ingredient.id)
                ? classes["ingredient-selected"]
                : noAnimationIds.has(ingredient.id)
                ? classes["ingredient-unselected-no-animation"]
                : classes["ingredient-unselected"]
            }
            onClick={() => handleClick(ingredient)}
          >
            <div className={classes["ingredient-image-container"]}>
              <img src={ingredient.image} alt={ingredient.ingredient} />
            </div>
            {ingredient.ingredient}
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}
