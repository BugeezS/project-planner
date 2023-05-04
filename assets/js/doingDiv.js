export function createDoing() {
  const doingDiv = document.querySelector(".doing");
  const createDiv = document.createElement("div");
  createDiv.classList.add("doing__div");
  doingDiv.appendChild(createDiv);
  const createDivInputText = document.createElement("input");
  createDivInputText.setAttribute("type", "text");
  createDivInputText.classList.add("doing__div__input_text");
  doingDiv.appendChild(createDivInputText);
  const createDivInputBtn = document.createElement("input");
  createDivInputBtn.setAttribute("type", "button");
  createDivInputBtn.setAttribute("value", "Add");
  createDivInputBtn.classList.add("doing__div__input_btn");
  doingDiv.appendChild(createDivInputBtn);
  const createDivUl = document.createElement("ul");
  createDivUl.classList.add("doing__div__ul");
  doingDiv.appendChild(createDivUl);
}
