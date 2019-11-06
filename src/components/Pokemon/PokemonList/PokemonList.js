import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadListAction } from '../../../actions';

const limit = 20;
const extractPokemonIDFromURL = (url) => (url.split('/')[6]);

const PokemonList = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const { results: pokemonList } = useSelector((state) => (state.currentPokemonList));
  useEffect(() => {
    dispatch(loadListAction(limit, offset));
  }, [dispatch, offset]);

  return (
    <div>
      <ul data-testid="pokemon-list-list">
        {pokemonList.map((pokemon, index) => (
          <li data-testid={`pokemon-list-item-${index}`} key={index}>
            <Link to={`/pokemons/${pokemon.name}`}>
              <img alt="pokemon_sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonIDFromURL(pokemon.url)}.png`} />
              {pokemon.name}
            </Link>
          </li>))}
      </ul>
      <button data-testid="pokemon-list-next-button" onClick={() => setOffset(offset + limit)}>Next</button>
      <button data-testid="pokemon-list-prev-button" onClick={() => setOffset(offset - limit)}>Prev</button>
    </div>
    
  );
};

export default PokemonList;
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png