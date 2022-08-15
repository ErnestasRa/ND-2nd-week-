"use strict";
var HeightUnits;
(function (HeightUnits) {
    HeightUnits["CENTIMETERS"] = "cm";
    HeightUnits["METERS"] = "m";
    HeightUnits["INCHES"] = "in";
})(HeightUnits || (HeightUnits = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["KILOGRAMS"] = "kg";
    WeightUnits["MASS"] = "lbs";
})(WeightUnits || (WeightUnits = {}));
const capitalize = (word) => {
    const words = word.trim().split(' ');
    const capitalizedWords = words.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
    return capitalizedWords.join(' ');
};
class Person {
    static heightUnits = HeightUnits.CENTIMETERS;
    static weightUnits = WeightUnits.KILOGRAMS;
    static ONLY_LETTERS_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/;
    name;
    surname;
    age;
    height;
    weight;
    constructor(name, surname, age, height, weight, heightUnits, weightUnits) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        this.setHeight(height, heightUnits);
        this.setWeight(weight, weightUnits);
    }
    setName(name) {
        if (name.length < 3)
            throw new Error('name cannot be less than 3 symbols');
        if (name === '')
            throw new Error('name cannot be empty string');
        if (!Person.ONLY_LETTERS_REGEX.test(name))
            throw new Error('name has to contain letters');
        this.name = capitalize(name);
    }
    setSurname(surname) {
        if (surname.length < 3)
            throw new Error('surname cannot be less than 3 symbols');
        if (surname === '')
            throw new Error('surname cannot be empty string');
        if (!Person.ONLY_LETTERS_REGEX.test(surname))
            throw new Error('surname has to contain letters');
        this.surname = capitalize(surname);
    }
    setAge(age) {
        if (age < 1)
            throw new Error('age cannot be less than 0');
        if (age > 150)
            throw new Error('age cannot be higher than 120');
        if (Math.round(age) !== age)
            throw new Error('age has to be a solid number');
        this.age = age;
    }
    setHeight(height, units = HeightUnits.CENTIMETERS) {
        switch (units) {
            case HeightUnits.CENTIMETERS:
                this.height = height;
                break;
            case HeightUnits.METERS:
                this.height = height * 100;
                break;
            case HeightUnits.INCHES:
                this.height = height * 2.54;
                break;
            default: break;
        }
    }
    setWeight(weight, units = WeightUnits.KILOGRAMS) {
        switch (units) {
            case WeightUnits.KILOGRAMS:
                this.weight = weight;
                break;
            case WeightUnits.MASS:
                this.weight = weight * 2.20;
                break;
            default: break;
        }
    }
    getAge() {
        return this.age;
    }
    getHeight() {
        switch (Person.heightUnits) {
            case HeightUnits.CENTIMETERS: return this.height;
            case HeightUnits.METERS: return this.height / 100;
            case HeightUnits.INCHES: return this.height / 2.54;
            default: return this.height;
        }
    }
    getWeight() {
        switch (Person.weightUnits) {
            case WeightUnits.KILOGRAMS: return this.weight;
            case WeightUnits.MASS: return this.weight / 2.20;
            default: return this.weight;
        }
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    toString() {
        let newPerson = `${this.name} ${this.surname} `;
        newPerson += `${this.height} ${Person.heightUnits} `;
        newPerson += `${this.getWeight()} ${Person.weightUnits}`;
        return newPerson;
    }
}
const people = [
    new Person('Serbentautas', 'Nordiuras', 20, 160, 50, HeightUnits.CENTIMETERS, WeightUnits.KILOGRAMS),
    new Person('Vabalas', 'Neratis', 19, 20, 195, HeightUnits.CENTIMETERS, WeightUnits.MASS),
    new Person('Juozas', 'Cukrinis', 19, 70, 40, HeightUnits.CENTIMETERS),
];
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const fullnames = people.map((p) => p.getFullName());
    console.log(fullnames);
}
console.groupEnd();
console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const ages = people.map((p) => p.getAge());
    console.log(ages);
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    const heights = people.map((p) => p.getHeight());
    console.log(heights);
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    console.dir(Person.heightUnits);
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
    Person.heightUnits = HeightUnits.METERS;
    console.log(people.map((p) => p.getHeight()));
    Person.heightUnits = HeightUnits.CENTIMETERS;
    console.log(people.map((p) => p.getHeight()));
    Person.heightUnits = HeightUnits.INCHES;
    console.log(people.map((p) => p.getHeight()));
}
console.groupEnd();
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    Person.weightUnits = WeightUnits.KILOGRAMS;
    console.log(people.map((p) => p.getWeight()));
    Person.weightUnits = WeightUnits.MASS;
    console.log(people.map((p) => p.getWeight()));
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
Person.weightUnits = WeightUnits.KILOGRAMS;
const printOnEachLine = people.map((p) => p.toString());
console.log(...printOnEachLine);
console.groupEnd();
//# sourceMappingURL=main.js.map