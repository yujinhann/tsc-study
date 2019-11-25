class SingleTypeChecker {
    constructor() { }
    typeCheck(value) {
        console.log(`${typeof value} : ${value}`);
    }
}
class UnionTypeChecker extends SingleTypeChecker {
    constructor() {
        super();
    }
    typeCheck(value) {
        if (typeof value === 'number') {
            console.log('ㅅㅜㅅㅈㅏ : ', value);
        }
        else if (typeof value === 'string') {
            console.log('ㅁㅜㄴㅈㅏㅇㅕㄹ : ', value);
        }
        else {
            console.log('ㄱㅣㅌㅏ : ', value);
        }
    }
}
let unionTypeChecker = new UnionTypeChecker();
unionTypeChecker.typeCheck(123);
unionTypeChecker.typeCheck('happy');
