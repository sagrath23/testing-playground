import request from 'superagent';

const config = {
  pokeApiBaseUrl: 'https://pokeapi.co/api/v2'
};

export const listPokemons = async (listUrl) => {
  const response = await request.get(listUrl).set('Access-Control-Allow-Origin', '*');

  return JSON.parse(response.text);
};

export const getPokemon = async (pokemonName) => {
  const response = await request.get(`${config.pokeApiBaseUrl}/api/pokemons/${pokemonName}/`);

  return JSON.parse(response.text);
};
