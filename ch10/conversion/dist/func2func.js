let funcUpper = (a) => a;
let funcSub = (a, b) => a + b;
funcSub = funcUpper;
// funcUpper = funcSub;
console.log(`${funcSub('hello', 'world')}`);
