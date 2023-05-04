export function addTextUl() {
  const createDivUl = createDiv.querySelector(".doing__div__ul"); // get the ul in the current div
  const createDivInputText = createDiv.querySelector(".doing__div__input_text"); // get the input text in the current div
  const createDivLi = document.createElement("li");
  createDivLi.innerText = createDivInputText.value;
  createDivUl.appendChild(createDivLi);
  createDivInputText.value = ""; // clear the input field
}
