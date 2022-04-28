
const Engineer = require('../lib/Engineer');

// add engineer tests name, id, email, github, get role

  test('create engineer object name', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getName()).toBe('Grace');
  });
  
  test('Set email with constructor', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getEmail()).toBe('g@email.com');
  });

  test('Set id with constructor', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getId()).toBe('4');
  });

  test('Set getGithub() with constructor', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getGithub()).toBe('github2');
  });

  test('getRole() should return Engineer', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getRole()).toBe('Engineer');
  });