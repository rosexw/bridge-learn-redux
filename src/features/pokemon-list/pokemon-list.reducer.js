import { UPDATE_FAVOURITE_POKEMON, FETCH_POKEMONS } from './pokemon-list.types';

// Some features need their own reducer, like this one!

const INITIAL_STATE = {
  list: [],
  favouritePokemon: null,
  isLoadingList: false,
};

export const pokemonReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_FAVOURITE_POKEMON:
      return { ...state, favouritePokemon: payload.pokemonName };

    case FETCH_POKEMONS.START:
      return { ...state, list: [], isLoadingList: true };

    case FETCH_POKEMONS.SUCCESS:
      return { ...state, list: payload.results, isLoadingList: false };

    case FETCH_POKEMONS.FAILURE:
      return { ...state, list: [], isLoadingList: false };

    default:
      return state;
  }
};
