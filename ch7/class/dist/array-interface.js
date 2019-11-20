// step 1
let person = [
    { name1: 'a', city1: 'seoul' },
    { name2: 'b', city2: 'daejeon' },
    { name3: 'c', city3: 'daegu' },
];
console.log('step1', JSON.stringify(person));
// stpe 2
let person2;
person2 = [
    { name: 'a', city: 'seoul' },
    { name: 'b', city: 'daejeon' },
    { name: 'c', city: 'daegu' },
];
console.log('step2', JSON.stringify(person2));
// step 3
class Person3 {
    constructor(name, city) {
        this.name = name;
        this.city = city;
        this.full = `${name}(${city})`;
    }
}
let person3 = [
    new Person3('kim', 'seoul'),
    new Person3('park', 'daejeon'),
    new Person3('jeong', 'daegu'),
];
console.log('step3', JSON.stringify(person3));
let person4 = [
    { name: 'a', city: 'seoul' },
    { name: 'b', city: 'daejeon' },
    { name: 'c', city: 'daegu' },
];
console.log('step4', JSON.stringify(person4));
let person5 = [
    { name: 'a', city: 'seoul' },
    { name: 'b', city: 'daejeon' },
    { name: 'c', city: 'daegu' },
];
console.log('step5', JSON.stringify(person5));
