
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var playerName = window.prompt("What is your robot's name?");
var fight = function(enemyName) {
    // alert the user the round is starting
    while(enemyHealth > 0) {
// window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Do you want to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemys health and update new health
    enemyHealth = enemyHealth - playerAttack;  
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
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
    } else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }
}
    // if player chooses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you want to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }

} else {
    window.alert("You need to choose a valid option. Try again!");
                }
};

}

  for(var i = 0; i < enemyNames.length; i++) {
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
    fight(pickedEnemyName);
  }

// fight();

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
//   } 
