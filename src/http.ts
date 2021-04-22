import express from 'express';
import { createServer } from 'http';
import path from 'path';

import { Server , Socket } from 'socket.io';

import './database';
import routes from './routes';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());

const http = createServer(app);
const io = new Server(http);

app.get('/pages/client', (request, response) => {
  return response.render('html/client.html');
})

io.on('connection', (socket: Socket) => {
  console.log('Se conectou', socket.id);
});

app.use(routes);

export { http, io };