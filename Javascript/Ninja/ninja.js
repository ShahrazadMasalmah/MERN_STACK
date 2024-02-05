// Create a Ninja class
class Ninja {
    constructor(name) {
        this.name = name; // add an attribute: name
        this.health = 90; // add an attribute: health - give a default value of 90
        this.speed = 3; // add a attribute: speed - give a default value of 3
        this.strength = 3; // add a attribute: strength - give a default value of 3
    }

    // add a method: sayName() - This should log that Ninja's name to the console
    sayName() {
        console.log(`The Ninja's name is ${this.name}`);
    }

    // add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats() {
        console.log(`The Ninja's name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, and health: ${this.health}`);
    }

    // add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake() {
        this.health += 10;
        console.log(`The health of ${this.name} ninja is: ${this.health}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();