let person = {
    name: 'happy',
    hello: function (name2: string) {
        console.log('hello, ' + this.name + name2);
    }
};
person.hello('World');

interface PersonType {
    name: string;
    hello(this: PersonType, name2: string): string;
}

let typedPerson: PersonType = {
    name: 'happy',
    hello: function (this: PersonType, name2: string): string {
        let message = `hello, ${this.name + name2}`;
        return message;
    }
};

console.log(typedPerson.hello('world'));
