import {
  elAi,
  elGameZone,
  elHands,
  elProccessZone,
  elReloadBtn,
  elUser,
  modal,
  rulesBtn,
  closeBtn,
  elAdvanced,
  elBacis,
  elModeChanger,
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
    elGameZone.style.display = "grid";
    elProccessZone.style.display = "none";
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
  const actions = {
    paper: {
      scissors: "AI",
      rock: "USER",
      spock: "USER",
      lizard: "AI",
    },
    scissors: {
      paper: "USER",
      rock: "AI",
      spock: "AI",
      lizard: "USER",
    },
    rock: {
      paper: "AI",

      scissors: "USER",
      spock: "AI",
      lizard: "USER",
    },
    spock: {
      paper: "AI",

      rock: "USER",
      scissors: "USER",
      lizard: "AI",
    },
    lizard: {
      paper: "USER",
      rock: "AI",
      scissors: "AI",
      spock: "USER",
    },
  };

  if (user === ai) {
    return "TIE";
  } else {
    return actions[user][ai];
  }
}

// Reload game
elReloadBtn.addEventListener("click", () => {
  procces(false);
  elAi.src = `./img/choosing.svg`;
});

// Open/close modal

rulesBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Fonni bosganda yopish
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Mode changer
let activeMode = "basic";

function modeChanger() {
  if (activeMode === "basic") {
    activeMode = "advanced";
    elAdvanced.style.display = "flex";
    elBacis.style.display = "hidden";
    elModeChanger.innerText = "basic";
  } else {
    activeMode = "basic";
    elAdvanced.style.display = "hidden";
    elBacis.style.display = "flex";
    elModeChanger.innerText = "advanced";
  }
}

elModeChanger.addEventListener("click", modeChanger());
modeChanger();
