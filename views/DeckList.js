import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
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

  render() {
    const {navigation, decks} = this.props;
    const deckNames = Object.keys(decks);
    return (
      <HomeView>
        {
          deckNames.map(title => (
            <DeckListItem key={title} deck={decks[title]} onPress={(deck) => navigation.navigate('DeckView', {deck})}/>
          ))
        }
      </HomeView>
    );
  }
}
