import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadListAction } from '../../../actions';

const limit = 20;

const PokemonList = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const {results: pokemonList } = useSelector((state) => (state.currentPokemonList));
  useEffect(() => {
    dispatch(loadListAction(limit, offset));
  }, [dispatch, offset]);

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon, index) => (<li key={index}><Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link></li>))}
      </ul>
      <button onClick={() => setOffset(offset + limit)}>Next</button>
      <button onClick={() => setOffset(offset - limit)}>Prev</button>
    </div>
    
  );
};

export default PokemonList;
