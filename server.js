const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const http = require('http').Server(app);
const io = require('socket.io')(http);

const cardRandomizer = require('./src/helpers/cardRandomizer');

/* eslint-disable no-console */
app.get('/ping', (req, res) =>
  res.send('pong'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('cards', cardRandomizer().slice(0, 12));

  socket.on('cardAction', (payload) => {
    /*
    * payload example:
    * { action: 'putCard', type: 'diamond', number: '3' }
    * or
    * { action: 'foldCard', type: 'spade', number: '4' }
    */
    console.log(payload);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.listen(process.env.PORT || 8080);
