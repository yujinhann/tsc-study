function myIndexOf2(x: number | string, y: string) {
    if (typeof x === 'string') {
        return x.indexOf(y);
    } else {
        return -1;
    }
}

console.log(myIndexOf2('hello', 'e'));
console.log(myIndexOf2(1, 'e'));
