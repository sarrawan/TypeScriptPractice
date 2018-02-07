const greet = require('./greeter')

test('student full name contains first, middle, and last name', () => {
    let user = new greet.Student("Jane", "M.", "User");
    expect(user.fullName).toBe("Jane M. User");
});

test('only first and last name printed when greeted', () => {
    let user = new greet.Student("first", "m", "last");
    expect(greet.greeter(user)).toBe("Hello, first last");
})