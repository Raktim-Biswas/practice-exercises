const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!"
container.style.color = "red";

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!"
heading.style.color = "blue";

container.appendChild(paragraph);
container.appendChild(heading);

const subDiv = document.createElement("div");
subDiv.classList.add("subDiv");
subDiv.setAttribute("style", "border: black; background: pink");

container.appendChild(subDiv);

const subHeading = document.createElement("h1");
subHeading.textContent = "I'm in a div";

subDiv.appendChild(subHeading);

const subParagraph = document.createElement("p");
subParagraph.textContent = "ME TOO!";

subDiv.appendChild(subParagraph);




