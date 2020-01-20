/* Your code goes here */
const fighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 25, agility: 15 });
const fighter2 = new Fighter({name: 'Commodus', damage: 30, hp: 100, strength: 5, agility: 7 });

function Fighter({name: name, damage: damage, hp: hp, strength: strength, agility: agility }) {
    let win = 0, loss = 0;
    const MAX_HEALTH = 100;
    
    this.getName = function() {
      return name;
    }

    this.getDamage = function() {
      return damage;
    }

    this.getStrength = function() {
      return strength;
    }

    this.getAgility = function() {
      return agility;
    }
    this.getHealth = function() {
      return hp;
    }

    this.attack = function(defender) {
      const RANDOM_SUCC = 100;
      let newRan = Math.random() * RANDOM_SUCC;

      if(newRan < RANDOM_SUCC - defender.getAgility() - defender.getStrength()) {
        defender.dealDamage(this.getDamage());
        console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
      } else {
        console.log(`${defender.getName()} attack missed`);
      }
    }

    this.dealDamage = function (points) {
      hp - points > 0 ? hp = hp - points : hp = 0;
      return hp;
    }

    this.logCombatHistory = function() {
      console.log(`Name: ${name}, Wins: ${win}, Losses: ${loss}`);
    }

    this.heal = function(points) {
      hp + points <= MAX_HEALTH ? hp += points : hp = MAX_HEALTH;
      return hp;
    }
    
    this.addWin = function() {
      win++;
    }

    this.addLoss = function() {
      loss++;
    }
}

function battle(player1, player2) {
  if(player1.getHealth() === 0) {
    console.log(`${player1.getName()} is dead and can't fight.`);
    
  }
  if(player2.getHealth() === 0) {
    console.log(`${player2.getName()} is dead and can't fight.`);
    
  }
  while(player1.getHealth() !== 0 && player2.getHealth() !==0) {
    if(player1.getHealth() !== 0) {
      player1.attack(player2);
    }
    if(player2.getHealth() !== 0) {
      player2.attack(player1);
    }
  }

  if(player1.getHealth() === 0) {
    player2.addWin();
    player1.addLoss();
    console.log(`${player2.getName()} has won!`);
  }
  if(player2.getHealth() === 0) {
    player1.addWin();
    player2.addLoss();
    console.log(`${player1.getName()} has won!`);
  }
}