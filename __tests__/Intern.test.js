const Intern = require('../lib/Intern');

// add intern tests name, id, email, school and role
  test("Set school via constructor", () => {
    const testValue = "OSU";
    const intern = new Intern("Joe", 1, "joe@emai.com", testValue);
    expect(intern.school).toBe(testValue);
  });
  
  test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const intern = new Intern("Joe", 1, "joe@emai.com", "OSU", testValue);
    expect(intern.getRole()).toBe(testValue);
  });
  
  test("Set name via constructor", () => {
    const testValue = "Joe";
    const intern = new Intern(testValue, 1, "joe@emai.com", "OSU");
    expect(intern.name).toBe(testValue);
  });

  test("Set email via constructor", () => {
    const testValue = "joe@email.com";
    const intern = new Intern("Joe", 1, testValue, "OSU");
    expect(intern.email).toBe(testValue);
  });

  test("Set id via constructor", () => {
    const testValue = "1";
    const intern = new Intern("Joe", testValue, "joe@email.com", "OSU");
    expect(intern.id).toBe(testValue);
  });