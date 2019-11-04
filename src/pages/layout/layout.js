import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PokemonDetail, PokemonList } from '../../components/Pokemon';

const Layout = () => (
  <div>
    <Switch>
      <Route exact path="/pokemons" component={PokemonList} />
      <Route exact path="/pokemons/:pokemonName" component={PokemonDetail} />
    </Switch>
  </div>
);

export default Layout;
