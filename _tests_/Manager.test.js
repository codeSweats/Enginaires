const Manager = require('../lib/Manager');

test('Could instantiate Manager and set up officeNumber by a constructor', () => {
    const officeNum = 12
    const manager = new Manager('John', 35, 'john@john.com', officeNum);
    expect(manager.officeNum).toBe(manager);
});

test('Could get Manager as output for getRole', () => {
    const name = "Sean";
    const manager = new Manager(name, 25, 'a@b.com', 'gitHuUser-j');
    expect(manager.getRole()).toBe("Manager");
});