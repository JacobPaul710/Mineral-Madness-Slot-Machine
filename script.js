//Constants and Variables

let debounce = false;

const stromatolite = "./Project_1_sources/Slot_array_images/stromatolite.png";
const pictureJasper =
  "./Project_1_sources/Slot_array_images/owyhee_picture_jasper.png";
const mossAgate = "./Project_1_sources/Slot_array_images/maury_moss_agate.png";

const slotArray = [pictureJasper, mossAgate, stromatolite];


//Cached Element References

const reelVariables = document.querySelectorAll(".reel-value");

const machineArm = document.querySelector("#machine-arm");

const paySlot = document.querySelector("#pay-slot");

const roundOutput = document.querySelector(".round-output");

const remainingBalance = document.querySelector(".remaining-balance");

const stakeAmount = document.querySelector("#stake-amount");

const stakeInputButton = document.querySelector("#stake-input-button");

const stakeOutput = document.querySelector("#staking-amount-output");

const winningReel = document.querySelectorAll(".winning-reel");
console.log(winningReel);

for (let i = 0; i < reelVariables.length; i++) {
  const randomIndex = Math.floor(Math.random() * slotArray.length);
  const background = slotArray[randomIndex];
  reelVariables[i].style.backgroundImage = `url(${background})`;
}

//Event Listeners

paySlot.addEventListener("click", inputMoney);
machineArm.addEventListener("click", function () {
  if (debounce === true) return;
  debounce = true;
  generateArmMotion();
  generateReelGif();
  setTimeout(variableAssigner, 1000);
  setTimeout(isAWinner, 1001);
  setTimeout(calculateRoundOutput, 1002);
  setTimeout(generateStaticArm, 1000);
});
stakeInputButton.addEventListener("click", determineStakeAmount);

// Functions

let winner;
let balance = 0;

function inputMoney() {
  let amountInput = +prompt("Enter desired cash amount");
  balance += amountInput;
  remainingBalance.innerText = balance;
}

function determineStakeAmount() {
  let amountStaked = parseInt(stakeAmount.value);
  stakeOutput.innerText = amountStaked;
}

function generateArmMotion() {
  const animatedArm =
    "./Project_1_sources/slot-machine-arm-animated.gif" + "?x=" + Math.random();
  machineArm.style.backgroundImage = `url(${animatedArm})`;
  console.log("a");
}

function generateStaticArm() {
  debounce = false;
  const staticArm = "./Project_1_sources/slot-machine-arm-static.png";
  machineArm.style.backgroundImage = `url(${staticArm})`;
  console.log("b");
}

function generateReelGif() {
  for (let i = 0; i < reelVariables.length; i++) {
    const reelGif = "./Project_1_sources/reel-gif.gif" + "?x=" + Math.random();
    reelVariables[i].style.backgroundImage = `url(${reelGif})`;
  }
}

function variableAssigner() {
  for (let i = 0; i < reelVariables.length; i++) {
    const randomIndex = Math.floor(Math.random() * slotArray.length);
    const background = slotArray[randomIndex];
    reelVariables[i].style.backgroundImage = `url(${background})`;
  }
}

function isAWinner() {
  let amountStaked = parseInt(stakeAmount.value);
  if (
    window.getComputedStyle(winningReel[0])["background-image"] ==
      window.getComputedStyle(winningReel[1])["background-image"] &&
    window.getComputedStyle(winningReel[1])["background-image"] ==
      window.getComputedStyle(winningReel[2])["background-image"]
  ) {
    winner = true;
    amountStaked *= 10;
    balance += amountStaked;
    remainingBalance.innerText = balance;
  } else {
    winner = false;
    balance -= amountStaked;
    remainingBalance.innerText = balance;
    console.log(winner);
  }
}

function calculateRoundOutput() {
  let amountStaked = parseInt(stakeAmount.value);
  if (winner == true) {
    amountStaked *= 10;
    console.log("winner is true");
    roundOutput.innerText = amountStaked;
  } else {
    console.log("winner is false");
    roundOutput.innerText = 0;
  }
}
