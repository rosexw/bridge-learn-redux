import { connect } from 'react-redux';
import { App } from './app.component';
import { fetchPokemons } from './app.actions';
import { isNil } from 'ramda';
import { createShowNotificationAction } from '../../components/notification/notification.action';
import { NOTIFICATION_LEVELS } from '../../components/notification/notification.types';

const mapStateToProps = ({ pokemon }) => ({
  hasFavouritePokemon: !isNil(pokemon.favouritePokemon),
  favouritePokemon: pokemon.favouritePokemon,
});

// Todo: remove mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchPokemons()),
  showNotification: () =>
    dispatch(
      createShowNotificationAction({
        level: NOTIFICATION_LEVELS.WARNING,
        message: 'test',
      }),
    ),
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
