
const Engineer = require('../lib/Engineer');

// add tests name, id, email, github, get role

test('create an engineer object', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getName()).toBe('Grace');
  });
// add test email and id
  test('create an engineer object', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getGithub()).toBe('github2');
  });

  test('create an engineer object', () => {
    const engineer = new Engineer('Grace','4','g@email.com', 'github2');
    expect(engineer.getRole()).toBe('Engineer');
  });