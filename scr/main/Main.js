import { createElement } from "../utils.js";
import RecipeSearch from "./RecipeSearch.js";
import { displayRecipeCards } from "./RecipeCard.js";

 function Main() {
  let main = createElement("main", { className: "main" });
  let recipeSearch = RecipeSearch();

  const recipeCardsContainer = createElement("div", { id: "recipe-cards", className: "recipe-cards-container" });

  const title = createElement("h1", {textContent: "It’s Your Lucky Day! Check Out These Recipes Just for You", className: "title"});

  main.appendChild(recipeSearch);
  main.appendChild(title);
  main.appendChild(recipeCardsContainer);

  window.addEventListener('DOMContentLoaded', () => {
    displayRecipeCards();
  });


  return main;
}

export default Main;