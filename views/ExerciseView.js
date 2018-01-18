import React from 'react';
import {connect} from 'react-redux'
import {View, Text} from 'react-native';
import {makeExerciseKey} from '../helpers/storage-helper';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: #fff;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

const Title = styled.Text`
  font-size: 30px;
  color: purple;
  align-self: center;
`;

const SubTitle = styled.Text`
  font-size: 24px;
  color: gray;
  align-self: center;
  margin-bottom: 30px;
`;

const mapStateToProps = (state) => ({
  exercises: state.exercises
});

@connect(mapStateToProps)
export default class ExerciseView extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {exercise} = navigation.state.params;
    return {
      title: `${exercise.title}`
    };
  }

  render() {
    const {
      navigation: {
        navigate,
        state: {
          params: {
            exercise: {
              title
            }
          }
        }
      },
      exercises
    } = this.props;
    const exercise = exercises[makeExerciseKey(title)];
    return (
      <View>
        <Title>{title}</Title>
        <SubTitle>{exercise.best || 'No measurements recorded'}</SubTitle>
        { exercise.best &&
          <StyledButton onPress={() => navigate('Split', {exercise})}>
            <Text>Split</Text>
          </StyledButton>
        }
        <StyledButton onPress={() => navigate('NewMeasurement', {exercise})}>
          <Text>Add Measurement</Text>
        </StyledButton>
      </View>
    );
  }
}
