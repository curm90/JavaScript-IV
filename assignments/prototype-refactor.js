/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


  // TASK 1
  // - Build a Person Constructor that takes name and age.
  // - Give persons the ability to greet by returning a string stating name and age.
  // - Give persons the ability to eat edibles.
  // - When eating an edible, it should be pushed into a "stomach" property which is an array.
  // - Give persons the ability to poop.
  // - When pooping, the stomach should empty.

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.stomach = [];
    }
    greet() {
      return `Hello my name is ${this.name}. I am ${this.age} years old.`
    }
    eatEdibles(edible) {
      this.stomach.push(edible)
    }
    poop() {
      this.stomach = [];
    }
  }

  const mollie = new Person('Mollie', 29);
  
  // TASK 2
  // - Build a Car constructor that takes model name and make.
  // - Give cars the ability to drive a distance.
  // - By driving a car, the distance driven should be added to an "odometer" property.
  // - Give cars the ability to crash.
  // - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  // - Give cars the ability to be repaired.
  // - A repaired car can be driven again.

  class Car {
    constructor(model, make) {
      this.model = model;
      this.make = make;
      this.odometer = 0;
      this.crashed = false;
    }
    drive() {
      if (this.crashed) {
        return `I crashed at ${this.odometer} miles!`;
      }
  
      this.odometer += distance;
    }
    crash() {
      this.crashed = true;
    }
    repair() {
      this.crashed = false;
    }
  }

  const audi = new Car('rs4', 'Audi');

  // TASK 3
  // - Build a Baby constructor that subclasses the Person built earlier.
  // - Babies of course inherit the ability to greet, which can be strange.
  // - Babies should have the ability to play, which persons don't.
  // - By playing, a string is returned with some text of your choosing.

  class Baby extends Person {
    play() {
      return `goo goo gaa gaa`;
    }
  }

  const baby = new Baby('Jordan', 1);

  // TASK 4
  // Use your imagination and come up with constructors that allow to build objects
  // With amazing and original capabilities. Build 3 small ones, or a very
  // complicated one with lots of state. Surprise us!

  class Dog {
    constructor(type, name) {
      this.type = type;
      this.name = name;
      this.needsToPoop = false;
    }
    speak() {
      return 'Woooof woof'
    }
    wantToGoWalkies() {
      this.needsToPoop = true;
    }
    takeWalkies() {
      this.needsToPoop = false;
    }
  }

  const poodle = new Dog('Poodle', 'Pebbles');
  const chiwowa = new Dog('Chiwowa', 'Dave');

  // -----------------------------------------------------

  class Superhero {
    constructor(data) {
      this.realName = data.realName;
      this.superheroName = data.superheroName;
      this.gender = data.gender;
      this.canFly = data.canFly;
    }
    greet() {
      return `Hello Everybody... I am ${this.superheroName}`
    }
  }

  const superMan = new Superhero({
    realName: 'Clarke Kent',
    superheroName: 'Superman',
    gender: 'M',
    canFly: true
  });
  const wonderWomen = new Superhero({
    realName: 'Diana Prince',
    superheroName: 'Wonder Women',
    gender: 'F',
    canFly: false
  });

  // -----------------------------------------------------

  class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.completed = false;
    }
    read(pages) {
      this.pages -= pages;
      if (this.pages < 0) this.pages = 0;
      if (this.pages === 0) {
        this.completed = true;
      }
    }
    pagesLeft() {
      return this.pages;
    }
    status() {
      if (this.pages === 0) {
        return `Woohoo i finshed reading ${this.title}`;
      }
      return `I still have ${this.pages} left.`
    }
  }
  
  const bookOne = new Book('Can\'t Hurt me', 'David Goggins', 368);
  const bookTwo = new Book('1984', 'George Orwell', 425);


/*

  STRETCH TASK

  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

  class GameObject {
    constructor(data) {
      this.createdAt = data.createdAt;
      this.name = data.name;
      this.dimensions = data.dimensions;
    }
    destroy() {
      return `${this.name} was removed from the game`;
    }
  }

  class CharacterStats extends GameObject {
    constructor(data) {
      super(data) 
      this.healthPoints = data.healthPoints;
    }
    takeDamage() {
      return `${this.name} took damage`;
    }
  }

  class Humanoid extends CharacterStats {
    constructor(data) {
      super(data) 
      this.team = data.team;
      this.weapons = data.weapons;
      this.language = data.language;
    }
    greet() {
      return `${this.name} offers agreeting in ${this.language}`;
    }
  }

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


