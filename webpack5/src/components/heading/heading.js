import "./heading.scss";
class heading {
  render() {
    const text = document.createElement("text");
    text.innerHTML = "Heading is awesome";
    const body = document.querySelector("body");
    body.appendChild(text);
  }
}
export default heading;
