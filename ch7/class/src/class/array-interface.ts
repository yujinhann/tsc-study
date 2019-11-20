// step 1
let person = [
    { name1: 'a', city1: 'seoul' },
    { name2: 'b', city2: 'daejeon' },
    { name3: 'c', city3: 'daegu' },
];

console.log('step1', JSON.stringify(person));

// stpe 2
let person2: { name: string, city: string }[];
person2 = [
    { name: 'a', city: 'seoul' },
    { name: 'b', city: 'daejeon' },
    { name: 'c', city: 'daegu' },
];

console.log('step2', JSON.stringify(person2));

// step 3
class Person3 {
    public full: string;
    constructor(public name: string, public city: string) {
        this.full = `${name}(${city})`;
    }
}

let person3: Person3[] = [
    new Person3('kim', 'seoul'),
    new Person3('park', 'daejeon'),
    new Person3('jeong', 'daegu'),
];

console.log('step3', JSON.stringify(person3));

// step 4
interface Person {
    name: string;
    city: string;
}

let person4: Person[] = [
    { name: 'a', city: 'seoul' },
    { name: 'b', city: 'daejeon' },
    { name: 'c', city: 'daegu' },
];

console.log('step4', JSON.stringify(person4));

// step 5
interface PersonItems extends Array<Person> {}

let person5: PersonItems = [
    { name: 'a', city: 'seoul' },
    { name: 'b', city: 'daejeon' },
    { name: 'c', city: 'daegu' },
];

console.log('step5', JSON.stringify(person5));
