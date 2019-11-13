// 배열 합치기
let arr: number[] = [1, 2];
let arr2: number[] = [...arr, 3, 4];
console.log('1 : ', arr2);

// 배열 디스트럭처링
let [firstItem, ...rest]: [number, number, number] = [10, 20, 30];
console.log('2 : ', firstItem);
console.log('3 : ' , rest);
console.log('4 : ' , rest[0]);
