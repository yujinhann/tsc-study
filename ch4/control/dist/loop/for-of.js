// 이터러블 객체가 문자열인 경우
for (let value of 'hi') {
    console.log(value);
}
// 이터러블 객체가 배열인 경우
for (const value of [1, 2, 3]) {
    console.log(value);
}
// map : es2015
let itMap = new Map([['one', 1], ['one', 2]]);
itMap.set('one', 3);
for (let entry of itMap) {
    console.log(entry);
}
console.log(itMap.get('one'));
// map : es5
let map = {};
map['one'] = 1;
map['one'] = 2;
map['one'] = 3;
for (let entry in map) {
    console.log(entry);
}
console.log(map['one']);
// set : es2015
console.log('--set--');
let itSet = new Set(['a', 'b', 'c', 'd', 'a', 'b', 'c']);
for (let value of itSet) {
    console.log(value);
}
