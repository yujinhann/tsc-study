// constructor-parameter-access-modifier
class Cube {
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
    }
    getVolume() {
        return this.width * this.length * this.height;
    }
}
let [cWidth, cLength, cHeight] = [1, 2, 3];
let cube = new Cube(cWidth, cLength, cHeight);
console.log('ㅅㅔㄹㅗ : ', cube.width, 'cm');
console.log('ㅂㅜㅍㅣ : ', cube.getVolume(), 'ml');
