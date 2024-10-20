import { createElement } from "./utils.js";


function App() {
  const header = createElement("h1", {textContent: "Recipe Finder", className: "header"});
  
  const main = createElement("main", {className: "main"});

  const footer = createElement("footer", {textContent: "Recipe Finder", className: "footer"});

  return createElement("div", {className: "app"}, [header, main, footer]);
}
export default App;

