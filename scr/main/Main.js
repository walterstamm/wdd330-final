import { createElement } from "../utils.js";
import RecipeSearch from "./RecipeSearch.js";
import { displayRecipeCards } from "./RecipeCard.js";

 function Main() {
  let main = createElement("main", { className: "main" });
  let recipeSearch = RecipeSearch();

  const recipeCardsContainer = createElement("div", { id: "recipe-cards", className: "recipe-cards-container" });


  main.appendChild(recipeSearch);
  main.appendChild(recipeCardsContainer);

  window.addEventListener('DOMContentLoaded', () => {
    displayRecipeCards();
  });


  return main;
}

export default Main;