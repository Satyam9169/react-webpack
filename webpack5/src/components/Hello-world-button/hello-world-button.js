import "./hello-word-button.scss";
class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "click Here";
    button.classList.add("hello-world-button");
    const body = document.querySelector("body");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "This is button paragraph";
      p.classList.add("hello-world-text");
      body.appendChild(p);
      console.log(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
