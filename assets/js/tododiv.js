
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
    const createDivInputCheckboxAll = document.createElement("input");
    createDivInputCheckboxAll.setAttribute("type", "checkbox");
    createDivInputCheckboxAll.classList.add("to_do__div__input_checkbox_all");
    createDivInputCheckboxAll.addEventListener("change", function () {
        const createDivInputCheckboxes = creatdiv.querySelectorAll(
            ".to_do__div__input_checkbox"
        );
        for (let i = 0; i < createDivInputCheckboxes.length; i++) {
            createDivInputCheckboxes[i].checked = createDivInputCheckboxAll.checked;
        }
    });
    creatdiv.appendChild(createDivInputCheckboxAll);
    const createDivInputCheckboxAllLabel = document.createElement("label");
    createDivInputCheckboxAllLabel.innerText = "Select All";
    creatdiv.appendChild(createDivInputCheckboxAllLabel);
    const creatDivUl = document.createElement("ul");
    creatDivUl.classList.add("to_do__div__ul");
    creatdiv.appendChild(creatDivUl);
    const createDivInputDeleteAllBtn = document.createElement("input");
    createDivInputDeleteAllBtn.setAttribute("type", "button");
    createDivInputDeleteAllBtn.setAttribute("value", "Delete All");
    createDivInputDeleteAllBtn.classList.add("to_do__div__input_btn_delete_all");
    createDivInputDeleteAllBtn.addEventListener("click", function () {
        const createDivUl = creatdiv.querySelector(".to_do__div__ul");
        const createDivInputCheckboxes = creatdiv.querySelectorAll(
            ".to_do__div__input_checkbox"
        );
        for (let i = 0; i < createDivInputCheckboxes.length; i++) {
            const checkbox = createDivInputCheckboxes[i];
            if (checkbox.checked) {
                const li = checkbox.parentElement;
                creatDivUl.removeChild(li);
            }
        }
    });
    creatdiv.appendChild(createDivInputDeleteAllBtn);

    function addTextUl() {
        const creatDivUl = creatdiv.querySelector(".to_do__div__ul");
        const createDivInputText = creatdiv.querySelector(".to_do__div__input_text");

        const creatDivli = document.createElement("li");
        const createDivInputCheckbox = document.createElement("input");
        createDivInputCheckbox.setAttribute("type", "checkbox");
        createDivInputCheckbox.classList.add("to_do__div__input_checkbox");
        creatDivli.appendChild(createDivInputCheckbox);
        creatDivli.innerHTML += createDivInputText.value;
        creatDivUl.appendChild(creatDivli);
        createDivInputText.value = "";
    }
    i++;

    createDivInputBtn.addEventListener("click", addTextUl);
}
