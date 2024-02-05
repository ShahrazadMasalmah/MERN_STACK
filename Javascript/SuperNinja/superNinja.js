// Create a Ninja class
class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name; // add an attribute: name
        this.health = health; // add an attribute: health - give a default value of 90
        this.speed = speed; // add a attribute: speed - give a default value of 3
        this.strength = strength; // add a attribute: strength - give a default value of 3
    }

    // add a method: sayName() - This should log that Ninja's name to the console
    sayName() {
        console.log(`The Ninja's name is ${this.name}`);
    }

    // add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    // add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake() {
        this.health += 10;
        //console.log(`The health of ${this.name} ninja is: ${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10; // add an attribute: wisdom - default to 10
    }

    // create a method: speakWisdom()
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
