const Employee = require('../lib/Employee');

// add tests

test('create an employee object', () => {
  const employee = new Employee('Grace','4','g@email.com');
  expect(employee.getName()).toBe('Grace');
});

test('create an employee object2', () => {
  const employee = new Employee('Grace','4','g@email.com');
  expect(employee.getEmail()).toBe('g@email.com');
});

test('create an employee object3', () => {
  const employee = new Employee('Grace','4','g@email.com');
  expect(employee.getId()).toBe('4');
});

test('create an employee object3', () => {
  const employee = new Employee('Grace','4','g@email.com');
  expect(employee.getRole()).toBe('Employee');
});