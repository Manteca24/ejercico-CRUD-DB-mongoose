const express = require('express');
const {dbConnection} = require('./config/config');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = 5000;

dbConnection(); // Conectar a la base de datos

app.use(express.json()); 

app.use('/tasks', tasksRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});