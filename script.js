//Constants and Variables 

let debounce = false;

const stromatolite = "./Project_1_sources/Slot_array_images/stromatolite.png"
const pictureJasper = "./Project_1_sources/Slot_array_images/owyhee_picture_jasper.png"
const mossAgate = "./Project_1_sources/Slot_array_images/maury_moss_agate.png"
const carnelian = "./Project_1_sources/Slot_array_images/river_carnelian_agate.png"
const riverAgate = "./Project_1_sources/Slot_array_images/carnelian.png"
const oceanAgate = "./Project_1_sources/Slot_array_images/oceanagate.png"
const limbCast = "./Project_1_sources/Slot_array_images/limbcast.png"
const fireOpal = "./Project_1_sources/Slot_array_images/fireopal.png"
const opal = "./Project_1_sources/Slot_array_images/oregon_opal.png"
const petWood = "./Project_1_sources/Slot_array_images/petwood.png"

const slotArray = [stromatolite, pictureJasper, mossAgate, carnelian, riverAgate, oceanAgate, limbCast, fireOpal, opal, petWood]

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

const reelVariables = document.querySelectorAll('.reel-value')
console.log(reelVariables);
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

const machineArm = document.querySelector('#machine-arm')
// console.log(machineArm);

const paySlot = document.querySelector('#pay-slot')
// console.log(paySlot);

const roundOutput = document.querySelector('.round-output')
// console.log(roundOutput);

const remainingBalance = document.querySelector('.remaining-balance')
// console.log(remainingBalance);

const stakeAmount = document.querySelector('#stake-amount')
// console.log(stakeAmount);

const stakeInputButton = document.querySelector('#stake-input-button')
// console.log(stakeInputButton);

const stakeOutput = document.querySelector('#staking-amount-output')
// console.log(stakeAmount);

for (let i = 0; i < reelVariables.length; i++){
    const randomIndex = Math.floor(Math.random() * slotArray.length)
    const background = slotArray[randomIndex]
    reelVariables[i].style.backgroundImage = `url(${background})`
  }

//Event Listeners

paySlot.addEventListener('click', inputMoney)
machineArm.addEventListener('click', function(){
    if (debounce === true) return
    debounce = true
    generateArmMotion()
    variableAssigner()
    setTimeout(generateStaticArm, 1000)
})
stakeInputButton.addEventListener('click', determineStakeAmount)

// Functions

function variableAssigner () {
    for (let i = 0; i < reelVariables.length; i++){
      const randomIndex = Math.floor(Math.random() * slotArray.length)
      const background = slotArray[randomIndex]
      reelVariables[i].style.backgroundImage = `url(${background})`
    }
   
    }


let balance = 0;
function inputMoney () {
        amountInput = +(prompt('Enter desired cash amount'));
        //if statement for non-numerical value to be added
        // console.log(typeof amountInput)
        // console.log (amountInput);
       balance += amountInput
        remainingBalance.innerText = balance
    } 

function determineStakeAmount () {
    let amountStaked = parseInt(stakeAmount.value)
         stakeOutput.innerText = amountStaked;
    }

function isAWinner (){
    let amountStaked = parseInt(stakeAmount.value)
    for (let i = 0; i < winningIndex.length; i++){
        for (let j = 0; j < winningCombinationOne.length; i++)
            if (winningIndex[i] = winningCombinationOne[j]) {
            let roundWinnings = amountStaked * 1;
            roundOutput.innerText = roundWinnings;
            balance += roundWinnings;
            remainingBalance.innerText = balance;
        } else if (winningIndex[i] == winningCombinationTwo[j]) {
            let roundWinnings = amountStaked * 5;
            roundOutput.innerText = roundWinnings;
            balance += roundWinnings;
            remainingBalance.innerText = balance;
        } else if (winningIndex[i] == winningCombinationThree[j]) {
            let roundWinnings = amountStaked * 7;
            roundOutput.innerText = roundWinnings;
            balance += roundWinnings;
            remainingBalance.innerText = balance;
        }  else if (winningIndex[i] == winningCombinationFour[j]) {
            let roundWinnings = amountStaked * 10;
            roundOutput.innerText = roundWinnings;
            balance += roundWinnings;
            remainingBalance.innerText = balance;
        } else {
            balance -= amountStaked;
            remainingBalance.innerText = balance;}
    } 
}

function generateArmMotion () {
    const animatedArm = './Project_1_sources/slot-machine-arm-animated.gif'+"?x="+Math.random()
    machineArm.style.backgroundImage = `url(${animatedArm})`
    console.log("a")
} 


function generateStaticArm () {
    debounce = false 
    const staticArm = './Project_1_sources/slot-machine-arm-static.png'
    machineArm.style.backgroundImage = `url(${staticArm})`
    console.log("b")
}
