console.log('You are at '+window.location);

const body = document.querySelector('body');
console.log(body);
console.log(body.hasAttribute('background-color'));

let questcolorboby = prompt('Какой ты хочешь цвет boby?');
body.setAttribute('background-color', questcolorboby);

let questcolortext = prompt('Какой ты хочешь цвет текста?');
body.setAttribute('color', questcolortext);