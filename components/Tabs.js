import {TabNavigator} from 'react-navigation';
import ExerciseList from '../views/ExerciseList';
import NewExercise from '../views/NewExercise';

export default TabNavigator({
  ExerciseList: {
    screen: ExerciseList,
    navigationOptions: {
      tabBarLabel: 'Exercises'
    }
  },
  NewExercise: {
    screen: NewExercise,
    navigationOptions: {
      tabBarLabel: 'New Exercise'
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
