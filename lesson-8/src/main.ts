/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-lone-blocks */
// eslint-disable-next-line no-unused-vars, no-shadow
enum HeightUnits {
    // eslint-disable-next-line no-unused-vars
    CENTIMETERS = 'cm',
    // eslint-disable-next-line no-unused-vars
    METERS = 'm',
    // eslint-disable-next-line no-unused-vars
    INCHES = 'in'
}

// eslint-disable-next-line no-shadow, no-unused-vars
enum WeightUnits {
    // eslint-disable-next-line no-unused-vars
    KILOGRAMS = 'kg',
    // eslint-disable-next-line no-unused-vars
    MASS = 'lbs'
}

const capitalize = (word: string): string => {
    const words = word.trim().split(' ');
    const capitalizedWords = words.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
    return capitalizedWords.join(' ');
};

class Person {
    public static heightUnits: HeightUnits = HeightUnits.CENTIMETERS;

    public static weightUnits: WeightUnits = WeightUnits.KILOGRAMS;

    private static readonly ONLY_LETTERS_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/;

    private name!: string;

    private surname!: string;

    private age!: number;

    private height!: number;

    private weight!: number;

    constructor(
        name: string,
        surname: string,
        age: number,
        height: number,
        weight: number,
        heightUnits?: HeightUnits,
        weightUnits?: WeightUnits,
    ) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        this.setHeight(height, heightUnits);
        this.setWeight(weight, weightUnits);
    }

    public setName(name: string) {
        // atliekamos validacijos, patikrinimai,formavimas
        if (name.length < 3) throw new Error('name cannot be less than 3 symbols');
        if (name === '') throw new Error('name cannot be empty string');
        if (!Person.ONLY_LETTERS_REGEX.test(name)) throw new Error('name has to contain letters');
        this.name = capitalize(name);
    }

    public setSurname(surname: string) {
        // atliekamos validacijos, patikrinimai,formavimas
        if (surname.length < 3) throw new Error('surname cannot be less than 3 symbols');
        if (surname === '') throw new Error('surname cannot be empty string');
        if (!Person.ONLY_LETTERS_REGEX.test(surname)) throw new Error('surname has to contain letters');
        this.surname = capitalize(surname);
    }

    public setAge(age: number) {
        if (age < 1) throw new Error('age cannot be less than 0');
        if (age > 150) throw new Error('age cannot be higher than 120');
        if (Math.round(age) !== age) throw new Error('age has to be a solid number');
        this.age = age;
    }

    public setHeight(height: number, units: HeightUnits = HeightUnits.CENTIMETERS) {
        switch (units) {
            case HeightUnits.CENTIMETERS: this.height = height; break;
            case HeightUnits.METERS: this.height = height * 100; break;
            case HeightUnits.INCHES: this.height = height * 2.54; break;
            default: break;
        }
    }

    public setWeight(weight: number, units: WeightUnits = WeightUnits.KILOGRAMS) {
        switch (units) {
            case WeightUnits.KILOGRAMS: this.weight = weight; break;
            case WeightUnits.MASS: this.weight = weight * 2.20; break;
            default: break;
        }
    }

    public getAge() {
        return this.age;
    }

    public getHeight() {
        switch (Person.heightUnits) {
            case HeightUnits.CENTIMETERS: return this.height;
            case HeightUnits.METERS: return this.height / 100;
            case HeightUnits.INCHES: return this.height / 2.54;
            default: return this.height;
        }
    }

    public getWeight() {
        switch (Person.weightUnits) {
            case WeightUnits.KILOGRAMS: return this.weight;
            case WeightUnits.MASS: return this.weight / 2.20;
            default: return this.weight;
        }
    }

    public getFullName() {
        return `${this.name} ${this.surname}`;
    }

    public toString(): string {
        let newPerson = `${this.name} ${this.surname} `;
        newPerson += `${this.height} ${Person.heightUnits} `;
        newPerson += `${this.getWeight()} ${Person.weightUnits}`;
        return newPerson;
    }
}

const people: Person[] = [
    new Person('Serbentautas', 'Nordiuras', 20, 160, 50, HeightUnits.CENTIMETERS, WeightUnits.KILOGRAMS),
    new Person('Vabalas', 'Neratis', 19, 20, 195, HeightUnits.CENTIMETERS, WeightUnits.MASS),
    new Person('Juozas', 'Cukrinis', 19, 70, 40, HeightUnits.CENTIMETERS),
];

console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const fullnames: string[] = people.map((p) => p.getFullName());
    console.log(fullnames);
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const ages: number[] = people.map((p) => p.getAge());
    console.log(ages);
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    const heights: number[] = people.map((p) => p.getHeight());
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
// ````````````````````````````````` Namu Darbai ```````````````````````````````````````````
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    Person.weightUnits = WeightUnits.KILOGRAMS;
    console.log(people.map((p) => p.getWeight()));

    Person.weightUnits = WeightUnits.MASS;
    console.log(people.map((p) => p.getWeight()));
}
console.groupEnd();

console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
// ````````````````````````````````` Namu Darbai ```````````````````````````````````````````

Person.weightUnits = WeightUnits.KILOGRAMS;
const printOnEachLine: string[] = people.map((p) => p.toString());
console.log(...printOnEachLine);
console.groupEnd();
