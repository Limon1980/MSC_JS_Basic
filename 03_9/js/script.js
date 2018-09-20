console.log('You are at '+window.location);

const body = document.querySelector('body');
console.log(body.hasAttribute('bgcolor'));

const page = document.querySelector('.page');
console.log(page);

const name = document.querySelector('span.name');
console.log(name);

const image = document.querySelector('img');
console.log(image);

const shortBio = document.querySelector('.shortBio');
console.log(shortBio);

let questcolorboby = prompt('Какой ты хочешь цвет boby?');
body.setAttribute('bgcolor', questcolorboby);

let questcolortext = prompt('Какой ты хочешь цвет текста?');
page.style['color'] = questcolortext;

let questname = prompt('Как вас зовут?');
name.innerHTML = questname;

let questimage = prompt('Адрес картинки?');
image.setAttribute('src', questimage);

let shortBioText = prompt('Текст shortBio?');
shortBio.innerHTML = shortBioText;