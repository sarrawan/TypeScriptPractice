"use strict";
exports.__esModule = true;
var greeter_1 = require("./greeter");
test('student full name contains first, middle, and last name', function () {
    var user = new greeter_1.Student("Jane", "M.", "User");
    console.log("we are here");
    expect(user.fullName).toBe("Jane M. User");
});
test('only first and last name printed when greeted', function () {
    var user = new greeter_1.Student("first", "m", "last");
    expect(greeter_1.greeter(user)).toBe("Hello, first last");
});
//# sourceMappingURL=greeter.spec.js.map