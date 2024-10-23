import { createElement } from "../utils.js";
import { getRecipeForCards } from "../data/spoonacularService.js";


function createRecipeCard(recipe) {
  const card = createElement("div", { className: "recipe-card" });

  const image = createElement("img", { src: recipe.image, alt: recipe.title });
  const title = createElement("h3", { textContent: recipe.title });

  card.appendChild(image);
  card.appendChild(title);

  card.addEventListener("click", () => {
    alert(`You clicked on ${recipe.title}`);
  });

  return card;
}

 async function displayRecipeCards() {
  let recipes = [] 
  recipes = await getRecipeForCards()
  const container = document.getElementById("recipe-cards");
  container.innerHTML = ""; 

  recipes.forEach((recipe) => {
    console.log(recipe, "recipe");
    const card = createRecipeCard(recipe);
    container.appendChild(card);
  });
}




export { displayRecipeCards };