import { createElement } from "../utils.js";
import RecipeSearch from "./RecipeSearch.js";

function Main() {
    let main = createElement("main", {className: "main"});
    let recipeSearch = RecipeSearch();

    main.appendChild(recipeSearch);

    return main;
}

export default Main;

