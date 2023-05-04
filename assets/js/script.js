import { createDoing } from "./doingDiv.js";
// import { exportTextDoing } from "./doingDivText.js";

const toDoBtn = document.querySelector("#doing__button");
toDoBtn.addEventListener("click", createDoing);
