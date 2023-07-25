// const bootstrap = require('bootstrap');

// const addMessage = message => {
//   const heading = document.createElement('h4');
//   heading.textContent = message.name;
//   const text = document.createElement('p');
//   text.textContent = message.message;
//   document.querySelector('#message').append(heading, text);
// };
const addMessage = message => {
  const msg = document.querySelector('#message');
  msg.insertAdjacentHTML('beforeend', `<h4>${message.name}</h4> <p>${message.message}</p>`);
};

addMessage({ name: 'Tim', message: 'hello' });
