function myIndexOf2(x, y) {
    if (typeof x === 'string') {
        return x.indexOf(y);
    }
    else {
        return -1;
    }
}
console.log(myIndexOf2('hello', 'e'));
console.log(myIndexOf2(1, 'e'));
