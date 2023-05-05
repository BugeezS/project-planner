export function creatodo() {
  let i = 0;
  const tododiv = document.querySelector(".to_do");
  const creatdiv = document.createElement("div");
  creatdiv.classList.add("to_do__div" + i);

  const countdownDiv = document.createElement("div");
  countdownDiv.classList.add("countdown");
  creatdiv.appendChild(countdownDiv);

  const createDivInputText = document.createElement("input");
  createDivInputText.setAttribute("type", "text");
  createDivInputText.classList.add("to_do__div__input_text");
  creatdiv.appendChild(createDivInputText);

  const createDivInputBtn = document.createElement("input");
  createDivInputBtn.setAttribute("type", "button");
  createDivInputBtn.setAttribute("value", "add");
  createDivInputBtn.classList.add("to_do__div__input_btn");
  creatdiv.appendChild(createDivInputBtn);

  tododiv.appendChild(creatdiv);
  const divul = document.createElement("ul");
  divul.classList.add("to_do__div__ul");
  creatdiv.appendChild(divul);
  function addTextUl() {
    const createDivInputText = creatdiv.querySelector(
      ".to_do__div__input_text"
    );
    const creatDivUl = creatdiv.querySelector(".to_do__div__ul");

    const creatDivli = document.createElement("li");
    creatDivli.innerText = createDivInputText.value;

    creatDivUl.appendChild(creatDivli);
    createDivInputText.value = "";
  }

  i++;

  createDivInputBtn.addEventListener("click", addTextUl);

  function addCountdown() {
    const countdownNum = parseInt(countdownInput.value);
    if (countdownNum) {
      const now = new Date();
      const deadline = new Date(
        now.getTime() + countdownNum * 24 * 60 * 60 * 1000
      );

      const daysLeft = Math.floor(countdownNum);
      const hoursLeft = Math.floor((countdownNum % 1) * 24);

      if (daysLeft > 0) {
        countdownDiv.innerText = `${daysLeft} days left`;
      } else if (hoursLeft > 0) {
        countdownDiv.innerText = `${hoursLeft} hours left`;
      }

      countdownInput.value = "";
      countdownInput.disabled = true;
      countdownBtn.disabled = true;

      createDivInputText.disabled = true;
      createDivInputBtn.disabled = true;

      function updateCountdown() {
        const now = new Date();
        const timeLeft = deadline.getTime() - now.getTime();

        if (timeLeft <= 0) {
          countdownDiv.innerText = "Time's up!";
        } else {
          const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hoursLeft = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );

          if (daysLeft > 0) {
            countdownDiv.innerText = `${daysLeft} days left`;
          } else if (hoursLeft > 0) {
            countdownDiv.innerText = `${hoursLeft} hours left`;
          }
        }
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  }

  const countdownInput = document.createElement("input");
  countdownInput.setAttribute("type", "text");
  countdownInput.classList.add("to_do__div__countdown_input");
  creatdiv.appendChild(countdownInput);

  const countdownBtn = document.createElement("input");
  countdownBtn.setAttribute("type", "button");
  countdownBtn.setAttribute("value", "Set Countdown");
  countdownBtn.classList.add("to_do__div__countdown_btn");
  creatdiv.appendChild(countdownBtn);

  countdownBtn.addEventListener("click", addCountdown);
  function addCountdown() {
    const countdownNum = parseInt(countdownInput.value);
    if (countdownNum) {
      const now = new Date();
      const deadline = new Date(
        now.getTime() + countdownNum * 24 * 60 * 60 * 1000
      );

      const daysLeft = Math.floor(countdownNum);
      const hoursLeft = Math.floor((countdownNum % 1) * 24);

      if (daysLeft > 0) {
        countdownDiv.innerText = `${daysLeft} days left`;
      } else if (hoursLeft > 0) {
        countdownDiv.innerText = `${hoursLeft} hours left`;
      }

      countdownInput.remove();
      countdownBtn.remove();

      function updateCountdown() {
        const now = new Date();
        const timeLeft = deadline.getTime() - now.getTime();

        if (timeLeft <= 0) {
          countdownDiv.innerText = "Time's up!";
        } else {
          const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hoursLeft = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );

          if (daysLeft > 0) {
            countdownDiv.innerText = `${daysLeft} days left`;
          } else if (hoursLeft > 0) {
            countdownDiv.innerText = `${hoursLeft} hours left`;
          }
        }
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  }
}
