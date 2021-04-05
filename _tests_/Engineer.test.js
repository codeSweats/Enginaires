const G = require('glob');
const { S } = require('xmlchars/xml/1.0/ed5');
const Employee = require('../lib/Employee');

test('Could instantiate Engineer and set up gitHub by a constructor', () => {
    const gitHub = 'gitHubUserId'
    const engr = new Engineer('John', 35, 'john@john.com', gitHub);
    expect(engr.gitHub).toBe(engr);
});

test('Could get Engineer as output for getRole', () => {
    const name = "Sean";
    const engr = new Engineer(name, 25, 'a@b.com', 'gitHuUser-j');
    expect(engr.getRole()).toBe("Engineer");
});

test('Could get gitHub user name via getGitHub method', () => {
    const name = "Francis";
    const engr = new Engineer(name, 13, 'b@S.com', 'gitHubUser-b');
    expect(engr.getGitHub()).toBe('gitHubUser-b');
})