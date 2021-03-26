'use strict';

const rollForCrit = (damage) => {
  let roll = Math.floor(Math.random * 6);
  if (roll === 6) return damage * 2;
  else return damage;
};

const Item = function (name, weight, value) {
  this.name = name;
  this.weight = weight;
  this.value = value;
  this.maxUses = Math.max(Math.floor(Math.random() * 10), 1);
  this.uses = 0;
};

Item.prototype.use = function () {
  if (this.uses < this.maxUses) {
    this.uses++;
    console.log(
      `Used ${this.name}! Item has ${this.maxUses - this.uses} uses left.`
    );
  } else {
    console.log(`Sorry ${this.name} has no more uses left.`);
  }
};

const Sword = function (name, weight, value, damage) {
  Item.call(this, name, weight, value);
  this.maxUses = 4;
  this.damage = damage;
};

Sword.prototype = Object.create(Item.prototype);
Sword.prototype.constructor = Sword;

Sword.prototype.attack = function () {
  if (this.uses < this.maxUses) {
    let damage = rollForCrit(this.damage);
    this.uses++;
    console.log(`Your sword caused ${damage} points of damage!`);
  } else {
    console.log('Return to the blacksmith to sharpen your blade');
  }
};

let lantern = new Item('Lantern', 1, 20);
lantern.use();
let excalibur = new Sword('Excalibur', 8, 1000, 30);
excalibur.attack();
excalibur.attack();
excalibur.attack();
excalibur.attack();
excalibur.attack();
