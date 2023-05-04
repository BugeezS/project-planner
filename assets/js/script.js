import { createDoing } from "./doingDiv.js";
import { creatodo } from "./tododiv.js";
import { createDone } from "./divDone.js";

const DoingBtn = document.querySelector("#doing__button");
DoingBtn.addEventListener("click", createDoing);
const buttontodoDiv = document.querySelector("#to_do__button");
buttontodoDiv.addEventListener("click", creatodo);
const buttonDoneDiv = document.querySelector("#done__button");
buttonDoneDiv.addEventListener("click", createDone);
