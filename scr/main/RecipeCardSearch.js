import { createElement } from "../utils.js";
import { searchRecipeById } from "../data/spoonacularService.js";


export function createRecipeCardSearch(recipe) {
  const card = createElement("div", { className: "recipe-card" });

  const image = createElement("img", { src: recipe.image, alt: recipe.title, className: "recipe-image" });
  const title = createElement("h3", { textContent: recipe.title });

  card.appendChild(image);
  card.appendChild(title);

  // when click on the card to see the recipe details
  card.addEventListener("click", async () => {
    const main = document.querySelector("main");
    main.innerHTML = ""; 

    const recipeInfo = await searchRecipeById(recipe.id);

    // return button to return to the main page
    const returnButton = createElement("button", { textContent: "Return", className: "return-button" });
    returnButton.addEventListener("click", () => {
      window.location.href = "/index.html";
    });

    // ingredients list
    const ingredients = recipeInfo.extendedIngredients.map(ingredient => ingredient.original);
    const listIngredients = createElement("ul", {className: "ingredients-list"});
    ingredients.map(ingredient => {
      const listItem = createElement("li", {textContent: ingredient});
      listIngredients.appendChild(listItem);
    });

    
    const recipeDetails = createElement("div", { className: "recipe-details" });
    const recipeTitle = createElement("h2", { textContent: recipeInfo.title });
    const recipeImage = createElement("img", { src: recipeInfo.image, alt: recipeInfo.title });
    // const recipeDescription = createElement("div", { textContent: recipe.instructions ||   "Description not available", className: "recipe-description" });
    const recipeDescription = createElement("div", {className: "recipe-description" });
    const h2 = createElement("h2", {textContent: "Instructions"});
    const p = createElement("div", {textContent: recipeInfo.instructions || "Description not available"});
    const h2Ingredients = createElement("h2", {textContent: "Ingredients"});

    recipeDescription.appendChild(h2Ingredients);
    recipeDescription.appendChild(listIngredients);
    recipeDescription.appendChild(h2);
    recipeDescription.appendChild(p);
    recipeDetails.appendChild(returnButton);

    recipeDetails.appendChild(recipeTitle);
    recipeDetails.appendChild(recipeImage);
    recipeDetails.appendChild(recipeDescription);
    main.appendChild(recipeDetails);
  });

  return card;
}


