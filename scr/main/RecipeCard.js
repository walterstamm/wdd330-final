import { createElement } from "../utils.js";

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

function displayRecipeCards(recipes) {
  const container = document.getElementById("recipe-cards");
  container.innerHTML = ""; 

  recipes.forEach((recipe) => {
    const card = createRecipeCard(recipe);
    container.appendChild(card);
  });
}

export { displayRecipeCards };