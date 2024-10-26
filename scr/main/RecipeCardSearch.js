import { createElement } from "../utils.js";
import { getRecipeForCards } from "../data/spoonacularService.js";


export function createRecipeCardSearch(recipe) {
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

    console.log(recipe);
    
    const recipeDetails = createElement("div", { className: "recipe-details" });
    const recipeTitle = createElement("h2", { textContent: recipe.title });
    const recipeImage = createElement("img", { src: recipe.image, alt: recipe.title });
    // const recipeDescription = createElement("div", { textContent: recipe.instructions ||   "Description not available", className: "recipe-description" });
    const recipeDescription = createElement("div", {className: "recipe-description" });
    const h2 = createElement("h2", {textContent: "Instructions"});
    const p = createElement("div", {textContent: recipe.instructions || "Description not available"});

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


 async function displayRecipeCardsSearch() {
  let recipes = [] 
  recipes = await getRecipeForCards() 
  console.log(recipes);
  const container = document.getElementById("recipe-cards");
  container.innerHTML = ""; 

  recipes.forEach((recipe) => {
    const card = createRecipeCard(recipe);
    container.appendChild(card);
  });
}

export { displayRecipeCardsSearch };


