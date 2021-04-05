const Intern = require('../lib/Intern');

test('Could instantiate Intern and set up school by a constructor', () => {
    const school = 'Rice U'
    const intern = new Intern('John', 35, 'john@john.com', school);
    expect(intern.school).toBe(intern);
});

test('Could get Intern as output for getRole', () => {
    const name = "Sean";
    const intern = new Intern(name, 25, 'a@b.com', 'gitHuUser-j');
    expect(intern.getRole()).toBe("Intern");
});

test('Could get school via getschool method', () => {
    const name = "Francis";
    const intern = new Intern(name, 13, 'b@c.com', 'Rice U');
    expect(intern.getschool()).toBe('Rice U');
})