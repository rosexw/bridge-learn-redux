import 'rxjs/add/operator/mergeMap'; // important: make sure you import whichever rxjs operator you want to use
import { Observable } from 'rxjs';

import { SHOW_NOTIFICATION } from '../../components/notification/notification.types'
import { FETCH_POKEMONS } from './pokemon-list.types';
import { cleanPokemonRequest } from '../../utils/pokemonRequest';
import { createShowNotificationAction, createHideNotificationAction, newMessageAction } from '../../components/notification/notification.action';
import { APP_LOAD } from '../app/app.types';
import { fetchPokemons } from '../app/app.actions';

export const fetchPokemonsEpic = action$ =>
  action$.ofType(FETCH_POKEMONS.START).mergeMap(action =>
    cleanPokemonRequest('pokemon')
      .map(results => ({
        type: FETCH_POKEMONS.SUCCESS,
        payload: results,
      }))
      .catch(error =>
        Observable.of({ type: FETCH_POKEMONS.FAILURE, payload: error }),
      ),
  );

  export const appLoadEpic = action$ => 
    action$.ofType(APP_LOAD).map(fetchPokemons);

  export const showNotificationEpic = action$ =>
    action$.ofType(FETCH_POKEMONS.SUCCESS).map(() =>
      createShowNotificationAction({
        message: 'you are successful',
        level: 'success'
    })
  )

  export const newMessageEpic = action$ =>
    action$.ofType(FETCH_POKEMONS.SUCCESS).map(() =>
    newMessageAction({
      message: 'new pokemon',
      level: 'success'
    })
  )

  export const hideNotificationEpic = action$ =>
    action$
    .ofType(SHOW_NOTIFICATION)
    .delay(2000)
    .map(createHideNotificationAction)