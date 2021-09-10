var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {
    // alert the user the round is starting
    while(playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("Do you want to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney - 2;
            console.log("playerMoney", playerMoney);
            break;
    }
}

    // if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemys health and update new health
    enemyHealth = enemyHealth - playerAttack;  
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }

    // remove player health and update new health
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }
    }

};

var startGame = function() {
// reset player stats
playerHealth = 100;
playerAttack = 10;
playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
        fight(pickedEnemyName);
            //if were not at the last enemy in array...
        if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight has ended, visit store before next round?")
                //if yes, take them to store
                if (storeConfirm) {
                shop();
        }
    }

    } else {
        window.alert("You have lost your robot in battle! GAME OVER");
        break;
    }



}

// function to end entire game
var endGame = function() {
    // if player is still alive, they win
    if (playerHealth > 0 ) {
    window.alert("Great job, you survived the game! Your new score is " + playerMoney + ".");
    } 
    else {
    window.alert("The game has now ended. Let's see how you did!");
    }
var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart game
    startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon (:");
    }
};
  //after loop ends, player is out of health or enemies
  endGame();
};

    var shop = function() {
        //ask player what they would like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to 'REFILL' your health, 'UPGRADE' your attack, or 'LEAVE' the store?");
            //use switch to carry out action
            switch (shopOptionPrompt) {
                case "REFILL":
                case "refill":
                    if (playerMoney >=7 ) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");
                
                    // increase health and decrease money
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                    } else {
                    window.alert("You don't have enough money!");
                }
    
                break;
                
                case "UPGRADE":
                case "upgrade":
                    if (playerMoney >=7 ) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");
                
                    // increase attack and decrease money
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                    } else {
                    window.alert("You dont have enought money!");
                }
    
                break;
    
                case "LEAVE":
                case "leave":
                    window.alert("Leaving the store.");
                
                    // do nothing, so function will end
                    break;
                  default:
                    window.alert("You did not pick a valid option. Try again.");
                
                    // call shop() again to force player to pick a valid option
                    shop();
                    break;
            }
        };


startGame();
