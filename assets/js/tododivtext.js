let arraytodo = [];
export function exportTextTodo() {
    const divInputText = document.querySelector(".to_do__div__input_text");
    let text = divInputText.value;
    const todoDivUl = document.querySelector(".to_do__div__ul");
    const todoDivLi = document.createElement("li");
    todoDivUl.appendChild(todoDivLi);
    todoDivLi.textContent = text;
    arraytodo.push(text);
    divInputText.value = "";
} 

