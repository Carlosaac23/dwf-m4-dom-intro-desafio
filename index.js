const cosasQueAprendimos = [
  {
    tema: 'terminal',
    class: '',
  },
  {
    tema: 'node',
    class: '',
  },
  {
    tema: 'oop',
    class: '',
  },
  {
    tema: 'typescript',
    class: '',
  },
  {
    tema: 'css',
    class: '',
  },
  {
    tema: 'dom',
    class: 'special',
  },
];

function main() {
  const lista = document.querySelector('.lista');
  lista.innerHTML = '';

  for (const item of cosasQueAprendimos) {
    const newLi = document.createElement('li');
    newLi.textContent = item.tema;
    lista.appendChild(newLi);
  }
}

main();
