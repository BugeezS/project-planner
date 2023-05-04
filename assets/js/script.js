import { createDoing } from "./doingDiv.js";
import { exportTextDoing } from "./doingDivText.js";

createDoing();
const buttonDoingDiv = document.querySelector(".doing__div__input_btn");

buttonDoingDiv.addEventListener("click", exportTextDoing);
