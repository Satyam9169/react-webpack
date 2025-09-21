class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "click Here";
    const body = document.querySelector("body");
    button.onclick = function(){
        const p = document.createElement('p');
        p.innerHTML = 'This is button paragraph';
        // const body = document.querySelector('p');
        body.appendChild(p)
        console.log(p)
    }
    body.appendChild(button);
  }
}

export default HelloWorldButton;
