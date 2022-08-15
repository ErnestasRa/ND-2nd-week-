/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
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

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  type PersonNameAndMarriageStatus = {
    name: Person['name'],
    surname: Person['surname'],
    married: Person['married']
  }

  const printPersonNameAndMarriageStatus = ({
    married,
    name,
    surname,
  }: Person): PersonNameAndMarriageStatus => ({
    name: String(name),
    surname: String(surname),
    married: Boolean(married),
  });

  const result: PersonNameAndMarriageStatus[] = people.map(printPersonNameAndMarriageStatus);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  type PeopleArrWithSexAndMoney = {
    sex: Person['sex'],
    income: Person['income']
  }

  const printPeopleArrWithSexAndMoney = ({ sex, income }: Person): PeopleArrWithSexAndMoney => ({
    sex,
    income: Number(income),
  });

  const result: PeopleArrWithSexAndMoney[] = people.map(printPeopleArrWithSexAndMoney);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type PeopleArrNamesSexSurname = {
    name: Person['name'],
    surname: Person['surname'],
    sex: Person['sex']
  }

  const printPplSexNameSurname = ({ name, sex, surname }: Person): PeopleArrNamesSexSurname => ({
    name: String(name),
    surname: String(surname),
    sex,
  });

  const result: PeopleArrNamesSexSurname[] = people.map(printPplSexNameSurname);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  type OnlyMen = Omit<Person, 'male'> & {
    sex: 'male';
  }

  const printAllMen = ({ sex }: Person): Boolean => sex === 'male';
  const allMen: OnlyMen[] = people.filter(printAllMen) as OnlyMen[];
  console.log(allMen);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  type allFemales = Omit<Person, 'female'> & {
    sex: 'female'
  }

  const printAllFemales = ({ sex }: Person): Boolean => sex === 'female';
  const females: allFemales[] = people.filter(printAllFemales) as allFemales[];
  console.log(females);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  type PersonHasACar = Pick<Person, 'hasCar'>

  const printPeopleWithCars = ({ hasCar }: Person): Boolean => hasCar === true;
  const hasCars: PersonHasACar[] = people.filter(printPeopleWithCars) as PersonHasACar[];

  console.log(hasCars);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  type IsMarried = Pick<Person, 'married'>

  const printIsMarried = ({ married }: Person): Boolean => married === true;

  const result: IsMarried[] = people.filter(printIsMarried) as IsMarried [];
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  type HasLicense = {
    [Key in Person['sex']]? : number
  }

  const printHasLicense = (result: HasLicense, person: Person): HasLicense => {
    if (!person.hasCar) return result;

    const personSexExist = Boolean(result[person.sex]);
    if (!personSexExist) result[person.sex] = 0;

    result[person.sex] = result[person.sex] as number + 1;

    return result;
  };

  const drivingPeople: HasLicense = people.reduce(printHasLicense, {});
  console.log(drivingPeople);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type FromIncomeToSalary = Omit<Person, 'income'> & {
    salary?: Person['income']
  }

  const printChangedToSalary = ({ income, ...other }: Person): FromIncomeToSalary => {
    const result: FromIncomeToSalary = { ...other };
    if (income) {
      result.salary = income;
    }
    return result;
  };

  const newWord: FromIncomeToSalary[] = people.map(printChangedToSalary);

  console.log(newWord);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
 type NoSexNoNameNoSurname = Omit<Person, 'sex' | 'name' | 'surname'>
 const printNoSexNoNameNoSurname = ({
   sex,
   name,
   surname,
   ...other
 }
   : Person): NoSexNoNameNoSurname => ({
   ...other,
 });

 const result: NoSexNoNameNoSurname[] = people.map(printNoSexNoNameNoSurname);
 console.log(result);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type SumNameAndSurname = Omit<Person, 'name' | 'surname' > & {
    fullname: `${Person['name']} ${Person['surname']}`
  }

  const printSumNameAndSurname = ({ name, surname, ...other }: Person): SumNameAndSurname => ({
    ...other,
    fullname: `${name} ${surname}`,
  });

  const fullnamer: SumNameAndSurname[] = people.map(printSumNameAndSurname);
  console.log(fullnamer);
}
console.groupEnd();
