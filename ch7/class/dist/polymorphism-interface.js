// polymorphism-interface
class PoiceOfficer {
    constructor() {
        this.getAlias = () => 'happy';
    }
    getAge() {
        return 10;
    }
    hasClub() {
        return true;
    }
}
let pliceMan = new PoiceOfficer();
console.log(pliceMan.getAlias());
console.log(pliceMan.getAge());
