import {StackNavigator} from 'react-navigation';
import Tabs from './Tabs';
import DeckList from '../views/DeckList';
import Quiz from '../views/Quiz';
import DeckView from '../views/DeckView';
import NewQuestion from '../views/NewQuestion';

export default StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckList: {
    screen: DeckList,
  },
  DeckView: {
    screen: DeckView
  },
  Quiz: {
    screen: Quiz
  },
  NewQuestion: {
    screen: NewQuestion
  }
});
