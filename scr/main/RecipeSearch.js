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
    saveSearch(ingredients);
    const recipes = await searchRecipesByIngredients(ingredients);
    displayRecipes(recipes,ingredients);

  });

  container.appendChild(input);
  container.appendChild(button);


  if (localStorage.getItem("searches") !== null) {
    const savedSearches = displaySavedSearches();
    container.appendChild(savedSearches);

  }
  
  
  

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


function saveSearch(ingredients) {
  const searches = JSON.parse(localStorage.getItem("searches")) || [];
  if (!searches.includes(ingredients)) {
    searches.push(ingredients);
    localStorage.setItem("searches", JSON.stringify(searches));
  }
}



function displaySavedSearches() {
  const searches = JSON.parse(localStorage.getItem("searches")) || [];
  const savedSearchesContainer = createElement("div", { className: "saved-searches" });
  const title = createElement("h3", { textContent: "Saved Searches" });
  
  savedSearchesContainer.appendChild(title);
  searches.forEach(search => {
    const searchItem = createElement("div", { textContent: search, className: "search-item" });
    searchItem.addEventListener("click", async () => {
      input.value = search; // Rellenar el input con la búsqueda guardada
      const recipes = await searchRecipesByIngredients(search);
      displayRecipes(recipes, search);
    });
    savedSearchesContainer.appendChild(searchItem);
  });

  return savedSearchesContainer;
}

export default RecipeSearch;