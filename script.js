const container = document.querySelector('#container');

const first = document.createElement('p');
first.style.cssText = 'color: red;';
first.textContent = 'Hey, I am red';

container.appendChild(first);