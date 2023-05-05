import { createDoing } from "./doingDiv.js";
import { creatodo } from "./tododiv.js";

const DoingBtn = document.querySelector("#doing__button");
DoingBtn.addEventListener("click", createDoing);
const buttontodoDiv = document.querySelector("#to_do__button");
buttontodoDiv.addEventListener("click", creatodo);

