const express = require('express');
const router = express.Router();
const Pokemon = require('../modelos/pokemon');

// Rota POST para adicionar um Pokémon
router.post('/pokemons', async (req, res) => {
  try {
    const { nome, numero, tipo, imagem } = req.body;
    const pokemon = await Pokemon.create({ nome, numero, tipo, imagem });
    res.status(201).json(pokemon); // 201 = Created
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao adicionar Pokémon' }); // 500 = Internal Server Error
  }
});

// Rota GET para retornar todos os Pokémons
router.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll(); // Buscar todos os Pokémons
    res.status(200).json(pokemons); // 200 = OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao recuperar Pokémons' }); // 500 = Internal Server Error
  }
});

// Rota GET para retornar um Pokémon pelo ID
router.get('/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id); // '/pokemons/:id'
    if (pokemon) {
      res.status(200).json(pokemon); // 200 = Pokémon encontrado
    } else {
      res.status(404).json({ error: 'Pokémon não encontrado' }); // 404 = Not Found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao recuperar Pokémon' });  // 500 = Internal Server Error
  }
});

// Rota PUT para atualizar um Pokémon
router.put('/pokemons/:id', async (req, res) => { // '/pokemons/:id'
  try {
    const { nome, numero, tipo, imagem } = req.body;
    const pokemon = await Pokemon.findByPk(req.params.id); 
    if (pokemon) {
      await pokemon.update({ nome, numero, tipo, imagem }); // Atualizar o Pokémon
      res.status(200).json(pokemon); // 200 = OK
    } else {
      res.status(404).json({ error: 'Pokémon não encontrado' });  // 404 = Not Found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Pokémon' }); // 500 = Internal Server Error
  }
});

// Rota DELETE para remover um Pokémon
router.delete('/pokemons/:id', async (req, res) => { // '/pokemons/:id'
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (pokemon) {
      await pokemon.destroy(); // Remover o Pokémon
      res.status(204).send(); // 204 = No Content = Removido e sem conteúdo
    } else {
      res.status(404).json({ error: 'Pokémon não encontrado' }); // 404 = Not Found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao remover Pokémon' }); // 500 = Internal Server Error
  }
});

module.exports = router; // Exportar as rotas
