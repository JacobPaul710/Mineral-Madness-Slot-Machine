# Mineral Madness

A browser based slot machine game that allows the 'player' to wage various amounts of 'money' per turn, and receive and output of a winning or losing combination of variables each time the 'handle' is pulled. If a winning combination of variables is generated, the specifc combination of variables will determine the multiplier used to calculate the amount of 'money' output and added to the 'player's' balance.

## User Story

- As a user, I want to have a slot machine experience in a casino setting, from the comfort of my home computer.

- AAU, I expect to have an option to determine how much money I am willing to stake each turn.

- AAU, I desire a handle to interact with that will trigger an animation within the game, followed by a display of the results.

- AAU, I expect my amount won to be determined by the winning combination multiplier, and displayed for me to see.

- AAU, I want to see enticing elements that tempt me to play.

- AAU, I need to be able to play as long as I want, with the ability to add more funds as I play.

- AAU, I also need to be able to check my remaining balance.

### Pseduocode for gameplay

    An <input> field will be used to allow the 'player' to enter a numerical amount of playable money. The amount entered will be added to the 'Remaining balance' total and display in the bottom right corner.

    An <input> field will also be used to allow the 'player' to enter a numerical amount to be staked. The amount entered must be greater then the 'Remaining balance'. If it is, and no winning combination is reached, the amount entered will be subtracted from the 'Remaining balance'. If a winning combination is reached, the multiplier (if any) will be applied to the 'Amount staked'. The output will be displayed in the bottom center 'Round output' box. The 'Round output' will be added to the 'Remaining balance'.

    An event listener will be used on the 'handle' that is set to '.click'. When the button is clicked, it will trigger a function to begin cycling through the array of variables.

    Math.random will be used across an array of variables, to select 3 in combination.

    Winning combinations will be declared, and the remaining combinations will not be winners.

    Specific winning combinations will have mulitpliers to change the amount that can be won.

    If the 'Remaining balance' reaches 0 or below as a value, an 'alert' will be generated to inform the 'player' they are out of turns and will need to input more 'money' into the machine to continue playing.

### Slot Machine Wireframe

![Slot Machine Wireframe](https://i.imgur.com/fHkS7b4.png)

### Technologies Used

HTML
JavaScript
CSS


### Getting Started

https://jacobpaul710.github.io/Project_1_Slot_Machine/

1. Click the 'Pay Slot' button in the top right corner of the page. This button can be re-accessed at any point in the game in order to add more funds to dwindling balance.
2. Enter a numerical value into the prompt for your balance. 
3. Enter a numerical value into the stake input, and then click the stake button. 
4. Click the lever to pull it, and generate a round of the game. 
5. A winning combination is 3 of any image in the middle row. This will result in the player winning 10x the amount staked. It will result in the Round Output display box, and update the remaining balance. 
6. If a winning combination is not hit, the Round Output display box will read 0, and the amount staked will be deducted from the player's balance. 



### Next Steps

1. Stop the player from being able to continue to spin after a 0 balance has been reached. 
2. Add additional winning rows (ex. diagonal, vertical). 
3. Add additional variables to create new winning conditions with combination of variables.
4. Apply different numerical multipliers to each varying combination. 
5. Additional styling (ex. border, game name)
6. Fix bug when a non-number is entered into pay-slot and stake-amount.

###

![Screenshot of gameplay](./Project_1_sources/Screenshot%20gameplay.png)