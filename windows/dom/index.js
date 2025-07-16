// ==========================
//  DOM In JavaScript:
// ==========================

// When a web browser loads an HTML document, it parses the HTML source codes and creates a tree like structure known as the Document Object Model (DOM). This DOM tree represents the structure of the HTML document, with each HTML element being a node in the tree.

//?  This entire DOM tree is then accessible to JavaScript as an object, JavaScript can interact with this object to manipulate the content, structure, and style of the document dynamically. The DOM essentially serves an an interface between the HTML document and JavaScript, providing a way for scripts to access and modify the document's structure and content.

// ==========================
//  DOM Navigation:
// ==========================

//? document represents the entire document
// console.log(document);

//? parentNode / parentElement:
// Navigate to the parent node or element.

// Document and DocumentFragment nodes can never have a parent, so parentNode will always return null. It also returns null if the node has just been created and is not yes attached to the tree.

//? childNode / children:
//? Navigate to child nodes or elements.

//? childNodes is a property that returns a NodeList containing all child nodes of a given element, including text nodes and comment nodes.

//? firstChild / firstElementChild:
//? Navigate to the first child node or element

//? lastChild / lastElementChild:
//? Navigate to the last child node or element

//? nextSibling / nextElementSibling:
//? Navigate to the next sibling node or element

//? previousSibling / previousElementSibling:
//? Navigate to the previous sibling node or element

//? closest(selector):
//? Find the closest ancestor  of the current element that matches a given selector.

// ==========================
//  DOM Filtering:
// ==========================

//? ChildNodes / Children:
// Get a nodeList or HTMLCollection and filter based on your criteria.

//? Filtering Siblings:
//? nextSibling / nextElementSibling.
//? previousSibling / previousElementSibling.

//? Closest(selector):
//? Find the closest ancestor that matches a given selector.
//? The closest(selector) method is used to find the closest ancestor of an element that matches a specified CSS selector. This method traverses up the DOM tree, strating from the current element, and returns the first ancestor that matches the provided selector. If no matching ancestor is found. If no matching ancestor is found, it returns null.

// ==========================
//  DOM Searching:
// ==========================

//? getElementById(id): Find an element by it's ID.

//? getElementByClassName(className): Find elements with a specific class name.

//? getElementByTagName(tagName): Find elements with a specific tag name.

//? querySelector(selector): Find the first element that matches the specified CSS selector.

//? querySelectorAll(selector): Find all elements that match the specified CSS selector.

// ==========================
//  DOM CRUD (Create, Read, Update, Delete):
// ==========================

//? createElement(tagName): Create a new HTML element.

//? appendChild(node): Append a node as the last child of a parent node.

//? removeChild(node): Remove a child node from it's parent.

//? addEventListener(event, function): Create an event listener to handle events.

//? removeEventListener(event, function): Remove an event listener.

//? setAttribute(name, value): Set the value of an attribute on an element

//? getAttribute(name): Get the value of a specific attribute on an element

//? innerHTML: Read or update the HTML content of an element.

//? textContent: Read or update the text content of an element.

// ==========================
//  DOM Iteration:
// ==========================

//? Iteration:
//? forEach (Array, from): Iterate through NodeList or convert to an array for more flexible manipulation.