class Ninja {
  constructor(name, health = 90, speed = 3, strength = 3) {
    this.name = name
    this.health = health
    this.speed = speed
    this.strength = strength
  }
  sayName() {
    console.log(this.name)
  }
  showStats() {
    console.log(this.name, "health: ", this.health, "speed: ", this.speed, "strength: ", this.strength)
  }
  drinkSake() {
    this.health += 10
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10)
    this.wisdom = 10
  }
  speakWisdom() {
    this.drinkSake()
    console.log("A wise message!")
  }
}

// Ninja
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

// Sensei
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();