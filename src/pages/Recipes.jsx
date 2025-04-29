import React from "react";
import { useSelector } from "react-redux";
import { RECIPES } from "../constants/recipes";
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
    <main className={styles.recipesContent}>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipe}>
            <h3 className={styles.recipeTitle}>{recipe.name}</h3>
            <img
              src={recipe.image}
              alt={recipe.name}
              className={styles.recipeImage}
            />
            <ul>
              {Object.keys(recipe.steps).map((step) => (
                <li key={step}>{recipe.steps[step]}</li>
              ))}
            </ul>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className={
                    selectedIngredients.some(
                      (selected) => selected.ingredient === ingredient
                    )
                      ? styles.selected
                      : styles.notSelected
                  }
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No recipes match your selected ingredients.</p>
      )}
    </main>
  );
}
