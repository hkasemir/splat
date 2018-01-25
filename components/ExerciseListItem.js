import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const ExerciseCard = styled.TouchableOpacity`
  background-color: #fff;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

export default function ExerciseListItem({onPress, exercise}) {
  return (
    <ExerciseCard onPress={() => onPress(exercise)}>
      <Text>{exercise.title}</Text>
      {
        exercise.best
        ?
        <Text>{exercise.best} {exercise.units}</Text>
        :
        <Text>No measurements yet</Text>
      }
    </ExerciseCard>
  );
}
