const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');

test ('create github', () => {
    const manager = new Manager('github');

    expect(manager.name).toBe('github');
});