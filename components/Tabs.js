import { TabNavigator } from 'react-navigation';
import Decks from '../views/Decks';
import NewDeck from '../views/NewDeck';

export default TabNavigator({
  decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  newDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
});
