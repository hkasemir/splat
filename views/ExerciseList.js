import React from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, Animated, StyleSheet} from 'react-native';
import ExerciseListItem from '../components/ExerciseListItem';
import storageHelper from '../helpers/storage-helper';
import {receiveExercises} from '../actions';

const mapStateToProps = (state) => ({
  exercises: state.exercises
});

const mapDispatchToProps = {
  receiveExercises
};

@connect(mapStateToProps, mapDispatchToProps)
export default class ExerciseList extends React.Component {
  static defaultProps = {
    exercises: {}
  }

  state = {
    animOpacity: new Animated.Value(1)
  }

  componentDidMount() {
    storageHelper.getExercises().then(exercises => {
      this.props.receiveExercises(exercises);
    });
  }

  animateThenNavigate = (exercise) => {
    const {navigation} = this.props;
    const {animOpacity} = this.state;

    Animated.timing(
      animOpacity,
      {toValue: 0}
    ).start(() => {
      navigation.navigate('ExerciseView', {exercise})
      Animated.timing(
        animOpacity,
        {toValue: 1}
      ).start()
    });
  }

  renderExerciseListIem = ({item}) => {
    const {exercises, navigation} = this.props;
    return <ExerciseListItem key={item} exercise={exercises[item]} onPress={this.animateThenNavigate}/>
  }

  render() {
    const {exercises} = this.props;
    const {animOpacity} = this.state;
    const exerciseNames = Object.keys(exercises);
    if (exerciseNames.length === 0) {
      return (
        <View style={styles.homeView}>
          <Text style={styles.emptyText}>No Exercises Yet!</Text>
          <Text style={styles.emptyText}>Add one by selecting 'New Exercise'</Text>
        </View>
      )
    }
    return (
      <Animated.View style={[styles.homeView, {opacity: animOpacity}]}>
        <FlatList
          style={{alignSelf: 'stretch'}}
          data={exerciseNames}
          renderItem={this.renderExerciseListIem}
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
