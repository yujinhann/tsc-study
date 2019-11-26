// read-only
class TestReadonly {
    constructor() {
        this.count4 = 0;
    }
    getCount() {
        // this.count4 = 0;
        // readonly count5: number = 0;
    }
}
function getCount() {
    // readonly count: number;
}
let literalObj = { alias: 'happy' };
