// polymorphism-interface

interface IPerson {
    height: number;
    getAlias: () => string;
    getAge(): number;
}

class PoiceOfficer implements IPerson {
    height: number;
    getAlias = () => 'happy';
    getAge(): number {
        return 10;
    }
    hasClub() {
        return true;
    }
}

let pliceMan: IPerson = new PoiceOfficer();
console.log(pliceMan.getAlias());
console.log(pliceMan.getAge());
