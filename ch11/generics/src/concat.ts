// 1
function concat(strs: any, strs2: any): any {
    return strs + strs2;
}

console.log(concat(10, 100));
console.log(concat('abc', 1));
console.log(concat('abc', true));

// 2
function concat2(strs: string, strs2: string): string {
    return strs + strs2;
}

console.log(concat2('abc', '1'));
console.log(concat2('abc', '123'));

// 3
function concat3<T>(strs: T, strs2: T) {
    console.log(typeof strs, strs);
    console.log(typeof strs2, strs2);
    return String(strs) + String(strs2);
}
concat3('abc', '123');
concat3<string>('abc', '123');

// 5
function concat5<T>(strs: T, strs2: T): T;
function concat5(strs: any, strs2: any) {
    return strs + strs2;
}

console.log(concat5<string>('abc', '123'));

// 6
function concat6<T extends string | number>(strs: T, strs2: T): T;
function concat6(strs: any, strs2: any) {
    return strs + strs2;
}

console.log(concat6<string | number>('abc', 123));
