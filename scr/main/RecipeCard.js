import { createElement } from "../utils.js";
import { getRecipeForCards } from "../data/spoonacularService.js";


function createRecipeCard(recipe) {
  const card = createElement("div", { className: "recipe-card" });

  const image = createElement("img", { src: recipe.image, alt: recipe.title });
  const title = createElement("h3", { textContent: recipe.title });

  card.appendChild(image);
  card.appendChild(title);

  card.addEventListener("click", () => {
    const main = document.querySelector("main");
    main.innerHTML = ""; 

    const returnButton = createElement("button", { textContent: "Return", className: "return-button" });
    returnButton.addEventListener("click", () => {
      window.location.href = "/index.html";
    });


    const ingredients = recipe.extendedIngredients.map(ingredient => ingredient.original);

    const listIngredients = createElement("ul", {className: "ingredients-list"});
    ingredients.map(ingredient => {
      const listItem = createElement("li", {textContent: ingredient});
      listIngredients.appendChild(listItem);
    });

    const recipeDetails = createElement("div", { className: "recipe-details" });
    const recipeTitle = createElement("h2", { textContent: recipe.title });
    const recipeImage = createElement("img", { src: recipe.image, alt: recipe.title });
    const recipeDescription = createElement("div", {className: "recipe-description" });
    const h2Instructions = createElement("h2", {textContent: "Instructions"});
    const pInstructions = createElement("div", {textContent: recipe.instructions || "Description not available"});
    const h2Ingredients = createElement("h2", {textContent: "Ingredients"});

    recipeDescription.appendChild(h2Ingredients);
    recipeDescription.appendChild(listIngredients);
    recipeDescription.appendChild(h2Instructions);
    recipeDescription.appendChild(pInstructions);

    recipeDetails.appendChild(returnButton);

    recipeDetails.appendChild(recipeTitle);
    recipeDetails.appendChild(recipeImage);
    recipeDetails.appendChild(recipeDescription);
    main.appendChild(recipeDetails);
  });

  return card;
}


 async function displayRecipeCards() {
  let recipes = [] 
  recipes = await getRecipeForCards() 
  const container = document.getElementById("recipe-cards");
  container.innerHTML = ""; 

  recipes.forEach((recipe) => {
    const card = createRecipeCard(recipe);
    container.appendChild(card);
  });
}




export { displayRecipeCards };