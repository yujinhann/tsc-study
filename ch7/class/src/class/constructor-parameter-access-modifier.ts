// constructor-parameter-access-modifier

class Cube {
    constructor(public width: number, private length: number, protected height: number) {}

    getVolume() {
        return this.width * this.length * this.height;
    }
}

let [cWidth, cLength, cHeight] = [1, 2, 3];
let cube = new Cube(cWidth, cLength, cHeight);
console.log('ㅅㅔㄹㅗ : ', cube.width, 'cm');
console.log('ㅂㅜㅍㅣ : ', cube.getVolume(), 'ml');
