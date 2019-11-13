let person = {
    name: 'happy',
    hello: function (name2) {
        console.log('hello, ' + this.name + name2);
    }
};
person.hello('World');
let typedPerson = {
    name: 'happy',
    hello: function (name2) {
        let message = `hello, ${this.name + name2}`;
        return message;
    }
};
console.log(typedPerson.hello('world'));
