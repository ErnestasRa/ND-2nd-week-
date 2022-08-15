"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const printPersonNameAndMarriageStatus = ({ married, name, surname, }) => ({
        name: String(name),
        surname: String(surname),
        married: Boolean(married),
    });
    const result = people.map(printPersonNameAndMarriageStatus);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const printPeopleArrWithSexAndMoney = ({ sex, income }) => ({
        sex,
        income: Number(income),
    });
    const result = people.map(printPeopleArrWithSexAndMoney);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const printPplSexNameSurname = ({ name, sex, surname }) => ({
        name: String(name),
        surname: String(surname),
        sex,
    });
    const result = people.map(printPplSexNameSurname);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const printAllMen = ({ sex }) => sex === 'male';
    const allMen = people.filter(printAllMen);
    console.log(allMen);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const printAllFemales = ({ sex }) => sex === 'female';
    const females = people.filter(printAllFemales);
    console.log(females);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const printPeopleWithCars = ({ hasCar }) => hasCar === true;
    const hasCars = people.filter(printPeopleWithCars);
    console.log(hasCars);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const printIsMarried = ({ married }) => married === true;
    const result = people.filter(printIsMarried);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const printHasLicense = (result, person) => {
        if (!person.hasCar)
            return result;
        const personSexExist = Boolean(result[person.sex]);
        if (!personSexExist)
            result[person.sex] = 0;
        result[person.sex] = result[person.sex] + 1;
        return result;
    };
    const drivingPeople = people.reduce(printHasLicense, {});
    console.log(drivingPeople);
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const printChangedToSalary = ({ income, ...other }) => {
        const result = { ...other };
        if (income) {
            result.salary = income;
        }
        return result;
    };
    const newWord = people.map(printChangedToSalary);
    console.log(newWord);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const printNoSexNoNameNoSurname = ({ sex, name, surname, ...other }) => ({
        ...other,
    });
    const result = people.map(printNoSexNoNameNoSurname);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const printSumNameAndSurname = ({ name, surname, ...other }) => ({
        ...other,
        fullname: `${name} ${surname}`,
    });
    const fullnamer = people.map(printSumNameAndSurname);
    console.log(fullnamer);
}
console.groupEnd();
//# sourceMappingURL=main.js.map