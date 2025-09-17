import express from 'express';
import database from '../database.json';
import routes from './app/routes';

const PORT = 3000;

const app = express();

app.use(routes);

app.get('', (req, res) => {
  console.log("Database: ", database);
  res.send("API works");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
