import { Student, greeter } from './greeter';
import {} from 'jest';


test('student full name contains first, middle, and last name', () => {
    let user = new Student("Jane", "M.", "User");
    console.log("we are here");
    expect(user.fullName).toBe("Jane M. User");
});

test('only first and last name printed when greeted', () => {
    let user = new Student("first", "m", "last");
    expect(greeter(user)).toBe("Hello, first last");
});

