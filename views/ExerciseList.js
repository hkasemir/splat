import React from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, StyleSheet} from 'react-native';
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

  componentDidMount() {
    storageHelper.getExercises().then(exercises => {
      console.log(exercises)
      this.props.receiveExercises(exercises);
    });
  }

  navigate = (exercise) => {
    const {navigation} = this.props;
    navigation.navigate('ExerciseView', {exercise})
  }

  renderExerciseListIem = ({item}) => {
    const {exercises, navigation} = this.props;
    return <ExerciseListItem key={item} exercise={exercises[item]} onPress={this.navigate}/>
  }

  render() {
    const {exercises} = this.props;
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
      <View style={[styles.homeView]}>
        <FlatList
          style={{alignSelf: 'stretch'}}
          data={exerciseNames}
          renderItem={this.renderExerciseListIem}
          keyExtractor={item => item}
        />
      </View>
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
