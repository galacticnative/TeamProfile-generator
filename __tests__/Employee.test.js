const Employee = require('../lib/Employee.js');

test('creates an employee name', () => {
    const employee = new Employee('name');
  
    expect(employee.name).toBe('name');
    expect(employee.value).toEqual(expect.any(String));
});

test('creates employee id', () => {
    const employee = new Employee('id');
    
    expect(employee.name).toBe('id');
    expect(employee.value).toEqual(expect.any(String));
});

test('creates employee email', () => {
    const employee = new Employee('email');

    expect(employee.name).toBe('email');
    expect(employee.value).toEqual(expect.any(String));
});