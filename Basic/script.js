var car = {
    brand: "Skoda",
    type: "Fabia",
    color: "grey",
    hp: 75,
    accessories: ["acc", "radio", "bluetooth connection", "cupholder"],

    message: function() {
        return `My car has the following attributes: ${this.brand} ${this.type}, in ${this.color}, with hp ${this.hp} and it has the following extras: ${this.accessories.join(", ")} <br>`
    }
}

document.getElementById("car").innerHTML += car.message();

var car = {
    brand: "Skoda",
    type: "Fabia",
    color: "grey",
    hp: 75,
    accessories: ["acc", "radio", "bluetooth connection", "cupholder"],

    message: function() {
        return `My car has the following attributes: ${this.brand} ${this.type}, in ${this.color}, with hp ${this.hp} and it has the following extras: ${this.accessories.join(", ")} <br>`
    }
}

document.getElementById("car").innerHTML += car.message();

var car = {
    brand: "Tesla",
    type: "ModelS",
    color: "silver",
    hp: 1020,
    accessories: ["acc", "auto-pilot", "bord-computer", "and everything else"],

    message: function() {
        return `My car has the following attributes: ${this.brand} ${this.type}, in ${this.color}, with hp ${this.hp} and it has the following extras: ${this.accessories.join(", ")} <br>`
    }
}

document.getElementById("car").innerHTML += car.message();


var animal = new Object();

animal.name = "FuLong";
animal.species = "Panda";
animal.age = 14;
animal.family = ["Yang Yang", "Long Hui", "Fu Bao", "Fu Hu"];
animal.home = "China";
animal.pronoun = "he"

animal.message = function() {
    return `Our lovely ${animal.name} is a ${animal.species}, ${animal.pronoun} is ${animal.age} old and is a family member of ${animal.family.join(", ")} and is currently living in ${animal.home} <br>`
}

document.getElementById("animal").innerHTML += animal.message();


var animal = new Object();

animal.name = "Monty";
animal.species = "dog";
animal.age = 1.5;
animal.family = ["Christian", "Lisa"];
animal.home = "Austria";
animal.pronoun = "he"

animal.message = function() {
    return `Our lovely ${animal.name} is a ${animal.species}, ${animal.pronoun} is ${animal.age} old and is a family member of ${animal.family.join(", ")} and is currently living in ${animal.home} <br>`
}

document.getElementById("animal").innerHTML += animal.message();

var animal = new Object();

animal.name = "Happy";
animal.species = "cat";
animal.age = 5;
animal.family = ["Nala", "Petra"];
animal.home = "Austria";
animal.pronoun = "she"

animal.message = function() {
    return `Our lovely ${animal.name} is a ${animal.species}, ${animal.pronoun} is ${animal.age} old and is a family member of ${animal.family.join(", ")} and is currently living in ${animal.home} <br>`
}

document.getElementById("animal").innerHTML += animal.message();




var person = {
    firstName: "Petra",
    lastName: "Sedlaczek",
    age: 35,
    codingSkills: "advanced",
    hobbies: ["code", "learn languages", "read", "run"],
    pronoun: "She",

    message: function() {
        return ` ${this.firstName} ${this.lastName} is ${this.age} old and has ${this.codingSkills} coding skills. ${this.pronoun} likes to ${this.hobbies.join(", to ")} <br>`
    }
}

document.getElementById("person").innerHTML += person.message();

var person = {
    firstName: "Stephan",
    lastName: "Reindl",
    age: 33,
    codingSkills: "intermediate",
    hobbies: ["code", "play music", "read", "run"],
    pronoun: "He",

    message: function() {
        return ` ${this.firstName} ${this.lastName} is ${this.age} old and has ${this.codingSkills} coding skills. ${this.pronoun} likes to ${this.hobbies.join(", to ")} <br>`
    }
}

document.getElementById("person").innerHTML += person.message();

var person = {
    firstName: "Pascal",
    lastName: "Doe",
    age: 29,
    codingSkills: "experienced",
    hobbies: ["code", "code", "code", "party"],
    pronoun: "They",

    message: function() {
        return ` ${this.firstName} ${this.lastName} is ${this.age} old and has ${this.codingSkills} coding skills. ${this.pronoun} like to ${this.hobbies.join(", to ")} <br>`
    }
}

document.getElementById("person").innerHTML += person.message();