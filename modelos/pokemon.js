const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Todos os tipos de pokémon em ENUM
const TipoEnum = [
    'Normal', 'Fogo', 'Água', 'Elétrico', 'Grama', 'Gelo', 'Lutador', 'Veneno',
    'Terra', 'Voador', 'Psíquico', 'Inseto', 'Pedra', 'Fantasma', 'Dragão', 'Sombrio',
    'Aço', 'Fada'
    
];

const Pokemon = sequelize.define('Pokemon', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  tipo: {
    type: DataTypes.ENUM,
    values: TipoEnum,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING, // URL da imagem
    allowNull: false,
  }
}, {
  tableName: 'pokemons',
  timestamps: false,
});

module.exports = Pokemon;
