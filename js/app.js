import {
  elAi,
  elGameZone,
  elHands,
  elProccessZone,
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
    elGameZone.style.display = "none";
    elProccessZone.style.display = "flex";
  } else {
    elGameZone.style.display = "flex";
    elProccessZone.style.display = "none";
  }
}

elHands.forEach((elHands) => {
  elHands.addEventListener("click", (evt) => {
    const user = evt.target.alt;
    const ai = aiChoose();
    elUser.src = evt.target.src;

    setTimeout(() => {
      elAi.src = `./img/${ai}.svg`;
      procces(true);
    }, 1000);
  });
});
