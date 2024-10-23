import { createElement } from "../utils.js";
import RecipeSearch from "./RecipeSearch.js";
import { displayRecipeCards } from "./RecipeCard.js";
import { getRecipeForCards } from "../data/spoonacularService.js";

 function Main() {
  let main = createElement("main", { className: "main" });
  let recipeSearch = RecipeSearch();

  const recipeCardsContainer = createElement("div", { id: "recipe-cards" });

  main.appendChild(recipeSearch);
  main.appendChild(recipeCardsContainer);

  const exampleRecipes = [
    { title: "Spaghetti Carbonara", image: "path/to/image1.jpg" },
    { title: "Chicken Alfredo", image: "path/to/image2.jpg" },
    { title: "Beef Stroganoff", image: "path/to/image3.jpg" },
  ];

  window.addEventListener('DOMContentLoaded', () => {
    displayRecipeCards();
  });


  return main;
}

export default Main;