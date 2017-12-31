import { TabNavigator } from 'react-navigation';
import DeckList from '../views/DeckList';
import NewDeck from '../views/NewDeck';

export default TabNavigator({
  deckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Quiz Decks'
    }
  },
  newDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }},
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'purple',
      indicatorStyle: {
        backgroundColor: 'purple'
      },
      style: {
        height: 56,
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  });
