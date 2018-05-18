const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const http = require('http').Server(app);
// const io = require('socket.io')(http);

app.get('/ping', (req, res) =>
  res.send('pong'));

// io.on('connection', (socket) => {
// // console.log('a user connected');
//   socket.on('disconnect', () => {
//   // console.log('user disconnected');
// });
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.listen(process.env.PORT || 8080);
