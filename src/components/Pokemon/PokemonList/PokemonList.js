import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Col, ListGroup, ListGroupItem } from 'reactstrap';
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
    <Col>
      <ListGroup data-testid="pokemon-list-list">
        {pokemonList.map((pokemon, index) => (
          <ListGroupItem data-testid={`pokemon-list-item-${index}`} key={index}>
            <Link to={`/pokemons/${pokemon.name}`}>
              <img alt="pokemon_sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonIDFromURL(pokemon.url)}.png`} />
              {pokemon.name}
            </Link>
          </ListGroupItem>))}
      </ListGroup>
      <ButtonGroup>
        <Button data-testid="pokemon-list-prev-button" onClick={() => setOffset(offset - limit)}>Prev</Button>
        <Button data-testid="pokemon-list-next-button" onClick={() => setOffset(offset + limit)}>Next</Button>
      </ButtonGroup>
    </Col>
    
  );
};

export default PokemonList;
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png