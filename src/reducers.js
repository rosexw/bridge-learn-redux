import { combineReducers } from 'redux';
import { pokemonReducer } from './features/pokemon-list/pokemon-list.reducer';
import { notificationReducer } from './components/notification/notification.reducer';

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  notification: notificationReducer,
});
