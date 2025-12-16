import {
  elAi,
  elGameZone,
  elHands,
  elProccessZone,
  elReloadBtn,
  elUser,
} from "./html-elements.js";

// aichoose
function aiChoose() {
  const hands = ["rock", "paper", "scissors"];
  const randomIndex = Math.trunc(Math.random() * hands.length);
  return hands[randomIndex];
}

// Procces zone
function procces(bolean) {
  if (bolean) {
    elGameZone.style.display = "hidden";
    elProccessZone.style.display = "grid";
  } else {
    elGameZone.style.display = "grid";
    elProccessZone.style.display = "hidden";
  }
}

elHands.forEach((elHands) => {
  elHands.addEventListener("click", (evt) => {
    procces(true);
    const user = evt.target.alt;
    const ai = aiChoose();
    elUser.src = evt.target.src;

    setTimeout(() => {
      elAi.src = `./img/${ai}.svg`;
      const winner = checkWinner(user, ai);
      console.log(winner);
    }, 1000);
  });
});

// Check winner
function checkWinner(user, ai) {
  if (user === ai) {
    return "TIE";
  } else if (user === "paper" && ai === "scissors") {
    return "AI";
  } else if (user === "scissors" && ai === "rock") {
    return "AI";
  } else if (user === "rock" && ai === "paper") {
    return "AI";
  } else {
    return "USER";
  }
}

// Reload game
elReloadBtn.addEventListener("click", () => {
  procces(false);
  elAi.src = `./img/choosing.svg`;
});
