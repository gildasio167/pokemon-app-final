const express = require('express');
const Pokemon = require('./modelos/pokemon');
const sequelize = require('./config/database');
const pokemonRoutes = require('./rotas/pokemonRotas');

const app = express();
app.use(express.json());

// Usar as rotas
app.use('/api', pokemonRoutes);

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});