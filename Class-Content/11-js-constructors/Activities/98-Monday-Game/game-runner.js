"use strict";
(function(){
    var game = require("./game");

    var archer1 = new game.Archer("Guy");
    console.log("archer1",archer1);
    var archer2 = new game.Archer("Other Guy");
    console.log("archer2",archer2);
    var mage = new game.BlackMage("Girl");
    console.log("mage",mage);
    var dragoon = new game.Dragoon("Dragon Girl");
    console.log("dragoon",dragoon);
})();