const { Sequelize } = require('sequelize');

// Conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize('pokemonDB', 'postgres', 'show2016', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
