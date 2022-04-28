const Employee = require('../lib/Employee');

// add employee tests name, id, email, role

test('create an employee object', () => {
  const employee = new Employee('Grace','4','g@email.com');
  expect(employee.getName()).toBe('Grace');
});

test('Set email with constructor', () => {
  const employee = new Employee('Grace','4','g@email.com');
  expect(employee.getEmail()).toBe('g@email.com');
});

test('Set id with constructor', () => {
  const employee = new Employee('Grace','4','g@email.com');
  expect(employee.getId()).toBe('4');
});

test('getRole() should return employee', () => {
  const employee = new Employee('Grace','4','g@email.com');
  expect(employee.getRole()).toBe('Employee');
});

