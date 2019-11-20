class PC {
    constructor(hddCapacity) {
        this.hddCapacity = hddCapacity;
        this.ram = '0G';
    }
    set ramCapacity(value) { this.ram = value; }
    get ramCapacity() { return this.ram; }
    getHddCapacity() {
        return this.hddCapacity;
    }
}
class Desktop extends PC {
    constructor(hddCapacity) {
        super(hddCapacity);
        this.hddCapacity = hddCapacity;
    }
    getInfo() {
        console.log('1 HDD ㅇㅛㅇㄹㅑㅇ : ', super.getHddCapacity(), super.hddCapacity);
        console.log('2 HDD ㅇㅛㅇㄹㅑㅇ : ', this.getHddCapacity(), this.hddCapacity);
        this.hddCapacity = '2000G';
        console.log('3 HDD ㅇㅛㅇㄹㅑㅇ : ', super.getHddCapacity(), super.hddCapacity);
        console.log('4 HDD ㅇㅛㅇㄹㅑㅇ : ', this.getHddCapacity(), this.hddCapacity);
        super.ramCapacity = '16G';
        console.log('5 RAM ㅇㅛㅇㄹㅑㅇ : ', this.ramCapacity, super.ramCapacity);
        this.ramCapacity = '8G';
        console.log('5 RAM ㅇㅛㅇㄹㅑㅇ : ', this.ramCapacity, super.ramCapacity);
    }
}
let myDesktop = new Desktop('1000G');
myDesktop.getInfo();
