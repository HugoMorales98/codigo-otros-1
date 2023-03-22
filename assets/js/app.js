const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { // se debe agregar "async" antes del parámetro de la función
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response); // se debe usar la variable "response" en lugar de "data"
  const data = await response.json(); // se debe esperar la respuesta en formato JSON
  $n.textContent = `${data.name}`; // se deben usar comillas invertidas en lugar de comillas simples
  $b.textContent = `${data.blog}`; // se deben usar comillas invertidas en lugar de comillas simples
  $l.textContent = `${data.location}`; // se deben usar comillas invertidas en lugar de comillas simples
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // se debe usar "$n" en lugar de "n"
}

displayUser('stolinski').catch(handleError);