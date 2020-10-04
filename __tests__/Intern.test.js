const Intern = require('../lib/Intern');
const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('create school name', () => {
    const manager = new Manager('school');

    expect(manager.name).toBe('school');
});