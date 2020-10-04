const Employee = require('../lib/Employee.js');

test('creates an employee name', () => {
    const employee = new Employee('name');
  
    expect(employee.name).toBe('name');
});

test('creates employee id', () => {
    const employee = new Employee('id');
    
    expect(employee.name).toBe('id');
});

test('creates employee email', () => {
    const employee = new Employee('email');

    expect(employee.name).toBe('email');
});