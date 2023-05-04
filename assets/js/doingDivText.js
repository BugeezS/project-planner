let array = [];
export function exportTextDoing() {
  const divInpuText = document.querySelector(".doing__div__input_text");
  let text = divInpuText.value;
  const doingDivUl = document.querySelector(".doing__div__ul");
  const doigDivLi = document.createElement("li");
  doingDivUl.appendChild(doigDivLi);
  doigDivLi.textContent = text;
  array.push(text);
  divInpuText.value = "";
}
