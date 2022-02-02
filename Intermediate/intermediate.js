class Car {
    brand;
    type;
    color;
    hp;
    accessories;
    vehicle;

    constructor(brand, type, color, hp, accessories, vehicle) {
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.hp = hp;
        this.accessories = accessories;
        this.vehicle = vehicle;
    }

    message() {
        return `<br>My ${this.vehicle} has the following attributes: ${this.brand} ${this.type}, in ${this.color}, with hp ${this.hp} and it has the following extras: ${this.accessories.join(", ")}.`;
    }
}

// Extend Class Car
class Motorbike extends Car {
    wheels;


    constructor(brand, type, color, hp, accessories, vehicle, wheels) {
        super(brand, type, color, hp, accessories, vehicle);
        this.wheels = wheels;

    }
    message() {
        // return `My ${this.vehicle} has the following attributes: ${this.brand} ${this.type}, ${this.wheels} wheels, in ${this.color}, with hp ${this.hp} and it has the following extras: ${this.accessories.join(", ")}.<br>`;
        return `${super.message()}  Furthermore, it has ${this.wheels} wheels!`;
    }
}


var skoda = new Car("Skoda", "Fabia", "grey", 75, ["acc", "radio", "bluetooth connection", "cupholder"], "car");
var ford = new Car("Ford", "Galaxy", "dark blue", 190, ["acc", "radio", "mp3-player", "cupholder"], "car");
var tesla = new Car("Tesla", "Model S", "silver", 1020, ["acc", "auto-pilot", "bord-computer", "and everything else"], "car");
var kawasaki = new Motorbike("Kawasaki", "Z900", "green", 150, ["ergonomic design", "abs", " connection", "cupholder"], "motorbike", 2)

document.getElementById("car").innerHTML += skoda.message();
document.getElementById("car").innerHTML += ford.message();
document.getElementById("car").innerHTML += tesla.message();
document.getElementById("car").innerHTML += kawasaki.message();


class Animal {
    name;
    species;
    age;
    family;
    home;
    pronoun;

    constructor(name, species, age, family, home, pronoun) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.family = family;
        this.home = home;
        this.pronoun = pronoun;
    }

    message() {
        return `Our lovely ${this.name} is a ${this.species}, ${this.pronoun} is ${this.age} old and is a family member of ${this.family.join(", ")} and is currently living in ${this.home}.<br>`;
    }
}

var fulong = new Animal("Fu Long", "Panda", 14, ["Yang Yang", "Long Hui", "Fu Bao", "Fu Hu"], "China", "he");
var monty = new Animal("Monty", "dog", 1.5, ["Christian", "Lisa"], "Vienna, Austria", "he");
var happy = new Animal("Happy", "cat", 5, ["Nala", "Beate", "Rudolf"], "Vienna, Austria", "she");

document.getElementById("animal").innerHTML += fulong.message();
document.getElementById("animal").innerHTML += monty.message();
document.getElementById("animal").innerHTML += happy.message();


class Person {
    firstName;
    lastName;
    age;
    codingSkills;
    hobbies;
    home;
    pronoun;

    constructor(firstName, lastName, age, codingSkills, hobbies, home, pronoun) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.codingSkills = codingSkills;
        this.hobbies = hobbies;
        this.home = home;
        this.pronoun = pronoun;
    }

    message() {
        return ` ${this.firstName} ${this.lastName} is ${this.age} old and has ${this.codingSkills} coding skills. ${this.pronoun} like(s) to ${this.hobbies.join(", to ")} and currently lives in ${this.home}.<br>`
    }
}

var petra = new Person("Petra", "Sedlaczek", 35, "advanced", ["code", "learn languages", "read", "run"], "Vienna, Austria", "She");
var stephan = new Person("Stephan", "Reindl", 33, "intermediate", ["code", "play music", "read", "run"], "Vienna, Austria", "He");
var pascal = new Person("Pascal", "Doe", 29, "expert", ["code", "code", "code", "party"], "Paris, France", "They");

document.getElementById("person").innerHTML += petra.message();
document.getElementById("person").innerHTML += stephan.message();
document.getElementById("person").innerHTML += pascal.message();