let i = 0;

export function createDone() {
  const doingDiv = document.querySelector(".done");
  const createDiv = document.createElement("div");
  createDiv.classList.add("done__div" + i);
  doingDiv.appendChild(createDiv);
  const createDivInputText = document.createElement("input");
  createDivInputText.setAttribute("type", "text");
  createDivInputText.classList.add("done__div__input_text");
  createDiv.appendChild(createDivInputText);
  const createDivInputBtn = document.createElement("input");
  createDivInputBtn.setAttribute("type", "button");
  createDivInputBtn.setAttribute("value", "Add");
  createDivInputBtn.classList.add("done__div__input_btn");
  createDiv.appendChild(createDivInputBtn);
  const createDivUl = document.createElement("ul");
  createDivUl.classList.add("done__div__ul");
  createDiv.appendChild(createDivUl);

  function addTextUl() {
    const createDivUl = createDiv.querySelector(".done__div__ul");
    const createDivInputText = createDiv.querySelector(
      ".done__div__input_text"
    );
    const createDivLi = document.createElement("li");
    createDivLi.innerText = createDivInputText.value;
    createDivUl.appendChild(createDivLi);
    createDivInputText.value = "";
  }

  i++;

  createDivInputBtn.addEventListener("click", addTextUl);
}
