import { createElement } from "./utils.js"; 

function Header() {

    let header = createElement("h1", {textContent: "Recipe Finder", className: "header"});

    return header;
}

export default Header;

