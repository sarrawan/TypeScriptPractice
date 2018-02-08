"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
exports.Student = Student;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
exports.greeter = greeter;
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
//document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map