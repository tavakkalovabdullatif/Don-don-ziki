const elHands = document.querySelectorAll(".js-hand");
const elUser = document.querySelector("#user");
const elAi = document.querySelector("#ai");
const elReloadBtn = document.querySelector("#reloadbtn");
const elGameZone = document.getElementById("gameZone");
const elProccessZone = document.getElementById("proccessZone");
const elModeChanger = document.getElementById("advancedMode");
const rulesBtn = document.getElementById("rules");
const modal = document.getElementById("default-modal");
const elBacis = document.getElementById("basic");
const elAdvanced = document.getElementById("advanced");
const elScore = document.getElementById("score");
const closeBtn = modal.querySelector("[data-modal-hide='default-modal']");

export {
  elHands,
  elUser,
  elAi,
  elReloadBtn,
  elProccessZone,
  elGameZone,
  elModeChanger,
  rulesBtn,
  modal,
  closeBtn,
  elAdvanced,
  elBacis,
  elScore,
};
