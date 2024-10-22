import { createElement } from "./utils.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./main/Main.js";

function App() {
  const header = Header();
  
  const main = Main();

  const footer = Footer();

  return createElement("div", {className: "app"}, [header, main, footer]);
}
export default App;

