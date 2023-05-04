

export function creatodo() {
    let i = 0;
    const tododiv = document.querySelector(".to_do");
    const creatdiv = document.createElement("div");
    creatdiv.classList.add("to_do__div" + i);
    tododiv.appendChild(creatdiv);
    const createDivInputText = document.createElement("input");
    createDivInputText.setAttribute("type", "text");
    createDivInputText.classList.add("to_do__div__input_text");
    creatdiv.appendChild(createDivInputText); 
    const createDivInputBtn = document.createElement("input");
    createDivInputBtn.setAttribute("type", "button");
    createDivInputBtn.setAttribute("value", "add");
    createDivInputBtn.classList.add("to_do__div__input_btn");
    creatdiv.appendChild(createDivInputBtn); 
    const creatDivUl = document.createElement("ul");
    creatDivUl.classList.add("to_do__div__ul");
    creatdiv.appendChild(creatDivUl); 

    function addTextUl() {
        const creatDivUl = creatdiv.querySelector(".to_do__div__ul");
        const createDivInputText = creatdiv.querySelector(".to_do__div__input_text");

        const creatDivli = document.createElement("li");
        creatDivli.innerText = createDivInputText.value;
        creatDivUl.appendChild(creatDivli);
        createDivInputText.value = "";
    }
    i++;

    createDivInputBtn.addEventListener("click", addTextUl);
}

