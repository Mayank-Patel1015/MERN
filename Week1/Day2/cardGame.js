class Card {
  constructor(name, cost) {
    this.name = name
    this.cost = cost
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost)
    this.power = power
    this.res = res
  }
  attack(target) {
    target.res -= this.power
  }
}

class EffectCard extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost)
    this.text = text
    this.stat = stat
    this.magnitude = magnitude
  }
  play(target) {
    if (target instanceof Unit) {
      if (this.stat == "res") {
        target.res += this.magnitude
      } else if (this.stat == "power") {
        target.power += this.magnitude
      }
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

const redBeltNinja = new Unit("redBeltNinja", 3, 3, 4)
const blackBeltNinja = new Unit("blackBeltNinja", 4, 5, 4)

const HardAlgo = new EffectCard("HardAlgo", 2, "increase target's resilience by 3", "res", 3)
const UnhandledPromiseRejection = new EffectCard("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2)
const PairProgramming = new EffectCard("Unhandled Promise Rejection", 3, "increase target's power by 2", "power", 2)

console.log(redBeltNinja)
console.log(blackBeltNinja)

HardAlgo.play(redBeltNinja)
UnhandledPromiseRejection.play(redBeltNinja)
PairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)

console.log(redBeltNinja)
console.log(blackBeltNinja)

