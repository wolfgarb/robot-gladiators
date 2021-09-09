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


for(var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
    
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;
    fight(pickedEnemyName);
  }

    else {
        window.alert("You have lost your robot in battle! GAME OVER");
        break;
    }
}

