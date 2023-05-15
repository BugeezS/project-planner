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
  const i = 0;

  if (toDoUl) {
    doingSection.appendChild(toDoUl);
  }
  if (countdownDiv) {
    doingSection.appendChild(countdownDiv);
  }

  const tododiv = document.querySelector(".to_do__div");
  tododiv.remove();

  const transferButtonDone = document.createElement("input");
  transferButtonDone.type = "button";
  transferButtonDone.value = "Done";
  transferButtonDone.classList.add("transfertButtonDone");
  doingSection.appendChild(transferButtonDone);

  const transferButtonDoneUse = document.querySelector(".transfertButtonDone");

  transferButtonDoneUse.addEventListener("click", () => {
    const doneSection = document.querySelector(".done");
    const doingSection = document.querySelector(".doing");

    const toDoUl = doingSection.querySelector(".to_do__div__ul");
    const countdownDiv = doingSection.querySelector(".countdown");

    if (toDoUl) {
      doneSection.appendChild(toDoUl);
    }
    if (countdownDiv) {
      doneSection.appendChild(countdownDiv);
    }

    transferButtonDone.remove();

    const deleteButtonDone = document.createElement("input");
    deleteButtonDone.type = "button";
    deleteButtonDone.value = "Delete";
    deleteButtonDone.classList.add("deleteButtonDone");
    doneSection.appendChild(deleteButtonDone);

    deleteButtonDone.addEventListener("click", () => {
      const transferredElements = doneSection.querySelectorAll(
        ".to_do__div__ul, .countdown"
      );
      transferredElements.forEach((element) => {
        element.remove();
      });
      deleteButtonDone.remove();
    });
  });
});
