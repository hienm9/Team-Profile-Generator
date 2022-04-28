const Manager = require('../lib/Manager');

// add tests name, id, email, officeNumber, role

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const manager = new Manager("Joe", 1, "joe@test.com", testValue);
  expect(manager.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const manager = new Manager("Joe", 1, "joe@test.com", 100);
  expect(manager.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const manager = new Manager("Joe", 1, "joe@test.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});
