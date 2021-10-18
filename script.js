const container = document.querySelector('#container');

const first = document.createElement('p');
first.style.cssText = 'color: red;';
first.textContent = 'Hey, I am red';
container.appendChild(first);

const second = document.createElement('h3');
second.style.cssText = 'color: blue';
second.textContent = 'Hey, I am blue h3';
container.appendChild(second);

const third = document.createElement('div');
third.style.cssText = 'background-color: pink';
third.style.cssText = 'border-color: black';


const third1 = document.createElement('h1');
third1.textContent = 'Hey, I am in a div!';
third.appendChild(third1);

const third2 = document.createElement('p');
third2.textContent = 'me too!';
third.appendChild(third2);

container.appendChild(third);