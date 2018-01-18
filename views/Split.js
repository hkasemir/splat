import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {makeExerciseKey} from '../helpers/storage-helper';
import styled from 'styled-components/native';

const mapStateToProps = (state) => ({
  exercises: state.exercises
});

@connect(mapStateToProps)
export default class Quiz extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {exercise} = navigation.state.params;
    return {
      title: `${exercise.title} quiz`
    };
  }

  render() {
    const {title} = this.props.navigation.state.params.exercise;
    const exercise = this.props.exercises[makeExerciseKey(title)];
    return (
      <View>
        <Text>Split</Text>
      </View>
    );
  }
}

