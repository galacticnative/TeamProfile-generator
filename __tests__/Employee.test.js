const Employee = require('../lib/Employee.js');

test('creates an employee name', () => {
    const employee = new Employee('name');
  
    expect(employee.name).toBe('name');
    expect(employee.value).toEqual(expect.any(String));
});