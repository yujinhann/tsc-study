class SingleTypeChecker {
    constructor() {}
    typeCheck(value: string): void {
        console.log(`${typeof value} : ${value}`);
    }
}

class UnionTypeChecker extends SingleTypeChecker {
    constructor() {
        super();
    }

    typeCheck(value: number): void;
    typeCheck(value: string): void;
    typeCheck(value: any): void {
        if (typeof value === 'number') {
            console.log('ㅅㅜㅅㅈㅏ : ', value);
        } else if (typeof value === 'string') {
            console.log('ㅁㅜㄴㅈㅏㅇㅕㄹ : ', value);
        } else {
            console.log('ㄱㅣㅌㅏ : ', value);
        }
    }
}

let unionTypeChecker = new UnionTypeChecker();
unionTypeChecker.typeCheck(123);
unionTypeChecker.typeCheck('happy');
