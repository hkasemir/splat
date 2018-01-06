import React from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, Animated, StyleSheet} from 'react-native';
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

  state = {
    animOpacity: new Animated.Value(1)
  }

  componentDidMount() {
    storageHelper.getDecks().then(decks => {
      this.props.dispatch(receiveDecks(decks));
    });
  }

  animateThenNavigate = (deck) => {
    const {navigation} = this.props;
    const {animOpacity} = this.state;

    Animated.timing(
      animOpacity,
      {toValue: 0}
    ).start(() => {
      navigation.navigate('DeckView', {deck})
      Animated.timing(
        animOpacity,
        {toValue: 1}
      ).start()
    });
  }

  renderDeckListItem = ({item}) => {
    const {decks, navigation} = this.props;
    return <DeckListItem key={item} deck={decks[item]} onPress={this.animateThenNavigate}/>
  }

  render() {
    const {decks} = this.props;
    const {animOpacity} = this.state;
    const deckNames = Object.keys(decks);
    if (deckNames.length === 0) {
      return (
        <View style={styles.homeView}>
          <Text style={styles.emptyText}>No Decks Yet!</Text>
          <Text style={styles.emptyText}>Add one by selecting 'New Deck'</Text>
        </View>
      )
    }
    return (
      <Animated.View style={[styles.homeView, {opacity: animOpacity}]}>
        <FlatList
          style={{alignSelf: 'stretch'}}
          data={deckNames}
          renderItem={this.renderDeckListItem}
          keyExtractor={item => item}
        />
      </Animated.View>
    );
  }
}


const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  emptyText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 30,
    color: 'gray'
  }
});
