import HelloWorldButton from "./components/Hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
import addImage from "./add-image.js";
import { fruits } from "./fruits.js";

// Wrap risky code in try/catch
try {
  // Example functions (replace with your own)
  addImage();
  console.log(fruits);

  const newButton = new HelloWorldButton();
  const headingInstance = new Heading();
  headingInstance.render();
  newButton.render();

  // Example of intentional error to test
  // newButton.methodThatDoesNotExist();

  // NODE_ENV check
  if (process.env.NODE_ENV === "production") {
    console.log("production");
  } else if (process.env.NODE_ENV === "development") {
    console.log("development");
  }
} catch (err) {
  console.error("Runtime error:", err);
  alert("Error: " + err.message);
}

// import HelloWorldButton from "./components/Hello-world-button/hello-world-button.js";
// import heading from "./components/heading/heading.js";
/* import addImage from "./add-image.js";
 import { fruits } from "./fruits.js";

 helloWorld();
 addImage(); 
 console.log(fruits); */
// const newButton = new HelloWorldButton();
// const Heading = new heading();
// Heading.render();
// newButton.render();
