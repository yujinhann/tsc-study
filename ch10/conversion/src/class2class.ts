class Animal {
    name: number;
    constructor(name: string, weight: number) {}
}

class Bird {
    name: number;
    constructor(speed: number) {}
}

let animal: Animal = new Animal('happy', 100);
let bird: Bird = new Bird(10);

animal = bird;
bird = animal;
