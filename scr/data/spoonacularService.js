const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.URL_BASE;

export async function searchRecipesByIngredients(ingredients) {
  const response = await fetch(`${BASE_URL}/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
}



export async function getRecipeForCards() {
  // const response = await fetch(`${BASE_URL}/recipes/random?number=3&apiKey=${API_KEY}`);
  // const data = await response.json();
  // return data.recipes;
  return [
    {
        "aggregateLikes": 17134,
        "analyzedInstructions": [
            { "step": "Preheat oven to 425 degrees. Melt the butter..." },
            { "step": "Fill two pie crusts with your turkey and vegetable mixture..." }
        ],
        "cheap": false,
        "cookingMinutes": null,
        "creditsText": "pinkwhen.com",
        "cuisines": [],
        "dairyFree": false,
        "diets": [],
        "dishTypes": ["lunch", "main course", "main dish", "dinner"],
        "extendedIngredients": [
            { "name": "flour", "amount": "2/3 cup" },
            { "name": "butter", "amount": "1 tbsp" }
        ],
        "gaps": "no",
        "glutenFree": false,
        "healthScore": 18,
        "id": 715467,
        "image": "https://img.spoonacular.com/recipes/715467-556x370.jpg",
        "imageType": "jpg",
        "instructions": "Step 1: Preheat oven to 425 degrees...",
        "lowFodmap": false,
        "occasions": [],
        "originalId": null,
        "preparationMinutes": null,
        "pricePerServing": 205.53,
        "readyInMinutes": 45,
        "servings": 8,
        "sourceName": "pinkwhen.com",
        "sourceUrl": "https://www.pinkwhen.com/turkey-pot-pie-recipe/",
        "spoonacularScore": 89.53,
        "spoonacularSourceUrl": "https://spoonacular.com/turkey-pot-pie-715467",
        "summary": "You can never have too many main course recipes...",
        "sustainable": false,
        "title": "Turkey Pot Pie",
        "vegan": false,
        "vegetarian": false,
        "veryHealthy": false,
        "veryPopular": true,
        "weightWatcherSmartPoints": 23
    }
]

}
