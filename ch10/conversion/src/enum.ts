enum EastAsia1 { korea = 88, china = 86, japan = 81 }
enum EastAsia2 { korea = 88, china = 86, japan = 81 }

let east1: EastAsia1 = EastAsia1.china;
let east2: EastAsia2 = EastAsia2.korea;
// let east3: EastAsia1 = EastAsia2.korea;

east1 = 1000;
east2 = 2000;

console.log(`east1=${east1} ${typeof east1}`);
console.log(`east2=${east2} ${typeof east2}`);
