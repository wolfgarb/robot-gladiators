// function to generate random num value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);
    
    return value;
};

// ask player if they want to fight/skip using new function
var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    //recursive function here
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again!");
        return fightOrSkip();
        }
    
    promptFight = promptFight.toLowerCase();
    //if player picks skip, confirm and stop loop
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        if (confirmSkip) {
            window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    return false;
};

var fight = function(enemy) {

    var isPlayerTurn = true;

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while(playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip()) {
                break;
            } 

        // if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "f") {
        // generate random damage calue based on the players attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + 
            " attacked " + 
            enemy.name + 
            ". " + 
            enemy.name + 
            " now has " + 
            enemy.health + 
            " health remaining."
        );

        //check enemy health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
        } else {
            window.alert(enemy.name + " has " + enemy.health + " health remaining.");
        }

    } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
            enemy.name + 
            " attacked " + 
            playerInfo.name + 
            ". " + 
            playerInfo.name + 
            " now has " + 
            playerInfo.health + 
            " health remaining."
        );

        // check player health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " has " + playerInfo.health + " health remaining.");
        }
    }
    isPlayerTurn = !isPlayerTurn;
    }
};

var startGame = function() {
    // reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        console.log(playerInfo);
        if (playerInfo.health > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
                //if were not at the last enemy in array...
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            //ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight has ended, visit store before next round?")
            //if yes, take them to store
            if (storeConfirm) {
                shop();
            }
        }
    }
    //if player is dead break out of loop
        else {
            window.alert("You have lost your robot in battle! GAME OVER");
            break;
        }
    }

    endGame();
};

// function to end entire game
var endGame = function() {
    // if player is still alive, they win
    if (playerInfo.health > 0 ) {
    window.alert("Great job, you survived the game! Your new score is " + playerInfo.money + ".");
    } 
    else {
    window.alert("The game has now ended. Let's see how you did!");
    }
    
var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon (:");
    }
};

//shop between battles
var shop = function() {
    //ask player what they would like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to 'REFILL' your health, 'UPGRADE' your attack, or 'LEAVE' the store?"
        );
        // convert answer to a number
        shopOptionPrompt = parseInt(shopOptionPrompt);
        switch (shopOptionPrompt) {
            case 1:
                playerInfo.refillHealth();
                break;
            case 2:
                playerInfo.upgradeAttack();
                break;
            case 3:
                window.alert("Leaving the store.");
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
            }
        };

//player info
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?")
    }
    console.log("Your robot's name is " + name);
    return name;
};

/* end game functions and begin game info and variables */

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.")
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }  
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!")
        }
    }
};

//enemy info
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// console.log(enemy.names);
// console.log(enemy.names.length);
// console.log(enemy.names[0]);
// console.log(enemy.names[3]);


// RUN GAME
startGame()
