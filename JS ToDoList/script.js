let addToDoBtn = document.querySelector("button");
let tasksCon = document.getElementById("tasksJs");
let inputField = document.querySelector("input");

addToDoBtn.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  paragraph.style.padding = "10px";
  paragraph.style.fontSize = "25px";
  paragraph.innerText = inputField.value;
  inputField.value = "";
  tasksCon.appendChild(paragraph);
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", () => {
    tasksCon.removeChild(paragraph);
  });
});

inputField.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    let paragraph = document.createElement("p");
    paragraph.style.padding = "10px";
    paragraph.style.fontSize = "25px";
    paragraph.innerText = inputField.value;
    inputField.value = "";
    tasksCon.appendChild(paragraph);
  }
});
