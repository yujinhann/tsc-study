// polymorphism.ts
class Led {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return 'LED => ' + this.name;
    }
}
class Oled {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return 'OLED => ' + this.name;
    }
}
class MonitorDisplayTest {
    display(monitor) {
        let myMonitor = monitor;
        return myMonitor.getName();
    }
}
let displayTest = new MonitorDisplayTest();
console.log(`${displayTest.display(new Led('LED TV'))}`);
console.log(`${displayTest.display(new Oled('OLED TV'))}`);
