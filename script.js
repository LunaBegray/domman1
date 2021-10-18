const container = document.querySelector('#container');

const first = document.createElement('p');
first.style.cssText = 'color: red;';
first.textContent = 'Hey, I am red';

container.appendChild(first);

const second = document.createElement('h3')
second.style.cssText = 'color: blue';
first.textContent = 'Hey, I am blue h3';

container.appendChild(second);