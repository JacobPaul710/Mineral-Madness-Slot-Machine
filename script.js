//Constants and Variables (State)

const slotArray = [1, 2, 3, 4, 5, 6];
// console.log(currentVar);



// const winningConditions = [];

//Cached Element References 

const reelVariables = document.querySelectorAll('.reel-value')
// console.log(reelVariables);
// reelVariables.innerText = slotArray[Math.floor(Math.random() * 6)]
//an attempt to have the numbers load the 1st time without having to click the button. will revisit. 

const machineArm = document.querySelector('#machine-arm')
// console.log(machineArm);

const moneyInput = document.querySelector('#money-input')
// console.log(moneyInput);

const roundOutput = document.querySelector('.round-output')
// console.log(roundOutput);

const remainingBalance = document.querySelector('.remaining-balance')
// console.log(remainingBalance);

const stakeAmount = document.querySelector('#stake-amount')
// console.log(stakeAmount);

const stakeInputButton = document.querySelector('#stake-input-button')
// console.log(stakeInputButton);

const winningReel = document.querySelectorAll('.winning-reel')
// console.log(winningReel);

const stakeOutput = document.querySelector('#staking-amount-output')
// console.log(stakeAmount);

//Event Listeners

moneyInput.addEventListener('click', inputMoney)
machineArm.addEventListener('click', variableAssigner)
stakeInputButton.addEventListener('click', determineStakeAmount)

// Functions

function variableAssigner () {
    for (let i = 0; i < reelVariables.length; i++){
        reelVariables[i].innerText = slotArray[Math.floor(Math.random() * 6)]
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
        let amountStaked = stakeAmount.value
         stakeOutput.innerText = amountStaked;
    }

function isAWinner (){

    }