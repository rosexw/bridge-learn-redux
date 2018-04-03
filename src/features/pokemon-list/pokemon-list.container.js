import { ClickableList } from '../../components/clickable-list';
import { connect } from 'react-redux';
import { createUpdateFavouritePokemonAction } from './pokemon-list.actions';

const mapStateToProps = state => ({
  data: state.pokemon.list.map(item => ({
    title: item.name,
  })),
  isLoadingList: state.pokemon.isLoadingList,
});

const mapDispatchToProps = dispatch => ({
  onClickItem: item => dispatch(createUpdateFavouritePokemonAction(item.title)),
});

export const PokemonListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClickableList);
