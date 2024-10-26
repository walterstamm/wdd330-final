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
    
    const main = document.querySelector("main");
    main.innerHTML = "";

    main.appendChild(displayRecipes(recipes));

  });

  container.appendChild(input);
  container.appendChild(button);

  return container;
}

function displayRecipes(recipes) {

  // const resultsContainer = document.getElementById("results");
  const resultsContainer = createElement("div", { id: "results" });
  resultsContainer.innerHTML = ""; // Clear previous results

  recipes.forEach((recipe) => {
    const recipeElement = createElement("div", { className: "recipe" });
    recipeElement.textContent = recipe.title;
    recipeElement.image = recipe.image;
    resultsContainer.appendChild(recipeElement);
  });

  return resultsContainer;
}

export default RecipeSearch;