const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.URL_BASE;

export async function searchRecipesByIngredients(ingredients) {
  const response = await fetch(`${BASE_URL}/findByIngredients?ingredients=${ingredients}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
}