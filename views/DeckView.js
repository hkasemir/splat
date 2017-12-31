import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: #fff;
  align-self: stretch;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 8px;
`;

export default function DeckView({navigation}) {
  const {deck} = navigation.state.params;
  return (
    <View>
      <Text>Deck View {deck}</Text>
      <StyledButton onPress={() => navigation.navigate('Quiz', {deck})}>
        <Text>Start Quiz</Text>
      </StyledButton>
      <StyledButton onPress={() => navigation.navigate('NewQuestion', {deck})}>
        <Text>Add Question</Text>
      </StyledButton>
    </View>
  );
}

