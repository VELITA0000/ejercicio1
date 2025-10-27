import express, { static as static_ } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { engine } from 'express-handlebars';

dotenv.config();

import database from '../database.json';
import routes from './app/routes';

import swaggerJsDoc from 'swagger-jsdoc';
import { setup, serve } from 'swagger-ui-express';
import swaggerOptions from './../swagger.config';
import { dbConnect } from './database';

import { ejemplo } from './app/ejemplo2/ejemplo';
import { index } from './app/ejemplo1';
import { Server } from 'http';
import { Server as socketServer } from 'socket.io';


const PORT = process.env.PORT || 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

console.log('Ejemplo 1 sin poner en la ruta el nombre del archivo index:', index);
console.log('Ejemplo 2 poniendo la ruta con el nombre del archivo:', ejemplo);

app.use(routes);

app.use('/static', static_(path.join(__dirname, '..', 'public')));

app.get('', (req, res) => {
console.log("Database: ", database);
  // res.send("API works");
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index', {
    nombre: "Velita",
    usuarios: [
      { id: 1, nombre: "pablo" },
      { id: 2, nombre: "juan" }
    ]
  }); 
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', serve, setup(swaggerDocs));

dbConnect().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
  
  const io = new socketServer(server, {
    cors: { 
      origin: '*'
    }
  })

  io.on('connection', (socket) => {
    console.log('Se creo nueva conexion')
  })

}).catch(() => {
  console.log('Error al conectarse a la base de datos')
})
