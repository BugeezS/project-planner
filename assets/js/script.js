import { createDoing } from "./doingDiv.js";
import { creatodo } from "./tododiv.js";
import { createDone } from "./divDone.js";

const buttontodoDiv = document.querySelector("#to_do__button");
buttontodoDiv.addEventListener("click", creatodo);

const transferButton = document.getElementById("transfertButton");

transferButton.addEventListener("click", () => {
  const toDoSection = document.querySelector(".to_do");
  const doingSection = document.querySelector(".doing");

  const toDoUl = toDoSection.querySelector(".to_do__div__ul");
  const countdownDiv = toDoSection.querySelector(".countdown");

  if (toDoUl) {
    const doingDiv = document.createElement("div");
    doingDiv.classList.add("doing__div");

    if (countdownDiv) {
      doingDiv.appendChild(countdownDiv);
    }
    doingDiv.appendChild(toDoUl);

    const transferButtonDiv = document.createElement("div");
    transferButtonDiv.classList.add("transfer-button-div");
    const transferButtonDone = document.createElement("input");
    transferButtonDone.type = "button";
    transferButtonDone.value = "Done";
    transferButtonDone.classList.add("transfertButtonDone");
    transferButtonDiv.appendChild(transferButtonDone);
    doingDiv.appendChild(transferButtonDiv);

    doingSection.appendChild(doingDiv);
  }

  const tododiv = document.querySelector(".to_do__div");
  tododiv.remove();

  const transferButtonDoneUse = document.querySelectorAll(
    ".transfertButtonDone"
  );

  transferButtonDoneUse.forEach((button) => {
    button.addEventListener("click", () => {
      const doneSection = document.querySelector(".done");
      const toDoDiv = button.closest(".doing__div");

      if (toDoDiv) {
        const ulElement = toDoDiv.querySelector(".to_do__div__ul");
        const countdownDiv = toDoDiv.querySelector(".countdown");

        if (ulElement) {
          const doneDiv = document.createElement("div");
          doneDiv.classList.add("done__div");
          doneDiv.appendChild(ulElement);
          if (countdownDiv) {
            doneDiv.appendChild(countdownDiv);
          }

          const deleteButtonDone = document.createElement("input");
          deleteButtonDone.type = "button";
          deleteButtonDone.value = "Delete";
          deleteButtonDone.classList.add("deleteButtonDone");
          doneDiv.appendChild(deleteButtonDone);

          doneSection.appendChild(doneDiv);

          deleteButtonDone.addEventListener("click", () => {
            doneDiv.remove();
          });
        }
        toDoDiv.remove();
      }
    });
  });
});
