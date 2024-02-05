class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, magnitude, stat) {
        super(name, cost);
        this.magnitude = magnitude;
        this.stat = stat;
    }

    play(target){
        if(this.stat == 'resilience'){
            target.resilience += this.magnitude;
        }
        else if(this.stat == 'power'){
            target.power += this.magnitude;
        }
    }
}

// 1. Make an instance of "Red Belt Ninja"
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
console.log("Red Belt Ninja before Hard Algorithm effect: " + unit1.resilience + " reilience");
console.log("Red Belt Ninja before Pair Programming effect: " + unit1.power + " power");
// 2. Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const effect1 = new Effect("Hard Algorithm", 2, +3, 'resilience');
effect1.play(unit1);
console.log("Red Belt Ninja after Hard Algorithm effect: " + unit1.resilience + " reilience");
// 3. Make an instance "Black Belt Ninja"
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
console.log("Black Belt Ninja before Red Belt Ninja attack: " + unit2.resilience + " reilience");
// 4. Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
const effect2 = new Effect("Unhandled Promise Rejection", 1, -2, 'resilience');
effect2.play(unit1);
console.log("Red Belt Ninja after Unhandled Promise Rejection effect: " + unit1.resilience + " reilience");
// 5. Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const effect3 = new Effect("Pair Programming", 3, +2, 'power');
effect3.play(unit1);
console.log("Red Belt Ninja after Pair Programming effect: " + unit1.power + " power");
// 6. "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
unit1.attack(unit2);
console.log("Black Belt Ninja after Red Belt Ninja attack: " + unit2.resilience + " reilience");
