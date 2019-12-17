class Duck {
    speak() {
        console.log('Quak!');
    }
    swim() {
        console.log('Duck swimming');
    }
}

class Goose {
    speak() {
        console.log('Squawk!');
    }
    swim() {
        console.log('Goose swimming');
    }
}

function swim(obj) {
    obj.speak();
    obj.swim();
}

let duck = new Duck();
let goose = new Goose();
swim(duck);
swim(goose);

interface DuckGoose {
    speak();
    swim();
}

function swim2(obj: DuckGoose) {
    obj.speak();
    obj.swim();
}

swim2(duck);
swim2(goose);
