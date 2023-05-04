let i = 0;

export function createDoing() {
  const doingDiv = document.querySelector(".doing");
  const createDiv = document.createElement("div");
  createDiv.classList.add("doing__div" + i);
  doingDiv.appendChild(createDiv);
  const createDivInputText = document.createElement("input");
  createDivInputText.setAttribute("type", "text");
  createDivInputText.classList.add("doing__div__input_text");
  createDiv.appendChild(createDivInputText);
  const createDivInputBtn = document.createElement("input");
  createDivInputBtn.setAttribute("type", "button");
  createDivInputBtn.setAttribute("value", "Add");
  createDivInputBtn.classList.add("doing__div__input_btn");
  createDiv.appendChild(createDivInputBtn);
  const createDivUl = document.createElement("ul");
  createDivUl.classList.add("doing__div__ul");
  createDiv.appendChild(createDivUl);

  // Fix 1: Move addTextUl function outside createDoing function
  // to avoid creating multiple event listeners on the button
  function addTextUl() {
    const createDivUl = createDiv.querySelector(".doing__div__ul"); // get the ul in the current div
    const createDivInputText = createDiv.querySelector(
      ".doing__div__input_text"
    ); // get the input text in the current div
    const createDivLi = document.createElement("li");
    createDivLi.innerText = createDivInputText.value;
    createDivUl.appendChild(createDivLi);
    createDivInputText.value = ""; // clear the input field
  }

  // Fix 2: Increment i after assigning class to the div
  i++;

  // Fix 3: Add event listener to the button outside addTextUl function
  createDivInputBtn.addEventListener("click", addTextUl);
}
