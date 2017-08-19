"use strict";
(function(){
    function BaseCharacter(){
        this.fight = function(enemy){
            console.log(this.name +" ("+this.life+ ") is fighting " + enemy.name+" ("+enemy.life+"). "+enemy.name+" hit for "+this.damage);
            enemy.life -= this.damage;
            if(enemy.life > 0){
                enemy.fight(this);
            }
            else{
                console.log(enemy.name + " is dead...")
            }
        };
    }
    function Goon(name, life, damage){
        BaseCharacter.call(this);
        this.name = name;
        this.life = life;
        this.damage = damage;
    }
    function Character(name, int, vit, str, dex){
        BaseCharacter.call(this);
        this.name = name;
        this.int = int;
        this.vit = vit;
        this.str = str;
        this.dex = dex;
        this.damage = 100;
        this.life = this.vit*1000;
        this.maxLife = function(){
            return this.vit*1000;
        }
    }
    function Archer(name){
        Character.call(this, name, 3, 6, 6, 9);
        this.damage = this.dex * 100;
    }
    function BlackMage(name){
        Character.call(this, name, 10, 5, 3, 3);
        this.damage = this.int * 100;
    }
    function Dragoon(name){
        Character.call(this, name, 3, 8, 7, 3);
        this.damage = this.str * 100;
    }
    module.exports = {
        "Goon":Goon,
        "Dragoon":Dragoon,
        "BlackMage":BlackMage,
        "Archer":Archer
    };
})();