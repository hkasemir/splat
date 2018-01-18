import {StackNavigator} from 'react-navigation';
import Tabs from './Tabs';
import ExerciseList from '../views/ExerciseList';
import Split from '../views/Split';
import ExerciseView from '../views/ExerciseView';
import NewMeasurement from '../views/NewMeasurement';

export default StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  ExerciseView: {
    screen: ExerciseView
  },
  Split: {
    screen: Split
  },
  NewMeasurement: {
    screen: NewMeasurement
  }
});
