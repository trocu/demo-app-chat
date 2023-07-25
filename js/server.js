const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const rootPath = path.join(__dirname, '..');
// const publicPath = path.join(rootPath, 'js');

app.use(express.static(rootPath));
const server = app.listen(port, () => {
  console.log('Server is listening on port', server.address().port);
});

// app.get('./index.js', (req, res) => {
//   res.set('Content-Type', 'application/javascript');
//   res.sendFile('http://localhost:3000/js/index.js');
// });
