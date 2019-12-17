// uppertype-subtype.ts
let objectUpper = { a: 'a', b: 'b' };
let objectSub = { a: 'a', b: 'b', c: 'c' };
objectUpper = objectSub;
// objectSub = objectUpper;
console.log(objectUpper);
