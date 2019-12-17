// class2hierarcy.ts
class Person {
}
class Member extends Person {
}
class Admin extends Member {
}
class MemberCard {
}
let admin = new Admin();
admin = new MemberCard();
