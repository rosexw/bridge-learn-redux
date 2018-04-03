import React from 'react';
import { PokemonCard } from '../pokemon-card/pokemon-card.component';
import { PokemonListContainer } from '../pokemon-list/pokemon-list.container';
import { Button } from '../../components/button';
import { NotificationContainer } from '../../components/notification/notification.container';

export const App = ({
  fetchPokemons,
  hasFavouritePokemon,
  favouritePokemon,
  showNotification, // Todo: remove
}) => (
  <div>
    <h1>Pokemon App!</h1>
    <NotificationContainer />
    <Button onClick={showNotification}>Show Notification</Button>
    {/* Todo: remove the Show Notification Button */}
    <Button onClick={fetchPokemons}>Refresh List</Button>
    {hasFavouritePokemon && <PokemonCard pokemonName={favouritePokemon} />}
    <PokemonListContainer />
  </div>
);
