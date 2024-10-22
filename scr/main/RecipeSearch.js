import { createElement } from "../utils.js";
import { searchRecipesByIngredients } from "../data/spoonacularService.js";

function RecipeSearch() {
  const container = createElement("div", { className: "recipe-search" });

  const input = createElement("input", {
    type: "text",
    placeholder: "Enter ingredients (comma separated)",
  });

  const button = createElement("button", { textContent: "Search Recipes" });

  button.addEventListener("click", async () => {
    const ingredients = input.value;
    const recipes = await searchRecipesByIngredients(ingredients);
    displayRecipes(recipes);
  });

  container.appendChild(input);
  container.appendChild(button);

  return container;
}

function displayRecipes(recipes) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results

  recipes.forEach((recipe) => {
    const recipeElement = createElement("div", { className: "recipe" });
    recipeElement.textContent = recipe.title;
    resultsContainer.appendChild(recipeElement);
  });
}

export default RecipeSearch;