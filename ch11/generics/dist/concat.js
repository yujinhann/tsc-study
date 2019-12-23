// 1
function concat(strs, strs2) {
    return strs + strs2;
}
console.log(concat(10, 100));
console.log(concat('abc', 1));
console.log(concat('abc', true));
// 2
function concat2(strs, strs2) {
    return strs + strs2;
}
console.log(concat2('abc', '1'));
console.log(concat2('abc', '123'));
// 3
function concat3(strs, strs2) {
    console.log(typeof strs, strs);
    console.log(typeof strs2, strs2);
    return String(strs) + String(strs2);
}
concat3('abc', '123');
concat3('abc', '123');
function concat5(strs, strs2) {
    return strs + strs2;
}
console.log(concat5('abc', '123'));
function concat6(strs, strs2) {
    return strs + strs2;
}
console.log(concat6('abc', 123));
