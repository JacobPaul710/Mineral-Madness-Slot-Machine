//Constants and Variables

let debounce = false;

const stromatolite = "./Project_1_sources/Slot_array_images/stromatolite.png";
const pictureJasper =
  "./Project_1_sources/Slot_array_images/owyhee_picture_jasper.png";
const mossAgate = "./Project_1_sources/Slot_array_images/maury_moss_agate.png";
const carnelian =
  "./Project_1_sources/Slot_array_images/river_carnelian_agate.png";
const riverAgate = "./Project_1_sources/Slot_array_images/carnelian.png";
const oceanAgate = "./Project_1_sources/Slot_array_images/oceanagate.png";
const limbCast = "./Project_1_sources/Slot_array_images/limbcast.png";
const fireOpal = "./Project_1_sources/Slot_array_images/fireopal.png";
const opal = "./Project_1_sources/Slot_array_images/oregon_opal.png";
const petWood = "./Project_1_sources/Slot_array_images/petwood.png";

const slotArray = [pictureJasper, mossAgate, stromatolite];

// carnelian, riverAgate, oceanAgate, limbCast, fireOpal, opal, petWood]

// const winningCombinationOne = [
//     [petWood, limbCast, stromatolite],
//     [petWood, stromatolite, limbCast],
//     [limbCast, petWood, stromatolite],
//     [limbCast, stromatolite, petWood],
//     [stromatolite, petWood, limbCast],
//     [stromatolite, limbCast, petWood]
// ];

// const winningCombinationTwo = [
//     [oceanAgate, riverAgate, carnelian],
//     [oceanAgate, carnelian, riverAgate],
//     [riverAgate, oceanAgate, carnelian],
//     [riverAgate, carnelian, oceanAgate],
//     [carnelian, oceanAgate, carnelian],
//     [carnelian, carnelian, oceanAgate],

// ];

// const winningCombinationThree = [
//     [pictureJasper, mossAgate, stromatolite],
//     [pictureJasper, stromatolite, mossAgate],
//     [mossAgate, pictureJasper, stromatolite],
//     [mossAgate, stromatolite, pictureJasper],
//     [stromatolite, mossAgate, stromatolite],
//     [stromatolite, stromatolite, mossAgate],

// ];

// const winningCombinationFour = [
//     [fireOpal, opal, stromatolite],
//     [fireOpal, stromatolite, opal],
//     [opal, fireOpal, stromatolite],
//     [opal, stromatolite, fireOpal],
//     [stromatolite, opal, fireOpal],
//     [stromatolite, fireOpal, opal],
// ];

//Cached Element References

const reelVariables = document.querySelectorAll(".reel-value");
// console.log(reelVariables);
// reelVariables.innerText = slotArray[Math.floor(Math.random() * 6)]
//an attempt to have the numbers load the 1st time without having to click the button. will revisit.

// const winningIndex = [
//     [reelVariables[0], reelVariables[1], reelVariables[2]],
//     [reelVariables[3], reelVariables[4], reelVariables[5]],
//     [reelVariables[6], reelVariables[7], reelVariables[8]],
//     [reelVariables[0], reelVariables[3], reelVariables[6]],
//     [reelVariables[1], reelVariables[4], reelVariables[7]],
//     [reelVariables[2], reelVariables[5], reelVariables[8]],
//     [reelVariables[0], reelVariables[4], reelVariables[8]],
//     [reelVariables[2], reelVariables[4], reelVariables[6]]
// ]

const machineArm = document.querySelector("#machine-arm");
// console.log(machineArm);

const paySlot = document.querySelector("#pay-slot");
// console.log(paySlot);

const roundOutput = document.querySelector(".round-output");
// console.log(roundOutput);

const remainingBalance = document.querySelector(".remaining-balance");
// console.log(remainingBalance);

const stakeAmount = document.querySelector("#stake-amount");
// console.log(stakeAmount);

const stakeInputButton = document.querySelector("#stake-input-button");
// console.log(stakeInputButton);

const stakeOutput = document.querySelector("#staking-amount-output");
// console.log(stakeAmount);

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
  // checkForCredits()
  generateArmMotion();
  generateReelGif();
  setTimeout(variableAssigner, 1000);
  setTimeout(isAWinner, 1001);
  setTimeout(calculateRoundOutput, 1002);
  setTimeout(generateStaticArm, 1000);
});
stakeInputButton.addEventListener("click", determineStakeAmount);

// Functions

// let credits;
let winner;
let balance = 0;

// function checkForCredits () {
//     if (balance <= 0 || NaN) {
//         credits = false;
//         console.log('credits is false')
//         // alert('You are out of credits. Insert cash into money slot.')
//     } else
//     credits = true;
//     console.log('credits is true')
// }

function inputMoney() {
  let amountInput = +prompt("Enter desired cash amount");
  // if (typeof(amountInput) !== 'Number') {
  //     alert('You must enter a numerical value')
  // } else {
  // amountInput = parseInt(amountInput)
  balance += amountInput;
  remainingBalance.innerText = balance;
}
// }

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
