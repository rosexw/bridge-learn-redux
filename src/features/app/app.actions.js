import { APP_LOAD } from './app.types';
import { FETCH_POKEMONS } from '../pokemon-list/pokemon-list.types';

export const createAppLoadAction = () => ({
  type: APP_LOAD,
});

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS.START,
});
