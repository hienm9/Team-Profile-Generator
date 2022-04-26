
const Engineer = require('../lib/Engineer');

// add tests name, id, email, github, get role

test('create engineer object ', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getName()).toBe('Grace');
  });
// add test email and id
  test('Set getGithub() with constructor', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getGithub()).toBe('github2');
  });

  test('Set engineer with constructor', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getRole()).toBe('Engineer');
  });