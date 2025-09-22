import express from 'express';
import database from '../database.json';
import routes from './app/routes';
import { ejemplo } from './app/ejemplo2/ejemplo'
import { index } from './app/ejemplo1'

const PORT = 3000;

const app = express();

console.log('Ejemplo 1 sin poner en la ruta el nombre del archivo index:', index);
console.log('Ejemplo 2 poniendo la ruta con el nombre del archivo:', ejemplo);

app.use(routes);

app.get('', (req, res) => {
  console.log("Database: ", database);
  res.send("API works");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
