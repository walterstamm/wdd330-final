export function createElement(tag, attributes = {}, children=[]) {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    if(~key.indexOf('-')) {
      element.setAttribute(key, value);
    } else {
      element[key] = value;
    }
  });
  children.forEach((child) => {
    element.appendChild(child);
  });
  return element;
}