import { elAi, elHands, elUser } from "./html-elements.js";

// aichoose
function aiChoose() {
  const hands = ["rock", "paper", "scissors"];
  const randomIndex = Math.trunc(Math.random() * hands.length);
  return hands[randomIndex];
}

// Procces zone
function procces(bolean) {
  if (bolean) {
  }
}

elHands.forEach((elHands) => {
  elHands.addEventListener("click", (evt) => {
    const user = evt.target.alt;
    const ai = aiChoose();
    elUser.src = evt.target.src;

    setTimeout(() => {
      elAi.src = `./img/${ai}.svg`;
    }, 1000);
  });
});
