import React from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import HomeView from '../components/HomeView';
import DeckListItem from '../components/DeckListItem.js';
import storageHelper from '../helpers/storage-helper';

export default class DeckList extends React.Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    storageHelper.getDecks().then(decks => {
      this.setState({decks});
    });
  }

  render() {
    const {navigation} = this.props;
    const {decks} = this.state;
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
