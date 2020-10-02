const Manager = require('../lib/Manager.js');

test('creates a manager', () => {
    const manager = new Manager('name');
  
    expect(manager.name).toBe('name');
});