import React from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import HomeView from '../components/HomeView';
import DeckListItem from '../components/DeckListItem.js';
import storageHelper from '../helpers/storage-helper';
import {receiveDecks} from '../actions';

const mapStateToProps = (state) => ({
  decks: state.decks
});

@connect(mapStateToProps)
export default class DeckList extends React.Component {
  static defaultProps = {
    decks: {}
  }

  componentDidMount() {
    storageHelper.getDecks().then(decks => {
      this.props.dispatch(receiveDecks(decks));
    });
  }

  renderDeckListItem = ({item}) => {
    const {decks, navigation} = this.props;
    return <DeckListItem key={item} deck={decks[item]} onPress={(deck) => navigation.navigate('DeckView', {deck})}/>
  }

  render() {
    const {decks} = this.props;
    const deckNames = Object.keys(decks);
    return (
      <HomeView>
        <FlatList
          style={{alignSelf: 'stretch'}}
          data={deckNames}
          renderItem={this.renderDeckListItem}
        />
      </HomeView>
    );
  }
}
