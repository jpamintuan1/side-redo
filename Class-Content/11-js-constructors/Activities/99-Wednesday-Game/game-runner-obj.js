
"use strict";
(function(){
    var game = require("./game");

    var stdin = process.openStdin();
    console.log("Welcome to World of Nodecraft. Start by creating a character.");
    console.log("Enter a character class (Black Mage, Archer, Dragoon):");
    var state = "create-class";
    var charClass, playerCharacter;
    stdin.addListener("data", gameLoop);
    function gameLoop(userInput) {
        userInput = userInput ? userInput.toString().trim() : "";
        StateMachine[state](userInput);
    }

    var StateMachine = {
        "create-class": function(userInput){
            if(userInput.indexOf("b") == 0 || userInput.indexOf("B") == 0)
                charClass = "BlackMage";
            else if(userInput.indexOf("a") == 0 || userInput.indexOf("A") == 0)
                charClass = "Archer"
            else if(userInput.indexOf("d") == 0 || userInput.indexOf("D") == 0)
                charClass = "Dragoon"
            else {
                console.log("That wasn't a valid class.")
                console.log("Enter a character class (Black Mage, Archer, Dragoon):");
                return;
            }
            state = "create-name";
            console.log(`Enter a name for your new ${charClass}`);
        },
        "create-name": function(userInput){
            state = "story-start";
            playerCharacter = new game[charClass](userInput);
            console.log(`${playerCharacter.name} starts their journey, setting out from the village.`);
            gameLoop();
        },
        "story-start": function(){
            state = "story-fight";
            console.log(`${playerCharacter.name} encounters a Beast, do they fight or run?.`);
        },
        "story-fight": function(userInput){
            if(userInput.indexOf("f") == 0 || userInput.indexOf("F") == 0){
                console.log(`${playerCharacter.name} is fighting a Beast.`);
                var life = playerCharacter.life;
                var goon = new game.Goon("Beast",7000,100);
                playerCharacter.fight(goon);
                if(playerCharacter.life > 0){
                    console.log(`${playerCharacter.name} destroyed the Beast, but lost ${life-playerCharacter.life} life in the process. ${playerCharacter.life} life remains...`);
                    state = "story-continue";
                    gameLoop();
                }
                else
                    process.exit();
            }
            else{
                var gotAway = Math.random() > 0.01;
                if(gotAway){
                    console.log(`${playerCharacter.name} successfully flees from the Beast.`);
                    state = "story-continue";
                    gameLoop();
                }
                else{
                    console.log(`${playerCharacter.name} attempts to flee ... but is caught by the Beast.`);
                    gameLoop("f");
                }
            }
        },
        "story-continue": function(userInput){
            if(userInput.indexOf("f") == 0){
                state = "story-start";
                gameLoop();
            }
            else if(userInput.indexOf("s") == 0 || userInput.indexOf("r") == 0){
                var lifeRestored = playerCharacter.maxLife() - playerCharacter.life < 1000 ? 
                    playerCharacter.maxLife() - playerCharacter.life : 
                    1000;
                playerCharacter.life += lifeRestored
                console.log(`${playerCharacter.name} sets up camp and rests, restoring ${lifeRestored} life. ${playerCharacter.name} now has ${playerCharacter.life} life.`);
                gameLoop();
            }
            else
                console.log(`Should ${playerCharacter.name} continue to the next fight, or stop and rest?`);
        }
    };
})();