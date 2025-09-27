import HelloWorldButton from "./components/Hello-world-button/hello-world-button.js";
import heading from "./components/heading/heading.js";
// import addImage from "./add-image.js";
// import { fruits } from "./fruits.js";

// helloWorld();
// addImage();
// console.log(fruits);
const newButton = new HelloWorldButton();
const Heading = new heading();
Heading.render();
newButton.render();


