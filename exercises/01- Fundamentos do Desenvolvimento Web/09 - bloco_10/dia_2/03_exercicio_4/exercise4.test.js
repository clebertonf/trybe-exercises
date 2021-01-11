const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('Teste para retornar nodes de repositorios', () => {
    const url = 'https://api.github.com/users/tryber/repos';
  
    return getRepos(url).then(result => {
      expect(result).toContain('enterprise-bridge-panel');
      expect(result).toContain('challenge-bug-hunting-youtrybe-squad-1');
    });
  });