import { createElement } from "../utils.js";
import { searchRecipesByIngredients } from "../data/spoonacularService.js";
import { createRecipeCardSearch } from "./RecipeCardSearch.js";

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
    displayRecipes(recipes,ingredients);

  });

  container.appendChild(input);
  container.appendChild(button);

  return container;
}

function displayRecipes(recipes,searchWords) {

  const main = document.querySelector("main");
  main.innerHTML = "";
  const recipeCardsContainer = createElement("div", { id: "recipe-cards", className: "recipe-cards-container" });
  recipeCardsContainer.innerHTML = ""; 

  const returnButton = createElement("button", { textContent: "Return", className: "return-button" });
  returnButton.addEventListener("click", () => {
    window.location.href = "/index.html";
  });

  recipes.forEach((recipe) => {
    const card = createRecipeCardSearch(recipe);
      recipeCardsContainer.appendChild(card);
  });

  const recipeSearch = RecipeSearch();
  const words = createElement("h2", {textContent: `Recipes with ${searchWords}`, className: "title"});


  main.appendChild(recipeSearch);
  main.appendChild(words);
  main.appendChild(returnButton);
  main.appendChild(recipeCardsContainer);
}

export default RecipeSearch;