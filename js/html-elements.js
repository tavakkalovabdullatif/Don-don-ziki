const elHands = document.querySelectorAll(".js-hand");
const elUser = document.querySelector("#user");
const elAi = document.querySelector("#ai");
const elReloadBtn = document.querySelector("#reloadbtn");
const elGameZone = document.getElementById("gameZone");
const elProccessZone = document.getElementById("proccessZone");
const elAdvancedMode = document.getElementById("advancedMode");
const elRules = document.getElementById("rules");
const rulesBtn = document.getElementById("rules");
const modal = document.getElementById("default-modal");
const closeBtn = modal.querySelector("[data-modal-hide='default-modal']");

export {
  elHands,
  elUser,
  elAi,
  elReloadBtn,
  elProccessZone,
  elGameZone,
  elAdvancedMode,
  elRules,
  rulesBtn,
  modal,
  closeBtn,
};
