import { createDoing } from "./doingDiv.js";
import { creatodo } from "./tododiv.js";
import { createDone } from "./divDone.js";

// const DoingBtn = document.querySelector("#doing__button");
// DoingBtn.addEventListener("click", createDoing);
const buttontodoDiv = document.querySelector("#to_do__button");
buttontodoDiv.addEventListener("click", creatodo);
const buttonDoneDiv = document.querySelector("#done__button");
buttonDoneDiv.addEventListener("click", createDone);

// Get the Transfer button element
const transferButton = document.getElementById("transfertButton");

// Add a click event listener to the Transfer button
transferButton.addEventListener("click", () => {
  // Get all the task items in the To Do section
  const toDoSection = document.querySelector(".to_do__div");
  const toDoTasks = toDoSection.querySelectorAll("*");

  // Loop through the task items and move them to the Doing section
  const doingSection = document.querySelector(".doing");
  toDoTasks.forEach((task) => {
    doingSection.appendChild(task);
  });

  // Remove the To Do section if it becomes empty
  if (toDoSection.children.length === 1) {
    toDoSection.remove();
  }
});
