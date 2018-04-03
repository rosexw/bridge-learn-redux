import React from 'react';
import { PokemonCard } from '../pokemon-card/pokemon-card.component';
import { PokemonListContainer } from '../pokemon-list/pokemon-list.container';
import { Button } from '../../components/button';

export const App = ({
  fetchPokemons,
  hasFavouritePokemon,
  favouritePokemon,
}) => (
  <div>
    <h1>Pokemon App!</h1>
    <Button onClick={fetchPokemons}>Refresh List</Button>
    {hasFavouritePokemon && <PokemonCard pokemonName={favouritePokemon} />}
    <PokemonListContainer />
  </div>
);
