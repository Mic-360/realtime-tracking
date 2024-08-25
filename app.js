const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();

const server = http.createServer(app);

const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.on('sendLocation', (coords) => {
    io.emit('locationMessage', {
      id: socket.id,
      ...coords,
    });
  });

  socket.on('disconnect', () => {
    io.emit('removeLocation', {
      id: socket.id,
    });
  });
});

app.get('/', (req, res) => {
  res.render('index');
});

server.listen(3000, () => {
  setTimeout(() => {
    console.log('Server is running on http://localhost:3000');
  }, 1000);
});
