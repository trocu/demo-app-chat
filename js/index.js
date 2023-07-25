const conversation = document.querySelector('#messages');
const button = document.querySelector('#send');
// const nameInput = document.querySelector('#alias');
// const messageInput = document.querySelector('#message');
const form = document.querySelector('#form');

// form.addEventListener('input', e => {
//   console.log(message.value);
//   console.log(alias.value);
// });

window.onload = () => {
  fetchMessage().then(message => renderMessage(message));
};

button.addEventListener('click', () => {
  const {
    elements: { name, message },
  } = form;

  const messages = { name: `${name.value}`, message: `${message.value}` };
  // console.log(form.elements.name.value);
  // console.log(form.elements.message.value);
  postMessage(messages);
  fetchMessage().then(message => renderMessage(message));
});

// const addMessage = message => {
//   message.insertAdjacentHTML('beforeend', `<h4>${message.name}</h4> <p>${message.message}</p>`);
// };

const fetchMessage = () => {
  return fetch('http://localhost:3000/messages')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
};

const postMessage = message => {
  return fetch('http://localhost:3000/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return;
    })
    .catch(error => console.log(error));
};

const renderMessage = messages => {
  const markup = messages
    .map(message => {
      return `<h4>${message.name}</h4> <p>${message.message}</p>`;
    })
    .join('');
  conversation.innerHTML = markup;
  // conversation.insertAdjacentHTML('beforeend', markup);
};

const socket = io();
// socket.on('message', fetchMessage());
