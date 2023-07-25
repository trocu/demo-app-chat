const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
const rootPath = path.join(__dirname, '..');
// const publicPath = path.join(rootPath, 'js');

const server = http.listen(port, () => {
  console.log('Server is listening on port', server.address().port);
});

// io.on('connection', socket => {
//   console.log('User connected');
//   socket.on('message', data => {
//     console.log('Message received', data);
//   });
// });

io.on('connection', () => {
  console.log('User connected');
});

// server.listen(port);
// console.log('Server is listening on port', server.address().port);

const messages = [
  { name: 'Tim', message: 'hello' },
  { name: 'Jane', message: 'hi' },
];

app.use(express.static(rootPath));
app.use(bodyParser.json());

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  messages.push(req.body);
  io.emit('message', req.body);
  res.sendStatus(200);
});
