import { OK } from 'http-status-code';
import nock from 'nock';
import { getPokemon, listPokemons } from './pokeApiService';

const config = {
  pokeApiBaseUrl: 'https://pokeapi.co/api/v2'
};

// este es un ejemplo básico de un unit test con un mock
describe('PokeApi Services', () => {
  describe('listPokemons service', () => {
    const pokemonList = {
      count: 964,
      next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
      previous:null,
      results: []
     };

    beforeEach(() => {
      // un mock me permite simular la respuesta de la API con un valor que yo defino
      // para evaluar el comportamiento de mi código
      nock(config.pokeApiBaseUrl).get('/pokemon/').reply(OK, pokemonList);
    });

    test('should retrieve a list of pokemons', async () => {
      const response = await listPokemons(20, 0);

      expect(response).toEqual(pokemonList);
    });
  });
  
  describe('getPokemon service', () => {
    const pokemonName = 'pikachu';
    const pokemonDetail = {
      id: 24,
      height: 4,
      name: pokemonName
     };

    beforeEach(() => {
      nock(config.pokeApiBaseUrl).get(`/api/pokemons/${pokemonName}/`).reply(OK, pokemonDetail);
    });

    test('should retrieve the info of a specific pokemon', async () => {
      const response = await getPokemon(pokemonName);

      expect(response).toEqual(pokemonDetail);
    });
  });
});