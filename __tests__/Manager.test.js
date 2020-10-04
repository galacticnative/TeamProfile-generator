const Manager = require('../lib/Manager.js');

test('create office number', () => {
    const manager = new Manager('officeNumber');

    expect(manager.name).toBe('officeNumber');
});