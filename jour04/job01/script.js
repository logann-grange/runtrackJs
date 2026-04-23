function expression() {
  fetch('expression.txt')
    .then(response => {
      if (!response.ok) throw new Error('Fichier introuvable');
      return response.text();
    })
    .then(text => {
      const p = document.createElement('p');
      p.textContent = text;
      const result = document.getElementById('result');
      result.innerHTML = '';
      result.appendChild(p);
    })
    .catch(err => {
      const p = document.createElement('p');
      p.textContent = 'Erreur : ' + err.message;
      document.getElementById('result').appendChild(p);
    });
}

let button = document.getElementById('button');

button.addEventListener('click', () => {
  expression();
});
